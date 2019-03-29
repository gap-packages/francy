import { Logger, RENDERING_EVENTS, CompositeRenderer, Decorators } from 'francy-core';
import GraphGeneric from './graph/generic';
import ChartGeneric from './chart/generic';

/* global d3 */

export default class Canvas extends CompositeRenderer {

  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
    this.graphFactory = new GraphGeneric(this.options, this.context);
    this.chartFactory = new ChartGeneric(this.options, this.context);
    this.graphvizEngines = ['circo', 'dot', 'fdp', 'neato', 'osage', 'patchwork', 'twopi'];
    this.graphvizRankdirs = { 'TB': 'Top to Bottom', 'LR': 'Left to Right', 'BT': 'Bottom to Top', 'RL': 'Right to Left' };
    // this only adds if does not exist
    this.context.configuration.addProperty('graphvizEngine', 'dot');
    this.context.configuration.addProperty('graphvizRankdir', 'TB');
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

    // cannot continue if canvas is not present
    if (!this.element.node()) {
      throw new Error(`Oops, could not create canvas within the Frame ID [${frameId}]... Cannot proceed.`);
    }

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

    Logger.debug(`(${this.context.instanceId}) Canvas updated [${frameId}]...`);

    this._buildMenu();

    this.removeChildren();
    this.addChild(this.graphFactory).addChild(this.chartFactory);
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
        entryTitle: `${self.context.configuration.object.graphvizEngine === engine ? '&#9745' : '&#9744'} ${engine}`,
        entryOnClickCallback: function () {
          self.context.configuration.object.graphvizEngine = engine;
        },
        entryOnEachCallback: function () {
          let engineCheckId = `graphvizEngine-checkbox-${self.data.canvas.id}`;
          self.context.configuration.subscribe('graphvizEngine', function (value) {
            d3.select(this).html(`${value === engine ? '&#9745' : '&#9744'} ${engine}`);
          }, engineCheckId);
        }
      });
    });

    function reRender() {
      // remove previous rendered canvas
      self.element.select('g').selectAll('*').remove();
      // re-render
      setTimeout(() => {
        let Renderer = self.context.renderingManager.activeRenderer();
        self.options.appendTo.data = self.options.appendTo.canvas.data;
        self.options.appendTo.canvas = new Renderer(self.options, self.context);
        self.handlePromise(self.options.appendTo.render());
      }, 100);
    }

    // re-render when engine changes
    let engineRenderId = `graphvizEngine-reRender-${self.data.canvas.id}`;
    self.context.configuration.subscribe('graphvizEngine', reRender, engineRenderId);

    Object.keys(this.graphvizRankdirs).forEach((dir) => {
      this.parentClass.MainMenu.addMultiMenuOnSettingsMenu({
        menuId: 'graphviz-rankdir-entry',
        menuTitle: 'Viz Rankdir',
        entryId: `graphviz-rankdir-${dir}-entry`,
        entryTitle: `${self.context.configuration.object.graphvizRankdir === dir ? '&#9745' : '&#9744'} ${self.graphvizRankdirs[dir]}`,
        entryOnClickCallback: function () {
          self.context.configuration.object.graphvizRankdir = dir;
        },
        entryOnEachCallback: function () {
          let dirCheckId = `graphvizEngine-rankdir-${self.data.canvas.id}`;
          self.context.configuration.subscribe('graphvizRankdir', function (value) {
            d3.select(this).html(`${value === dir ? '&#9745' : '&#9744'} ${dir}`);
          }, dirCheckId);
        }
      });
    });

    // re-render when engine changes
    let dirRenderId = `graphvizRankdir-reRender-${self.data.canvas.id}`;
    self.context.configuration.subscribe('graphvizRankdir', reRender, dirRenderId);

    // remove menu if renderer is disabled
    let rendererDisableId = `graphvizEngine-disable-${self.data.canvas.id}`;
    self.context.renderingManager.subscribe(RENDERING_EVENTS.STATUS, function (r) {
      if (!r.enable) {
        self.parentClass.MainMenu.removeMenuEntry('graphviz-engines-entry');
        self.parentClass.MainMenu.removeMenuEntry('graphviz-rankdir-entry');
      }
    }, rendererDisableId);

    if (this.data.canvas.graph) {
      this.parentClass.MainMenu.addMultiMenuOnSettingsMenu({
        menuId: 'graph-settings-entry',
        menuTitle: 'Graph',
        entryId: 'neighbours-entry',
        entryTitle: `${self.context.configuration.object.showNeighbours ? '&#9745' : '&#9744'} Show Neighbours`,
        entryOnClickCallback: function () {
          self.context.configuration.object.showNeighbours = !self.context.configuration.object.showNeighbours;
        },
        entryOnEachCallback: function () {
          let showNeighboursId = `showNeighbours-onChange-${self.data.canvas.id}`;
          self.context.configuration.subscribe('showNeighbours', value => {
            d3.select(this).html(`${value ? '&#9745' : '&#9744'} Show Neighbours`);
          }, showNeighboursId);
        }
      });

      let removeMenuId = `graphSettings-removeMenu-${self.data.canvas.id}`;
      // remove menu if renderer is disabled
      self.context.renderingManager.subscribe(RENDERING_EVENTS.STATUS, r => {
        if (!r.enable) {
          this.parentClass.MainMenu.removeMenuEntry('graph-settings-entry');
        }
      }, removeMenuId);
    }

  }
}
