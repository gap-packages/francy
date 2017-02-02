// Jupyter Extension to allow Francy Graphics to be produced in the browser

define([
  'base/js/namespace',
  'nbextensions/francy-js/francy',
  'nbextensions/francy-js/vendor/svg',
  'nbextensions/francy-js/vendor/svg.draggy',
  'nbextensions/francy-js/vendor/svg.connectable'
], function (Jupyter, Francy, SVG, SVGDraggy, SVGConnectable) {
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
