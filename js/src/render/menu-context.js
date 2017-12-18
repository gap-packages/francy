import Menu from './menu';

/* global d3 */

export default class ContextMenu extends Menu {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    this.contextMenu = this.HTMLParent.select('div.francy-context-menu-holder');
    // check if the window is already present
    if (!this.contextMenu.node()) {
      this.contextMenu = this.HTMLParent.append('div')
        .attr('class', 'francy-context-menu-holder');
    }
  }

  render(object) {

    d3.event.preventDefault();

    // just ignore rendering if no menus are present
    if (!object.menus || !Object.values(object.menus).length) {
      this.logger.debug('No ContextMenu to render here... continuing...');
      return;
    }

    var pos = d3.mouse(this.SVGParent.node());

    this.contextMenu
      .transition()
      .duration(1000)
      .style('left', pos[0] + 5 + 'px').style('top', pos[1] + 5 + 'px');

    // show the context menu
    this.contextMenu.style('display', 'block');

    // check if it exists already
    if (this.contextMenu.selectAll('*').node()) {
      return;
    }

    // destroy menu
    d3.select('body').on('click.francy-context-menu', () => this.unrender());

    // this gets executed when a contextmenu event occurs
    var menu = this.contextMenu.append('div').attr('class', 'francy-context-menu').append('ul');
    var menusIterator = this.iterator(Object.values(object.menus));
    this.traverse(menu, menusIterator);

    return this.contextMenu;
  }

  unrender() {
    this.contextMenu.selectAll('*').remove();
    this.contextMenu.style('display', null);
  }
}
