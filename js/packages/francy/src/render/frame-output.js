import {Decorators, Logger, Renderer} from 'francy-core';

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
    const outputId = `Output-${this.context.instanceId}`;
    this.element = d3.select(`div#${outputId}`);

    // check if the output element is already present
    if (!this.element.node()) {
      // create a html element detached from the DOM!
      Logger.debug(`(${this.context.instanceId}) Creating Output [${outputId}]...`);
      this.element = this.parent.append('div').classed('francy-output', true).attr('id', outputId);
      this.element.append('span').classed('francy-output-header', true).text('GAP Output');
    }

    this.element.append('span').classed('francy-output-value', true).text(this.data.output);

    Logger.debug(`(${this.context.instanceId}) Output updated [${outputId}]...`);

    return this;
  }

}
