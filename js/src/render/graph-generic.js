import Graph from './graph';
import { RegisterMathJax } from '../util/component';

/* global d3 */

export default class GenericGraph extends Graph {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render() {
    var self = this;
    this._initialize();
    
    let simulationActive = this.data.canvas.graph.simulation;

    let canvasNodes = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [],
      canvasLinks = this.data.canvas.graph.links ? Object.values(this.data.canvas.graph.links) : [];

    let linkGroup = this.element.selectAll('g.francy-links');

    if (!linkGroup.node()) {
      linkGroup = this.element.append('g').attr('class', 'francy-links');
    }

    let links = linkGroup.selectAll('g.francy-link').data();
    let linksToAdd = this._filterNewElements(canvasLinks, links);

    let link = linkGroup.selectAll('g.francy-link').data(linksToAdd, d => d.id);

    let nodeGroup = this.element.selectAll('g.francy-nodes');

    if (!nodeGroup.node()) {
      nodeGroup = this.element.append('g').attr('class', 'francy-nodes');
    }

    let nodes = nodeGroup.selectAll('g.francy-node').data();
    let nodesToAdd = this._filterNewElements(canvasNodes, nodes);

    let node = nodeGroup.selectAll('g.francy-node').data(nodesToAdd, d => d.id);

    if (node.exit().data().length === 0 &&
      node.enter().data().length === 0 &&
      link.enter().data().length === 0 &&
      link.exit().data().length === 0) {
      return;
    }

    let linkEnter = link.enter().append('g').attr('class', 'francy-link');

    linkEnter.append('line').attr('class', 'francy-edge');

    link.exit().remove();

    link = linkGroup.selectAll('g.francy-link line.francy-edge');

    if (this.data.canvas.graph.type === 'directed') {
      // this means we need arrows, so we append the marker
      self.parent.append('defs').selectAll('marker')
        .data(['arrow'])
        .enter().append('marker')
        .attr('class', 'francy-arrows')
        .attr('id', d => d)
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 25)
        .attr('refY', 0)
        .attr('markerWidth', 10)
        .attr('markerHeight', 10)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0,-5L10,0L0,5 L10,0 L0, -5');
      // update the style of the link
      link.style('marker-end', 'url(#arrow)');
    }

    let nodeEnter = node.enter().append('g')
      .attr('class', 'francy-node').attr('id', d => d.id);

    nodeEnter.append('path')
      .attr('d', d3.symbol().type(d => Graph.getSymbol(d.type)).size(d => d.size * 100))
      .style('fill', d => Graph.colors(d.layer * 5))
      .attr('class', d => 'francy-symbol' + (d.highlight ? ' francy-highlight' : '') + (Object.values(d.menus).length ? ' francy-context' : ''));

    nodeEnter.append('text')
      .attr('class', 'francy-label')
      .attr('x', d => -(d.title.length * 2.5))
      .text(d => d.title);

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
      // Canvas Forces
      let centerForce = d3.forceCenter().x(this.width / 2).y(this.height / 2);
      let manyForce = d3.forceManyBody().strength(-canvasNodes.length * 50);
      let linkForce = d3.forceLink(canvasLinks).id(d => d.id).distance(50);
      let collideForce = d3.forceCollide(d => d.size * 2);

      //Generic gravity for the X position
      let forceX = d3.forceX(this.width / 2).strength(0.05);

      //Generic gravity for the Y position - undirected/directed graphs fall here
      let forceY = d3.forceY(this.height / 2).strength(0.25);

      if (this.data.canvas.graph.type === 'hasse') {
        //Generic gravity for the X position
        forceX = d3.forceX(this.width / 2).strength(0.3);
        //Strong y positioning based on layer to simulate the hasse diagram
        forceY = d3.forceY(d => d.layer * 75).strength(0.7);
      }

      var simulation = d3.forceSimulation().nodes(nodesToAdd)
        .force('charge', manyForce)
        .force('link', linkForce)
        .force('center', centerForce)
        .force('x', forceX)
        .force('y', forceY)
        .force('collide', collideForce)
        .on('tick', ticked)
        .on('end', function() {
          // zoom to fit when simulation is over
          self.parent.zoomToFit();
        });

      //force simulation restart
      simulation.alpha(0.5).restart();
    }
    else {
      // well, simulation is off, apply fixed positions and zoom to fit now
      ticked();
      self.parent.zoomToFit();
    }

    function ticked() {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

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
      }
      else {
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

    RegisterMathJax(this.SVGParent);

    return this;

  }

  unrender() {}
  
  _filterNewElements(canvasObjects, d3Element) {
    let newElements = [];
    canvasObjects.forEach(o => {
      let link = d3Element.find(d => d.id === o.id);
      if (link) {
        newElements.push(link);
      }
      else {
        newElements.push(o);
      }
    });
    return newElements;
  }

}
