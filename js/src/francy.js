import JsonUtils from './util/json-utils.js';
import AbstractShapeFactory from './shape/factory';

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.draw} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 */
export class Francy {

  constructor({verbose = false} = {}) {
    this.verbose = verbose;
  }

  /**
   * Main entry point. Calling draw passing a json representation string will trigger the drawing of a json object.
   * @param input - a json string/object to get drawn
   */
  draw(input) {
    input = JsonUtils.parse(input);
    if (input) {
      console.debug('Francy will draw the following object: ', input);
      return AbstractShapeFactory.build(input, {verbose: this.verbose});
    }
  }
}

exports.Francy = Francy;

window.Francy = Francy;
