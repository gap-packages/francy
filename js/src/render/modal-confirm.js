import Modal from './modal';
import { Decorators } from '../decorator/factory';

/* global d3 */

export default class ConfirmModal extends Modal {

  constructor({ verbose = false, appendTo, callbackHandler }) {
    super({ verbose: verbose, appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @Decorators.Initializer.initialize()
  async render() {
    let modalId = this.data.callback.id;

    this.logger.debug(`Creating Confirm Modal [${modalId}]...`);

    this.element = this.holder.append('div')
      .attr('id', modalId)
      .attr('class', 'francy-modal');

    let form = this.element.append('form');

    let header = form.append('div').attr('class', 'francy-modal-header');
    header.append('span').attr('style', 'font-weight: bold;').html('Confirm');
    
    let content = form.append('div').attr('class', 'francy-modal-content').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');
    let row = content.append('div').attr('class', 'francy-table-row');
    row.append('div').attr('class', 'francy-table-cell').append('label');
    row.append('div').attr('class', 'francy-table-cell').append('span').attr('id', `Confirm-${this.data.callback.id}`).text(this.data.callback.confirm);

    let footer = form.append('div').attr('class', 'francy-modal-footer');
    footer.append('button').text('Ok')
      .on('click', () => {
        if (form.node().checkValidity()) {
          d3.event.preventDefault();
          this.options.callbackHandler(this.data.callback);
          this.unrender.call(this);
        }
        return false;
      });
    footer.append('button').text('Cancel')
      .on('click', () => { 
        d3.event.preventDefault(); 
        this.unrender.call(this); 
      });

    // disable keyboard shortcuts when using this modal in Jupyter
    Decorators.Jupyter.registerKeyboardEvents(['.francy', '.francy-overlay', '.francy-modal']);

    this.logger.debug(`Confirm Modal updated [${modalId}]...`);

    return this;
  }
}
