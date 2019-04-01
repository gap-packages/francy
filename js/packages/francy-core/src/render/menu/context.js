import { Decorators } from '../../decorator/factory';
import Menu from './base';

/* global d3 */


/**
 * Implements a Context Menu.
 * 
 * This component shows a Context Menu on right click.
 * 
 * @extends {Menu}
 */
export default class ContextMenu extends Menu {

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   * @param {Object} context - the context of the application, usually a configuration and a rendering manager instance
   */
  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
  }

  @Decorators.Data.requires('menus')
  async render() {

    d3.event.preventDefault();

    this.element = this.HTMLParent.select('div.francy-context-menu-holder');
    // check if the menu holder is already present
    if (!this.element.node()) {
      this.element = this.HTMLParent.append('div')
        .attr('class', 'francy-context-menu-holder');
    }

    let position = d3.mouse(this.SVGParent.node());

    this.element.style('left', position[0] + 5 + 'px').style('top', position[1] + 5 + 'px');

    // show the context menu
    this.element.style('display', 'block');

    // check if it exists already
    if (this.element.selectAll('*').node()) return;

    // destroy menu
    d3.select('body').on('click.francy-context-menu', () => this.unrender());

    // this gets executed when a contextmenu event occurs
    let menu = this.element.append('div').attr('class', 'francy-context-menu').append('ul');
    let menusIterator = this.iterator(Object.values(this.data.menus));
    this.traverse(menu, menusIterator);

    return this;
  }

  unrender() {
    if (this.element) {
      this.element.selectAll('*').remove();
      this.element.style('display', null);
    }
  }
}
