import {Logger, Decorators, Renderer, RenderingManager} from 'francy-core';
import Frame from './render/frame';
// import css inline - couldn't make this work on the webpack conf :/
import '!style-loader!css-loader!./style/index.css';

/* global VERSION */

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
   * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
   * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
   */
  constructor({appendTo, callbackHandler}) {
    super({appendTo: appendTo, callbackHandler: callbackHandler});
    // all good!
    Logger.info(`Francy JS v${VERSION} initialized! Enjoy...`);
  }

  /**
   * Returns the {RenderingManager] instance to register and unregister new renderers
   * 
   * @returns {RenderingManager} instance
   * @public
   */
  get RenderingManager() {
    return RenderingManager;
  }

  /**
   * Main entry point. Calling render will trigger the drawing of a json object
   * passed through the load method.
   * @returns {object} the html element created
   * @public
   */
  @Decorators.Data.requires('canvas')
  async render() {
    if (this.data.version !== VERSION) {
      Logger.warn(`Rendering may fail, data generated in Francy GAP v${this.data.version} using Francy JS v${VERSION}... please update your system...`);
    }
    let frame = await new Frame(this.options)
      .load(this.data).render()
      .then(element => element)
      .finally(() => this.load({}, true));
    return frame.element.node();
  }
}
