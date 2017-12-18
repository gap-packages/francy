import Base from './base';

/* global d3 */

export default class Renderer extends Base {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    if (new.target === Renderer) {
      throw new TypeError('Cannot construct [Renderer] instances directly!');
    }
    if (this.render === undefined || typeof this.render !== 'function') {
      throw new TypeError('Must override [render(json)] method!');
    }
    if (this.unrender === undefined) {
      this.logger.debug('No [unrender()] method specified...');
    }
  }

  get HTMLParent() {
    return this.options.appendTo.node().tagName === 'SVG' ? d3.select(this.options.appendTo.node().parentNode) : this.options.appendTo;
  }

  get SVGParent() {
    return this.options.appendTo.node().tagName === 'DIV' ? this.options.appendTo.select('svg') : this.options.appendTo;
  }

}
