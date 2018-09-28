import Observable from '../util/observable';
import { Logger } from '../util/logger';
import { Utilities } from '../util/utilities';
import { Configuration } from '../util/configuration';
import { RuntimeException } from '../util/exception';

/**
 * This class implements all the methods to handle multiple renderers on {Francy}.
 * 
 * {RenderingManager} is a singleton that can be accessed to register and unregister a {Renderer}.
 * Only onde renderer is active at a time.
 * 
 * {RenderingManager} will notify any subscribed methods when a supported events {RENDERING_EVENTS} occur.
 * 
 * @example RenderingManager.subscribe(RENDERING_EVENTS.REGISTER, objectChanged => {}); 
 * @example Francy.RenderingManager.register({name: 'D3', renderer: RendererClass, enable: false});
 * @example Francy.RenderingManager.unregister('D3');
 * @example Francy.RenderingManager.enable('D3');
 * @example Francy.RenderingManager.allRenderers();
 * @example Francy.RenderingManager.activeRenderer();
 * 
 * @extends {Observable}
 */
class RenderingManagerHandler extends Observable {

  /**
   * Default Constructor
   */
  constructor() {
    super();
    // this only adds if does not exist
    Configuration.addProperty('renderers', {});
  }

  /**
   * This method is used to register a renderer within {Francy}.
   * 
   * @param {Object} renderer - this is renderer configuration.
   * @param {string} renderer.name - this is renderer name.
   * @param {class} renderer.renderer - this is renderer class.
   * @param {boolean} renderer.enable - this is property to specify whether the renderer is active or not.
   * @returns {object} this instance
   * @public
   */
  register({ name, renderer, enable }) {
    if (name && !(name in Configuration.object.renderers)) {
      enable = enable || false;
      Logger.info(`Registering Renderer: ${name}`);
      Configuration.object.renderers[name] = { enable: false, renderer: renderer, name: name, id: Utilities.generateId() };
      this.notify(RENDERING_EVENTS.REGISTER, Configuration.object.renderers[name]);
      if (enable) {
        this.enable(name);
      }
    } else {
      // update the renderer has this does not get serialized
      Configuration.object.renderers[name].renderer = renderer;
      //this.notify(RENDERING_EVENTS.REGISTER, Configuration.object.renderers[name]);
    }
    return this;
  }

  /**
   * This method is used to unregister a renderer.
   * 
   * @param {string} name - the name of the renderer
   * @returns {object} this instance
   * @public
   */
  unregister(name) {
    if (name) {
      Logger.info(`Unregistering Renderer: ${name}`);
      this.notify(RENDERING_EVENTS.UNREGISTER, Configuration.object.renderers[name]);
      delete Configuration.object.renderers[name];
    }
    return this;
  }

  /**
   * This method is used to enable a renderer. Only one renderer is enabled 
   * at a time, so the previous enabled renderer will be set to disabled.
   * 
   * @param {string} name - the name of the renderer
   * @returns {object} this instance
   * @public
   */
  enable(name) {
    if (name) {
      Logger.info(`Enabling Renderer: ${name}`);
      for (let prop in Configuration.object.renderers) {
        let previous = Configuration.object.renderers[prop].enable;
        let current = name === prop;
        if (previous !== current) {
          Configuration.object.renderers[prop].enable = current;
          this.notify(RENDERING_EVENTS.STATUS, Configuration.object.renderers[prop]);
        }
      }
    }
    return this;
  }

  /**
   * This method returns all the renderers registered
   * 
   * @return {object} the renderers dictionary
   * @public
   */
  allRenderers() {
    return Configuration.object.renderers;
  }

  /**
   * This method returns the current active renderer.
   * 
   * @return {string} the renderer name
   * @public
   */
  activeRenderer() {
    let r = Configuration.object.renderers[Object.keys(Configuration.object.renderers[0])];
    for (let prop in Configuration.object.renderers) {
      if (Configuration.object.renderers[prop].enable) {
        r = Configuration.object.renderers[prop];
      }
    }
    if (!r.renderer) {
      throw new RuntimeException('No renderers registered!');
    }
    Logger.debug(`Active Renderer: ${r.name}`);
    return r.renderer;
  }
}
/**
 * The events supported by {RenderingManager}.
 * @public
 */
export const RENDERING_EVENTS = { REGISTER: 'REGISTER', UNREGISTER: 'UNREGISTER', STATUS: 'STATUS' };
/**
 * The {RenderingManager} singleton
 * @public
 */
export const RenderingManager = new RenderingManagerHandler();
