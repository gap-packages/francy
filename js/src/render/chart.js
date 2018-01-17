import Renderer from './renderer';
import BarChart from './chart-bar';
import LineChart from './chart-line';
import ScatterChart from './chart-scatter';
import { requires } from '../decorator/data';

/* global d3 */

export default class Chart extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @requires('canvas.chart')
  render() {

    var element = undefined;
    switch (this.data.canvas.chart.type) {
      case "bar":
        element = new BarChart(this.options).load(this.data).render();
        break;
      case "line":
        element = new LineChart(this.options).load(this.data).render();
        break;
      case "scatter":
        element = new ScatterChart(this.options).load(this.data).render();
        break;
    }

    return element;
  }

  static tooltip(dataset, value) {
    return { "A": { 'title': 'Dataset', 'text': dataset }, "B": { 'title': 'Value', 'text': value } };
  }

  static get colors() {
    return d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow);
  }

  static domainRange(max) {
    return Array.from(new Array(max), (_, i) => i).map(x => x);
  }

  unrender() {}

}
