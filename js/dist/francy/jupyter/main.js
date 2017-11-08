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
      let appendMime = function(json, md, element) {
        var francyObject = francy.render(json);
        var toinsert = this.create_output_subarea(md, CLASS_NAME, MIME_TYPE);
        toinsert.append(francyObject);
        element.append(toinsert);
        return toinsert;
      };

      // Register mime type with the output area
      outputHandler.OutputArea.prototype.register_mime_type(MIME_TYPE, appendMime, {
        // An output widget could contain arbitrary user javascript
        safe: false,
        // Index of renderer in `output_area.display_order`
        index: 0
      });

      // FIXME Cannot write on dialog as it will assume as keyboard shortcut!
      ///Jupyter.keyboard_manager.command_shortcuts._shortcuts = {};
      //Jupyter.keyboard_manager.register_events(d3.selectAll('.arg'));

      // create a display: none div for drawing
      d3.select('body').append('div').attr('id', 'francy-drawing-div').attr('style', 'display: none;');

      // start francy
      let francy = new FrancyBundle.Francy({
        verbose: true,
        appendTo: '#francy-drawing-div',
        callbackHandler: function(json) {
          Jupyter.notebook.kernel.execute(`Trigger(${JSON.stringify(JSON.stringify(json))});`, {
            iopub: {
              output: function(msg) {
                if (msg.content && msg.content.data && msg.content.data['application/vnd.francy+json']) {
                  francy.render(msg.content.data['application/vnd.francy+json']);
                  return;
                }
              }
            }
          }, {});
        }
      });
    }
  };

});
