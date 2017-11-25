import Menu from './menu';
import IDUtils from '../util/id-utils';

/* global d3 */

export default class MainMenu extends Menu {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render(json) {
    var parent = this.options.appendTo;

    var menuId = IDUtils.getMenuId(json.canvas.id);
    var menu = d3.select(`#${menuId}`);

    // check if the menu is already present
    if (!menu.node()) {
      // create a div element detached from the DOM!
      this.logger.debug(`Creating Main Menu [${menuId}]...`);
      menu = parent.append('ul')
        .attr('class', 'main-menu').attr('id', menuId);
    }

    // force rebuild menu again
    menu.selectAll('*').remove();

    if (json.canvas.title) {
      menu.append('li').attr('class', 'title').append('a').html(json.canvas.title);
    }

    var entry = menu.append('li');
    entry.append('a').html('Francy');
    var content = entry.append('ul');
    content.append('li').append('a').on('click', () => this.logger.info('Save to PNG pressed... Not Implemented!')).attr('title', 'Save to PNG').html('Save to PNG');
    content.append('li').append('a').on('click', () => this.logger.info('About Francy pressed... Not Implemented!')).attr('title', 'About').html('About');

    // Traverse all menus and flatten them!
    var menusIterator = this.iterator(Object.values(json.canvas.menus));
    this.traverse(menu, menusIterator);

    this.logger.debug(`Main Menu updated [${menuId}]...`);

    return menu;
  }

}
