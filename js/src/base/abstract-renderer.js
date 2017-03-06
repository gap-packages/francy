import ModelTracker from './tracker';
import IDUtils from './../util/id-utils';

/**
 * This class contains the basics for the creation of an SVG object using d3 and modal window using jquery ui.
 * It handles the window and canvas creation.
 */
export default class AbstractRenderer {
  /**
   * This class is abstract an hence cannot be instantiated without being extended and the subclass must implement a {render} method.
   * @param {object} object - the object object.
   * @param verbose
   */
  constructor(object, {verbose = false} = {}) {
    if (new.target === AbstractRenderer) {
      throw new TypeError("Cannot construct Abstract instances directly!");
    }
    if (this.render === undefined || typeof this.render !== "function") {
      // or maybe test typeof this.method === "function"
      throw new TypeError("Must override render method!");
    }
    this._tracker = new ModelTracker(object, {verbose: verbose});
    // initialise the canvas
    this._canvas();
    this.objectId = IDUtils.getObjectId(this.tracker.object.id);
    this.object = d3.select(`#${this.objectId}`);
    // render the object
    this.render();
  }

  /**
   * This method handles the canvas creation if needed.
   */
  _canvas() {
    this.windowId = IDUtils.getWindowId(this.tracker.object.canvas.id);
    this.window = d3.select(`#${this.windowId}`);
    // check if the window is already present
    if (!this.window.node()) {
      $('<div>', {
        id: this.windowId,
        title: this.tracker.object.canvas.properties.name,
        width: this.tracker.object.canvas.width,
        height: this.tracker.object.canvas.height
      }).appendTo('body');
      // update element
      this.window = d3.select(`#${this.windowId}`);
    }
    // this will force the dialog to open
    $(`#${this.windowId}`).dialog({
      appendTo: 'body'
    });
    // cannot continue if window is not present
    if (!this.window.node()) {
      throw new Error('Oops, could not create window with id ' + this.windowId);
    }
    this.canvasId = IDUtils.getCanvasId(this.tracker.object.canvas.id);
    this.canvas = d3.select(`svg#${this.canvasId}`);
    if (!this.canvas.node()) {
      this.canvas = d3.select(`div#${this.windowId}`).append('svg')
        .attr('id', this.canvasId);
    }
    // cannot continue if holder is not present
    if (!this.canvas.node()) {
      throw new Error(`Oops, could not create canvas with id ${this.canvasId}... Cannot proceed.`);
    }
    // update if needed
    this.canvas.attr('width', this.tracker.object.canvas.width).attr('height', this.tracker.object.canvas.height)
  }

  /**
   * Returns the ModelTracker
   * @returns {Tracker} the object tracker.
   */
  get tracker() {
    return this._tracker;
  }

}