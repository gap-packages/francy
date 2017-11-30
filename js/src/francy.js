import JsonUtils from './util/json-utils';
import IDUtils from './util/id-utils';
import Canvas from './render/canvas';
import MainMenu from './render/menu-main';
import Graph from './render/graph';
import Chart from './render/chart';
//import Tracker from './tracker/change';

let ALL_CANVAS = {};

/* global d3 */

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.handle} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 * @access public
 * 
 * @version 0.5.0
 * 
 * @example
 * let francy = new Francy({verbose: true, appendTo: '#div-id', callbackHandler: console.log});
 * francy.render(json);
 */
export default class Francy {

  /**
   * Creates an instance of Francy with the following options:
   * @typedef {Object} Options
   * @property {Boolean} verbose prints extra log information to console.log, default false
   * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
   * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
   */
  constructor({ verbose = false, appendTo, callbackHandler }) {
    if (!callbackHandler) {
      throw new Error('A Callback Handler must be provided! This will be used to trigger events from the graphics produced...');
    }
    if (!appendTo) {
      throw new Error('Missing an element or id to append the graphics to...!');
    }
    if (!d3) {
      throw new Error('D3 is not imported! Francy won\'t work without it... please import D3 v4+.');
    }
    /**
     * @typedef {Object} Options
     * @property {Boolean} verbose prints extra log information to console.log, default false
     * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
     * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
     */
    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
  }

  /**
   * Main entry point. Calling handle passing a json representation string will trigger the drawing of a json object.
   * @param {String} input a json string/object render
   * @returns {Object} the element created
   */
  render(input) {
    let json = JsonUtils.parse(input);
    if (json) {
      //var tracker = new Tracker(json, this.options);
      //tracker.subscribe(function(obj) { console.log(obj); });
      //return new Draw(this.options).handle(tracker.object);
      var canvas = new Canvas(this.options);
      var menu = new MainMenu(this.options);
      var graph = new Graph(this.options);
      var chart = new Chart(this.options);
      canvas.add(menu);
      canvas.add(graph);
      canvas.add(chart);
      var element = canvas.render(json);
      ALL_CANVAS[IDUtils.getCanvasId(json.canvas.id)] = element;
      return element.node();
    }
  }

  unrender(id) {
    delete ALL_CANVAS[id];
  }
}

try {
  exports.Francy = window.Francy = Francy;
  // handle events on resize
  window.onresize = function() {
    // zoom to fit all canvas on resize
    Object.values(ALL_CANVAS).forEach(function(canvas) {
      canvas.zoomToFit();
    });
    // adjust top menu on resize
    d3.selectAll('foreignObject.francy-main-menu-holder').attr('width', '100%');
  };
}
catch (e) {
  exports.Francy = Francy;
}
