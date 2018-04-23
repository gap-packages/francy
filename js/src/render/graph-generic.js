import Graph from './graph';
import { initialize } from '../util/initialize-decorator';

/* global d3 */

export default class GenericGraph extends Graph {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @initialize()
  render() {
    var self = this;
    
    let simulationActive = this.data.canvas.graph.simulation;

    let canvasNodes = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [],
      canvasLinks = this.data.canvas.graph.links ? Object.values(this.data.canvas.graph.links) : [];

    let linkGroup = this.element.selectAll('g.francy-links');

    if (!linkGroup.node()) {
      linkGroup = this.element.append('g').classed('francy-links', true);
    }

    let links = linkGroup.selectAll('g.francy-link').data();
    let linksToAdd = this._filterNewElements(canvasLinks, links);

    let link = linkGroup.selectAll('g.francy-link').data(linksToAdd, d => d.id);

    let nodeGroup = this.element.selectAll('g.francy-nodes');

    if (!nodeGroup.node()) {
      nodeGroup = this.element.append('g').classed('francy-nodes', true);
    }

    let nodes = nodeGroup.selectAll('g.francy-node').data();
    let nodesToAdd = this._filterNewElements(canvasNodes, nodes);

    let node = nodeGroup.selectAll('g.francy-node').data(nodesToAdd, d => d.id);

    // this means no changes, so we can safely return
    if (node.exit().data().length === 0 &&
      node.enter().data().length === 0 &&
      link.enter().data().length === 0 &&
      link.exit().data().length === 0) return;

    let linkEnter = link.enter().append('g')
      .classed('francy-link', true);

    linkEnter.append('line')
      .classed('francy-edge', true)
      .style('stroke-width', d => {
        if (d.weight >= 3) {
          d.weight = 3; d.pos = 15;
        } else if (d.weight <= 1) {
          d.weight = 1; d.pos = 28;
        } else {
          d.pos = 18;
        }
        return d.weight;
      })
      .style('stroke', d => d.color || undefined);

    linkEnter.append('text')
      .classed('francy-label', true)
      .style('font-size', d => 10 * Math.log10(d.weight + 5))
      .text(d => d.title)
      .attr('text-anchor', 'middle');

    link.exit().remove();

    link = linkGroup.selectAll('g.francy-link');

    if (this.data.canvas.graph.type === 'directed') {
      // this means we need arrows, so we append the marker
      self.parent.append('defs').selectAll('marker')
        .data(linksToAdd)
        .enter().append('marker')
        .classed('francy-arrows', true)
        .attr('id', d => `arrow-${d.id}`)
        .attr('viewBox', '0 0 12 12')
        .attr('refX', d  => d.pos)
        .attr('refY', 6)
        .attr('markerHeight', 12)
        .attr('markerWidth', 12)
        .attr('markerUnits', 'strokeWidth')
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M2,2 L10,6 L2,10 L6,6 L2,2')
        .style('fill', d => d.color || undefined);
      // update the style of the link
      link.selectAll('line.francy-edge').style('marker-end', d => `url(#arrow-${d.id})`);
    }

    let nodeEnter = node.enter().append('g')
      .classed('francy-node', true)
      .attr('id', d => d.id);

    nodeEnter.append('path')
      .attr('d', d3.symbol().type(d => Graph.getSymbol(d.type)).size(d => d.size * 100))
      .style('fill', d => d.color || Graph.colors(d.layer * 5))
      .classed('francy-symbol', true)
      .classed('francy-highlight', d => d.highlight)
      .classed('francy-context', d => Object.values(d.menus).length && Object.values(d.menus).length > 0);

    nodeEnter.append('text')
      .classed('francy-label', true)
      .text(d => d.title)
      .style('font-size', d => 10 * Math.log10(d.size + 5))
      .attr('x', function() {
        // apply mathjax if this is the case
        let text = d3.select(this);
        if (text.text().startsWith('$') && text.text().endsWith('$')) {
          self.handlePromise(self.mathjax.settings({appendTo: {element: text}}).renderSVG());
        }
        let bound = this.getBBox();
        return -(bound.width / 2);
      });

    node.exit().remove();

    node = nodeGroup.selectAll('g.francy-node');

    if (this.data.canvas.graph.drag) {
      node.call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));
    }

    if (node && !node.empty()) {

      this._applyEvents(node);

      if (this.data.canvas.graph.showNeighbours) {
        let nodeOnClick = node.on('click');
        node.on('click', function(d) {
          // default, highlight connected nodes
          connectedNodes.call(this);
          // any callbacks will be handled here
          nodeOnClick.call(this, d);
        });
      }
    }

    if (simulationActive) {
      let radius = 0;
      node.each(function() {
        let bound = this.getBBox();
        // check the widest BBox so that we use it as default radius for colisions
        if (radius < bound.width) {
          radius = bound.width;
        }
      });

      //Canvas Forces
      let manyForce = d3.forceManyBody().strength(-nodesToAdd.length * 25).distanceMin(radius * 2.5);
      let linkForce = d3.forceLink(canvasLinks).id(d => d.id).distance(d => d.height || 100);
      let collideForce = d3.forceCollide().radius(radius / 2).strength(0.5);

      //Generic gravity for the X position
      let forceX = d3.forceX(this.width).strength(1 / nodesToAdd.length);
      //Generic gravity for the Y position - undirected/directed graphs fall here
      let forceY = d3.forceY(this.height).strength(0.85);

      if (this.data.canvas.graph.type === 'hasse') {
        //Generic gravity for the X position
        forceX = d3.forceX(this.width).strength(0.15);
        //Strong y positioning based on layer to simulate the hasse diagram
        forceY = d3.forceY(d => d.layer * 75).strength(0.85);
      }

      var simulation = d3.forceSimulation()
        .nodes(nodesToAdd)
        .force('charge', manyForce)
        .force('link', linkForce)
        .force('x', forceX)
        .force('y', forceY)
        .force('collide', collideForce)
        .on('tick', ticked)
        .on('end', self.parent.zoomToFit)
        .restart();

    } else {
      // well, simulation is off, apply fixed positions
      ticked();
    }

    function ticked() {
      link.selectAll('line.francy-edge')
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      link.selectAll('text.francy-label')
        .attr('x', function(d) { 
          return Graph.linkXPos(d.target, d.source); 
        })
        .attr('y', function(d) { 
          return Graph.linkYPos(d.target, d.source); 
        });

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
      //This function looks up whether a pair are neighbours
      function neighboring(a, b) {
        return linkedByIndex[`${a.index},${b.index}`];
      }
      d3.event.preventDefault();
      if (toggle === 0) {
        //Reduce the opacity of all but the neighbouring nodes
        let d = d3.select(this).node().__data__;
        node.style('opacity', o => neighboring(d, o) || neighboring(o, d) ? 1 : 0.1);
        link.style('opacity', o => d.index === o.source.index || d.index === o.target.index ? 1 : 0.1);
        //Reduce the op
        toggle = 1;
      } else {
        //Put them back to opacity=1
        node.style('opacity', 1);
        link.style('opacity', 1);
        toggle = 0;
      }
    }

    function dragstarted(d) {
      if (!d3.event.active && simulationActive) {
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

  unrender() {}
  
  _filterNewElements(canvasObjects, d3Element) {
    let newElements = [];
    canvasObjects.forEach(o => {
      let link = d3Element.find(d => d.id === o.id);
      if (link) {
        newElements.push(link);
      } else {
        newElements.push(o);
      }
    });
    return newElements;
  }

}
