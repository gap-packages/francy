// Jupyter Extension to allow Francy Graphics to be produced in the browser

define([
  'require',
  'base/js/namespace',
  'nbextensions/francy/lib/d3.v4.min',
  'nbextensions/francy/amd/francy.bundle',
], function(require, Jupyter, d3, FrancyBundle) {
  "use strict";

  window.d3 = d3;
  // FIXME
  Jupyter.keyboard_manager.command_shortcuts._shortcuts = {};

  function trigger(json) {
    Jupyter.notebook.kernel.execute(`Trigger(${JSON.stringify(JSON.stringify(json))});`, { iopub: { output: output } }, {});
  }

  function output(msg) {
    if (msg.content && msg.content.data && msg.content.data['application/francy+json']) {
      francy.handle(msg.content.data['application/francy+json']);
    }
  }

  let francy = new FrancyBundle.Francy({ verbose: true, callbackHandler: trigger });

  let loadCss = function loadCss(name) {
    let link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = require.toUrl(name);
    document.getElementsByTagName("head")[0].appendChild(link);
  };

  loadCss('./../css/style.css');

  return {
    load_ipython_extension: function() {

      console.log('Loading Francy Javascript...');

      Jupyter.notebook.kernel.executeHighjacked = Jupyter.notebook.kernel.execute;

      Jupyter.notebook.kernel.execute = function(command, callbacks, options) {
        callbacks.iopub.outputHighjacked = callbacks.iopub.output;

        callbacks.iopub.output = function output(msg) {
          callbacks.iopub.outputHighjacked(msg);
          output(msg);
        };

        this.executeHighjacked(command, callbacks, options);
      };
    }
  };

});
