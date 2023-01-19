import Callback from '../callback';
import ContextMenu from '../menu/context';
import GraphOperations from './operations';
import Renderer from '../renderer';
import Tooltip from '../tooltip';

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
   * @property {String} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   * @property {Object} context - the context of the application, usually a configuration and a rendering manager instance
   */
  constructor({appendTo, callbackHandler}, context) {
    super({appendTo: appendTo, callbackHandler: callbackHandler}, context);
  }

  initialize() {
    this.element = this.parent.select('g.francy-content');
    this.tooltip = new Tooltip(this.options, this.context);
    this.contextMenu = new ContextMenu(this.options, this.context);
    this.callback = new Callback(this.options, this.context);
    this.graphOperations = new GraphOperations(this.options, this.context);
    this.OnEvent = {
      mouseOut: (e) => this.tooltip.unrender(),
      mouseIn: (e, data) => {
        if (data && data.messages) {
          // default, show tooltip
          this.handlePromise(this.tooltip.load({messages: data.messages}).render());
          // ok, this is almost a hack, because this should be rendered on
          // the tooltip itself… but because a tooltip gets only the messages
          // object to render and not the whole `this.data` object, 
          // we can't check for the property canvas.texTypesetting, 
          // hence this:
          this.handlePromise(this.mathTypesetting(this.tooltip.parent.node()));
        }
      },
      doubleClick: (e, data) => this._executeCallback.call(this, this, data, 'dblclick'),
      click: (e, data) => this._executeCallback.call(this, this, data, 'click'),
      contextMenu: (e, data) => {
        // default, build context menu
        this.handlePromise(this.contextMenu.load(data).render());
        // any callbacks will be handled here
        this._executeCallback.call(this, this, data, 'contextmenu');
      }
    };
  }

  _applyEvents(element) {
    if (!element) return;

    let self = this;
    element
      .on('contextmenu', function (e, d) {
        let data = d.data || d;
        self._selectNode.call(this, e, self, data);
        self.OnEvent.contextMenu(e, data);
      })
      .on('click', function (e, d) {
        let data = d.data || d;
        self._selectNode.call(this, e, self, data);
        self.OnEvent.click(e, data);
      })
      .on('dblclick', function (e, d) {
        let data = d.data || d;
        self.OnEvent.doubleClick(e, data);
      })
      .on('mouseover', function (e, d) {
        let data = d.data || d;
        self.OnEvent.mouseIn(e, data);
      })
      .on('mouseout', function (e) {
        self.OnEvent.mouseOut(e);
      });
  }

  _selectNode(e, self, data) {
    if (!e.ctrlKey) {
      self.graphOperations.nodeSelection.clear();
    }
    data.selected = !data.selected;
    d3.select(this).classed('francy-selected', d => d.selected);
  }

  _executeCallback(self, data, event) {
    if (data && data.callbacks) {
      Object.values(data.callbacks).forEach(cb => {
        // execute only the ones that match the event!
        cb.trigger === event && self.handlePromise(self.callback.load({callback: cb}).execute());
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

    let element;
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

  _getYPosition(element) {
    let bound = element.getBBox();
    return Math.floor(bound.height / 2);
  }

  setLabelXPosition(element, width) {
    try {
      element.attr('x', -Math.ceil(width / 2));
    } catch (Error) {
      // don't care, this might fail for multiple reasons,
      // the user might have switch renderer for instance,
      // no worries if something is not properly aligned :P
    }
  }

  setLabelYPosition(element, height) {
    try {
      element.attr('y', -Math.ceil(height / 2));
    } catch (Error) {
      // don't care, this might fail for multiple reasons,
      // the user might have switch renderer for instance,
      // no worries if something is not properly aligned :P
    }
  }

  handleTypesetting(text) {
    if (text.text().startsWith('$') && text.text().endsWith('$')) {
      // we need to set the position after re-render the latex
      this.handlePromise(this.mathTypesetting(text.node()));
      let foreignObject = d3.select(text.node().parentElement).append('foreignObject');
      foreignObject.node().appendChild(text.select('mjx-container').node());
      let mathExpr = foreignObject.select('mjx-math').node()
      this.setLabelXPosition(foreignObject, mathExpr.clientWidth);
      this.setLabelYPosition(foreignObject, mathExpr.clientHeight);
      text.remove();
    }
  }

}
