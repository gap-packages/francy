import Renderer from './renderer';

export default class Composite extends Renderer {

  renderers = [];

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    if (new.target === Composite) {
      throw new TypeError('Cannot construct [Composite] instances directly!');
    }
  }

  add(renderer) {
    this.renderers.push(renderer);
  }

  renderChildren(parent, json) {
    // update children rendering with a new parent if required!
    var childrenOptions = this.options;
    if (parent) {
      childrenOptions.appendTo = parent.node();
    }
    // render other components
    for (var renderer of this.renderers) {
      renderer.update(childrenOptions).render(json);
    }
  }
}
