import { Renderer, Decorators } from 'francy-core';
import DOTLanguageHelper from '../util/dot-helper';

/* global d3 */

export default class GraphGeneric extends Renderer {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @Decorators.Data.requires('canvas.graph')
  async render() {
    let dot = new DOTLanguageHelper().load(this.data).build();
    d3.select(`div#Canvas-${this.data.canvas.id}>div.francy-content`).graphviz().renderDot(dot);
  }

}
