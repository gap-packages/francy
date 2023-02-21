import Chart from './chart';
import { Decorators } from 'francy-core';

export default class ScatterChart extends Chart {

  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
  }

  @Decorators.Initializer.initialize()
  async render() {

    let scatterGroup = this.element.selectAll('g.francy-scatters');

    if (!scatterGroup.node()) {
      scatterGroup = this.element.append('g').attr('class', 'francy-scatters');
    }

    let self = this;

    this.datasetNames.forEach(function (key, index) {
      let scatter = scatterGroup.selectAll(`.francy-scatter-${index}`).data(self.datasets[key]);

      scatter.exit().transition().duration(750)
        .style('fill-opacity', 1e-6)
        .remove();

      // append the rectangles for the bar chart
      let scatterEnter = scatter
        .enter()
        .append('circle')
        .style('fill', () => Chart.colors(index * 5))
        .attr('class', `francy-scatter-${index}`)
        .attr('r', 5)
        .attr('cx', function (d, i) {
          return self.xScale(i);
        })
        .attr('cy', function (d) {
          return self.yScale(d);
        })
        .on('mouseenter', function (e, d) {
          d3.select(this).transition()
            .duration(250)
            .style('fill-opacity', 0.5)
            .attr('r', 10);
          self.handlePromise(self.tooltip.load(Chart.tooltip(key, d)).render());
        })
        .on('mouseleave', function () {
          d3.select(this).transition()
            .duration(250)
            .style('fill-opacity', 1)
            .attr('r', 5);
          self.tooltip.unrender();
        });

      scatterEnter.merge(scatter);
    });

    this._renderAxis();

    this._renderLegend();

    return this;
  }
}
