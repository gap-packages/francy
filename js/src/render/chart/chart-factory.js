import Renderer from '../renderer';
import BarChart from './chart-bar';
import LineChart from './chart-line';
import ScatterChart from './chart-scatter';
import { Decorators } from '../../decorator/factory';

export default class ChartFactory extends Renderer {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @Decorators.Data.requires('canvas.chart')
  async render() {
    
    let element = undefined;
    let chart = undefined;
    switch (this.data.canvas.chart.type) {
    case 'bar':
      chart = new BarChart(this.options);
      break;
    case 'line':
      chart = new LineChart(this.options);
      break;
    case 'scatter':
      chart = new ScatterChart(this.options);
      break;
    }

    element = await this.handlePromise(chart.load(this.data).render());

    if (element) {
      setTimeout(element.parent.zoomToFit, this.transitionDuration);
    }

    return element;
  }

  unrender() {}

}
