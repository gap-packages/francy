import JsonUtils from '../util/json';

export default class DataHandler {

  constructor() {
    this.data = undefined;
  }

  /**
   * Loads and stores data if valid
   *
   * @param json a francy valid json
   * @param partial set this to true if the json is not a complete francy json object
   */
  load(json, partial) {
    let data = JsonUtils.parse(json, partial);
    if (data) {
      this.data = data;
    }
    return this;
  }

}
