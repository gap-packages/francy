import { Logger, CompositeRenderer, Decorators } from 'francy-core';
import GraphGeneric from './graph/graph-generic';
import ChartGeneric from './chart/chart-generic';

/* global d3 */

export default class Canvas extends CompositeRenderer {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
    this.add(new GraphGeneric(this.options)).add(new ChartGeneric(this.options));
  }

  @Decorators.Data.requires('canvas')
  async render() {

    const canvasId = `Canvas-${this.data.canvas.id}`;

    this.element = d3.select(`div#${canvasId}`);
    // check if the canvas is already present
    if (!this.element.node()) {
      // create a svg element detached from the DOM!
      Logger.debug(`Creating Canvas [${canvasId}]...`);
      this.element = this.parent.append('div')
        .attr('class', 'francy-canvas')
        .attr('id', canvasId);
    }

    // cannot continue if canvas is not present
    if (!this.element.node()) {
      throw new Error(`Oops, could not create canvas with id [${canvasId}]... Cannot proceed.`);
    }

    this.element.attr('width', this.data.canvas.width).attr('height', this.data.canvas.height);

    let content = this.element.select('div.francy-content');

    if (!content.node()) {
      content = this.element.append('div').attr('class', 'francy-content');
    }

    Logger.debug(`Canvas updated [${canvasId}]...`);

    this.handlePromise(this.renderChildren());

    return this;
  }
}
