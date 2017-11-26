import Menu from './menu';

/* global d3 */

export default class ContextMenu extends Menu {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
    this.contextMenu = d3.selectAll('div.francy.context-menu');
    // check if the window is already present
    if (!this.contextMenu.node()) {
      this.contextMenu = this.HTMLParent.append('div').attr('class', 'francy context-menu').style('display', 'none');
    }
  }

  render(json) {

    this.contextMenu
      .style('left', (d3.event.pageX - 2) + 'px')
      .style('top', (d3.event.pageY - 2) + 'px');

    // check if it exists already
    if (this.contextMenu.selectAll('*').node()) {
      return;
    }

    // destroy menu
    d3.select('body').on('click.context-menu', () => this.unrender());

    // this gets executed when a contextmenu event occurs
    var menu = this.contextMenu.append('ul');
    var menusIterator = this.iterator(Object.values(json.menus));
    this.traverse(menu, menusIterator);

    // show the context menu
    this.contextMenu.style('display', 'block');

    d3.event.preventDefault();
  }

  unrender() {
    this.contextMenu.selectAll('*').remove();
    this.contextMenu.style('display', 'none');
  }
}
