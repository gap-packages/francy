import { Renderer, Tooltip } from 'francy-core';

/* global d3 */

export default class Chart extends Renderer {

  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
    this.axis = undefined;
    this.yScale = undefined;
    this.xScale = undefined;
    this.datasets = undefined;
    this.datasetNames = undefined;
    this.tooltip = undefined;
  }

  initialize() {
    this.tooltip = new Tooltip(this.options, this.context);

    this.element = this.parent.select('g.francy-content');

    this.axis = this.data.canvas.chart.axis;
    this.datasets = this.data.canvas.chart.data;
    this.datasetNames = Object.keys(this.datasets);

    this.xScale = d3.scaleLinear().range([0, this.width]).domain(this.axis.x.domain);
    this.yScale = d3.scaleLinear().range([this.height, 0]).domain(this.axis.y.domain);

    this.allValues = [];
    this.datasetNames.forEach(key => this.allValues = this.allValues.concat(this.datasets[key]));

    if (!this.axis.y.domain.length) {
      this.yScale.domain([0, d3.max(this.allValues, d => d)]);
    }

    if (!this.axis.x.domain.length) {
      this.xScale.domain([0, this.allValues.length / this.datasetNames.length]);
    }
  }

  _renderAxis() {
    // force rebuild axis again
    let xAxisGroup = this.element.selectAll('g.francy-x-axis');

    if (!xAxisGroup.node()) {
      xAxisGroup = this.element.append('g').attr('class', 'francy-x-axis');
    }

    xAxisGroup.selectAll('*').remove();

    // add the x Axis
    xAxisGroup
      .attr('transform', `translate(0,${this.height})`)
      .call(d3.axisBottom(this.xScale))
      .append('text')
      .attr('dy', 50)
      .attr('dx', this.width / 2)
      .attr('fill', 'black')
      .attr('class', 'francy-axis')
      .style('text-anchor', 'end')
      .text(this.axis.x.title);

    // force rebuild axis again
    let yAxisGroup = this.element.selectAll('g.francy-y-axis');

    if (!yAxisGroup.node()) {
      yAxisGroup = this.element.append('g').attr('class', 'francy-y-axis');
    }

    yAxisGroup.selectAll('*').remove();

    // add the y Axis
    yAxisGroup
      .call(d3.axisLeft(this.yScale))
      .append('text')
      .attr('dx', -50)
      .attr('dy', this.height / 2)
      .attr('fill', 'black')
      .attr('class', 'francy-axis')
      .style('text-anchor', 'end')
      .text(this.axis.y.title);
  }

  _renderLegend() {
    if (this.data.canvas.chart.showLegend) {

      let legendGroup = this.element.selectAll('.francy-legend');

      if (!legendGroup.node()) {
        legendGroup = this.element.append('g').attr('class', 'francy-legend');
      }

      // force rebuild legend again
      legendGroup.selectAll('*').remove();

      let legend = legendGroup.selectAll('g').data(this.datasetNames.slice());

      legend.exit().remove();

      legend = legend.enter()
        .append('g')
        .attr('transform', (d, i) => `translate(0,${i * 20})`)
        .merge(legend);

      legend.append('rect')
        .attr('x', this.width + 20)
        .attr('width', 19)
        .attr('height', 19)
        .style('fill', (d, i) => Chart.colors(i * 5));

      legend.append('text')
        .attr('x', this.width + 80)
        .attr('y', 9)
        .attr('dy', '.35em')
        .style('text-anchor', 'end')
        .text(d => d);
    }
  }

  static tooltip(dataset, value) {
    return { 'A': { 'title': 'Dataset', 'text': dataset }, 'B': { 'title': 'Value', 'text': value } };
  }

  static get colors() {
    return d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow);
  }

  static domainRange(max) {
    return Array.from(new Array(max), (_, i) => i).map(x => x);
  }

}
