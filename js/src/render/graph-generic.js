import Graph from './graph';
import { initialize } from '../util/initialize-decorator';
import { showLoader, hideLoader } from '../util/loader-decorator';

/* global d3 */

export default class GenericGraph extends Graph {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @initialize()
  render() {
    let self = this,
      loaderId = showLoader.call(this),
      simulationActive = this.data.canvas.graph.simulation,
      canvasNodes = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [],
      canvasLinks = this.data.canvas.graph.links ? Object.values(this.data.canvas.graph.links) : [];

    let linkGroup = this.element.selectAll('g.francy-links');

    if (!linkGroup.node()) {
      linkGroup = this.element.append('g').classed('francy-links', true);
    }

    let links = linkGroup.selectAll('g.francy-link').data();
    let linksToAdd = this._filterNewElements(canvasLinks, links);

    let link = linkGroup.selectAll('g.francy-link').data(linksToAdd, d => d.id);

    if (this.data.canvas.graph.type === 'directed') {
      // this means we need arrows, so we append the marker
      this.parent.append('defs').selectAll('marker')
        .data(linksToAdd)
        .enter().append('marker')
        .classed('francy-arrows', true)
        .attr('id', d => `arrow-${d.id}`)
        .attr('viewBox', '0 -5 10 10')
        .attr('markerUnits', 'strokeWidth')
        .attr('orient', 'auto')
        .append('path')
        .attr('d', 'M0,-5 L10,0 L0,5')
        .style('fill', d => d.color || undefined);
    }

    let nodeGroup = this.element.selectAll('g.francy-nodes');

    if (!nodeGroup.node()) {
      nodeGroup = this.element.append('g').classed('francy-nodes', true);
    }

    let nodes = nodeGroup.selectAll('g.francy-node').data();
    let nodesToAdd = this._filterNewElements(canvasNodes, nodes);

    let node = nodeGroup.selectAll('g.francy-node').data(nodesToAdd, d => d.id);

    // this means no changes, so we can safely return
    if (node.exit().data().length === 0 && node.enter().data().length === 0 &&
      link.enter().data().length === 0 && link.exit().data().length === 0) return;

    let linkEnter = link.enter().append('g')
      .classed('francy-link', true);

    linkEnter.append('path')
      .classed('francy-edge', true)
      .style('stroke-width', d => Math.sqrt(d.weight))
      .style('stroke', d => d.color || undefined);

    if (this.data.canvas.graph.type === 'directed') {
      linkEnter.append('path').classed('francy-edge-arrow', true)
        .style('stroke', 'none')
        .style('marker-start', d => `url(#arrow-${d.id})`)
        .style('stroke-width', d => Math.sqrt(d.weight));
    }

    linkEnter.append('text')
      .classed('francy-label', true)
      .style('font-size', d => 7 * Math.sqrt(d.weight))
      .style('opacity', 0.1)
      .style('opacity', 0.1)
      .text(d => d.title)
      .attr('text-anchor', 'middle');

    link.exit().remove();

    link = linkGroup.selectAll('g.francy-link');
    
    // on mouse over show labels opacity 1
    labelsOpacityBehavior();

    let nodeEnter = node.enter().append('g').classed('francy-node', true).attr('id', d => d.id);

    nodeEnter.append('path')
      .attr('d', d3.symbol().type(d => Graph.getSymbol(d.type)).size(d => d.size * 100))
      .style('fill', d => d.color || Graph.colors(d.layer * 5))
      .classed('francy-symbol', true)
      .classed('francy-highlight', d => d.highlight)
      .classed('francy-context', d => Object.values(d.menus).length && Object.values(d.menus).length > 0);

    nodeEnter.append('text')
      .classed('francy-label', true)
      .text(d => d.title)
      .style('font-size', d => 7 * Math.sqrt(d.size))
      .attr('x', function() {
        // apply mathjax if this is the case
        let text = d3.select(this);
        if (text.text().startsWith('$') && text.text().endsWith('$')) {
          // we need to set the position after re-render the latex
          self.handlePromise(self.mathjax.settings({appendTo: {element: text}}).renderSVG(() => {
            text.attr('x', self.setLabelXPosition(this));
          }));
        }
        return self.setLabelXPosition(this);
      });/*.attr('y', function() {
        return self.setLabelYPosition(this);
      });*/

    node.exit().remove();

    node = nodeGroup.selectAll('g.francy-node');

    if (this.data.canvas.graph.drag) {
      node.call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));
    }

    if (node && !node.empty()) {

      this._applyEvents(node);

      if (this.data.canvas.graph.showNeighbours) {
        let nodeOnClick = node.on('click');
        node.on('click', function(d) {
          // default, highlight connected nodes
          connectedNodes.call(this);
          // any callbacks will be handled here
          nodeOnClick.call(this, d);
        });
        link.on('click', function() {
          // default, highlight connected nodes
          linkConnectedNodes.call(this);
        });
      }
    }

    if (simulationActive) {
      let radius = 0;
      node.each(function() {
        let bound = this.getBBox();
        // check the widest BBox so that we use it as default radius for colisions
        if (radius < bound.width) {
          radius = bound.width;
        }
      });

      //Canvas Forces
      var simulation = d3.forceSimulation().nodes(nodesToAdd)
        .force('charge', d3.forceManyBody().strength(-nodesToAdd.length * linksToAdd.length))
        .force('collide', d3.forceCollide().radius(radius / 2))
        .force('link', d3.forceLink(canvasLinks).id(d => d.id).distance(d => d.height || 100))
        .force('x', d3.forceX())
        .force('y', d3.forceY(d => (d.layer + 1) * 100))
        .on('tick', ticked)
        .on('end', end);

    } else {
      // well, simulation is off, apply fixed positions
      ticked();
      end();
    }
    
    function end() {
      self.parent.zoomToFit();
      hideLoader.call(self, loaderId);
    }

    function ticked() {
      link.selectAll('path.francy-edge')
        .attr('d', function(d) {
          if (d.source.id === d.target.id) {
            return `M${d.source.x},${d.source.y} A${d.target.size + 10},${d.target.size + 10} -45,1,0 ${d.source.x - 1},${d.source.y}`;
          }
          return `M${d.source.x},${d.source.y} L${d.target.x},${d.target.y}`;
        });

      if (self.data.canvas.graph.type === 'directed') {
        link.each(function() {
        
          var g = d3.select(this), data = g.data()[0],
            pathEl = g.select('path.francy-edge').node(),
            pathLength = pathEl.getTotalLength(),
            nodeSize = (Math.floor(d3.select(`#${data.target.id} > path.francy-symbol`).node().getBBox().width) + 4) / 2,
            pathPoint = pathEl.getPointAtLength(pathLength - nodeSize - data.weight),
            pathPoint2 = pathEl.getPointAtLength(pathLength - nodeSize),
            x1 = pathPoint.x, y1 = pathPoint.y, x2 = pathPoint2.x, y2 = pathPoint2.y;
         
          if (data.source.id === data.target.id) {
            x2 += (x1 - x2) / (y1 - y2);
            y2 += (y1 - y2) / (x1 - x2);
          }

          g.select('path.francy-edge-arrow').attr('d', `M${x1},${y1} L${x2},${y2}`);
        });
      }

      link.selectAll('text.francy-label')
        .attr('x', d => Graph.linkXPos(d.target, d.source))
        .attr('y', d => Graph.linkYPos(d.target, d.source));

      node.attr('transform', d => `translate(${d.x},${d.y})`);
    }

    // HIGHLIGHT
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

    function connectedNodes() {
      //This function looks up whether a pair are neighbours
      function neighboring(a, b) {
        return linkedByIndex[`${a.index},${b.index}`];
      }
      d3.event.preventDefault();
      if (toggle === 0) {
        //Reduce the opacity of all but the neighbouring nodes
        let d = d3.select(this).node().__data__;
        node.style('opacity', o => neighboring(d, o) || neighboring(o, d) ? 1 : 0.1);
        link.style('opacity', function(o) {
          let opacity = d.index === o.source.index || d.index === o.target.index ? 1 : 0.1;
          d3.select(this).on('mouseleave', undefined).select('text').style('opacity', opacity);
          return opacity;
        });
        //Reduce the op
        toggle = 1;
      } else {
        //Put them back to opacity=1
        node.style('opacity', 1);
        link.style('opacity', function() {
          d3.select(this).select('text').style('opacity', 0.1);
          return 1;
        });
        labelsOpacityBehavior();
        toggle = 0;
      }
    }

    function linkConnectedNodes() {
      d3.event.preventDefault();
      if (toggle === 0) {
        //Reduce the opacity of all but the neighbouring nodes
        let d = d3.select(this).node().__data__;
        node.style('opacity', o => d.source.id === o.id || d.target.id === o.id ? 1 : 0.1);
        link.style('opacity', function(o) {
          let opacity = d.index === o.index ? 1 : 0.1;
          d3.select(this).on('mouseleave', undefined).select('text').style('opacity', opacity);
          return opacity;
        });
        //Reduce the op
        toggle = 1;
      } else {
        //Put them back to opacity=1
        node.style('opacity', 1);
        link.style('opacity', function() {
          d3.select(this).select('text').style('opacity', 0.1);
          return 1;
        });
        labelsOpacityBehavior();
        toggle = 0;
      }
    }
    
    function labelsOpacityBehavior() {
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

    function dragstarted(d) {
      if (!d3.event.active && simulationActive) {
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
      if (!d3.event.active && simulationActive) {
        simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    }

    return this;

  }

  unrender() {}
  
  _filterNewElements(canvasObjects, d3Element) {
    let newElements = [];
    canvasObjects.forEach(o => {
      let link = d3Element.find(d => d.id === o.id);
      if (link) {
        newElements.push(link);
      } else {
        newElements.push(o);
      }
    });
    return newElements;
  }

}
