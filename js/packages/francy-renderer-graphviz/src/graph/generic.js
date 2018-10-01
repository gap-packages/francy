import { Graph, Decorators, Callback, Configuration, Tooltip, ContextMenu } from 'francy-core';
import DOTLanguageConverterHelper from '../util/dot-converter';

/* global d3 */

export default class GraphGeneric extends Graph {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
    this.callback = new Callback(this.options);
    this.tooltip = new Tooltip(this.options);
    this.contextMenu = new ContextMenu(this.options);
  }

  @Decorators.Data.requires('canvas.graph')
  @Decorators.Initializer.initialize()
  async render() {
    let self = this,
      loader = Decorators.Loader.withContext(this).show(),
      dot = new DOTLanguageConverterHelper().load(this.data).convert();
    //transition = d3.transition().duration(this.transitionDuration);

    self.parent
      .graphviz()
      .logEvents(false)
      .fade(false)
      .engine(Configuration.object.graphvizEngine)
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
                  self.setLabelXPosition(svg, x);
                  self.setLabelYPosition(svg, y);
                }
              }).render());
            }
            return text.datum().attributes.x;
          });

        self._applyEvents(nodes);

        links.classed('francy-link', true).each(function (d) {
          Object.assign(d, self.data.canvas.graph.links[d.key]);
        });

        let removedNodes = nodes.remove();
        let removedLinks = links.remove();
        removedNodes.each(function () {
          nodesG.node().appendChild(d3.select(this).node());
        });
        removedLinks.each(function () {
          linksG.node().appendChild(d3.select(this).node());
        });

        self.parentClass.zoomToFit(true);
        loader.hide();
      })
      .onerror(function () {
        loader.hide();
      });
  }

  setLabelXPosition(element, x) {
    let width = element.node().width.baseVal.value;
    element.attr('x', Math.ceil(Number(x) - (width / 2)));
  }

  setLabelYPosition(element, y) {
    let height = element.node().height.baseVal.value;
    element.attr('y', Math.ceil(Number(y) - (height / 2)));
  }

}
