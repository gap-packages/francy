import BaseRenderer from './base';
import { Components } from '../component/factory';
import { Decorators } from '../decorator/factory';

/* global MathJax */

export default class MathJaxWrapper extends BaseRenderer {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @Decorators.Data.enabled('canvas.texTypesetting')
  async render() {
    // if no element here just return...
    if (!Components.MathJax.isAvailable || 
      !this.parent || !this.parent.node()) return;
    // check for a post exec function
    this.data.postFunction = this.data.postFunction || function() {};
    MathJax.Hub.Queue(
      ['setRenderer', MathJax.Hub, this.options.renderType],
      ['Typeset', MathJax.Hub, this.parent.node()],
      [this.options.postFunction]
    );
  }

  settings({ appendTo, callbackHandler, renderType, postFunction }) {
    super.settings({ appendTo, callbackHandler });
    this.options.renderType = renderType;
    this.options.postFunction = postFunction;
    return this;
  }

}
