import { Logger } from '../util/logger';
import DataHandler from '../util/data-handler';
import { Exception } from '../util/exception';
import { Decorators } from '../decorator/factory';

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
    this.dataHandler = new DataHandler();
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

  load(json, partial) {
    this.dataHandler.load(json, partial);
    return this;
  }
  
  get data() {
    return this.dataHandler.data;
  }

  /**
   * Returns the parent element of this class 
   */
  get parent() {
    return this.options.appendTo.element;
  }
  
  /**
   * Generic error handler.
   * Will log the error and rethrow if error is unknown.
   */
  handleErrors(error) {
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
   */
  handlePromise(promise) {
    let loader = Decorators.Loader.withContext(this).show();
    return promise
      .then(data => data)
      .catch(error => this.handleErrors(error))
      .finally(() => loader.hide());
  }

}
