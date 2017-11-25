import Renderer from './renderer';

/* global d3 */

export default class Tooltip extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    this.tooltip = d3.selectAll('div.francy.tooltip');
    // check if the window is already present
    if (!this.tooltip.node()) {
      this.tooltip = this.HTMLParent.append('div').attr('class', 'francy tooltip').style('display', 'none');
    }
  }

  render(object) {

    this.tooltip
      .style('left', d3.event.pageX + 20 + 'px')
      .style('top', d3.event.pageY + 'px');

    // check if it exists already
    if (this.tooltip.selectAll('*').node()) {
      return;
    }

    var table = this.tooltip.append('div').attr('class', 'table').append('div').attr('class', 'francy table-body');
    Object.keys(object).map(function(key) {
      var row = table.append('div').attr('class', 'francy table-row');
      row.append('div').attr('class', 'francy table-cell').text(key);
      row.append('div').attr('class', 'francy table-cell').text(object[key]);
    });

    // show tooltip
    this.tooltip.style('display', 'block');
  }

  unrender() {
    this.tooltip.selectAll('*').remove();
    this.tooltip.style('display', 'none');
  }
}
