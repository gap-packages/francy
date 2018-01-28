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
        'francy_renderer': 'nbextensions/francy_renderer/index'
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
      'nbextensions/francy_renderer/index',
      'base/js/namespace',
      'nbextensions/francy_renderer/d3.min',
      'nbextensions/francy_renderer/francy.bundle.min'
    ],
    (Extension, Jupyter, d3, FrancyBundle) => {
      const { notebook } = Jupyter;
      Extension.init(Jupyter, d3, FrancyBundle);
      Extension.register_renderer(notebook);
      Extension.render_cells(notebook);
    }
  );
}
