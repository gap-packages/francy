import { Decorators } from '../decorator/factory';
import Renderer from './renderer';

/**
 * Implements a Tooltip.
 * 
 * This component shows a tooltip containing a set of messages.
 * 
 * @extends {Renderer}
 */
export default class Tooltip extends Renderer {

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   * @param {Object} context - the context of the application, usually a configuration and a rendering manager instance
   */
  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
  }

  /**
   * This method is used to render this component
   * 
   * @public
   */
  @Decorators.Data.requires('messages')
  async render() {

    this.element = this.HTMLParent.select('div.francy-tooltip-holder');
    // check if the window is already present
    if (!this.element.node()) {
      this.element = this.HTMLParent.append('div')
        .attr('class', 'francy-tooltip-holder');
    }

    // check if it exists already
    if (this.element.selectAll('*').node()) return;

    let position = this._mousePosition();

    // TODO this won't be visible all the times, fine until someone complains about :P
    this.element.style('left', (position[0] + 15) + 'px').style('top', (position[1] - 15) + 'px');

    let table = this.element.append('div').attr('class', 'francy-tooltip')
      .append('div').attr('class', 'francy-table')
      .append('div').attr('class', 'francy-table-body');

    Object.keys(this.data.messages).map((key) => {
      let row = table.append('div').attr('class', 'francy-table-row');
      row.append('div').attr('class', 'francy-table-cell').text(this.data.messages[key].title);
      row.append('div').attr('class', 'francy-table-cell').text(this.data.messages[key].text);
    });

    // show tooltip
    this.element.style('display', 'block');
    
    // destroy me after default delay
    this.autoUnrender();

    return this;
  }

  /**
   * This method is used to destroy this component
   * 
   * @public
   */
  unrender() {  
    if (this.element) {
      this.element.selectAll('*').remove();
      this.element.style('display', null);
    }
  }
}
