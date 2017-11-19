import Renderer from './renderer';
//import IDUtils from '../util/id-utils';

/* global d3 */

export default class Chart extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  static get colors() {
    return d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow);
  }

  render(json) {

    if (!Object.keys(json.canvas.chart).length) {
      return;
    }

    var parent = this.options.appendTo;

    var chartAxis = json.canvas.chart.axis,
      chartDatasets = json.canvas.chart.data,
      numberOfDatasets = Object.keys(chartDatasets).length;

    var svg = parent.select('g.content'),
      margin = { top: 50, right: 50, bottom: 100, left: 100 },
      width = +parent.attr('width') || d3.select('body').node().getBoundingClientRect().width,
      height = +parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;

    // set the dimensions and margins of the chart
    width = width - margin.left - margin.right;
    height = height - margin.top - margin.bottom;

    // set the ranges
    var x = d3.scaleBand().range([0, width]).padding(0.1).domain(chartAxis.x.domain);
    var y = d3.scaleLinear().range([height, 0]).domain(chartAxis.y.domain);

    svg.attr('transform', `translate(${margin.left},${margin.top})`);

    var self = this;

    var tmp = [];
    Object.keys(chartDatasets).forEach(key => tmp = tmp.concat(chartDatasets[key]));

    if (!chartAxis.y.domain.length) {
      y.domain([0, d3.max(tmp, d => d)]);
    }

    if (!chartAxis.x.domain.length) {
      chartAxis.x.domain = self._range(tmp.length / numberOfDatasets);
      x.domain(chartAxis.x.domain);
    }

    Object.keys(chartDatasets).forEach(function(key, index) {
      // append the rectangles for the bar chart
      svg.selectAll('.bar-' + index)
        .data(chartDatasets[key]).enter()
        .append('rect')
        .style('fill', () => Chart.colors(index * numberOfDatasets))
        .attr('class', 'bar')
        .attr('x', function(d, i) { return x(chartAxis.x.domain[i]) + index * (x.bandwidth() / numberOfDatasets); })
        .attr('width', (x.bandwidth() / numberOfDatasets) - 1)
        .attr('y', function(d) { return y(d); })
        .attr('height', function(d) { return height - y(d); });
    });

    // add the x Axis
    svg.append('g').attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .append('text')
      .attr('dy', 50)
      .attr('dx', width / 2)
      .attr('fill', 'black')
      .attr('class', 'axis')
      .style('text-anchor', 'end')
      .text(chartAxis.x.title);

    // add the y Axis
    svg.append('g')
      .call(d3.axisLeft(y))
      .append('text')
      .attr('dx', -50)
      .attr('dy', height / 2)
      .attr('fill', 'black')
      .attr('class', 'axis')
      .style('text-anchor', 'end')
      .text(chartAxis.y.title);

    var options = d3.keys(chartDatasets);

    var legend = svg.selectAll('.legend')
      .data(options.slice())
      .enter().append('g')
      .attr('class', 'legend')
      .attr('transform', (d, i) => 'translate(0,' + i * 20 + ')');

    legend.append('rect')
      .attr('x', width + 20)
      .attr('width', 19)
      .attr('height', 19)
      .style('fill', (d, i) => Chart.colors(i * numberOfDatasets));

    legend.append('text')
      .attr('x', width + 70)
      .attr('y', 9)
      .attr('dy', '.35em')
      .style('text-anchor', 'end')
      .text((d) => d);
  }

  _range(max) {
    return Array.from(new Array(max), (_, i) => i).map(x => x);
  }

}
