import Base from './base';

/* global d3 */

export default class Renderer extends Base {

  constructor({ verbose = false, appendTo, callbackHandler, options = {} }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler, options: options });
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
    this.transitionDuration = 750; //ms
  }
  
  _initialize() {}

  get HTMLParent() {
    return this.options.appendTo.element.node().tagName.toLowerCase() === 'svg' ? d3.select(this.options.appendTo.element.node().parentNode) : this.options.appendTo.element;
  }

  get SVGParent() {
    return this.options.appendTo.element.node().tagName.toLowerCase() === 'div' ? this.options.appendTo.element.select('svg') : this.options.appendTo.element;
  }
  
  get parent() {
    return this.options.appendTo.element;
  }
  
  get margin() {
    return { top: 50, right: 50, bottom: 50, left: 50 };
  }
  
  get width() {
    let width = +this.parent.attr('width') || d3.select('body').node().getBoundingClientRect().width;
    return width - this.margin.left - this.margin.right;
  }
  
  get height() {
    let height = +this.parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;
    return height - this.margin.top - this.margin.bottom;
  }

}
