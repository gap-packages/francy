import Menu from './menu';
import AboutModal from './modal-about';
import * as SvgToPng from '../../node_modules/save-svg-as-png/saveSvgAsPng';

/* global d3 window */

export default class MainMenu extends Menu {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render(json) {
    var parent = this.options.appendTo;

    var aboutModal = new AboutModal(this.options);

    // Otherwise clashes with the canvas itself!
    var menuId = `M${json.canvas.id}`;
    var menu = d3.select(`#${menuId}`);

    // Check if the menu is already present
    if (!menu.node()) {
      // create a div element detached from the DOM!
      this.logger.debug(`Creating Main Menu [${menuId}]...`);
      menu = parent.append('div').attr('class', 'francy-main-menu-holder').attr('id', menuId);
    }

    // Force rebuild menu again
    menu.selectAll('*').remove();

    menu = menu.append('ul').attr('class', 'francy-main-menu');

    if (json.canvas.title) {
      menu.append('li').attr('class', 'francy-title').append('a').html(json.canvas.title);
    }

    var entry = menu.append('li');
    entry.append('a').html('Francy');
    var content = entry.append('ul');
    if (json.canvas.zoomToFit) {
      content.append('li').append('a').on('click', () => parent.canvas.zoomToFit()).attr('title', 'Zoom to Fit').html('Zoom to Fit');
    }
    content.append('li').append('a').on('click', () => SvgToPng.saveSvgAsPng(document.getElementById(json.canvas.id), "diagram.png")).attr('title', 'Save to PNG').html('Save to PNG');
    content.append('li').append('a').on('click', () => aboutModal.render(json)).attr('title', 'About').html('About');

    // Traverse all menus and flatten them!
    var menusIterator = this.iterator(Object.values(json.canvas.menus));
    this.traverse(menu, menusIterator);

    this.logger.debug(`Main Menu updated [${menuId}]...`);

    return menu;
  }

  unrender() {}

}
