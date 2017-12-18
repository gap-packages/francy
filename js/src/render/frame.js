import Composite from './composite';
import Canvas from './canvas';
import MainMenu from './menu-main';
import Message from './message';

/* global d3 */

export default class Frame extends Composite {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    this.canvas = new Canvas(this.options);
    this.menu = new MainMenu(this.options);
    this.messages = new Message(this.options);
    this.add(this.messages);
    this.add(this.menu);
    this.add(this.canvas);
  }

  render(json) {
    var parent = d3.select(this.options.appendTo);

    var frameId = `F${json.canvas.id}`;
    var frame = d3.select(`div#${frameId}`);
    // check if the canvas is already present
    if (!frame.node()) {
      // create a svg element detached from the DOM!
      this.logger.debug(`Creating Frame [${frameId}]...`);
      frame = parent.append('div').attr('class', 'francy').attr('id', frameId);
    }

    // cannot continue if canvas is not present
    if (!frame.node()) {
      throw new Error(`Oops, could not create frame with id [${frameId}]... Cannot proceed.`);
    }

    this.logger.debug(`Frame updated [${frameId}]...`);

    this.renderChildren(frame, json);

    return frame;
  }

  unrender() {}

}
