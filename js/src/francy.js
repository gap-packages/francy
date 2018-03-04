import Frame from './render/frame';
import Renderer from './render/renderer';
import { requires } from './util/data-decorator';

/* global d3 */

let ALL_CANVAS = {};

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.load} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 *  
 * @access public
 * 
 * @version 0.5.x
 * 
 * @example
 * let francy = new Francy({verbose: true, appendTo: '#div-id', callbackHandler: console.log});
 * francy.load(json).render();
 */
export default class Francy extends Renderer {

  /**
   * Creates an instance of Francy with the following options:
   * @typedef {Object} Options
   * @property {Boolean} verbose prints extra log information to console.log, default false
   * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
   * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
   */
  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    if (!d3) {
      throw new Error('D3 is not imported! Francy won\'t work without it... please import D3 v4+.');
    }
  }

  /**
   * Main entry point. Calling render passing a json representation string will 
   * trigger the drawing of a json object.
   * @returns {Object} the html element created
   */
  @requires('canvas')
  render() {
    let frame = new Frame(this.options).load(this.data).render();
    ALL_CANVAS[this.data.canvas.id] = frame;
    return frame.element.node();
  }

  static unrender(id) {
    delete ALL_CANVAS[id];
  }
}

try {
  exports.Francy = window.Francy = Francy;
  // handle events on resize
  let oldResize = window.onresize;
  window.onresize = function() {
    // zoom to fit all canvas on resize
    Object.values(ALL_CANVAS).forEach(function(frame) {
      frame.canvas.zoomToFit();
    });
    // call old resize function if any!
    if (typeof oldResize === 'function') {
      oldResize();
    }
  };
} catch (e) {
  exports.Francy = Francy;
}
