import Renderer from './renderer';
import Tooltip from './tooltip';
import Chart from './chart';

/* global d3 */

export default class ScatterChart extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render() {

    var tooltip = new Tooltip(this.options);

    var parent = this.options.appendTo.element;

    var axis = this.data.canvas.chart.axis,
      datasets = this.data.canvas.chart.data,
      datasetNames = Object.keys(datasets);

    this.element = parent.select('g.francy-content');

    var margin = { top: 50, right: 50, bottom: 50, left: 50 },
      width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
      height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;

    // set the dimensions and margins of the chart
    width = width - margin.left - margin.right;
    height = height - margin.top - margin.bottom;

    // set the ranges
    var x = d3.scaleLinear().range([0, width]).domain(axis.x.domain);
    var y = d3.scaleLinear().range([height, 0]).domain(axis.y.domain);

    var tmp = [];
    datasetNames.forEach(key => tmp = tmp.concat(datasets[key]));

    if (!axis.y.domain.length) {
      y.domain([0, d3.max(tmp, d => d)]);
    }

    if (!axis.x.domain.length) {
      x.domain([0, tmp.length / datasetNames.length]);
    }

    var scatterGroup = this.element.selectAll('g.francy-scatters');

    if (!scatterGroup.node()) {
      scatterGroup = this.element.append('g').attr('class', 'francy-scatters');
    }

    datasetNames.forEach(function(key, index) {
      var scatter = scatterGroup.selectAll(`.francy-scatter-${index}`).data(datasets[key]);

      scatter.exit().transition().duration(750)
        .style("fill-opacity", 1e-6)
        .remove();

      // append the rectangles for the bar chart
      var scatterEnter = scatter
        .enter()
        .append('circle')
        .style('fill', () => Chart.colors(index * 5))
        .attr('class', `francy-scatter-${index}`)
        .attr("r", 5)
        .attr("cx", function(d, i) { return x(i); })
        .attr("cy", function(d) { return y(d); })
        .on("mouseenter", function(d) {
          d3.select(this).transition()
            .duration(250)
            .style("fill-opacity", 0.5)
            .attr('r', 10);
          tooltip.load(Chart.tooltip(key, d), true).render();
        })
        .on("mouseleave", function() {
          d3.select(this).transition()
            .duration(250)
            .style("fill-opacity", 1)
            .attr('r', 5);
          tooltip.unrender();
        });

      scatterEnter.merge(scatter);
    });

    // force rebuild axis again
    var xAxisGroup = this.element.selectAll('g.francy-x-axis');

    if (!xAxisGroup.node()) {
      xAxisGroup = this.element.append('g').attr('class', 'francy-x-axis');
    }

    xAxisGroup.selectAll('*').remove();

    // add the x Axis
    xAxisGroup
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .append('text')
      .attr('dy', 50)
      .attr('dx', width / 2)
      .attr('fill', 'black')
      .attr('class', 'francy-axis')
      .style('text-anchor', 'end')
      .text(axis.x.title);

    // force rebuild axis again
    var yAxisGroup = this.element.selectAll('g.francy-y-axis');

    if (!yAxisGroup.node()) {
      yAxisGroup = this.element.append('g').attr('class', 'francy-y-axis');
    }

    yAxisGroup.selectAll('*').remove();

    // add the y Axis
    yAxisGroup
      .call(d3.axisLeft(y))
      .append('text')
      .attr('dx', -50)
      .attr('dy', height / 2)
      .attr('fill', 'black')
      .attr('class', 'francy-axis')
      .style('text-anchor', 'end')
      .text(axis.y.title);

    if (this.data.canvas.chart.showLegend) {

      var legendGroup = this.element.selectAll('.francy-legend');

      if (!legendGroup.node()) {
        legendGroup = this.element.append('g').attr('class', 'francy-legend');
      }

      // force rebuild legend again
      legendGroup.selectAll('*').remove();

      var legend = legendGroup.selectAll('g').data(datasetNames.slice());

      legend.exit().remove();

      legend = legend.enter()
        .append('g')
        .attr('transform', (d, i) => `translate(0,${i * 20})`)
        .merge(legend);

      legend.append('rect')
        .attr('x', width + 20)
        .attr('width', 19)
        .attr('height', 19)
        .style('fill', (d, i) => Chart.colors(i * 5));

      legend.append('text')
        .attr('x', width + 80)
        .attr('y', 9)
        .attr('dy', '.35em')
        .style('text-anchor', 'end')
        .text(d => d);
    }

    return this;
  }

  unrender() {}
}
