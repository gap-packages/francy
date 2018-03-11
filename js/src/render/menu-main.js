import Menu from './menu';
import AboutModal from './modal-about';
import * as SvgToPng from '../../node_modules/save-svg-as-png/saveSvgAsPng';

/* global d3 window */

export default class MainMenu extends Menu {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render() {
    let aboutModal = new AboutModal(this.options);

    // Otherwise clashes with the canvas itself!
    const menuId = `MainMenu-${this.data.canvas.id}`;
    this.element = d3.select(`#${menuId}`);

    // Check if the menu is already present
    if (!this.element.node()) {
      // create a div element detached from the DOM!
      this.logger.debug(`Creating Main Menu [${menuId}]...`);
      this.element = this.parent.append('div').attr('class', 'francy-main-menu-holder').attr('id', menuId);
    }

    // Force rebuild menu again
    this.element.selectAll('*').remove();

    this.element = this.element.append('ul').attr('class', 'francy-main-menu');

    if (this.data.canvas.title) {
      this.element.append('li').attr('class', 'francy-title').append('a').html(this.data.canvas.title);
    }

    let entry = this.element.append('li');
    entry.append('a').html('Francy');
    let content = entry.append('ul');
    content.append('li').append('a').on('click', () => this.options.appendTo.canvas.zoomToFit(true)).attr('title', 'Zoom to Fit').html('Zoom to Fit');
    content.append('li').append('a').on('click', () => SvgToPng.saveSvgAsPng(this.SVGParent.node(), 'diagram.png')).attr('title', 'Save to PNG').html('Save to PNG');
    content.append('li').append('a').on('click', () => aboutModal.load(this.data).render()).attr('title', 'About').html('About');

    // Traverse all menus and flatten them!
    let menusIterator = this.iterator(Object.values(this.data.canvas.menus));
    this.traverse(this.element, menusIterator);

    this.logger.debug(`Main Menu updated [${menuId}]...`);

    return this;
  }

  unrender() {}

}
