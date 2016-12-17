// Allow Francy Graphics to be produced in the browser

define([
  'base/js/namespace',
  'nbextensions/francy-js/francy',
  'nbextensions/francy-js/svg/svg',
  'nbextensions/francy-js/svg/svg.draggy',
  'nbextensions/francy-js/svg/svg.connectable'
], function (Jupyter) {
  "use strict";

  return {
    load_ipython_extension: function () {

      console.log('Loading Francy-JS...');

      Jupyter.notebook.kernel.executeHighjacked = kernel.execute;

      Jupyter.notebook.kernel.execute = function (command, callbacks, options) {
        callbacks.iopub.outputHighjacked = callbacks.iopub.output;
        callbacks.iopub.output = function (msg) {
          callbacks.iopub.outputHighjacked(msg);
          if (msg.content && msg.content.text) {
            var data = msg.content.text.replace(/[\n\r\b\s\\]+/g, '');
            Francy.draw(data)
          }
        }
        this.executeHighjacked(command, callbacks, options);
      }

    }
  };

});