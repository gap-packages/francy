import IDUtils from '../util/id-utils';
import Composite from './composite';

/* global d3 */

export default class Canvas extends Composite {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render(json) {
    var parent = this.options.appendTo;

    var canvasId = IDUtils.getCanvasId(json.canvas.id);
    var canvas = parent.select(`svg#${canvasId}`);
    // check if the canvas is already present
    if (!canvas.node()) {
      // create a svg element detached from the DOM!
      this.logger.debug(`Creating Canvas [${canvasId}]...`);
      canvas = parent.append('svg')
        .attr('id', canvasId)
        .attr('class', 'canvas');
      canvas.call(d3.zoom().on('zoom', function() {
        canvas.attr('transform', `translate(${d3.event.transform.x},${d3.event.transform.y}) scale(${d3.event.transform.k})`);
      }));

      canvas.append('defs').selectAll('marker')
        .data(['arrow'])
        .enter().append('marker')
        .attr('class', 'arrows')
        .attr('id', d => d)
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 25)
        .attr('refY', 0)
        .attr('markerWidth', 10)
        .attr('markerHeight', 10)
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0,-5L10,0L0,5 L10,0 L0, -5');
    }

    // cannot continue if canvas is not present
    if (!canvas.node()) {
      throw new Error(`Oops, could not create canvas with id [${canvasId}]... Cannot proceed.`);
    }

    canvas.attr('width', json.canvas.w).attr('height', json.canvas.h);

    var draw = canvas.select('.draw');

    if (!draw.node()) {
      canvas = canvas.append('g').attr('class', 'draw');
    }
    else {
      canvas = draw;
    }

    this.logger.debug(`Canvas ready: ${canvas}`);

    this.renderChildren(canvas, json);

    return canvas;
  }



}
