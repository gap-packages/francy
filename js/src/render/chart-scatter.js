import Renderer from './renderer';
import Tooltip from './tooltip';
import Chart from './chart';

/* global d3 */

export default class ScatterChart extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render(json) {

    // just ignore rendering if no chart is present
    if (!json.canvas.chart) {
      this.logger.debug('No ScatterChart to render here... continuing...');
      return;
    }

    var tooltip = new Tooltip(this.options);

    var parent = this.options.appendTo;

    var axis = json.canvas.chart.axis,
      datasets = json.canvas.chart.data,
      datasetNames = Object.keys(datasets);

    var svg = parent.select('g.francy-content'),
      margin = { top: 50, right: 50, bottom: 50, left: 50 },
      width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
      height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;

    // set the dimensions and margins of the chart
    width = width - margin.left - margin.right;
    height = height - margin.top - margin.bottom;

    var t = d3.transition().duration(500);

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

    var scatterGroup = svg.selectAll('g.francy-scatter');

    if (!scatterGroup.node()) {
      scatterGroup = svg.append('g').attr('class', 'francy-scatter');
    }

    datasetNames.forEach(function(key, index) {
      var scatter = scatterGroup.selectAll(`.scatter${index}`).data(datasets[key]);

      scatter.exit().style("fill-opacity", 1).transition(t).style("fill-opacity", 1e-6).remove();

      // append the rectangles for the bar chart
      scatter
        .enter()
        .append('circle')
        .style('fill', () => Chart.colors(index * 5))
        .attr('class', `francy-scatter${index}`)
        .attr("r", 5)
        .attr("cx", function(d, i) { return x(i); })
        .attr("cy", function(d) { return y(d); })
        .on("mouseover", function(d) {
          d3.select(this).transition()
            .duration(250)
            .style("fill-opacity", 0.5)
            .attr('r', 10);
          tooltip.render({ 'Dataset': key, 'Value': d });
        })
        .on("mouseout", function() {
          d3.select(this).transition()
            .duration(250)
            .style("fill-opacity", 1)
            .attr('r', 5);
          tooltip.unrender();
        })
        .style("fill-opacity", 1e-6)
        .transition(t).style("fill-opacity", 1);

      scatter.merge(scatter);
    });

    // force rebuild axis again
    var xAxisGroup = svg.selectAll('g.francy-x-axis');

    if (!xAxisGroup.node()) {
      xAxisGroup = svg.append('g').attr('class', 'francy-x-axis');
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
    var yAxisGroup = svg.selectAll('g.francy-y-axis');

    if (!yAxisGroup.node()) {
      yAxisGroup = svg.append('g').attr('class', 'francy-y-axis');
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

    var legendGroup = svg.selectAll('.francy-legend');

    if (!legendGroup.node()) {
      legendGroup = svg.append('g').attr('class', 'francy-legend');
    }

    // force rebuild legend again
    legendGroup.selectAll('*').remove();

    var legend = legendGroup.selectAll('g').data(datasetNames.slice());

    legend.exit().transition(t).remove();

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
}
