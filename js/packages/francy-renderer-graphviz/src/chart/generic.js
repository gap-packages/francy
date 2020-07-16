import { Decorators, Renderer } from 'francy-core';

export default class ChartGeneric extends Renderer {

  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
  }

  @Decorators.Data.requires('canvas.chart')
  async render() {
    const canvasId = `Canvas-${this.data.canvas.id}`;
    this.parentClass.element = this.parent.append('svg')
      .classed('francy-canvas', true)
      .attr('xmlns', 'http://www.w3.org/2000/svg')
      .attr('xmlns:xlink', 'http://www.w3.org/1999/xlink')
      .attr('id', canvasId).attr('width', '100%').attr('height', this.data.canvas.height);

    this.element = this.parentClass.element.append('g').classed('francy-content', true)
      .classed('graph', true)
      .attr('id', 'graph0').append('text').text('Not supported by this renderer...');

    this.options.appendTo.zoom = d3.zoom();

    this.parentClass.zoomToFit(true);
  }

}
