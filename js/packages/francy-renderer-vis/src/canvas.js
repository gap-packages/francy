import { CompositeRenderer, Decorators, Logger, RENDERING_EVENTS } from 'francy-core';
import ChartGeneric from './chart/generic';
import GraphGeneric from './graph/generic';

/* global d3 */

export default class Canvas extends CompositeRenderer {

  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
    this.graphFactory = new GraphGeneric(this.options, this.context);
    this.chartFactory = new ChartGeneric(this.options, this.context);
    this.visLayoutSortMethod = ['directed', 'hubsize'];
    this.visLayoutDirections = { 'UD': 'Top to Bottom', 'LR': 'Left to Right', 'DU': 'Bottom to Top', 'RL': 'Right to Left' };
    // this only adds if does not exist
    this.context.configuration.addProperty('visLayoutSortMethod', 'directed');
    this.context.configuration.addProperty('visLayoutDirection', 'UD');
  }

  @Decorators.Data.requires('canvas')
  async render() {
    const canvasId = `Canvas-${this.data.canvas.id}`;
    
    this.element = d3.select(`div#${canvasId}`);
    
    // check if the canvas is already present
    if (!this.element.node()) {
      // create a svg element detached from the DOM!
      Logger.debug(`(${this.context.instanceId}) Creating Canvas [${canvasId}]...`);
      this.element = this.parent.append('div')
        .classed('francy-canvas', true)
        .attr('id', canvasId);
    }

    // cannot continue if canvas is not present
    if (!this.element.node()) {
      throw new Error(`Oops, could not create canvas with id [${canvasId}]... Cannot proceed.`);
    }

    this.zoomToFit = () => true;
    this.element.zoomToFit = this.zoomToFit;
    
    Logger.debug(`(${this.context.instanceId}) Canvas updated [${canvasId}]...`);
    
    this._buildMenu();

    this.removeChildren();
    this.addChild(this.graphFactory).addChild(this.chartFactory);
    this.handlePromise(this.renderChildren());

    return this;
  }

  _buildMenu() {
    var self = this;
    // here we have access to MainMenu
    this.visLayoutSortMethod.forEach((method) => {
      this.parentClass.MainMenu.addMultiMenuOnSettingsMenu({
        menuId: 'vis-sort-method-entry',
        menuTitle: 'Sort Method',
        entryId: `vis-sort-method-${method}-entry`,
        entryTitle: `${self.context.configuration.object.visLayoutSortMethod === method ? '&#9745' : '&#9744'} ${method}`,
        entryOnClickCallback: function () {
          self.context.configuration.object.visLayoutSortMethod = method;
        },
        entryOnEachCallback: function () {
          let methodCheckId = `vis-sort-method-checkbox-${self.data.canvas.id}`;
          self.context.configuration.subscribe('visLayoutSortMethod', function (value) {
            d3.select(this).html(`${value === method ? '&#9745' : '&#9744'} ${method}`);
          }, methodCheckId);
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
    let engineRenderId = `vis-sort-method-reRender-${self.data.canvas.id}`;
    self.context.configuration.subscribe('visLayoutSortMethod', reRender, engineRenderId);

    Object.keys(this.visLayoutDirections).forEach((dir) => {
      this.parentClass.MainMenu.addMultiMenuOnSettingsMenu({
        menuId: 'vis-dir-entry',
        menuTitle: 'Direction',
        entryId: `vis-dir-${dir}-entry`,
        entryTitle: `${self.context.configuration.object.visLayoutDirection === dir ? '&#9745' : '&#9744'} ${self.visLayoutDirections[dir]}`,
        entryOnClickCallback: function () {
          self.context.configuration.object.visLayoutDirection = dir;
        },
        entryOnEachCallback: function () {
          let dirCheckId = `vis-dir-${self.data.canvas.id}`;
          self.context.configuration.subscribe('visLayoutDirection', function (value) {
            d3.select(this).html(`${value === dir ? '&#9745' : '&#9744'} ${dir}`);
          }, dirCheckId);
        }
      });
    });

    // re-render when engine changes
    let dirRenderId = `vis-dir-reRender-${self.data.canvas.id}`;
    self.context.configuration.subscribe('visLayoutDirection', reRender, dirRenderId);

    // remove menu if renderer is disabled
    let rendererDisableId = `vis-disable-${self.data.canvas.id}`;
    self.context.renderingManager.subscribe(RENDERING_EVENTS.STATUS, function (r) {
      if (!r.enable) {
        self.parentClass.MainMenu.removeMenuEntry('vis-sort-method-entry');
        self.parentClass.MainMenu.removeMenuEntry('vis-dir-entry');
      }
    }, rendererDisableId);
  }

}
