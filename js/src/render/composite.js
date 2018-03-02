import Renderer from './renderer';

export default class Composite extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    if (new.target === Composite) {
      throw new TypeError('Cannot construct [Composite] instances directly!');
    }
    this.renderers = [];
  }

  add(renderer) {
    this.renderers.push(renderer);
    return this;
  }

  renderChildren() {
    // render other components
    for (let renderer of this.renderers) {
      renderer.settings({appendTo: this}).load(this.data).render();
    }
  }
}
