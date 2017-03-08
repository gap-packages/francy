import JsonUtils from './util/json-utils.js';
import AbstractShapeFactory from './shape/abstract-factory';
import AbstractBehaviorFactory from './behavior/abstract-factory';

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.handle} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 */
export class Francy {

  constructor({verbose = false} = {}) {
    this.verbose = verbose;
    d3.forceSimulation()
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter());
  }

  /**
   * Main entry point. Calling handle passing a json representation string will trigger the drawing of a json object.
   * @param input - a json string/object to get drawn
   */
  handle(input) {
    let json = JsonUtils.parse(input);
    if (json) {
      console.debug('Francy will handle the following object: ', json);
      switch (json.type) {
        case 'shape':
          return AbstractShapeFactory.build(json, {verbose: this.verbose});
          break;
        case 'behavior':
          return AbstractBehaviorFactory.build(json, {verbose: this.verbose});
          break;
        case 'structure':
          throw new Error('No implemented!');
          break;
        default:
          throw new Error('No implemented!');
          break;
      }

    }
  }
}

exports.Francy = Francy;

window.Francy = Francy;
