// Jupyter Extension to allow Francy Graphics to be produced in the browser

define([
  'require',
  'base/js/namespace',
  'notebook/js/outputarea',
  'nbextensions/francy/lib/d3.v4.min',
  'nbextensions/francy/amd/francy.bundle',
], function(require, Jupyter, outputHandler, d3, FrancyBundle) {
  "use strict";

  var MIME_TYPE = 'application/vnd.francy+json';
  var CLASS_NAME = 'francy-view';

  var self = this;

  window.d3 = d3;

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

      // `this` is the output area we are appending to
      var append_mime = function(json, md, element) {
        var toinsert = this.create_output_subarea(md, CLASS_NAME, MIME_TYPE);
        francy.handle(json);
        element.append(toinsert);
        return toinsert;
      };

      // Register mime type with the output area
      outputHandler.OutputArea.prototype.register_mime_type(MIME_TYPE, append_mime, {
        // An output widget could contain arbitrary user javascript
        safe: false,
        // Index of renderer in `output_area.display_order`
        index: 0
      });


      // FIXME Cannot write on dialog as it will assume as keyboard shortcut!
      Jupyter.keyboard_manager.command_shortcuts._shortcuts = {};

      let francy = new FrancyBundle.Francy({
        verbose: true,
        callbackHandler: function(msg) {
          trigger.call(self, msg);
        }
      });

      //outputHandler.OutputArea.prototype._handle_output = outputHandler.OutputArea.prototype.handle_output;

      function trigger(json) {
        Jupyter.notebook.kernel.execute(`Trigger(${JSON.stringify(JSON.stringify(json))});`); //, { iopub: { output: outputHandler.OutputArea.prototype.handle_output } }, {});
      }

      //outputHandler.OutputArea.prototype.handle_output = function(msg) {
      //  if (msg.content && msg.content.data && msg.content.data['application/vnd.francy+json']) {
      // FIXME this should return an html object to include in the cell
      //    francy.handle(msg.content.data['application/vnd.francy+json']);
      //    return;
      //  }
      //  return this._handle_output(msg);
      //};
    }
  };

});
