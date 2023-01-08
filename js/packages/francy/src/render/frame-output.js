import {
  Decorators,
  Logger,
  Renderer
} from 'francy-core';

/**
 * The {Message} holds the messages for the current Graphics.
 *
 * @access private
 */
export default class OutputFrame extends Renderer {

  constructor({appendTo, callbackHandler}, context) {
    super({appendTo: appendTo, callbackHandler: callbackHandler}, context);
  }

  @Decorators.Data.requires('output')
  async render() {
    this.element = this.parent.select('div.francy-output');

    // check if the canvas is already present
    if (!this.element.node()) {
      // create a svg element detached from the DOM!
      Logger.debug(`(${this.context.instanceId}) Creating Output [francy-output]...`);
      this.element = this.parent.append('div').classed('francy-output', true);
      this.element.append('span').classed('francy-output-header', true).html('Output');
    }

    this.element.append('span').classed('francy-output-value', true).html(this.data.output);

    Logger.debug(`(${this.context.instanceId}) Output updated [francy-output]...`);

    return this;
  }

}
