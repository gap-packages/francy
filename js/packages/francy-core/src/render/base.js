import DataHandler from '../util/data-handler';
import { Logger } from '../util/logger';
import { Exception } from '../util/exception';
import { Decorators } from '../decorator/factory';

/* global d3 */

/**
 * Base is the base of renderers and contains multiple utility methods.
 * 
 * @extends {DataHandler}
 */
export default class BaseRenderer extends DataHandler {

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   */
  constructor({ appendTo = 'body', callbackHandler }, context = { }) {
    super();
    /**
     * @typedef {Object} Options
     * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
     * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
     */
    this.options = undefined;
    this.settings({ appendTo: appendTo, callbackHandler: callbackHandler });
    this.context = context;
  }

  /**
   * Saves the settings in an internal options object.
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   * @returns {object} this instance
   * @public
   */
  settings({ appendTo, callbackHandler }) {
    this.options = this.options || {};
    if (!this.options.callbackHandler && !callbackHandler) {
      throw new Error('A Callback Handler must be provided! This will be used to trigger events from the graphics produced...');
    }
    if (!this.options.appendTo && !appendTo) {
      throw new Error('Missing an element or id to append the graphics to!');
    }
    if (typeof appendTo === 'string') {
      appendTo = {element: d3.select(appendTo)};
    }
    this.options.appendTo = appendTo || this.options.appendTo;
    this.options.callbackHandler = callbackHandler || this.options.callbackHandler;
    return this;
  }

  /**
   * Returns the parent element of this class
   * 
   * @return {object} a d3 object
   * @public
   */
  get parent() {
    return this.options.appendTo.element;
  }

  /**
   * Returns the parent class of this class
   * 
   * @return {Renderer} the {Renderer} or {Composite} parent of this class
   * @public
   */
  get parentClass() {
    return this.options.appendTo;
  }
  
  /**
   * Generic error handler.
   * Will log the error and rethrow if error is unknown.
   * 
   * @param {Error} error - an error instance
   * @public
   */
  static handleErrors(error) {
    if (error instanceof Exception) {
      // well, most of these are just informative
      Logger.debug(error.message);
      return;
    }
    Logger.error(error.message);
    throw error;
  }

  /**
   * Generic Promise handler.
   * This will show the Loader/Spinner on the application while processing.
   * 
   * @param {Promise} promise - a promise to execute
   * @return {Object} the result of the promise
   * @public
   */
  handlePromise(promise) {
    let loader = Decorators.Loader.withContext(this).show();
    return promise
      .then(data => data)
      .catch(error => BaseRenderer.handleErrors(error))
      .finally(() => loader.hide());
  }

}
