import {Logger} from '../util/logger';
import Observable from '../util/observable';
import {RuntimeException} from '../util/exception';
import {Utilities} from '../util/utilities';

/**
 * This class implements all the methods to handle multiple renderers on {Francy}.
 *
 * {RenderingManager} is a singleton that can be accessed to register and unregister a {Renderer}.
 * Only one renderer is active at a time.
 *
 * {RenderingManager} will notify any subscribed methods when a supported events {RENDERING_EVENTS} occur.
 *
 * @example RenderingManager.subscribe(RENDERING_EVENTS.REGISTER, objectChanged => {});
 * @example Francy.RenderingManager.register(new D3Renderer());
 * @example Francy.RenderingManager.unregister('D3Renderer');
 * @example Francy.RenderingManager.enable('D3Renderer');
 * @example Francy.RenderingManager.allRenderers();
 * @example Francy.RenderingManager.activeRenderer();
 *
 * @extends {Observable}
 */
export default class RenderingManagerHandler extends Observable {

  /**
   * Default Constructor
   */
  constructor(context) {
    super();
    this.context = context;
    // add only if it does not exist
    this.context.configuration.addProperty('renderers', {});
  }

  /**
   * This method is used to register a renderer within {Francy}.
   *
   * @returns {object} this instance
   * @public
   */
  register(clazz) {
    if (!clazz || !clazz.configuration || !clazz.configuration.name || !clazz.configuration.renderer) {
      throw new RuntimeException('Not a valid renderer!');
    } else if (clazz.configuration.name && !(clazz.configuration.name in this.context.configuration.object.renderers)) {
      clazz.configuration.enable = clazz.configuration.enable || false;
      Logger.debug(`(${this.context.instanceId}) Registering Renderer: ${clazz.configuration.name}`);
      this.context.configuration.object.renderers[clazz.configuration.name] = {
        enable: false,
        renderer: clazz.configuration.renderer,
        name: clazz.configuration.name,
        id: Utilities.generateId()
      };
      this.notify(RENDERING_EVENTS.REGISTER, this.context.configuration.object.renderers[clazz.configuration.name]);
      if (clazz.configuration.enable) {
        this.enable(clazz.configuration.name);
      }
    } else {
      // update the renderer has this does not get serialized
      this.context.configuration.object.renderers[clazz.configuration.name].renderer = clazz.configuration.renderer;
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
      Logger.debug(`(${this.context.instanceId}) Unregistering Renderer: ${name}`);
      this.notify(RENDERING_EVENTS.UNREGISTER, this.context.configuration.object.renderers[name]);
      delete this.context.configuration.object.renderers[name];
    }
    return this;
  }


  /**
   * This method is used to unregister all renderers except the specified one.
   * Useful to unregister all renderers when the user specifies the renderer on GAP.
   *
   * @param {string} name - the name of the renderer
   * @returns {object} this instance
   * @public
   */
  unregisterAllExcept(name) {
    for (let prop in this.context.configuration.object.renderers) {
      if (name === prop) {
        continue;
      }
      Logger.debug(`(${this.context.instanceId}) Unregistering Renderer: ${prop}`);
      this.notify(RENDERING_EVENTS.UNREGISTER, this.context.configuration.object.renderers[prop]);
      delete this.context.configuration.object.renderers[prop];
    }
    return this;
  }

  /**
   * This method is used to enable a renderer. Only one renderer is enabled
   * at a time, so the previous enabled renderer will be set to `disabled`.
   *
   * @param {string} name - the name of the renderer
   * @returns {object} this instance
   * @public
   */
  enable(name) {
    if (name) {
      Logger.info(`(${this.context.instanceId}) Enabling Renderer: ${name}`);
      for (let prop in this.context.configuration.object.renderers) {
        let previous = this.context.configuration.object.renderers[prop].enable;
        let current = name === prop;
        if (previous !== current) {
          this.context.configuration.object.renderers[prop].enable = current;
          this.notify(RENDERING_EVENTS.STATUS, this.context.configuration.object.renderers[prop]);
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
    return this.context.configuration.object.renderers;
  }

  /**
   * This method returns the current active renderer.
   *
   * @return {string} the renderer name
   * @public
   */
  activeRenderer() {
    let r = this.context.configuration.object.renderers[Object.keys(this.context.configuration.object.renderers[0])];
    for (let prop in this.context.configuration.object.renderers) {
      if (this.context.configuration.object.renderers[prop].enable) {
        r = this.context.configuration.object.renderers[prop];
        break;
      }
    }
    if (!r.renderer) {
      throw new RuntimeException('No renderers registered!');
    }
    Logger.debug(`(${this.context.instanceId}) Active Renderer: ${r.name}`);
    return r.renderer;
  }
}
/**
 * The events supported by {RenderingManager}.
 * @public
 */
export const RENDERING_EVENTS = {REGISTER: 'REGISTER', UNREGISTER: 'UNREGISTER', STATUS: 'STATUS'};
