import JsonUtils from './json';

/**
 * This class provides utility methods to handle and store data.
 * 
 * @access private
 */
export default class DataHandler {

  /**
   * Default Constructor
   */
  constructor() {
    /**
     * Stores the data object
     * @type {object}
     */
    this.data = undefined;
  }

  /**
   * Loads and stores data if valid. This will invoke `JsonUtils.parse` to transform
   * this {string} into a JSON object.
   *
   * @param {string} json - a francy valid json string that will be parsed into an {object}
   * @returns {object} this instance
   * @public
   */
  load(json) {
    let data = JsonUtils.parse(json);
    if (data) {
      this.data = data;
    }
    return this;
  }

}
