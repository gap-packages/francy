import { Logger } from '../util/logger';
import BaseComponent from './base';

/* global Jupyter */

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
    if (!Jupyter) {
      throw new Error('This is not Jupyter is not imported and Francy won\'t work without it... please import D3 v5+ library.');
    }
    Logger.debug('Jupyter is available...');
  }
}
