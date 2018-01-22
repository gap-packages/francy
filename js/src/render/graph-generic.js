import Renderer from './renderer';
import Graph from './graph';
import { RegisterMathJax } from '../util/component';

/* global d3 */

export default class GenericGraph extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render() {

    var parent = this.options.appendTo.element;

    var simulationActive = this.data.canvas.graph.simulation;

    var canvasNodes = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [],
      canvasLinks = this.data.canvas.graph.links ? Object.values(this.data.canvas.graph.links) : [];

    this.element = parent.select('g.francy-content');

    var width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
      height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;

    var linkGroup = this.element.selectAll('g.francy-links');

    if (!linkGroup.node()) {
      linkGroup = this.element.append('g').attr('class', 'francy-links');
    }

    var links = linkGroup.selectAll('g.francy-link').data();
    var linksToAdd = [];
    canvasLinks.forEach(l => {
      var link = links.find(d => d.id === l.id);
      if (link) {
        linksToAdd.push(link);
      }
      else {
        linksToAdd.push(l);
      }
    });

    var link = linkGroup.selectAll('g.francy-link').data(linksToAdd, d => d.id);

    var nodeGroup = this.element.selectAll('g.francy-nodes');

    if (!nodeGroup.node()) {
      nodeGroup = this.element.append('g').attr('class', 'francy-nodes');
    }

    var nodes = nodeGroup.selectAll('g.francy-node').data();
    var nodesToAdd = [];
    canvasNodes.forEach(n => {
      var node = nodes.find(d => d.id === n.id);
      if (node) {
        nodesToAdd.push(node);
      }
      else {
        nodesToAdd.push(n);
      }
    });

    var node = nodeGroup.selectAll('g.francy-node').data(nodesToAdd, d => d.id);

    if (node.exit().data().length == 0 &&
      node.enter().data().length == 0 &&
      link.enter().data().length == 0 &&
      link.exit().data().length == 0) {
      return;
    }

    var linkEnter = link.enter().append('g').attr('class', 'francy-link');

    linkEnter.append('line').attr('class', 'francy-edge');

    link.exit().remove();

    link = linkGroup.selectAll('g.francy-link line.francy-edge');

    if (this.data.canvas.graph.type === 'directed') {
      // this means we need arrows, so we append the marker
      parent.append('defs').selectAll('marker')
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

    var nodeEnter = node.enter().append('g')
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

      Graph.applyEvents(node, this.options);

      if (this.data.canvas.graph.showNeighbours) {
        var nodeOnClick = node.on('click');
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
      var centerForce = d3.forceCenter().x(width / 2).y(height / 2);
      var manyForce = d3.forceManyBody().strength(-canvasNodes.length * 50);
      var linkForce = d3.forceLink(canvasLinks).id(d => d.id).distance(50);
      var collideForce = d3.forceCollide(d => d.size * 2);

      //Generic gravity for the X position
      var forceX = d3.forceX(width / 2).strength(0.05);

      //Generic gravity for the Y position - undirected/directed graphs fall here
      var forceY = d3.forceY(height / 2).strength(0.25);

      if (this.data.canvas.graph.type === 'hasse') {
        //Generic gravity for the X position
        forceX = d3.forceX(width / 2).strength(0.3);
        //Strong y positioning based on layer to simulate the hasse diagram
        forceY = d3.forceY(d => d.layer * 75).strength(0.7);
      }

      var simulation = d3.forceSimulation().nodes(nodesToAdd)
        .force("charge", manyForce)
        .force("link", linkForce)
        .force("center", centerForce)
        .force("x", forceX)
        .force("y", forceY)
        .force("collide", collideForce)
        .on('tick', ticked)
        .on("end", function() {
          // zoom to fit when simulation is over
          parent.zoomToFit();
        });

      //force simulation restart
      simulation.alpha(0.5).restart();
    }
    else {
      // well, simulation is off, apply fixed positions and zoom to fit now
      ticked();
      parent.zoomToFit();
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
    var toggle = 0;
    //Create an array logging what is connected to what
    var linkedByIndex = {};

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

}
