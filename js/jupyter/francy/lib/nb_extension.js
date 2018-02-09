'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load_ipython_extension = load_ipython_extension;
/**
 * This file contains the javascript that is run when the notebook is loaded.
 * It contains some requirejs configuration and the `load_ipython_extension` 
 * which is required for any notebook extension.
 */

/**
 * Configure requirejs.
 */
if (window.require) {
  window.require.config({
    map: {
      '*': {
        'francy': 'nbextensions/francy/index'
      }
    }
  });
}

/**
 * Export the required load_ipython_extention.
 */
function load_ipython_extension() {
  define(['base/js/namespace', 'nbextensions/francy/index', 'nbextensions/francy/d3.min', 'nbextensions/francy/francy.bundle.min'], function (Jupyter, Extension, d3, FrancyBundle) {
    var notebook = Jupyter.notebook;

    Extension.init(Jupyter, d3, FrancyBundle);
    Extension.register_renderer(notebook);
    Extension.render_cells(notebook);
  });
}