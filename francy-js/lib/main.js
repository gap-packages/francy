// Jupyter Extension to allow Francy Graphics to be produced in the browser

define([
  'base/js/namespace',
  'nbextensions/francy-js/lib/francy',
  'nbextensions/francy-js/vendor/d3'
], function (Jupyter, Francy, D3) {
  "use strict";

  return {
    load_ipython_extension: function () {

      console.log('Loading Francy-JS...');

      Jupyter.notebook.kernel.executeHighjacked = Jupyter.notebook.kernel.execute;

      Jupyter.notebook.kernel.execute = function (command, callbacks, options) {
        callbacks.iopub.outputHighjacked = callbacks.iopub.output;

        callbacks.iopub.output = function (msg) {
          callbacks.iopub.outputHighjacked(msg);
          if (msg.content && msg.content.text) {
            Francy.draw(msg.content.text)
          }
        }

        this.executeHighjacked(command, callbacks, options);
      }

    }
  };

});
