import { Logger } from '../util/logger';
import BaseComponent from './base';

/**
 * This {Component} class is used to check whether jupyter is available or not.
 * Jupyter is optional, as {Francy} can run without it.
 * 
 * @extends {BaseComponent}
 */
export default class JupyterComponent extends BaseComponent {
  /**
   * Base constructor
   * 
   * @typedef {Object} Options
   * @property {Boolean} verbose prints extra log information to console.log, default false
   * @property {Boolean} mandatory whether the component is mandatory or optional
   */
  constructor(mandatory = false, delay = false) {
    super(mandatory, delay);
  }
  
  /**
   * Handles Jupyter initialization and checks whether the dependency is available or not.
   * @public
   */
  initialize() {
    var global = (0, eval)('this');
    if (!('Jupyter' in global)) {
      throw new Error('We\'re not running on Jupyter...');
    }
    Logger.debug('Jupyter is available...');
  }
}
