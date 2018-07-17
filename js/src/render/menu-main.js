import Menu from './menu';
import AboutModal from './modal-about';
import { Configuration } from '../util/configuration';
import * as SvgToPng from '../../node_modules/save-svg-as-png/saveSvgAsPng';

/* global d3 window */

export default class MainMenu extends Menu {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
  }

  async render() {
    let aboutModal = new AboutModal(this.options);
    let self = this;

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

    // Fixed loader
    let loaderId = `Loader-${this.data.canvas.id}`;
    this.element.append('li').attr('class', 'francy-loader').append('a').datum({}).attr('id', loaderId).classed('loader', true);

    // Title
    if (this.data.canvas.title) {
      this.element.append('li').attr('class', 'francy-title').append('a').html(this.data.canvas.title);
    }

    // Default menu
    let entry = this.element.append('li');
    entry.append('a').html('Francy');
    let content = entry.append('ul');
    content.append('li').append('a').on('click', () => this.options.appendTo.canvas.zoomToFit(true)).attr('title', 'Zoom to Fit').html('Zoom to Fit');
    content.append('li').append('a').on('click', () => SvgToPng.saveSvgAsPng(this.SVGParent.node(), 'diagram.png')).attr('title', 'Save to PNG').html('Save to PNG');
    content.append('li').append('a').on('click', () => this.handlePromise(aboutModal.load(this.data).render())).attr('title', 'About').html('About');
    
    if (this.data.canvas.graph) {
      let entry2 = this.element.append('li');
      entry2.append('a').html('Graph Options');
      let content2 = content = entry2.append('ul');
      content2.append('li').append('a')
        .attr('title', 'Neighbours').html(`${Configuration.object.showNeighbours ? 'Disable' : 'Enable'} Show Neighbours`)
        .on('click', function() {
          Configuration.object.showNeighbours = !Configuration.object.showNeighbours;
        })
        .each(function() {
          Configuration.subscribe('showNeighbours', value => {
            d3.select(this).html(`${value ? 'Disable' : 'Enable'} Show Neighbours`);
          });
        });
      content2.append('li').append('a')
        .attr('title', 'Drag').html(`${Configuration.object.dragNodes ? 'Disable' : 'Enable'} Drag Nodes`)
        .on('click', function() {
          Configuration.object.dragNodes = !Configuration.object.dragNodes;
        })
        .each(function() {
          Configuration.subscribe('dragNodes', value => {
            d3.select(this).html(`${value ? 'Disable' : 'Enable'} Drag Nodes`);
          });
        });
      content2.append('li').append('a')
        .attr('title', 'Selection').html('Clear Selected Nodes')
        .on('click', function() {
          setTimeout(() => {
            d3.select(`svg#Canvas-${self.data.canvas.id}`).selectAll('.francy-node.francy-selected').each(function(){
              delete d3.select(this).data()[0].selected;
            }).classed('francy-selected', d => d.selected);
          }, 0);
        });
      /*content2.append('li').append('a')
      .attr('title', 'Simulation').html(`${Configuration.object.simulation ? 'Disable' : 'Enable'} Simulation`)
      .on('click', function() {
        Configuration.object.simulation = !Configuration.object.simulation;
      })
      .each(function() {
        Configuration.subscribe('simulation', value => {
          d3.select(this).html(`${value ? 'Disable' : 'Enable'} Simulation`);
        });
      });*/
    }

    // Traverse all menus and flatten them!
    let menusIterator = this.iterator(Object.values(this.data.canvas.menus));
    this.traverse(this.element, menusIterator);

    this.logger.debug(`Main Menu updated [${menuId}]...`);

    return this;
  }

  unrender() {}

}
