import { CompositeRenderer, Decorators, Logger } from 'francy-core';
import MainMenu from './menu-main';
import Message from './message';

/* global d3 */

/**
 * The {Frame} is the highest component containing the building block of {Francy} .
 * This renderers the {MainMenu}, {Messages} and the active {Renderer} {Canvas}
 *
 * @access private
 */
export default class Frame extends CompositeRenderer {

  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
    let Renderer = this.context.renderingManager.activeRenderer();
    this.mainMenu = new MainMenu(this.options, this.context);
    this.messages = new Message(this.options, this.context);
    this.canvas = new Renderer(this.options, this.context);
  }

  @Decorators.Data.requires('canvas')
  async render() {
    const frameId = `Frame-${this.data.canvas.id}`;
    this.element = d3.select(`div#${frameId}`);
    // check if the canvas is already present
    if (!this.element.node()) {
      // create a svg element detached from the DOM!
      Logger.debug(`(${this.context.instanceId}) Creating Frame [${frameId}]...`);
      this.element = this.parent.append('div').attr('class', 'francy').attr('id', frameId);
    }

    // cannot continue if canvas is not present
    if (!this.element.node()) {
      throw new Error(`Oops, could not create frame with id [${frameId}]... Cannot proceed.`);
    }

    this.element.style('height', +this.data.canvas.height + 37); // plus menu height

    Logger.debug(`(${this.context.instanceId}) Frame updated [${frameId}]...`);
    
    this.removeChildren();
    this.addChild(this.mainMenu).addChild(this.messages).addChild(this.canvas);
    this.handlePromise(this.renderChildren());

    return this;
  }

  get MainMenu() {
    return this.mainMenu;
  }

}
