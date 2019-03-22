import BaseRenderer from './base';
import { Components } from '../component/factory';
import { Decorators } from '../decorator/factory';

/* global MathJax */

/**
 * This class wraps the MathJax component and renders MathJax components 
 * by replacing HTML or SVG components with the MathJax representation.
 * 
 * @example mathjax.settings({appendTo: {element: text}, renderType: 'SVG', postFunction: () => {}}).render()
 * 
 * @extends {BaseRenderer}
 */
export default class MathJaxWrapper extends BaseRenderer {

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   */
  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
  }

  /**
   * This method is used to render this component
   * 
   * @public
   */
  @Decorators.Data.enabled('canvas.texTypesetting')
  async render() {
    // if no element here just return...
    if (!Components.MathJax.isAvailable ||
      !this.parent || !this.parent.node()) return;
    // check for a post exec function
    this.options.postFunction = this.options.postFunction || function () {};
    MathJax.Hub.Queue(
      ['setRenderer', MathJax.Hub, this.options.renderType], ['Typeset', MathJax.Hub, this.parent.node()], [this.options.postFunction]
    );
  }

  /**
   * Saves the settings in an internal options object.
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   * @property {string} options.renderType - one of 'SVG' or 'HTML'
   * @property {Function} options.postFunction - a function to run after the conversion of mathjax
   * @returns {object} this instance
   * @public
   */
  settings({ appendTo, callbackHandler, renderType, postFunction }) {
    super.settings({ appendTo, callbackHandler });
    this.options.renderType = renderType;
    this.options.postFunction = postFunction;
    return this;
  }

}
