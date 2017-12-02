import Renderer from './renderer';
import Tooltip from './tooltip';
import Chart from './chart';

/* global d3 */

export default class LineChart extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render(json) {

    // just ignore rendering if no chart is present
    if (!json.canvas.chart) {
      this.logger.debug('No LineChart to render here... continuing...');
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

    var linesGroup = svg.selectAll('g.francy-lines');

    if (!linesGroup.node()) {
      linesGroup = svg.append('g').attr('class', 'francy-lines');
    }

    datasetNames.forEach(function(key, index) {
      var valueLine = d3.line()
        .x(function(d, i) { return x(i); })
        .y(function(d) { return y(d); });

      var line = linesGroup.selectAll(`.line${index}`).data([datasets[key]]);

      line.exit().remove();

      // append the rectangles for the bar chart
      line.enter()
        .append('path')
        .style('stroke', () => Chart.colors(index * 5))
        .style('stroke-width', '5px')
        .attr('class', `francy-line${index}`)
        .attr('d', valueLine)
        .on("mouseover", function(d) {
          d3.select(this).transition()
            .duration(250)
            .style("stroke-opacity", 0.5)
            .style('stroke-width', '10px');
          tooltip.render({ 'Dataset': key, 'Value': d });
        })
        .on("mouseout", function() {
          d3.select(this).transition()
            .duration(250)
            .style("stroke-opacity", 1)
            .style('stroke-width', '5px');
          tooltip.unrender();
        });

      line.merge(line);
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

    parent.zoomToFit();

    return svg;
  }
}
