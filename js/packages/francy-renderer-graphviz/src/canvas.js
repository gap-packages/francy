import { Logger, RenderingManager, RENDERING_EVENTS, CompositeRenderer, Decorators, Configuration } from 'francy-core';
import GraphGeneric from './graph/generic';
import ChartGeneric from './chart/generic';

/* global d3 */

export default class Canvas extends CompositeRenderer {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
    this.add(new GraphGeneric(this.options)).add(new ChartGeneric(this.options));
    this.graphvizEngines = ['circo', 'dot', 'fdp', 'neato', 'osage', 'patchwork', 'twopi'];
    // this only adds if does not exist
    Configuration.addProperty('graphvizEngine', 'dot');
  }

  @Decorators.Data.requires('canvas')
  async render() {
    let self = this;

    const frameId = `Frame-${this.data.canvas.id}`;

    let svg = d3.select(`div#${frameId}>svg`);
    if (!svg.node() || !svg.node().__data__) {
      d3.select(`div#${frameId}>svg`).remove();
    }
    // graphviz creates the svg element, 
    // so we pick the frame instead
    this.element = d3.select(`div#${frameId}`);

    function updateZoom(translateX, translateY, scale) {
      self.element.call(self.zoom.transform, d3.zoomIdentity.translate(translateX, translateY).scale(scale, scale));
    }

    function zoomToFit(force) {
      // only execute if enable, of course
      if (self.data.canvas.zoomToFit || force) {
        let bounds = self.element.select('g.francy-content').node().getBBox();

        let clientBounds = self.element.node().getBoundingClientRect(),
          fullWidth = clientBounds.right - clientBounds.left,
          fullHeight = clientBounds.bottom - clientBounds.top;

        let width = +bounds.width,
          height = +bounds.height;

        if (width === 0 || height === 0) return;

        let midX = bounds.x + width / 2,
          midY = bounds.y + height / 2;

        let scale = 0.9 / Math.max(width / fullWidth, height / fullHeight);
        let translateX = fullWidth / 2 - scale * midX,
          translateY = fullHeight / 2 - scale * midY;

        self.element.select('g.francy-content').transition().duration(self.transitionDuration)
          .attr('transform', `translate(${translateX},${translateY})scale(${scale},${scale})`)
          .on('end', () => updateZoom(translateX, translateY, scale));
      }
    }

    this.element.zoomToFit = this.zoomToFit = zoomToFit;

    Logger.debug(`Canvas updated [${frameId}]...`);

    this._buildMenu();

    this.handlePromise(this.renderChildren());

    return this;
  }

  _buildMenu() {
    var self = this;
    // here we have access to MainMenu
    this.graphvizEngines.forEach((engine) => {
      this.parentClass.MainMenu.addMultiMenuOnSettingsMenu({
        menuId: 'graphviz-engines-entry',
        menuTitle: 'Viz Engine',
        entryId: `graphviz-engine-${engine}-entry`,
        entryTitle: `${Configuration.object.graphvizEngine === engine ? '&#9745' : '&#9744'} ${engine}`,
        entryOnClickCallback: function () {
          Configuration.object.graphvizEngine = engine;
        },
        entryOnEachCallback: function () {
          let engineCheckId = `graphvizEngine-checkbox-${self.data.canvas.id}`;
          Configuration.subscribe('graphvizEngine', buttonCheckbox, engineCheckId);
        }
      });

      function buttonCheckbox(value) {
        d3.select(this).html(`${value === engine ? '&#9745' : '&#9744'} ${engine}`);
      }
    });

    // re-render when engine changes
    let engineRenderId = `graphvizEngine-reRender-${self.data.canvas.id}`;
    Configuration.subscribe('graphvizEngine', reRender, engineRenderId);

    function reRender() {
      // remove previous rendered canvas
      self.element.select('g').selectAll('*').remove();
      // re-render
      setTimeout(() => {
        let Renderer = RenderingManager.activeRenderer();
        self.handlePromise(new Renderer(self.options).load(self.data).render());
      }, 100);
    }

    // remove menu if renderer is disabled
    let rendererDisableId = `graphvizEngine-disable-${self.data.canvas.id}`;
    RenderingManager.subscribe(RENDERING_EVENTS.STATUS, onDisableRenderer, rendererDisableId);

    function onDisableRenderer(r) {
      if (!r.enable) {
        self.parentClass.MainMenu.removeMenuEntry('graphviz-engines-entry');
      }
    }
  }
}
