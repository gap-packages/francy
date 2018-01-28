import Renderer from './renderer';
import TreeGraph from './graph-tree';
import GenericGraph from './graph-generic';
import ContextMenu from './menu-context';
import Tooltip from './tooltip';
import Callback from './callback';
import { requires } from '../decorator/data';

/* global d3 */

export default class Graph extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @requires('canvas.graph')
  render() {

    let element = undefined;
    switch (this.data.canvas.graph.type) {
      case 'tree':
        element = new TreeGraph(this.options).load(this.data).render();
        break;
      default:
        element = new GenericGraph(this.options).load(this.data).render();
    }

    return element;
  }

  unrender() {}

  static applyEvents(element, options) {
    if (!element) return;

    let tooltip = new Tooltip(options);
    let contextMenu = new ContextMenu(options);
    let callback = new Callback(options);

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
    if (type === 'circle') {
      return d3.symbolCircle;
    }
    else if (type === 'cross') {
      return d3.symbolCross;
    }
    else if (type === 'diamond') {
      return d3.symbolDiamond;
    }
    else if (type === 'square') {
      return d3.symbolSquare;
    }
    else if (type === 'triangle') {
      return d3.symbolTriangle;
    }
    else if (type === 'star') {
      return d3.symbolStar;
    }
    else if (type === 'wye') {
      return d3.symbolWye;
    }
    else {
      return d3.symbolCircle;
    }
  }

}
