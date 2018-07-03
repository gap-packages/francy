import Frame from './render/frame';
import Renderer from './render/renderer';
import { Decorators } from './decorator/factory';
import * as ignore from 'seedrandom';

/* global VERSION */

let ALL_CANVAS = {};

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.load} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 *  
 * @access public
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
    // all good!
    this.logger.info(`Francy JS v${VERSION} initialized! Enjoy...`);
  }

  /**
   * Main entry point. Calling render will trigger the drawing of a json object 
   * passed through the load method.
   * @returns {Object} the html element created
   */
  @Decorators.Data.requires('canvas')
  async render() {
    if (this.data.version !== VERSION) {
      this.logger.warn(`Rendering data generated in Francy GAP [${this.data.version}] using Francy JS [${VERSION}], rendering may fail... please update your system...`);
    }
    //set seed to produce always the same graphs
    Math.seedrandom('Francy!');
    let frame = await new Frame(this.options).load(this.data).render().then(element => element);
    ALL_CANVAS[this.data.canvas.id] = frame;
    return frame.element.node();
  }

  /**
   * Utility method to remove canvas from known canvas
   */
  static unrender(id) {
    delete ALL_CANVAS[id];
  }
}

try {
  exports.Francy = window.Francy = Francy;
  // handle events on resize
  let oldResize = window.onresize;
  window.onresize = () => {
    // zoom to fit all canvas on resize
    Object.values(ALL_CANVAS).forEach((frame) => {
      if (frame.canvas) {
        frame.canvas.zoomToFit();
      }
    });
    // call old resize function if any!
    if (typeof oldResize === 'function') {
      oldResize();
    }
  };
} catch (e) {
  exports.Francy = Francy;
}
