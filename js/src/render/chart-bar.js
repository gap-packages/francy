import Renderer from './renderer';
import Tooltip from './tooltip';
import Chart from './chart';

/* global d3 */

export default class BarChart extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render(json) {

    // just ignore rendering if no chart is present
    if (!json.canvas.chart) {
      this.logger.debug('No BarChart to render here... continuing...');
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

    // set the ranges
    var x = d3.scaleBand().range([0, width]).padding(0.1).domain(axis.x.domain);
    var y = d3.scaleLinear().range([height, 0]).domain(axis.y.domain);

    var tmp = [];
    datasetNames.forEach(key => tmp = tmp.concat(datasets[key]));

    if (!axis.y.domain.length) {
      y.domain([0, d3.max(tmp, d => d)]);
    }

    if (!axis.x.domain.length) {
      axis.x.domain = Chart.domainRange(tmp.length / datasetNames.length);
      x.domain(axis.x.domain);
    }

    var barsGroup = svg.selectAll('g.francy-bars');

    if (!barsGroup.node()) {
      barsGroup = svg.append('g').attr('class', 'francy-bars');
    }

    datasetNames.forEach(function(key, index) {
      var bar = barsGroup.selectAll(`.francy-bar${index}`).data(datasets[key]);

      bar.exit().remove();

      // append the rectangles for the bar chart
      bar.enter()
        .append('rect')
        .style('fill', () => Chart.colors(index * 5))
        .attr('class', `francy-bar${index}`)
        .attr('x', function(d, i) { return x(axis.x.domain[i]) + index * (x.bandwidth() / datasetNames.length); })
        .attr('width', (x.bandwidth() / datasetNames.length) - 1)
        .attr('y', function(d) { return y(d); })
        .attr('height', function(d) { return height - y(d); })
        .on("mouseover", function(d) {
          d3.select(this).transition()
            .duration(250).style("fill-opacity", 0.5);
          tooltip.render({ 'Dataset': key, 'Value': d });
        })
        .on("mouseout", function() {
          d3.select(this).transition()
            .duration(250).style("fill-opacity", 1);
          tooltip.unrender();
        });

      bar.merge(bar);
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

    return svg;
  }
}
