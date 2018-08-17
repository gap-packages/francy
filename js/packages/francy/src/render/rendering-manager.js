import { Logger, Observable, Utilities } from 'francy-core';

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
      for (var prop in this._renderers) {
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
    for (var prop in this._renderers) {
      if (this._renderers[prop].enable) {
        return this._renderers[prop].renderer;
      }
    }
    return { render: function() { this.parent.append('div').append('span').style('text-align', 'center').text('No Renderer selected...'); }};
  }
}
export const EVENTS = {REGISTER: 'REGISTER', UNREGISTER: 'UNREGISTER', STATUS: 'STATUS'};
export const RenderingManager = new Manager();
