import { Callback, ContextMenu, Decorators, Graph, Tooltip } from 'francy-core';

/* global vis */

export default class GraphGeneric extends Graph {

  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
    this.callback = new Callback(this.options, this.context);
    this.tooltip = new Tooltip(this.options, this.context);
    this.contextMenu = new ContextMenu(this.options, this.context);
  }

  @Decorators.Data.requires('canvas.graph')
  @Decorators.Initializer.initialize()
  async render() {
    let self = this,
      loader = Decorators.Loader.withContext(this).show(),
      canvasNodes = this.data.canvas.graph.nodes ? JSON.parse(JSON.stringify(Object.values(this.data.canvas.graph.nodes))) : [],
      canvasLinks = this.data.canvas.graph.links ? JSON.parse(JSON.stringify(Object.values(this.data.canvas.graph.links))) : [];
      
    canvasNodes.forEach(function(node){
      node['label'] = node.title;
      node['group'] = node.conjugate || node.layer;
    });
    
    canvasLinks.forEach(function(link){
      if (self.data.canvas.graph.type === 'directed') {
        link['arrows'] = 'to';
      }
      link['from'] = link.source;
      link['to'] = link.target;
    });
      
    var network = new vis.Network(this.parent.node(), {
      nodes: canvasNodes,
      edges: canvasLinks
    }, {
      nodes: {
        borderWidth: 2
      },
      interaction: {
        hover: true
      },
      layout: {
        hierarchical: {
          direction: 'UD',
          sortMethod: 'directed'
        }
      },
      height: self.data.canvas.height
    });
  
    network.on('stabilized', function() {
      loader.hide();
    });
  }

}
