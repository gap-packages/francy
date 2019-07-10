import { Callback, ContextMenu, Decorators, Graph, Tooltip, Utilities } from 'francy-core';
import DOTLanguageConverterHelper from '../util/dot-converter';

export default class GraphGeneric extends Graph {

  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
    this.callback = new Callback(this.options, this.context);
    this.tooltip = new Tooltip(this.options, this.context);
    this.contextMenu = new ContextMenu(this.options, this.context);
  }

  @Decorators.Data.requires('canvas.graph')
  @Decorators.Initializer.initialize()
  async render() {
    let self = this,
      loader = Decorators.Loader.withContext(this).show(),
      dot = new DOTLanguageConverterHelper(this.context).load(this.data).convert(),
      canvasNodes = this.data.canvas.graph.nodes ? JSON.parse(JSON.stringify(Object.values(this.data.canvas.graph.nodes))) : [],
      canvasLinks = this.data.canvas.graph.links ? JSON.parse(JSON.stringify(Object.values(this.data.canvas.graph.links))) : [];

    self.parent
      .graphviz()
      .logEvents(false)
      .fade(false)
      .engine(self.context.configuration.object.graphvizEngine)
      .keyMode('id')
      .dot(dot)
      .render(function () {
        self.parentClass.element = this._selection.selectWithoutDataPropagation('svg');
        self.parentClass.element.attr('width', '100%').attr('height', self.data.canvas.height)
          .attr('viewBox', undefined)
          .attr('id', `Canvas-${self.data.canvas.id}`)
          .classed('francy-canvas', true);

        self.options.appendTo.zoom = this.zoomBehavior();

        self.element = self.parentClass.element.selectWithoutDataPropagation('g');
        self.element.classed('francy-content', true);
        self.element.selectAll('title').remove();
        self.element.selectWithoutDataPropagation('polygon').remove();

        let nodesG = self.element.append('g').classed('francy-nodes', true);
        let linksG = self.element.append('g').classed('francy-links', true);
        let nodes = self.element.selectAll('.node');
        let links = self.element.selectAll('.edge');

        nodes.each(function (d) {
          Object.assign(d, self.data.canvas.graph.nodes[d.key]);
        })
          .classed('francy-node', true)
          .classed('francy-highlight', true)
          .classed('francy-selected', d => d.selected);

        nodes.selectAll('text')
          .classed('francy-label', true)
          .attr('x', function () {
            // apply mathjax if this is the case
            let text = d3.select(this);
            if (text.text().startsWith('$') && text.text().endsWith('$')) {
              // we need to set the position after re-render the latex
              let x = text.datum().attributes.x;
              let y = text.datum().attributes.y;
              let parentG = d3.select(text.node().parentNode);
              self.handlePromise(self.mathjax.settings({
                appendTo: { element: text },
                renderType: 'SVG',
                postFunction: function () {
                  let svg = parentG.select('svg');
                  if (svg.node()) {
                    self.setLabelXPosition(svg, x);
                    self.setLabelYPosition(svg, y);
                  }
                }
              }).render());
            }
            return text.datum().attributes.x;
          });

        links.classed('francy-link', true).each(function (d) {
          Object.assign(d, self.data.canvas.graph.links[d.key]);
          d3.select(this).style('stroke-width', d => d.invisible ? 0 : Math.sqrt(d.weight || 0.2));
        });

        let removedNodes = nodes.remove();
        let removedLinks = links.remove();
        removedNodes.each(function () {
          nodesG.node().appendChild(d3.select(this).node());
        });
        removedLinks.each(function () {
          linksG.node().appendChild(d3.select(this).node());
        });

        self._applyEvents(nodes);

        let connectedNodes = self._connectedNodes(nodes, canvasNodes, links, canvasLinks);
        let nodeOnClick = nodes.on('click');
        nodes.on('click', function (d) {
          // default, highlight connected nodes
          connectedNodes.call(this);
          // any callbacks will be handled here
          nodeOnClick && nodeOnClick.call(this, d);
        });
        links.on('click', function () {
          // default, highlight connected nodes
          connectedNodes.call(this);
        });

        self.parentClass.zoomToFit(true);
        loader.hide();
      })
      .onerror(function () {
        loader.hide();
      });
  }

  setLabelXPosition(element, x) {
    try {
      let width = element.node().width.baseVal.value;
      element.attr('x', Math.ceil(Number(x) - (width / 2)));
    } catch (Error) {
      // don't care, this might fail for multiple reasons
      // the use rmight have switch renderer for instance
      // no worries if something is not properly aligned :P
    }
  }

  setLabelYPosition(element, y) {
    try {
      let height = element.node().height.baseVal.value;
      element.attr('y', Math.ceil(Number(y) - (height / 2)));
    } catch (Error) {
      // don't care, this might fail for multiple reasons
      // the use rmight have switch renderer for instance
      // no worries if something is not properly aligned :P
    }
  }

  _connectedNodes(node, canvasNodes, link, canvasLinks) {
    let self = this;
    //Toggle stores whether the highlighting is on
    let toggle = false;

    //Create an array logging what is connected to what
    let linkedByIndex = {};

    canvasLinks.forEach(function (d) {
      let sourceId = Utilities.isObject(d.source) ? d.source.id : d.source;
      let targetId = Utilities.isObject( d.target) ? d.target.id : d.target;
      linkedByIndex[`${sourceId},${sourceId}`] = true;
      linkedByIndex[`${targetId},${sourceId}`] = true;
      linkedByIndex[`${sourceId},${targetId}`] = true;
    });

    function connected() {
      if (!self.context.configuration.object.showNeighbours) return;
      let el = d3.select(this);
      if (!toggle) {
        //Reduce the opacity of all but the neighbouring nodes
        let d = el.datum();
        if (el.attr('class').includes('francy-node')) {
          node.style('opacity', o => linkedByIndex[`${d.id},${o.id}`] || linkedByIndex[`${o.id},${d.id}`] ? 1 : 0.1);
          link.style('opacity', function (o) {
            let localTargetId = Utilities.isObject(o.target) ? o.target.id : o.target;
            let localSourceId = Utilities.isObject(o.source) ? o.source.id : o.source;
            let opacity = d.id === localSourceId || d.id === localTargetId ? 1 : 0.1;
            d3.select(this).on('mouseleave', undefined).select('text').style('opacity', opacity);
            return opacity;
          });
        } else if (el.attr('class').includes('francy-link')) {
          let sourceId = Utilities.isObject(d.source) ? d.source.id : d.source;
          let targetId = Utilities.isObject(d.target) ? d.target.id : d.target;
          node.style('opacity', o => sourceId === o.id || targetId === o.id ? 1 : 0.1);
          link.style('opacity', function (o) {
            let localTargetId = Utilities.isObject(o.target) ? o.target.id : o.target;
            let localSourceId = Utilities.isObject(o.source) ? o.source.id : o.source;
            let opacity = sourceId === localSourceId && targetId === localTargetId ? 1 : 0.1;
            d3.select(this).on('mouseleave', undefined).select('text').style('opacity', opacity);
            return opacity;
          });
        }
        setTimeout(() => {
          d3.select('body').on('click', () => toggle ? connected.call(this) : undefined);
        }, 0);
        //Reduce the op
        toggle = true;
      } else {
        //Put them back to opacity 1
        node.style('opacity', 1);
        link.style('opacity', function () {
          d3.select(this).select('text').style('opacity', 0.1);
          return 1;
        });
        self.graphOperations.labelsOpacityBehavior(link);
        d3.select('body').on('click', undefined);
        toggle = false;
      }
      d3.event.preventDefault();
    }

    return connected;
  }

}
