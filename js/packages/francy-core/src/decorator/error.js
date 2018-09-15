import {Logger} from '../util/logger';

/**
 * This {Decorator} class is used to safelly execute methods within a specified context.
 */
export default class ErrorDecorator {
  
  /**
   * Default constructor
   * @example Decorators.Error.wrap(function(){}).withContext(this).onErrorThrow(false).onErrorExec(function(){}).handle()
   */
  constructor() {
    /**
     * Stores the on error callbacks
     * @type {function[]}
     */
    this.onErrorFns = [];
    /**
     * Stores the context of execution
     * @type {Object}
     */
    this.context = undefined;
    /**
     * Stores the function to execute
     * @type {function}
     */
    this.function = undefined;
    /**
     * Stores the flag for re-throw or not
     * @type {boolean}
     */
    this.throw = false;
  }
  
  /**
   * This method stores the function to be executed safelly.
   * 
   * @public
   * @param {function} fn - a function to wrap
   * @return {this} instance
   */
  wrap(fn) {
    if (typeof fn !== 'function') throw Error(`[${fn}] is not a function!`);
    this.function = fn;
    return this;
  }

  /**
   * This method stores the context where the wrapped function will run.
   * 
   * @public
   * @param {Object} ctx - the context where this function will run
   * @return {this} instance
   */
  withContext(ctx) {
    this.context = ctx;
    return this;
  }

  /**
   * This method stores the function to execute in case an error occurs running 
   * the wrapped function.
   * 
   * @public
   * @param {function} fn - a function to execute if an error occurs
   * @return {this} instance
   */
  onErrorExec(fn) {
    if (typeof fn === 'function') {
      this.onErrorFns.push(fn);
    }
    return this;
  }

  /**
   * This method stores whether we should propagte the error if the function 
   * fails to execute, or if the error must be handled safelly.
   * 
   * @public
   * @param {boolean} t - true if the error must be propagated, otherwise false. 
   * Defaults to false.
   * @return {this} instance
   */
  onErrorThrow(t) {
    if(typeof (t) === 'boolean'){
      this.throw = t;
    }
    return this;
  }

  /**
   * This method will execute the wrapped function.
   * 
   * @public
   */
  handle() {
    let result = undefined;
    try {
      result = this.function.apply(this.context, arguments);
      if (result && typeof result.then === 'function') {
        result = result.catch(error => {
          this._logEntry(error);
          this._runOnError();
        }).then(result => result);
      }
    } catch (error) {
      this._logEntry(error);
      this._runOnError();
      if (this.throw) {
        throw error;
      }
    }
    return result;
  }

  /**
   * Helper method to handle error conditions
   * @private
   */
  _runOnError() {
    this.onErrorFns.forEach(fn => {
      try {
        fn.call(this.context);
      } catch(error) {
        this._logEntry(error);
        if (this.throw) {
          throw error;
        }
      }
    });
  }

  /**
   * Helper method to log
   * @private
   */
  _logEntry(error) {
    Logger.info(`We can't do anything about this! An error occurred: [${error}]`);
  }

}