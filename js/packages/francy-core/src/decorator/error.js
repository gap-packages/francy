import { Logger } from '../util/logger';
import { Utilities } from '../util/utilities';

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
    /**
     * Stores the flag for print stack trace to logs or not
     * @type {boolean}
     */
    this.printStackTrace = true;
    /**
     * Stores the flag for print stack trace to logs or not
     * @type {boolean}
     */
    this.logRetries = false;
    /**
     * Stores the number of retries for successful execution
     * @type {number}
     */
    this.retries = 1;
  }
  
  /**
   * This method stores the function to be executed safelly.
   * 
   * @public
   * @param {function} fn - a function to wrap
   * @return {this} instance
   */
  wrap(fn) {
    if (!Utilities.isFunction(fn)) throw Error(`[${fn}] is not a function!`);
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
   * This method stores a flag to indicate whether the error should be printed to log.
   * 
   * @public
   * @param {boolean} bool - true if the error must be logged, otherwise false. 
   * Defaults to true.
   * @return {this} instance
   */
  withStackTrace(bool) {
    if(Utilities.isBoolean(bool)){
      this.printStackTrace = bool;
    }
    return this;
  }
  
  /**
   * This method stores a flag to indicate whether the error should be printed to log.
   * 
   * @public
   * @param {boolean} bool - true if the error must be logged, otherwise false. 
   * Defaults to true.
   * @return {this} instance
   */
  withLogRetries(bool) {
    if(Utilities.isBoolean(bool)){
      this.logRetries = bool;
    }
    return this;
  }
  
  /**
   * This method stores the number of retries to execute the function.
   * 
   * @public
   * @param {integer} bool - true if the error must be logged, otherwise false. 
   * Defaults to true.
   * @return {this} instance
   */
  withRetries(n) {
    if(!isNaN(n)){
      this.retries = Math.floor(n);
    }
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
    if (Utilities.isFunction(fn)) {
      this.onErrorFns.push(fn);
    }
    return this;
  }

  /**
   * This method stores whether we should propagte the error if the function 
   * fails to execute, or if the error must be handled safelly.
   * 
   * @public
   * @param {boolean} bool - true if the error must be propagated, otherwise false. 
   * Defaults to false.
   * @return {this} instance
   */
  onErrorThrow(bool) {
    if(Utilities.isBoolean(bool)){
      this.throw = bool;
    }
    return this;
  }

  /**
   * This method will execute the wrapped function.
   * 
   * @public
   */
  handle() {
    const pause = (duration) => new Promise(r => setTimeout(r, duration));

    const backoff = (retries, fn, delay = 500) => {
      if (this.logRetries) {
        Logger.debug(`Call function [${this.context.constructor.name + '.' + this.function.name}] retry number [${(this.retries - retries + 1) + ' / ' + this.retries}]`);
      }
      return fn.apply(this, arguments).catch(err => {
        return retries > 1
          ? pause(delay).then(() => backoff(retries - 1, fn, delay * 2)) 
          : Promise.reject(err);
      });
    };

    return backoff(this.retries, this._handle).catch(e => {
      this._logEntry(e);
      this._runOnError();
      if (this.throw) throw e;
    }).then(result => result);
  }

  /**
   * This method will execute the wrapped function.
   * 
   * @private
   */
  _handle() {
    try {
      let result = this.function.apply(this.context, arguments);
      return Utilities.isaPromise(result) ? result : Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
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
  _logEntry(e) {
    if (this.printStackTrace) {
      Logger.info('Oops, we can\'t do anything about this...', e);
    } else {
      Logger.info(`Oops, we can't do anything about this... [${e}]`);
    }
  }

}