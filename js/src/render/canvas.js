import Composite from './composite';
import GraphFactory from './graph-factory';
import ChartFactory from './chart-factory';
import { requires } from '../util/data-decorator';

/* global d3 */

export default class Canvas extends Composite {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    this.graphFactory = new GraphFactory(this.options);
    this.chartFactory = new ChartFactory(this.options);
    this.add(this.graphFactory).add(this.chartFactory);
  }

  @requires('canvas')
  render() {
    let content;
    let zoom = d3.zoom();
    let self = this;

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

        content.transition()
          .duration(self.transitionDuration)
          .attr('transform', `translate(${translateX},${translateY})scale(${scale},${scale})`)
          .on('end', () => updateZoom(translateX, translateY, scale));
      }
    }

    const canvasId = `Canvas-${this.data.canvas.id}`;
    this.element = d3.select(`svg#${canvasId}`);
    // check if the canvas is already present
    if (!this.element.node()) {
      // create a svg element detached from the DOM!
      this.logger.debug(`Creating Canvas [${canvasId}]...`);
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

    this.logger.debug(`Canvas updated [${canvasId}]...`);

    this.renderChildren();

    setTimeout(() => {
      zoomToFit();
    }, this.transitionDuration);

    return this;
  }

  unrender() {}

}
