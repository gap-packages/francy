import Renderer from './renderer';

/* global d3 */

export default class Modal extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    this.overlay = undefined;
    this.holder = undefined;
  }
  
  _initialize() {
    // we want to overlay everything, hence 'body' must be used
    this.overlay = d3.select('body').append('div').attr('class', 'francy-overlay');
    this.holder = d3.select('body').append('div').attr('class', 'francy');
  }
  
  unrender() {
    this.overlay.remove();
    this.element.remove();
    this.holder.remove();
    return false;
  }

}
