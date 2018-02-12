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
        'francy': 'nbextensions/jupyter_francy/index'
      }
    }
  });
}

/**
 * Export the required load_ipython_extention.
 */
export function load_ipython_extension() {
  define(
    [
      'base/js/namespace',
      'nbextensions/jupyter_francy/index',
      'nbextensions/jupyter_francy/d3',
      'nbextensions/jupyter_francy/francy'
    ],
    (Jupyter, Extension, d3, FrancyBundle) => {
      const { notebook } = Jupyter;
      Extension.init(Jupyter, d3, FrancyBundle);
      Extension.register_renderer(notebook);
      Extension.render_cells(notebook);
    }
  );
}
