import {Components} from '../../component/factory';
import {Decorators} from '../../decorator/factory';
import {GlobalConfiguration} from '../../util/configuration';
import {Logger} from '../../util/logger';
import Modal from './base';

/**
 * Implements The About Modal Window.
 *
 * This component shows information about this app.
 *
 * @extends {Modal}
 */
export default class AboutModal extends Modal {

  /**
   * Base constructor
   *
   * @typedef {Object} options
   * @property {String} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   * @property {Object} context - the context of the application, usually a configuration and a rendering manager instance
   */
  constructor({appendTo, callbackHandler}, context) {
    super({appendTo: appendTo, callbackHandler: callbackHandler}, context);
  }

  @Decorators.Initializer.initialize()
  @Decorators.Data.requires('canvas')
  async render() {
    let modalId = 'AboutModalWindow';

    Logger.debug(`(${this.context.instanceId}) Creating About Modal [${modalId}]...`);

    this.element = this.holder.append('div')
      .attr('id', modalId)
      .attr('class', 'francy-modal');

    let form = this.element.append('form');

    this._buildHeader(form, `About Francy v${VERSION}`);

    let content = form.append('div').attr('class', 'francy-modal-content')
      .append('div').attr('class', 'francy-table')
      .append('div').attr('class', 'francy-table-body')
      .style('text-align', 'center');

    content.append('span').text(FRANCY_DESC);
    content.append('br');
    content.append('br');
    content.append('span').append('a').attr('href', 'https://github.com/gap-packages/francy').attr('target', '_blank').text('Francy on Github');
    content.append('br');
    content.append('br');

    if (this.data.version !== VERSION) {
      content.append('span').text(`Data was generated in Francy GAP v${this.data.version} and you're using Francy JS v${VERSION}... Rendering may fail, please update your system...`);
      content.append('br');
      content.append('br');
    }

    if (GlobalConfiguration.object.verbose) {
      content.append('span').text('Loaded Data:');
      content.append('pre').attr('class', 'francy').style('text-align', 'left').html(Decorators.Highlight.syntax(JSON.stringify(this.data, null, 2)));
    }

    content.append('div').text('Verbose').append('div').append('input')
      .attr('type', 'checkbox')
      .attr('required', null)
      .attr('value', GlobalConfiguration.object.verbose)
      .attr('name', 'Verbose')
      .property('checked', GlobalConfiguration.object.verbose)
      .on('change', function (e) {
        GlobalConfiguration.object.verbose = this.value = this.checked = !GlobalConfiguration.object.verbose;
      })
      .on('input', this.onchange)
      .on('keyup', this.onchange)
      .on('paste', this.onchange);

    let footer = form.append('div').attr('class', 'francy-modal-footer');

    footer.append('button').text('Ok').on('click', (e) => {
      e.preventDefault();
      this.unrender.call(this);
    });

    // disable keyboard shortcuts when using this modal in Jupyter
    if (Components.Jupyter.isAvailable) {
      Decorators.Jupyter.registerKeyboardEvents(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);
    }

    Logger.debug(`(${this.context.instanceId}) Modal About updated [${modalId}]...`);

    return this;
  }

}
