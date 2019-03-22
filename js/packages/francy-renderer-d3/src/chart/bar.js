import { Decorators } from 'francy-core';
import Chart from './chart';

/* global d3 */

export default class BarChart extends Chart {

  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
  }

  @Decorators.Initializer.initialize()
  async render() {

    this.xScale = d3.scaleBand().range([0, this.width]).padding(0.1).domain(this.axis.x.domain);

    if (!this.axis.x.domain.length) {
      this.axis.x.domain = Chart.domainRange(this.allValues.length / this.datasetNames.length);
      this.xScale.domain(this.axis.x.domain);
    }

    let barsGroup = this.element.selectAll('g.francy-bars');

    if (!barsGroup.node()) {
      barsGroup = this.element.append('g').attr('class', 'francy-bars');
    }

    var self = this;

    this.datasetNames.forEach(function (key, index) {
      let bar = barsGroup.selectAll(`.francy-bar-${index}`).data(self.datasets[key]);

      bar.exit().transition().duration(750)
        .style('fill-opacity', 1e-6)
        .remove();

      // append the rectangles for the bar chart
      let barEnter = bar.enter()
        .append('rect')
        .style('fill', () => Chart.colors(index * 5))
        .attr('class', `francy-bar-${index}`)
        .attr('x', function (d, i) {
          return self.xScale(self.axis.x.domain[i]) + index * (self.xScale.bandwidth() / self.datasetNames.length);
        })
        .attr('width', (self.xScale.bandwidth() / self.datasetNames.length) - 1)
        .attr('y', function (d) {
          return self.yScale(d);
        })
        .attr('height', function (d) {
          return self.height - self.yScale(d);
        })
        .on('mouseenter', function (d) {
          d3.select(this).transition()
            .duration(250).style('fill-opacity', 0.5);
          self.handlePromise(self.tooltip.load(Chart.tooltip(key, d), true).render());
        })
        .on('mouseleave', function () {
          d3.select(this).transition()
            .duration(250).style('fill-opacity', 1);
          self.tooltip.unrender();
        });

      barEnter.merge(bar)
        .attr('x', function (d, i) {
          return self.xScale(self.axis.x.domain[i]) + index * (self.xScale.bandwidth() / self.datasetNames.length);
        })
        .attr('width', (self.xScale.bandwidth() / self.datasetNames.length) - 1)
        .attr('y', function (d) {
          return self.yScale(d);
        })
        .attr('height', function (d) {
          return self.height - self.yScale(d);
        });
    });

    this._renderAxis();
    this._renderLegend();

    return this;
  }
}
