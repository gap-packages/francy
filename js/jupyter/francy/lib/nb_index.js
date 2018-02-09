'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _renderer = require('./renderer.js');

Object.defineProperty(exports, 'register_renderer', {
  enumerable: true,
  get: function get() {
    return _renderer.register_renderer;
  }
});
Object.defineProperty(exports, 'render_cells', {
  enumerable: true,
  get: function get() {
    return _renderer.render_cells;
  }
});
Object.defineProperty(exports, 'init', {
  enumerable: true,
  get: function get() {
    return _renderer.init;
  }
});

var _package = require('../package.json');

Object.defineProperty(exports, 'version', {
  enumerable: true,
  get: function get() {
    return _package.version;
  }
});
/**
 * Entry point for the notebook bundle containing custom model definitions.
 * Setup notebook base URL
 * Some static assets may be required by the custom widget javascript. The base
 * url for the notebook is not known at build time and is therefore computed
 * dynamically.
 */

__webpack_public_path__ = document.querySelector('body').getAttribute('data-base-url') + 'nbextensions/francy/';

/**
 * Export widget models and views, and the npm package version number.
 */