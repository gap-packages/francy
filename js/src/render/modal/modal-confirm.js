import Modal from './modal';
import { Components } from '../../component/factory';
import { Decorators } from '../../decorator/factory';

/* global d3 */

export default class ConfirmModal extends Modal {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @Decorators.Initializer.initialize()
  async render() {
    let modalId = this.data.callback.id;

    this.logger.debug(`Creating Confirm Modal [${modalId}]...`);

    this.element = this.holder.append('div')
      .attr('id', modalId)
      .attr('class', 'francy-modal');

    let form = this.element.append('form');
    
    this._buildHeader(form, 'Confirm');

    let content = form.append('div').attr('class', 'francy-modal-content')
      .append('div').attr('class', 'francy-table')
      .append('div').attr('class', 'francy-table-body');

    let row = content.append('div').attr('class', 'francy-table-row');
    row.append('div').attr('class', 'francy-table-cell').append('label');
    row.append('div').attr('class', 'francy-table-cell').append('span').attr('id', `Confirm-${this.data.callback.id}`).text(this.data.callback.confirm);

    this._buildFooter(form);

    // disable keyboard shortcuts when using this modal in Jupyter
    if (Components.Jupyter.isAvailable) {
      Decorators.Jupyter.registerKeyboardEvents(['.francy', '.francy-overlay', '.francy-modal']);
    }

    this.logger.debug(`Confirm Modal updated [${modalId}]...`);

    return this;
  }

}
