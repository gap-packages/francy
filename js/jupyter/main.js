// Jupyter Extension to allow Francy Graphics to be produced in the browser

define([
  'require',
  'base/js/namespace',
  'notebook/js/outputarea',
  'nbextensions/francy/lib/d3.min',
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

      console.log('Starting loading Module Francy Javascript...');

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

      /* Get all cells in notebook */
      Jupyter.notebook.get_cells().forEach(cell => {
        /* If a cell has output data of 'application/vnd.dataresource+json' mime type */
        if (
          cell.output_area &&
          cell.output_area.outputs.find(
            output => output.data && output.data[MIME_TYPE]
          )
        ) {
          /* Re-render the cell */
          Jupyter.notebook.render_cell_output(cell);
        }
      });

      // create a 'display: none;' div for drawing
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
                  // This will update the existing canvas!
                  francy.render(msg.content.data['application/vnd.francy+json']);
                  return;
                }
              }
            }
          }, {});
        }
      });

      console.log('Finished loading Module Francy Javascript.');
    }
  };

});
