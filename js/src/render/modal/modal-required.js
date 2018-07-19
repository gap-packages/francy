import Modal from './modal';
import { Components } from '../../component/factory';
import { Decorators } from '../../decorator/factory';

/* global d3 */

export default class RequiredArgsModal extends Modal {

  constructor({ appendTo, callbackHandler }) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler });
  }

  @Decorators.Initializer.initialize()
  async render() {
    let modalId = this.data.callback.id;

    this.logger.debug(`Creating Callback Modal [${modalId}]...`);

    this.element = this.holder.append('div')
      .attr('id', modalId)
      .attr('class', 'francy-modal');

    let form = this.element.append('form');

    this._buildHeader(form, 'Required arguments&nbsp;');

    this._buildContent(form);

    this._buildFooter(form);

    // disable keyboard shortcuts when using this modal in Jupyter
    if (Components.Jupyter.isAvailable) {
      Decorators.Jupyter.registerKeyboardEvents(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);
    }

    let inputElement = form.selectAll('.francy-arg').node();
    if (inputElement) {
      inputElement.focus();
    }

    this.logger.debug(`Callback Modal updated [${modalId}]...`);

    return this;
  }

  _buildContent(form) {
    let self = this;
    
    let content = form.append('div').attr('class', 'francy-modal-content')
      .append('div').attr('class', 'francy-table')
      .append('div').attr('class', 'francy-table-body');

    for (let arg of Object.values(this.data.callback.requiredArgs)) {
      let row = content.append('div').attr('class', 'francy-table-row');
      row.append('div').attr('class', 'francy-table-cell').append('label')
        .attr('for', arg.id).text(arg.title);
      if (arg.type === 'select') {
        row.append('div').attr('class', 'francy-table-cell').append('select')
          .attr('class', 'francy-arg')
          .attr('id', arg.id)
          .attr('required', '')
          .attr('name', arg.id)
          .attr('disabled', '')
          .attr('multiple', '')
          .data(this.data.selectedNodes).append('option')
          .attr('value', d => d)
          .html(d => d);
        self.data.callback.requiredArgs[arg.id].value = this.data.selectedNodes;
      } else {
        let input = row.append('div').attr('class', 'francy-table-cell').append('input')
          .attr('class', 'francy-arg')
          .attr('id', arg.id)
          .attr('required', '')
          .attr('name', arg.id)
          .attr('type', arg.type)
          .attr('value', arg.value)
          .on('change', function () {
            self.data.callback.requiredArgs[this.id].value = this.value;
          })
          .on('input', this.onchange)
          .on('keyup', this.onchange)
          .on('paste', this.onchange);
        // wait, if it is boolean we create a checkbox
        if (arg.type === 'boolean') {
        // well, a checkbox works this way so we need to initialize 
        // the value to false and update the value based on the checked 
        // property that triggers the onchange event
          arg.value = arg.value || false;
          input.attr('type', 'checkbox')
            .attr('required', null)
            .attr('value', arg.value)
            .on('change', function() {
              self.data.callback.requiredArgs[this.id].value = this.value = this.checked; 
            });
        }
      }
      row.append('span').attr('class', 'validity');
    }
  }

}
