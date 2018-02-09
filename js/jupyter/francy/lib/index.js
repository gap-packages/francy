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