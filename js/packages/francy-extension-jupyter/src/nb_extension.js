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

require(['nbextensions/jupyter_francy/Vendors']);

/**
 * Export the required load_ipython_extention.
 */
define(
  [
    'base/js/namespace',
    'nbextensions/jupyter_francy/Vendors',
    'nbextensions/jupyter_francy/FrancyJS',
    'nbextensions/jupyter_francy/D3Renderer',
    'nbextensions/jupyter_francy/GraphvizRenderer',
    'nbextensions/jupyter_francy/index'
  ],
  (Jupyter, Vendors, FrancyJS, D3Renderer, GraphvizRenderer, Extension) => {
    function load_ipython_extension() {
      const { notebook } = Jupyter;
      Extension.register_renderer(Jupyter, { 
        FrancyApp: FrancyJS.FrancyApp,
        Logger: FrancyJS.Logger, 
        Renderers: [ D3Renderer.D3Renderer, GraphvizRenderer.GraphvizRenderer ]
      }, notebook);
      Extension.render_cells(notebook);
    }
    return {
      load_ipython_extension: load_ipython_extension
    };
  }
);
