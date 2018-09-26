import { Logger, CompositeRenderer, Decorators, RenderingManager } from 'francy-core';
import MainMenu from './menu-main';
import Message from './message';

/* global d3 */

export default class Frame extends CompositeRenderer {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
    let Renderer = RenderingManager.activeRenderer();
    this.mainMenu = new MainMenu(this.options);
    this.messages = new Message(this.options);
    this.canvas = new Renderer(this.options);
    this.add(this.mainMenu).add(this.messages).add(this.canvas);
  }

  @Decorators.Data.requires('canvas')
  async render() {
    const frameId = `Frame-${this.data.canvas.id}`;
    this.element = d3.select(`div#${frameId}`);
    // check if the canvas is already present
    if (!this.element.node()) {
      // create a svg element detached from the DOM!
      Logger.debug(`Creating Frame [${frameId}]...`);
      this.element = this.parent.append('div').attr('class', 'francy').attr('id', frameId);
    }

    // cannot continue if canvas is not present
    if (!this.element.node()) {
      throw new Error(`Oops, could not create frame with id [${frameId}]... Cannot proceed.`);
    }

    this.element.style('height', +this.data.canvas.height + 37); // plus menu height

    Logger.debug(`Frame updated [${frameId}]...`);

    this.handlePromise(this.renderChildren());

    return this;
  }

  get MainMenu() {
    return this.mainMenu;
  }

}
