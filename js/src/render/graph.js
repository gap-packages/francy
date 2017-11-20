import Renderer from './renderer';

/* global d3 */

export default class Graph extends Renderer {


  static get colors() {
    return d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow);
  }

  static getSymbol(type) {
    if (type === 'circle') {
      return d3.symbolCircle;
    }
    else if (type === 'cross') {
      return d3.symbolCross;
    }
    else if (type === 'diamond') {
      return d3.symbolDiamond;
    }
    else if (type === 'square') {
      return d3.symbolSquare;
    }
    else if (type === 'triangle') {
      return d3.symbolTriangle;
    }
    else if (type === 'star') {
      return d3.symbolStar;
    }
    else if (type === 'wye') {
      return d3.symbolWye;
    }
    else {
      return d3.symbolCircle;
    }
  }

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render(json) {

    if (!Object.keys(json.canvas.graph).length) {
      return;
    }

    var parent = this.options.appendTo;

    var canvasNodes = json.canvas.graph.nodes ? Object.values(json.canvas.graph.nodes) : [],
      canvasLinks = json.canvas.graph.links ? Object.values(json.canvas.graph.links) : [];

    var svg = parent.select('g.content'),
      width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
      height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;
    //window.innerWidth ||
    var t = d3.transition().duration(500);

    //Generic gravity for the X position
    var forceX = d3.forceX(-500).strength(0.35);

    //Generic gravity for the Y position - undirected/directed graphs fall here
    var forceY = d3.forceY(500).strength(0.35);

    if (json.canvas.graph.type === 'hasse') {
      //Strong y positioning based on layer
      forceY = d3.forceY(d => d.layer * (d.size * 5)).strength(1);
    }

    var simulation = d3.forceSimulation()
      .force('link', d3.forceLink().id(d => d.id).strength(0.001))
      .force('charge', d3.forceManyBody().strength(-250))
      .force('collide', d3.forceCollide(d => d.size))
      .force('x', forceX)
      .force('y', forceY)
      .force('center', d3.forceCenter(width / 2, height / 2));

    var linkGroup = svg.selectAll('g.links');

    if (!linkGroup.node()) {
      linkGroup = svg.append('g').attr('class', 'links');
    }

    var link = linkGroup.selectAll('line.link').data(canvasLinks);

    link.exit().transition(t).remove();

    link = link.enter().append('line')
      .attr('class', 'link')
      .attr('id', d => `${d.source},${d.target}`);

    if (json.canvas.graph.type === 'directed') {
      // this means we need arrows, so we append the marker
      parent.append('defs').selectAll('marker')
        .data(['arrow'])
        .enter().append('marker')
        .attr('class', 'arrows')
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

    var nodeGroup = svg.selectAll('g.nodes');

    if (!nodeGroup.node()) {
      nodeGroup = svg.append('g').attr('class', 'nodes');
    }

    var node = nodeGroup.selectAll('path.node').data(canvasNodes);

    node.exit().transition(t).remove();

    node = node.enter().append('path')
      .attr('d', d3.symbol().type(d => Graph.getSymbol(d.type)).size(d => d.size * 100))
      .attr('transform', 'translate(0,0)')
      .attr('class', d => 'node' + (d.highlight ? ' highlight' : ''))
      .attr('id', d => d.id);

    node.call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended))
      //.on('contextmenu', connectedNodes) //rightclick
      .on('click', connectedNodes);
    //.on('click', function() { alert(':)'); });

    // TODO this could be a tooltip tag from json
    node.append('title').text(d => `ID:\t${d.id}\nLayer:\t${d.layer}`);

    var labelGroup = svg.selectAll('.labels');

    if (!labelGroup.node()) {
      labelGroup = svg.append('g').attr('class', 'labels');
    }

    var label = labelGroup.selectAll('text').data(canvasNodes);

    label.exit().transition(t).remove();

    label = label.enter().append('text')
      .attr('class', 'label')
      .text(d => d.title);

    var legendGroup = parent.selectAll('.legend');

    if (!legendGroup.node()) {
      legendGroup = parent.append('g').attr('class', 'legend');
    }

    var legend = legendGroup.selectAll('g')
      .data(d3.map(canvasNodes, d => d.layer).values().sort((a, b) => a.layer < b.layer), d => d.id);

    legend.exit().transition(t).remove();

    legend = legend.enter()
      .append('g')
      .attr('id', d => `legendLayer${d}`)
      .attr('transform', function(d, i) {
        let x = 10;
        let y = (i + 1) * 11;
        return `translate(${x},${y})`;
      });

    legend.append('rect')
      .attr('width', 10)
      .attr('height', 8)
      .style('fill', d => Graph.colors(d.layer * 6))
      .style('stroke', d => Graph.colors(d.layer * 6));

    legend.append('text')
      .attr('style', 'font-size: 10px;')
      .attr('x', 10 + 5)
      .attr('y', 10 - 2)
      .text(d => `Index ${d.layer}`);

    simulation.nodes(canvasNodes).on('tick', ticked);

    simulation.force('link').links(canvasLinks);

    function ticked() {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .style('fill', d => Graph.colors(d.layer * 6))
        .attr('transform', d => `translate(${d.x},${d.y})`);

      label
        .attr('x', d => d.x - d.title.length - Math.sqrt(d.size))
        .attr('y', d => d.y - Math.sqrt(d.size));

      node.each(collide(0.9));
    }

    // COLLISION
    var padding = 1; // separation between circles;

    function collide(alpha) {
      let quadTree = d3.quadtree(canvasNodes);
      return function(d) {
        let rb = 2 * d.size + padding,
          nx1 = d.x - rb,
          nx2 = d.x + rb,
          ny1 = d.y - rb,
          ny2 = d.y + rb;
        quadTree.visit(function(quad, x1, y1, x2, y2) {
          if (quad.point && (quad.point !== d)) {
            let x = d.x - quad.point.x,
              y = d.y - quad.point.y,
              l = Math.sqrt(x * x + y * y);
            if (l < rb) {
              l = (l - rb) / l * alpha;
              d.x -= x *= l;
              d.y -= y *= l;
              quad.point.x += x;
              quad.point.y += y;
            }
          }
          return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        });
      };
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

    //This function looks up whether a pair are neighbours
    function neighboring(a, b) {
      return linkedByIndex[`${a.index},${b.index}`];
    }

    function connectedNodes() {
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
      if (!d3.event.active) {
        simulation.alphaTarget(0.3).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) {
        simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    }

  }

}
