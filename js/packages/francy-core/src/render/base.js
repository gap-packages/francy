import DataHandler from '../util/data-handler';
import { Decorators } from '../decorator/factory';
import { Exception } from '../util/exception';
import { Logger } from '../util/logger';

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
   * @param {Object} context - the context of the application, usually a configuration and a rendering manager instance
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
    if (appendTo && !appendTo.element) {
      appendTo = { element: d3.select(appendTo) };
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
   * Returns the current mouse position.
   * 
   * @private
   */
  _mousePosition() {
    let x = ((event.screenX + event.clientX) / 2) - event.pageX + event.offsetX;
    let y = ((event.screenY + event.clientY) / 2) - event.pageY + event.offsetY;
    return [ x, y ];
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
