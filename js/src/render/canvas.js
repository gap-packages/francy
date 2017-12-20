import Composite from './composite';
import Graph from './graph';
import Chart from './chart';
import { dontExecuteIfNoData } from '../decorator/data';

/* global d3 */

export default class Canvas extends Composite {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    this.graph = new Graph(this.options);
    this.chart = new Chart(this.options);
    this.add(this.graph).add(this.chart);
  }

  @dontExecuteIfNoData()
  render() {
    var parent = this.options.appendTo.element;

    var canvasId = this.data.canvas.id;
    this.element = d3.select(`svg#${canvasId}`);
    // check if the canvas is already present
    if (!this.element.node()) {
      // create a svg element detached from the DOM!
      this.logger.debug(`Creating Canvas [${canvasId}]...`);
      this.element = parent.append('svg')
        .attr('class', 'francy-canvas')
        .attr('id', canvasId);
    }

    // cannot continue if canvas is not present
    if (!this.element.node()) {
      throw new Error(`Oops, could not create canvas with id [${canvasId}]... Cannot proceed.`);
    }

    this.element.attr('width', this.data.canvas.width).attr('height', this.data.canvas.height);

    var zoom = d3.zoom();

    var content = this.element.select('g.francy-content');

    if (!content.node()) {
      content = this.element.append('g').attr('class', 'francy-content');
      zoom.on("zoom", zoomed);
      this.element.call(zoom).on("dblclick.zoom", null);
    }

    this.element.on("click", stopped, true);

    var self = this;
    this.element.zoomToFit = this.zoomToFit = function() {
      // only execute if enable, of course
      if (self.data.canvas.zoomToFit) {
        var bounds = content.node().getBBox();

        var clientBounds = self.element.node().getBoundingClientRect(),
          fullWidth = clientBounds.right - clientBounds.left,
          fullHeight = clientBounds.bottom - clientBounds.top;

        var width = bounds.width,
          height = bounds.height;

        if (width == 0 || height == 0) return;

        var midX = bounds.x + width / 2,
          midY = bounds.y + height / 2;

        var scale = 0.75 / Math.max(width / fullWidth, height / fullHeight);
        var translateX = fullWidth / 2 - scale * midX,
          translateY = fullHeight / 2 - scale * midY;

        content.transition()
          .duration(2000)
          .attr('transform', `translate(${translateX},${translateY})scale(${scale},${scale})`)
          .on('end', () => updateZoom(translateX, translateY, scale));
      }
    };

    function updateZoom(translateX, translateY, scale) {
      self.element.call(zoom.transform, d3.zoomIdentity.translate(translateX, translateY).scale(scale, scale));
    }

    function zoomed() {
      content.attr("transform", d3.event.transform);
    }

    function stopped() {
      if (d3.event.defaultPrevented) { d3.event.stopPropagation(); }
    }

    this.logger.debug(`Canvas updated [${canvasId}]...`);

    this.renderChildren();

    return this;
  }

  unrender() {}

}
