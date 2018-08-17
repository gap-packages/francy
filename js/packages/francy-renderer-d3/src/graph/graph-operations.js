import { BaseRenderer, Configuration } from 'francy-core';

/* global d3 */

export default class GraphOperations extends BaseRenderer {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
    this.load(this.options.appendTo.data); // this will be most likely the Frame!
    var self = this;
    this.nodeOperations = {
      clear: function() {
        this._getAll().each(function(){
          let node = d3.select(this);
          delete node.data()[0].selected;
          node.classed('francy-selected', d => d.selected);
        }).classed('francy-selected', d => d.selected);
      },
      getAll: function() {
        var selected = [];
        this._getAll().each(function(){
          selected.push(d3.select(this).data()[0].id);
        });
        return selected;
      },
      _getAll: () => d3.select(`svg#Canvas-${self.data.canvas.id}`).selectAll('.francy-node.francy-selected').filter(d => d.selected),
      select: (data) => {
        if (!d3.event.ctrlKey) {
          this.clear();
        }
        data.selected = !data.selected;
        d3.select(this).classed('francy-selected', d => d.selected);
      }
    };
  }

  get nodeSelection() {
    return this.nodeOperations;
  }
  
  dragBehavior(node, simulation, active) {

    function enableDrag(enable) {
      node.call(d3.drag()
        .on('start', enable ? dragstarted : undefined)
        .on('drag', enable ? dragged : undefined)
        .on('end', enable ? dragended : undefined));
    }
      
    function dragstarted(d) {
      if (!d3.event.active && active) {
        simulation.on('end', undefined);
        simulation.alphaTarget(0.01).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active && active) {
        simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    }

    // subscribe to update drag behavior on configuration change
    Configuration.subscribe('dragNodes', (value) => enableDrag.call(this, value));
    
    // enable drag behavior
    return enableDrag;
  }
  
  connectedNodes(node, canvasNodes, link, canvasLinks) {
    let self = this;
    //Toggle stores whether the highlighting is on
    let toggle = 0;

    //Create an array logging what is connected to what
    let linkedByIndex = {};

    for (let i = 0; i < canvasNodes.length; i++) {
      linkedByIndex[`${i},${i}`] = 1;
    }

    canvasLinks.forEach(function(d) {
      linkedByIndex[`${d.source.index},${d.target.index}`] = 1;
    });

    function connected() {
      if (!Configuration.object.showNeighbours) return;
      if (toggle === 0) {
        //Reduce the opacity of all but the neighbouring nodes
        let el = d3.select(this);
        let d = el.node().__data__;
        if (el.attr('class').includes('francy-node')) {
          node.style('opacity', o => linkedByIndex[`${d.index},${o.index}`] || linkedByIndex[`${o.index},${d.index}`] ? 1 : 0.1);
          link.style('opacity', function(o) {
            let opacity = d.index === o.source.index || d.index === o.target.index ? 1 : 0.1;
            d3.select(this).on('mouseleave', undefined).select('text').style('opacity', opacity);
            return opacity;
          });
        } else if (el.attr('class').includes('francy-link')) {
          node.style('opacity', o => d.source.id === o.id || d.target.id === o.id ? 1 : 0.1);
          link.style('opacity', function(o) {
            let opacity = d.index === o.index ? 1 : 0.1;
            d3.select(this).on('mouseleave', undefined).select('text').style('opacity', opacity);
            return opacity;
          });
        }
        setTimeout(() => {
          d3.select('body').on('click', () => toggle === 1 ? connected.call(this) : undefined);
        }, 0);
        //Reduce the op
        toggle = 1;
      } else {
        //Put them back to opacity 1
        node.style('opacity', 1);
        link.style('opacity', function() {
          d3.select(this).select('text').style('opacity', 0.1);
          return 1;
        });
        self.labelsOpacityBehavior(link);
        d3.select('body').on('click', undefined);
        toggle = 0;
      }
      d3.event.preventDefault();
    }

    return connected;
  }

  labelsOpacityBehavior(link) {
    link.on('mouseover', function(){
      d3.select(this).selectAll('text')
        .style('opacity', 1)
        .style('opacity', 1);
    }).on('mouseleave', function(){
      d3.select(this).selectAll('text')
        .style('opacity', 0.1)
        .style('opacity', 0.1);
    });
  }

}
