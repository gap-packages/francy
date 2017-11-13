import JsonUtils from "./util/json-utils";
import Window from "./render/window";
import Canvas from "./render/canvas";
import Menu from "./render/menu";
import Graph from "./render/graph";
//import Chart from "./render/chart";
//import Tracker from "./tracker/change";

/* global d3 */

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.handle} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 */
export class Francy {

  /**
   * Creates an instance of Francy with the following options:
   * @param verbose prints extra log information to console.log, default false
   * @param appendTo where the generated html/svg components will be attached to, default body
   * @param callbackHandler this handler will be used to invoke actions from the menu, default console.log
   */
  constructor({ verbose = false, appendTo, callbackHandler }) {
    if (!callbackHandler) {
      throw new Error("A Callback Handler must be provided! This will be used to trigger events from the graphics produced...");
    }
    if (!appendTo) {
      throw new Error("Missing an element or id to append the graphics to...!");
    }
    if (!d3) {
      throw new Error('D3 is not imported! Francy won\'t work without it... please import D3 v4+.');
    }
    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
  }

  /**
   * Main entry point. Calling handle passing a json representation string will trigger the drawing of a json object.
   * @param input - a json string/object render
   */
  render(input) {
    let json = JsonUtils.parse(input);
    if (json) {
      //var tracker = new Tracker(json, this.options);
      //tracker.subscribe(function(obj) { console.log(obj); });
      //return new Draw(this.options).handle(tracker.object);
      var menu = new Menu(this.options);
      var graph = new Graph(this.options);
      //var chart = new Chart(this.options);
      var canvas = new Canvas(this.options);
      canvas.add(graph);
      //canvas.add(chart);
      var window = new Window(this.options);
      window.add(menu);
      window.add(canvas);
      var element = window.render(json);
      return element.node();
    }
  }
}

exports.Francy = window.Francy = Francy;
