import IDUtils from '../util/id-utils';
import MenuUtils from './menu';
import Logger from '../util/logger';

export default class AbstractCanvas {

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

  constructor({ verbose = false, appendTo, callbackHandler }) {
    this.options = {
      verbose: verbose,
      appendTo: appendTo,
      callbackHandler: callbackHandler
    };
    this.logger = new Logger({ verbose: verbose });
  }

  _renderCanvas(json) {
    if (!json) {
      throw new Error('JSON object to render is empty!');
    }
    let self = this;
    // build the dialog window
    self.windowId = IDUtils.getWindowId(json.canvas.id);
    self.window = d3.select(`#${self.windowId}`);
    // check if the window is already present
    if (!self.window.node()) {
      self.logger.debug(`Creating Window [${self.windowId}]...`);
      $('<div>', {
        id: self.windowId,
        title: json.canvas.title,
        class: 'window'
      }).appendTo(this.options.appendTo);
      // update element
      self.window = d3.select(`#${self.windowId}`);
    }
    // cannot continue if window is not present
    if (!self.window.node()) {
      throw new Error(`Oops, could not create window with id ${self.windowId}... Cannot proceed.`);
    }
    // this will force the dialog to open
    //$(`#${self.windowId}`).dialog({
    //  close: function(event, ui) {
    //    self.logger.debug(`Closing window [${self.windowId}]...`);
    //    return $(this).dialog('destroy').remove();
    //  }
    //});
    self.logger.debug(`Creating Window Menus [${self.windowId}]...`);

    // build menu
    new MenuUtils(json, { version: this.options.verbose, appendTo: self.window.node(), callbackHandler: this.options.callbackHandler });
    $('<br/>').appendTo(`#${self.windowId}`);

    // build canvas
    self.canvasId = IDUtils.getCanvasId(json.canvas.id);
    self.canvas = d3.select(`svg#${self.canvasId}`);
    if (!self.canvas.node()) {
      self.logger.debug(`Creating Canvas [${self.canvasId}]...`);
      self.canvas = d3.select(`div#${self.windowId}`).append('svg')
        .attr('id', self.canvasId).attr('class', 'canvas');
    }
    // cannot continue if canvas is not present
    if (!self.canvas.node()) {
      throw new Error(`Oops, could not create canvas with id ${self.canvasId}... Cannot proceed.`);
    }
    // update if needed
    self.canvas
      .attr('width', json.canvas.w)
      .attr('height', json.canvas.h);
  }

}
