import {Callback, ContextMenu, Decorators, Graph, Tooltip, Utilities} from 'francy-core';
import DOTLanguageConverterHelper from '../util/dot-converter';

export default class GraphGeneric extends Graph {

  constructor({appendTo, callbackHandler}, context) {
    super({appendTo: appendTo, callbackHandler: callbackHandler}, context);
    this.callback = new Callback(this.options, this.context);
    this.tooltip = new Tooltip(this.options, this.context);
    this.contextMenu = new ContextMenu(this.options, this.context);
  }

  @Decorators.Data.requires('canvas.graph')
  @Decorators.Initializer.initialize()
  async render() {
    var self = this,
      loader = Decorators.Loader.withContext(this).show(),
      dot = new DOTLanguageConverterHelper(this.context).load(this.data).convert(),
      canvasNodes = this.data.canvas.graph.nodes ? JSON.parse(JSON.stringify(Object.values(this.data.canvas.graph.nodes))) : [],
      canvasLinks = this.data.canvas.graph.links ? JSON.parse(JSON.stringify(Object.values(this.data.canvas.graph.links))) : [];

    self.parent
      .graphviz()
      .logEvents(false)
      .fade(true)
      .engine(self.context.configuration.object.graphvizEngine)
      .keyMode('id')
      .dot(dot)
      .render(function () {
        self.parentClass.element = this._selection.selectWithoutDataPropagation('svg');
        self.parentClass.element.attr('width', '100%').attr('height', self.data.canvas.height)
          .attr('viewBox', undefined)
          .attr('id', `Canvas-${self.data.canvas.id}`)
          .classed('francy-canvas', true);

        self.options.appendTo.zoom = this.zoomBehavior();

        self.element = self.parentClass.element.selectWithoutDataPropagation('g');
        self.element.classed('francy-content', true);
        self.element.selectAll('title').remove();
        self.element.selectWithoutDataPropagation('polygon').remove();
        self.element.append('g').classed('francy-nodes', true);
        self.element.append('g').classed('francy-links', true);

        let nodesGroup = self.element.select('g.francy-nodes');
        self.element.selectAll('.node').remove().each(function (d) {
          Object.assign(d, self.data.canvas.graph.nodes[d.key]);
          nodesGroup.node().appendChild(d3.select(this)
            .classed('node', false)
            .classed('francy-node', true)
            .classed('francy-highlight', true)
            .classed('francy-selected', d => d.selected).node());
        });

        let linksGroup = self.element.select('g.francy-links');
        self.element.selectAll('.edge').remove().each(function (d) {
          Object.assign(d, self.data.canvas.graph.links[d.key]);
          linksGroup.node().appendChild(d3.select(this)
            .classed('edge', false)
            .classed('francy-link', true)
            .style('stroke-width', d => d.invisible ? 0 : Math.sqrt(d.weight || 0.2)).node());
        });

        let nodes = self.element.selectAll('.francy-node');
        let links = self.element.selectAll('.francy-link');

        nodes.selectAll('text')
          .classed('francy-label', true)
          .attr('text-align', 'middle')
          .attr('x', function handleText() {
            // apply mathTypesetting if this is the case
            self.handleTypesetting(d3.select(this));
            return d3.select(this).datum().attributes.x;
          });

        self._applyEvents(nodes);

        let connectedNodes = self._connectedNodes(nodes, canvasNodes, links, canvasLinks);
        let nodeOnClick = nodes.on('click');
        nodes.on('click', function (e, d) {
          // default, highlight connected nodes
          connectedNodes.call(this, e);
          // any callbacks will be handled here
          nodeOnClick && nodeOnClick.call(this, e, d);
        });
        links.on('click', function (e) {
          // default, highlight connected nodes
          connectedNodes.call(this, e);
        });

        self.parentClass.zoomToFit(true);
        loader.hide();
      })
      .onerror(function () {
        loader.hide();
      });
  }

  setLabelXPosition(element, x) {
    /* eslint-disable no-unused-vars */
    try {
      element.attr('x', Math.ceil(x * 2));
    } catch (Error) {
      // don't care, this might fail for multiple reasons,
      // the user might have switch renderer for instance,
      // no worries if something is not properly aligned :P
    }
    /* eslint-enable no-unused-vars */
  }

  setLabelYPosition(element, y) {
    /* eslint-disable no-unused-vars */
    try {
      element.attr('y', -Math.ceil(y * 2));
    } catch (Error) {
      // don't care, this might fail for multiple reasons,
      // the user might have switch renderer for instance,
      // no worries if something is not properly aligned :P
    }
    /* eslint-enable no-unused-vars */
  }

  _connectedNodes(node, canvasNodes, link, canvasLinks) {
    let self = this;
    //Toggle stores whether the highlighting is on
    let toggle = false;

    //Create an array logging what is connected to what
    let linkedByIndex = {};

    canvasLinks.forEach(function (d) {
      let sourceId = Utilities.isObject(d.source) ? d.source.id : d.source;
      let targetId = Utilities.isObject(d.target) ? d.target.id : d.target;
      linkedByIndex[`${sourceId},${sourceId}`] = true;
      linkedByIndex[`${targetId},${sourceId}`] = true;
      linkedByIndex[`${sourceId},${targetId}`] = true;
    });

    function connected(e) {
      if (!self.context.configuration.object.showNeighbours) return;
      let el = d3.select(this);
      if (!toggle) {
        //Reduce the opacity of all but the neighbouring nodes
        let d = el.datum();
        if (el.attr('class').includes('francy-node')) {
          node.style('opacity', o => linkedByIndex[`${d.id},${o.id}`] || linkedByIndex[`${o.id},${d.id}`] ? 1 : 0.1);
          link.style('opacity', function (o) {
            let localTargetId = Utilities.isObject(o.target) ? o.target.id : o.target;
            let localSourceId = Utilities.isObject(o.source) ? o.source.id : o.source;
            let opacity = d.id === localSourceId || d.id === localTargetId ? 1 : 0.1;
            d3.select(this).on('mouseleave', undefined).select('text').style('opacity', opacity);
            return opacity;
          });
        } else if (el.attr('class').includes('francy-link')) {
          let sourceId = Utilities.isObject(d.source) ? d.source.id : d.source;
          let targetId = Utilities.isObject(d.target) ? d.target.id : d.target;
          node.style('opacity', o => sourceId === o.id || targetId === o.id ? 1 : 0.1);
          link.style('opacity', function (o) {
            let localTargetId = Utilities.isObject(o.target) ? o.target.id : o.target;
            let localSourceId = Utilities.isObject(o.source) ? o.source.id : o.source;
            let opacity = sourceId === localSourceId && targetId === localTargetId ? 1 : 0.1;
            d3.select(this).on('mouseleave', undefined).select('text').style('opacity', opacity);
            return opacity;
          });
        }
        setTimeout(() => {
          d3.select('body').on('click', (e) => toggle ? connected.call(this, e) : undefined);
        }, 0);
        //Reduce the op
        toggle = true;
      } else {
        //Put them back to opacity 1
        node.style('opacity', 1);
        link.style('opacity', function () {
          d3.select(this).select('text').style('opacity', 0.1);
          return 1;
        });
        self.graphOperations.labelsOpacityBehavior(link);
        d3.select('body').on('click', undefined);
        toggle = false;
      }
      if (e) {
        e.preventDefault();
      }
    }

    return connected;
  }

}
