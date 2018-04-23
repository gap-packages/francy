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
  async render() {
    
    let element = undefined;
    switch (this.data.canvas.chart.type) {
    case 'bar':
      element = await new BarChart(this.options).load(this.data).render();
      break;
    case 'line':
      element = await new LineChart(this.options).load(this.data).render();
      break;
    case 'scatter':
      element = await new ScatterChart(this.options).load(this.data).render();
      break;
    }

    if (element) {
      setTimeout(element.parent.zoomToFit, 10);
    }

    return element;
  }

  unrender() {}

}
