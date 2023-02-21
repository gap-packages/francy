// import css inline - couldn't make this work on the webpack conf :/
import '!style-loader!css-loader!./style/index.css';
import { 
  Components, 
  ConfigurationHandler, 
  DefaultConfiguration,
  Logger, 
  Renderer, 
  RenderingManagerHandler, 
  Utilities } from 'francy-core';
import Factory from './render/factory';

/* global VERSION */

(() => Logger.info(`Francy JS v${VERSION}! Enjoy...`))();

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.load} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 *
 * @access public
 *
 * @example
 * let francy = new Francy({appendTo: '#div-id', callbackHandler: console.log, configuration: ConfigurationHandler({})});
 * francy.load(json).render();
 */
export class FrancyApp extends Renderer {

  /**
   * Creates an instance of Francy with the following options:
   * @typedef {Object} Options
   * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
   * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
   */
  constructor({ appendTo, callbackHandler }) {
    super({ 
      appendTo: appendTo, 
      callbackHandler: callbackHandler 
    }, {
      renderingManager: new RenderingManagerHandler({ 
        configuration: new ConfigurationHandler({ 
          configuration: DefaultConfiguration 
        }), 
        instanceId: Utilities.generateId() 
      }),
      get configuration() {
        return this.renderingManager.context.configuration; 
      }, 
      get instanceId() {
        return this.renderingManager.context.instanceId; 
      },
    });
    this.factory = undefined;
    // all good!
  }

  /**
   * Returns the {RenderingManager] instance to register and unregister new renderers
   * 
   * @returns {RenderingManager} instance
   * @public
   */
  get RenderingManager() {
    return this.context.renderingManager;
  }

  /**
   * Returns the {Components] instance to to get external components
   * 
   * @returns {Components} instance
   * @public
   */
  get Components() {
    return Components;
  }

  /**
   * Main entry point. Calling render will trigger the drawing of a json object
   * passed through the load method.
   * @returns {object} the html element created
   * @public
   */
  async render() {
    // lazy load initialization
    if (!this.factory) {
      this.factory = new Factory(this.options, this.context);
    }
    return await this.factory.load(this.data).render()
      .then(result => result.element.node())
      .finally(() => this.load({}));
  }
}
