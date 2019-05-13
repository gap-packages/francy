import Callback from '../callback';
import ContextMenu from '../menu/context';
import GraphOperations from './operations';
import Renderer from '../renderer';
import Tooltip from '../tooltip';

/* global d3 */

/**
 * Implements a Generic Graph.
 * 
 * This component holds utility methods for handling Graph structures.
 * 
 * @extends {Renderer}
 */
export default class Graph extends Renderer {

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   * @param {Object} context - the context of the application, usually a configuration and a rendering manager instance
   */
  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
  }

  initialize() {
    this.element = this.parent.select('g.francy-content');
    this.tooltip = new Tooltip(this.options, this.context);
    this.contextMenu = new ContextMenu(this.options, this.context);
    this.callback = new Callback(this.options, this.context);
    this.graphOperations = new GraphOperations(this.options, this.context);
    this.OnEvent = {
      mouseOut: () => this.tooltip.unrender(),
      mouseIn: (data) => {
        if (data && data.messages) {
          // default, show tooltip
          this.handlePromise(this.tooltip.load({ messages: data.messages }, true).render());
          // ok, this is almost an hack, because this should be rendered on
          // the tooltip itself.. but because a tooltip gets only the messages 
          // object to render and not the whole `this.data` object, 
          // we can't check for the property canvas.texTypesetting, 
          // hence this:
          this.handlePromise(this.mathjax.settings({ appendTo: this.tooltip, renderType: 'HTML-CSS' }).render());
        }
      },
      doubleClick: (data) => this._executeCallback.call(this, this, data, 'dblclick'),
      click: (data) => this._executeCallback.call(this, this, data, 'click'),
      contextMenu: (data) => {
      // default, build context menu
        this.handlePromise(this.contextMenu.load(data, true).render());
        // any callbacks will be handled here
        this._executeCallback.call(this, this, data, 'contextmenu');
      }
    };
  }

  _applyEvents(element) {
    if (!element) return;

    let self = this;
    element
      .on('contextmenu', function (d) {
        let data = d.data || d;
        self._selectNode.call(this, self, data);
        self.OnEvent.contextMenu(data);
      })
      .on('click', function (d) {
        let data = d.data || d;
        self._selectNode.call(this, self, data);
        self.OnEvent.click(data);
      })
      .on('dblclick', function (d) {
        let data = d.data || d;
        self.OnEvent.doubleClick(data);
      })
      .on('mouseover', function (d) {
        let data = d.data || d;
        self.OnEvent.mouseIn(data);
      })
      .on('mouseout', function () {
        self.OnEvent.mouseOut();
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
    if (data && data.callbacks) {
      Object.values(data.callbacks).forEach(cb => {
        // execute only the ones that match the event!
        cb.trigger === event && self.handlePromise(self.callback.load({ callback: cb }, true).execute());
      });
    }
  }

  static linkXPos(s, t) {
    return Math.cos(Graph.angle(s, t)) + (s.x + t.x) / 2;
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

  _getXPosition(element) {
    let bound = element.getBBox();
    return -Math.ceil(bound.width / 2);
  }

  setLabelXPosition(element) {
    try {
      d3.select(element).attr('x', this._getXPosition(element));
    } catch (Error) {
      // don't care, this might fail for multiple reasons
      // the use rmight have switch renderer for instance
      // no worries if something is not properly aligned :P
    } 
  }
  
  _getYPosition(element) {
    let bound = element.getBBox();
    return Math.floor(bound.height / 2);
  }

  setLabelYPosition(element) {
    try {
      d3.select(element).attr('y', this._getYPosition(element));
    } catch (Error) {
      // don't care, this might fail for multiple reasons
      // the use rmight have switch renderer for instance
      // no worries if something is not properly aligned :P
    } 
  }

}
