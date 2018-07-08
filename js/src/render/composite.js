import Renderer from './renderer';

export default class Composite extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    if (new.target === Composite) {
      throw new TypeError('Cannot instantiate [Composite] classes directly!');
    }
    this.renderers = [];
  }

  add(renderer) {
    if (renderer) {
      this.renderers.push(renderer);
    }
    return this;
  }

  async renderChildren() {
    // render other components
    for (let renderer of this.renderers) {
      await this.handlePromise(renderer.settings({appendTo: this}).load(this.data).render());
    }
    this.ready = true;
  }
}
