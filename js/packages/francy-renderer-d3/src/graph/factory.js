import { Decorators, Renderer } from 'francy-core';
import GenericGraph from './generic';
import TreeGraph from './tree';

export default class Graph extends Renderer {

  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
  }

  @Decorators.Data.requires('canvas.graph')
  async render() {

    let graph = undefined;
    switch (this.data.canvas.graph.type) {
    case 'tree':
      graph = new TreeGraph(this.options, this.context);
      break;
    default:
      graph = new GenericGraph(this.options, this.context);
    }

    let element = await this.handlePromise(graph.load(this.data).render());

    if (element) {
      setTimeout(element.parent.zoomToFit, this.transitionDuration);
    }

    return element;
  }
}
