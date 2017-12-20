import Base from './base';

/* global d3 */

export default class Renderer extends Base {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    if (new.target === Renderer) {
      throw new TypeError('Cannot construct [Renderer] instances directly!');
    }
    if (this.render === undefined || typeof this.render !== 'function') {
      throw new TypeError('Must override [render()] method!');
    }
    if (this.unrender === undefined) {
      this.logger.debug('No [unrender()] method specified...');
    }
    this.element = undefined;
  }

  get HTMLParent() {
    return this.options.appendTo.element.node().tagName.toUpperCase() === 'SVG' ? d3.select(this.options.appendTo.element.node().parentNode) : this.options.appendTo.element;
  }

  get SVGParent() {
    return this.options.appendTo.element.node().tagName.toUpperCase() === 'DIV' ? this.options.appendTo.element.select('svg') : this.options.appendTo.element;
  }

}
