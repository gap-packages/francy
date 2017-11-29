import Renderer from './renderer';
import BarChart from './chart-bar';
import LineChart from './chart-line';
import ScatterChart from './chart-scatter';

/* global d3 */

export default class Chart extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render(json) {

    if (!json.canvas.chart) {
      return;
    }

    switch (json.canvas.chart.type) {
      case "bar":
        return new BarChart(this.options).render(json);
      case "line":
        return new LineChart(this.options).render(json);
      case "scatter":
        return new ScatterChart(this.options).render(json);
      default:
        throw new TypeError(`The chart type [${json.canvas.chart.type}] is not implemented!`);
    }
  }

  static get colors() {
    return d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow);
  }

  static domainRange(max) {
    return Array.from(new Array(max), (_, i) => i).map(x => x);
  }

  static zoomToFit(element) {
    var transform = d3.zoomTransform(element.node());
    transform.translate(element.left, element.top);
  }

}
