import Renderer from './renderer';
import Graph from './graph';
import { RegisterMathJax } from '../util/component';

/* global d3 */

export default class TreeGraph extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render() {

    var parent = this.options.appendTo.element;

    this.element = parent.select('g.francy-content');

    var width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
      height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;

    var i = 0,
      root;

    var treemap = d3.tree().size([height, width]);

    root = d3.hierarchy(this.treeData, d => d.children);
    root.x0 = height / 2;
    root.y0 = 0;

    if (this.data.canvas.graph.collapse) {
      root.children.forEach(collapse);
    }

    update.call(this, root);

    function collapse(d) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }

    function update(source) {
      var treeData = treemap(root);

      var nodes = treeData.descendants(),
        links = treeData.descendants().slice(1);

      nodes.forEach(d => d.y = d.depth * 150);

      var linkGroup = this.element.selectAll('g.francy-links');

      if (!linkGroup.node()) {
        linkGroup = this.element.append('g').attr('class', 'francy-links');
      }

      var link = linkGroup.selectAll('path.francy-edge')
        .data(links, d => d.id || (d.id = ++i));

      var linkEnter = link.enter()
        .append('path').attr('class', 'francy-edge')
        .attr('d', () => {
          var o = { x: source.x0, y: source.y0 };
          return diagonal(o, o);
        });

      linkEnter.merge(link)
        .transition().duration(this.transitionDuration).attr('d', d => diagonal(d, d.parent));

      link.exit().transition().duration(this.transitionDuration)
        .attr('d', () => {
          var o = { x: source.x, y: source.y };
          return diagonal(o, o);
        }).remove();

      linkGroup.selectAll('path.francy-edge')
        .style('fill', 'none')
        .style('stroke', '#ccc')
        .style('stroke-width', '1px');

      nodes.forEach((d) => {
        d.x0 = d.x;
        d.y0 = d.y;
      });

      function diagonal(s, d) {
        return `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;
      }

      var nodeGroup = this.element.selectAll('g.francy-nodes');

      if (!nodeGroup.node()) {
        nodeGroup = this.element.append('g').attr('class', 'francy-nodes');
      }

      var node = nodeGroup.selectAll('g.francy-node')
        .data(nodes, d => d.id || (d.id = ++i));

      var nodeEnter = node.enter().append('g')
        .attr('class', 'francy-node')
        .attr('transform', () => `translate(${source.y0},${source.x0})`);

      nodeEnter.append('path')
        .attr('d', d3.symbol().type(d => Graph.getSymbol(d.data.type)).size(d => d.data.size * 100))
        .attr('class', 'francy-symbol');

      nodeEnter.append('text')
        .attr('class', 'francy-label')
        .attr('x', d => -(d.data.title.length * 2.5))
        .style('cursor', d => d.children || d._children ? 'pointer' : 'default')
        .text(d => d.data.title);

      var nodeUpdate = nodeEnter.merge(node);

      nodeUpdate.transition()
        .duration(this.transitionDuration)
        .attr('transform', d => `translate(${d.y},${d.x})`);

      node.exit().transition().duration(this.transitionDuration)
        .attr('transform', () => `translate(${source.y},${source.x})`)
        .remove();

      nodeGroup.selectAll('path.francy-symbol')
        .style('fill', d => d.children || d._children ? 'lightsteelblue' : Graph.colors(d.data.layer * 5))
        .style('cursor', d => d.children || d._children ? 'pointer' : 'default');

      node = nodeGroup.selectAll('g.francy-node');
      Graph.applyEvents(node, this.options);

      var nodeOnClick = node.on('click');
      node.on('click', (d) => {
        // any callbacks will be handled here
        nodeOnClick.call(this, d.data);
        // default, highlight connected nodes
        click.call(this, d);
      });

      // Toggle children on click.
      var self = this;

      function click(d) {
        if (d.children) {
          d._children = d.children;
          d.children = null;
        }
        else {
          d.children = d._children;
          d._children = null;
        }
        update.call(self, d);
      }

      RegisterMathJax(this.SVGParent);
    }

    return this;

  }

  unrender() {}

  /**
   * Transforms flat data into tree data by analysing the parents of each node
   * @returns {Object} the data transformed in tree data
   */
  get treeData() {
    var canvasNodes = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [];
    var dataMap = canvasNodes.reduce(function(map, node) {
      map[node.id] = node;
      return map;
    }, {});
    var treeData = [];
    canvasNodes.forEach(function(node) {
      var parent = dataMap[node.parent];
      if (parent) {
        (parent.children || (parent.children = [])).push(node);
      }
      else {
        treeData.push(node);
      }
    });
    return treeData[0];
  }

}
