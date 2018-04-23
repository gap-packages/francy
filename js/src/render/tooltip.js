import Renderer from './renderer';
import { requires } from '../util/data-decorator';

/* global d3 */

export default class Tooltip extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @requires('messages')
  async render() {

    this.element = this.HTMLParent.select('div.francy-tooltip-holder');
    // check if the window is already present
    if (!this.element.node()) {
      this.element = this.HTMLParent.append('div')
        .attr('class', 'francy-tooltip-holder');
    }

    // check if it exists already
    if (this.element.selectAll('*').node()) return;

    let pos = d3.mouse(this.SVGParent.node());

    // TODO this won't be visible all the times, fine until someone complains about :P
    this.element.style('left', (pos[0] + 15) + 'px').style('top', (pos[1] - 15) + 'px');

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

    return this;
  }

  unrender() {
    if (this.element) {
      this.element.selectAll('*').remove();
      this.element.style('display', null);
    }
  }
}
