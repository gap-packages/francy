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
    }

    // cannot continue if canvas is not present
    if (!canvas.node()) {
      throw new Error(`Oops, could not create canvas with id [${canvasId}]... Cannot proceed.`);
    }

    canvas.attr('width', json.canvas.width).attr('height', json.canvas.height);

    var content = canvas.select('g.content');

    if (!content.node()) {
      var contentGroup = canvas.append('g').attr('class', 'content');
      canvas.call(d3.zoom().on('zoom', function() {
        contentGroup.attr('transform', d3.event.transform);
      }));
    }

    this.logger.debug(`Canvas updated ${canvasId}...`);

    this.renderChildren(canvas, json);

    return canvas;
  }


}
