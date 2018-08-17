import { Decorators, Renderer } from 'francy-core';
import TreeGraph from './graph-tree';
import GenericGraph from './graph-generic';

export default class Graph extends Renderer {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
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

    if (element) {
      setTimeout(element.parent.zoomToFit, this.transitionDuration);
    }

    return element;
  }

  unrender() {}

}
