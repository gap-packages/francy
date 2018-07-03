import Renderer from './renderer';
import TreeGraph from './graph-tree';
import GenericGraph from './graph-generic';
import { Decorators } from '../decorator/factory';

export default class Graph extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @Decorators.Data.requires('canvas.graph')
  async render() {

    let element = undefined;
    let graph = element;
    switch (this.data.canvas.graph.type) {
    case 'tree':
      graph = new TreeGraph(this.options);
      break;
    default:
      graph = new GenericGraph(this.options);
    }
    
    element = await this.handlePromise(graph.load(this.data).render());

    return element;
  }

  unrender() {}

}
