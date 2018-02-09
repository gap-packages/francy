import Chart from './chart';

/* global d3 */

export default class LineChart extends Chart {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render() {
    
    this._initialize();
    
    let linesGroup = this.element.selectAll('g.francy-lines');

    if (!linesGroup.node()) {
      linesGroup = this.element.append('g').attr('class', 'francy-lines');
    }

    var self = this;
    
    this.datasetNames.forEach(function(key, index) {
      let valueLine = d3.line()
        .x(function(d, i) {
          return self.xScale(i);
        })
        .y(function(d) {
          return self.yScale(d);
        });

      let line = linesGroup.selectAll(`.francy-line-${index}`).data([self.datasets[key]]);

      line.exit().transition().duration(750)
        .style('fill-opacity', 1e-6)
        .remove();

      // append the rectangles for the bar chart
      let lineEnter = line.enter()
        .append('path')
        .style('stroke', () => Chart.colors(index * 5))
        .style('stroke-width', '5px')
        .attr('class', `francy-line-${index}`)
        .attr('d', valueLine)
        .on('mouseenter', function(d) {
          d3.select(this).transition()
            .duration(250)
            .style('stroke-opacity', 0.5)
            .style('stroke-width', '10px');
          self.tooltip.load(Chart.tooltip(key, d), true).render();
        })
        .on('mouseleave', function() {
          d3.select(this).transition()
            .duration(250)
            .style('stroke-opacity', 1)
            .style('stroke-width', '5px');
          self.tooltip.unrender();
        });

      lineEnter.merge(line);
    });

    this._renderAxis();
    this._renderLegend();

    return this;
  }

  unrender() {}
}
