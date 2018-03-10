import Base from './base';
import MathJaxWrapper from './mathjax-wrapper';

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
    this.mathjaxWrapper = new MathJaxWrapper(this.options);
    this.element = undefined;
    this.transitionDuration = 750; //ms
  }
  
  _initialize() {}

  get HTMLParent() {
    return this.parent.node().tagName.toLowerCase() === 'svg' ? d3.select(this.parent.node().parentNode) : this.parent;
  }

  get SVGParent() {
    return this.parent.node().tagName.toLowerCase() === 'div' ? this.parent.select('svg') : this.parent;
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
  
  get mathjax() {
    return this.mathjaxWrapper.load(this.data);
  }

}
