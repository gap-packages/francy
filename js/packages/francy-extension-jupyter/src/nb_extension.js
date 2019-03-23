/* global define */

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
        'jupyter_francy': 'nbextensions/jupyter_francy/index'
      }
    }
  });
}

/**
 * Export the required load_ipython_extention.
 */
define(
  [
    'base/js/namespace',
    'nbextensions/jupyter_francy/index'
  ],
  (Jupyter, Extension) => {
    function load_ipython_extension() {
      const { notebook } = Jupyter;
      Extension.register_renderer(Jupyter, notebook);
      Extension.render_cells(notebook);
    }
    return {
      load_ipython_extension: load_ipython_extension
    };
  }
);
