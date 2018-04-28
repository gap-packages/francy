import Composite from './composite';
import Canvas from './canvas';
import MainMenu from './menu-main';
import Message from './message';
import { requires } from '../util/data-decorator';

/* global d3 */

export default class Frame extends Composite {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    this.canvas = new Canvas(this.options);
    this.menu = new MainMenu(this.options);
    this.messages = new Message(this.options);
    this.add(this.menu).add(this.canvas).add(this.messages);
  }

  @requires('canvas')
  async render() {
    let parent = this.options.appendTo;

    const frameId = `Frame-${this.data.canvas.id}`;
    this.element = d3.select(`div#${frameId}`);
    // check if the canvas is already present
    if (!this.element.node()) {
      // create a svg element detached from the DOM!
      this.logger.debug(`Creating Frame [${frameId}]...`);
      this.element = parent.append('div').attr('class', 'francy').attr('id', frameId);
    }

    // cannot continue if canvas is not present
    if (!this.element.node()) {
      throw new Error(`Oops, could not create frame with id [${frameId}]... Cannot proceed.`);
    }

    this.logger.debug(`Frame updated [${frameId}]...`);

    await this.handlePromise(this.renderChildren());

    return this;
  }

  unrender() {}

}
