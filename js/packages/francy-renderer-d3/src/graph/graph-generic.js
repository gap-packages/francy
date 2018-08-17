import { Configuration, Decorators } from 'francy-core';
//import { select } from 'd3-selection';
//import { set } from "d3-collection";
//import { symbol, line, curveBasisClosed } from "d3-shape";
//import { polygonHull, polygonCentroid } from "d3-polygon";
//import { scaleLinear } from 'd3-scale';
//import { forceSimulation, forceLink, forceManyBody, forceCollide, forceRadial, forceX, forceY } from 'd3-force';
import Graph from './graph';

/* global d3 */

export default class GenericGraph extends Graph {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @Decorators.Initializer.initialize()
  async render() {
    let self = this,
      loader = Decorators.Loader.withContext(this).show(),
      simulationActive = this.data.canvas.graph.simulation || Configuration.object.simulation,
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
      // this means we need arrows, so we append the markers
      let defs = this.parent.select('defs');
      if (!defs.node()) {
        defs = this.parent.append('defs');
      }
      defs.selectAll('marker')
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
      link.enter().data().length === 0 && link.exit().data().length === 0) {
      loader.hide();
      return;
    }

    let linkEnter = link.enter().append('g')
      .classed('francy-link', true);

    linkEnter.append('path')
      .classed('francy-edge', true)
      .style('stroke-width', d => d.invisible ? 0 : Math.sqrt(d.weight || 1))
      .style('stroke', d => d.color || undefined);

    if (this.data.canvas.graph.type === 'directed') {
      linkEnter.append('path')
        .classed('francy-edge-arrow', true)
        .style('stroke', 'none')
        .style('marker-start', d => `url(#arrow-${d.id})`)
        .style('stroke-width', d => d.invisible ? 0 : Math.sqrt(d.weight || 1));
    }

    linkEnter.filter(d => d.title).append('text')
      .classed('francy-label', true)
      .style('font-size', d => d.invisible ? 0 : 7 * Math.sqrt(d.weight || 1))
      .style('opacity', 0.1)
      .style('opacity', 0.1)
      .text(d => d.title)
      .attr('text-anchor', 'middle');

    link.exit().remove();

    link = linkGroup.selectAll('g.francy-link');
    
    // on mouse over show labels opacity 1
    this.graphOperations.labelsOpacityBehavior(link);

    let nodeEnter = node.enter().append('g').attr('id', d => d.id)
      .classed('francy-node', true)
      .classed('francy-highlight', true)
      .classed('francy-selected', d => d.selected);

    nodeEnter.append('path')
      .attr('d', d3.symbol().type(d => Graph.getSymbol(d.type)).size(d => d.size * 100))
      .style('fill', d => d.color || d.conjugate ? Graph.colors(d.conjugate * 5) : Graph.colors(d.layer * 5))
      .classed('francy-symbol', true)
      .classed('francy-context', d => Object.values(d.menus).length && Object.values(d.menus).length > 0);

    nodeEnter.filter(d => d.title).append('text')
      .classed('francy-label', true)
      .text(d => d.title)
      .style('font-size', d => 7 * Math.sqrt(d.size))
      .attr('x', function() {
        // apply mathjax if this is the case
        let text = d3.select(this);
        if (text.text().startsWith('$') && text.text().endsWith('$')) {
          // we need to set the position after re-render the latex
          self.handlePromise(self.mathjax.settings({appendTo: {element: text}, renderType: 'SVG', postFunction: () => {
            text.attr('x', self.setLabelXPosition(this));
            simulation.restart();
          }}).render());
        }
        return self.setLabelXPosition(this);
      });

    node.exit().remove();
    
    var conjugates = d3.set(canvasNodes.map(function(n) {
      return +n.conjugate; 
    }))
      .values()
      .map(function(id) {
        return { 
          id : id,
          count : canvasNodes.filter(function(n) {
            return +n.conjugate == id; 
          }).length
        };
      })
      .filter( function(conjugate) {
        return conjugate.count > 2;
      })
      .map( function(conjugate) {
        return conjugate.id; 
      });
    
    var polygon, centroid;
    
    var polygonGenerator = function(id) {
      var node_coords = node
        .filter(function(d) {
          return d.conjugate == id; 
        })
        .data()
        .map(function(d) {
          return [d.x, d.y]; 
        });
        
      return d3.polygonHull(node_coords);
    };
    
    var valueline = d3.line()
      .x(function(d) {
        return d[0]; 
      })
      .y(function(d) {
        return d[1]; 
      })
      .curve(d3.curveBasisClosed);

    let groups = this.element.selectAll('g.francy-conjugates');

    if (!groups.node()) {
      groups = this.element.append('g').classed('francy-conjugates', true);
    }

    var paths = groups.selectAll('.francy-conjugates-group')
      .data(conjugates, function(d) {
        return +d; 
      })
      .enter()
      .append('g')
      .attr('class', 'francy-conjugates-group')
      .append('path')
      .attr('stroke', function(d) {
        return Graph.colors(d*10); 
      })
      .attr('fill', function(d) {
        return Graph.colors(d*10); 
      })
      .attr('opacity', 0.3);

    function updateGroups() {
      conjugates.forEach(function(id) {
        var path = paths.filter(function(d) {
          return d == id;
        })
          .attr('transform', 'scale(1) translate(0,0)')
          .attr('d', function(d) {
            polygon = polygonGenerator(d);
            centroid = d3.polygonCentroid(polygon);

            // to scale the shape properly around its points:
            // move the 'g' element to the centroid point, translate
            // all the path around the center of the 'g' and then
            // we can scale the 'g' element properly
            return valueline(
              polygon.map(function(point) {
                return [  point[0] - centroid[0], point[1] - centroid[1] ];
              })
            );
          });

        d3.select(path.node().parentNode).attr('transform', 'translate('  + centroid[0] + ',' + (centroid[1]) + ') scale(' + 3 + ')');
      });
    }

    node = nodeGroup.selectAll('g.francy-node');

    if (simulationActive) {
      let radius = 0, 
        symbolRadius = 0, 
        ylayered = false,
        xlayered = false;

      var xScale = d3.scaleLinear();
      var yScale = d3.scaleLinear();

      let conj = {};
      let foci = {};
      node.each(function(d) {
        let bound = this.getBBox();
        // calculate default radius for colisions
        // check the widest group Bounding Box
        if (radius < bound.width) {
          radius = bound.width;
        }
        // check the widest path Bounding Box
        let node = d3.select(this);
        let symbolBound = node.select('path.francy-symbol').node().getBBox();
        if (symbolRadius < symbolBound.width) {
          symbolRadius = symbolBound.width;
        }
        conj[d.conjugate] = (conj[d.conjugate] || 0) + 1;
        foci[d.id] = foci[d.id] || {};
        foci[d.id].x = xScale(d.conjugate + conj[d.conjugate] + d.size);
        foci[d.id].y = yScale(d.layer * 100 + d.size);
        // check whether the graph will be layered on y - hasse
        if (d.layer != 0) {
          ylayered = true;
        }
        // check whether the graph will be layered on x
        if (d.conjugate != 0) {
          xlayered = true;
        }
      });

      //Canvas Forces
      var simulation = d3.forceSimulation(),
        safeTicked = Decorators.Error.wrap(ticked).withContext(self).onErrorThrow(false).onErrorExec(simulation.stop),
        safeEnd = Decorators.Error.wrap(endSimulation).withContext(self);

      let linkForce = d3.forceLink(canvasLinks).id(d => d.id).distance(d => d.length || (nodesToAdd.length * radius / 2));
      let chargeStrength = -5 * Math.log(nodesToAdd.length) * Math.log(linksToAdd.length);
      chargeStrength = chargeStrength < -400 ? chargeStrength : -400;

      simulation.nodes(nodesToAdd)
        //.force('charge-1', ylayered ? undefined : forceManyBody().strength(chargeStrength * 0.15))
        //.force('x', xlayered ? forceX(d => foci[d.id].x) : forceX())
        //.force('y', ylayered ? forceY(d => foci[d.id].y).strength(1) : forceY())
        //.force('r', forceRadial(nodesToAdd.length * radius).strength(1))
        .force('charge-2', d3.forceManyBody())
        //.force('link', ylayered ? linkForce.strength(d => d.weight ? Math.sqrt(d.weight) % 1 : 1 / (linksToAdd.length + 1)) : linkForce)
        .force('link', ylayered ? linkForce.strength(0.01) : linkForce)
        .force('collide', d3.forceCollide().radius((radius > symbolRadius ? radius : symbolRadius * 1.5) / 2))
        .on('tick', () => safeTicked.handle())
        .on('end', () => safeEnd.handle());

      if (nodesToAdd.length >= 1000 || linksToAdd.length >= 1000) {
        self.parent.attr('visibility', 'hidden');
        simulation.alphaMin(0.05).on('tick', undefined);
      }

    } else {
      // well, simulation is off
      endSimulation();
    }

    function endSimulation() {
      self.parent.attr('visibility', 'visible');
      safeTicked.handle();
      loader.hide();
      self.parent.zoomToFit();
      //updateGroups();
    }
    
    let edges =  link.selectAll('path.francy-edge');
    let labels = link.selectAll('text.francy-label');

    function ticked() {
      edges
        .attr('d', function(d) {
          if (d.source.id === d.target.id) {
            return `M${d.source.x},${d.source.y} A${d.target.size + 10},${d.target.size + 10} -45,1,0 ${d.source.x - 1},${d.source.y}`;
          }
          return `M${d.source.x},${d.source.y} L${d.target.x},${d.target.y}`;
        });

      if (self.data.canvas.graph.type === 'directed') {
        link.each(function() {
        
          let g = d3.select(this), data = g.data()[0],
            pathEl = g.select('path.francy-edge').node(),
            pathLength = pathEl.getTotalLength(),
            nodeEl = d3.select(`#${data.target.id} > path.francy-symbol`).node(),
            nodeSize = (Math.floor(nodeEl.getBBox().width) + 4) / 2,
            pathPoint = pathEl.getPointAtLength(pathLength - nodeSize - (data.weight || 1)),
            pathPoint2 = pathEl.getPointAtLength(pathLength - nodeSize),
            x1 = pathPoint.x, y1 = pathPoint.y, x2 = pathPoint2.x, y2 = pathPoint2.y;
         
          if (data.source.id === data.target.id) {
            x2 += (x1 - x2) / (y1 - y2);
            y2 += (y1 - y2) / (x1 - x2);
          }

          g.select('path.francy-edge-arrow').attr('d', `M${x1},${y1} L${x2},${y2}`);
        });
      }

      labels
        .attr('x', d => Graph.linkXPos(d.target, d.source))
        .attr('y', d => Graph.linkYPos(d.target, d.source));

      node.attr('transform', d => `translate(${d.x},${d.y})`);
    }

    if (Configuration.object.dragNodes) {
      this.graphOperations.dragBehavior(node, simulation, simulationActive).call(this, true);
    }

    if (node && !node.empty()) {

      this._applyEvents(node);

      let connectedNodes = self.graphOperations.connectedNodes(node, canvasNodes, link, canvasLinks);
      let nodeOnClick = node.on('click');
      node.on('click', function(d) {
        // default, highlight connected nodes
        connectedNodes.call(this);
        // any callbacks will be handled here
        nodeOnClick && nodeOnClick.call(this, d);
      });
      link.on('click', function() {
        // default, highlight connected nodes
        connectedNodes.call(this);
      });
    }

    return this;

  }

  _filterNewElements(canvasObjects, d3Element) {
    let newElements = [];
    canvasObjects.forEach(o => {
      let data = d3Element.find(d => d.id === o.id);
      if (data) {
        let tmp = Object.assign({}, o);
        delete tmp.source; delete tmp.target; delete tmp.x; delete tmp.y; // ignore these
        newElements.push(Object.assign(data, tmp));
      } else {
        newElements.push(o);
      }
    });
    return newElements;
  }

  unrender() {}

}
