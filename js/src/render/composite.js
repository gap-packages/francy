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
    // update children rendering with a new parent!
    var options = this.options;
    options.appendTo = this;
    // render other components
    for (var renderer of this.renderers) {
      renderer.settings(options).load(this.data).render();
    }
  }
}
