import Menu from './menu';

/* global d3 */

export default class ContextMenu extends Menu {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    this.contextMenu = this.SVGParent.select('foreignObject.francy-context-menu-holder');
    // check if the window is already present
    if (!this.contextMenu.node()) {
      this.contextMenu = this.SVGParent.append('foreignObject')
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

    this.contextMenu
      .transition()
      .duration(1000)
      .attr('transform', `translate(${d3.event.offsetX + 5},${d3.event.offsetY + 5})`);

    // show the context menu
    this.contextMenu.style('display', 'block');

    // check if it exists already
    if (this.contextMenu.selectAll('*').node()) {
      return;
    }

    // destroy menu
    d3.select('body').on('click.francy-context-menu', () => this.unrender());

    // this gets executed when a contextmenu event occurs
    var menu = this.contextMenu.append('xhtml:div').append('div').attr('class', 'francy-context-menu').append('ul');
    var menusIterator = this.iterator(Object.values(object.menus));
    this.traverse(menu, menusIterator);

    return this.contextMenu;
  }

  unrender() {
    this.contextMenu.selectAll('*').remove();
    this.contextMenu.style('display', null);
  }
}
