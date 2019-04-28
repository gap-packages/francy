import { CompositeRenderer, Decorators, Logger } from 'francy-core';
import ChartGeneric from './chart/generic';
import GraphGeneric from './graph/generic';

/* global d3 */

export default class Canvas extends CompositeRenderer {

  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
    this.graphFactory = new GraphGeneric(this.options, this.context);
    this.chartFactory = new ChartGeneric(this.options, this.context);
  }

  @Decorators.Data.requires('canvas')
  async render() {
    const frameId = `Frame-${this.data.canvas.id}`;
    const canvasId = `Canvas-${this.data.canvas.id}`;

    this.element = d3.select(`div#${frameId}`).append('div')
      .classed('francy-canvas', true)
      .attr('id', canvasId);

    // cannot continue if canvas is not present
    if (!this.element.node()) {
      throw new Error(`Oops, could not create canvas within the Frame ID [${frameId}]... Cannot proceed.`);
    }

    this.zoomToFit = () => true;
    this.element.zoomToFit = this.zoomToFit;
    Logger.debug(`(${this.context.instanceId}) Canvas updated [${frameId}]...`);

    this.removeChildren();
    this.addChild(this.graphFactory).addChild(this.chartFactory);
    this.handlePromise(this.renderChildren());

    return this;
  }

}
