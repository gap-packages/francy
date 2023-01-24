import {
  Decorators,
  Renderer
} from 'francy-core';
import CanvasFrame from './frame-canvas';
import OutputFrame from './frame-output';

export default class Factory extends Renderer {

  constructor({appendTo, callbackHandler}, context) {
    super({appendTo: appendTo, callbackHandler: callbackHandler}, context);
    this.frame = new CanvasFrame(this.options, this.context);
    this.output = new OutputFrame(this.options, this.context);
  }

  @Decorators.Data.notEmpty()
  render() {
    let graph = undefined;

    if (this.data.canvas) {
      graph = this.frame.load(this.data).render();
    }

    if (this.data.output) {
      if (!graph) {
        graph = this.output.load(this.data).render();
      } else {
        graph.then(this.output.load(this.data).render);
      }
    }

    return graph;
  }
}
