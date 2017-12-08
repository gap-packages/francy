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

    var element = undefined;
    switch (json.canvas.chart.type) {
      case "bar":
        element = new BarChart(this.options).render(json);
        break;
      case "line":
        element = new LineChart(this.options).render(json);
        break;
      case "scatter":
        element = new ScatterChart(this.options).render(json);
        break;
    }

    return element;
  }

  static get colors() {
    return d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow);
  }

  static domainRange(max) {
    return Array.from(new Array(max), (_, i) => i).map(x => x);
  }

  unrender() {}

}
