import Logger from '../util/logger';
import { Decorators } from '../decorator/factory';

/**
 * Base is the base of renderers and contains multiple utility methods.
 */
export default class BaseComponent {

  /**
   * Base constructor
   * 
   * @typedef {Object} Options
   * @property {Boolean} verbose prints extra log information to console.log, default false
   * @property {Boolean} mandatory whether the component is mandatory or optional
   */
  constructor(mandatory = false, delay = false) {
    if (this.initialize === undefined || typeof this.initialize !== 'function') {
      throw new TypeError('Must override [initialize()] method!');
    }
    this.available = false;
    /**
     * @typedef {Object} Options
     * @property {Boolean} verbose prints extra log information to console.log, default false
     * @property {Boolean} mandatory whether the component is mandatory or optional
     */
    this.options = undefined;
    this.settings({ mandatory: mandatory });
    /**
     * @type {Logger} the logger for this class
     */
    this.log = new Logger();
    // run initialization
    let decorator = Decorators.Error.wrap(this._initialize).withContext(this).onErrorThrow(mandatory).onErrorExec(this._onError);
    if (delay) {
      setTimeout(() => decorator.handle(), 0);
    } else {
      decorator.handle();
    }
  }
  
  _initialize() {
    this.initialize();
    this.available = true;
  }

  /**
   * Saves the settings in an internal options object.
   * 
   * @typedef {Object} Options
   * @property {Boolean} mandatory whether the component is mandatory or optional
   */
  settings({ mandatory }) {
    this.options = this.options || {};
    this.options.mandatory = mandatory || this.options.mandatory;
    return this;
  }
  
  _onError() {
    if (this.options.mandatory) {
      this.log.error(`The component [${this.constructor.name}] is mandatory and could not be initialized... cannot proceed!`);
    } else {
      this.log.info(`The component [${this.constructor.name}] could not be initialized... continuing...`);
    }
    this.available = false;
  }
  
  get isAvailable(){
    return this.available;
  }
  
  get logger() {
    return this.log;
  }

}
