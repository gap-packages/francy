import {Decorators, Graph, Logger} from 'francy-core';

export default class TreeGraph extends Graph {

  constructor({appendTo, callbackHandler}, context) {
    super({appendTo: appendTo, callbackHandler: callbackHandler}, context);
  }

  @Decorators.Initializer.initialize()
  async render() {

    let nodes = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [],
      i = 0,
      root;

    root = d3.stratify().id(d => d.id).parentId(d => d.parent)(nodes);
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
    let size = d3.max(levelWidth) * 100;

    let treemap = d3.tree().size([size, size])
      .separation((a, b) => a.parent === b.parent ? a.data.size : a.data.size * 2);

    if (this.data.canvas.graph.collapsed) {
      root.children.forEach(collapse);
    }

    update.call(this, root)
      .catch(error => Logger.warn(`(${this.context.instanceId}) ${error}`, error))
      .then(() => setTimeout(this.parent.zoomToFit, this.transitionDuration));

    function collapse(d) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }

    async function update(source) {
      let self = this;

      let treeData = treemap(root);

      let nodes = treeData.descendants(),
        links = treeData.descendants().slice(1);

      nodes.forEach(d => d.y = d.depth * 100);

      let linkGroup = this.element.selectAll('g.francy-links');

      if (!linkGroup.node()) {
        linkGroup = this.element.append('g').attr('class', 'francy-links');
      }

      let link = linkGroup.selectAll('g.francy-link')
        .data(links, d => d.id || (d.id = ++i));

      let linkEnter = link.enter().append('g')
        .classed('francy-link', true);

      linkEnter.append('path')
        .attr('class', 'francy-edge')
        .style('fill', 'none')
        .style('stroke-width', d => d.invisible ? 0 : Math.sqrt(d.weight || 0.2))
        .style('stroke', d => d.color || '#000')
        .attr('d', () => {
          let o = {x: source.x0, y: source.y0};
          return diagonal(o, o);
        });

      linkEnter.merge(link).selectAll('path.francy-edge')
        .transition().duration(this.transitionDuration)
        .attr('d', d => diagonal(d, d.parent));

      link.exit().selectAll('path.francy-edge')
        .transition().duration(this.transitionDuration)
        .attr('d', () => {
          let o = {x: source.x, y: source.y};
          return diagonal(o, o);
        }).remove();

      link.exit().transition().duration(this.transitionDuration).remove();

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
        .attr('id', d => d.id)
        .attr('class', 'francy-node')
        .attr('transform', () => `translate(${source.y0},${source.x0})`);

      nodeEnter.append('path')
        .attr('d', d3.symbol().type(d => Graph.getSymbol(d.data.type)).size(d => d.data.size * 100))
        .attr('class', 'francy-symbol');

      nodeEnter.filter(d => d.data.title).append('text')
        .attr('class', 'francy-label')
        .text(d => d.data.title)
        .style('font-size', d => 5 * Math.sqrt(d.weight || 1))
        .style('cursor', d => d.children || d._children ? 'pointer' : 'default')
        .attr('x', function handleText() {
          // apply mathTypesetting if this is the case
          self.handleTypesetting(d3.select(this));
          return self._getXPosition(this);
        });

      let nodeUpdate = nodeEnter.merge(node);

      nodeUpdate.transition()
        .duration(this.transitionDuration)
        .attr('transform', d => `translate(${d.y},${d.x})`);

      node.exit().transition().duration(this.transitionDuration)
        .attr('transform', () => `translate(${source.y},${source.x})`)
        .remove();

      nodeGroup.selectAll('path.francy-symbol')
        .style('fill', d => d.children || d._children ? '#f2f2f2' : Graph.colors(d.data.layer * 5))
        .style('cursor', d => d.children || d._children ? 'pointer' : 'default');

      node = nodeGroup.selectAll('g.francy-node');

      if (node.node()) {
        this._applyEvents(node);

        let nodeOnClick = node.on('click');
        node.on('click', function (e, d) {
          // any callbacks will be handled here
          nodeOnClick.call(this, e, d.data);
          // default, highlight connected nodes
          click.call(this, e, d);
        });
      }

      // Toggle children on click.
      function click(e, d) {
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
        update.call(self, d)
          .catch(error => Logger.warn(`(${this.context.instanceId}) ${error}`, error))
          .then(() => setTimeout(self.parent.zoomToFit, self.transitionDuration));
      }
    }

    return this;
  }
}
