import Renderer from './renderer';

/* global d3 */

export default class Tooltip extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    this.tooltip = this.HTMLParent.select('div.francy-tooltip-holder');
    // check if the window is already present
    if (!this.tooltip.node()) {
      this.tooltip = this.HTMLParent.append('div')
        .attr('class', 'francy-tooltip-holder');
    }
  }

  render(object) {

    // just ignore rendering if no messages are present
    if (!object || !Object.values(object).length) {
      //this.logger.debug('Nothing to render here... continuing...');
      return;
    }

    var pos = d3.mouse(this.SVGParent.node());

    // TODO fix always visible tooltip, fine until someone complains about :P
    this.tooltip.style('left', pos[0] + 'px').style('top', pos[1] + 'px');

    // check if it exists already
    if (this.tooltip.selectAll('*').node()) {
      return;
    }

    var table = this.tooltip.append('div').attr('class', 'francy-tooltip')
      .append('div').attr('class', 'francy-table')
      .append('div').attr('class', 'francy-table-body');
    Object.keys(object).map(function(key) {
      var row = table.append('div').attr('class', 'francy-table-row');
      row.append('div').attr('class', 'francy-table-cell').text(object[key].title);
      row.append('div').attr('class', 'francy-table-cell').text(object[key].text);
    });

    // show tooltip
    this.tooltip.style('display', 'block');
  }

  unrender() {
    this.tooltip.selectAll('*').remove();
    this.tooltip.style('display', null);
  }
}
