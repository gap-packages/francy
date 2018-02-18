import Renderer from './renderer';
import ContextMenu from './menu-context';
import Tooltip from './tooltip';
import Callback from './callback';

/* global d3 */

export default class Graph extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }
  
  _initialize() {
    this.element = this.parent.select('g.francy-content');
  }

  _applyEvents(element) {
    if (!element) return;

    let tooltip = new Tooltip(this.options);
    let contextMenu = new ContextMenu(this.options);
    let callback = new Callback(this.options);

    element
      .on('contextmenu', function(d) {
        d = d.data || d;
        // default, build context menu
        contextMenu.load(d, true).render();
        // any callbacks will be handled here
        executeCallback.call(this, d, 'contextmenu');
      })
      .on('click', function(d) {
        d = d.data || d;
        // any callbacks will be handled here
        executeCallback.call(this, d, 'click');
      })
      .on('dblclick', function(d) {
        d = d.data || d;
        // any callbacks will be handled here
        executeCallback.call(this, d, 'dblclick');
      })
      .on('mouseenter', d => {
        d = d.data || d;
        // default, show tooltip
        tooltip.load(d.messages, true).render();
      })
      .on('mouseleave', () => {
        // default, hide tooltip
        tooltip.unrender();
      });

    function executeCallback(data, event) {
      if (data.callbacks) {
        Object.values(data.callbacks).forEach((cb) => {
          // execute the ones that match the event!
          cb.trigger === event && callback.load({ callback: cb }, true).execute();
        });
      }
    }
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

}
