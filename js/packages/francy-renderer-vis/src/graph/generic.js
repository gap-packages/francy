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
      node['borderWidth'] =  node.invisible ? 0 : Math.sqrt(node.weight || 0.2);
      node['chosen'] = node.selected;
      node['shape'] = node.type;
    });
    
    canvasLinks.forEach(function(link){
      if (self.data.canvas.graph.type === 'directed') {
        link['arrows'] = 'to';
      }
      link['from'] = link.source;
      link['to'] = link.target;
    });
      
    var network = new vis.Network(this.parent.node(), {
      nodes: new vis.DataSet(canvasNodes),
      edges: new vis.DataSet(canvasLinks)
    }, {
      nodes: {
        borderWidth: 2
      },
      interaction: {
        hover: true
      },
      layout: {
        hierarchical: {
          direction: self.context.configuration.object.visLayoutDirection,
          sortMethod: self.context.configuration.object.visLayoutSortMethod
        }
      },
      height: self.data.canvas.height + ''
    });
    
    // update the zoom to fit function
    self.parentClass.zoomToFit = () => network.fit();
  
    network.on('stabilized', function() {
      loader.hide();
    });
    
    network.on('click', function(params) {
      params.event.preventDefault();
      let data = resolveNode.call(this, params);
      self.OnEvent.click(data);
    });
    
    network.on('oncontext', function (params) {
      params.event.preventDefault();
      let data = resolveNode.call(this, params);
      self.OnEvent.contextMenu(data);
    });

    network.on('doubleClick', function (params) {
      params.event.preventDefault();
      let data = resolveNode.call(this, params);
      self.OnEvent.doubleClick(data);
    });
      
    network.on('hoverNode', function (params) {
      params.event.preventDefault();
      let data = resolveNode.call(this, params);
      self.OnEvent.mouseIn(data);
    });
      
    network.on('blurNode', function () {
      self.OnEvent.mouseOut();
    });
      
    function resolveNode(params) {
      let nodeIndex = this.getNodeAt(params.pointer.DOM);
      if (nodeIndex) {
        let node = this.body.nodes[nodeIndex];
        return node.options;
      }
    }
    
  }

}
