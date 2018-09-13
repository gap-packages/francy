import BaseRenderer from './base';
import MathJaxWrapper from './mathjax-wrapper';
import { Configuration } from '../util/configuration';
import { Logger } from '../util/logger';

/* global d3 */

/**
 * This class represents a rendable component.
 * Instances of this class must implement a {Renderer#render} method
 * and optionaly an {Renderer#unrender} method.
 * 
 * @extends {BaseRenderer}
 */
export default class Renderer extends BaseRenderer {

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   */
  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
    if (new.target === Renderer) {
      throw new TypeError('Cannot instantiate [Renderer] classes directly!');
    }
    if (this.render === undefined || typeof this.render !== 'function') {
      throw new TypeError('Must override [render()] method!');
    }
    if (this.unrender === undefined) {
      Logger.debug('No [unrender()] method specified...');
    }
    /**
     * Stores the element renderer
     * @type {object}
     */
    this.element = undefined;
    /**
     * Stores the default animation duration
     * @type {number}
     */
    this.transitionDuration = Configuration.object.transitionDuration;
  }

  /**
   * This method is used by the decorator {Decorators.Initializer.initialize()} 
   * to initialize this renderer.
   * 
   * @override
   * @public
   */
  initialize() {}
  
  /**
   * Handles component unrender
   * 
   * @public
   */
  unrender() {}

  /**
   * Return the HTML component holding this element
   * 
   * @returns {object} the first HTML element holding this component, otherwise the parent element whatever it is (most likely an HTML)
   * @public
   */
  get HTMLParent() {
    return this.parent.node().tagName.toLowerCase() === 'svg' ? d3.select(this.parent.node().parentNode) : this.parent;
  }

  /**
   * Returns the SVG element if available, otherwise the parent element whatever it is (most likely an HTML)
   * 
   * @returns {object} the SVG element
   * @public
   */
  get SVGParent() {
    return this.parent.node().tagName.toLowerCase() === 'div' ? this.parent.select('svg') : this.parent;
  }

  /**
   * Returns a static object containing margins
   * 
   * @returns {object} and object containing default margins: { top: 50, right: 50, bottom: 50, left: 50 }
   * @public
   */
  get margin() {
    return { top: 50, right: 50, bottom: 50, left: 50 };
  }
  
  /**
   * Returns the width of the parent
   * 
   * @returns {number} the width of the html parent
   * @public
   */
  get width() {
    let width = +this.parent.attr('width') || d3.select('body').node().getBoundingClientRect().width;
    return width - this.margin.left - this.margin.right;
  }
  
  /**
   * Returns the height of the parent
   * 
   * @returns {number} the height of the html parent
   * @public
   */
  get height() {
    let height = +this.parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;
    return height - this.margin.top - this.margin.bottom;
  }
  
  /**
   * Returns the MathJax component
   * 
   * @returns {MathJaxWrapper} the MathJax component
   * @public
   */
  get mathjax() {
    return new MathJaxWrapper(this.options).load(this.data);
  }

}
