import ModelTracker from './tracker';
import IDUtils from './../util/id-utils';

/**
 * This class contains the basics for the creation of an SVG object using d3 and modal window using jquery ui.
 * It handles the window and canvas creation.
 */
export default class AbstractBehavior {
  /**
   * This class is abstract an hence cannot be instantiated without being extended and the subclass must implement a {render} method.
   * @param {object} json - the object.
   * @param verbose
   */
  constructor(json, {verbose = false} = {}) {
    this.object = json.object;
  }
}