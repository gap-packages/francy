import BaseComponent from './base';
import {Logger} from '../util/logger';

/**
 * This {Component} class is used to check whether d3 is available or not.
 * d3 is mandatory, as it used d3 to implement the basic graphics for {Francy}.
 *
 * @extends {BaseComponent}
 */
export default class D3Component extends BaseComponent {

  /**
   * Base constructor
   *
   * @typedef {Object} Options
   * @property {Boolean} verbose prints extra log information to console.log, default false
   * @property {Boolean} mandatory whether the component is mandatory or optional
   */
  constructor(mandatory, delay, retries) {
    super(mandatory, delay, retries);
  }

  /**
   * Handles d3 initialization and checks whether the dependency is available or not.
   * @public
   */
  initialize() {
    let global = (0, eval)('this');
    if (!('d3' in global)) {
      throw new Error('D3 is not imported and Francy won\'t work without it... please import D3 v5+ library.');
    }
    Logger.debug('D3 is available...');
  }
}
