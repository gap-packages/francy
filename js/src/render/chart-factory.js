import Renderer from './renderer';
import BarChart from './chart-bar';
import LineChart from './chart-line';
import ScatterChart from './chart-scatter';
import { requires } from '../util/data-decorator';

export default class ChartFactory extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @requires('canvas.chart')
  render() {

    switch (this.data.canvas.chart.type) {
    case 'bar':
      this.element = new BarChart(this.options).load(this.data).render();
      break;
    case 'line':
      this.element = new LineChart(this.options).load(this.data).render();
      break;
    case 'scatter':
      this.element = new ScatterChart(this.options).load(this.data).render();
      break;
    }

    return this;
  }

  unrender() {}

}
