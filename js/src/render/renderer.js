import BaseRenderer from './base';
import MathJaxWrapper from './mathjax-wrapper';
import { Configuration } from '../util/configuration';

/* global d3 */

export default class Renderer extends BaseRenderer {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
    if (new.target === Renderer) {
      throw new TypeError('Cannot instantiate [Renderer] classes directly!');
    }
    if (this.render === undefined || typeof this.render !== 'function') {
      throw new TypeError('Must override [render()] method!');
    }
    if (this.unrender === undefined) {
      this.logger.debug('No [unrender()] method specified...');
    }
    this.element = undefined;
    this.transitionDuration = Configuration.object.transitionDuration;
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
    return new MathJaxWrapper(this.options).load(this.data);
  }

}
