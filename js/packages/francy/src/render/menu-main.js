import {Logger, Configuration, Menu, RenderingManager, RENDERING_EVENTS, AboutModal} from 'francy-core';
import * as SvgToPng from 'save-svg-as-png';

/* global d3, Francy */

export default class MainMenu extends Menu {

  constructor({appendTo, callbackHandler}) {
    super({appendTo: appendTo, callbackHandler: callbackHandler});
    this.aboutModal = new AboutModal(this.options);
  }

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
    let entry = this.element.append('li').attr('class', 'francy-entry');
    entry.append('a').html('Francy');
    entry.append('ul');

    this._buildDefaultMenu();

    entry = this.element.append('li').attr('class', 'options-entry');
    entry.append('a').html('Options');
    entry.append('ul');

    this._buildOptionsMenu();

    // Traverse all menus and flatten them!
    let menusIterator = this.iterator(Object.values(this.data.canvas.menus));
    this.traverse(this.element, menusIterator);

    Logger.debug(`Main Menu updated [${menuId}]...`);

    return this;
  }

  _buildDefaultMenu() {
    let content = this.element.select('.francy-entry>ul');
    content.append('li').append('a').on('click', () => this.options.appendTo.canvas.zoomToFit(true)).attr('title', 'Zoom to Fit').html('Zoom to Fit');
    content.append('li').append('a').on('click', () => SvgToPng.saveSvgAsPng(this.SVGParent.node(), 'diagram.png')).attr('title', 'Save to PNG').html('Save to PNG');
    content.append('li').append('a').on('click', () => this.handlePromise(this.aboutModal.load(this.data).render())).attr('title', 'About').html('About');
  }

  _buildOptionsMenu() {
    let self = this;
    let entry = this.element.select('.options-entry>ul').append('li').attr('id', 'renderers-entry');
    entry.append('a').html('Renderers');
    let content = entry.append('ul');

    function insertEntry(renderer) {
      content.append('li').append('a').attr('id', renderer.id)
        .on('click', () => {
          RenderingManager.enable(renderer.name);
        })
        .attr('title', renderer.name).html(`${renderer.enable ? '&#9745' : '&#9744'} ${renderer.name}`)
        .each(function () {
          RenderingManager.subscribe(RENDERING_EVENTS.UNREGISTER, () => d3.select(d3.select(this).node().parentElement).remove());
        });
    }

    Object.values(RenderingManager.allRenderers()).forEach(o => insertEntry(o));
    RenderingManager.subscribe(RENDERING_EVENTS.REGISTER, o => insertEntry(o));
    RenderingManager.subscribe(RENDERING_EVENTS.STATUS, o => {
      this.element.select(`#${o.id}`).html(`${o.enable ? '&#9745' : '&#9744'} ${o.name}`);
      if (o.enable) {
        // remove previous rendered canvas
        d3.select(`#Canvas-${self.data.canvas.id}`).remove();
        // re-render
        setTimeout(() => this.handlePromise(Francy.load(this.data).render()), 10);
      }
    });
    
    // add separator
    entry.append('hr');
    
    this.addEntryOnOptionsMenu({
      id: 'verbose-entry',
      title: `${Configuration.object.verbose ? '&#9745' : '&#9744'} Verbose`,
      onClickCallback: function() {
        Configuration.object.verbose = !Configuration.object.verbose;
      },
      onEachCallback: function() {
        Configuration.subscribe('verbose', value => {
          d3.select(this).html(`${value ? '&#9745' : '&#9744'} Verbose`);
        });
      }
    });
  }

  addEntryOnOptionsMenu({id, title, onClickCallback, onEachCallback, withSeparator}) {
    let entry = this.element.select('.options-entry>ul').data([{id: id, title: title}]);
    entry = entry.append('li').attr('id', d => d.id);
    onClickCallback = onClickCallback || function() {};
    onEachCallback = onEachCallback || function() {};
    entry.append('a').html(d => d.title)
      .on('click', onClickCallback)
      .each(onEachCallback);
    if (withSeparator) {
      // add separator
      entry.append('hr');
    }
    return entry;
  }

  addEntryOnFrancyMenu({id, title, onClickCallback, onEachCallback, withSeparator}) {
    let entry = this.element.select('.francy-entry>ul').data([{id: id, title: title}]);
    entry = entry.append('li').attr('id', d => d.id);
    onClickCallback = onClickCallback || function() {};
    onEachCallback = onEachCallback || function() {};
    entry.append('a').html(d => d.title)
      .on('click', onClickCallback)
      .each(onEachCallback);
    if (withSeparator) {
      // add separator
      entry.append('hr');
    }
    return entry;
  }
  
  addEntryOnMenu({id, title, onClickCallback, onEachCallback}) {
    let entry = this.element.data([{id: id, title: title}]);
    entry = entry.append('li').attr('id', d => d.id);
    onClickCallback = onClickCallback || function() {};
    onEachCallback = onEachCallback || function() {};
    entry.append('a').html(d => d.title)
      .on('click', onClickCallback)
      .each(onEachCallback);
    return entry;
  }
  
  removeMenuEntry(id) {
    this.element.select(`#${id}`).remove();
  }

}
