import Graph from './graph';
import { Configuration } from '../../util/configuration';
import { Decorators } from '../../decorator/factory';

/* global d3 */

export default class GenericGraph extends Graph {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @Decorators.Initializer.initialize()
  async render() {
    let self = this,
      loader = Decorators.Loader.withContext(this).show(),
      simulationActive = this.data.canvas.graph.simulation || Configuration.object.simulation,
      canvasNodes = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [],
      canvasLinks = this.data.canvas.graph.links ? Object.values(this.data.canvas.graph.links) : [];

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
        .style('fill', d => d.color || undefined);
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
      .style('stroke-width', d => Math.sqrt(d.weight))
      .style('stroke', d => d.color || undefined);

    if (this.data.canvas.graph.type === 'directed') {
      linkEnter.append('path').classed('francy-edge-arrow', true)
        .style('stroke', 'none')
        .style('marker-start', d => `url(#arrow-${d.id})`)
        .style('stroke-width', d => Math.sqrt(d.weight));
    }

    linkEnter.append('text')
      .classed('francy-label', true)
      .style('font-size', d => 7 * Math.sqrt(d.weight))
      .style('opacity', 0.1)
      .style('opacity', 0.1)
      .text(d => d.title)
      .attr('text-anchor', 'middle');

    link.exit().remove();

    link = linkGroup.selectAll('g.francy-link');
    
    // on mouse over show labels opacity 1
    labelsOpacityBehavior();

    let nodeEnter = node.enter().append('g').attr('id', d => d.id)
      .classed('francy-node', true)
      .classed('francy-highlight', true);

    nodeEnter.append('path')
      .attr('d', d3.symbol().type(d => Graph.getSymbol(d.type)).size(d => d.size * 100))
      .style('fill', d => d.color || Graph.colors(d.layer * 5))
      .classed('francy-symbol', true)
      .classed('francy-selected', d => d.selected)
      .classed('francy-context', d => Object.values(d.menus).length && Object.values(d.menus).length > 0);

    nodeEnter.append('text')
      .classed('francy-label', true)
      .text(d => d.title)
      .style('font-size', d => 7 * Math.sqrt(d.size))
      .attr('x', function() {
        // apply mathjax if this is the case
        let text = d3.select(this);
        if (text.text().startsWith('$') && text.text().endsWith('$')) {
          // we need to set the position after re-render the latex
          self.handlePromise(self.mathjax.settings({appendTo: {element: text}, renderType: 'SVG', postFunction: () => {
            text.attr('x', self.setLabelXPosition(this));
            simulation.restart();
          }}).render());
        }
        return self.setLabelXPosition(this);
      });

    node.exit().remove();

    node = nodeGroup.selectAll('g.francy-node');

    if (Configuration.object.dragNodes) {
      // enable drag behavior
      enableDrag(true);
      // subscribe to update drag behavior on configuration change
      Configuration.subscribe('dragNodes', function(value){
        enableDrag(value);
      });
    }

    function enableDrag(enable) {
      node.call(d3.drag()
        .on('start', enable ? dragstarted : undefined)
        .on('drag', enable ? dragged : undefined)
        .on('end', enable ? dragended : undefined));
    }

    if (node && !node.empty()) {

      this._applyEvents(node);

      let nodeOnClick = node.on('click');
      node.on('click', function(d) {
        // default, highlight connected nodes
        connectedNodes.call(this);
        // any callbacks will be handled here
        nodeOnClick.call(this, d);
      });
      link.on('click', function() {
        // default, highlight connected nodes
        linkConnectedNodes.call(this);
        d3.event.preventDefault();
      });
    }

    if (simulationActive) {
      let radius = 0, 
        symbolRadius = 0, 
        layered = false;

      node.each(function() {
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
        // check whether the graph will be layered - hasse
        if (node.data()[0].layer != 0) {
          layered = true;
        }
      });

      //Canvas Forces
      var simulation = d3.forceSimulation(),
        safeTicked = Decorators.Error.wrap(ticked).withContext(self).onErrorThrow(false).onErrorExec(simulation.stop),
        safeEnd = Decorators.Error.wrap(endSimulation).withContext(self);

      let linkForce = d3.forceLink(canvasLinks).id(d => d.id).distance(d => d.height || 100);
      let chargeStrength = -5 * Math.log(nodesToAdd.length) * Math.log(linksToAdd.length);
      chargeStrength = chargeStrength < -400 ? chargeStrength : -400;

      simulation.nodes(nodesToAdd)
        .force('charge-1', layered ? undefined : d3.forceManyBody().strength(chargeStrength * 0.15))
        .force('x', d3.forceX())
        .force('y', layered ? d3.forceY(d => d.layer * 100).strength(1) : d3.forceY())
        .force('charge-2', d3.forceManyBody().strength(chargeStrength))
        .force('link', layered ? linkForce.strength(1 / (linksToAdd.length + 1)) : linkForce)
        .force('collide', d3.forceCollide().radius((radius > symbolRadius ? radius : symbolRadius * 1.5) / 2))
        .on('tick', () => safeTicked.handle())
        .on('end', () => safeEnd.handle());

    } else {
      // well, simulation is off, apply fixed positions
      ticked();
      endSimulation();
    }

    function endSimulation() {
      self.parent.zoomToFit();
      loader.hide();
    }

    function ticked() {
      link.selectAll('path.francy-edge')
        .attr('d', function(d) {
          if (d.source.id === d.target.id) {
            return `M${d.source.x},${d.source.y} A${d.target.size + 10},${d.target.size + 10} -45,1,0 ${d.source.x - 1},${d.source.y}`;
          }
          return `M${d.source.x},${d.source.y} L${d.target.x},${d.target.y}`;
        });

      if (self.data.canvas.graph.type === 'directed') {
        link.each(function() {
        
          let g = d3.select(this), data = g.data()[0],
            pathEl = g.select('path.francy-edge').node(),
            pathLength = pathEl.getTotalLength(),
            nodeEl = d3.select(`#${data.target.id} > path.francy-symbol`).node(),
            nodeSize = (Math.floor(nodeEl.getBBox().width) + 4) / 2,
            pathPoint = pathEl.getPointAtLength(pathLength - nodeSize - data.weight),
            pathPoint2 = pathEl.getPointAtLength(pathLength - nodeSize),
            x1 = pathPoint.x, y1 = pathPoint.y, x2 = pathPoint2.x, y2 = pathPoint2.y;
         
          if (data.source.id === data.target.id) {
            x2 += (x1 - x2) / (y1 - y2);
            y2 += (y1 - y2) / (x1 - x2);
          }

          g.select('path.francy-edge-arrow').attr('d', `M${x1},${y1} L${x2},${y2}`);
        });
      }

      link.selectAll('text.francy-label')
        .attr('x', d => Graph.linkXPos(d.target, d.source))
        .attr('y', d => Graph.linkYPos(d.target, d.source));

      node.attr('transform', d => `translate(${d.x},${d.y})`);
    }

    // HIGHLIGHT
    //Toggle stores whether the highlighting is on
    let toggle = 0;
    //Create an array logging what is connected to what
    let linkedByIndex = {};

    for (let i = 0; i < canvasNodes.length; i++) {
      linkedByIndex[`${i},${i}`] = 1;
    }

    canvasLinks.forEach(function(d) {
      linkedByIndex[`${d.source.index},${d.target.index}`] = 1;
    });

    function connectedNodes() {
      if (!Configuration.object.showNeighbours) return;
      //This function looks up whether a pair are neighbours
      function neighboring(a, b) {
        return linkedByIndex[`${a.index},${b.index}`];
      }
      if (toggle === 0) {
        //Reduce the opacity of all but the neighbouring nodes
        let d = d3.select(this).node().__data__;
        node.style('opacity', o => neighboring(d, o) || neighboring(o, d) ? 1 : 0.1);
        link.style('opacity', function(o) {
          let opacity = d.index === o.source.index || d.index === o.target.index ? 1 : 0.1;
          d3.select(this).on('mouseleave', undefined).select('text').style('opacity', opacity);
          return opacity;
        });
        setTimeout(function(){
          d3.select('body').on('click', () => toggle === 1 ? connectedNodes.call(this) : undefined);
        }, 0);
        //Reduce the op
        toggle = 1;
      } else {
        //Put them back to opacity=1
        node.style('opacity', 1);
        link.style('opacity', function() {
          d3.select(this).select('text').style('opacity', 0.1);
          return 1;
        });
        labelsOpacityBehavior();
        d3.select('body').on('click', undefined);
        toggle = 0;
      }
      d3.event.preventDefault();
    }

    function linkConnectedNodes() {
      if (!Configuration.object.showNeighbours) return;
      if (toggle === 0) {
        //Reduce the opacity of all but the neighbouring nodes
        let d = d3.select(this).node().__data__;
        node.style('opacity', o => d.source.id === o.id || d.target.id === o.id ? 1 : 0.1);
        link.style('opacity', function(o) {
          let opacity = d.index === o.index ? 1 : 0.1;
          d3.select(this).on('mouseleave', undefined).select('text').style('opacity', opacity);
          return opacity;
        });
        setTimeout(function(){
          d3.select('body').on('click', () =>  toggle === 1 ? linkConnectedNodes.call(this) : undefined);
        }, 0);
        //Reduce the op
        toggle = 1;
      } else {
        //Put them back to opacity=1
        node.style('opacity', 1);
        link.style('opacity', function() {
          d3.select(this).select('text').style('opacity', 0.1);
          return 1;
        });
        labelsOpacityBehavior();
        d3.select('body').on('click', undefined);
        toggle = 0;
      }
      d3.event.preventDefault();
    }
    
    function labelsOpacityBehavior() {
      link.on('mouseover', function(){
        d3.select(this).selectAll('text')
          .style('opacity', 1)
          .style('opacity', 1);
      }).on('mouseleave', function(){
        d3.select(this).selectAll('text')
          .style('opacity', 0.1)
          .style('opacity', 0.1);
      });
    }

    function dragstarted(d) {
      if (!d3.event.active && simulationActive) {
        simulation.on('end', undefined);
        simulation.alphaTarget(0.01).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active && simulationActive) {
        simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    }

    return this;

  }

  _filterNewElements(canvasObjects, d3Element) {
    let newElements = [];
    canvasObjects.forEach(o => {
      let data = d3Element.find(d => d.id === o.id);
      if (data) {
        let tmp = Object.assign({}, o);
        delete tmp.source; delete tmp.target; delete tmp.x; delete tmp.y; // ignore these
        newElements.push(Object.assign(data, tmp));
      } else {
        newElements.push(o);
      }
    });
    return newElements;
  }

  unrender() {}

}
