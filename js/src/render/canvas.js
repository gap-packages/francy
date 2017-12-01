import IDUtils from '../util/id-utils';
import Composite from './composite';

/* global d3 */

//FIXME implement propper zoom to fit, see https://bl.ocks.org/iamkevinv/0a24e9126cd2fa6b283c6f2d774b69a2
export default class Canvas extends Composite {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render(json) {
    var parent = d3.select(this.options.appendTo);
    //var active = d3.select(null);
    var canvasId = IDUtils.getCanvasId(json.canvas.id);
    var canvas = d3.select(`svg#${canvasId}`);
    // check if the canvas is already present
    if (!canvas.node()) {
      // create a svg element detached from the DOM!
      this.logger.debug(`Creating Canvas [${canvasId}]...`);
      canvas = parent.append('svg')
        .attr('id', canvasId)
        .attr('class', 'francy francy-canvas');
    }

    // cannot continue if canvas is not present
    if (!canvas.node()) {
      throw new Error(`Oops, could not create canvas with id [${canvasId}]... Cannot proceed.`);
    }

    canvas.attr('width', json.canvas.width).attr('height', json.canvas.height);

    var zoom = d3.zoom(); //.scaleExtent([1, 8]);

    var content = canvas.select('g.francy-content');

    if (!content.node()) {
      content = canvas.append('g').attr('class', 'francy-content');
      zoom.on("zoom", zoomed);
      canvas.call(zoom).on("dblclick.zoom", null); //.transform, d3.zoomIdentity);
    }

    canvas.on("click", stopped, true);

    canvas.zoomToFit = function() {
      var bounds = content.node().getBBox();

      var fullWidth = canvas.node().clientWidth,
        fullHeight = canvas.node().clientHeight + 40; //well, the menu is part of the canvas

      var width = bounds.width,
        height = bounds.height;

      if (width == 0 || height == 0) return;

      var midX = bounds.x + width / 2,
        midY = bounds.y + height / 2;

      var scale = (0.75) / Math.max(width / fullWidth, height / fullHeight);
      var translateX = fullWidth / 2 - scale * midX,
        translateY = fullHeight / 2 - scale * midY;

      content.transition()
        .duration(2000)
        .attr('transform', `translate(${translateX},${translateY})scale(${scale},${scale})`)
        .on('end', () => updateZoom(translateX, translateY, scale));
    };

    function updateZoom(translateX, translateY, scale) {
      canvas.call(zoom.transform, d3.zoomIdentity.translate(translateX, translateY).scale(scale, scale));
    }

    function zoomed() {
      content.attr("transform", d3.event.transform);
    }

    function stopped() {
      if (d3.event.defaultPrevented) { d3.event.stopPropagation(); }
    }

    this.logger.debug(`Canvas updated [${canvasId}]...`);

    this.renderChildren(canvas, json);

    return canvas;
  }

}
