import JsonUtils from './util/json-utils';
import Frame from './render/frame';

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
   * Main entry point. Calling render passing a json representation string will 
   * trigger the drawing of a json object.
   * @param {String} input a json string/object render
   * @returns {Object} the element created
   */
  render(input) {
    let json = JsonUtils.parse(input);
    if (json) {
      //var tracker = new Tracker(json, this.options);
      //tracker.subscribe(function(obj) { console.log(obj); });
      //return new Draw(this.options).handle(tracker.object);
      var frame = new Frame(this.options);
      var element = frame.render(json);
      ALL_CANVAS[json.canvas.id] = frame.canvas;
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
  };
}
catch (e) {
  exports.Francy = Francy;
}
