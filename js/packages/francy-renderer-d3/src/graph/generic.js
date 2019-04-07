import { Decorators, Graph } from 'francy-core';

/* global d3 */

export default class GenericGraph extends Graph {

  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
  }

  @Decorators.Initializer.initialize()
  async render() {
    let self = this,
      loader = Decorators.Loader.withContext(this).show(),
      simulationActive = this.data.canvas.graph.simulation || this.context.configuration.object.simulation,
      canvasNodes = this.data.canvas.graph.nodes ? JSON.parse(JSON.stringify(Object.values(this.data.canvas.graph.nodes))) : [],
      canvasLinks = this.data.canvas.graph.links ? JSON.parse(JSON.stringify(Object.values(this.data.canvas.graph.links))) : [];

    let linkGroup = this.element.selectAll('g.francy-links');

    if (!linkGroup.node()) {
      linkGroup = this.element.append('g').classed('francy-links', true);
    }

    let links = linkGroup.selectAll('g.francy-link').data();
    let linksToAdd = this._filterNewElements(canvasLinks, links);

    let link = linkGroup.selectAll('g.francy-link').data(linksToAdd, d => d.id);

    if (this.data.canvas.graph.type === 'directed') {
      // this means we need arrows, so we append the markers
      let defs = this.parent.select('defs');
      if (!defs.node()) {
        defs = this.parent.append('defs');
      }
      defs.selectAll('marker')
        .data(linksToAdd)
        .enter().append('marker')
        .classed('francy-arrows', true)
        .attr('id', d => `arrow-${d.id}`)
        .attr('viewBox', '0 -5 10 10')
        .attr('markerUnits', 'strokeWidth')
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0,-5 L10,0 L0,5')
        .style('fill', d => d.color || '#000');
    }

    let nodeGroup = this.element.selectAll('g.francy-nodes');

    if (!nodeGroup.node()) {
      nodeGroup = this.element.append('g').classed('francy-nodes', true);
    }

    let nodes = nodeGroup.selectAll('g.francy-node').data();
    let nodesToAdd = this._filterNewElements(canvasNodes, nodes);

    let node = nodeGroup.selectAll('g.francy-node').data(nodesToAdd, d => d.id);

    // this means no changes, so we can safely return
    if (node.exit().data().length === 0 && node.enter().data().length === 0 &&
      link.enter().data().length === 0 && link.exit().data().length === 0) {
      loader.hide();
      return;
    }

    let linkEnter = link.enter().append('g')
      .classed('francy-link', true);

    linkEnter.append('path')
      .classed('francy-edge', true)
      .style('fill', 'none')
      .style('stroke-width', d => d.invisible ? 0 : Math.sqrt(d.weight || 0.2))
      .style('stroke', d => d.color || '#000');

    if (this.data.canvas.graph.type === 'directed') {
      linkEnter.append('path')
        .classed('francy-edge-arrow', true)
        .style('stroke', 'none')
        .style('marker-start', d => `url(#arrow-${d.id})`)
        .style('stroke-width', d => d.invisible ? 0 : Math.sqrt(d.weight || 0.2));
    }

    linkEnter.filter(d => d.title).append('text')
      .classed('francy-label', true)
      //.style('font - size', d => d.invisible ? 0 : 7 * Math.sqrt(d.weight || 1))
      .style('opacity', 0.1)
      .style('opacity', 0.1)
      .text(d => d.title)
      .attr('text-anchor', 'middle');

    link.exit().remove();

    link = linkGroup.selectAll('g.francy-link');

    // on mouse over show labels opacity 1
    //this.graphOperations.labelsOpacityBehavior(link);

    let nodeEnter = node.enter().append('g').attr('id', d => d.id)
      .classed('francy-node', true)
      .classed('francy-highlight', true)
      .classed('francy-selected', d => d.selected);

    nodeEnter.append('path')
      .attr('d', d3.symbol().type(d => Graph.getSymbol(d.type)).size(d => d.size * 100))
      .style('fill', d => d.conjugate ? Graph.colors(d.conjugate * 5) : d.color ? d.color : Graph.colors(d.layer * 5))
      .classed('francy-symbol', true)
      .classed('francy-context', d => Object.values(d.menus).length && Object.values(d.menus).length > 0);

    nodeEnter.filter(d => d.title).append('text')
      .classed('francy-label', true)
      .text(d => d.title)
      .style('font-size', d => 5 * Math.sqrt(d.size))
      .attr('x', function () {
        // apply mathjax if this is the case
        let text = d3.select(this);
        if (text.text().startsWith('$') && text.text().endsWith('$')) {
          // we need to set the position after re-render the latex
          self.handlePromise(self.mathjax.settings({
            appendTo: { element: text },
            renderType: 'SVG',
            postFunction: () => {
              self.setLabelXPosition(this);
              simulation.restart();
            }
          }).render());
        }
        return self._getXPosition(this);
      });

    node.exit().remove();

    node = nodeGroup.selectAll('g.francy-node');

    if (simulationActive) {
      let radius = 0,
        symbolRadius = 0,
        ylayered = false,
        xlayered = false;

      node.each(function () {
        let bound = this.getBBox();
        // calculate default radius for colisions
        // check the widest group Bounding Box
        if (radius < bound.width) {
          radius = bound.width;
        }
        // check the widest path Bounding Box
        let node = d3.select(this);
        let symbolBound = node.select('path.francy-symbol').node().getBBox();
        if (symbolRadius < symbolBound.width) {
          symbolRadius = symbolBound.width;
        }
        // check whether the graph will be layered on y - hasse
        if (node.data()[0].layer != 0) {
          ylayered = true;
        }
        // check whether the graph will be layered on x
        if (node.data()[0].conjugate != 0) {
          xlayered = true;
        }
      });

      //Canvas Forces
      var simulation = d3.forceSimulation(),
        safeTicked = Decorators.Error.wrap(ticked).withContext(self).onErrorThrow(false).onErrorExec(simulation.stop),
        safeEnd = Decorators.Error.wrap(endSimulation).withContext(self);

      let linkForce = d3.forceLink(linksToAdd).id(d => d.id).distance(d => d.length || 100);
      let chargeStrength = -5 * Math.log(nodesToAdd.length) * Math.log(linksToAdd.length);
      chargeStrength = chargeStrength < -400 ? chargeStrength : -400;

      simulation.nodes(nodesToAdd)
        .force('charge-1', ylayered ? undefined : d3.forceManyBody().strength(chargeStrength * 0.15))
        .force('x', xlayered ? d3.forceX(d => d.conjugate ? +d.conjugate % 2 === 0 ? 0 : self.data.canvas.width : self.data.canvas.width / 2) : d3.forceX())
        .force('y', ylayered ? d3.forceY(d => +d.layer * 100).strength(1) : d3.forceY())
        .force('charge-2', d3.forceManyBody().strength(chargeStrength))
        //.force('link', ylayered ? linkForce.strength(d => d.weight ? Math.sqrt(d.weight) % 1 : 1 / (linksToAdd.length + 1)) : linkForce)
        .force('link', ylayered ? linkForce.strength(1 / (linksToAdd.length + 1)) : linkForce)
        .force('collide', d3.forceCollide().radius((radius > symbolRadius ? radius : symbolRadius * 1.5) / 2))
        .on('tick', () => safeTicked.handle())
        .on('end', () => safeEnd.handle());

      if (nodesToAdd.length >= 1000 || linksToAdd.length >= 1000) {
        self.parent.attr('visibility', 'hidden');
        simulation.alphaMin(0.05).on('tick', undefined);
      }

    } else {
      // well, simulation is off
      endSimulation();
    }

    function endSimulation() {
      self.parent.attr('visibility', 'visible');
      safeTicked.handle();
      self.parent.zoomToFit();
      loader.hide();
    }

    let edges = link.selectAll('path.francy-edge');
    let labels = link.selectAll('text.francy-label');

    function ticked() {
      edges
        .attr('d', function (d) {
          if (d.source.id === d.target.id) {
            return `M${d.source.x},${d.source.y} A${d.target.size + 10},${d.target.size + 10} -45,1,0 ${d.source.x - 1},${d.source.y}`;
          }
          return `M${d.source.x},${d.source.y} L${d.target.x},${d.target.y}`;
        });

      if (self.data.canvas.graph.type === 'directed') {
        link.each(function () {

          let g = d3.select(this),
            data = g.data()[0],
            nodeEl = d3.select(`#${data.target.id} > .francy-symbol`).node();

          if (!nodeEl) return;

          let pathEl = g.select('.francy-edge').node(),
            pathLength = pathEl.getTotalLength(),
            nodeSize = (Math.floor(nodeEl.getBBox().width) + 4) / 2,
            pathPoint = pathEl.getPointAtLength(pathLength - nodeSize - (data.weight || 1)),
            pathPoint2 = pathEl.getPointAtLength(pathLength - nodeSize),
            x1 = pathPoint.x,
            y1 = pathPoint.y,
            x2 = pathPoint2.x,
            y2 = pathPoint2.y;

          if (data.source.id === data.target.id) {
            x2 += (x1 - x2) / (y1 - y2);
            y2 += (y1 - y2) / (x1 - x2);
          }

          g.select('.francy-edge-arrow').attr('d', `M${x1},${y1} L${x2},${y2}`);
        });
      }

      labels
        .attr('x', d => Graph.linkXPos(d.target, d.source))
        .attr('y', d => Graph.linkYPos(d.target, d.source));

      node.attr('transform', d => `translate(${d.x},${d.y})`);
    }

    this.graphOperations.dragBehavior(node, simulation, simulationActive).call(this, this.context.configuration.object.dragNodes);

    if (node && !node.empty()) {

      this._applyEvents(node);

      let connectedNodes = self.graphOperations.connectedNodes(node, canvasNodes, link, canvasLinks);
      let nodeOnClick = node.on('click');
      node.on('click', function (d) {
        // default, highlight connected nodes
        connectedNodes.call(this);
        // any callbacks will be handled here
        nodeOnClick && nodeOnClick.call(this, d);
      });
      link.on('click', function () {
        // default, highlight connected nodes
        connectedNodes.call(this);
      });
    }

    return this;

  }

  _filterNewElements(canvasObjects, d3Element) {
    let newElements = [];
    canvasObjects.forEach(o => {
      let data = d3Element.find(d => d.id === o.id);
      let tmp = Object.assign({}, o);
      if (data) {
        // remove positions from old ones
        delete tmp.x;
        delete tmp.y;
        delete tmp.source;
        delete tmp.target;
        newElements.push(Object.assign(data, tmp));
      } else {
        delete o.x;
        delete o.y;
        newElements.push(o);
      }
    });
    return newElements;
  }
}
