import Graph from './graph';
import { RegisterMathJax } from '../util/component';
import { initialize } from '../util/initialize-decorator';

/* global d3 */

export default class TreeGraph extends Graph {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @initialize()
  render() {

    let i = 0,
      root;

    root = d3.hierarchy(this.treeData, d => d.children);
    root.x0 = this.height / 2;
    root.y0 = 0;

    // compute height based on the depth of the graph
    let levelWidth = [1];
    let childCount = function (level, n) {

      if (n.children && n.children.length > 0) {
        if (levelWidth.length <= level + 1) levelWidth.push(0);

        levelWidth[level + 1] += n.children.length;
        n.children.forEach(function (d) {
          childCount(level + 1, d);
        });
      }
    };
    childCount(0, root);
    let newHeight = d3.max(levelWidth) * 100;

    let treemap = d3.tree().size([newHeight, this.width]);

    if (this.data.canvas.graph.collapsed) {
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
      let treeData = treemap(root);

      let nodes = treeData.descendants(),
        links = treeData.descendants().slice(1);

      nodes.forEach(d => d.y = d.depth * 180);

      let linkGroup = this.element.selectAll('g.francy-links');

      if (!linkGroup.node()) {
        linkGroup = this.element.append('g').attr('class', 'francy-links');
      }

      let link = linkGroup.selectAll('path.francy-edge')
        .data(links, d => d.id || (d.id = ++i));

      let linkEnter = link.enter()
        .append('path').attr('class', 'francy-edge')
        .attr('d', () => {
          let o = {x: source.x0, y: source.y0};
          return diagonal(o, o);
        });

      linkEnter.merge(link)
        .transition().duration(this.transitionDuration).attr('d', d => diagonal(d, d.parent));

      link.exit().transition().duration(this.transitionDuration)
        .attr('d', () => {
          let o = {x: source.x, y: source.y};
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

      let nodeGroup = this.element.selectAll('g.francy-nodes');

      if (!nodeGroup.node()) {
        nodeGroup = this.element.append('g').attr('class', 'francy-nodes');
      }

      let node = nodeGroup.selectAll('g.francy-node')
        .data(nodes, d => d.id || (d.id = ++i));

      let nodeEnter = node.enter().append('g')
        .attr('class', 'francy-node')
        .attr('transform', () => `translate(${source.y0},${source.x0})`);

      nodeEnter.append('path')
        .attr('d', d3.symbol().type(d => Graph.getSymbol(d.data.type)).size(d => d.data.size * 100))
        .attr('class', 'francy-symbol');

      nodeEnter.append('text')
        .attr('class', 'francy-label')
        .text(d => d.data.title)
        .attr('x',  function() {
          let bound = this.getBBox();
          return -(bound.width / 2);
        })
        .style('cursor', d => d.children || d._children ? 'pointer' : 'default');

      let nodeUpdate = nodeEnter.merge(node);

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
      
      if (node.node()) {
        this._applyEvents(node);

        let nodeOnClick = node.on('click');
        node.on('click', (d) => {
        // any callbacks will be handled here
          nodeOnClick.call(this, d.data);
          // default, highlight connected nodes
          click.call(this, d);
        });
      }

      // Toggle children on click.
      let self = this;

      function click(d) {
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
        update.call(self, d);
      }

      RegisterMathJax(this.SVGParent);

      setTimeout(() => {
        this.parent.zoomToFit();
      }, this.transitionDuration);
    }

    return this;

  }

  unrender() {}

  /**
   * Transforms flat data into tree data by analysing the parents of each node
   * @returns {Object} the data transformed in tree data
   */
  get treeData() {
    let canvasNodes = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [];
    let dataMap = canvasNodes.reduce(function (map, node) {
      map[node.id] = node;
      return map;
    }, {});
    let treeData = [];
    canvasNodes.forEach(function(node) {
      let parent = dataMap[node.parent];
      if (parent) {
        (parent.children || (parent.children = [])).push(node);
      } else {
        treeData.push(node);
      }
    });
    return treeData[0];
  }

}
