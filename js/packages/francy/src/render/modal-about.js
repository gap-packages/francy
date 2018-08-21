import { Logger, Configuration, Components, Decorators, Modal } from 'francy-core';

/* global VERSION, FRANCY_DESC */

export default class AboutModal extends Modal {

  constructor({ appendTo }) {
    super({ appendTo: appendTo });
  }

  @Decorators.Initializer.initialize()
  @Decorators.Data.requires('canvas')
  async render() {

    let modalId = 'AboutModalWindow';

    Logger.debug(`Creating About Modal [${modalId}]...`);

    this.element = this.holder.append('div')
      .attr('id', modalId)
      .attr('class', 'francy-modal');

    let form = this.element.append('form');
    
    this._buildHeader(form, `About Francy v${VERSION}`);

    let content = form.append('div').attr('class', 'francy-modal-content')
      .append('div').attr('class', 'francy-table')
      .append('div').attr('class', 'francy-table-body').style('text-align', 'center');

    content.append('span').text(FRANCY_DESC);
    content.append('br');
    content.append('br');
    content.append('span').append('a').attr('href', 'https://github.com/mcmartins/francy').text('Francy on Github');
    
    if (Configuration.object.verbose) {
      content.append('span').text('Loaded Data:');
      content.append('pre').attr('class', 'francy').html(Decorators.Highlight.syntax(JSON.stringify(this.data.canvas, null, 2)));
    }

    let footer = form.append('div').attr('class', 'francy-modal-footer');

    footer.append('button').text('Ok').on('click', () => { 
      d3.event.preventDefault(); 
      this.unrender.call(this); 
    });

    // disable keyboard shortcuts when using this modal in Jupyter
    if (Components.Jupyter.isAvailable) {
      Decorators.Jupyter.registerKeyboardEvents(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);
    }

    Logger.debug(`Modal About updated [${modalId}]...`);

    return this;
  }

}
