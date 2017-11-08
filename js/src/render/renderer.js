import Base from './base';

export default class Renderer extends Base {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    if (new.target === Renderer) {
      throw new TypeError('Cannot construct [Renderer] instances directly!');
    }
    if (this.render === undefined || typeof this.render !== 'function') {
      throw new TypeError('Must override [render(json)] method!');
    }
  }

}
