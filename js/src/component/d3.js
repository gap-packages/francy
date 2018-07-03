import BaseComponent from './base';

/* global d3 */

export default class D3Component extends BaseComponent {
  
  constructor(mandatory = false, delay = false) {
    super(mandatory, delay);
  }
  
  initialize() {
    if (!d3) {
      throw new Error('D3 is not imported and Francy won\'t work without it... please import D3 v5+ library.');
    }
  }
}
