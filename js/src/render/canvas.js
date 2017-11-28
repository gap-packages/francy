import IDUtils from '../util/id-utils';
import Composite from './composite';

/* global d3 */

//FIXME implement propper zoom to fit, see https://bl.ocks.org/iamkevinv/0a24e9126cd2fa6b283c6f2d774b69a2
export default class Canvas extends Composite {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render(json) {
    var parent = d3.select(this.options.appendTo).node();
    //var active = d3.select(null);
    var canvasId = IDUtils.getCanvasId(json.canvas.id);
    var canvas = parent.select(`svg#${canvasId}`);
    // check if the canvas is already present
    if (!canvas.node()) {
      // create a svg element detached from the DOM!
      this.logger.debug(`Creating Canvas [${canvasId}]...`);
      canvas = parent.append('svg')
        .attr('id', canvasId)
        .attr('class', 'francy-canvas');
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

    /*
         this.zoomToFit = clicked;

         function clicked() {
           if (active.node() === this) { return zoomReset(); }
           active.classed("active", false);
           active = d3.select(this).classed("active", true);

           var dx = this.getBBox().width,
             dy = this.getBBox().height,
             scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / json.canvas.width, dy / json.canvas.height))),
             translate = [json.canvas.width / 2 - scale, json.canvas.height / 2 - scale];

           canvas.transition()
             .duration(750)
             .call(zoom.transform, d3.zoomIdentity.translate(translate[0], translate[1]).scale(scale));
         }

         function zoomReset() {
           active.classed("active", false);
           active = d3.select(null);
           canvas.transition()
             .duration(750)
             .call(zoom.transform, d3.zoomIdentity); // updated for d3 v4
         }
     */
    function zoomed() {
      content.attr("transform", d3.event.transform);
    }

    function stopped() {
      if (d3.event.defaultPrevented) { d3.event.stopPropagation(); }
    }

    this.logger.debug(`Canvas updated [${canvasId}]...`);

    //this.canvas = canvas;

    this.renderChildren(canvas, json);

    return canvas;
  }

}
