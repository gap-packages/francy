import Renderer from './renderer';
import Callback from './callback';
import IDUtils from '../util/id-utils';

/* global d3 */

export default class Menu extends Renderer {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  render(json) {
    var parent = this.options.appendTo;

    var menuId = IDUtils.getMenuId(json.canvas.id);
    var menu = parent.select(`#${menuId}`);

    // check if the menu is already present
    if (!menu.node()) {
      // create a div element detached from the DOM!
      this.logger.debug(`Creating Menu [${menuId}]...`);
      menu = parent.append('ul')
        .attr('class', 'nav').attr('id', menuId);
    }

    // force rebuild menu again
    menu.selectAll("*").remove();

    var entry = menu.append('li');
    entry.append('a').attr('href', '#').html('Francy');
    var content = entry.append('ul');
    content.append('li').append('a').attr('href', '#').on("click", () => console.log("Save to PNG pressed... Not Implemented!")).attr('title', 'Save to PNG').html('Save to PNG');
    content.append('li').append('a').attr('href', '#').on("click", () => console.log("About Francy pressed... Not Implemented!")).attr('title', 'About').html('About');

    // FIXME the menu depth is 'infinite', but this implementations supports only depth = 1!
    for (let menuItem of Object.values(json.canvas.menus)) {
      var callback = new Callback(this.options);
      entry = menu.append('li');
      if (menuItem.menus && Object.values(menuItem.menus).length > 0) {
        entry.append('a').attr('href', '#').html(menuItem.title);
        content = entry.append('ul');
        entry = content.append('li');
        for (let submenu of Object.values(menuItem.menus)) {
          callback = new Callback(this.options);
          entry.append('a').attr('href', '#').on("click", () => callback.execute(submenu)).attr('title', submenu.title).html(submenu.title);
        }
      }
      else {
        entry.append('a').attr('href', '#').on("click", () => callback.execute(menuItem)).attr('title', menuItem.title).html(menuItem.title);
      }
    }

    this.logger.debug(`Menu ready: ${menu}`);

    return menu;
  }
}
