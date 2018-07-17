import Logger from '../util/logger';
import JsonUtils from '../util/json';
import { Exception } from '../util/exception';
import { Decorators } from '../decorator/factory';

/* global d3 */

/**
 * Base is the base of renderers and contains multiple utility methods.
 */
export default class BaseRenderer {

  /**
   * Base constructor
   * 
   * @typedef {Object} Options
   * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
   * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
   */
  constructor({ appendTo = 'body', callbackHandler }) {
    /**
     * @typedef {Object} Options
     * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
     * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
     */
    this.options = undefined;
    this.settings({ appendTo: appendTo, callbackHandler: callbackHandler });
    /**
     * @type {Object} the internal data model object
     */
    this.data = undefined;
    /**
     * @type {Logger} the logger for this class
     */
    this.log = new Logger();
  }

  /**
   * Saves the settings in an internal options object.
   * 
   * @typedef {Object} Options
   * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
   * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
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
   * Loads and stores data if valid
   * 
   * @param json a francy valid json
   * @param partial set this to true if the json is not a complete francy json object
   */
  load(json, partial) {
    let data = JsonUtils.parse(json, partial);
    if (data) {
      this.data = data;
    }
    return this;
  }

  /**
   * Returns the parent element of this class 
   */
  get parent() {
    return this.options.appendTo.element;
  }

  /**
   * Returns a logger instance
   */
  get logger() {
    return this.log;
  }
  
  /**
   * Generic error handler.
   * Will log the error and rethrow if error is unknown.
   */
  handleErrors(error) {
    if (error instanceof Exception) {
      // well, most of these are just informative
      this.logger.debug(error.message);
      return;
    }
    this.logger.error(error.message);
    throw error;
  }

  /**
   * Generic Promise handler.
   * This will show the Loader/Spinner on the application while processing.
   */
  handlePromise(promise) {
    let loader = Decorators.Loader.withContext(this).show();
    return promise
      .then(data => data)
      .catch(error => this.handleErrors(error))
      .finally(() => loader.hide());
  }

}
