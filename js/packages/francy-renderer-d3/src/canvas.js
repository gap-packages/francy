import { Logger, RENDERING_EVENTS, CompositeRenderer, Decorators, GlobalConfiguration } from 'francy-core';
import seedrandom from 'seedrandom';
import GraphFactory from './graph/factory';
import ChartFactory from './chart/factory';

/* global d3 */

export default class Canvas extends CompositeRenderer {

  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
    this.add(new GraphFactory(this.options, this.context)).add(new ChartFactory(this.options, this.context));
  }

  initialize() {
    if (GlobalConfiguration.object.fixedRandomSeed) {
      //set seed to produce always the same graphs
      seedrandom('Francy!', { global: true });
    }
  }

  @Decorators.Data.requires('canvas')
  @Decorators.Initializer.initialize()
  async render() {
    let content, zoom = d3.zoom(),
      self = this;

    function updateZoom(translateX, translateY, scale) {
      self.element.call(zoom.transform, d3.zoomIdentity.translate(translateX, translateY).scale(scale, scale));
    }

    function zoomed() {
      content.attr('transform', d3.event.transform);
    }

    function stopped() {
      if (d3.event.defaultPrevented) {
        d3.event.stopPropagation();
      }
    }

    function zoomToFit(force) {
      // only execute if enable, of course
      if (self.data.canvas.zoomToFit || force) {
        let bounds = content.node().getBBox();

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

        content.transition().duration(self.transitionDuration)
          .attr('transform', `translate(${translateX},${translateY})scale(${scale},${scale})`)
          .on('end', () => updateZoom(translateX, translateY, scale));
      }
    }

    const canvasId = `Canvas-${this.data.canvas.id}`;
    this.element = d3.select(`svg#${canvasId}`);
    // check if the canvas is already present
    if (!this.element.node()) {
      // create a svg element detached from the DOM!
      Logger.debug(`Creating Canvas [${canvasId}]...`);
      this.element = this.parent.append('svg')
        .classed('francy-canvas', true)
        .attr('xmlns', 'http://www.w3.org/2000/svg')
        .attr('xmlns:xlink', 'http://www.w3.org/1999/xlink')
        .attr('id', canvasId);
    }

    // cannot continue if canvas is not present
    if (!this.element.node()) {
      throw new Error(`Oops, could not create canvas with id [${canvasId}]... Cannot proceed.`);
    }

    this.element.attr('width', '100%').attr('height', this.data.canvas.height);

    content = this.element.select('g.francy-content');

    if (!content.node()) {
      content = this.element.append('g')
        .classed('francy-content', true)
        .classed('graph', true)
        .attr('id', 'graph0');
      zoom.on('zoom', zoomed);
      // remove zoom on double click!
      this.element.call(zoom).on('dblclick.zoom', null);
    }

    this.element.on('click', stopped, true);

    this.element.zoomToFit = this.zoomToFit = zoomToFit;

    Logger.debug(`Canvas updated [${canvasId}]...`);

    this._buildMenu();

    this.handlePromise(this.renderChildren());

    return this;
  }

  _buildMenu() {
    let self = this;
    // here we have access to MainMenu
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

      this.parentClass.MainMenu.addMultiMenuOnSettingsMenu({
        menuId: 'graph-settings-entry',
        menuTitle: 'Graph',
        entryId: 'drag-entry',
        entryTitle: `${self.context.configuration.object.dragNodes ? '&#9745' : '&#9744'} Drag Nodes`,
        entryOnClickCallback: function () {
          self.context.configuration.object.dragNodes = !self.context.configuration.object.dragNodes;
        },
        entryOnEachCallback: function () {
          let dragNodesId = `dragNodes-onChange-${self.data.canvas.id}`;
          self.context.configuration.subscribe('dragNodes', value => {
            d3.select(this).html(`${value ? '&#9745' : '&#9744'} Drag Nodes`);
          }, dragNodesId);
        }
      });
    }

    let removeMenuId = `graphSettings-removeMenu-${self.data.canvas.id}`;
    // remove menu if renderer is disabled
    self.context.renderingManager.subscribe(RENDERING_EVENTS.STATUS, r => {
      if (!r.enable) {
        this.parentClass.MainMenu.removeMenuEntry('graph-settings-entry');
      }
    }, removeMenuId);

  }
}
