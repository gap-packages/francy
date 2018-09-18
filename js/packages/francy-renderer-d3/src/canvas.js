import { Logger, CompositeRenderer, Decorators, Configuration } from 'francy-core';
import * as ignore from 'seedrandom';
import GraphFactory from './graph/graph-factory';
import ChartFactory from './chart/chart-factory';

/* global d3 */

export default class Canvas extends CompositeRenderer {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
    this.add(new GraphFactory(this.options)).add(new ChartFactory(this.options));
  }

  initialize() {
    if (Configuration.object.fixedRandomSeed) {
      //set seed to produce always the same graphs
      Math.seedrandom('Francy!');
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
        .attr('class', 'francy-canvas')
        .attr('id', canvasId);
    }

    // cannot continue if canvas is not present
    if (!this.element.node()) {
      throw new Error(`Oops, could not create canvas with id [${canvasId}]... Cannot proceed.`);
    }

    this.element.attr('width', this.data.canvas.width).attr('height', this.data.canvas.height);

    content = this.element.select('g.francy-content');

    if (!content.node()) {
      content = this.element.append('g').attr('class', 'francy-content');
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
    // here we have access to MainMenu
    if (this.data.canvas.graph) {
      this.parentClass.MainMenu.addEntryOnOptionsMenu({
        id: 'neighbours-entry',
        title: `${Configuration.object.showNeighbours ? '&#9745' : '&#9744'} Show Neighbours`,
        onClickCallback: function () {
          Configuration.object.showNeighbours = !Configuration.object.showNeighbours;
        },
        onEachCallback: function () {
          Configuration.subscribe('showNeighbours', value => {
            d3.select(this).html(`${value ? '&#9745' : '&#9744'} Show Neighbours`);
          });
        }
      });

      this.parentClass.MainMenu.addEntryOnOptionsMenu({
        id: 'drag-entry',
        title: `${Configuration.object.dragNodes ? '&#9745' : '&#9744'} Drag Nodes`,
        onClickCallback: function () {
          Configuration.object.dragNodes = !Configuration.object.dragNodes;
        },
        onEachCallback: function () {
          Configuration.subscribe('dragNodes', value => {
            d3.select(this).html(`${value ? '&#9745' : '&#9744'} Drag Nodes`);
          });
        },
        withSeparator: true
      });
    }
  }
}
