import Renderer from './renderer';

/* global d3 */

export default class Tooltip extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    this.tooltip = this.SVGParent.select('foreignObject.tooltips');
    // check if the window is already present
    if (!this.tooltip.node()) {
      this.tooltip = this.SVGParent.append('foreignObject')
        .classed('tooltips', true).style('display', 'none');
    }
  }

  render(object) {

    this.tooltip.attr('transform',`translate(${d3.event.offsetX},${d3.event.offsetY})`);

    //d3.select(d3.event.srcElement).attr('transform')

    // check if it exists already
    if (this.tooltip.selectAll('*').node()) {
      return;
    }

    var table = this.tooltip.append('xhtml:div').attr('class', 'francy tooltip')
      .append('div').attr('class', 'francy tooltip')
      .attr('class', 'table').append('div').attr('class', 'francy table-body');
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
