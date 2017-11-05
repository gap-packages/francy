import Logger from '../util/logger';

export default class Modal {

  constructor(config, { verbose = false, callbackHandler }) {
    this.options = {
      verbose: verbose,
      callbackHandler: callbackHandler
    };
    this.logger = new Logger({ verbose: verbose });
    this.config = config;
  }

  show() {
    var self = this;
    if ($(`#${self.config.id}`).length) {
      $(`#${self.config.id}`).show();
      return;
    }
    $('<div>', {
      id: self.config.id,
      title: 'Required Arguments',
      class: 'requiredArgs'
    }).appendTo('body');

    for (var arg of Object.values(self.config.requiredArgs)) {
      $('<label>', {
        for: arg.id
      }).text(arg.title).appendTo(`#${self.config.id}`);
      $('<input>', {
        id: arg.id,
        name: arg.id,
        type: arg.type,
        value: arg.value,
        change: function() {
          self.config.requiredArgs[this.id].value = this.value;
        },
        input: this.change,
        keyup: this.change,
        paste: this.change
      }).appendTo(`#${self.config.id}`);
      $('<br/>').appendTo(`#${self.config.id}`);
    }

    $(`#${self.config.id}`).dialog({
      resizable: false,
      close: function(event, ui) {
        self.logger.debug(`Closing modal for callback [${self.config.id}]...`);
        return $(this).dialog('destroy').remove();
      },
      buttons: {
        Ok: function() {
          // FIXME requires validation!
          self.options.callbackHandler(self.config);
          $(this).dialog("close");
        },
        Cancel: function() {
          $(this).dialog("close");
        }
      }
    });
  }
}
