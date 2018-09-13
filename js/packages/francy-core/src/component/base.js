import { Logger} from '../util/logger';
import { Decorators } from '../decorator/factory';

/**
 * Base is the base of renderers and contains multiple utility methods.
 * This is an abstract class, and all subclasses must implement a {Component.initialize} method.
 * {Component.initialize} is a simple method that must implement a check on whether the dependency is available or not. 
 * Must throwan {Error} if dependency is not available.
 * 
 * A {Component} is a dependency of {Francy} that can be optional or not.
 * Optional {Components} are dependencies that enhance the whole framework experience, 
 * e.g. {MathJaxComponent} which provides rich tex.
 * Mandatory {Components} are components required by the framework and they have to be present, e.g. d3.
 * @abstract
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
    /**
     * Stores whether this component is available or not
     * @type {boolean]
     */
    this.available = false;
    /**
     * Stores the options for this component
     * @typedef {object} options
     * @property {boolean} options.mandatory whether the component is mandatory or optional
     */
    this.options = {};
    this.settings({ mandatory: mandatory });
    // run initialization
    let decorator = Decorators.Error.wrap(this._initialize).withContext(this).onErrorThrow(mandatory).onErrorExec(this._onError);
    if (delay) {
      setTimeout(() => decorator.handle(), 0);
    } else {
      decorator.handle();
    }
  }

  /**
   * Saves the settings in an internal options object.
   * 
   * @param {object} options
   * @property {boolean} options.mandatory whether the component is mandatory or optional
   * @returns {object} this instance
   * @public
   */
  settings({ mandatory }) {
    this.options.mandatory = mandatory || this.options.mandatory;
    return this;
  }
  
  /**
   * Returns true if the component is available, otherwise false
   * @type {boolean}
   * @public
   */
  get isAvailable(){
    return this.available;
  }

  /**
   * This is a helper method to handle component initialization.
   * @private
   */
  _initialize() {
    this.initialize();
    this.available = true;
  }
  
  /**
   * This is a helper method to handle error states
   * @private
   */
  _onError() {
    if (this.options.mandatory) {
      Logger.error(`The component [${this.constructor.name}] is mandatory and could not be initialized... cannot proceed!`);
    } else {
      Logger.info(`The component [${this.constructor.name}] could not be initialized... continuing...`);
    }
    this.available = false;
  }

}
