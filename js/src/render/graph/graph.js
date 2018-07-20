import Renderer from '../renderer';
import GraphOperations from './graph-operations';
import ContextMenu from '../menu/menu-context';
import Tooltip from '../tooltip';
import Callback from '../callback';

/* global d3 */

export default class Graph extends Renderer {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
    this.tooltip = new Tooltip(this.options);
    this.contextMenu = new ContextMenu(this.options);
    this.callback = new Callback(this.options);
    this.graphOperations = new GraphOperations(this.options);
  }
  
  _initialize() {
    this.element = this.parent.select('g.francy-content');
  }

  _applyEvents(element) {
    if (!element) return;
    
    var self = this;
    element
      .on('contextmenu', function(d) {
        let data = d.data || d;
        self._selectNode.call(this, self, data);
        // default, build context menu
        self.handlePromise(self.contextMenu.load(data, true).render());
        // any callbacks will be handled here
        self._executeCallback.call(this, self, data, 'contextmenu');
      })
      .on('click', function(d) {
        let data = d.data || d;
        self._selectNode.call(this, self, data);
        // any callbacks will be handled here
        self._executeCallback.call(this, self, data, 'click');
      })
      .on('dblclick', function(d) {
        let data = d.data || d;
        // any callbacks will be handled here
        self._executeCallback.call(this, self, data, 'dblclick');
      })
      .on('mouseover', function(d) {
        let data = d.data || d;
        if (data.messages) {
          // default, show tooltip
          self.handlePromise(self.tooltip.load({messages: data.messages}, true).render());
          // ok, this is almost an hack, because this should be rendered on
          // the tooltip itself.. but because a tooltip gets only the messages 
          // object to render and not the whole `this.data` object, 
          // we can't check for the property canvas.texTypesetting, 
          // hence this:
          self.handlePromise(self.mathjax.settings({appendTo: self.tooltip, renderType: 'HTML-CSS'}).render());
        } 
      })
      .on('mouseout', function() {
        // default, hide tooltip
        self.tooltip.unrender();
      });
  }
  
  _selectNode(self, data) {
    if (!d3.event.ctrlKey) {
      self.graphOperations.nodeSelection.clear();
    }
    data.selected = !data.selected;
    d3.select(this).classed('francy-selected', d => d.selected);
  }
  
  _executeCallback(self, data, event) {
    if (data.callbacks) {
      Object.values(data.callbacks).forEach(cb => {
        // execute only the ones that match the event!
        cb.trigger === event && self.handlePromise(self.callback.load({ callback: cb }, true).execute());
      });
    }
  }
  
  static linkXPos(s, t) {
    return Math.cos(Graph.angle(s, t)) + (s.x + t.x)/2;
  }
    
  static linkYPos(s, t) {
    return Math.sin(Graph.angle(s, t)) + (s.y + t.y) / 2;
  }
  
  static angle(s, t) {
    return Math.atan2(t.y - s.y, t.x - s.x);
  }

  static get colors() {
    return d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow);
  }

  static getSymbol(type) {
    
    let element = undefined;
    switch (type) {
    case 'cross':
      element = d3.symbolCross;
      break;
    case 'diamond':
      element = d3.symbolDiamond;
      break;
    case 'square':
      element = d3.symbolSquare;
      break;
    case 'triangle':
      element = d3.symbolTriangle;
      break;
    case 'star':
      element = d3.symbolStar;
      break;
    case 'wye':
      element = d3.symbolWye;
      break;
    case 'circle':
    default:
      element = d3.symbolCircle;
    }

    return element;
  }
  
  setLabelXPosition(element) {
    let bound = element.getBBox();
    return -Math.ceil(bound.width / 2);
  }
  
  setLabelYPosition(element) {
    let bound = element.getBBox();
    return Math.floor(bound.height / 2);
  }

}
