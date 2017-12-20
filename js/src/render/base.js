import Logger from '../util/logger';
import JsonUtils from '../util/json-utils';

export default class Base {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    this.settings({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    /**
     * @type {Logger} the logger for this class
     */
    this.log = new Logger(this.options);
  }

  settings({ verbose, appendTo, callbackHandler }) {
    if (!callbackHandler) {
      throw new Error('A Callback Handler must be provided! This will be used to trigger events from the graphics produced...');
    }
    if (!appendTo) {
      throw new Error('Missing an element or id to append the graphics to...!');
    }
    /**
     * @typedef {Object} Options
     * @property {Boolean} verbose prints extra log information to console.log, default false
     * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
     * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
     */
    this.options = {};
    this.options.verbose = verbose || this.options.verbose;
    this.options.appendTo = appendTo || this.options.verbose;
    this.options.callbackHandler = callbackHandler || this.options.callbackHandler;
    return this;
  }

  load(json, partial) {
    let data = JsonUtils.parse(json, partial);
    if (data) {
      this.data = json;
    }
    return this;
  }

  get logger() {
    return this.log;
  }

}
