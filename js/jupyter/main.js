// Jupyter Extension to allow Francy Graphics to be produced in the browser

define([
  'base/js/namespace',
  'nbextensions/francy/lib/async',
  'nbextensions/francy/lib/d3.v4',
  'nbextensions/francy/dist/francy.bundle',
], function (Jupyter, async, d3, Francy) {
  "use strict";

  let francy = Francy();

  return {
    load_ipython_extension: function () {

      console.log('Loading Francy-JS...');

      Jupyter.notebook.kernel.executeHighjacked = Jupyter.notebook.kernel.execute;

      Jupyter.notebook.kernel.execute = function (command, callbacks, options) {
        callbacks.iopub.outputHighjacked = callbacks.iopub.output;

        callbacks.iopub.output = function (msg) {
          callbacks.iopub.outputHighjacked(msg);
          if (msg.content && msg.content.text) {
            francy.draw(msg.content.text)
          }
        };

        this.executeHighjacked(command, callbacks, options);
      }

    }
  };

});
