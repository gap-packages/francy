import IDUtils from '../util/id-utils';
import Composite from './composite';

/* global d3 */

export default class Window extends Composite {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render(json) {
    var windowId = IDUtils.getWindowId(json.canvas.id);
    var window = d3.select(`#${windowId}`);

    // check if the window is already present
    if (!window.node()) {
      // create a div element detached from the DOM!
      this.logger.debug(`Creating Window [${windowId}]...`);
      window = d3.select(this.options.appendTo).append('div') //.remove()
        .attr('id', windowId)
        .attr('class', 'francy window');
    }

    // cannot continue if window is not present
    if (!window.node()) {
      throw new Error(`Oops, could not create window with id [${windowId}]... Cannot proceed.`);
    }

    this.logger.debug(`Window updated [${windowId}]...`);

    this.renderChildren(window, json);

    return window;
  }

}
