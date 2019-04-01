import { Components } from '../../component/factory';
import { Decorators } from '../../decorator/factory';
import GraphOperations from '../graph/operations';
import { Logger } from '../../util/logger';
import Modal from './base';

/**
 * Implements a Required Arguments Modal window.
 * 
 * The modal window takes a callback and based on the callback configuration will
 * create the input fields required and display them to the user.
 * 
 * @extends {Modal}
 */
export default class RequiredArgsModal extends Modal {

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   * @param {Object} context - the context of the application, usually a configuration and a rendering manager instance
   */
  constructor({ appendTo, callbackHandler }, context) {
    super({ appendTo: appendTo, callbackHandler: callbackHandler }, context);
    /**
     * Stores the element
     * @type {object}
     */
    this.element = undefined;
  }

  /**
   * This method is used to render this component
   * 
   * @public
   */
  @Decorators.Initializer.initialize()
  async render() {
    let modalId = this.data.callback.id;

    Logger.debug(`(${this.context.instanceId}) Creating Callback Modal [${modalId}]...`);

    this.element = this.holder.append('div')
      .attr('id', modalId)
      .attr('class', 'francy-modal');

    let form = this.element.append('form');

    this._buildHeader(form);

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

    Logger.debug(`(${this.context.instanceId}) Callback Modal updated [${modalId}]...`);

    return this;
  }

  /**
   * Utility method to handle content build
   * 
   * @private
   */
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
        let operations = new GraphOperations(this.options);
        let selectedNodes = Object.values(operations.nodeSelection.getAll());
        row.append('div').attr('class', 'francy-table-cell').append('select')
          .attr('class', 'francy-arg')
          .attr('id', arg.id)
          .attr('required', '')
          .attr('name', arg.id)
          .attr('disabled', '')
          .attr('multiple', '')
          .data(selectedNodes).append('option')
          .attr('value', d => d)
          .html(d => d);
        self.data.callback.requiredArgs[arg.id].value = selectedNodes;
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
            .on('change', function () {
              self.data.callback.requiredArgs[this.id].value = this.value = this.checked;
            });
        }
      }
      row.append('span').attr('class', 'validity');
    }
  }

}
