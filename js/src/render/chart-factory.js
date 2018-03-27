import Renderer from './renderer';
import BarChart from './chart-bar';
import LineChart from './chart-line';
import ScatterChart from './chart-scatter';
import { requires } from '../util/data-decorator';
import { loader } from '../util/loader-decorator';

export default class ChartFactory extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @loader()
  @requires('canvas.chart')
  async render() {
    
    let element = undefined;
    switch (this.data.canvas.chart.type) {
    case 'bar':
      element = new BarChart(this.options).load(this.data).render();
      break;
    case 'line':
      element = new LineChart(this.options).load(this.data).render();
      break;
    case 'scatter':
      element = new ScatterChart(this.options).load(this.data).render();
      break;
    }

    return element;
  }

  unrender() {}

}
