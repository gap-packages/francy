import {Decorators, Renderer} from 'francy-core';
import BarChart from './bar';
import LineChart from './line';
import ScatterChart from './scatter';

export default class ChartFactory extends Renderer {

  constructor({appendTo, callbackHandler}, context) {
    super({appendTo: appendTo, callbackHandler: callbackHandler}, context);
  }

  @Decorators.Data.requires('canvas.chart')
  async render() {
    let chart;
    switch (this.data.canvas.chart.type) {
    case 'bar':
      chart = new BarChart(this.options, this.context);
      break;
    case 'line':
      chart = new LineChart(this.options, this.context);
      break;
    case 'scatter':
      chart = new ScatterChart(this.options, this.context);
      break;
    default:
      chart = new BarChart(this.options, this.context);
    }

    let element = await this.handlePromise(chart.load(this.data).render());

    if (element) {
      setTimeout(element.parent.zoomToFit, this.transitionDuration);
    }

    return element;
  }
}
