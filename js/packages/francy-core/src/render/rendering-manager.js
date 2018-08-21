import Observable from '../util/observable';
import {Logger} from '../util/logger';
import {Utilities} from '../util/utilities';

class Manager extends Observable {

  constructor() {
    super();
    this._renderers = {};
  }

  register({name, renderer, enable}) {
    if (name) {
      enable = enable || false;
      Logger.info(`Registering Renderer: ${name}`);
      this._renderers[name] = {renderer: renderer, name: name, id: Utilities.generateId()};
      this.notify(EVENTS.REGISTER, this._renderers[name]);
      if (enable) { 
        this.enable(name);
      }
    }
    return this;
  }

  unregister(name) {
    if (name && name in this._renderers) {
      this.notify(EVENTS.UNREGISTER, this._renderers[name]);
      delete this._renderers[name];
    }
    return this;
  }

  enable(name) {
    if (name && name in this._renderers) {
      for (let prop in this._renderers) {
        this._renderers[prop].enable = name === prop;
        this.notify(EVENTS.STATUS, this._renderers[prop]);
      }
    }
    return this;
  }
  
  allRenderers() {
    return this._renderers;
  }
  
  renderer() {
    for (let prop in this._renderers) {
      if (this._renderers[prop].enable) {
        return this._renderers[prop].renderer;
      }
    }
  }
}
export const EVENTS = {REGISTER: 'REGISTER', UNREGISTER: 'UNREGISTER', STATUS: 'STATUS'};
export const RenderingManager = new Manager();
