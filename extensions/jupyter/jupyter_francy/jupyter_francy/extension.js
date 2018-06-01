define(["base/js/namespace","nbextensions/jupyter_francy/d3","nbextensions/jupyter_francy/francy","nbextensions/jupyter_francy/index"], function(__WEBPACK_EXTERNAL_MODULE_base_js_namespace__, __WEBPACK_EXTERNAL_MODULE_nbextensions_jupyter_francy_d3__, __WEBPACK_EXTERNAL_MODULE_nbextensions_jupyter_francy_francy__, __WEBPACK_EXTERNAL_MODULE_nbextensions_jupyter_francy_index__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/nb_extension.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/nb_extension.js":
/*!*****************************!*\
  !*** ./src/nb_extension.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

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
        'jupyter_francy': 'nbextensions/jupyter_francy/index'
      }
    }
  });
}

/**
 * Export the required load_ipython_extention.
 */
function load_ipython_extension() {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! base/js/namespace */ "base/js/namespace"), __webpack_require__(/*! nbextensions/jupyter_francy/index */ "nbextensions/jupyter_francy/index"), __webpack_require__(/*! nbextensions/jupyter_francy/d3 */ "nbextensions/jupyter_francy/d3"), __webpack_require__(/*! nbextensions/jupyter_francy/francy */ "nbextensions/jupyter_francy/francy")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Jupyter, Extension, d3, FrancyBundle) {
    var notebook = Jupyter.notebook;

    Extension.init(Jupyter, d3, FrancyBundle);
    Extension.register_renderer(notebook);
    Extension.render_cells(notebook);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

/***/ }),

/***/ "base/js/namespace":
/*!************************************!*\
  !*** external "base/js/namespace" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_base_js_namespace__;

/***/ }),

/***/ "nbextensions/jupyter_francy/d3":
/*!*************************************************!*\
  !*** external "nbextensions/jupyter_francy/d3" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_nbextensions_jupyter_francy_d3__;

/***/ }),

/***/ "nbextensions/jupyter_francy/francy":
/*!*****************************************************!*\
  !*** external "nbextensions/jupyter_francy/francy" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_nbextensions_jupyter_francy_francy__;

/***/ }),

/***/ "nbextensions/jupyter_francy/index":
/*!****************************************************!*\
  !*** external "nbextensions/jupyter_francy/index" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_nbextensions_jupyter_francy_index__;

/***/ })

/******/ })});;
//# sourceMappingURL=extension.js.map