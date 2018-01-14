import Renderer from './renderer';
import { dataRequired } from '../decorator/data';

/* global d3 */

export default class Tooltip extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @dataRequired()
  render() {

    this.element = this.HTMLParent.select('div.francy-tooltip-holder');
    // check if the window is already present
    if (!this.element.node()) {
      this.element = this.HTMLParent.append('div')
        .attr('class', 'francy-tooltip-holder');
    }

    var pos = d3.mouse(this.SVGParent.node());

    // TODO fix always visible tooltip, fine until someone complains about :P
    this.element.style('left', pos[0] + 'px').style('top', pos[1] + 'px');

    // check if it exists already
    if (this.element.selectAll('*').node()) {
      return;
    }

    var table = this.element.append('div').attr('class', 'francy-tooltip')
      .append('div').attr('class', 'francy-table')
      .append('div').attr('class', 'francy-table-body');
    var self = this;
    Object.keys(this.data).map(function(key) {
      var row = table.append('div').attr('class', 'francy-table-row');
      row.append('div').attr('class', 'francy-table-cell').text(self.data[key].title);
      row.append('div').attr('class', 'francy-table-cell').text(self.data[key].text);
    });

    // show tooltip
    this.element.style('display', 'block');

    this;
  }

  unrender() {
    if (this.element) {
      this.element.selectAll('*').remove();
      this.element.style('display', null);
    }
  }
}
