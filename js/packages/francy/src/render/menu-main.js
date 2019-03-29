import { Logger, Menu, RENDERING_EVENTS, AboutModal, Utilities } from 'francy-core';
import * as SvgToPng from 'save-svg-as-png';

/* global d3 */

/**
 * The {MainMenu} holds the default options for the current Graphics.
 *
 * @access private
 */
export default class MainMenu extends Menu {

  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
    this.aboutModal = new AboutModal(this.options, this.context);
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
    entry.append('a').attr('title', 'francy').html('francy').append('div').classed('francy-menu-arrow-down', true).style('float', 'right');
    entry.append('ul');

    this._buildDefaultMenu();

    entry = this.element.append('li').attr('class', 'settings-entry');
    entry.append('a').attr('title', 'Settings').html('Settings').append('div').classed('francy-menu-arrow-down', true).style('float', 'right');
    entry.append('ul');

    this._buildSettingsMenu();

    // Traverse all menus and flatten them!
    let menusIterator = this.iterator(Object.values(this.data.canvas.menus));
    this.traverse(this.element, menusIterator);

    Logger.debug(`Main Menu updated [${menuId}]...`);

    return this;
  }

  _buildDefaultMenu() {
    let self = this;
    this._addEntryOnFrancyMenu({
      id: 'zoom-entry',
      title: 'Zoom to Fit',
      onClickCallback: function () {
        self.options.appendTo.canvas.zoomToFit(true);
      }
    });
    this._addEntryOnFrancyMenu({
      id: 'save-entry',
      title: 'Save to PNG',
      onClickCallback: function () {
        let name = self.data.canvas.title 
          ? Utilities.sanitize(self.data.canvas.title, '_') + '.png' 
          : 'diagram.png';
        SvgToPng.saveSvgAsPng(self.SVGParent.node(), name);
      }
    });
    this._addEntryOnFrancyMenu({
      id: 'about-entry',
      title: 'About',
      onClickCallback: function () {
        self.handlePromise(self.aboutModal.load(self.data).render());
      }
    });
  }

  _buildSettingsMenu() {
    let self = this;

    function insertEntry(o) {
      self.addMultiMenuOnSettingsMenu({
        menuId: 'renderers-entry',
        menuTitle: 'Renderers',
        entryId: o.id,
        entryTitle: `${o.enable ? '&#9745' : '&#9744'} ${o.name}`,
        entryOnClickCallback: function () {
          self.context.renderingManager.enable(o.name);
        },
        entryOnEachCallback: function () {
          let unregisterId = `renderer-${o.name}-unregister-${self.data.canvas.id}`;
          self.context.renderingManager.subscribe(RENDERING_EVENTS.UNREGISTER, onUnregister, unregisterId);
        }
      });

      function onUnregister() {
        d3.select(d3.select(this).node().parentElement).remove();
      }
    }

    let registerId = `renderers-register-${self.data.canvas.id}`;
    self.context.renderingManager.subscribe(RENDERING_EVENTS.REGISTER, insertEntry, registerId);

    let reRenderId = `renderer-rerender-${self.data.canvas.id}`;
    self.context.renderingManager.subscribe(RENDERING_EVENTS.STATUS, reRender, reRenderId);

    function reRender(o) {
      var canvas = d3.select(`#Canvas-${self.data.canvas.id}`);
      if (canvas.node()) {
        self.element.select(`.${o.id}`).html(`${o.enable ? '&#9745' : '&#9744'} ${o.name}`);
        if (o.enable) {
          // remove previous rendered canvas
          self.parent.select(`#Canvas-${self.data.canvas.id}>g`).selectAll('*').remove();
          // re-render
          setTimeout(() => {
            let Renderer = self.context.renderingManager.activeRenderer();
            self.options.appendTo.data = self.options.appendTo.canvas.data;
            self.options.appendTo.canvas = new Renderer(self.options, self.context);
            self.handlePromise(self.options.appendTo.render());
          }, 100);
        }
      } else {
        Logger.info(`The Canvas ${self.data.canvas.id} seems to have disapeared... removing events associated to it`);
        self.context.renderingManager.unsubscribe(RENDERING_EVENTS.STATUS, reRender, reRenderId);
        self.context.renderingManager.unsubscribe(RENDERING_EVENTS.REGISTER, insertEntry, registerId);
      }
    }

    Object.values(self.context.renderingManager.allRenderers()).forEach(insertEntry);
  }

  addEntryOnSettingsMenu({ id, title, onClickCallback, onEachCallback, withSeparator }) {
    let entry = this.element.select('.settings-entry>ul').data([{ id: id, title: title }]);
    entry = entry.append('li').attr('class', d => d.id);
    onClickCallback = onClickCallback || function () {};
    onEachCallback = onEachCallback || function () {};
    entry.append('a').attr('title', d => d.title).html(d => d.title)
      .on('click', onClickCallback)
      .each(onEachCallback);
    if (withSeparator) {
      // add separator
      entry.append('hr');
    }
    return entry;
  }

  addMultiMenuOnSettingsMenu({ menuId, menuTitle, entryId, entryTitle, entryOnClickCallback, entryOnEachCallback }) {
    let entry = this.element.select(`.settings-entry>ul>li.${menuId}`);
    if (!entry.node()) {
      entry = this.element.select('.settings-entry>ul').append('li').attr('class', menuId);
      entry.append('a').text(menuTitle).append('div').classed('francy-menu-arrow-right', true).style('float', 'right');
    }

    let content = entry.select('ul');
    if (!content.node()) {
      content = entry.append('ul');
    }

    entryOnClickCallback = entryOnClickCallback || function () {};
    entryOnEachCallback = entryOnEachCallback || function () {};

    function insertEntry({ entryId, entryTitle, entryOnClickCallback, entryOnEachCallback }) {
      let entryMenu = content.select(`li>a.${entryId}`);
      if (!entryMenu.node()) {
        entryMenu = content.append('li').append('a').attr('class', entryId);
      }
      entryMenu.html(entryTitle)
        .on('click', entryOnClickCallback)
        .each(entryOnEachCallback);
    }

    insertEntry({ entryId, entryTitle, entryOnClickCallback, entryOnEachCallback });
  }

  _addEntryOnFrancyMenu({ id, title, onClickCallback, onEachCallback, withSeparator }) {
    let entry = this.element.select('.francy-entry>ul').data([{ id: id, title: title }]);
    entry = entry.append('li').attr('class', d => d.id);
    onClickCallback = onClickCallback || function () {};
    onEachCallback = onEachCallback || function () {};
    entry.append('a').html(d => d.title)
      .on('click', onClickCallback)
      .each(onEachCallback);
    if (withSeparator) {
      // add separator
      entry.append('hr');
    }
    return entry;
  }

  addEntryOnMenu({ id, title, onClickCallback, onEachCallback }) {
    let entry = this.element.data([{ id: id, title: title }]);
    entry = entry.append('li').attr('class', d => d.id);
    onClickCallback = onClickCallback || function () {};
    onEachCallback = onEachCallback || function () {};
    entry.append('a').html(d => d.title)
      .on('click', onClickCallback)
      .each(onEachCallback);
    return entry;
  }

  removeMenuEntry(id) {
    this.element.select(`.${id}`).remove();
  }

}
