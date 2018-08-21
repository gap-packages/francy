import {Logger, Configuration, Menu} from 'francy-core';
//import GraphOperations from '../graph/graph-operations';
import AboutModal from './modal-about';
import * as SvgToPng from 'save-svg-as-png';
import {RenderingManager, EVENTS} from '../../../francy-core/src/render/rendering-manager';

/* global d3, Francy */

export default class MainMenu extends Menu {

  constructor({appendTo, callbackHandler}) {
    super({appendTo: appendTo, callbackHandler: callbackHandler});
  }

  // TODO this: https://stackoverflow.com/questions/9100344/pure-css-multi-level-drop-down-menu
  async render() {
    // Otherwise clashes with the canvas itself!
    const menuId = `MainMenu-${this.data.canvas.id}`;
    this.element = d3.select(`#${menuId}`);

    // Check if the menu is already present
    if (!this.element.node()) {
      // create a div element detached from the DOM!
      Logger.debug(`Creating Main Menu [${menuId}]...`);
      this.element = this.parent.append('div').attr('class', 'francy-main-menu-holder').attr('id', menuId);
    }

    // Force rebuild menu again
    this.element.selectAll('*').remove();

    this.element = this.element.append('ul').attr('class', 'francy-main-menu');

    // Fixed loader
    let loaderId = `Loader-${this.data.canvas.id}`;
    this.element.append('li').attr('class', 'francy-loader').append('a').datum({}).attr('id', loaderId).classed('loader', true);

    // Title
    if (this.data.canvas.title) {
      this.element.append('li').attr('class', 'francy-title').append('a').html(this.data.canvas.title);
    }

    // create default menu entry
    let entry = this.element.append('li').attr('class', 'francy-menu');
    entry.append('a').html('Francy');
    entry.append('ul');

    this._buildRenderersMenu();
    this._buildDefaultMenu();

    if (this.data.canvas.graph) {
      this._buildGraphMenu();
    }

    // Traverse all menus and flatten them!
    let menusIterator = this.iterator(Object.values(this.data.canvas.menus));
    this.traverse(this.element, menusIterator);

    Logger.debug(`Main Menu updated [${menuId}]...`);

    return this;
  }

  _buildDefaultMenu() {
    let aboutModal = new AboutModal(this.options);
    let content = this.element.select('.francy-menu>ul');
    content.append('li').append('a').on('click', () => this.options.appendTo.canvas.zoomToFit(true)).attr('title', 'Zoom to Fit').html('Zoom to Fit');
    content.append('li').append('a').on('click', () => SvgToPng.saveSvgAsPng(this.SVGParent.node(), 'diagram.png')).attr('title', 'Save to PNG').html('Save to PNG');
    content.append('li').append('a').on('click', () => this.handlePromise(aboutModal.load(this.data).render())).attr('title', 'About').html('About');
  }

  _buildRenderersMenu() {
    let entry = this.element.select('.francy-menu>ul').append('li');
    entry.append('a').html('Renderers');
    let content = entry.append('ul');

    function insertEntry(renderer) {
      content.append('li').append('a').attr('id', renderer.id)
        .on('click', () => {
          RenderingManager.enable(renderer.name);
          Configuration.object.activeRenderer = renderer.name;
        })
        .attr('title', renderer.name).html(`${renderer.enable ? '&#9745' : '&#9744'} ${renderer.name}`)
        .each(function () {
          RenderingManager.subscribe(EVENTS.UNREGISTER, () => d3.select(d3.select(this).node().parentElement).remove());
        });
    }

    Object.values(RenderingManager.allRenderers()).forEach(o => insertEntry(o));
    RenderingManager.subscribe(EVENTS.REGISTER, o => insertEntry(o));
    RenderingManager.subscribe(EVENTS.STATUS, o => {
      this.element.select(`#${o.id}`).html(`${o.enable ? '&#9745' : '&#9744'} ${o.name}`);
      this.handlePromise(Francy.load(this.data).render());
    });
  }

  _buildGraphMenu() {
    let entry2 = this.element.append('li');
    entry2.append('a').html('Graph Options');
    let content2 = entry2.append('ul');
    content2.append('li').append('a')
      .attr('title', 'Neighbours').html(`${Configuration.object.showNeighbours ? '&#9745' : '&#9744'} Show Neighbours`)
      .on('click', () => {
        Configuration.object.showNeighbours = !Configuration.object.showNeighbours;
      })
      .each(function () {
        Configuration.subscribe('showNeighbours', value => {
          d3.select(this).html(`${value ? '&#9745' : '&#9744'} Show Neighbours`);
        });
      });
    content2.append('li').append('a')
      .attr('title', 'Drag').html(`${Configuration.object.dragNodes ? '&#9745' : '&#9744'} Drag Nodes`)
      .on('click', () => {
        Configuration.object.dragNodes = !Configuration.object.dragNodes;
      })
      .each(function () {
        Configuration.subscribe('dragNodes', value => {
          d3.select(this).html(`${value ? '&#9745' : '&#9744'} Drag Nodes`);
        });
      });
    /*let operations = new GraphOperations(this.options);
    content2.append('li').append('a')
      .attr('title', 'Selection').html('Clear Selected Nodes')
      .on('click', () => operations.nodeSelection.clear());*/
  }

  unrender() {
  }

}
