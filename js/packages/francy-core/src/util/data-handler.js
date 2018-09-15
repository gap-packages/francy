import JsonUtils from '../util/json';

/**
 * This class provides utility methods to handle and store data.
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
   * Loads and stores data if valid
   *
   * @param {string} json - a francy valid json
   * @param {boolean} partial - set this to true if the json is not a complete francy json object
   * @returns {object} this instance
   * @public
   */
  load(json, partial) {
    let data = JsonUtils.parse(json, partial);
    if (data) {
      this.data = data;
    }
    return this;
  }

}
