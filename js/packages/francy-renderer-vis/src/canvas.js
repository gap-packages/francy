import { Logger, CompositeRenderer } from 'francy-core';
import { DataSet, Network } from 'vis/index-network';
//import '!style-loader!css-loader!vis/dist/vis-network.min.css';

export default class Canvas extends CompositeRenderer {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
  }

  //@Decorators.Data.requires('canvas')
  async render() {

    const canvasId = `Canvas-${this.data.canvas.id}`;
    
    var nodes = new DataSet(Object.values(this.data.canvas.graph.nodes));

    // create an array with edges
    let links = [];
    Object.values(this.data.canvas.graph.links).forEach(n => {
      links.push({from: n.source, to: n.target, title: n.title});
    });
    var edges = new DataSet(links);
    
    // create a network
    var data = {
      nodes: nodes,
      edges: edges
    };
    var options = {
      interaction: {
        navigationButtons: true
      }
    };
    
    this.element = d3.select(`div#${canvasId}`);
    // check if the canvas is already present
    if (!this.element.node()) {
      // create a svg element detached from the DOM!
      Logger.debug(`Creating Canvas [${canvasId}]...`);
      this.element = this.parent.append('div')
        .attr('class', 'francy-canvas')
        .attr('id', canvasId);
    }

    // cannot continue if canvas is not present
    if (!this.element.node()) {
      throw new Error(`Oops, could not create canvas with id [${canvasId}]... Cannot proceed.`);
    }

    //this.element.attr('width', this.data.canvas.width).attr('height', this.data.canvas.height);

    //let content = this.element.select('g.francy-content');

    //if (!content.node()) {
    //  content = this.element.append('g').attr('class', 'francy-content');
    //}

    Logger.debug(`Canvas updated [${canvasId}]...`);

    //this.handlePromise(this.renderChildren());
    
    new Network(this.element.node(), data, options);

    return this;
  }
}
