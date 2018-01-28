// Jupyter Extension to allow Francy Graphics to be produced in the browser

define([
  'require',
  'base/js/namespace',
  'base/js/events',
  'notebook/js/outputarea',
  'nbextensions/francy/lib/d3.min',
  'nbextensions/francy/amd/francy.bundle',
], function(require, Jupyter, events, outputHandler, d3, FrancyBundle) {
  'use strict';

  const MIME_TYPE = 'application/vnd.francy+json';
  const CLASS_NAME = 'francy-view';

  window.d3 = d3;

  let loadCss = function loadCss(name) {
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = require.toUrl(name);
    document.getElementsByTagName('head')[0].appendChild(link);
  };

  loadCss('./../css/style.css');

  // Start Francy
  let Francy = FrancyBundle.settings({
    verbose: true,
    appendTo: '#francy-drawing-div',
    callbackHandler: function(command) {
      Jupyter.notebook.kernel.execute(command, {
        iopub: {
          output: function(msg) {
            if (msg.content && msg.content.data && msg.content.data[MIME_TYPE]) {
              // This will update an existing canvas by its ID!
              Francy.load(msg.content.data[MIME_TYPE]).render();
            }
          }
        }
      }, {});
    }
  });

  // Create a 'display: none;' div for drawing
  d3.select('body').append('div').attr('id', 'francy-drawing-div').attr('style', 'display: none;');

  return {
    load_ipython_extension: function() {

      console.log('Starting loading Module Francy Javascript...');

      // `this` is the output area we are appending to
      let appendMime = function(json, md, element) {
        let francyObject = Francy.load(json).render();
        let toinsert = this.create_output_subarea(md, CLASS_NAME, MIME_TYPE);
        toinsert.append(francyObject);
        element.append(toinsert);
        return toinsert;
      };

      // Register mime type with the output area
      outputHandler.OutputArea.prototype.register_mime_type(MIME_TYPE, appendMime, {
        safe: true, // in order to render the objects on notebook load!
        index: 0
      });

      // Render output application/vnd.francy+json MIME Cells
      Jupyter.notebook.get_cells().forEach(cell => {
        if (cell.output_area && cell.output_area.outputs.find(output => output.data && output.data[MIME_TYPE])) {
          Jupyter.notebook.render_cell_output(cell);
        }
      });

      // Handle when an output is cleared or removed
      let handleClearOutput = function(event, { cell: { output_area } }) {
        const toinsert = output_area.element.find(`.${CLASS_NAME.split(' ')[0]}`);
        if (toinsert[0]) {
          // The svg might be gone to another cell (!?)
          // well, when Draw is invoked for a canvas inside another cell it moves the svg to another output cell!
          let svg = d3.select(toinsert[0]).select('svg');
          let id = svg ? svg.attr('id') : undefined;
          Francy.unrender(id);
        }
      };

      // Handle when an output is cleared or removed
      events.on('clear_output.CodeCell', handleClearOutput);
      events.on('delete.Cell', handleClearOutput);

      console.log('Finished loading Module Francy Javascript.');
    }
  };

});
