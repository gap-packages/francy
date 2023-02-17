import {CompositeRenderer, Decorators, Logger, Message} from 'francy-core';
import MainMenu from './menu-main';

/**
 * The {Frame} is the highest component containing the building block of {Francy} .
 * This renderers the {MainMenu}, {Messages} and the active {Renderer} {Canvas}
 *
 * @access private
 */
export default class CanvasFrame extends CompositeRenderer {

  constructor({appendTo, callbackHandler}, context) {
    super({appendTo: appendTo, callbackHandler: callbackHandler}, context);
    let Renderer = this.context.renderingManager.activeRenderer();
    this.mainMenu = new MainMenu(this.options, this.context);
    this.messages = new Message(this.options, this.context);
    this.canvas = new Renderer(this.options, this.context);
  }

  get MainMenu() {
    return this.mainMenu;
  }

  @Decorators.Data.requires('canvas')
  async render() {
    const frameId = `Frame-${this.data.canvas.id}`;
    this.element = d3.select(`div#${frameId}`);

    // check if the canvas is already present
    if (!this.element.node()) {
      // create a svg element detached from the DOM!
      Logger.debug(`(${this.context.instanceId}) Creating Frame [${frameId}]...`);
      this.element = this.parent.append('div').classed('francy', true).attr('id', frameId);
    }

    // cannot continue if canvas is not present
    if (!this.element.node()) {
      throw new Error(`Oops, could not create frame with id [${frameId}]... Cannot proceed.`);
    }

    this.element.style('height', +this.data.canvas.height + 37); // plus menu height

    Logger.debug(`(${this.context.instanceId}) Frame updated [${frameId}]...`);

    if (this.data.canvas.renderer) {
      // if the user specifies the renderer on GAP,
      //   then we do not allow the user to change it on the client by deleting all the other registered renderers
      let renderer = this.data.canvas.renderer.split('.');
      Logger.debug(`Switching to renderer configured on GAP: ${renderer[0]}`);
      this.context.renderingManager.unregisterAllExcept(renderer[0]);
      this.context.renderingManager.enable(renderer[0]);
      // FIXME I don't like this, but didn't find a better way to set the engine - only graphviz has engines
      if (renderer.length > 0 && renderer[0].toLowerCase().includes('Graphviz'.toLowerCase())) {
        Logger.debug(`Renderer Graphviz with Engine: ${renderer[1]}`)
        this.context.configuration.object.graphvizEngine = renderer[1];
      }
      let Renderer = this.context.renderingManager.activeRenderer();
      this.canvas = new Renderer(this.options, this.context);
    }

    this.removeChildren().addChild(this.mainMenu).addChild(this.messages).addChild(this.canvas);
    this.handlePromise(this.renderChildren());

    return this;
  }

}
