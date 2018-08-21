import {Logger} from '../util/logger';

export default class ErrorDecorator {
  
  constructor() {
    this.onErrorFns = [];
    this.context = undefined;
    this.function = undefined;
    this.throw = false;
  }
  
  wrap(fn) {
    if (typeof fn !== 'function') throw Error(`[${fn}] is not a function!`);
    this.function = fn;
    return this;
  }

  withContext(ctx) {
    this.context = ctx;
    return this;
  }

  onErrorExec(fn) {
    if (typeof fn === 'function') {
      this.onErrorFns.push(fn);
    }
    return this;
  }
  
  onErrorThrow(t) {
    if(typeof (t) === 'boolean'){
      this.throw = t;
    }
    return this;
  }

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

  _logEntry(error) {
    Logger.info(`We can't do anything about this! An error occurred: [${error}]`);
  }

}