import Renderer from './renderer';
import TreeGraph from './graph-tree';
import GenericGraph from './graph-generic';
import { requires } from '../util/data-decorator';

export default class Graph extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @requires('canvas.graph')
  render() {

    let element = undefined;
    switch (this.data.canvas.graph.type) {
    case 'tree':
      element = new TreeGraph(this.options).load(this.data).render();
      break;
    default:
      element = new GenericGraph(this.options).load(this.data).render();
    }

    return element;
  }

  unrender() {}

}
