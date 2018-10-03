/*! 'francy-extension-browser, v0.12.0, Francy - An Interactive Discrete Mathematics Framework for GAP, Manuel Martins <manuelmachadomartins@gmail.com>.' */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/css-loader/index.js!../francy/src/style/index.css":
/*!***************************************************************************************!*\
  !*** /home/ubuntu/workspace/js/node_modules/css-loader!../francy/src/style/index.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".francy {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  position: relative;\n  margin-top: 3px;\n  border: solid 1px #cfcfcf;\n  /*font-size: 13px;*/\n  overflow: hidden\n}\n\n.francy-menu-arrow-right {\n  width: 0px;\n  height: 0px;\n  border-top: 3px solid transparent;\n  border-bottom: 3px solid transparent;\n  border-left: 3px solid #000;\n  margin-top: 10%\n}\n\n.francy-menu-arrow-down {\n  width: 0px;\n  height: 0px;\n  border-left: 4px solid transparent;\n  border-top: 4px solid #000\n}\n\n.francy-content {\n  height: 100%;\n  overflow: hidden;\n  clear: both;\n}\n\n.francy-size10 {\n  font-size: 10px!important\n}\n\n.francy-highlight:hover>path,\n.francy-highlight:hover>ellipse,\n.francy-highlight:hover>polygon {\n  stroke: #70C700;\n  stroke-width: 2\n}\n\n.francy-selected>path,\n.francy-selected>ellipse,\n.francy-selected>polygon {\n  stroke: #70C700!important;\n  stroke-width: 5!important\n}\n\n.francy-context {\n  cursor: context-menu!important\n}\n\n.francy-links {\n  cursor: pointer\n}\n\n.francy a {\n  color: inherit\n}\n\n.francy-main-menu {\n  background: #f6f6f6;\n  float: left;\n  list-style: none;\n  width: 100%;\n  border-bottom: 1px solid #cfcfcf\n}\n\n.francy-main-menu li {\n  float: left;\n  position: relative;\n  cursor: pointer;\n  padding-left: 2px!important;\n}\n\n.francy-main-menu li ul {\n  box-shadow: 5px 5px 5px grey;\n  min-width: 120px;\n  z-index: 500\n}\n\n.francy-main-menu hr {\n  border-color: #cfcfcf!important;\n  margin: 0.1px!important;\n}\n\n.francy-main-menu li ul li:hover ul {\n  position: absolute;\n  left: 100%!important;\n  top: 0!important;\n}\n\n.francy-main-menu li ul li ul {\n  left: -9999px!important;\n  list-style: none;\n  position: absolute\n}\n\n.francy-main-menu li a {\n  display: block;\n  padding: 10px 15px;\n  text-decoration: none\n}\n\n.francy-main-menu .francy-title,\n.francy-main-menu .francy-loader {\n  float: right!important;\n  cursor: auto\n}\n\n.francy-main-menu li.francy-title:hover a:hover {\n  background: inherit!important\n}\n\n.francy-main-menu li:hover a {\n  background: #f6f6f6;\n  text-decoration: none\n}\n\n.francy-main-menu li:hover a:hover {\n  background: #ededed;\n  text-decoration: none\n}\n\n.francy-main-menu li:hover ul {\n  left: 0\n}\n\n.francy-main-menu li:hover ul a {\n  text-decoration: none\n}\n\n.francy-main-menu li:hover ul li a:hover {\n  background: #ededed\n}\n\n.francy-main-menu ul {\n  left: -9999px;\n  list-style: none;\n  position: absolute\n}\n\n.francy-main-menu ul a {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 120px\n}\n\n.francy-main-menu ul li {\n  float: none;\n  width: 100%\n}\n\n.francy-context-menu-holder {\n  display: none;\n  position: absolute\n}\n\n.node,\n.edge,\n.francy-nodes,\n.francy-bars,\n.francy-lines,\n.francy-labels,\n.francy-scatters {\n  cursor: pointer\n}\n\n.francy-node path,\n.francy-node ellipse,\n.francy-node polygon {\n  stroke: #000;\n  stroke-width: 0.5px\n}\n\n.francy-lines path,\n.francy-lines ellipse,\n.francy-lines polygon {\n  fill: none\n}\n\n.francy-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  min-height: 100%;\n  width: 100%;\n  min-width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 990;\n  overflow: hidden;\n}\n\n.francy-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  bottom: inherit;\n  right: inherit;\n  z-index: 1000;\n  background: #fff;\n  box-shadow: 5px 5px 5px #000;\n  margin-left: -182px;\n  margin-top: -102px;\n  padding: 10px;\n  display: block;\n  min-width: 250px;\n  max-width: 400px\n}\n\n.francy-modal-header {\n  border-bottom: 1px solid #cfcfcf;\n  text-align: center;\n  padding: 10px 0\n}\n\n.francy-modal-footer {\n  border-top: 1px solid #cfcfcf;\n  padding: 10px 0\n}\n\n.francy-modal-content {\n  margin: 15px 5px\n}\n\n.francy-modal-content input,\n.francy-modal-content select {\n  margin: 1px;\n  width: 100%\n}\n\n.francy-modal-footer button {\n  float: right;\n  margin-left: 5px\n}\n\n.francy-canvas {\n  width: 100%\n}\n\n.francy svg {\n  cursor: move;\n  background-color: white\n}\n\n.francy text {\n  fill: #000;\n  /*font-size: 12px*/\n}\n\n.francy ul {\n  margin: 0;\n  padding: 0\n}\n\n\ndiv.output_subarea.jp-OutputWidget-Francy.output_result {\n  padding: 0;\n  max-width: inherit!important\n}\n\n.francy-tooltip-holder {\n  display: none;\n  position: absolute\n}\n\n.francy-tooltip {\n  min-width: fit-content;\n  background: none repeat scroll 0 0 #f6f6f6;\n  border: 1px solid #cfcfcf;\n  padding: 10px;\n  text-align: justify\n}\n\n.francy-title {\n  font-weight: 700;\n  text-overflow: ellipsis\n}\n\n.francy-loader>a {\n  padding: 10px 10px 0 0!important;\n}\n\n.francy-context-menu {\n  background: #f6f6f6;\n  color: #333;\n  min-width: 150px;\n  border: 1px solid #cfcfcf;\n  z-index: 500;\n  box-shadow: 5px 5px 5px grey\n}\n\n.francy-context-menu ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  cursor: pointer\n}\n\n.francy-context-menu ul li a {\n  background: #f6f6f6;\n  display: block;\n  padding: 5px 10px;\n  text-decoration: none\n}\n\n.francy-context-menu ul li a:hover {\n  background-color: #ededed\n}\n\n.francy-table {\n  display: table;\n  width: 100%\n}\n\n.francy-table-row {\n  display: table-row\n}\n\n.francy-table-row:first-child {\n  text-align: right;\n}\n\n.francy-table-heading {\n  background-color: #eee;\n  display: table-header-group\n}\n\n.francy-table-cell,\n.francy-table-head {\n  display: table-cell;\n  padding: 0 6px;\n  vertical-align: middle;\n  white-space: nowrap\n}\n\n.francy-table-heading {\n  background-color: #eee;\n  display: table-header-group;\n  font-weight: 700\n}\n\n.francy-table-foot {\n  background-color: #eee;\n  display: table-footer-group;\n  font-weight: 700\n}\n\n.francy-table-body {\n  display: table-row-group\n}\n\n.francy pre {\n  outline: 1px solid #ccc;\n  overflow: auto;\n  max-height: 200px\n}\n\n.francy .string {\n  color: green\n}\n\n.francy .number {\n  color: #ff8c00\n}\n\n.francy .boolean {\n  color: blue\n}\n\n.francy .null {\n  color: #f0f\n}\n\n.francy .key {\n  color: red\n}\n\n@media only screen and (max-width: 700px) {\n  .francy-main-menu .francy-title,\n  .francy-main-menu .francy-loader {\n    display: none\n  }\n}\n\n.francy-message-holder {\n  position: absolute;\n  width: fit-content;\n  max-width: 40%;\n  min-width: 30%;\n  top: 55px;\n  left: 10px;\n}\n\n.francy-alert>span:not(:first-child) {\n  margin-left: 5px\n}\n\n.francy-alert {\n  padding: .75rem 1rem;\n  margin: .2rem 0 0 .2rem;\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  cursor: pointer\n}\n\n.francy-alert:hover span.closeme {\n  display: inline!important;\n  float: right\n}\n\n.francy-alert.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb\n}\n\n.francy-alert.alert-error {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb\n}\n\n.francy-alert.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb\n}\n\n.francy-alert.alert-default {\n  color: #1b1e21;\n  background-color: #f6f6f6;\n  border-color: #cfcfcf\n}\n\n.francy-alert.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba\n}\n\n.strong {\n  font-weight: 700\n}\n\ndiv.output_subarea {\n  max-width: 100%;\n}\n\n.loader {\n  border: 4px solid #cfcfcf;\n  border-radius: 50%;\n  border-top: 4px solid #3498db;\n  width: 5px;\n  height: 5px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin: 11px 3px 0 0;\n  visibility: hidden;\n}\n\n/* Safari */\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/lib/css-base.js":
/*!*************************************************************************!*\
  !*** /home/ubuntu/workspace/js/node_modules/css-loader/lib/css-base.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media " + item[2] + "{" + content + "}";
      } else {
        return content;
      }
    }).join("");
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === "string") modules = [[null, modules, ""]];
    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (typeof id === "number") alreadyImportedModules[id] = true;
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      //  when a module is imported multiple times with different media queries.
      //  I hope this will never occur (Hey this way we have smaller bundles)

      if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "../../node_modules/save-svg-as-png/lib/saveSvgAsPng.js":
/*!**********************************************************************************!*\
  !*** /home/ubuntu/workspace/js/node_modules/save-svg-as-png/lib/saveSvgAsPng.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

(function () {
  var out$ = typeof exports != 'undefined' && exports || "function" != 'undefined' && {} || this || window;
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return out$;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  var xmlns = 'http://www.w3.org/2000/xmlns/';
  var doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [<!ENTITY nbsp "&#160;">]>';
  var urlRegex = /url\(["']?(.+?)["']?\)/;
  var fontFormats = {
    woff2: 'font/woff2',
    woff: 'font/woff',
    otf: 'application/x-font-opentype',
    ttf: 'application/x-font-ttf',
    eot: 'application/vnd.ms-fontobject',
    sfnt: 'application/font-sfnt',
    svg: 'image/svg+xml'
  };

  var isElement = function isElement(obj) {
    return obj instanceof HTMLElement || obj instanceof SVGElement;
  };

  var requireDomNode = function requireDomNode(el) {
    if (!isElement(el)) throw new Error('an HTMLElement or SVGElement is required; got ' + el);
  };

  var isExternal = function isExternal(url) {
    return url && url.lastIndexOf('http', 0) === 0 && url.lastIndexOf(window.location.host) === -1;
  };

  var getFontMimeTypeFromUrl = function getFontMimeTypeFromUrl(fontUrl) {
    var formats = Object.keys(fontFormats).filter(function (extension) {
      return fontUrl.indexOf('.' + extension) > 0;
    }).map(function (extension) {
      return fontFormats[extension];
    });
    if (formats) return formats[0];
    console.error('Unknown font format for ' + fontUrl + '. Fonts may not be working correctly.');
    return 'application/octet-stream';
  };

  var arrayBufferToBase64 = function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);

    for (var i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    return window.btoa(binary);
  };

  var getDimension = function getDimension(el, clone, dim) {
    var v = el.viewBox && el.viewBox.baseVal && el.viewBox.baseVal[dim] || clone.getAttribute(dim) !== null && !clone.getAttribute(dim).match(/%$/) && parseInt(clone.getAttribute(dim)) || el.getBoundingClientRect()[dim] || parseInt(clone.style[dim]) || parseInt(window.getComputedStyle(el).getPropertyValue(dim));
    return typeof v === 'undefined' || v === null || isNaN(parseFloat(v)) ? 0 : v;
  };

  var getDimensions = function getDimensions(el, clone, width, height) {
    if (el.tagName === 'svg') return {
      width: width || getDimension(el, clone, 'width'),
      height: height || getDimension(el, clone, 'height')
    };else if (el.getBBox) {
      var _el$getBBox = el.getBBox(),
          x = _el$getBBox.x,
          y = _el$getBBox.y,
          _width = _el$getBBox.width,
          _height = _el$getBBox.height;

      return {
        width: x + _width,
        height: y + _height
      };
    }
  };

  var reEncode = function reEncode(data) {
    return decodeURIComponent(encodeURIComponent(data).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      var c = String.fromCharCode('0x' + p1);
      return c === '%' ? '%25' : c;
    }));
  };

  var uriToBlob = function uriToBlob(uri) {
    var byteString = window.atob(uri.split(',')[1]);
    var mimeString = uri.split(',')[0].split(':')[1].split(';')[0];
    var buffer = new ArrayBuffer(byteString.length);
    var intArray = new Uint8Array(buffer);

    for (var i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }

    return new Blob([buffer], {
      type: mimeString
    });
  };

  var query = function query(el, selector) {
    if (!selector) return;

    try {
      return el.querySelector(selector) || el.parentNode && el.parentNode.querySelector(selector);
    } catch (err) {
      console.warn('Invalid CSS selector "' + selector + '"', err);
    }
  };

  var detectCssFont = function detectCssFont(rule, href) {
    // Match CSS font-face rules to external links.
    // @font-face {
    //   src: local('Abel'), url(https://fonts.gstatic.com/s/abel/v6/UzN-iejR1VoXU2Oc-7LsbvesZW2xOQ-xsNqO47m55DA.woff2);
    // }
    var match = rule.cssText.match(urlRegex);
    var url = match && match[1] || '';
    if (!url || url.match(/^data:/) || url === 'about:blank') return;
    var fullUrl = url.startsWith('../') ? href + '/../' + url : url.startsWith('./') ? href + '/.' + url : url;
    return {
      text: rule.cssText,
      format: getFontMimeTypeFromUrl(fullUrl),
      url: fullUrl
    };
  };

  var inlineImages = function inlineImages(el) {
    return Promise.all(Array.from(el.querySelectorAll('image')).map(function (image) {
      var href = image.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || image.getAttribute('href');
      if (!href) return Promise.resolve(null);

      if (isExternal(href)) {
        href += (href.indexOf('?') === -1 ? '?' : '&') + 't=' + new Date().valueOf();
      }

      return new Promise(function (resolve, reject) {
        var canvas = document.createElement('canvas');
        var img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = href;

        img.onerror = function () {
          return reject(new Error('Could not load ' + href));
        };

        img.onload = function () {
          canvas.width = img.width;
          canvas.height = img.height;
          canvas.getContext('2d').drawImage(img, 0, 0);
          image.setAttributeNS('http://www.w3.org/1999/xlink', 'href', canvas.toDataURL('image/png'));
          resolve(true);
        };
      });
    }));
  };

  var cachedFonts = {};

  var inlineFonts = function inlineFonts(fonts) {
    return Promise.all(fonts.map(function (font) {
      return new Promise(function (resolve, reject) {
        if (cachedFonts[font.url]) return resolve(cachedFonts[font.url]);
        var req = new XMLHttpRequest();
        req.addEventListener('load', function () {
          // TODO: it may also be worth it to wait until fonts are fully loaded before
          // attempting to rasterize them. (e.g. use https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet)
          var fontInBase64 = arrayBufferToBase64(req.response);
          var fontUri = font.text.replace(urlRegex, 'url("data:' + font.format + ';base64,' + fontInBase64 + '")') + '\n';
          cachedFonts[font.url] = fontUri;
          resolve(fontUri);
        });
        req.addEventListener('error', function (e) {
          console.warn('Failed to load font from: ' + font.url, e);
          cachedFonts[font.url] = null;
          resolve(null);
        });
        req.addEventListener('abort', function (e) {
          console.warn('Aborted loading font from: ' + font.url, e);
          resolve(null);
        });
        req.open('GET', font.url);
        req.responseType = 'arraybuffer';
        req.send();
      });
    })).then(function (fontCss) {
      return fontCss.filter(function (x) {
        return x;
      }).join('');
    });
  };

  var cachedRules = null;

  var styleSheetRules = function styleSheetRules() {
    if (cachedRules) return cachedRules;
    return cachedRules = Array.from(document.styleSheets).map(function (sheet) {
      try {
        return {
          rules: sheet.cssRules,
          href: sheet.href
        };
      } catch (e) {
        console.warn('Stylesheet could not be loaded: ' + sheet.href, e);
        return {};
      }
    });
  };

  var inlineCss = function inlineCss(el, options) {
    var _ref = options || {},
        selectorRemap = _ref.selectorRemap,
        modifyStyle = _ref.modifyStyle,
        modifyCss = _ref.modifyCss,
        fonts = _ref.fonts;

    var generateCss = modifyCss || function (selector, properties) {
      var sel = selectorRemap ? selectorRemap(selector) : selector;
      var props = modifyStyle ? modifyStyle(properties) : properties;
      return sel + '{' + props + '}\n';
    };

    var css = [];
    var detectFonts = typeof fonts === 'undefined';
    var fontList = fonts || [];
    styleSheetRules().forEach(function (_ref2) {
      var rules = _ref2.rules,
          href = _ref2.href;
      if (!rules) return;
      Array.from(rules).forEach(function (rule) {
        if (typeof rule.style != 'undefined') {
          if (query(el, rule.selectorText)) css.push(generateCss(rule.selectorText, rule.style.cssText));else if (detectFonts && rule.cssText.match(/^@font-face/)) {
            var font = detectCssFont(rule, href);
            if (font) fontList.push(font);
          } else css.push(rule.cssText);
        }
      });
    });
    return inlineFonts(fontList).then(function (fontCss) {
      return css.join('\n') + fontCss;
    });
  };

  out$.prepareSvg = function (el, options, done) {
    requireDomNode(el);

    var _ref3 = options || {},
        _ref3$left = _ref3.left,
        left = _ref3$left === undefined ? 0 : _ref3$left,
        _ref3$top = _ref3.top,
        top = _ref3$top === undefined ? 0 : _ref3$top,
        w = _ref3.width,
        h = _ref3.height,
        _ref3$scale = _ref3.scale,
        scale = _ref3$scale === undefined ? 1 : _ref3$scale,
        _ref3$responsive = _ref3.responsive,
        responsive = _ref3$responsive === undefined ? false : _ref3$responsive;

    return inlineImages(el).then(function () {
      var clone = el.cloneNode(true);

      var _ref4 = options || {},
          _ref4$backgroundColor = _ref4.backgroundColor,
          backgroundColor = _ref4$backgroundColor === undefined ? 'transparent' : _ref4$backgroundColor;

      clone.style.backgroundColor = backgroundColor;

      var _getDimensions = getDimensions(el, clone, w, h),
          width = _getDimensions.width,
          height = _getDimensions.height;

      if (el.tagName !== 'svg') {
        if (el.getBBox) {
          clone.setAttribute('transform', clone.getAttribute('transform').replace(/translate\(.*?\)/, ''));
          var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.appendChild(clone);
          clone = svg;
        } else {
          console.error('Attempted to render non-SVG element', el);
          return;
        }
      }

      clone.setAttribute('version', '1.1');
      clone.setAttribute('viewBox', [left, top, width, height].join(' '));
      if (!clone.getAttribute('xmlns')) clone.setAttributeNS(xmlns, 'xmlns', 'http://www.w3.org/2000/svg');
      if (!clone.getAttribute('xmlns:xlink')) clone.setAttributeNS(xmlns, 'xmlns:xlink', 'http://www.w3.org/1999/xlink');

      if (responsive) {
        clone.removeAttribute('width');
        clone.removeAttribute('height');
        clone.setAttribute('preserveAspectRatio', 'xMinYMin meet');
      } else {
        clone.setAttribute('width', width * scale);
        clone.setAttribute('height', height * scale);
      }

      Array.from(clone.querySelectorAll('foreignObject > *')).forEach(function (foreignObject) {
        if (!foreignObject.getAttribute('xmlns')) foreignObject.setAttributeNS(xmlns, 'xmlns', 'http://www.w3.org/1999/xhtml');
      });
      return inlineCss(el, options).then(function (css) {
        var style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.innerHTML = '<![CDATA[\n' + css + '\n]]>';
        var defs = document.createElement('defs');
        defs.appendChild(style);
        clone.insertBefore(defs, clone.firstChild);
        var outer = document.createElement('div');
        outer.appendChild(clone);
        var src = outer.innerHTML.replace(/NS\d+:href/gi, 'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href');
        if (typeof done === 'function') done(src, width, height);else return {
          src: src,
          width: width,
          height: height
        };
      });
    });
  };

  out$.svgAsDataUri = function (el, options, done) {
    requireDomNode(el);
    var result = out$.prepareSvg(el, options).then(function (_ref5) {
      var src = _ref5.src;
      return 'data:image/svg+xml;base64,' + window.btoa(reEncode(doctype + src));
    });
    if (typeof done === 'function') return result.then(done);
    return result;
  };

  out$.svgAsPngUri = function (el, options, done) {
    requireDomNode(el);

    var _ref6 = options || {},
        _ref6$encoderType = _ref6.encoderType,
        encoderType = _ref6$encoderType === undefined ? 'image/png' : _ref6$encoderType,
        _ref6$encoderOptions = _ref6.encoderOptions,
        encoderOptions = _ref6$encoderOptions === undefined ? 0.8 : _ref6$encoderOptions,
        canvg = _ref6.canvg;

    var convertToPng = function convertToPng(_ref7) {
      var src = _ref7.src,
          width = _ref7.width,
          height = _ref7.height;
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      var pixelRatio = window.devicePixelRatio || 1;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = canvas.width + 'px';
      canvas.style.height = canvas.height + 'px';
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      if (canvg) canvg(canvas, src);else context.drawImage(src, 0, 0);
      var png = void 0;

      try {
        png = canvas.toDataURL(encoderType, encoderOptions);
      } catch (e) {
        if (typeof SecurityError !== 'undefined' && e instanceof SecurityError || e.name === 'SecurityError') {
          console.error('Rendered SVG images cannot be downloaded in this browser.');
          return;
        } else throw e;
      }

      if (typeof done === 'function') done(png);
      return Promise.resolve(png);
    };

    if (canvg) return out$.prepareSvg(el, options).then(convertToPng);else return out$.svgAsDataUri(el, options).then(function (uri) {
      return new Promise(function (resolve, reject) {
        var image = new Image();

        image.onload = function () {
          return resolve(convertToPng({
            src: image,
            width: image.width,
            height: image.height
          }));
        };

        image.onerror = function () {
          reject('There was an error loading the data URI as an image on the following SVG\n' + window.atob(uri.slice(26)) + 'Open the following link to see browser\'s diagnosis\n' + uri);
        };

        image.src = uri;
      });
    });
  };

  out$.download = function (name, uri) {
    if (navigator.msSaveOrOpenBlob) navigator.msSaveOrOpenBlob(uriToBlob(uri), name);else {
      var saveLink = document.createElement('a');

      if ('download' in saveLink) {
        saveLink.download = name;
        saveLink.style.display = 'none';
        document.body.appendChild(saveLink);

        try {
          var blob = uriToBlob(uri);
          var url = URL.createObjectURL(blob);
          saveLink.href = url;

          saveLink.onclick = function () {
            return requestAnimationFrame(function () {
              return URL.revokeObjectURL(url);
            });
          };
        } catch (e) {
          console.warn('This browser does not support object URLs. Falling back to string URL.');
          saveLink.href = uri;
        }

        saveLink.click();
        document.body.removeChild(saveLink);
      } else {
        window.open(uri, '_temp', 'menubar=no,toolbar=no,status=no');
      }
    }
  };

  out$.saveSvg = function (el, name, options) {
    requireDomNode(el);
    out$.svgAsDataUri(el, options || {}, function (uri) {
      return out$.download(name, uri);
    });
  };

  out$.saveSvgAsPng = function (el, name, options) {
    requireDomNode(el);
    out$.svgAsPngUri(el, options || {}, function (uri) {
      return out$.download(name, uri);
    });
  };
})();

/***/ }),

/***/ "../../node_modules/seedrandom/index.js":
/*!******************************************************************!*\
  !*** /home/ubuntu/workspace/js/node_modules/seedrandom/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.
// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = __webpack_require__(/*! ./lib/alea */ "../../node_modules/seedrandom/lib/alea.js"); // xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.


var xor128 = __webpack_require__(/*! ./lib/xor128 */ "../../node_modules/seedrandom/lib/xor128.js"); // xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.


var xorwow = __webpack_require__(/*! ./lib/xorwow */ "../../node_modules/seedrandom/lib/xorwow.js"); // xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.


var xorshift7 = __webpack_require__(/*! ./lib/xorshift7 */ "../../node_modules/seedrandom/lib/xorshift7.js"); // xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.


var xor4096 = __webpack_require__(/*! ./lib/xor4096 */ "../../node_modules/seedrandom/lib/xor4096.js"); // Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.


var tychei = __webpack_require__(/*! ./lib/tychei */ "../../node_modules/seedrandom/lib/tychei.js"); // The original ARC4-based prng included in this library.
// Period: ~2^1600


var sr = __webpack_require__(/*! ./seedrandom */ "../../node_modules/seedrandom/seedrandom.js");

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;
module.exports = sr;

/***/ }),

/***/ "../../node_modules/seedrandom/lib/alea.js":
/*!*********************************************************************!*\
  !*** /home/ubuntu/workspace/js/node_modules/seedrandom/lib/alea.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -
// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
(function (global, module, define) {
  function Alea(seed) {
    var me = this,
        mash = Mash();

    me.next = function () {
      var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32

      me.s0 = me.s1;
      me.s1 = me.s2;
      return me.s2 = t - (me.c = t | 0);
    }; // Apply the seeding algorithm from Baagoe.


    me.c = 1;
    me.s0 = mash(' ');
    me.s1 = mash(' ');
    me.s2 = mash(' ');
    me.s0 -= mash(seed);

    if (me.s0 < 0) {
      me.s0 += 1;
    }

    me.s1 -= mash(seed);

    if (me.s1 < 0) {
      me.s1 += 1;
    }

    me.s2 -= mash(seed);

    if (me.s2 < 0) {
      me.s2 += 1;
    }

    mash = null;
  }

  function copy(f, t) {
    t.c = f.c;
    t.s0 = f.s0;
    t.s1 = f.s1;
    t.s2 = f.s2;
    return t;
  }

  function impl(seed, opts) {
    var xg = new Alea(seed),
        state = opts && opts.state,
        prng = xg.next;

    prng.int32 = function () {
      return xg.next() * 0x100000000 | 0;
    };

    prng.double = function () {
      return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
    };

    prng.quick = prng;

    if (state) {
      if (_typeof(state) == 'object') copy(state, xg);

      prng.state = function () {
        return copy(xg, {});
      };
    }

    return prng;
  }

  function Mash() {
    var n = 0xefc8249d;

    var mash = function mash(data) {
      data = data.toString();

      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000; // 2^32
      }

      return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
    };

    return mash;
  }

  if (module && module.exports) {
    module.exports = impl;
  } else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return impl;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.alea = impl;
  }
})(this, ( false ? undefined : _typeof(module)) == 'object' && module, // present in node.js
__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") // present with an AMD loader
);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../packages/francy-extension-browser/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/seedrandom/lib/tychei.js":
/*!***********************************************************************!*\
  !*** /home/ubuntu/workspace/js/node_modules/seedrandom/lib/tychei.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
(function (global, module, define) {
  function XorGen(seed) {
    var me = this,
        strseed = ''; // Set up generator function.

    me.next = function () {
      var b = me.b,
          c = me.c,
          d = me.d,
          a = me.a;
      b = b << 25 ^ b >>> 7 ^ c;
      c = c - d | 0;
      d = d << 24 ^ d >>> 8 ^ a;
      a = a - b | 0;
      me.b = b = b << 20 ^ b >>> 12 ^ c;
      me.c = c = c - d | 0;
      me.d = d << 16 ^ c >>> 16 ^ a;
      return me.a = a - b | 0;
    };
    /* The following is non-inverted tyche, which has better internal
     * bit diffusion, but which is about 25% slower than tyche-i in JS.
    me.next = function() {
      var a = me.a, b = me.b, c = me.c, d = me.d;
      a = (me.a + me.b | 0) >>> 0;
      d = me.d ^ a; d = d << 16 ^ d >>> 16;
      c = me.c + d | 0;
      b = me.b ^ c; b = b << 12 ^ d >>> 20;
      me.a = a = a + b | 0;
      d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
      me.c = c = c + d | 0;
      b = b ^ c;
      return me.b = (b << 7 ^ b >>> 25);
    }
    */


    me.a = 0;
    me.b = 0;
    me.c = 2654435769 | 0;
    me.d = 1367130551;

    if (seed === Math.floor(seed)) {
      // Integer seed.
      me.a = seed / 0x100000000 | 0;
      me.b = seed | 0;
    } else {
      // String seed.
      strseed += seed;
    } // Mix in string seed, then discard an initial batch of 64 values.


    for (var k = 0; k < strseed.length + 20; k++) {
      me.b ^= strseed.charCodeAt(k) | 0;
      me.next();
    }
  }

  function copy(f, t) {
    t.a = f.a;
    t.b = f.b;
    t.c = f.c;
    t.d = f.d;
    return t;
  }

  ;

  function impl(seed, opts) {
    var xg = new XorGen(seed),
        state = opts && opts.state,
        prng = function prng() {
      return (xg.next() >>> 0) / 0x100000000;
    };

    prng.double = function () {
      do {
        var top = xg.next() >>> 11,
            bot = (xg.next() >>> 0) / 0x100000000,
            result = (top + bot) / (1 << 21);
      } while (result === 0);

      return result;
    };

    prng.int32 = xg.next;
    prng.quick = prng;

    if (state) {
      if (_typeof(state) == 'object') copy(state, xg);

      prng.state = function () {
        return copy(xg, {});
      };
    }

    return prng;
  }

  if (module && module.exports) {
    module.exports = impl;
  } else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return impl;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.tychei = impl;
  }
})(this, ( false ? undefined : _typeof(module)) == 'object' && module, // present in node.js
__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") // present with an AMD loader
);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../packages/francy-extension-browser/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/seedrandom/lib/xor128.js":
/*!***********************************************************************!*\
  !*** /home/ubuntu/workspace/js/node_modules/seedrandom/lib/xor128.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper
(function (global, module, define) {
  function XorGen(seed) {
    var me = this,
        strseed = '';
    me.x = 0;
    me.y = 0;
    me.z = 0;
    me.w = 0; // Set up generator function.

    me.next = function () {
      var t = me.x ^ me.x << 11;
      me.x = me.y;
      me.y = me.z;
      me.z = me.w;
      return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
    };

    if (seed === (seed | 0)) {
      // Integer seed.
      me.x = seed;
    } else {
      // String seed.
      strseed += seed;
    } // Mix in string seed, then discard an initial batch of 64 values.


    for (var k = 0; k < strseed.length + 64; k++) {
      me.x ^= strseed.charCodeAt(k) | 0;
      me.next();
    }
  }

  function copy(f, t) {
    t.x = f.x;
    t.y = f.y;
    t.z = f.z;
    t.w = f.w;
    return t;
  }

  function impl(seed, opts) {
    var xg = new XorGen(seed),
        state = opts && opts.state,
        prng = function prng() {
      return (xg.next() >>> 0) / 0x100000000;
    };

    prng.double = function () {
      do {
        var top = xg.next() >>> 11,
            bot = (xg.next() >>> 0) / 0x100000000,
            result = (top + bot) / (1 << 21);
      } while (result === 0);

      return result;
    };

    prng.int32 = xg.next;
    prng.quick = prng;

    if (state) {
      if (_typeof(state) == 'object') copy(state, xg);

      prng.state = function () {
        return copy(xg, {});
      };
    }

    return prng;
  }

  if (module && module.exports) {
    module.exports = impl;
  } else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return impl;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.xor128 = impl;
  }
})(this, ( false ? undefined : _typeof(module)) == 'object' && module, // present in node.js
__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") // present with an AMD loader
);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../packages/francy-extension-browser/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/seedrandom/lib/xor4096.js":
/*!************************************************************************!*\
  !*** /home/ubuntu/workspace/js/node_modules/seedrandom/lib/xor4096.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().
(function (global, module, define) {
  function XorGen(seed) {
    var me = this; // Set up generator function.

    me.next = function () {
      var w = me.w,
          X = me.X,
          i = me.i,
          t,
          v; // Update Weyl generator.

      me.w = w = w + 0x61c88647 | 0; // Update xor generator.

      v = X[i + 34 & 127];
      t = X[i = i + 1 & 127];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12; // Update Xor generator array state.

      v = X[i] = v ^ t;
      me.i = i; // Result is the combination.

      return v + (w ^ w >>> 16) | 0;
    };

    function init(me, seed) {
      var t,
          v,
          i,
          j,
          w,
          X = [],
          limit = 128;

      if (seed === (seed | 0)) {
        // Numeric seeds initialize v, which is used to generates X.
        v = seed;
        seed = null;
      } else {
        // String seeds are mixed into v and X one character at a time.
        seed = seed + '\0';
        v = 0;
        limit = Math.max(limit, seed.length);
      } // Initialize circular array and weyl value.


      for (i = 0, j = -32; j < limit; ++j) {
        // Put the unicode characters into the array, and shuffle them.
        if (seed) v ^= seed.charCodeAt((j + 32) % seed.length); // After 32 shuffles, take v as the starting w value.

        if (j === 0) w = v;
        v ^= v << 10;
        v ^= v >>> 15;
        v ^= v << 4;
        v ^= v >>> 13;

        if (j >= 0) {
          w = w + 0x61c88647 | 0; // Weyl.

          t = X[j & 127] ^= v + w; // Combine xor and weyl to init array.

          i = 0 == t ? i + 1 : 0; // Count zeroes.
        }
      } // We have detected all zeroes; make the key nonzero.


      if (i >= 128) {
        X[(seed && seed.length || 0) & 127] = -1;
      } // Run the generator 512 times to further mix the state before using it.
      // Factoring this as a function slows the main generator, so it is just
      // unrolled here.  The weyl generator is not advanced while warming up.


      i = 127;

      for (j = 4 * 128; j > 0; --j) {
        v = X[i + 34 & 127];
        t = X[i = i + 1 & 127];
        v ^= v << 13;
        t ^= t << 17;
        v ^= v >>> 15;
        t ^= t >>> 12;
        X[i] = v ^ t;
      } // Storing state as object members is faster than using closure variables.


      me.w = w;
      me.X = X;
      me.i = i;
    }

    init(me, seed);
  }

  function copy(f, t) {
    t.i = f.i;
    t.w = f.w;
    t.X = f.X.slice();
    return t;
  }

  ;

  function impl(seed, opts) {
    if (seed == null) seed = +new Date();

    var xg = new XorGen(seed),
        state = opts && opts.state,
        prng = function prng() {
      return (xg.next() >>> 0) / 0x100000000;
    };

    prng.double = function () {
      do {
        var top = xg.next() >>> 11,
            bot = (xg.next() >>> 0) / 0x100000000,
            result = (top + bot) / (1 << 21);
      } while (result === 0);

      return result;
    };

    prng.int32 = xg.next;
    prng.quick = prng;

    if (state) {
      if (state.X) copy(state, xg);

      prng.state = function () {
        return copy(xg, {});
      };
    }

    return prng;
  }

  if (module && module.exports) {
    module.exports = impl;
  } else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return impl;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.xor4096 = impl;
  }
})(this, // window object or global
( false ? undefined : _typeof(module)) == 'object' && module, // present in node.js
__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") // present with an AMD loader
);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../packages/francy-extension-browser/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/seedrandom/lib/xorshift7.js":
/*!**************************************************************************!*\
  !*** /home/ubuntu/workspace/js/node_modules/seedrandom/lib/xorshift7.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf
(function (global, module, define) {
  function XorGen(seed) {
    var me = this; // Set up generator function.

    me.next = function () {
      // Update xor generator.
      var X = me.x,
          i = me.i,
          t,
          v,
          w;
      t = X[i];
      t ^= t >>> 7;
      v = t ^ t << 24;
      t = X[i + 1 & 7];
      v ^= t ^ t >>> 10;
      t = X[i + 3 & 7];
      v ^= t ^ t >>> 3;
      t = X[i + 4 & 7];
      v ^= t ^ t << 7;
      t = X[i + 7 & 7];
      t = t ^ t << 13;
      v ^= t ^ t << 9;
      X[i] = v;
      me.i = i + 1 & 7;
      return v;
    };

    function init(me, seed) {
      var j,
          w,
          X = [];

      if (seed === (seed | 0)) {
        // Seed state array using a 32-bit integer.
        w = X[0] = seed;
      } else {
        // Seed state using a string.
        seed = '' + seed;

        for (j = 0; j < seed.length; ++j) {
          X[j & 7] = X[j & 7] << 15 ^ seed.charCodeAt(j) + X[j + 1 & 7] << 13;
        }
      } // Enforce an array length of 8, not all zeroes.


      while (X.length < 8) {
        X.push(0);
      }

      for (j = 0; j < 8 && X[j] === 0; ++j) {
        ;
      }

      if (j == 8) w = X[7] = -1;else w = X[j];
      me.x = X;
      me.i = 0; // Discard an initial 256 values.

      for (j = 256; j > 0; --j) {
        me.next();
      }
    }

    init(me, seed);
  }

  function copy(f, t) {
    t.x = f.x.slice();
    t.i = f.i;
    return t;
  }

  function impl(seed, opts) {
    if (seed == null) seed = +new Date();

    var xg = new XorGen(seed),
        state = opts && opts.state,
        prng = function prng() {
      return (xg.next() >>> 0) / 0x100000000;
    };

    prng.double = function () {
      do {
        var top = xg.next() >>> 11,
            bot = (xg.next() >>> 0) / 0x100000000,
            result = (top + bot) / (1 << 21);
      } while (result === 0);

      return result;
    };

    prng.int32 = xg.next;
    prng.quick = prng;

    if (state) {
      if (state.x) copy(state, xg);

      prng.state = function () {
        return copy(xg, {});
      };
    }

    return prng;
  }

  if (module && module.exports) {
    module.exports = impl;
  } else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return impl;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.xorshift7 = impl;
  }
})(this, ( false ? undefined : _typeof(module)) == 'object' && module, // present in node.js
__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") // present with an AMD loader
);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../packages/francy-extension-browser/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/seedrandom/lib/xorwow.js":
/*!***********************************************************************!*\
  !*** /home/ubuntu/workspace/js/node_modules/seedrandom/lib/xorwow.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper
(function (global, module, define) {
  function XorGen(seed) {
    var me = this,
        strseed = ''; // Set up generator function.

    me.next = function () {
      var t = me.x ^ me.x >>> 2;
      me.x = me.y;
      me.y = me.z;
      me.z = me.w;
      me.w = me.v;
      return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
    };

    me.x = 0;
    me.y = 0;
    me.z = 0;
    me.w = 0;
    me.v = 0;

    if (seed === (seed | 0)) {
      // Integer seed.
      me.x = seed;
    } else {
      // String seed.
      strseed += seed;
    } // Mix in string seed, then discard an initial batch of 64 values.


    for (var k = 0; k < strseed.length + 64; k++) {
      me.x ^= strseed.charCodeAt(k) | 0;

      if (k == strseed.length) {
        me.d = me.x << 10 ^ me.x >>> 4;
      }

      me.next();
    }
  }

  function copy(f, t) {
    t.x = f.x;
    t.y = f.y;
    t.z = f.z;
    t.w = f.w;
    t.v = f.v;
    t.d = f.d;
    return t;
  }

  function impl(seed, opts) {
    var xg = new XorGen(seed),
        state = opts && opts.state,
        prng = function prng() {
      return (xg.next() >>> 0) / 0x100000000;
    };

    prng.double = function () {
      do {
        var top = xg.next() >>> 11,
            bot = (xg.next() >>> 0) / 0x100000000,
            result = (top + bot) / (1 << 21);
      } while (result === 0);

      return result;
    };

    prng.int32 = xg.next;
    prng.quick = prng;

    if (state) {
      if (_typeof(state) == 'object') copy(state, xg);

      prng.state = function () {
        return copy(xg, {});
      };
    }

    return prng;
  }

  if (module && module.exports) {
    module.exports = impl;
  } else if (__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return impl;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    this.xorwow = impl;
  }
})(this, ( false ? undefined : _typeof(module)) == 'object' && module, // present in node.js
__webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") // present with an AMD loader
);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../packages/francy-extension-browser/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/seedrandom/seedrandom.js":
/*!***********************************************************************!*\
  !*** /home/ubuntu/workspace/js/node_modules/seedrandom/seedrandom.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Copyright 2014 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
(function (pool, math) {
  //
  // The following constants are related to IEEE 754 limits.
  //
  // Detect the global object, even if operating in strict mode.
  // http://stackoverflow.com/a/14387057/265298
  var global = (0, eval)('this'),
      width = 256,
      // each RC4 output is 0 <= x < 256
  chunks = 6,
      // at least six RC4 outputs for each double
  digits = 52,
      // there are 52 significant digits in a double
  rngname = 'random',
      // rngname: name for Math.random and Math.seedrandom
  startdenom = math.pow(width, chunks),
      significance = math.pow(2, digits),
      overflow = significance * 2,
      mask = width - 1,
      nodecrypto; // node.js crypto module, initialized at the bottom.
  //
  // seedrandom()
  // This is the seedrandom function described above.
  //

  function seedrandom(seed, options, callback) {
    var key = [];
    options = options == true ? {
      entropy: true
    } : options || {}; // Flatten the seed string or build one from local entropy if needed.

    var shortseed = mixkey(flatten(options.entropy ? [seed, tostring(pool)] : seed == null ? autoseed() : seed, 3), key); // Use the seed to initialize an ARC4 generator.

    var arc4 = new ARC4(key); // This function returns a random double in [0, 1) that contains
    // randomness in every bit of the mantissa of the IEEE 754 value.

    var prng = function prng() {
      var n = arc4.g(chunks),
          // Start with a numerator n < 2 ^ 48
      d = startdenom,
          //   and denominator d = 2 ^ 48.
      x = 0; //   and no 'extra last byte'.

      while (n < significance) {
        // Fill up all significant digits by
        n = (n + x) * width; //   shifting numerator and

        d *= width; //   denominator and generating a

        x = arc4.g(1); //   new least-significant-byte.
      }

      while (n >= overflow) {
        // To avoid rounding up, before adding
        n /= 2; //   last byte, shift everything

        d /= 2; //   right using integer math until

        x >>>= 1; //   we have exactly the desired bits.
      }

      return (n + x) / d; // Form the number within [0, 1).
    };

    prng.int32 = function () {
      return arc4.g(4) | 0;
    };

    prng.quick = function () {
      return arc4.g(4) / 0x100000000;
    };

    prng.double = prng; // Mix the randomness into accumulated entropy.

    mixkey(tostring(arc4.S), pool); // Calling convention: what to return as a function of prng, seed, is_math.

    return (options.pass || callback || function (prng, seed, is_math_call, state) {
      if (state) {
        // Load the arc4 state from the given state if it has an S array.
        if (state.S) {
          copy(state, arc4);
        } // Only provide the .state method if requested via options.state.


        prng.state = function () {
          return copy(arc4, {});
        };
      } // If called as a method of Math (Math.seedrandom()), mutate
      // Math.random because that is how seedrandom.js has worked since v1.0.


      if (is_math_call) {
        math[rngname] = prng;
        return seed;
      } // Otherwise, it is a newer calling convention, so return the
      // prng directly.
      else return prng;
    })(prng, shortseed, 'global' in options ? options.global : this == math, options.state);
  }

  math['seed' + rngname] = seedrandom; //
  // ARC4
  //
  // An ARC4 implementation.  The constructor takes a key in the form of
  // an array of at most (width) integers that should be 0 <= x < (width).
  //
  // The g(count) method returns a pseudorandom integer that concatenates
  // the next (count) outputs from ARC4.  Its return value is a number x
  // that is in the range 0 <= x < (width ^ count).
  //

  function ARC4(key) {
    var t,
        keylen = key.length,
        me = this,
        i = 0,
        j = me.i = me.j = 0,
        s = me.S = []; // The empty key [] is treated as [0].

    if (!keylen) {
      key = [keylen++];
    } // Set up S using the standard key scheduling algorithm.


    while (i < width) {
      s[i] = i++;
    }

    for (i = 0; i < width; i++) {
      s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
      s[j] = t;
    } // The "g" method returns the next (count) outputs as one number.


    (me.g = function (count) {
      // Using instance members instead of closure state nearly doubles speed.
      var t,
          r = 0,
          i = me.i,
          j = me.j,
          s = me.S;

      while (count--) {
        t = s[i = mask & i + 1];
        r = r * width + s[mask & (s[i] = s[j = mask & j + t]) + (s[j] = t)];
      }

      me.i = i;
      me.j = j;
      return r; // For robust unpredictability, the function call below automatically
      // discards an initial batch of values.  This is called RC4-drop[256].
      // See http://google.com/search?q=rsa+fluhrer+response&btnI
    })(width);
  } //
  // copy()
  // Copies internal state of ARC4 to or from a plain object.
  //


  function copy(f, t) {
    t.i = f.i;
    t.j = f.j;
    t.S = f.S.slice();
    return t;
  }

  ; //
  // flatten()
  // Converts an object tree to nested arrays of strings.
  //

  function flatten(obj, depth) {
    var result = [],
        typ = _typeof(obj),
        prop;

    if (depth && typ == 'object') {
      for (prop in obj) {
        try {
          result.push(flatten(obj[prop], depth - 1));
        } catch (e) {}
      }
    }

    return result.length ? result : typ == 'string' ? obj : obj + '\0';
  } //
  // mixkey()
  // Mixes a string seed into a key that is an array of integers, and
  // returns a shortened string seed that is equivalent to the result key.
  //


  function mixkey(seed, key) {
    var stringseed = seed + '',
        smear,
        j = 0;

    while (j < stringseed.length) {
      key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
    }

    return tostring(key);
  } //
  // autoseed()
  // Returns an object for autoseeding, using window.crypto and Node crypto
  // module if available.
  //


  function autoseed() {
    try {
      var out;

      if (nodecrypto && (out = nodecrypto.randomBytes)) {
        // The use of 'out' to remember randomBytes makes tight minified code.
        out = out(width);
      } else {
        out = new Uint8Array(width);
        (global.crypto || global.msCrypto).getRandomValues(out);
      }

      return tostring(out);
    } catch (e) {
      var browser = global.navigator,
          plugins = browser && browser.plugins;
      return [+new Date(), global, plugins, global.screen, tostring(pool)];
    }
  } //
  // tostring()
  // Converts an array of charcodes to a string
  //


  function tostring(a) {
    return String.fromCharCode.apply(0, a);
  } //
  // When seedrandom.js is loaded, we immediately mix a few bits
  // from the built-in RNG into the entropy pool.  Because we do
  // not want to interfere with deterministic PRNG state later,
  // seedrandom will not call math.random on its own again after
  // initialization.
  //


  mixkey(math.random(), pool); //
  // Nodejs and AMD support: export the implementation as a module using
  // either convention.
  //

  if (( false ? undefined : _typeof(module)) == 'object' && module.exports) {
    module.exports = seedrandom; // When in node.js, try using crypto package for autoseeding.

    try {
      nodecrypto = __webpack_require__(/*! crypto */ 1);
    } catch (ex) {}
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return seedrandom;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } // End anonymous scope, and pass initial values.

})([], // pool: entropy pool starts empty
Math // math: package containing random, pow, and seedrandom
);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../packages/francy-extension-browser/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../francy/src/style/index.css":
/*!*******************************************************************************************************************************************!*\
  !*** /home/ubuntu/workspace/js/node_modules/style-loader!/home/ubuntu/workspace/js/node_modules/css-loader!../francy/src/style/index.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!./index.css */ "../../node_modules/css-loader/index.js!../francy/src/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../../node_modules/style-loader/lib/addStyles.js":
/*!****************************************************************************!*\
  !*** /home/ubuntu/workspace/js/node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../../node_modules/style-loader/lib/urls.js":
/*!***********************************************************************!*\
  !*** /home/ubuntu/workspace/js/node_modules/style-loader/lib/urls.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "../francy-core/index.js":
/*!*******************************!*\
  !*** ../francy-core/index.js ***!
  \*******************************/
/*! exports provided: Configuration, Decorators, Components, Logger, Utilities, RenderingManager, RENDERING_EVENTS, DataHandler, Observable, Callback, BaseRenderer, CompositeRenderer, Renderer, Graph, GraphOperations, Menu, Modal, AboutModal, RequiredArgsModal, ConfirmModal, Tooltip, ContextMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_util_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/util/configuration */ "../francy-core/src/util/configuration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _src_util_configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"]; });

/* harmony import */ var _src_decorator_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/decorator/factory */ "../francy-core/src/decorator/factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Decorators", function() { return _src_decorator_factory__WEBPACK_IMPORTED_MODULE_1__["Decorators"]; });

/* harmony import */ var _src_component_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/component/factory */ "../francy-core/src/component/factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Components", function() { return _src_component_factory__WEBPACK_IMPORTED_MODULE_2__["Components"]; });

/* harmony import */ var _src_util_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/util/logger */ "../francy-core/src/util/logger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _src_util_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"]; });

/* harmony import */ var _src_util_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/util/utilities */ "../francy-core/src/util/utilities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utilities", function() { return _src_util_utilities__WEBPACK_IMPORTED_MODULE_4__["Utilities"]; });

/* harmony import */ var _src_render_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/render/manager */ "../francy-core/src/render/manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderingManager", function() { return _src_render_manager__WEBPACK_IMPORTED_MODULE_5__["RenderingManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RENDERING_EVENTS", function() { return _src_render_manager__WEBPACK_IMPORTED_MODULE_5__["RENDERING_EVENTS"]; });

/* harmony import */ var _src_util_data_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/util/data-handler */ "../francy-core/src/util/data-handler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataHandler", function() { return _src_util_data_handler__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_util_observable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/util/observable */ "../francy-core/src/util/observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _src_util_observable__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_render_callback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/render/callback */ "../francy-core/src/render/callback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Callback", function() { return _src_render_callback__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_render_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/render/base */ "../francy-core/src/render/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseRenderer", function() { return _src_render_base__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _src_render_composite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/render/composite */ "../francy-core/src/render/composite.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompositeRenderer", function() { return _src_render_composite__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_render_renderer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/render/renderer */ "../francy-core/src/render/renderer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return _src_render_renderer__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _src_render_graph_base__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/render/graph/base */ "../francy-core/src/render/graph/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Graph", function() { return _src_render_graph_base__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _src_render_graph_operations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/render/graph/operations */ "../francy-core/src/render/graph/operations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphOperations", function() { return _src_render_graph_operations__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _src_render_menu_base__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/render/menu/base */ "../francy-core/src/render/menu/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _src_render_menu_base__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _src_render_modal_base__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/render/modal/base */ "../francy-core/src/render/modal/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _src_render_modal_base__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _src_render_modal_about__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/render/modal/about */ "../francy-core/src/render/modal/about.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutModal", function() { return _src_render_modal_about__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _src_render_modal_required__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/render/modal/required */ "../francy-core/src/render/modal/required.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequiredArgsModal", function() { return _src_render_modal_required__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _src_render_modal_confirm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/render/modal/confirm */ "../francy-core/src/render/modal/confirm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmModal", function() { return _src_render_modal_confirm__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _src_render_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/render/tooltip */ "../francy-core/src/render/tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _src_render_tooltip__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _src_render_menu_context__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/render/menu/context */ "../francy-core/src/render/menu/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextMenu", function() { return _src_render_menu_context__WEBPACK_IMPORTED_MODULE_20__["default"]; });























/***/ }),

/***/ "../francy-core/node_modules/lodash.isequal/index.js":
/*!***********************************************************!*\
  !*** ../francy-core/node_modules/lodash.isequal/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used to compose bitmasks for value comparisons. */

var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/** Detect free variable `global` from Node.js. */

var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Detect free variable `exports`. */

var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */

function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];

    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */


function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */


function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }

  return false;
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */


function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */


function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function cacheHas(cache, key) {
  return cache.has(key);
}
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */


function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */


function mapToArray(map) {
  var index = -1,
      result = Array(map.size);
  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */


function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */


function setToArray(set) {
  var index = -1,
      result = Array(set.size);
  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}
/** Used for built-in method references. */


var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */

var coreJsData = root['__core-js_shared__'];
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */


var nativeObjectToString = objectProto.toString;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    _Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);
/* Built-in method references that are verified to be native. */

var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */


function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */


function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */

function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();

  while (++index < length) {
    this.add(values[index]);
  }
}
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */


function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);

  return this;
}
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */


function setCacheHas(value) {
  return this.__data__.has(value);
} // Add methods to `SetCache`.


SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function stackGet(key) {
  return this.__data__.get(key);
}
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function stackHas(key) {
  return this.__data__.has(key);
}
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */


function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */


function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */


function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */


function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */


function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }

  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */


function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }

    objIsArr = true;
    objIsObj = false;
  }

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }

  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }

  if (!isSameTag) {
    return false;
  }

  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */


function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */


function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */


function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */


function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  } // Assume cyclic values are equal.


  var stacked = stack.get(array);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;
  stack.set(array, other);
  stack.set(other, array); // Ignore non-index properties.

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }

    if (compared !== undefined) {
      if (compared) {
        continue;
      }

      result = false;
      break;
    } // Recursively compare arrays (susceptible to call stack limits).


    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }

  stack['delete'](array);
  stack['delete'](other);
  return result;
}
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */


function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }

      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }

      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      } // Assume cyclic values are equal.


      var stacked = stack.get(object);

      if (stacked) {
        return stacked == other;
      }

      bitmask |= COMPARE_UNORDERED_FLAG; // Recursively compare objects (susceptible to call stack limits).

      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }

  }

  return false;
}
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */


function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }

  var index = objLength;

  while (index--) {
    var key = objProps[index];

    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  } // Assume cyclic values are equal.


  var stacked = stack.get(object);

  if (stacked && stack.get(other)) {
    return stacked == other;
  }

  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;

  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    } // Recursively compare objects (susceptible to call stack limits).


    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }

    skipCtor || (skipCtor = key == 'constructor');
  }

  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor; // Non `Object` object instances with different constructors are not equal.

    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }

  stack['delete'](object);
  stack['delete'](other);
  return result;
}
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */


function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */


function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */


var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }

  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;

        case mapCtorString:
          return mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag;

        case weakMapCtorString:
          return weakMapTag;
      }
    }

    return result;
  };
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */


function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */


function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */


function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */


function objectToString(value) {
  return nativeObjectToString.call(value);
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */


function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */


function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */


var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */

function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */


var isBuffer = nativeIsBuffer || stubFalse;
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */

function isEqual(value, other) {
  return baseIsEqual(value, other);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */


function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */


function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return value != null && _typeof(value) == 'object';
}
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */


var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */

function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */


function stubArray() {
  return [];
}
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */


function stubFalse() {
  return false;
}

module.exports = isEqual;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../francy-extension-browser/node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../francy-extension-browser/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../francy-core/src/component/base.js":
/*!********************************************!*\
  !*** ../francy-core/src/component/base.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseComponent; });
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/logger */ "../francy-core/src/util/logger.js");
/* harmony import */ var _decorator_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator/factory */ "../francy-core/src/decorator/factory.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * Base is the base of renderers and contains multiple utility methods.
 * This is an abstract class, and all subclasses must implement a {Component.initialize} method.
 * {Component.initialize} is a simple method that must implement a check on whether the dependency is available or not. 
 * Must throwan {Error} if dependency is not available.
 * 
 * A {Component} is a dependency of {Francy} that can be optional or not.
 * Optional {Components} are dependencies that enhance the whole framework experience, 
 * e.g. {MathJaxComponent} which provides rich tex.
 * Mandatory {Components} are components required by the framework and they have to be present, e.g. d3.
 * @abstract
 */

var BaseComponent =
/*#__PURE__*/
function () {
  /**
   * Base constructor
   * 
   * @typedef {Object} Options
   * @property {Boolean} verbose prints extra log information to console.log, default false
   * @property {Boolean} mandatory whether the component is mandatory or optional
   */
  function BaseComponent() {
    var mandatory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, BaseComponent);

    if (this.initialize === undefined || typeof this.initialize !== 'function') {
      throw new TypeError('Must override [initialize()] method!');
    }
    /**
     * Stores whether this component is available or not
     * @type {boolean]
     */


    this.available = false;
    /**
     * Stores the options for this component
     * @typedef {object} options
     * @property {boolean} options.mandatory whether the component is mandatory or optional
     */

    this.options = {};
    this.settings({
      mandatory: mandatory
    }); // run initialization

    var decorator = _decorator_factory__WEBPACK_IMPORTED_MODULE_1__["Decorators"].Error.wrap(this._initialize).withContext(this).onErrorThrow(mandatory).onErrorExec(this._onError);

    if (delay) {
      setTimeout(function () {
        return decorator.handle();
      }, 0);
    } else {
      decorator.handle();
    }
  }
  /**
   * Saves the settings in an internal options object.
   * 
   * @param {object} options
   * @property {boolean} options.mandatory whether the component is mandatory or optional
   * @returns {object} this instance
   * @public
   */


  _createClass(BaseComponent, [{
    key: "settings",
    value: function settings(_ref) {
      var mandatory = _ref.mandatory;
      this.options.mandatory = mandatory || this.options.mandatory;
      return this;
    }
    /**
     * Returns true if the component is available, otherwise false
     * @type {boolean}
     * @public
     */

  }, {
    key: "_initialize",

    /**
     * This is a helper method to handle component initialization.
     * @private
     */
    value: function _initialize() {
      this.initialize();
      this.available = true;
    }
    /**
     * This is a helper method to handle error states
     * @private
     */

  }, {
    key: "_onError",
    value: function _onError() {
      if (this.options.mandatory) {
        _util_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].error("The component [".concat(this.constructor.name, "] is mandatory and could not be initialized... cannot proceed!"));
      } else {
        _util_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].info("The component [".concat(this.constructor.name, "] could not be initialized... continuing..."));
      }

      this.available = false;
    }
  }, {
    key: "isAvailable",
    get: function get() {
      return this.available;
    }
  }]);

  return BaseComponent;
}();



/***/ }),

/***/ "../francy-core/src/component/d3.js":
/*!******************************************!*\
  !*** ../francy-core/src/component/d3.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return D3Component; });
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/logger */ "../francy-core/src/util/logger.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "../francy-core/src/component/base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/* global d3 */

/**
 * This {Component} class is used to check whether d3 is available or not.
 * d3 is mandatory, as it used d3 to implement the basic graphics for {Francy}.
 * 
 * @extends {BaseComponent}
 */

var D3Component =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(D3Component, _BaseComponent);

  /**
   * Base constructor
   * 
   * @typedef {Object} Options
   * @property {Boolean} verbose prints extra log information to console.log, default false
   * @property {Boolean} mandatory whether the component is mandatory or optional
   */
  function D3Component() {
    var mandatory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, D3Component);

    return _possibleConstructorReturn(this, _getPrototypeOf(D3Component).call(this, mandatory, delay));
  }
  /**
   * Handles d3 initialization and checks whether the dependency is available or not.
   * @public
   */


  _createClass(D3Component, [{
    key: "initialize",
    value: function initialize() {
      if (!d3) {
        throw new Error('D3 is not imported and Francy won\'t work without it... please import D3 v5+ library.');
      }

      _util_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].debug('D3 is available...');
    }
  }]);

  return D3Component;
}(_base__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "../francy-core/src/component/factory.js":
/*!***********************************************!*\
  !*** ../francy-core/src/component/factory.js ***!
  \***********************************************/
/*! exports provided: Components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Components", function() { return Components; });
/* harmony import */ var _d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./d3 */ "../francy-core/src/component/d3.js");
/* harmony import */ var _mathjax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathjax */ "../francy-core/src/component/mathjax.js");
/* harmony import */ var _jupyter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jupyter */ "../francy-core/src/component/jupyter.js");



/**
 * {Components} is a singleton and runs before everything else starting each component
 * 
 * @example Components.D3.isAvailable
 * @example Components.Jupyter.isAvailable
 * @example Components.MathJax.isAvailable
 * @typedef {Object} Components
 * @property {D3Component} D3 {Component} instance
 * @property {MathJaxComponent} MathJax {Component} instance
 * @property {JupyterComponent} Jupyter {Component} instance
 * @public
 */

var Components = {
  D3: new _d3__WEBPACK_IMPORTED_MODULE_0__["default"](true, true),
  MathJax: new _mathjax__WEBPACK_IMPORTED_MODULE_1__["default"](false, true),
  Jupyter: new _jupyter__WEBPACK_IMPORTED_MODULE_2__["default"](false, false)
};

/***/ }),

/***/ "../francy-core/src/component/jupyter.js":
/*!***********************************************!*\
  !*** ../francy-core/src/component/jupyter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JupyterComponent; });
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/logger */ "../francy-core/src/util/logger.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "../francy-core/src/component/base.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/* global Jupyter */

/**
 * This {Component} class is used to check whether jupyter is available or not.
 * Jupyter is optional, as {Francy} can run without it.
 * 
 * @extends {BaseComponent}
 */

var JupyterComponent =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(JupyterComponent, _BaseComponent);

  /**
   * Base constructor
   * 
   * @typedef {Object} Options
   * @property {Boolean} verbose prints extra log information to console.log, default false
   * @property {Boolean} mandatory whether the component is mandatory or optional
   */
  function JupyterComponent() {
    var mandatory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, JupyterComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(JupyterComponent).call(this, mandatory, delay));
  }
  /**
   * Handles Jupyter initialization and checks whether the dependency is available or not.
   * @public
   */


  _createClass(JupyterComponent, [{
    key: "initialize",
    value: function initialize() {
      if (!Jupyter) {
        throw new Error('This is not Jupyter is not imported and Francy won\'t work without it... please import D3 v5+ library.');
      }

      _util_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].debug('Jupyter is available...');
    }
  }]);

  return JupyterComponent;
}(_base__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "../francy-core/src/component/mathjax.js":
/*!***********************************************!*\
  !*** ../francy-core/src/component/mathjax.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MathJaxComponent; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "../francy-core/src/component/base.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/logger */ "../francy-core/src/util/logger.js");
/* harmony import */ var _decorator_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorator/factory */ "../francy-core/src/decorator/factory.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/* global MathJax d3 */

/**
 * This {Component} class is used to check whether MathJax is available or not.
 * MathJax is optional, as {Francy} can run without it.
 * 
 * @extends {BaseComponent}
 */

var MathJaxComponent =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(MathJaxComponent, _BaseComponent);

  /**
   * Base constructor
   * 
   * @typedef {Object} Options
   * @property {Boolean} verbose prints extra log information to console.log, default false
   * @property {Boolean} mandatory whether the component is mandatory or optional
   */
  function MathJaxComponent() {
    var mandatory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, MathJaxComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(MathJaxComponent).call(this, mandatory, delay));
  }
  /**
   * Handles MathJax initialization and checks whether the dependency is available or not.
   * @public
   */


  _createClass(MathJaxComponent, [{
    key: "initialize",
    value: function initialize() {
      MathJax.Hub.Config({
        showMathMenu: false,
        skipStartupTypeset: true,
        tex2jax: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['\\[', '\\]']],
          processEscapes: true,
          processEnvironments: true
        },
        MathML: {
          extensions: ['content-mathml.js']
        },
        displayAlign: 'center',
        'HTML-CSS': {
          availableFonts: [],
          imageFont: null,
          preferredFont: null,
          font: 'STIX-Web',
          webFont: 'STIX-Web',
          styles: {
            '.MathJax_Display': {
              'margin': 0
            }
          },
          linebreaks: {
            automatic: true
          }
        },
        'SVG': {
          availableFonts: [],
          imageFont: null,
          preferredFont: null,
          font: 'STIX-Web',
          webFont: 'STIX-Web',
          styles: {
            '.MathJax_Display': {
              'margin': 0
            }
          },
          linebreaks: {
            automatic: true
          }
        }
      });
      var safeOnNewMathElement = _decorator_factory__WEBPACK_IMPORTED_MODULE_2__["Decorators"].Error.wrap(onNewMathElement).withContext(this).onErrorThrow(false);
      MathJax.Hub.Register.MessageHook('New Math', function (id) {
        return safeOnNewMathElement.handle(id);
      });

      function onNewMathElement(id) {
        if (id && id.length > 1) {
          var mathJaxElement = d3.select("#".concat(id[1], "-Frame"));
          var svgMathJaxElement = mathJaxElement.select('svg');
          var g = d3.select(mathJaxElement.node().parentNode.parentNode);

          if (svgMathJaxElement.node()) {
            // set same font-size
            svgMathJaxElement.style('font-size', g.select('text.francy-label').style('font-size')); // re-center component

            var width = svgMathJaxElement.node().width.baseVal.value;
            var height = svgMathJaxElement.node().height.baseVal.value;
            svgMathJaxElement.attr('x', -width / 2);
            svgMathJaxElement.attr('y', -height / 2);
            g.select('text.francy-label').remove();
            g.append(function () {
              return svgMathJaxElement.node();
            });
          }
        }
      }

      MathJax.Hub.Configured();
      _util_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].debug('MathJax is available...');
    }
  }]);

  return MathJaxComponent;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "../francy-core/src/decorator/data.js":
/*!********************************************!*\
  !*** ../francy-core/src/decorator/data.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataDecorator; });
/* harmony import */ var _util_exception__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/exception */ "../francy-core/src/util/exception.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * This {Decorator} class is used to check whether a property is present in the data before executing a method.
 */

var DataDecorator =
/*#__PURE__*/
function () {
  /**
   * Default constructor
   */
  function DataDecorator() {
    _classCallCheck(this, DataDecorator);
  }
  /**
   * This function can be used as a decorator to intercept a method and, based on {this.data},
   * whether to execute it or not.
   * 
   * @example @Decorators.Data.requires('canvas.graph')
   * @param {string} properties - the properties separateed by a dot, e.g. 'data.property'
   * @public
   */


  _createClass(DataDecorator, [{
    key: "requires",
    value: function requires(properties) {
      var self = this;
      return function decorator(target, name, descriptor) {
        var oldValue = descriptor.value;

        descriptor.value = function () {
          if (!self._hasData(self._getProperty(this.data, properties))) {
            return Promise.reject(new _util_exception__WEBPACK_IMPORTED_MODULE_0__["Exception"]("No data here [".concat(properties, "], nothing to render... continuing...")));
          }

          return oldValue.apply(this, arguments);
        };

        return descriptor;
      };
    }
    /**
     * This function can be used as a decorator to intercept a method and, based on {this.data},
     * execute it if the property is set to true otherwise rejects the promise.
     * 
     * @example @Decorators.Data.enabled('canvas.texTypesetting')
     * @param {string} properties - the properties separateed by a dot, e.g. 'data.property'
     * @public
     */

  }, {
    key: "enabled",
    value: function enabled(properties) {
      var self = this;
      return function decorator(target, name, descriptor) {
        var oldValue = descriptor.value;

        descriptor.value = function () {
          if (!self._getProperty(this.data, properties)) {
            return Promise.reject(new _util_exception__WEBPACK_IMPORTED_MODULE_0__["Exception"]("Property disabled [".concat(properties, "], skip execution... continuing...")));
          }

          return oldValue.apply(this, arguments);
        };

        return descriptor;
      };
    }
    /**
     * Helper method to iterate over an object
     * @param {Object} obj - the object to search the property for
     * @param {strin} propertyPath - property separated by dot
     * @private
     */

  }, {
    key: "_getProperty",
    value: function _getProperty(obj, propertyPath) {
      var tmp = obj;

      if (tmp && propertyPath) {
        var properties = propertyPath.split('.');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = properties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var property = _step.value;

            if (!tmp.hasOwnProperty(property)) {
              tmp = undefined;
              break;
            } else {
              tmp = tmp[property];
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      return tmp;
    }
    /**
     * Helper method to check whether a property has data
     * @param {Object} obj - the object to check
     * @private
     */

  }, {
    key: "_hasData",
    value: function _hasData(obj) {
      return obj && (obj instanceof Array && obj.length || obj instanceof Object && Object.values(obj).length);
    }
  }]);

  return DataDecorator;
}();



/***/ }),

/***/ "../francy-core/src/decorator/error.js":
/*!*********************************************!*\
  !*** ../francy-core/src/decorator/error.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorDecorator; });
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/logger */ "../francy-core/src/util/logger.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * This {Decorator} class is used to safelly execute methods within a specified context.
 */

var ErrorDecorator =
/*#__PURE__*/
function () {
  /**
   * Default constructor
   * @example Decorators.Error.wrap(function(){}).withContext(this).onErrorThrow(false).onErrorExec(function(){}).handle()
   */
  function ErrorDecorator() {
    _classCallCheck(this, ErrorDecorator);

    /**
     * Stores the on error callbacks
     * @type {function[]}
     */
    this.onErrorFns = [];
    /**
     * Stores the context of execution
     * @type {Object}
     */

    this.context = undefined;
    /**
     * Stores the function to execute
     * @type {function}
     */

    this.function = undefined;
    /**
     * Stores the flag for re-throw or not
     * @type {boolean}
     */

    this.throw = false;
  }
  /**
   * This method stores the function to be executed safelly.
   * 
   * @public
   * @param {function} fn - a function to wrap
   * @return {this} instance
   */


  _createClass(ErrorDecorator, [{
    key: "wrap",
    value: function wrap(fn) {
      if (typeof fn !== 'function') throw Error("[".concat(fn, "] is not a function!"));
      this.function = fn;
      return this;
    }
    /**
     * This method stores the context where the wrapped function will run.
     * 
     * @public
     * @param {Object} ctx - the context where this function will run
     * @return {this} instance
     */

  }, {
    key: "withContext",
    value: function withContext(ctx) {
      this.context = ctx;
      return this;
    }
    /**
     * This method stores the function to execute in case an error occurs running 
     * the wrapped function.
     * 
     * @public
     * @param {function} fn - a function to execute if an error occurs
     * @return {this} instance
     */

  }, {
    key: "onErrorExec",
    value: function onErrorExec(fn) {
      if (typeof fn === 'function') {
        this.onErrorFns.push(fn);
      }

      return this;
    }
    /**
     * This method stores whether we should propagte the error if the function 
     * fails to execute, or if the error must be handled safelly.
     * 
     * @public
     * @param {boolean} t - true if the error must be propagated, otherwise false. 
     * Defaults to false.
     * @return {this} instance
     */

  }, {
    key: "onErrorThrow",
    value: function onErrorThrow(t) {
      if (typeof t === 'boolean') {
        this.throw = t;
      }

      return this;
    }
    /**
     * This method will execute the wrapped function.
     * 
     * @public
     */

  }, {
    key: "handle",
    value: function handle() {
      var _this = this;

      var result = undefined;

      try {
        result = this.function.apply(this.context, arguments);

        if (result && typeof result.then === 'function') {
          result = result.catch(function (error) {
            _this._logEntry(error);

            _this._runOnError();
          }).then(function (result) {
            return result;
          });
        }
      } catch (error) {
        this._logEntry(error);

        this._runOnError();

        if (this.throw) {
          throw error;
        }
      }

      return result;
    }
    /**
     * Helper method to handle error conditions
     * @private
     */

  }, {
    key: "_runOnError",
    value: function _runOnError() {
      var _this2 = this;

      this.onErrorFns.forEach(function (fn) {
        try {
          fn.call(_this2.context);
        } catch (error) {
          _this2._logEntry(error);

          if (_this2.throw) {
            throw error;
          }
        }
      });
    }
    /**
     * Helper method to log
     * @private
     */

  }, {
    key: "_logEntry",
    value: function _logEntry(error) {
      _util_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].info("We can't do anything about this! An error occurred: [".concat(error, "]"));
    }
  }]);

  return ErrorDecorator;
}();



/***/ }),

/***/ "../francy-core/src/decorator/factory.js":
/*!***********************************************!*\
  !*** ../francy-core/src/decorator/factory.js ***!
  \***********************************************/
/*! exports provided: Decorators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decorators", function() { return Decorators; });
/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize */ "../francy-core/src/decorator/initialize.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader */ "../francy-core/src/decorator/loader.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "../francy-core/src/decorator/error.js");
/* harmony import */ var _highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight */ "../francy-core/src/decorator/highlight.js");
/* harmony import */ var _jupyter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jupyter */ "../francy-core/src/decorator/jupyter.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "../francy-core/src/decorator/data.js");






/**
 * {Decorators} is a singleton and runs before everything else
 * 
 * @example \@Decorators.Data.requires('canvas.graph')
 * @example Decorators.Loader.withContext(this).show(); Decorators.Loader.withContext(this).hide();
 * @example Decorators.Jupyter.registerKeyboardEvents(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);
 * @example Decorators.Highlight.syntax(JSON.stringify(this.data.canvas, null, 2));
 * @example \@Decorators.Initializer.initialize();
 * @example Decorators.Error.wrap(function(){}).withContext(this).onErrorThrow(false).onErrorExec(function(){}).handle()
 * 
 * @typedef {Object} Decorators
 * @property {DataDecorator} Data {Decorator} instance
 * @property {LoaderDecorator} Loader {Decorator} instance
 * @property {InitializerDecorator} Initializer {Decorator} instance
 * @property {ErrorDecorator} Error {Decorator} instance
 * @property {HighlightDecorator} Highlight {Decorator} instance
 * @property {JupyterDecorator} Jupyter {Decorator} instance
 * @public
 */

var Decorators = {
  get Data() {
    return new _data__WEBPACK_IMPORTED_MODULE_5__["default"]();
  },

  get Loader() {
    return new _loader__WEBPACK_IMPORTED_MODULE_1__["default"]();
  },

  get Initializer() {
    return new _initialize__WEBPACK_IMPORTED_MODULE_0__["default"]();
  },

  get Error() {
    return new _error__WEBPACK_IMPORTED_MODULE_2__["default"]();
  },

  get Highlight() {
    return new _highlight__WEBPACK_IMPORTED_MODULE_3__["default"]();
  },

  get Jupyter() {
    return new _jupyter__WEBPACK_IMPORTED_MODULE_4__["default"]();
  }

};

/***/ }),

/***/ "../francy-core/src/decorator/highlight.js":
/*!*************************************************!*\
  !*** ../francy-core/src/decorator/highlight.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HighlightDecorator; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * This {Decorator} class is used to highlight some json and js syntax.
 */
var HighlightDecorator =
/*#__PURE__*/
function () {
  /**
   * Default constructor
   * @example Decorators.Highlight.syntax(JSON.stringify(this.data.canvas, null, 2))
   */
  function HighlightDecorator() {
    _classCallCheck(this, HighlightDecorator);
  }
  /**
   * This method handles a string and returns an html formated string with colors
   * 
   * credits here: https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript#answer-7220510
   * @param {string} json - the json string
   * @public
   */


  _createClass(HighlightDecorator, [{
    key: "syntax",
    value: function syntax(json) {
      if (!json) return '';
      json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
        var cls = 'number';

        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'key';
          } else {
            cls = 'string';
          }
        } else if (/true|false/.test(match)) {
          cls = 'boolean';
        } else if (/null/.test(match)) {
          cls = 'null';
        }

        return "<span class=\"".concat(cls, "\">").concat(match, "</span>");
      });
    }
  }]);

  return HighlightDecorator;
}();



/***/ }),

/***/ "../francy-core/src/decorator/initialize.js":
/*!**************************************************!*\
  !*** ../francy-core/src/decorator/initialize.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InitializerDecorator; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * This {Decorator} class is used to handle initialization methods before the execution of another method.
 */
var InitializerDecorator =
/*#__PURE__*/
function () {
  /**
  * Default constructor
  * @example \@Decorators.Initializer.initialize()
  */
  function InitializerDecorator() {
    _classCallCheck(this, InitializerDecorator);
  }
  /**
   * This function can be used as a decorator to intercept a method and execute the initialize method before.
   * 
   * @public
   */


  _createClass(InitializerDecorator, [{
    key: "initialize",
    value: function initialize() {
      return function (target, key, descriptor) {
        var oldValue = descriptor.value;

        descriptor.value = function () {
          this.initialize();
          return oldValue.apply(this, arguments);
        };

        return descriptor;
      };
    }
  }]);

  return InitializerDecorator;
}();



/***/ }),

/***/ "../francy-core/src/decorator/jupyter.js":
/*!***********************************************!*\
  !*** ../francy-core/src/decorator/jupyter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JupyterDecorator; });
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/logger */ "../francy-core/src/util/logger.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/* global Jupyter */

/**
 * This {Decorator} class is used to handle Jupyter functions.
 */

var JupyterDecorator =
/*#__PURE__*/
function () {
  /**
   * Default constructor
   * @example Decorators.Jupyter.registerKeyboardEvents(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);
   */
  function JupyterDecorator() {
    _classCallCheck(this, JupyterDecorator);
  }
  /**
   * This method register a class or classes on Jupyter keyboard_manager events
   * 
   * @param {string[]} classes - an Array of css classes to add on Jupyter keyboard_manager events
   * @public
   */


  _createClass(JupyterDecorator, [{
    key: "registerKeyboardEvents",
    value: function registerKeyboardEvents(classes) {
      // disable keyboard shortcuts in Jupyter for specific css classed elements
      if (!classes) return;

      try {
        classes.map(function (c) {
          Jupyter.keyboard_manager.register_events(c);
        });
      } catch (e) {
        if (e.name === 'ReferenceError') {
          _util_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].info('It seems we\'re not running on Jupyter, cannot register events... continuing...');
        } else {
          _util_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].warn("We can't do anything about this! An error occurred: [".concat(e, "]"));
        }
      }
    }
  }]);

  return JupyterDecorator;
}();



/***/ }),

/***/ "../francy-core/src/decorator/loader.js":
/*!**********************************************!*\
  !*** ../francy-core/src/decorator/loader.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoaderDecorator; });
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/logger */ "../francy-core/src/util/logger.js");
/* harmony import */ var _util_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/utilities */ "../francy-core/src/util/utilities.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/* global d3 */

/**
 * This {Decorator} class is used to show / hide a loader on {Francy}.
 */

var LoaderDecorator =
/*#__PURE__*/
function () {
  /**
   * Default Constructor
   * Decorators.Loader.withContext(this).show(); Decorators.Loader.withContext(this).hide();
   */
  function LoaderDecorator() {
    _classCallCheck(this, LoaderDecorator);

    /**
     * Stores the loader ID
     * @type {string}
     */
    this.id = _util_utilities__WEBPACK_IMPORTED_MODULE_1__["Utilities"].generateId();
    /**
     * Stores the loader context
     * @type {Object}
     */

    this.context = undefined;
    /**
     * Stores the loader element
     * @type {Object}
     */

    this.element = undefined;
  }
  /**
   * This method stores the context where the loader will run.
   * 
   * @public
   * @param {Object} ctx - the context where this function will run
   * @return {this} instance
   */


  _createClass(LoaderDecorator, [{
    key: "withContext",
    value: function withContext(ctx) {
      this.context = ctx;

      try {
        this.element = d3.select("a.loader#Loader-".concat(ctx.data.canvas ? ctx.data.canvas.id : ctx.options.appendTo.data.canvas.id));
      } catch (e) {
        _util_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].info("We can't do anything about this! An error occurred: ".concat(e));
      }

      return this;
    }
    /**
    * This method shows the loader on the screen.
    * 
    * @public
    */

  }, {
    key: "show",
    value: function show() {
      if (this.element && this.element.data()[0]) {
        this.element.data()[0][this.id] = true;
        this.element.style('visibility', 'visible');
      }

      return this;
    }
    /**
    * This method hides the loader on the screen.
    * 
    * @public
    */

  }, {
    key: "hide",
    value: function hide() {
      if (this.element && this.element.data()[0]) {
        delete this.element.data()[0][this.id]; // hide only if no more loaders present

        if (Object.values(this.element.data()[0]).length === 0) {
          this.element.style('visibility', 'hidden');
        }
      }

      return this;
    }
  }]);

  return LoaderDecorator;
}();



/***/ }),

/***/ "../francy-core/src/render/base.js":
/*!*****************************************!*\
  !*** ../francy-core/src/render/base.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseRenderer; });
/* harmony import */ var _util_data_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/data-handler */ "../francy-core/src/util/data-handler.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/logger */ "../francy-core/src/util/logger.js");
/* harmony import */ var _util_exception__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/exception */ "../francy-core/src/util/exception.js");
/* harmony import */ var _decorator_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorator/factory */ "../francy-core/src/decorator/factory.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/* global d3 */

/**
 * Base is the base of renderers and contains multiple utility methods.
 * 
 * @extends {DataHandler}
 */

var BaseRenderer =
/*#__PURE__*/
function (_DataHandler) {
  _inherits(BaseRenderer, _DataHandler);

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   */
  function BaseRenderer(_ref) {
    var _this;

    var _ref$appendTo = _ref.appendTo,
        appendTo = _ref$appendTo === void 0 ? 'body' : _ref$appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, BaseRenderer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseRenderer).call(this));
    /**
     * @typedef {Object} Options
     * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
     * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
     */

    _this.options = undefined;

    _this.settings({
      appendTo: appendTo,
      callbackHandler: callbackHandler
    });

    return _this;
  }
  /**
   * Saves the settings in an internal options object.
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   * @returns {object} this instance
   * @public
   */


  _createClass(BaseRenderer, [{
    key: "settings",
    value: function settings(_ref2) {
      var appendTo = _ref2.appendTo,
          callbackHandler = _ref2.callbackHandler;
      this.options = this.options || {};

      if (!this.options.callbackHandler && !callbackHandler) {
        throw new Error('A Callback Handler must be provided! This will be used to trigger events from the graphics produced...');
      }

      if (!this.options.appendTo && !appendTo) {
        throw new Error('Missing an element or id to append the graphics to!');
      }

      if (typeof appendTo === 'string') {
        appendTo = {
          element: d3.select(appendTo)
        };
      }

      this.options.appendTo = appendTo || this.options.appendTo;
      this.options.callbackHandler = callbackHandler || this.options.callbackHandler;
      return this;
    }
    /**
     * Returns the parent element of this class
     * 
     * @return {object} a d3 object
     * @public
     */

  }, {
    key: "handlePromise",

    /**
     * Generic Promise handler.
     * This will show the Loader/Spinner on the application while processing.
     * 
     * @param {Promise} promise - a promise to execute
     * @return {Object} the result of the promise
     * @public
     */
    value: function handlePromise(promise) {
      var loader = _decorator_factory__WEBPACK_IMPORTED_MODULE_3__["Decorators"].Loader.withContext(this).show();
      return promise.then(function (data) {
        return data;
      }).catch(function (error) {
        return BaseRenderer.handleErrors(error);
      }).finally(function () {
        return loader.hide();
      });
    }
  }, {
    key: "parent",
    get: function get() {
      return this.options.appendTo.element;
    }
    /**
     * Returns the parent class of this class
     * 
     * @return {Renderer} the {Renderer} or {Composite} parent of this class
     * @public
     */

  }, {
    key: "parentClass",
    get: function get() {
      return this.options.appendTo;
    }
    /**
     * Generic error handler.
     * Will log the error and rethrow if error is unknown.
     * 
     * @param {Error} error - an error instance
     * @public
     */

  }], [{
    key: "handleErrors",
    value: function handleErrors(error) {
      if (error instanceof _util_exception__WEBPACK_IMPORTED_MODULE_2__["Exception"]) {
        // well, most of these are just informative
        _util_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].debug(error.message);
        return;
      }

      _util_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].error(error.message);
      throw error;
    }
  }]);

  return BaseRenderer;
}(_util_data_handler__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "../francy-core/src/render/callback.js":
/*!*********************************************!*\
  !*** ../francy-core/src/render/callback.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CallbackHandler; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "../francy-core/src/render/base.js");
/* harmony import */ var _modal_required__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/required */ "../francy-core/src/render/modal/required.js");
/* harmony import */ var _modal_confirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/confirm */ "../francy-core/src/render/modal/confirm.js");
/* harmony import */ var _decorator_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorator/factory */ "../francy-core/src/decorator/factory.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }





/**
 * CallbackHandler is responsible for handling Callbacks and display Modal windows accodingly.
 * Callbacks can have arguments, for which a Modal window will appear to request such input.
 * Callbacks can also show a confirmation message before arguments input / execution.
 * If a Callback does not require an argument and no confirmation message, 
 * then the Callback is executed immediately.
 */

var CallbackHandler = (_dec = _decorator_factory__WEBPACK_IMPORTED_MODULE_3__["Decorators"].Data.requires('callback'), (_class =
/*#__PURE__*/
function (_BaseRenderer) {
  _inherits(CallbackHandler, _BaseRenderer);

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   */
  function CallbackHandler(_ref) {
    var _this;

    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, CallbackHandler);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CallbackHandler).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
    /**
     * Stores the callback to execute
     * @type {function}
     */

    _this.callback = callbackHandler;
    return _this;
  }
  /**
   * Runs callback function. If this callback is configured to get input from the user,
   * this will be prompt before execution.
   * 
   * @returns {object} the output from the callback function
   * @public 
   */


  _createClass(CallbackHandler, [{
    key: "execute",
    value: function () {
      var _execute2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var options;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = this.options;

                if (!this.data.callback.confirm) {
                  _context.next = 8;
                  break;
                }

                if (Object.keys(this.data.callback.requiredArgs).length) {
                  options.callbackHandler = function () {
                    return _this2._showRequiredModal.call(_this2);
                  };
                }

                _context.next = 5;
                return this.handlePromise(this._showConfirmModal());

              case 5:
                return _context.abrupt("return", _context.sent);

              case 8:
                if (!Object.keys(this.data.callback.requiredArgs).length) {
                  _context.next = 12;
                  break;
                }

                _context.next = 11;
                return this.handlePromise(this._showRequiredModal.call(this));

              case 11:
                return _context.abrupt("return", _context.sent);

              case 12:
                _context.next = 14;
                return this._execute(this.data.callback);

              case 14:
                return _context.abrupt("return", _context.sent);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function execute() {
        return _execute2.apply(this, arguments);
      };
    }()
    /**
     * Builds and shows a {ConfirmModal}
     * 
     * @private
     */

  }, {
    key: "_showConfirmModal",
    value: function () {
      var _showConfirmModal2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _this3 = this;

        var options, modal;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                options = this.options;

                if (Object.keys(this.data.callback.requiredArgs).length) {
                  options.callbackHandler = function () {
                    return _this3._showRequiredModal.call(_this3);
                  };
                }

                modal = new _modal_confirm__WEBPACK_IMPORTED_MODULE_2__["default"](options);
                _context2.next = 5;
                return this.handlePromise(modal.load(this.data, true).render());

              case 5:
                return _context2.abrupt("return", _context2.sent);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function _showConfirmModal() {
        return _showConfirmModal2.apply(this, arguments);
      };
    }()
    /**
     * Builds and shows a {RequiredArgsModal}
     * 
     * @private
     */

  }, {
    key: "_showRequiredModal",
    value: function () {
      var _showRequiredModal2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var _this4 = this;

        var options, modal;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                options = this.options;

                options.callbackHandler = function (o) {
                  return _this4._execute.call(_this4, o);
                };

                modal = new _modal_required__WEBPACK_IMPORTED_MODULE_1__["default"](options);
                _context3.next = 5;
                return this.handlePromise(modal.load(this.data, true).render());

              case 5:
                return _context3.abrupt("return", _context3.sent);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function _showRequiredModal() {
        return _showRequiredModal2.apply(this, arguments);
      };
    }()
    /**
     * This method executes the callback with the result from the {RequiredArgsModal} 
     * modal windows if required
     * 
     * @param {object} object - the object to stringify and pass to the callback
     * @private
     */

  }, {
    key: "_execute",
    value: function _execute(object) {
      // oh well, Trigger(<json>); is the entrypoint back to GAP 
      // while we don't support comms on the kernel:
      return this.callback("Trigger(".concat(JSON.stringify(JSON.stringify(object)), ");"));
    }
  }]);

  return CallbackHandler;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]), (_applyDecoratedDescriptor(_class.prototype, "execute", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "execute"), _class.prototype)), _class));


/***/ }),

/***/ "../francy-core/src/render/composite.js":
/*!**********************************************!*\
  !*** ../francy-core/src/render/composite.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Composite; });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ "../francy-core/src/render/renderer.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * This class is a composite of multiple renderers.
 * Being a {Renderer} class it provides a {Composite#add} method
 * that allows the adition of child {Renderer}s that will be rendered within this renderer, being this their parent.
 * 
 * @extends {Renderer]
 */

var Composite =
/*#__PURE__*/
function (_Renderer) {
  _inherits(Composite, _Renderer);

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   */
  function Composite(_ref) {
    var _this;

    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Composite);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Composite).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));

    if ((this instanceof Composite ? this.constructor : void 0) === Composite) {
      throw new TypeError('Cannot instantiate [Composite] classes directly!');
    }
    /**
     * Stores renderers into this array
     * @type {Renderer[]}
     */


    _this.renderers = [];
    return _this;
  }
  /**
   * This method adds a {Renderer} instance for rendering all children
   * 
   * @paran {Renderer} renderer - a child renderer
   * @returns {object} this instance
   * @public
   */


  _createClass(Composite, [{
    key: "add",
    value: function add(renderer) {
      if (renderer) {
        this.renderers.push(renderer);
      }

      return this;
    }
    /**
     * This method must be called manually at some point on the {Renderer.render} method.
     */

  }, {
    key: "renderChildren",
    value: function () {
      var _renderChildren = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, renderer;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // render other components
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 3;
                _iterator = this.renderers[Symbol.iterator]();

              case 5:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 12;
                  break;
                }

                renderer = _step.value;
                _context.next = 9;
                return this.handlePromise(renderer.settings({
                  appendTo: this
                }).load(this.data).render());

              case 9:
                _iteratorNormalCompletion = true;
                _context.next = 5;
                break;

              case 12:
                _context.next = 18;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](3);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 18:
                _context.prev = 18;
                _context.prev = 19;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 21:
                _context.prev = 21;

                if (!_didIteratorError) {
                  _context.next = 24;
                  break;
                }

                throw _iteratorError;

              case 24:
                return _context.finish(21);

              case 25:
                return _context.finish(18);

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
      }));

      return function renderChildren() {
        return _renderChildren.apply(this, arguments);
      };
    }()
  }]);

  return Composite;
}(_renderer__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "../francy-core/src/render/graph/base.js":
/*!***********************************************!*\
  !*** ../francy-core/src/render/graph/base.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Graph; });
/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operations */ "../francy-core/src/render/graph/operations.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderer */ "../francy-core/src/render/renderer.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../callback */ "../francy-core/src/render/callback.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tooltip */ "../francy-core/src/render/tooltip.js");
/* harmony import */ var _menu_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/context */ "../francy-core/src/render/menu/context.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/* global d3 */

var Graph =
/*#__PURE__*/
function (_Renderer) {
  _inherits(Graph, _Renderer);

  function Graph(_ref) {
    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Graph);

    return _possibleConstructorReturn(this, _getPrototypeOf(Graph).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
  }

  _createClass(Graph, [{
    key: "initialize",
    value: function initialize() {
      this.element = this.parent.select('g.francy-content');
      this.tooltip = new _tooltip__WEBPACK_IMPORTED_MODULE_3__["default"](this.options);
      this.contextMenu = new _menu_context__WEBPACK_IMPORTED_MODULE_4__["default"](this.options);
      this.callback = new _callback__WEBPACK_IMPORTED_MODULE_2__["default"](this.options);
      this.graphOperations = new _operations__WEBPACK_IMPORTED_MODULE_0__["default"](this.options);
    }
  }, {
    key: "_applyEvents",
    value: function _applyEvents(element) {
      if (!element) return;
      var self = this;
      element.on('contextmenu', function (d) {
        var data = d.data || d;

        self._selectNode.call(this, self, data); // default, build context menu


        self.handlePromise(self.contextMenu.load(data, true).render()); // any callbacks will be handled here

        self._executeCallback.call(this, self, data, 'contextmenu');
      }).on('click', function (d) {
        var data = d.data || d;

        self._selectNode.call(this, self, data); // any callbacks will be handled here


        self._executeCallback.call(this, self, data, 'click');
      }).on('dblclick', function (d) {
        var data = d.data || d; // any callbacks will be handled here

        self._executeCallback.call(this, self, data, 'dblclick');
      }).on('mouseover', function (d) {
        var data = d.data || d;

        if (data.messages) {
          // default, show tooltip
          self.handlePromise(self.tooltip.load({
            messages: data.messages
          }, true).render()); // ok, this is almost an hack, because this should be rendered on
          // the tooltip itself.. but because a tooltip gets only the messages 
          // object to render and not the whole `this.data` object, 
          // we can't check for the property canvas.texTypesetting, 
          // hence this:

          self.handlePromise(self.mathjax.settings({
            appendTo: self.tooltip,
            renderType: 'HTML-CSS'
          }).render());
        }
      }).on('mouseout', function () {
        // default, hide tooltip
        self.tooltip.unrender();
      });
    }
  }, {
    key: "_selectNode",
    value: function _selectNode(self, data) {
      if (!d3.event.ctrlKey) {
        self.graphOperations.nodeSelection.clear();
      }

      data.selected = !data.selected;
      d3.select(this).classed('francy-selected', function (d) {
        return d.selected;
      });
    }
  }, {
    key: "_executeCallback",
    value: function _executeCallback(self, data, event) {
      if (data.callbacks) {
        Object.values(data.callbacks).forEach(function (cb) {
          // execute only the ones that match the event!
          cb.trigger === event && self.handlePromise(self.callback.load({
            callback: cb
          }, true).execute());
        });
      }
    }
  }, {
    key: "setLabelXPosition",
    value: function setLabelXPosition(element) {
      var bound = element.getBBox();
      return -Math.ceil(bound.width / 2);
    }
  }, {
    key: "setLabelYPosition",
    value: function setLabelYPosition(element) {
      var bound = element.getBBox();
      return Math.floor(bound.height / 2);
    }
  }], [{
    key: "linkXPos",
    value: function linkXPos(s, t) {
      return Math.cos(Graph.angle(s, t)) + (s.x + t.x) / 2;
    }
  }, {
    key: "linkYPos",
    value: function linkYPos(s, t) {
      return Math.sin(Graph.angle(s, t)) + (s.y + t.y) / 2;
    }
  }, {
    key: "angle",
    value: function angle(s, t) {
      return Math.atan2(t.y - s.y, t.x - s.x);
    }
  }, {
    key: "getSymbol",
    value: function getSymbol(type) {
      var element = undefined;

      switch (type) {
        case 'cross':
          element = d3.symbolCross;
          break;

        case 'diamond':
          element = d3.symbolDiamond;
          break;

        case 'square':
          element = d3.symbolSquare;
          break;

        case 'triangle':
          element = d3.symbolTriangle;
          break;

        case 'star':
          element = d3.symbolStar;
          break;

        case 'wye':
          element = d3.symbolWye;
          break;

        case 'circle':
        default:
          element = d3.symbolCircle;
      }

      return element;
    }
  }, {
    key: "colors",
    get: function get() {
      return d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow);
    }
  }]);

  return Graph;
}(_renderer__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "../francy-core/src/render/graph/operations.js":
/*!*****************************************************!*\
  !*** ../francy-core/src/render/graph/operations.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphOperations; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ "../francy-core/src/render/base.js");
/* harmony import */ var _util_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/configuration */ "../francy-core/src/util/configuration.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



/* global d3 */

var GraphOperations =
/*#__PURE__*/
function (_BaseRenderer) {
  _inherits(GraphOperations, _BaseRenderer);

  function GraphOperations(_ref) {
    var _this;

    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, GraphOperations);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GraphOperations).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));

    _this.load(_this.options.appendTo.data); // this will be most likely the Frame!


    var self = _assertThisInitialized(_assertThisInitialized(_this));

    _this.nodeOperations = {
      clear: function clear() {
        this._getAll().each(function () {
          var node = d3.select(this);
          delete node.data()[0].selected;
          node.classed('francy-selected', function (d) {
            return d.selected;
          });
        }).classed('francy-selected', function (d) {
          return d.selected;
        });
      },
      getAll: function getAll() {
        var selected = [];

        this._getAll().each(function () {
          selected.push(d3.select(this).data()[0].id);
        });

        return selected;
      },
      _getAll: function _getAll() {
        return d3.select("svg#Canvas-".concat(self.data.canvas.id)).selectAll('.francy-node.francy-selected').filter(function (d) {
          return d.selected;
        });
      },
      select: function select(data) {
        if (!d3.event.ctrlKey) {
          _this.clear();
        }

        data.selected = !data.selected;
        d3.select(_assertThisInitialized(_assertThisInitialized(_this))).classed('francy-selected', function (d) {
          return d.selected;
        });
      }
    };
    return _this;
  }

  _createClass(GraphOperations, [{
    key: "dragBehavior",
    value: function dragBehavior(node, simulation, active) {
      var _this2 = this;

      var self = this;

      function enableDrag(enable) {
        node.call(d3.drag().on('start', enable ? dragstarted : undefined).on('drag', enable ? dragged : undefined).on('end', enable ? dragended : undefined));
      }

      function dragstarted(d) {
        if (!d3.event.active && active) {
          simulation.on('end', undefined);
          simulation.alphaTarget(0.01).restart();
        }

        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }

      function dragended(d) {
        if (!d3.event.active && active) {
          simulation.alphaTarget(0);
        }

        d.fx = null;
        d.fy = null;
      } // subscribe to update drag behavior on configuration change


      var enableDragId = "enable-drag-".concat(self.data.canvas.id);
      _util_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"].subscribe('dragNodes', function (value) {
        return enableDrag.call(_this2, value);
      }, enableDragId); // enable drag behavior

      return enableDrag;
    }
  }, {
    key: "connectedNodes",
    value: function connectedNodes(node, canvasNodes, link, canvasLinks) {
      var self = this; //Toggle stores whether the highlighting is on

      var toggle = 0; //Create an array logging what is connected to what

      var linkedByIndex = {};

      for (var i = 0; i < canvasNodes.length; i++) {
        linkedByIndex["".concat(i, ",").concat(i)] = 1;
      }

      canvasLinks.forEach(function (d) {
        linkedByIndex["".concat(d.source.index, ",").concat(d.target.index)] = 1;
      });

      function connected() {
        var _this3 = this;

        if (!_util_configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"].object.showNeighbours) return;

        if (toggle === 0) {
          //Reduce the opacity of all but the neighbouring nodes
          var el = d3.select(this);

          var d = el.node().__data__;

          if (el.attr('class').includes('francy-node')) {
            node.style('opacity', function (o) {
              return linkedByIndex["".concat(d.index, ",").concat(o.index)] || linkedByIndex["".concat(o.index, ",").concat(d.index)] ? 1 : 0.1;
            });
            link.style('opacity', function (o) {
              var opacity = d.index === o.source.index || d.index === o.target.index ? 1 : 0.1;
              d3.select(this).on('mouseleave', undefined).select('text').style('opacity', opacity);
              return opacity;
            });
          } else if (el.attr('class').includes('francy-link')) {
            node.style('opacity', function (o) {
              return d.source.id === o.id || d.target.id === o.id ? 1 : 0.1;
            });
            link.style('opacity', function (o) {
              var opacity = d.index === o.index ? 1 : 0.1;
              d3.select(this).on('mouseleave', undefined).select('text').style('opacity', opacity);
              return opacity;
            });
          }

          setTimeout(function () {
            d3.select('body').on('click', function () {
              return toggle === 1 ? connected.call(_this3) : undefined;
            });
          }, 0); //Reduce the op

          toggle = 1;
        } else {
          //Put them back to opacity 1
          node.style('opacity', 1);
          link.style('opacity', function () {
            d3.select(this).select('text').style('opacity', 0.1);
            return 1;
          });
          self.labelsOpacityBehavior(link);
          d3.select('body').on('click', undefined);
          toggle = 0;
        }

        d3.event.preventDefault();
      }

      return connected;
    }
  }, {
    key: "labelsOpacityBehavior",
    value: function labelsOpacityBehavior(link) {
      link.on('mouseover', function () {
        d3.select(this).selectAll('text').style('opacity', 1).style('opacity', 1);
      }).on('mouseleave', function () {
        d3.select(this).selectAll('text').style('opacity', 0.1).style('opacity', 0.1);
      });
    }
  }, {
    key: "nodeSelection",
    get: function get() {
      return this.nodeOperations;
    }
  }]);

  return GraphOperations;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "../francy-core/src/render/manager.js":
/*!********************************************!*\
  !*** ../francy-core/src/render/manager.js ***!
  \********************************************/
/*! exports provided: RENDERING_EVENTS, RenderingManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDERING_EVENTS", function() { return RENDERING_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderingManager", function() { return RenderingManager; });
/* harmony import */ var _util_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/observable */ "../francy-core/src/util/observable.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/logger */ "../francy-core/src/util/logger.js");
/* harmony import */ var _util_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utilities */ "../francy-core/src/util/utilities.js");
/* harmony import */ var _util_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/configuration */ "../francy-core/src/util/configuration.js");
/* harmony import */ var _util_exception__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/exception */ "../francy-core/src/util/exception.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * This class implements all the methods to handle multiple renderers on {Francy}.
 * 
 * {RenderingManager} is a singleton that can be accessed to register and unregister a {Renderer}.
 * Only onde renderer is active at a time.
 * 
 * {RenderingManager} will notify any subscribed methods when a supported events {RENDERING_EVENTS} occur.
 * 
 * @example RenderingManager.subscribe(RENDERING_EVENTS.REGISTER, objectChanged => {}); 
 * @example Francy.RenderingManager.register({name: 'D3', renderer: RendererClass, enable: false});
 * @example Francy.RenderingManager.unregister('D3');
 * @example Francy.RenderingManager.enable('D3');
 * @example Francy.RenderingManager.allRenderers();
 * @example Francy.RenderingManager.activeRenderer();
 * 
 * @extends {Observable}
 */

var RenderingManagerHandler =
/*#__PURE__*/
function (_Observable) {
  _inherits(RenderingManagerHandler, _Observable);

  /**
   * Default Constructor
   */
  function RenderingManagerHandler() {
    var _this;

    _classCallCheck(this, RenderingManagerHandler);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RenderingManagerHandler).call(this)); // this only adds if does not exist

    _util_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].addProperty('renderers', {});
    return _this;
  }
  /**
   * This method is used to register a renderer within {Francy}.
   * 
   * @param {Object} renderer - this is renderer configuration.
   * @param {string} renderer.name - this is renderer name.
   * @param {class} renderer.renderer - this is renderer class.
   * @param {boolean} renderer.enable - this is property to specify whether the renderer is active or not.
   * @returns {object} this instance
   * @public
   */


  _createClass(RenderingManagerHandler, [{
    key: "register",
    value: function register(_ref) {
      var name = _ref.name,
          renderer = _ref.renderer,
          enable = _ref.enable;

      if (name && !(name in _util_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].object.renderers)) {
        enable = enable || false;
        _util_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].info("Registering Renderer: ".concat(name));
        _util_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].object.renderers[name] = {
          enable: false,
          renderer: renderer,
          name: name,
          id: _util_utilities__WEBPACK_IMPORTED_MODULE_2__["Utilities"].generateId()
        };
        this.notify(RENDERING_EVENTS.REGISTER, _util_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].object.renderers[name]);

        if (enable) {
          this.enable(name);
        }
      } else {
        // update the renderer has this does not get serialized
        _util_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].object.renderers[name].renderer = renderer; //this.notify(RENDERING_EVENTS.REGISTER, Configuration.object.renderers[name]);
      }

      return this;
    }
    /**
     * This method is used to unregister a renderer.
     * 
     * @param {string} name - the name of the renderer
     * @returns {object} this instance
     * @public
     */

  }, {
    key: "unregister",
    value: function unregister(name) {
      if (name) {
        _util_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].info("Unregistering Renderer: ".concat(name));
        this.notify(RENDERING_EVENTS.UNREGISTER, _util_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].object.renderers[name]);
        delete _util_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].object.renderers[name];
      }

      return this;
    }
    /**
     * This method is used to enable a renderer. Only one renderer is enabled 
     * at a time, so the previous enabled renderer will be set to disabled.
     * 
     * @param {string} name - the name of the renderer
     * @returns {object} this instance
     * @public
     */

  }, {
    key: "enable",
    value: function enable(name) {
      if (name) {
        _util_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].info("Enabling Renderer: ".concat(name));

        for (var prop in _util_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].object.renderers) {
          var previous = _util_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].object.renderers[prop].enable;
          var current = name === prop;

          if (previous !== current) {
            _util_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].object.renderers[prop].enable = current;
            this.notify(RENDERING_EVENTS.STATUS, _util_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].object.renderers[prop]);
          }
        }
      }

      return this;
    }
    /**
     * This method returns all the renderers registered
     * 
     * @return {object} the renderers dictionary
     * @public
     */

  }, {
    key: "allRenderers",
    value: function allRenderers() {
      return _util_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].object.renderers;
    }
    /**
     * This method returns the current active renderer.
     * 
     * @return {string} the renderer name
     * @public
     */

  }, {
    key: "activeRenderer",
    value: function activeRenderer() {
      var r = _util_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].object.renderers[Object.keys(_util_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].object.renderers[0])];

      for (var prop in _util_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].object.renderers) {
        if (_util_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].object.renderers[prop].enable) {
          r = _util_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"].object.renderers[prop];
        }
      }

      if (!r.renderer) {
        throw new _util_exception__WEBPACK_IMPORTED_MODULE_4__["RuntimeException"]('No renderers registered!');
      }

      _util_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].debug("Active Renderer: ".concat(r.name));
      return r.renderer;
    }
  }]);

  return RenderingManagerHandler;
}(_util_observable__WEBPACK_IMPORTED_MODULE_0__["default"]);
/**
 * The events supported by {RenderingManager}.
 * @public
 */


var RENDERING_EVENTS = {
  REGISTER: 'REGISTER',
  UNREGISTER: 'UNREGISTER',
  STATUS: 'STATUS'
};
/**
 * The {RenderingManager} singleton
 * @public
 */

var RenderingManager = new RenderingManagerHandler();

/***/ }),

/***/ "../francy-core/src/render/mathjax-wrapper.js":
/*!****************************************************!*\
  !*** ../francy-core/src/render/mathjax-wrapper.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MathJaxWrapper; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "../francy-core/src/render/base.js");
/* harmony import */ var _component_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/factory */ "../francy-core/src/component/factory.js");
/* harmony import */ var _decorator_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorator/factory */ "../francy-core/src/decorator/factory.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }




/* global MathJax */

/**
 * This class wraps the MathJax component and renders MathJax components 
 * by replacing HTML or SVG components with the MathJax representation.
 * 
 * @example mathjax.settings({appendTo: {element: text}, renderType: 'SVG', postFunction: () => {}}).render()
 * 
 * @extends {BaseRenderer}
 */

var MathJaxWrapper = (_dec = _decorator_factory__WEBPACK_IMPORTED_MODULE_2__["Decorators"].Data.enabled('canvas.texTypesetting'), (_class =
/*#__PURE__*/
function (_BaseRenderer) {
  _inherits(MathJaxWrapper, _BaseRenderer);

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   */
  function MathJaxWrapper(_ref) {
    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, MathJaxWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(MathJaxWrapper).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
  }
  /**
   * This method is used to render this component
   * 
   * @public
   */


  _createClass(MathJaxWrapper, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!_component_factory__WEBPACK_IMPORTED_MODULE_1__["Components"].MathJax.isAvailable || !this.parent || !this.parent.node())) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                // check for a post exec function
                this.options.postFunction = this.options.postFunction || function () {};

                MathJax.Hub.Queue(['setRenderer', MathJax.Hub, this.options.renderType], ['Typeset', MathJax.Hub, this.parent.node()], [this.options.postFunction]);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
    /**
     * Saves the settings in an internal options object.
     * 
     * @typedef {Object} options
     * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
     * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
     * @property {string} options.renderType - one of 'SVG' or 'HTML'
     * @property {Function} options.postFunction - a function to run after the conversion of mathjax
     * @returns {object} this instance
     * @public
     */

  }, {
    key: "settings",
    value: function settings(_ref2) {
      var appendTo = _ref2.appendTo,
          callbackHandler = _ref2.callbackHandler,
          renderType = _ref2.renderType,
          postFunction = _ref2.postFunction;

      _get(_getPrototypeOf(MathJaxWrapper.prototype), "settings", this).call(this, {
        appendTo: appendTo,
        callbackHandler: callbackHandler
      });

      this.options.renderType = renderType;
      this.options.postFunction = postFunction;
      return this;
    }
  }]);

  return MathJaxWrapper;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy-core/src/render/menu/base.js":
/*!**********************************************!*\
  !*** ../francy-core/src/render/menu/base.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer */ "../francy-core/src/render/renderer.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../callback */ "../francy-core/src/render/callback.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/**
 * This class contains helper functions to handle the creation of menus
 */

var Menu =
/*#__PURE__*/
function (_Renderer) {
  _inherits(Menu, _Renderer);

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   */
  function Menu(_ref) {
    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
  }
  /**
   * This method traverses an iterator and creates the menu entries.
   * 
   * @param {object} appendTo - the object to append the menu to
   * @param {object} menusIterator - the iterator from {Menu#iterator}
   * @public
   */


  _createClass(Menu, [{
    key: "traverse",
    value: function traverse(appendTo, menusIterator) {
      var _this = this;

      while (menusIterator.hasNext()) {
        var menuItem = menusIterator.next();
        var entry = appendTo.append('li');
        var action = entry.selectAll('a').data([menuItem]).enter().append('a').attr('title', menuItem.title).html(menuItem.title);

        if (menuItem.callback && Object.values(menuItem.callback).length) {
          action.on('click', function (d) {
            return new _callback__WEBPACK_IMPORTED_MODULE_1__["default"](_this.options).load(d, true).execute();
          });
        }

        if (menuItem.menus && Object.values(menuItem.menus).length > 0) {
          action.append('div').classed('francy-menu-arrow-down', true).style('float', 'right');
          var content = entry.append('ul');
          var subMenusIterator = this.iterator(Object.values(menuItem.menus));
          this.traverse(content, subMenusIterator);
        }
      }
    }
    /**
     * Creates an iterator from an array
     * 
     * @returns {object} the iterator
     * @public
     */

  }, {
    key: "iterator",
    value: function iterator(array) {
      var nextIndex = 0;
      return {
        next: function next() {
          return this.hasNext() ? array[nextIndex++] : undefined;
        },
        hasNext: function hasNext() {
          return nextIndex < array.length;
        }
      };
    }
  }]);

  return Menu;
}(_renderer__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "../francy-core/src/render/menu/context.js":
/*!*************************************************!*\
  !*** ../francy-core/src/render/menu/context.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContextMenu; });
/* harmony import */ var _decorator_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../decorator/factory */ "../francy-core/src/decorator/factory.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "../francy-core/src/render/menu/base.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }



/* global d3 */

var ContextMenu = (_dec = _decorator_factory__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Data.requires('menus'), (_class =
/*#__PURE__*/
function (_Menu) {
  _inherits(ContextMenu, _Menu);

  function ContextMenu(_ref) {
    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, ContextMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(ContextMenu).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
  }

  _createClass(ContextMenu, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var position, menu, menusIterator;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                d3.event.preventDefault();
                this.element = this.HTMLParent.select('div.francy-context-menu-holder'); // check if the menu holder is already present

                if (!this.element.node()) {
                  this.element = this.HTMLParent.append('div').attr('class', 'francy-context-menu-holder');
                }

                position = d3.mouse(this.SVGParent.node());
                this.element.style('left', position[0] + 5 + 'px').style('top', position[1] + 5 + 'px'); // show the context menu

                this.element.style('display', 'block'); // check if it exists already

                if (!this.element.selectAll('*').node()) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return");

              case 8:
                // destroy menu
                d3.select('body').on('click.francy-context-menu', function () {
                  return _this.unrender();
                }); // this gets executed when a contextmenu event occurs

                menu = this.element.append('div').attr('class', 'francy-context-menu').append('ul');
                menusIterator = this.iterator(Object.values(this.data.menus));
                this.traverse(menu, menusIterator);
                return _context.abrupt("return", this);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }, {
    key: "unrender",
    value: function unrender() {
      if (this.element) {
        this.element.selectAll('*').remove();
        this.element.style('display', null);
      }
    }
  }]);

  return ContextMenu;
}(_base__WEBPACK_IMPORTED_MODULE_1__["default"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy-core/src/render/modal/about.js":
/*!************************************************!*\
  !*** ../francy-core/src/render/modal/about.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboutModal; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "../francy-core/src/render/modal/base.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/logger */ "../francy-core/src/util/logger.js");
/* harmony import */ var _util_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/configuration */ "../francy-core/src/util/configuration.js");
/* harmony import */ var _component_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/factory */ "../francy-core/src/component/factory.js");
/* harmony import */ var _decorator_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../decorator/factory */ "../francy-core/src/decorator/factory.js");
var _dec, _dec2, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }






/* global d3 VERSION FRANCY_DESC */

var AboutModal = (_dec = _decorator_factory__WEBPACK_IMPORTED_MODULE_4__["Decorators"].Initializer.initialize(), _dec2 = _decorator_factory__WEBPACK_IMPORTED_MODULE_4__["Decorators"].Data.requires('canvas'), (_class =
/*#__PURE__*/
function (_Modal) {
  _inherits(AboutModal, _Modal);

  function AboutModal(_ref) {
    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, AboutModal);

    return _possibleConstructorReturn(this, _getPrototypeOf(AboutModal).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
  }

  _createClass(AboutModal, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var modalId, form, content, footer;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                modalId = 'AboutModalWindow';
                _util_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].debug("Creating About Modal [".concat(modalId, "]..."));
                this.element = this.holder.append('div').attr('id', modalId).attr('class', 'francy-modal');
                form = this.element.append('form');

                this._buildHeader(form, "About Francy v".concat("0.12.0"));

                content = form.append('div').attr('class', 'francy-modal-content').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body').style('text-align', 'center');
                content.append('span').text('francy-extension-browser, v0.12.0, Francy - An Interactive Discrete Mathematics Framework for GAP, Manuel Martins <manuelmachadomartins@gmail.com>.');
                content.append('br');
                content.append('br');
                content.append('span').append('a').attr('href', 'https://github.com/mcmartins/francy').text('Francy on Github');
                content.append('br');

                if (_util_configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].object.verbose) {
                  content.append('br');
                  content.append('span').text('Loaded Data:');
                  content.append('pre').attr('class', 'francy').style('text-align', 'left').html(_decorator_factory__WEBPACK_IMPORTED_MODULE_4__["Decorators"].Highlight.syntax(JSON.stringify(this.data.canvas, null, 2)));
                }

                content.append('div').text('Verbose').append('div').append('input').attr('type', 'checkbox').attr('required', null).attr('value', _util_configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].object.verbose).attr('name', 'Verbose').property('checked', _util_configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].object.verbose).on('change', function () {
                  _util_configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].object.verbose = this.value = this.checked = !_util_configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].object.verbose;
                }).on('input', this.onchange).on('keyup', this.onchange).on('paste', this.onchange);
                footer = form.append('div').attr('class', 'francy-modal-footer');
                footer.append('button').text('Ok').on('click', function () {
                  d3.event.preventDefault();

                  _this.unrender.call(_this);
                }); // disable keyboard shortcuts when using this modal in Jupyter

                if (_component_factory__WEBPACK_IMPORTED_MODULE_3__["Components"].Jupyter.isAvailable) {
                  _decorator_factory__WEBPACK_IMPORTED_MODULE_4__["Decorators"].Jupyter.registerKeyboardEvents(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);
                }

                _util_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].debug("Modal About updated [".concat(modalId, "]..."));
                return _context.abrupt("return", this);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }]);

  return AboutModal;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy-core/src/render/modal/base.js":
/*!***********************************************!*\
  !*** ../francy-core/src/render/modal/base.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer */ "../francy-core/src/render/renderer.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/* global d3 */

/**
 * Implements basic methods for handling Modal windows.
 * 
 * @extends {Renderer}
 */

var Modal =
/*#__PURE__*/
function (_Renderer) {
  _inherits(Modal, _Renderer);

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   */
  function Modal(_ref) {
    var _this;

    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
    /**
     * Stores the element
     * @type {object}
     */

    _this.element = undefined;
    /**
     * Stores the overlay div
     * @type {object}
     */

    _this.overlay = undefined;
    /**
     * Stores the parent div
     * @type {object}
     */

    _this.holder = undefined;
    return _this;
  }
  /**
   * @override
   */


  _createClass(Modal, [{
    key: "initialize",
    value: function initialize() {
      // we want to overlay everything, hence 'body' must be used
      this.overlay = d3.select('body').append('div').attr('class', 'francy-overlay');
      this.holder = d3.select('body').append('div').attr('class', 'francy');
    }
    /**
     * Handles component unrender
     * 
     * @public
     */

  }, {
    key: "unrender",
    value: function unrender() {
      this.overlay.remove();
      this.element.remove();
      this.holder.remove();
    }
    /**
     * Utility method to create an header
     * 
     * @private
     */

  }, {
    key: "_buildHeader",
    value: function _buildHeader(form, title) {
      var header = form.append('div').attr('class', 'francy-modal-header');
      var headerTitle = header.append('span').html(title);

      if (this.data.title) {
        headerTitle.append('span').attr('style', 'font-weight: bold;').text("".concat(this.data.title));
      }
    }
    /**
     * Utility method to create an header
     * 
     * @private
     */

  }, {
    key: "_buildFooter",
    value: function _buildFooter(form) {
      var _this2 = this;

      var footer = form.append('div').attr('class', 'francy-modal-footer');
      footer.append('button').text('Ok').on('click', function () {
        if (form.node().checkValidity()) {
          d3.event.preventDefault();

          _this2.options.callbackHandler(_this2.data.callback);

          _this2.unrender.call(_this2);
        }

        return false;
      });
      footer.append('button').text('Cancel').on('click', function () {
        d3.event.preventDefault();

        _this2.unrender.call(_this2);
      });
    }
  }]);

  return Modal;
}(_renderer__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "../francy-core/src/render/modal/confirm.js":
/*!**************************************************!*\
  !*** ../francy-core/src/render/modal/confirm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfirmModal; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "../francy-core/src/render/modal/base.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/logger */ "../francy-core/src/util/logger.js");
/* harmony import */ var _component_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/factory */ "../francy-core/src/component/factory.js");
/* harmony import */ var _decorator_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../decorator/factory */ "../francy-core/src/decorator/factory.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }





/**
 * Implements a Confirmation Modal window.
 * 
 * The modal window takes a callback and based on the callback configuration will
 * display a message to the user.
 * 
 * @extends {Modal}
 */

var ConfirmModal = (_dec = _decorator_factory__WEBPACK_IMPORTED_MODULE_3__["Decorators"].Initializer.initialize(), (_class =
/*#__PURE__*/
function (_Modal) {
  _inherits(ConfirmModal, _Modal);

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   */
  function ConfirmModal(_ref) {
    var _this;

    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, ConfirmModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConfirmModal).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
    /**
     * Stores the element
     * @type {object}
     */

    _this.element = undefined;
    return _this;
  }
  /**
   * This method is used to render this component
   * 
   * @public
   */


  _createClass(ConfirmModal, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var modalId, form, content, row;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                modalId = this.data.callback.id;
                _util_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].debug("Creating Confirm Modal [".concat(modalId, "]..."));
                this.element = this.holder.append('div').attr('id', modalId).attr('class', 'francy-modal');
                form = this.element.append('form');

                this._buildHeader(form, 'Confirm');

                content = form.append('div').attr('class', 'francy-modal-content').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');
                row = content.append('div').attr('class', 'francy-table-row');
                row.append('div').attr('class', 'francy-table-cell').append('label');
                row.append('div').attr('class', 'francy-table-cell').append('span').attr('id', "Confirm-".concat(this.data.callback.id)).text(this.data.callback.confirm);

                this._buildFooter(form); // disable keyboard shortcuts when using this modal in Jupyter


                if (_component_factory__WEBPACK_IMPORTED_MODULE_2__["Components"].Jupyter.isAvailable) {
                  _decorator_factory__WEBPACK_IMPORTED_MODULE_3__["Decorators"].Jupyter.registerKeyboardEvents(['.francy', '.francy-overlay', '.francy-modal']);
                }

                _util_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].debug("Confirm Modal updated [".concat(modalId, "]..."));
                return _context.abrupt("return", this);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }]);

  return ConfirmModal;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy-core/src/render/modal/required.js":
/*!***************************************************!*\
  !*** ../francy-core/src/render/modal/required.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequiredArgsModal; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "../francy-core/src/render/modal/base.js");
/* harmony import */ var _graph_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graph/operations */ "../francy-core/src/render/graph/operations.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/logger */ "../francy-core/src/util/logger.js");
/* harmony import */ var _component_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/factory */ "../francy-core/src/component/factory.js");
/* harmony import */ var _decorator_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../decorator/factory */ "../francy-core/src/decorator/factory.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }






/**
 * Implements a Required Arguments Modal window.
 * 
 * The modal window takes a callback and based on the callback configuration will
 * create the input fields required and display them to the user.
 * 
 * @extends {Modal}
 */

var RequiredArgsModal = (_dec = _decorator_factory__WEBPACK_IMPORTED_MODULE_4__["Decorators"].Initializer.initialize(), (_class =
/*#__PURE__*/
function (_Modal) {
  _inherits(RequiredArgsModal, _Modal);

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   */
  function RequiredArgsModal(_ref) {
    var _this;

    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, RequiredArgsModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RequiredArgsModal).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
    /**
     * Stores the element
     * @type {object}
     */

    _this.element = undefined;
    return _this;
  }
  /**
   * This method is used to render this component
   * 
   * @public
   */


  _createClass(RequiredArgsModal, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var modalId, form, inputElement;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                modalId = this.data.callback.id;
                _util_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"].debug("Creating Callback Modal [".concat(modalId, "]..."));
                this.element = this.holder.append('div').attr('id', modalId).attr('class', 'francy-modal');
                form = this.element.append('form');

                this._buildHeader(form, 'Required arguments&nbsp;');

                this._buildContent(form);

                this._buildFooter(form); // disable keyboard shortcuts when using this modal in Jupyter


                if (_component_factory__WEBPACK_IMPORTED_MODULE_3__["Components"].Jupyter.isAvailable) {
                  _decorator_factory__WEBPACK_IMPORTED_MODULE_4__["Decorators"].Jupyter.registerKeyboardEvents(['.francy', '.francy-arg', '.francy-overlay', '.francy-modal']);
                }

                inputElement = form.selectAll('.francy-arg').node();

                if (inputElement) {
                  inputElement.focus();
                }

                _util_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"].debug("Callback Modal updated [".concat(modalId, "]..."));
                return _context.abrupt("return", this);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
    /**
     * Utility method to handle content build
     * 
     * @private
     */

  }, {
    key: "_buildContent",
    value: function _buildContent(form) {
      var self = this;
      var content = form.append('div').attr('class', 'francy-modal-content').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');

      var _arr = Object.values(this.data.callback.requiredArgs);

      for (var _i = 0; _i < _arr.length; _i++) {
        var arg = _arr[_i];
        var row = content.append('div').attr('class', 'francy-table-row');
        row.append('div').attr('class', 'francy-table-cell').append('label').attr('for', arg.id).text(arg.title);

        if (arg.type === 'select') {
          var operations = new _graph_operations__WEBPACK_IMPORTED_MODULE_1__["default"](this.options);
          var selectedNodes = Object.values(operations.nodeSelection.getAll());
          row.append('div').attr('class', 'francy-table-cell').append('select').attr('class', 'francy-arg').attr('id', arg.id).attr('required', '').attr('name', arg.id).attr('disabled', '').attr('multiple', '').data(selectedNodes).append('option').attr('value', function (d) {
            return d;
          }).html(function (d) {
            return d;
          });
          self.data.callback.requiredArgs[arg.id].value = selectedNodes;
        } else {
          var input = row.append('div').attr('class', 'francy-table-cell').append('input').attr('class', 'francy-arg').attr('id', arg.id).attr('required', '').attr('name', arg.id).attr('type', arg.type).attr('value', arg.value).on('change', function () {
            self.data.callback.requiredArgs[this.id].value = this.value;
          }).on('input', this.onchange).on('keyup', this.onchange).on('paste', this.onchange); // wait, if it is boolean we create a checkbox

          if (arg.type === 'boolean') {
            // well, a checkbox works this way so we need to initialize 
            // the value to false and update the value based on the checked 
            // property that triggers the onchange event
            arg.value = arg.value || false;
            input.attr('type', 'checkbox').attr('required', null).attr('value', arg.value).on('change', function () {
              self.data.callback.requiredArgs[this.id].value = this.value = this.checked;
            });
          }
        }

        row.append('span').attr('class', 'validity');
      }
    }
  }]);

  return RequiredArgsModal;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy-core/src/render/renderer.js":
/*!*********************************************!*\
  !*** ../francy-core/src/render/renderer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "../francy-core/src/render/base.js");
/* harmony import */ var _mathjax_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathjax-wrapper */ "../francy-core/src/render/mathjax-wrapper.js");
/* harmony import */ var _util_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/configuration */ "../francy-core/src/util/configuration.js");
/* harmony import */ var _util_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/logger */ "../francy-core/src/util/logger.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/* global d3 */

/**
 * This class represents a rendable component.
 * Instances of this class must implement a {Renderer#render} method
 * and optionaly an {Renderer#unrender} method.
 * 
 * @extends {BaseRenderer}
 */

var Renderer =
/*#__PURE__*/
function (_BaseRenderer) {
  _inherits(Renderer, _BaseRenderer);

  /**
   * Base constructor
   * 
   * @typedef {Object} options
   * @property {Boolean} options.appendTo - where the generated html/svg components will be attached to, default body
   * @property {Function} options.callbackHandler - this handler will be used to invoke actions from the menu, default console.log
   */
  function Renderer(_ref) {
    var _this;

    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Renderer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Renderer).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));

    if ((this instanceof Renderer ? this.constructor : void 0) === Renderer) {
      throw new TypeError('Cannot instantiate [Renderer] classes directly!');
    }

    if (_this.render === undefined || typeof _this.render !== 'function') {
      throw new TypeError('Must override [render()] method!');
    }

    if (_this.unrender === undefined) {
      _util_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"].debug('No [unrender()] method specified...');
    }
    /**
     * Stores the element renderer
     * @type {object}
     */


    _this.element = undefined;
    /**
     * Stores the default animation duration
     * @type {number}
     */

    _this.transitionDuration = _util_configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"].object.transitionDuration;
    return _this;
  }
  /**
   * This method is used by the decorator {Decorators.Initializer.initialize()} 
   * to initialize this renderer.
   * 
   * @override
   * @public
   */


  _createClass(Renderer, [{
    key: "initialize",
    value: function initialize() {}
    /**
     * Handles component unrender
     * 
     * @public
     */

  }, {
    key: "unrender",
    value: function unrender() {}
    /**
     * Return the HTML component holding this element
     * 
     * @returns {object} the first HTML element holding this component, otherwise the parent element whatever it is (most likely an HTML)
     * @public
     */

  }, {
    key: "HTMLParent",
    get: function get() {
      return this.parent.node().tagName.toLowerCase() === 'svg' ? d3.select(this.parent.node().parentNode) : this.parent;
    }
    /**
     * Returns the SVG element if available, otherwise the parent element whatever it is (most likely an HTML)
     * 
     * @returns {object} the SVG element
     * @public
     */

  }, {
    key: "SVGParent",
    get: function get() {
      return this.parent.node().tagName.toLowerCase() === 'div' ? this.parent.select('svg') : this.parent;
    }
    /**
     * Returns a static object containing margins
     * 
     * @returns {object} and object containing default margins: { top: 50, right: 50, bottom: 50, left: 50 }
     * @public
     */

  }, {
    key: "margin",
    get: function get() {
      return {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
      };
    }
    /**
     * Returns the width of the parent
     * 
     * @returns {number} the width of the html parent
     * @public
     */

  }, {
    key: "width",
    get: function get() {
      var width = +this.parent.attr('width') || d3.select('body').node().getBoundingClientRect().width;
      return width - this.margin.left - this.margin.right;
    }
    /**
     * Returns the height of the parent
     * 
     * @returns {number} the height of the html parent
     * @public
     */

  }, {
    key: "height",
    get: function get() {
      var height = +this.parent.attr('height') || d3.select('body').node().getBoundingClientRect().height;
      return height - this.margin.top - this.margin.bottom;
    }
    /**
     * Returns the MathJax component
     * 
     * @returns {MathJaxWrapper} the MathJax component
     * @public
     */

  }, {
    key: "mathjax",
    get: function get() {
      return new _mathjax_wrapper__WEBPACK_IMPORTED_MODULE_1__["default"](this.options).load(this.data);
    }
  }]);

  return Renderer;
}(_base__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "../francy-core/src/render/tooltip.js":
/*!********************************************!*\
  !*** ../francy-core/src/render/tooltip.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tooltip; });
/* harmony import */ var _decorator_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decorator/factory */ "../francy-core/src/decorator/factory.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "../francy-core/src/render/renderer.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }



/* global d3 */

var Tooltip = (_dec = _decorator_factory__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Data.requires('messages'), (_class =
/*#__PURE__*/
function (_Renderer) {
  _inherits(Tooltip, _Renderer);

  function Tooltip(_ref) {
    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
  }

  _createClass(Tooltip, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var position, table;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.element = this.HTMLParent.select('div.francy-tooltip-holder'); // check if the window is already present

                if (!this.element.node()) {
                  this.element = this.HTMLParent.append('div').attr('class', 'francy-tooltip-holder');
                } // check if it exists already


                if (!this.element.selectAll('*').node()) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                position = d3.mouse(this.SVGParent.node()); // TODO this won't be visible all the times, fine until someone complains about :P

                this.element.style('left', position[0] + 15 + 'px').style('top', position[1] - 15 + 'px');
                table = this.element.append('div').attr('class', 'francy-tooltip').append('div').attr('class', 'francy-table').append('div').attr('class', 'francy-table-body');
                Object.keys(this.data.messages).map(function (key) {
                  var row = table.append('div').attr('class', 'francy-table-row');
                  row.append('div').attr('class', 'francy-table-cell').text(_this.data.messages[key].title);
                  row.append('div').attr('class', 'francy-table-cell').text(_this.data.messages[key].text);
                }); // show tooltip

                this.element.style('display', 'block');
                return _context.abrupt("return", this);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }, {
    key: "unrender",
    value: function unrender() {
      if (this.element) {
        this.element.selectAll('*').remove();
        this.element.style('display', null);
      }
    }
  }]);

  return Tooltip;
}(_renderer__WEBPACK_IMPORTED_MODULE_1__["default"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy-core/src/util/configuration.js":
/*!************************************************!*\
  !*** ../francy-core/src/util/configuration.js ***!
  \************************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable */ "../francy-core/src/util/observable.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


/**
 * This class provides the application configuration.
 * It extends the {Observable} class providing methods to subscribe on changes.
 * 
 * @extends {Observable}
 */

var ConfigurationHandler =
/*#__PURE__*/
function (_Observable) {
  _inherits(ConfigurationHandler, _Observable);

  /**
   * Creates a instance of ModelTracker.
   * @param {object} object - the object object to keep track of changes.
   * @param {object} config
   * @param {number} config.throttle - the interval for storing dirty data
   */
  function ConfigurationHandler(object) {
    var _this;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$throttle = _ref.throttle,
        throttle = _ref$throttle === void 0 ? 1000 : _ref$throttle;

    _classCallCheck(this, ConfigurationHandler);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConfigurationHandler).call(this));
    /**
     * This is property is used to flag when the object changes.
     * @type {boolean}
     * @private
     */

    _this._dirty = false;
    /**
     * This holds the actual configuration object
     * @type {object}
     * @private
     */

    var objectStored = window.localStorage.getItem('francy.settings');

    if (!objectStored) {
      _this._dirty = true;
      setTimeout(function () {
        return _this._sync();
      }, 0);
    } else {
      object = JSON.parse(objectStored);
    }
    /**
     * This is property holds a proxy that handles a dirty flag when object changes.
     * @type {Proxy}
     * @private
     */


    _this._proxy = new Proxy(object, _assertThisInitialized(_assertThisInitialized(_this)));
    /**
     * Sync listeners every second, if data is dirty
     * @type {setInterval}
     * @private
     */

    setInterval(function () {
      return _this._sync();
    }, throttle);
    return _this;
  }
  /**
   * This method is used by the proxy to set a property when a change occurs, plus it sets the current object to dirty.
   * @param {object} object - the object being tracked
   * @param {object} property - the property changed
   * @param {object} value - the new value
   * @public
   */


  _createClass(ConfigurationHandler, [{
    key: "set",
    value: function set(object, property, value) {
      if (object[property] !== value) {
        object[property] = value;
        this.notify(property, value);
        this._dirty = true;
      }

      return true;
    }
    /**
     * This method is used by the proxy to get the object being tracked
     * @param {object} target - the object being tracked
     * @param {object} property - the object property
     * @returns {object} returns the object being tracked
     * @public
     */

  }, {
    key: "get",
    value: function get(target, property) {
      if (_typeof(target[property]) === 'object' && target[property] !== null) {
        return new Proxy(target[property], this);
      }

      return property in target ? target[property] : target;
    }
    /**
     * This method is used by the proxy to checkif the object has a property
     * @param {object} target - the object being tracked
     * @param {object} key - the object property
     * @returns {boolean} returns true if the property exists, otherwise false
     * @public
     */

  }, {
    key: "has",
    value: function has(target, key) {
      if (key[0] === '_') {
        return false;
      }

      return key in target;
    }
    /**
     * Returns the object being tracked (proxy)
     * @returns {object} the object properties
     * @public
     */

  }, {
    key: "addProperty",

    /**
    * Adds a new configuration property
    * 
    * @param {string} property - the configuration property name
    * @param {Object} value - the configuration property value
    * @returns {object} this instance
    * @public 
    */
    value: function addProperty(property, value) {
      if (!this.hasProperty(property)) {
        Object.defineProperty(this.object, property, {
          value: value,
          writable: true,
          enumerable: true,
          configurable: true
        });
        this._dirty = true;
      }

      return this;
    }
    /**
    * Checks if a configuration property exists. Returns true if it exists, otherwise false.
    * 
    * @param {string} name - the configuration property name
    * @returns {boolean} returns true if the property exists, otherwise false
    * @public 
     */

  }, {
    key: "hasProperty",
    value: function hasProperty(name) {
      return name in this.object;
    }
    /**
     * This method is used to explicitly sync the module with all the subscribers
     * @private
     */

  }, {
    key: "_sync",
    value: function _sync() {
      if (this._dirty) {
        window.localStorage.setItem('francy.settings', JSON.stringify(this.object));
      }
    }
  }, {
    key: "object",
    get: function get() {
      return this._proxy;
    }
  }]);

  return ConfigurationHandler;
}(_observable__WEBPACK_IMPORTED_MODULE_0__["default"]);
/**
 * The {Configuration} singleton
 * @public
 */


var Configuration = new ConfigurationHandler({
  showNeighbours: true,
  dragNodes: true,
  simulation: true,
  fixedRandomSeed: true,
  verbose: false,
  transitionDuration: 750 //ms

}, {
  throttle: 5000
});

/***/ }),

/***/ "../francy-core/src/util/data-handler.js":
/*!***********************************************!*\
  !*** ../francy-core/src/util/data-handler.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataHandler; });
/* harmony import */ var _util_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/json */ "../francy-core/src/util/json.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * This class provides utility methods to handle and store data.
 */

var DataHandler =
/*#__PURE__*/
function () {
  /**
   * Default Constructor
   */
  function DataHandler() {
    _classCallCheck(this, DataHandler);

    /**
     * Stores the data object
     * @type {object}
     */
    this.data = undefined;
  }
  /**
   * Loads and stores data if valid
   *
   * @param {string} json - a francy valid json
   * @param {boolean} partial - set this to true if the json is not a complete francy json object
   * @returns {object} this instance
   * @public
   */


  _createClass(DataHandler, [{
    key: "load",
    value: function load(json, partial) {
      var data = _util_json__WEBPACK_IMPORTED_MODULE_0__["default"].parse(json, partial);

      if (data) {
        this.data = data;
      }

      return this;
    }
  }]);

  return DataHandler;
}();



/***/ }),

/***/ "../francy-core/src/util/exception.js":
/*!********************************************!*\
  !*** ../francy-core/src/util/exception.js ***!
  \********************************************/
/*! exports provided: Exception, RuntimeException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception", function() { return Exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeException", function() { return RuntimeException; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * This class provides a subclass of {Error} to provide functionality on recoverable errors.
 * 
 * @extends {Error}
 */
var Exception =
/*#__PURE__*/
function (_Error) {
  _inherits(Exception, _Error);

  /**
   * Default Constructor
   */
  function Exception(message) {
    _classCallCheck(this, Exception);

    return _possibleConstructorReturn(this, _getPrototypeOf(Exception).call(this, message));
  }

  return Exception;
}(_wrapNativeSuper(Error));
/**
 * This class provides a subclass of {Error} to provide functionality on non recoverable errors.
 * 
 * @extends {Error}
 */

var RuntimeException =
/*#__PURE__*/
function (_Error2) {
  _inherits(RuntimeException, _Error2);

  /**
   * Default Constructor
   */
  function RuntimeException(message) {
    _classCallCheck(this, RuntimeException);

    return _possibleConstructorReturn(this, _getPrototypeOf(RuntimeException).call(this, message));
  }

  return RuntimeException;
}(_wrapNativeSuper(Error));

/***/ }),

/***/ "../francy-core/src/util/json.js":
/*!***************************************!*\
  !*** ../francy-core/src/util/json.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JsonUtils; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * This class contains methods to deal with JSON.
 */
var JsonUtils =
/*#__PURE__*/
function () {
  function JsonUtils() {
    _classCallCheck(this, JsonUtils);
  }

  _createClass(JsonUtils, null, [{
    key: "parse",

    /**
     * Parses an input nd checks whether this input is valid and returns a JSON object.
     * @param input - the input to parse
     * @param partial - if the input is not a complete Francy JSON Object, defaults to false
     * @returns {json} - if the input is a valid JSON object, otherwise returns {undefined}
     */
    value: function parse(input) {
      var partial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!input) return;

      if (typeof input === 'string') {
        input = input.replace(/[\n\r\b]+|(gap>)/g, '');
        var jsonRegex = /{(?:[^])*}/g;
        var match = jsonRegex.exec(input);
        if (!match) return;
        input = JSON.parse(match[0]);
      }

      return input.mime === JsonUtils.MIME || partial ? input : undefined;
    }
    /**
     * Returns a static string representing the mime type supported by this package
     */

  }, {
    key: "MIME",
    get: function get() {
      return 'application/vnd.francy+json';
    }
  }]);

  return JsonUtils;
}();



/***/ }),

/***/ "../francy-core/src/util/logger.js":
/*!*****************************************!*\
  !*** ../francy-core/src/util/logger.js ***!
  \*****************************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration */ "../francy-core/src/util/configuration.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * This class provides a logger for the Francy application.
 */

var Log =
/*#__PURE__*/
function () {
  /**
   * Logger constructor
   * @param verbose prints extra log information to console.log, defaults to false
   */
  function Log() {
    _classCallCheck(this, Log);

    /**
     * Stores the browser console function
     * @type {function}
     */
    this.console = console;
  }
  /**
   * Creates a [DEBUG] entry in the console log
   * @param message the message to print
   */


  _createClass(Log, [{
    key: "debug",
    value: function debug(message) {
      if (_configuration__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.verbose) {
        this.console.debug(Log._format('D', message));
      }
    }
    /**
     * Creates an [INFO] entry in the console log
     * @param message the message to print
     */

  }, {
    key: "info",
    value: function info(message) {
      this.console.info(Log._format('I', message));
    }
    /**
     * Creates an [ERROR] entry in the console log
     * @param message the message to print
     * @param error the error Object to attach to the message
     */

  }, {
    key: "error",
    value: function error(message, _error) {
      if (_error) {
        this.console.error(Log._format('E', message), _error);
      } else {
        this.console.error(Log._format('E', message));
      }
    }
    /**
     * Creates a [WARN] entry in the console log
     * @param message the message to print
     * @param error the error Object to attach to the message
     */

  }, {
    key: "warn",
    value: function warn(message, error) {
      if (error) {
        this.console.info(Log._format('W', message), error);
      } else {
        this.console.info(Log._format('W', message));
      }
    }
    /**
     * This is a private method that formats all log messages
     * @param level the log level
     * @param message the message to print
     * @return {string} the formatted strin
     */

  }], [{
    key: "_format",
    value: function _format(level, message) {
      return "[".concat(level, " ").concat(new Date().toISOString(), "] - ").concat(message);
    }
  }]);

  return Log;
}();
/**
 * The {Logger} singleton
 * @public
 */


var Logger = new Log();

/***/ }),

/***/ "../francy-core/src/util/observable.js":
/*!*********************************************!*\
  !*** ../francy-core/src/util/observable.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Observable; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "../francy-core/src/util/utilities.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * This {Observable} class contains the utility methods for implementing the Observer Pattern.
 */

var Observable =
/*#__PURE__*/
function () {
  /**
   * Creates a instance of ModelTracker.
   * @param {object} object - the object object to keep track of changes.
   * @param verbose
   * @param throttle
   */
  function Observable() {
    _classCallCheck(this, Observable);

    /**
     * This is property holds a list of change subscribers.
     * @type {function}
     * @private
     */
    this._subscribers = {};
  }
  /**
   * This method is used register a function that is invoked to sync the object
   * @param {string} property - the property to subscribe to
   * @param {function} fn - the function to execute - must handle one arg, the object, of type {Object}
   * @public
   */


  _createClass(Observable, [{
    key: "subscribe",
    value: function subscribe(property, fn, id) {
      if (!id) {
        throw new Error('ID is mandatory');
      }

      this._subscribers[id] = {
        property: property,
        fn: fn
      };
    }
    /**
     * This method is used to unregister a function registered previously
     * @param {string} property - the property to unsubscribe to
     * @param {function} fn - the function to execute - must handle one arg, the object, of type {Object}
     * @public
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe(property, fn, id) {
      if (!id) {
        throw new Error('ID is mandatory');
      }

      delete this._subscribers[id];
    }
    /**
     * This method is used to unregister all functions registered previously
     * @public
     */

  }, {
    key: "unsubscribeAll",
    value: function unsubscribeAll() {
      this._subscribers = [];
    }
    /**
     * This method is used to notify all subscribers of a change
     * @param {string} property - the property to notify subscribers subscribed to
     * @param {Object} value - the value that changed
     * @public
     */

  }, {
    key: "notify",
    value: function notify(property, value) {
      var _this = this;

      Object.values(this._subscribers).forEach(function (s) {
        return _utilities__WEBPACK_IMPORTED_MODULE_0__["Utilities"].isEqual(s.property, property) && s.fn.call(_this, value);
      });
    }
  }]);

  return Observable;
}();



/***/ }),

/***/ "../francy-core/src/util/utilities.js":
/*!********************************************!*\
  !*** ../francy-core/src/util/utilities.js ***!
  \********************************************/
/*! exports provided: Utilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utilities", function() { return Utilities; });
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.isequal */ "../francy-core/node_modules/lodash.isequal/index.js");
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * {Utilities} functions object.
 * 
 * @typedef {Object} Utilities
 * @property {function} generateId
 * @public
 */

var Utilities = {
  /**
   * Generates an ID
   * 
   * @returns {string} a random id
   * @public
   */
  generateId: function generateId() {
    // Math.random should be unique because of its seeding algorithm
    // Convert it to base 36 (numbers + letters), 
    // and grab the first 9 characters after the decimal
    return "L-".concat(Math.random().toString(36).substr(2, 9));
  },
  isObject: function isObject(a) {
    return _typeof(a) === 'object' && a !== null;
  },
  isEqual: function isEqual(a, b) {
    return lodash_isequal__WEBPACK_IMPORTED_MODULE_0___default()(a, b);
  }
};

/***/ }),

/***/ "../francy-renderer-d3/index.js":
/*!**************************************!*\
  !*** ../francy-renderer-d3/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/canvas */ "../francy-renderer-d3/src/canvas.js");

/* global Francy */

var name = 'D3-Renderer'; // we're expecting Francy to be loaded already!

Francy.RenderingManager.register({
  name: name,
  renderer: _src_canvas__WEBPACK_IMPORTED_MODULE_0__["default"],
  enable: true
});

/***/ }),

/***/ "../francy-renderer-d3/src/canvas.js":
/*!*******************************************!*\
  !*** ../francy-renderer-d3/src/canvas.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
/* harmony import */ var francy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! francy-core */ "../francy-core/index.js");
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! seedrandom */ "../../node_modules/seedrandom/index.js");
/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _graph_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graph/factory */ "../francy-renderer-d3/src/graph/factory.js");
/* harmony import */ var _chart_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart/factory */ "../francy-renderer-d3/src/chart/factory.js");
var _dec, _dec2, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }





/* global d3 */

var Canvas = (_dec = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Data.requires('canvas'), _dec2 = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Initializer.initialize(), (_class =
/*#__PURE__*/
function (_CompositeRenderer) {
  _inherits(Canvas, _CompositeRenderer);

  function Canvas(_ref) {
    var _this;

    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Canvas);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Canvas).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));

    _this.add(new _graph_factory__WEBPACK_IMPORTED_MODULE_2__["default"](_this.options)).add(new _chart_factory__WEBPACK_IMPORTED_MODULE_3__["default"](_this.options));

    return _this;
  }

  _createClass(Canvas, [{
    key: "initialize",
    value: function initialize() {
      if (francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.fixedRandomSeed) {
        //set seed to produce always the same graphs
        Math.seedrandom('Francy!');
      }
    }
  }, {
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var content, zoom, self, updateZoom, zoomed, stopped, zoomToFit, canvasId;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                zoomToFit = function _ref5(force) {
                  // only execute if enable, of course
                  if (self.data.canvas.zoomToFit || force) {
                    var bounds = content.node().getBBox();
                    var clientBounds = self.element.node().getBoundingClientRect(),
                        fullWidth = clientBounds.right - clientBounds.left,
                        fullHeight = clientBounds.bottom - clientBounds.top;
                    var width = +bounds.width,
                        height = +bounds.height;
                    if (width === 0 || height === 0) return;
                    var midX = bounds.x + width / 2,
                        midY = bounds.y + height / 2;
                    var scale = 0.9 / Math.max(width / fullWidth, height / fullHeight);
                    var translateX = fullWidth / 2 - scale * midX,
                        translateY = fullHeight / 2 - scale * midY;
                    content.transition().duration(self.transitionDuration).attr('transform', "translate(".concat(translateX, ",").concat(translateY, ")scale(").concat(scale, ",").concat(scale, ")")).on('end', function () {
                      return updateZoom(translateX, translateY, scale);
                    });
                  }
                };

                stopped = function _ref4() {
                  if (d3.event.defaultPrevented) {
                    d3.event.stopPropagation();
                  }
                };

                zoomed = function _ref3() {
                  content.attr('transform', d3.event.transform);
                };

                updateZoom = function _ref2(translateX, translateY, scale) {
                  self.element.call(zoom.transform, d3.zoomIdentity.translate(translateX, translateY).scale(scale, scale));
                };

                zoom = d3.zoom(), self = this;
                canvasId = "Canvas-".concat(this.data.canvas.id);
                this.element = d3.select("svg#".concat(canvasId)); // check if the canvas is already present

                if (!this.element.node()) {
                  // create a svg element detached from the DOM!
                  francy_core__WEBPACK_IMPORTED_MODULE_0__["Logger"].debug("Creating Canvas [".concat(canvasId, "]..."));
                  this.element = this.parent.append('svg').classed('francy-canvas', true).attr('xmlns', 'http://www.w3.org/2000/svg').attr('xmlns:xlink', 'http://www.w3.org/1999/xlink').attr('id', canvasId);
                } // cannot continue if canvas is not present


                if (this.element.node()) {
                  _context.next = 10;
                  break;
                }

                throw new Error("Oops, could not create canvas with id [".concat(canvasId, "]... Cannot proceed."));

              case 10:
                this.element.attr('width', '100%').attr('height', this.data.canvas.height);
                content = this.element.select('g.francy-content');

                if (!content.node()) {
                  content = this.element.append('g').classed('francy-content', true).classed('graph', true).attr('id', 'graph0');
                  zoom.on('zoom', zoomed); // remove zoom on double click!

                  this.element.call(zoom).on('dblclick.zoom', null);
                }

                this.element.on('click', stopped, true);
                this.element.zoomToFit = this.zoomToFit = zoomToFit;
                francy_core__WEBPACK_IMPORTED_MODULE_0__["Logger"].debug("Canvas updated [".concat(canvasId, "]..."));

                this._buildMenu();

                this.handlePromise(this.renderChildren());
                return _context.abrupt("return", this);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }, {
    key: "_buildMenu",
    value: function _buildMenu() {
      var _this4 = this;

      var self = this; // here we have access to MainMenu

      if (this.data.canvas.graph) {
        this.parentClass.MainMenu.addMultiMenuOnSettingsMenu({
          menuId: 'graph-settings-entry',
          menuTitle: 'Graph',
          entryId: 'neighbours-entry',
          entryTitle: "".concat(francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.showNeighbours ? '&#9745' : '&#9744', " Show Neighbours"),
          entryOnClickCallback: function entryOnClickCallback() {
            francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.showNeighbours = !francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.showNeighbours;
          },
          entryOnEachCallback: function entryOnEachCallback() {
            var _this2 = this;

            var showNeighboursId = "showNeighbours-onChange-".concat(self.data.canvas.id);
            francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].subscribe('showNeighbours', function (value) {
              d3.select(_this2).html("".concat(value ? '&#9745' : '&#9744', " Show Neighbours"));
            }, showNeighboursId);
          }
        });
        this.parentClass.MainMenu.addMultiMenuOnSettingsMenu({
          menuId: 'graph-settings-entry',
          menuTitle: 'Graph',
          entryId: 'drag-entry',
          entryTitle: "".concat(francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.dragNodes ? '&#9745' : '&#9744', " Drag Nodes"),
          entryOnClickCallback: function entryOnClickCallback() {
            francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.dragNodes = !francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.dragNodes;
          },
          entryOnEachCallback: function entryOnEachCallback() {
            var _this3 = this;

            var dragNodesId = "dragNodes-onChange-".concat(self.data.canvas.id);
            francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].subscribe('dragNodes', function (value) {
              d3.select(_this3).html("".concat(value ? '&#9745' : '&#9744', " Drag Nodes"));
            }, dragNodesId);
          }
        });
      }

      var removeMenuId = "graphSettings-removeMenu-".concat(self.data.canvas.id); // remove menu if renderer is disabled

      francy_core__WEBPACK_IMPORTED_MODULE_0__["RenderingManager"].subscribe(francy_core__WEBPACK_IMPORTED_MODULE_0__["RENDERING_EVENTS"].STATUS, function (r) {
        if (!r.enable) {
          _this4.parentClass.MainMenu.removeMenuEntry('graph-settings-entry');
        }
      }, removeMenuId);
    }
  }]);

  return Canvas;
}(francy_core__WEBPACK_IMPORTED_MODULE_0__["CompositeRenderer"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy-renderer-d3/src/chart/bar.js":
/*!**********************************************!*\
  !*** ../francy-renderer-d3/src/chart/bar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BarChart; });
/* harmony import */ var francy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! francy-core */ "../francy-core/index.js");
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart */ "../francy-renderer-d3/src/chart/chart.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }



/* global d3 */

var BarChart = (_dec = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Initializer.initialize(), (_class =
/*#__PURE__*/
function (_Chart) {
  _inherits(BarChart, _Chart);

  function BarChart(_ref) {
    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, BarChart);

    return _possibleConstructorReturn(this, _getPrototypeOf(BarChart).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
  }

  _createClass(BarChart, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var barsGroup, self;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.xScale = d3.scaleBand().range([0, this.width]).padding(0.1).domain(this.axis.x.domain);

                if (!this.axis.x.domain.length) {
                  this.axis.x.domain = _chart__WEBPACK_IMPORTED_MODULE_1__["default"].domainRange(this.allValues.length / this.datasetNames.length);
                  this.xScale.domain(this.axis.x.domain);
                }

                barsGroup = this.element.selectAll('g.francy-bars');

                if (!barsGroup.node()) {
                  barsGroup = this.element.append('g').attr('class', 'francy-bars');
                }

                self = this;
                this.datasetNames.forEach(function (key, index) {
                  var bar = barsGroup.selectAll(".francy-bar-".concat(index)).data(self.datasets[key]);
                  bar.exit().transition().duration(750).style('fill-opacity', 1e-6).remove(); // append the rectangles for the bar chart

                  var barEnter = bar.enter().append('rect').style('fill', function () {
                    return _chart__WEBPACK_IMPORTED_MODULE_1__["default"].colors(index * 5);
                  }).attr('class', "francy-bar-".concat(index)).attr('x', function (d, i) {
                    return self.xScale(self.axis.x.domain[i]) + index * (self.xScale.bandwidth() / self.datasetNames.length);
                  }).attr('width', self.xScale.bandwidth() / self.datasetNames.length - 1).attr('y', function (d) {
                    return self.yScale(d);
                  }).attr('height', function (d) {
                    return self.height - self.yScale(d);
                  }).on('mouseenter', function (d) {
                    d3.select(this).transition().duration(250).style('fill-opacity', 0.5);
                    self.handlePromise(self.tooltip.load(_chart__WEBPACK_IMPORTED_MODULE_1__["default"].tooltip(key, d), true).render());
                  }).on('mouseleave', function () {
                    d3.select(this).transition().duration(250).style('fill-opacity', 1);
                    self.tooltip.unrender();
                  });
                  barEnter.merge(bar).attr('x', function (d, i) {
                    return self.xScale(self.axis.x.domain[i]) + index * (self.xScale.bandwidth() / self.datasetNames.length);
                  }).attr('width', self.xScale.bandwidth() / self.datasetNames.length - 1).attr('y', function (d) {
                    return self.yScale(d);
                  }).attr('height', function (d) {
                    return self.height - self.yScale(d);
                  });
                });

                this._renderAxis();

                this._renderLegend();

                return _context.abrupt("return", this);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }]);

  return BarChart;
}(_chart__WEBPACK_IMPORTED_MODULE_1__["default"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy-renderer-d3/src/chart/chart.js":
/*!************************************************!*\
  !*** ../francy-renderer-d3/src/chart/chart.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chart; });
/* harmony import */ var francy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! francy-core */ "../francy-core/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/* global d3 */

var Chart =
/*#__PURE__*/
function (_Renderer) {
  _inherits(Chart, _Renderer);

  function Chart(_ref) {
    var _this;

    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Chart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Chart).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
    _this.axis = undefined;
    _this.yScale = undefined;
    _this.xScale = undefined;
    _this.datasets = undefined;
    _this.datasetNames = undefined;
    _this.tooltip = undefined;
    return _this;
  }

  _createClass(Chart, [{
    key: "initialize",
    value: function initialize() {
      var _this2 = this;

      this.tooltip = new francy_core__WEBPACK_IMPORTED_MODULE_0__["Tooltip"](this.options);
      this.element = this.parent.select('g.francy-content');
      this.axis = this.data.canvas.chart.axis;
      this.datasets = this.data.canvas.chart.data;
      this.datasetNames = Object.keys(this.datasets);
      this.xScale = d3.scaleLinear().range([0, this.width]).domain(this.axis.x.domain);
      this.yScale = d3.scaleLinear().range([this.height, 0]).domain(this.axis.y.domain);
      this.allValues = [];
      this.datasetNames.forEach(function (key) {
        return _this2.allValues = _this2.allValues.concat(_this2.datasets[key]);
      });

      if (!this.axis.y.domain.length) {
        this.yScale.domain([0, d3.max(this.allValues, function (d) {
          return d;
        })]);
      }

      if (!this.axis.x.domain.length) {
        this.xScale.domain([0, this.allValues.length / this.datasetNames.length]);
      }
    }
  }, {
    key: "_renderAxis",
    value: function _renderAxis() {
      // force rebuild axis again
      var xAxisGroup = this.element.selectAll('g.francy-x-axis');

      if (!xAxisGroup.node()) {
        xAxisGroup = this.element.append('g').attr('class', 'francy-x-axis');
      }

      xAxisGroup.selectAll('*').remove(); // add the x Axis

      xAxisGroup.attr('transform', "translate(0,".concat(this.height, ")")).call(d3.axisBottom(this.xScale)).append('text').attr('dy', 50).attr('dx', this.width / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(this.axis.x.title); // force rebuild axis again

      var yAxisGroup = this.element.selectAll('g.francy-y-axis');

      if (!yAxisGroup.node()) {
        yAxisGroup = this.element.append('g').attr('class', 'francy-y-axis');
      }

      yAxisGroup.selectAll('*').remove(); // add the y Axis

      yAxisGroup.call(d3.axisLeft(this.yScale)).append('text').attr('dx', -50).attr('dy', this.height / 2).attr('fill', 'black').attr('class', 'francy-axis').style('text-anchor', 'end').text(this.axis.y.title);
    }
  }, {
    key: "_renderLegend",
    value: function _renderLegend() {
      if (this.data.canvas.chart.showLegend) {
        var legendGroup = this.element.selectAll('.francy-legend');

        if (!legendGroup.node()) {
          legendGroup = this.element.append('g').attr('class', 'francy-legend');
        } // force rebuild legend again


        legendGroup.selectAll('*').remove();
        var legend = legendGroup.selectAll('g').data(this.datasetNames.slice());
        legend.exit().remove();
        legend = legend.enter().append('g').attr('transform', function (d, i) {
          return "translate(0,".concat(i * 20, ")");
        }).merge(legend);
        legend.append('rect').attr('x', this.width + 20).attr('width', 19).attr('height', 19).style('fill', function (d, i) {
          return Chart.colors(i * 5);
        });
        legend.append('text').attr('x', this.width + 80).attr('y', 9).attr('dy', '.35em').style('text-anchor', 'end').text(function (d) {
          return d;
        });
      }
    }
  }], [{
    key: "tooltip",
    value: function tooltip(dataset, value) {
      return {
        'A': {
          'title': 'Dataset',
          'text': dataset
        },
        'B': {
          'title': 'Value',
          'text': value
        }
      };
    }
  }, {
    key: "domainRange",
    value: function domainRange(max) {
      return Array.from(new Array(max), function (_, i) {
        return i;
      }).map(function (x) {
        return x;
      });
    }
  }, {
    key: "colors",
    get: function get() {
      return d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow);
    }
  }]);

  return Chart;
}(francy_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]);



/***/ }),

/***/ "../francy-renderer-d3/src/chart/factory.js":
/*!**************************************************!*\
  !*** ../francy-renderer-d3/src/chart/factory.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartFactory; });
/* harmony import */ var francy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! francy-core */ "../francy-core/index.js");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar */ "../francy-renderer-d3/src/chart/bar.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line */ "../francy-renderer-d3/src/chart/line.js");
/* harmony import */ var _scatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scatter */ "../francy-renderer-d3/src/chart/scatter.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }





var ChartFactory = (_dec = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Data.requires('canvas.chart'), (_class =
/*#__PURE__*/
function (_Renderer) {
  _inherits(ChartFactory, _Renderer);

  function ChartFactory(_ref) {
    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, ChartFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChartFactory).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
  }

  _createClass(ChartFactory, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var element, chart;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                element = undefined;
                chart = undefined;
                _context.t0 = this.data.canvas.chart.type;
                _context.next = _context.t0 === 'bar' ? 5 : _context.t0 === 'line' ? 7 : _context.t0 === 'scatter' ? 9 : 11;
                break;

              case 5:
                chart = new _bar__WEBPACK_IMPORTED_MODULE_1__["default"](this.options);
                return _context.abrupt("break", 11);

              case 7:
                chart = new _line__WEBPACK_IMPORTED_MODULE_2__["default"](this.options);
                return _context.abrupt("break", 11);

              case 9:
                chart = new _scatter__WEBPACK_IMPORTED_MODULE_3__["default"](this.options);
                return _context.abrupt("break", 11);

              case 11:
                _context.next = 13;
                return this.handlePromise(chart.load(this.data).render());

              case 13:
                element = _context.sent;

                if (element) {
                  setTimeout(element.parent.zoomToFit, this.transitionDuration);
                }

                return _context.abrupt("return", element);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }]);

  return ChartFactory;
}(francy_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy-renderer-d3/src/chart/line.js":
/*!***********************************************!*\
  !*** ../francy-renderer-d3/src/chart/line.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LineChart; });
/* harmony import */ var francy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! francy-core */ "../francy-core/index.js");
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart */ "../francy-renderer-d3/src/chart/chart.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }



/* global d3 */

var LineChart = (_dec = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Initializer.initialize(), (_class =
/*#__PURE__*/
function (_Chart) {
  _inherits(LineChart, _Chart);

  function LineChart(_ref) {
    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, LineChart);

    return _possibleConstructorReturn(this, _getPrototypeOf(LineChart).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
  }

  _createClass(LineChart, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var linesGroup, self;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                linesGroup = this.element.selectAll('g.francy-lines');

                if (!linesGroup.node()) {
                  linesGroup = this.element.append('g').attr('class', 'francy-lines');
                }

                self = this;
                this.datasetNames.forEach(function (key, index) {
                  var valueLine = d3.line().x(function (d, i) {
                    return self.xScale(i);
                  }).y(function (d) {
                    return self.yScale(d);
                  });
                  var line = linesGroup.selectAll(".francy-line-".concat(index)).data([self.datasets[key]]);
                  line.exit().transition().duration(750).style('fill-opacity', 1e-6).remove(); // append the rectangles for the bar chart

                  var lineEnter = line.enter().append('path').style('stroke', function () {
                    return _chart__WEBPACK_IMPORTED_MODULE_1__["default"].colors(index * 5);
                  }).style('stroke-width', '5px').attr('class', "francy-line-".concat(index)).attr('d', valueLine).on('mouseenter', function (d) {
                    d3.select(this).transition().duration(250).style('stroke-opacity', 0.5).style('stroke-width', '10px');
                    self.handlePromise(self.tooltip.load(_chart__WEBPACK_IMPORTED_MODULE_1__["default"].tooltip(key, d), true).render());
                  }).on('mouseleave', function () {
                    d3.select(this).transition().duration(250).style('stroke-opacity', 1).style('stroke-width', '5px');
                    self.tooltip.unrender();
                  });
                  lineEnter.merge(line);
                });

                this._renderAxis();

                this._renderLegend();

                return _context.abrupt("return", this);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }]);

  return LineChart;
}(_chart__WEBPACK_IMPORTED_MODULE_1__["default"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy-renderer-d3/src/chart/scatter.js":
/*!**************************************************!*\
  !*** ../francy-renderer-d3/src/chart/scatter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScatterChart; });
/* harmony import */ var francy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! francy-core */ "../francy-core/index.js");
/* harmony import */ var _chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart */ "../francy-renderer-d3/src/chart/chart.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }



/* global d3 */

var ScatterChart = (_dec = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Initializer.initialize(), (_class =
/*#__PURE__*/
function (_Chart) {
  _inherits(ScatterChart, _Chart);

  function ScatterChart(_ref) {
    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, ScatterChart);

    return _possibleConstructorReturn(this, _getPrototypeOf(ScatterChart).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
  }

  _createClass(ScatterChart, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var scatterGroup, self;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                scatterGroup = this.element.selectAll('g.francy-scatters');

                if (!scatterGroup.node()) {
                  scatterGroup = this.element.append('g').attr('class', 'francy-scatters');
                }

                self = this;
                this.datasetNames.forEach(function (key, index) {
                  var scatter = scatterGroup.selectAll(".francy-scatter-".concat(index)).data(self.datasets[key]);
                  scatter.exit().transition().duration(750).style('fill-opacity', 1e-6).remove(); // append the rectangles for the bar chart

                  var scatterEnter = scatter.enter().append('circle').style('fill', function () {
                    return _chart__WEBPACK_IMPORTED_MODULE_1__["default"].colors(index * 5);
                  }).attr('class', "francy-scatter-".concat(index)).attr('r', 5).attr('cx', function (d, i) {
                    return self.xScale(i);
                  }).attr('cy', function (d) {
                    return self.yScale(d);
                  }).on('mouseenter', function (d) {
                    d3.select(this).transition().duration(250).style('fill-opacity', 0.5).attr('r', 10);
                    self.handlePromise(self.tooltip.load(_chart__WEBPACK_IMPORTED_MODULE_1__["default"].tooltip(key, d), true).render());
                  }).on('mouseleave', function () {
                    d3.select(this).transition().duration(250).style('fill-opacity', 1).attr('r', 5);
                    self.tooltip.unrender();
                  });
                  scatterEnter.merge(scatter);
                });

                this._renderAxis();

                this._renderLegend();

                return _context.abrupt("return", this);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }]);

  return ScatterChart;
}(_chart__WEBPACK_IMPORTED_MODULE_1__["default"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy-renderer-d3/src/graph/factory.js":
/*!**************************************************!*\
  !*** ../francy-renderer-d3/src/graph/factory.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Graph; });
/* harmony import */ var francy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! francy-core */ "../francy-core/index.js");
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tree */ "../francy-renderer-d3/src/graph/tree.js");
/* harmony import */ var _generic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generic */ "../francy-renderer-d3/src/graph/generic.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }




var Graph = (_dec = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Data.requires('canvas.graph'), (_class =
/*#__PURE__*/
function (_Renderer) {
  _inherits(Graph, _Renderer);

  function Graph(_ref) {
    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Graph);

    return _possibleConstructorReturn(this, _getPrototypeOf(Graph).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
  }

  _createClass(Graph, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var element, graph;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                element = undefined;
                graph = element;
                _context.t0 = this.data.canvas.graph.type;
                _context.next = _context.t0 === 'tree' ? 5 : 7;
                break;

              case 5:
                graph = new _tree__WEBPACK_IMPORTED_MODULE_1__["default"](this.options);
                return _context.abrupt("break", 8);

              case 7:
                graph = new _generic__WEBPACK_IMPORTED_MODULE_2__["default"](this.options);

              case 8:
                _context.next = 10;
                return this.handlePromise(graph.load(this.data).render());

              case 10:
                element = _context.sent;

                if (element) {
                  setTimeout(element.parent.zoomToFit, this.transitionDuration);
                }

                return _context.abrupt("return", element);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }]);

  return Graph;
}(francy_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy-renderer-d3/src/graph/generic.js":
/*!**************************************************!*\
  !*** ../francy-renderer-d3/src/graph/generic.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericGraph; });
/* harmony import */ var francy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! francy-core */ "../francy-core/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }


/* global d3 */

var GenericGraph = (_dec = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Initializer.initialize(), (_class =
/*#__PURE__*/
function (_Graph) {
  _inherits(GenericGraph, _Graph);

  function GenericGraph(_ref) {
    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, GenericGraph);

    return _possibleConstructorReturn(this, _getPrototypeOf(GenericGraph).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
  }

  _createClass(GenericGraph, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var self, loader, simulationActive, canvasNodes, canvasLinks, linkGroup, links, linksToAdd, link, defs, nodeGroup, nodes, nodesToAdd, node, linkEnter, nodeEnter, radius, symbolRadius, ylayered, xlayered, simulation, safeTicked, safeEnd, linkForce, chargeStrength, endSimulation, edges, labels, ticked, connectedNodes, nodeOnClick;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ticked = function _ref3() {
                  edges.attr('d', function (d) {
                    if (d.source.id === d.target.id) {
                      return "M".concat(d.source.x, ",").concat(d.source.y, " A").concat(d.target.size + 10, ",").concat(d.target.size + 10, " -45,1,0 ").concat(d.source.x - 1, ",").concat(d.source.y);
                    }

                    return "M".concat(d.source.x, ",").concat(d.source.y, " L").concat(d.target.x, ",").concat(d.target.y);
                  });

                  if (self.data.canvas.graph.type === 'directed') {
                    link.each(function () {
                      var g = d3.select(this),
                          data = g.data()[0],
                          pathEl = g.select('path.francy-edge').node(),
                          pathLength = pathEl.getTotalLength(),
                          nodeEl = d3.select("#".concat(data.target.id, " > path.francy-symbol")).node(),
                          nodeSize = (Math.floor(nodeEl.getBBox().width) + 4) / 2,
                          pathPoint = pathEl.getPointAtLength(pathLength - nodeSize - (data.weight || 1)),
                          pathPoint2 = pathEl.getPointAtLength(pathLength - nodeSize),
                          x1 = pathPoint.x,
                          y1 = pathPoint.y,
                          x2 = pathPoint2.x,
                          y2 = pathPoint2.y;

                      if (data.source.id === data.target.id) {
                        x2 += (x1 - x2) / (y1 - y2);
                        y2 += (y1 - y2) / (x1 - x2);
                      }

                      g.select('path.francy-edge-arrow').attr('d', "M".concat(x1, ",").concat(y1, " L").concat(x2, ",").concat(y2));
                    });
                  }

                  labels.attr('x', function (d) {
                    return francy_core__WEBPACK_IMPORTED_MODULE_0__["Graph"].linkXPos(d.target, d.source);
                  }).attr('y', function (d) {
                    return francy_core__WEBPACK_IMPORTED_MODULE_0__["Graph"].linkYPos(d.target, d.source);
                  });
                  node.attr('transform', function (d) {
                    return "translate(".concat(d.x, ",").concat(d.y, ")");
                  });
                };

                endSimulation = function _ref2() {
                  self.parent.attr('visibility', 'visible');
                  safeTicked.handle();
                  self.parent.zoomToFit();
                  loader.hide();
                };

                self = this, loader = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Loader.withContext(this).show(), simulationActive = this.data.canvas.graph.simulation || francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.simulation, canvasNodes = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [], canvasLinks = this.data.canvas.graph.links ? Object.values(this.data.canvas.graph.links) : [];
                linkGroup = this.element.selectAll('g.francy-links');

                if (!linkGroup.node()) {
                  linkGroup = this.element.append('g').classed('francy-links', true);
                }

                links = linkGroup.selectAll('g.francy-link').data();
                linksToAdd = this._filterNewElements(canvasLinks, links);
                link = linkGroup.selectAll('g.francy-link').data(linksToAdd, function (d) {
                  return d.id;
                });

                if (this.data.canvas.graph.type === 'directed') {
                  // this means we need arrows, so we append the markers
                  defs = this.parent.select('defs');

                  if (!defs.node()) {
                    defs = this.parent.append('defs');
                  }

                  defs.selectAll('marker').data(linksToAdd).enter().append('marker').classed('francy-arrows', true).attr('id', function (d) {
                    return "arrow-".concat(d.id);
                  }).attr('viewBox', '0 -5 10 10').attr('markerUnits', 'strokeWidth').attr('orient', 'auto').append('path').attr('d', 'M0,-5 L10,0 L0,5').style('fill', function (d) {
                    return d.color || '#000';
                  });
                }

                nodeGroup = this.element.selectAll('g.francy-nodes');

                if (!nodeGroup.node()) {
                  nodeGroup = this.element.append('g').classed('francy-nodes', true);
                }

                nodes = nodeGroup.selectAll('g.francy-node').data();
                nodesToAdd = this._filterNewElements(canvasNodes, nodes);
                node = nodeGroup.selectAll('g.francy-node').data(nodesToAdd, function (d) {
                  return d.id;
                }); // this means no changes, so we can safely return

                if (!(node.exit().data().length === 0 && node.enter().data().length === 0 && link.enter().data().length === 0 && link.exit().data().length === 0)) {
                  _context.next = 17;
                  break;
                }

                loader.hide();
                return _context.abrupt("return");

              case 17:
                linkEnter = link.enter().append('g').classed('francy-link', true);
                linkEnter.append('path').classed('francy-edge', true).style('fill', 'none').style('stroke-width', function (d) {
                  return d.invisible ? 0 : Math.sqrt(d.weight || 1);
                }).style('stroke', function (d) {
                  return d.color || '#000';
                });

                if (this.data.canvas.graph.type === 'directed') {
                  linkEnter.append('path').classed('francy-edge-arrow', true).style('stroke', 'none').style('marker-start', function (d) {
                    return "url(#arrow-".concat(d.id, ")");
                  }).style('stroke-width', function (d) {
                    return d.invisible ? 0 : Math.sqrt(d.weight || 1);
                  });
                }

                linkEnter.filter(function (d) {
                  return d.title;
                }).append('text').classed('francy-label', true) //.style('font - size', d => d.invisible ? 0 : 7 * Math.sqrt(d.weight || 1))
                .style('opacity', 0.1).style('opacity', 0.1).text(function (d) {
                  return d.title;
                }).attr('text-anchor', 'middle');
                link.exit().remove();
                link = linkGroup.selectAll('g.francy-link'); // on mouse over show labels opacity 1

                this.graphOperations.labelsOpacityBehavior(link);
                nodeEnter = node.enter().append('g').attr('id', function (d) {
                  return d.id;
                }).classed('francy-node', true).classed('francy-highlight', true).classed('francy-selected', function (d) {
                  return d.selected;
                });
                nodeEnter.append('path').attr('d', d3.symbol().type(function (d) {
                  return francy_core__WEBPACK_IMPORTED_MODULE_0__["Graph"].getSymbol(d.type);
                }).size(function (d) {
                  return d.size * 100;
                })).style('fill', function (d) {
                  return d.conjugate ? francy_core__WEBPACK_IMPORTED_MODULE_0__["Graph"].colors(d.conjugate * 5) : d.color ? d.color : francy_core__WEBPACK_IMPORTED_MODULE_0__["Graph"].colors(d.layer * 5);
                }).classed('francy-symbol', true).classed('francy-context', function (d) {
                  return Object.values(d.menus).length && Object.values(d.menus).length > 0;
                });
                nodeEnter.filter(function (d) {
                  return d.title;
                }).append('text').classed('francy-label', true).text(function (d) {
                  return d.title;
                }) //.style('font-size', d => 7 * Math.sqrt(d.size))
                .attr('x', function () {
                  var _this = this;

                  // apply mathjax if this is the case
                  var text = d3.select(this);

                  if (text.text().startsWith('$') && text.text().endsWith('$')) {
                    // we need to set the position after re-render the latex
                    self.handlePromise(self.mathjax.settings({
                      appendTo: {
                        element: text
                      },
                      renderType: 'SVG',
                      postFunction: function postFunction() {
                        text.attr('x', self.setLabelXPosition(_this));
                        simulation.restart();
                      }
                    }).render());
                  }

                  return self.setLabelXPosition(this);
                });
                node.exit().remove();
                node = nodeGroup.selectAll('g.francy-node');

                if (simulationActive) {
                  radius = 0, symbolRadius = 0, ylayered = false, xlayered = false;
                  node.each(function () {
                    var bound = this.getBBox(); // calculate default radius for colisions
                    // check the widest group Bounding Box

                    if (radius < bound.width) {
                      radius = bound.width;
                    } // check the widest path Bounding Box


                    var node = d3.select(this);
                    var symbolBound = node.select('path.francy-symbol').node().getBBox();

                    if (symbolRadius < symbolBound.width) {
                      symbolRadius = symbolBound.width;
                    } // check whether the graph will be layered on y - hasse


                    if (node.data()[0].layer != 0) {
                      ylayered = true;
                    } // check whether the graph will be layered on x


                    if (node.data()[0].conjugate != 0) {
                      xlayered = true;
                    }
                  }); //Canvas Forces

                  simulation = d3.forceSimulation(), safeTicked = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Error.wrap(ticked).withContext(self).onErrorThrow(false).onErrorExec(simulation.stop), safeEnd = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Error.wrap(endSimulation).withContext(self);
                  linkForce = d3.forceLink(canvasLinks).id(function (d) {
                    return d.id;
                  }).distance(function (d) {
                    return d.length || 100;
                  });
                  chargeStrength = -5 * Math.log(nodesToAdd.length) * Math.log(linksToAdd.length);
                  chargeStrength = chargeStrength < -400 ? chargeStrength : -400;
                  simulation.nodes(nodesToAdd).force('charge-1', ylayered ? undefined : d3.forceManyBody().strength(chargeStrength * 0.15)).force('x', xlayered ? d3.forceX(function (d) {
                    return d.conjugate ? +d.conjugate % 2 === 0 ? 0 : self.data.canvas.width : self.data.canvas.width / 2;
                  }) : d3.forceX()).force('y', ylayered ? d3.forceY(function (d) {
                    return +d.layer * 100;
                  }).strength(1) : d3.forceY()).force('charge-2', d3.forceManyBody().strength(chargeStrength)) //.force('link', ylayered ? linkForce.strength(d => d.weight ? Math.sqrt(d.weight) % 1 : 1 / (linksToAdd.length + 1)) : linkForce)
                  .force('link', ylayered ? linkForce.strength(1 / (linksToAdd.length + 1)) : linkForce).force('collide', d3.forceCollide().radius((radius > symbolRadius ? radius : symbolRadius * 1.5) / 2)).on('tick', function () {
                    return safeTicked.handle();
                  }).on('end', function () {
                    return safeEnd.handle();
                  });

                  if (nodesToAdd.length >= 1000 || linksToAdd.length >= 1000) {
                    self.parent.attr('visibility', 'hidden');
                    simulation.alphaMin(0.05).on('tick', undefined);
                  }
                } else {
                  // well, simulation is off
                  endSimulation();
                }

                edges = link.selectAll('path.francy-edge');
                labels = link.selectAll('text.francy-label');
                this.graphOperations.dragBehavior(node, simulation, simulationActive).call(this, francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.dragNodes);

                if (node && !node.empty()) {
                  this._applyEvents(node);

                  connectedNodes = self.graphOperations.connectedNodes(node, canvasNodes, link, canvasLinks);
                  nodeOnClick = node.on('click');
                  node.on('click', function (d) {
                    // default, highlight connected nodes
                    connectedNodes.call(this); // any callbacks will be handled here

                    nodeOnClick && nodeOnClick.call(this, d);
                  });
                  link.on('click', function () {
                    // default, highlight connected nodes
                    connectedNodes.call(this);
                  });
                }

                return _context.abrupt("return", this);

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }, {
    key: "_filterNewElements",
    value: function _filterNewElements(canvasObjects, d3Element) {
      var newElements = [];
      canvasObjects.forEach(function (o) {
        var data = d3Element.find(function (d) {
          return d.id === o.id;
        });

        if (data) {
          var tmp = Object.assign({}, o);
          delete tmp.source;
          delete tmp.target;
          delete tmp.x;
          delete tmp.y; // ignore these

          newElements.push(Object.assign(data, tmp));
        } else {
          newElements.push(o);
        }
      });
      return newElements;
    }
  }]);

  return GenericGraph;
}(francy_core__WEBPACK_IMPORTED_MODULE_0__["Graph"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy-renderer-d3/src/graph/tree.js":
/*!***********************************************!*\
  !*** ../francy-renderer-d3/src/graph/tree.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TreeGraph; });
/* harmony import */ var francy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! francy-core */ "../francy-core/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }


/* global d3 */

var TreeGraph = (_dec = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Initializer.initialize(), (_class =
/*#__PURE__*/
function (_Graph) {
  _inherits(TreeGraph, _Graph);

  function TreeGraph(_ref) {
    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, TreeGraph);

    return _possibleConstructorReturn(this, _getPrototypeOf(TreeGraph).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
  }

  _createClass(TreeGraph, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var nodes, i, root, levelWidth, childCount, size, treemap, collapse, update, _update;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _update = function _ref6() {
                  _update = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(source) {
                    var self, treeData, nodes, links, linkGroup, link, linkEnter, diagonal, nodeGroup, node, nodeEnter, nodeUpdate, nodeOnClick, click;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            click = function _ref3(d) {
                              if (d.children) {
                                d._children = d.children;
                                d.children = null;
                              } else {
                                d.children = d._children;
                                d._children = null;
                              }

                              update.call(self, d).catch(function (error) {
                                return self.logger.warn(error);
                              }).then(setTimeout(self.parent.zoomToFit, self.transitionDuration));
                            };

                            diagonal = function _ref2(s, d) {
                              return "M ".concat(s.y, " ").concat(s.x, "\n            C ").concat((s.y + d.y) / 2, " ").concat(s.x, ",\n              ").concat((s.y + d.y) / 2, " ").concat(d.x, ",\n              ").concat(d.y, " ").concat(d.x);
                            };

                            self = this;
                            treeData = treemap(root);
                            nodes = treeData.descendants(), links = treeData.descendants().slice(1);
                            nodes.forEach(function (d) {
                              return d.y = d.depth * 100;
                            });
                            linkGroup = this.element.selectAll('g.francy-links');

                            if (!linkGroup.node()) {
                              linkGroup = this.element.append('g').attr('class', 'francy-links');
                            }

                            link = linkGroup.selectAll('g.francy-link').data(links, function (d) {
                              return d.id || (d.id = ++i);
                            });
                            linkEnter = link.enter().append('g').classed('francy-link', true);
                            linkEnter.append('path').attr('class', 'francy-edge').style('fill', 'none').style('stroke-width', function (d) {
                              return d.invisible ? 0 : Math.sqrt(d.weight || 1);
                            }).style('stroke', function (d) {
                              return d.color || '#000';
                            }).attr('d', function () {
                              var o = {
                                x: source.x0,
                                y: source.y0
                              };
                              return diagonal(o, o);
                            });
                            linkEnter.merge(link).selectAll('path.francy-edge').transition().duration(this.transitionDuration).attr('d', function (d) {
                              return diagonal(d, d.parent);
                            });
                            link.exit().selectAll('path.francy-edge').transition().duration(this.transitionDuration).attr('d', function () {
                              var o = {
                                x: source.x,
                                y: source.y
                              };
                              return diagonal(o, o);
                            }).remove();
                            link.exit().transition().duration(this.transitionDuration).remove();
                            nodes.forEach(function (d) {
                              d.x0 = d.x;
                              d.y0 = d.y;
                            });
                            nodeGroup = this.element.selectAll('g.francy-nodes');

                            if (!nodeGroup.node()) {
                              nodeGroup = this.element.append('g').attr('class', 'francy-nodes');
                            }

                            node = nodeGroup.selectAll('g.francy-node').data(nodes, function (d) {
                              return d.id || (d.id = ++i);
                            });
                            nodeEnter = node.enter().append('g').attr('id', function (d) {
                              return d.id;
                            }).attr('class', 'francy-node').attr('transform', function () {
                              return "translate(".concat(source.y0, ",").concat(source.x0, ")");
                            });
                            nodeEnter.append('path').attr('d', d3.symbol().type(function (d) {
                              return francy_core__WEBPACK_IMPORTED_MODULE_0__["Graph"].getSymbol(d.data.type);
                            }).size(function (d) {
                              return d.data.size * 100;
                            })).attr('class', 'francy-symbol');
                            nodeEnter.filter(function (d) {
                              return d.data.title;
                            }).append('text').attr('class', 'francy-label').text(function (d) {
                              return d.data.title;
                            }).style('font-size', function (d) {
                              return 7 * Math.sqrt(d.weight || 1);
                            }).style('cursor', function (d) {
                              return d.children || d._children ? 'pointer' : 'default';
                            }).attr('x', function () {
                              var _this = this;

                              // apply mathjax if this is the case
                              var text = d3.select(this);

                              if (text.text().startsWith('$') && text.text().endsWith('$')) {
                                // we need to set the position after re-render the latex
                                self.handlePromise(self.mathjax.settings({
                                  appendTo: {
                                    element: text
                                  },
                                  renderType: 'SVG',
                                  postFunction: function postFunction() {
                                    text.attr('x', self.setLabelXPosition(_this));
                                  }
                                }).render());
                              }

                              return self.setLabelXPosition(this);
                            });
                            nodeUpdate = nodeEnter.merge(node);
                            nodeUpdate.transition().duration(this.transitionDuration).attr('transform', function (d) {
                              return "translate(".concat(d.y, ",").concat(d.x, ")");
                            });
                            node.exit().transition().duration(this.transitionDuration).attr('transform', function () {
                              return "translate(".concat(source.y, ",").concat(source.x, ")");
                            }).remove();
                            nodeGroup.selectAll('path.francy-symbol').style('fill', function (d) {
                              return d.children || d._children ? '#fff' : francy_core__WEBPACK_IMPORTED_MODULE_0__["Graph"].colors(d.data.layer * 5);
                            }).style('cursor', function (d) {
                              return d.children || d._children ? 'pointer' : 'default';
                            });
                            node = nodeGroup.selectAll('g.francy-node');

                            if (node.node()) {
                              this._applyEvents(node);

                              nodeOnClick = node.on('click');
                              node.on('click', function (d) {
                                // any callbacks will be handled here
                                nodeOnClick.call(this, d.data); // default, highlight connected nodes

                                click.call(this, d);
                              });
                            } // Toggle children on click.


                          case 27:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));
                  return _update.apply(this, arguments);
                };

                update = function _ref5(_x) {
                  return _update.apply(this, arguments);
                };

                collapse = function _ref4(d) {
                  if (d.children) {
                    d._children = d.children;

                    d._children.forEach(collapse);

                    d.children = null;
                  }
                };

                nodes = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [], i = 0;
                root = d3.stratify().id(function (d) {
                  return d.id;
                }).parentId(function (d) {
                  return d.parent;
                })(nodes);
                root.x0 = this.height / 2;
                root.y0 = 0; // compute height based on the depth of the graph

                levelWidth = [1];

                childCount = function childCount(level, n) {
                  if (n.children && n.children.length > 0) {
                    if (levelWidth.length <= level + 1) levelWidth.push(0);
                    levelWidth[level + 1] += n.children.length;
                    n.children.forEach(function (d) {
                      childCount(level + 1, d);
                    });
                  }
                };

                childCount(0, root);
                size = d3.max(levelWidth) * 100;
                treemap = d3.tree().size([size, size]).separation(function (a, b) {
                  return a.parent == b.parent ? a.data.size : a.data.size * 2;
                });

                if (this.data.canvas.graph.collapsed) {
                  root.children.forEach(collapse);
                }

                update.call(this, root).catch(function (error) {
                  return francy_core__WEBPACK_IMPORTED_MODULE_0__["Logger"].warn(error);
                }).then(setTimeout(this.parent.zoomToFit, this.transitionDuration));
                return _context2.abrupt("return", this);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }]);

  return TreeGraph;
}(francy_core__WEBPACK_IMPORTED_MODULE_0__["Graph"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy-renderer-graphviz/index.js":
/*!********************************************!*\
  !*** ../francy-renderer-graphviz/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/canvas */ "../francy-renderer-graphviz/src/canvas.js");

/* global Francy */

var name = 'GraphViz-Renderer'; // we're expecting Francy to be loaded already!

Francy.RenderingManager.register({
  name: name,
  renderer: _src_canvas__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "../francy-renderer-graphviz/src/canvas.js":
/*!*************************************************!*\
  !*** ../francy-renderer-graphviz/src/canvas.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
/* harmony import */ var francy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! francy-core */ "../francy-core/index.js");
/* harmony import */ var _graph_generic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graph/generic */ "../francy-renderer-graphviz/src/graph/generic.js");
/* harmony import */ var _chart_generic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart/generic */ "../francy-renderer-graphviz/src/chart/generic.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }




/* global d3 */

var Canvas = (_dec = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Data.requires('canvas'), (_class =
/*#__PURE__*/
function (_CompositeRenderer) {
  _inherits(Canvas, _CompositeRenderer);

  function Canvas(_ref) {
    var _this;

    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Canvas);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Canvas).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));

    _this.add(new _graph_generic__WEBPACK_IMPORTED_MODULE_1__["default"](_this.options)).add(new _chart_generic__WEBPACK_IMPORTED_MODULE_2__["default"](_this.options));

    _this.graphvizEngines = ['circo', 'dot', 'fdp', 'neato', 'osage', 'patchwork', 'twopi'];
    _this.graphvizRankdirs = {
      'TB': 'Top to Bottom',
      'LR': 'Left to Right',
      'BT': 'Bottom to Top',
      'RL': 'Right to Left'
    }; // this only adds if does not exist

    francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].addProperty('graphvizEngine', 'dot');
    francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].addProperty('graphvizRankdir', 'TB');
    return _this;
  }

  _createClass(Canvas, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var self, frameId, svg, updateZoom, zoomToFit;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                zoomToFit = function _ref3(force) {
                  // only execute if enable, of course
                  if (self.data.canvas.zoomToFit || force) {
                    var bounds = self.element.select('g.francy-content').node().getBBox();
                    var clientBounds = self.element.node().getBoundingClientRect(),
                        fullWidth = clientBounds.right - clientBounds.left,
                        fullHeight = clientBounds.bottom - clientBounds.top;
                    var width = +bounds.width,
                        height = +bounds.height;
                    if (width === 0 || height === 0) return;
                    var midX = bounds.x + width / 2,
                        midY = bounds.y + height / 2;
                    var scale = 0.9 / Math.max(width / fullWidth, height / fullHeight);
                    var translateX = fullWidth / 2 - scale * midX,
                        translateY = fullHeight / 2 - scale * midY;
                    self.element.select('g.francy-content').transition().duration(self.transitionDuration).attr('transform', "translate(".concat(translateX, ",").concat(translateY, ")scale(").concat(scale, ",").concat(scale, ")")).on('end', function () {
                      return updateZoom(translateX, translateY, scale);
                    });
                  }
                };

                updateZoom = function _ref2(translateX, translateY, scale) {
                  self.element.call(self.zoom.transform, d3.zoomIdentity.translate(translateX, translateY).scale(scale, scale));
                };

                self = this;
                frameId = "Frame-".concat(this.data.canvas.id);
                svg = d3.select("div#".concat(frameId, ">svg"));

                if (!svg.node() || !svg.node().__data__) {
                  d3.select("div#".concat(frameId, ">svg")).remove();
                } // graphviz creates the svg element, 
                // so we pick the frame instead


                this.element = d3.select("div#".concat(frameId));
                this.element.zoomToFit = this.zoomToFit = zoomToFit;
                francy_core__WEBPACK_IMPORTED_MODULE_0__["Logger"].debug("Canvas updated [".concat(frameId, "]..."));

                this._buildMenu();

                this.handlePromise(this.renderChildren());
                return _context.abrupt("return", this);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }, {
    key: "_buildMenu",
    value: function _buildMenu() {
      var _this2 = this;

      var self = this; // here we have access to MainMenu

      this.graphvizEngines.forEach(function (engine) {
        _this2.parentClass.MainMenu.addMultiMenuOnSettingsMenu({
          menuId: 'graphviz-engines-entry',
          menuTitle: 'Viz Engine',
          entryId: "graphviz-engine-".concat(engine, "-entry"),
          entryTitle: "".concat(francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.graphvizEngine === engine ? '&#9745' : '&#9744', " ").concat(engine),
          entryOnClickCallback: function entryOnClickCallback() {
            francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.graphvizEngine = engine;
          },
          entryOnEachCallback: function entryOnEachCallback() {
            var engineCheckId = "graphvizEngine-checkbox-".concat(self.data.canvas.id);
            francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].subscribe('graphvizEngine', function (value) {
              d3.select(this).html("".concat(value === engine ? '&#9745' : '&#9744', " ").concat(engine));
            }, engineCheckId);
          }
        });
      }); // re-render when engine changes

      var engineRenderId = "graphvizEngine-reRender-".concat(self.data.canvas.id);
      francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].subscribe('graphvizEngine', function () {
        // remove previous rendered canvas
        self.element.select('g').selectAll('*').remove(); // re-render

        setTimeout(function () {
          var Renderer = francy_core__WEBPACK_IMPORTED_MODULE_0__["RenderingManager"].activeRenderer();
          self.handlePromise(new Renderer(self.options).load(self.data).render());
        }, 100);
      }, engineRenderId);
      Object.keys(this.graphvizRankdirs).forEach(function (dir) {
        _this2.parentClass.MainMenu.addMultiMenuOnSettingsMenu({
          menuId: 'graphviz-rankdir-entry',
          menuTitle: 'Viz Rankdir',
          entryId: "graphviz-rankdir-".concat(dir, "-entry"),
          entryTitle: "".concat(francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.graphvizRankdir === dir ? '&#9745' : '&#9744', " ").concat(self.graphvizRankdirs[dir]),
          entryOnClickCallback: function entryOnClickCallback() {
            francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.graphvizRankdir = dir;
          },
          entryOnEachCallback: function entryOnEachCallback() {
            var dirCheckId = "graphvizEngine-rankdir-".concat(self.data.canvas.id);
            francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].subscribe('graphvizRankdir', function (value) {
              d3.select(this).html("".concat(value === dir ? '&#9745' : '&#9744', " ").concat(dir));
            }, dirCheckId);
          }
        });
      }); // re-render when engine changes

      var dirRenderId = "graphvizRankdir-reRender-".concat(self.data.canvas.id);
      francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].subscribe('graphvizRankdir', function () {
        // remove previous rendered canvas
        self.element.select('g').selectAll('*').remove(); // re-render

        setTimeout(function () {
          var Renderer = francy_core__WEBPACK_IMPORTED_MODULE_0__["RenderingManager"].activeRenderer();
          self.handlePromise(new Renderer(self.options).load(self.data).render());
        }, 100);
      }, dirRenderId); // remove menu if renderer is disabled

      var rendererDisableId = "graphvizEngine-disable-".concat(self.data.canvas.id);
      francy_core__WEBPACK_IMPORTED_MODULE_0__["RenderingManager"].subscribe(francy_core__WEBPACK_IMPORTED_MODULE_0__["RENDERING_EVENTS"].STATUS, function (r) {
        if (!r.enable) {
          self.parentClass.MainMenu.removeMenuEntry('graphviz-engines-entry');
          self.parentClass.MainMenu.removeMenuEntry('graphviz-rankdir-entry');
        }
      }, rendererDisableId);

      if (this.data.canvas.graph) {
        this.parentClass.MainMenu.addMultiMenuOnSettingsMenu({
          menuId: 'graph-settings-entry',
          menuTitle: 'Graph',
          entryId: 'neighbours-entry',
          entryTitle: "".concat(francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.showNeighbours ? '&#9745' : '&#9744', " Show Neighbours"),
          entryOnClickCallback: function entryOnClickCallback() {
            francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.showNeighbours = !francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.showNeighbours;
          },
          entryOnEachCallback: function entryOnEachCallback() {
            var _this3 = this;

            var showNeighboursId = "showNeighbours-onChange-".concat(self.data.canvas.id);
            francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].subscribe('showNeighbours', function (value) {
              d3.select(_this3).html("".concat(value ? '&#9745' : '&#9744', " Show Neighbours"));
            }, showNeighboursId);
          }
        });
        var removeMenuId = "graphSettings-removeMenu-".concat(self.data.canvas.id); // remove menu if renderer is disabled

        francy_core__WEBPACK_IMPORTED_MODULE_0__["RenderingManager"].subscribe(francy_core__WEBPACK_IMPORTED_MODULE_0__["RENDERING_EVENTS"].STATUS, function (r) {
          if (!r.enable) {
            _this2.parentClass.MainMenu.removeMenuEntry('graph-settings-entry');
          }
        }, removeMenuId);
      }
    }
  }]);

  return Canvas;
}(francy_core__WEBPACK_IMPORTED_MODULE_0__["CompositeRenderer"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy-renderer-graphviz/src/chart/generic.js":
/*!********************************************************!*\
  !*** ../francy-renderer-graphviz/src/chart/generic.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChartGeneric; });
/* harmony import */ var francy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! francy-core */ "../francy-core/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }


/* global d3 */

var ChartGeneric = (_dec = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Data.requires('canvas.chart'), (_class =
/*#__PURE__*/
function (_Renderer) {
  _inherits(ChartGeneric, _Renderer);

  function ChartGeneric(_ref) {
    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, ChartGeneric);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChartGeneric).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
  }

  _createClass(ChartGeneric, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var canvasId;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                canvasId = "Canvas-".concat(this.data.canvas.id);
                this.parentClass.element = this.parent.append('svg').classed('francy-canvas', true).attr('xmlns', 'http://www.w3.org/2000/svg').attr('xmlns:xlink', 'http://www.w3.org/1999/xlink').attr('id', canvasId).attr('width', '100%').attr('height', this.data.canvas.height);
                this.element = this.parentClass.element.append('g').classed('francy-content', true).classed('graph', true).attr('id', 'graph0').append('text').text('Not supported by this renderer...');
                this.options.appendTo.zoom = d3.zoom();
                this.parentClass.zoomToFit(true);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }]);

  return ChartGeneric;
}(francy_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy-renderer-graphviz/src/graph/generic.js":
/*!********************************************************!*\
  !*** ../francy-renderer-graphviz/src/graph/generic.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GraphGeneric; });
/* harmony import */ var francy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! francy-core */ "../francy-core/index.js");
/* harmony import */ var _util_dot_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/dot-converter */ "../francy-renderer-graphviz/src/util/dot-converter.js");
var _dec, _dec2, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }



/* global d3 */

var GraphGeneric = (_dec = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Data.requires('canvas.graph'), _dec2 = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Initializer.initialize(), (_class =
/*#__PURE__*/
function (_Graph) {
  _inherits(GraphGeneric, _Graph);

  function GraphGeneric(_ref) {
    var _this;

    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, GraphGeneric);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GraphGeneric).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
    _this.callback = new francy_core__WEBPACK_IMPORTED_MODULE_0__["Callback"](_this.options);
    _this.tooltip = new francy_core__WEBPACK_IMPORTED_MODULE_0__["Tooltip"](_this.options);
    _this.contextMenu = new francy_core__WEBPACK_IMPORTED_MODULE_0__["ContextMenu"](_this.options);
    return _this;
  }

  _createClass(GraphGeneric, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var self, loader, dot, canvasNodes, canvasLinks;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this, loader = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Loader.withContext(this).show(), dot = new _util_dot_converter__WEBPACK_IMPORTED_MODULE_1__["default"]().load(this.data).convert(), canvasNodes = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [], canvasLinks = this.data.canvas.graph.links ? Object.values(this.data.canvas.graph.links) : [];
                self.parent.graphviz().logEvents(false).fade(false).engine(francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.graphvizEngine).keyMode('id').dot(dot).render(function () {
                  self.parentClass.element = this._selection.selectWithoutDataPropagation('svg');
                  self.parentClass.element.attr('width', '100%').attr('height', self.data.canvas.height).attr('viewBox', undefined).attr('id', "Canvas-".concat(self.data.canvas.id)).classed('francy-canvas', true);
                  self.options.appendTo.zoom = this.zoomBehavior();
                  self.element = self.parentClass.element.selectWithoutDataPropagation('g');
                  self.element.classed('francy-content', true);
                  self.element.selectAll('title').remove();
                  self.element.selectWithoutDataPropagation('polygon').remove();
                  var nodesG = self.element.append('g').classed('francy-nodes', true);
                  var linksG = self.element.append('g').classed('francy-links', true);
                  var nodes = self.element.selectAll('.node');
                  var links = self.element.selectAll('.edge');
                  nodes.each(function (d) {
                    Object.assign(d, self.data.canvas.graph.nodes[d.key]);
                  }).classed('francy-node', true).classed('francy-highlight', true).classed('francy-selected', function (d) {
                    return d.selected;
                  });
                  nodes.selectAll('text').classed('francy-label', true).attr('x', function () {
                    // apply mathjax if this is the case
                    var text = d3.select(this);

                    if (text.text().startsWith('$') && text.text().endsWith('$')) {
                      // we need to set the position after re-render the latex
                      var x = text.datum().attributes.x;
                      var y = text.datum().attributes.y;
                      var parentG = d3.select(text.node().parentNode);
                      self.handlePromise(self.mathjax.settings({
                        appendTo: {
                          element: text
                        },
                        renderType: 'SVG',
                        postFunction: function postFunction() {
                          var svg = parentG.select('svg');
                          self.setLabelXPosition(svg, x);
                          self.setLabelYPosition(svg, y);
                        }
                      }).render());
                    }

                    return text.datum().attributes.x;
                  });
                  links.classed('francy-link', true).each(function (d) {
                    Object.assign(d, self.data.canvas.graph.links[d.key]);
                  });
                  var removedNodes = nodes.remove();
                  var removedLinks = links.remove();
                  removedNodes.each(function () {
                    nodesG.node().appendChild(d3.select(this).node());
                  });
                  removedLinks.each(function () {
                    linksG.node().appendChild(d3.select(this).node());
                  });

                  self._applyEvents(nodes);

                  var connectedNodes = self._connectedNodes(nodes, canvasNodes, links, canvasLinks);

                  var nodeOnClick = nodes.on('click');
                  nodes.on('click', function (d) {
                    // default, highlight connected nodes
                    connectedNodes.call(this); // any callbacks will be handled here

                    nodeOnClick && nodeOnClick.call(this, d);
                  });
                  links.on('click', function () {
                    // default, highlight connected nodes
                    connectedNodes.call(this);
                  });
                  self.parentClass.zoomToFit(true);
                  loader.hide();
                }).onerror(function () {
                  loader.hide();
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }, {
    key: "setLabelXPosition",
    value: function setLabelXPosition(element, x) {
      var width = element.node().width.baseVal.value;
      element.attr('x', Math.ceil(Number(x) - width / 2));
    }
  }, {
    key: "setLabelYPosition",
    value: function setLabelYPosition(element, y) {
      var height = element.node().height.baseVal.value;
      element.attr('y', Math.ceil(Number(y) - height / 2));
    }
  }, {
    key: "_connectedNodes",
    value: function _connectedNodes(node, canvasNodes, link, canvasLinks) {
      var self = this; //Toggle stores whether the highlighting is on

      var toggle = false; //Create an array logging what is connected to what

      var linkedByIndex = {};
      canvasLinks.forEach(function (d) {
        var sourceId = _typeof(d.source) === 'object' ? d.source.id : d.source;
        var targetId = _typeof(d.target) === 'object' ? d.target.id : d.target;
        linkedByIndex["".concat(sourceId, ",").concat(sourceId)] = true;
        linkedByIndex["".concat(targetId, ",").concat(targetId)] = true;
        linkedByIndex["".concat(sourceId, ",").concat(targetId)] = true;
      });

      function connected() {
        var _this2 = this;

        if (!francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.showNeighbours) return;
        var el = d3.select(this);

        if (!toggle) {
          //Reduce the opacity of all but the neighbouring nodes
          var d = el.datum();

          if (el.attr('class').includes('francy-node')) {
            node.style('opacity', function (o) {
              return linkedByIndex["".concat(d.id, ",").concat(o.id)] || linkedByIndex["".concat(o.id, ",").concat(d.id)] ? 1 : 0.1;
            });
            link.style('opacity', function (o) {
              var localTargetId = _typeof(o.target) === 'object' ? o.target.id : o.target;
              var localSourceId = _typeof(o.source) === 'object' ? o.source.id : o.source;
              var opacity = d.id === localSourceId || d.id === localTargetId ? 1 : 0.1;
              d3.select(this).on('mouseleave', undefined).select('text').style('opacity', opacity);
              return opacity;
            });
          } else if (el.attr('class').includes('francy-link')) {
            var sourceId = _typeof(d.source) === 'object' ? d.source.id : d.source;
            var targetId = _typeof(d.target) === 'object' ? d.target.id : d.target;
            node.style('opacity', function (o) {
              return sourceId === o.id || targetId === o.id ? 1 : 0.1;
            });
            link.style('opacity', function (o) {
              var localTargetId = _typeof(o.target) === 'object' ? o.target.id : o.target;
              var opacity = sourceId === localTargetId ? 1 : 0.1;
              d3.select(this).on('mouseleave', undefined).select('text').style('opacity', opacity);
              return opacity;
            });
          }

          setTimeout(function () {
            d3.select('body').on('click', function () {
              return toggle ? connected.call(_this2) : undefined;
            });
          }, 0); //Reduce the op

          toggle = true;
        } else {
          //Put them back to opacity 1
          node.style('opacity', 1);
          link.style('opacity', function () {
            d3.select(this).select('text').style('opacity', 0.1);
            return 1;
          });
          self.graphOperations.labelsOpacityBehavior(link);
          d3.select('body').on('click', undefined);
          toggle = false;
        }

        d3.event.preventDefault();
      }

      return connected;
    }
  }]);

  return GraphGeneric;
}(francy_core__WEBPACK_IMPORTED_MODULE_0__["Graph"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy-renderer-graphviz/src/util/dot-converter.js":
/*!*************************************************************!*\
  !*** ../francy-renderer-graphviz/src/util/dot-converter.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DOTLanguageConverterHelper; });
/* harmony import */ var francy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! francy-core */ "../francy-core/index.js");
var _dec, _dec2, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }


/* global d3 */

/**
 * This class converts Francy Json into DOT Language required by Graphviz.
 * 
 * @see https://www.graphviz.org/doc/info/lang.html
 * @extends {DataHandler}
 */

var DOTLanguageConverterHelper = (_dec = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Data.requires('canvas.graph'), _dec2 = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Initializer.initialize(), (_class =
/*#__PURE__*/
function (_DataHandler) {
  _inherits(DOTLanguageConverterHelper, _DataHandler);

  function DOTLanguageConverterHelper() {
    var _this;

    _classCallCheck(this, DOTLanguageConverterHelper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DOTLanguageConverterHelper).call(this));
    _this.dotString = '';
    return _this;
  }

  _createClass(DOTLanguageConverterHelper, [{
    key: "initialize",
    value: function initialize() {
      var _this2 = this;

      this.directed = this.data.canvas.graph.type === 'directed';
      this.tree = this.data.canvas.graph.type === 'tree';

      if (this.tree) {
        this.treeLinks = {};
        Object.values(this.data.canvas.graph.nodes).forEach(function (node) {
          if (!_this2.treeLinks[node.id]) {
            _this2.treeLinks[node.id] = [];
          }

          _this2.treeLinks[node.id].push(node.parent);
        });
      }
    }
  }, {
    key: "convert",
    value: function convert() {
      this.dotString += this.directed ? 'digraph ' : 'graph ';
      this.dotString += "\"".concat(this.data.canvas.title, "\" {");
      this.dotString += "\t graph [ rankdir=\"".concat(francy_core__WEBPACK_IMPORTED_MODULE_0__["Configuration"].object.graphvizRankdir, "\" ]");

      this._iterateNodes();

      if (this.tree) {
        this._createTree();
      } else {
        this._iterateLinks();
      }

      return this.dotString += '\n}';
    }
  }, {
    key: "_iterateNodes",
    value: function _iterateNodes() {
      var _this3 = this;

      Object.values(this.data.canvas.graph.nodes).forEach(function (node) {
        _this3.dotString += _this3._createNode(node);
      });
    }
  }, {
    key: "_createTree",
    value: function _createTree() {
      var _this4 = this;

      Object.values(this.data.canvas.graph.nodes).forEach(function (node) {
        _this4.dotString += _this4._createLeaf(node);
      });
    }
  }, {
    key: "_createLeaf",
    value: function _createLeaf(node) {
      var dotLink = "\n\t\"".concat(node.id, "\"");
      dotLink += this.directed ? ' -> ' : ' -- ';
      return dotLink += "{ ".concat(this.treeLinks[node.id].join('" "'), " }");
    }
  }, {
    key: "_createNode",
    value: function _createNode(node) {
      var dotNode = "\n\t\"".concat(node.id, "\"");
      dotNode += ' [';
      dotNode += " id=\"".concat(node.id, "\"");
      dotNode += ' style="filled"';
      dotNode += " label=\"".concat(node.title.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), "\"");
      dotNode += " shape=\"".concat(node.type, "\"");
      dotNode += " fillcolor=\"".concat(node.conjugate ? d3.color(francy_core__WEBPACK_IMPORTED_MODULE_0__["Graph"].colors(node.conjugate * 5)).hex() : node.color ? node.color : d3.color(francy_core__WEBPACK_IMPORTED_MODULE_0__["Graph"].colors(node.layer * 5)).hex(), "\"");
      return dotNode += ' ];';
    }
  }, {
    key: "_iterateLinks",
    value: function _iterateLinks() {
      var _this5 = this;

      Object.values(this.data.canvas.graph.links).forEach(function (link) {
        _this5.dotString += _this5._createLink(link);
      });
    }
  }, {
    key: "_createLink",
    value: function _createLink(link) {
      var dotLink = "\n\t \"".concat(francy_core__WEBPACK_IMPORTED_MODULE_0__["Utilities"].isObject(link.source) ? link.source.id : link.source, "\"");
      dotLink += this.directed ? ' -> ' : ' -- ';
      dotLink += "\"".concat(francy_core__WEBPACK_IMPORTED_MODULE_0__["Utilities"].isObject(link.target) ? link.target.id : link.target, "\"");
      dotLink += ' [';
      dotLink += " id=\"".concat(link.id, "\"");

      if (link.title || link.type || link.color) {
        dotLink += link.title ? " label=\"".concat(link.title.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), "\"") : '';
        dotLink += link.type ? " shape=\"".concat(link.type, "\"") : '';
        dotLink += link.color ? " fillcolor=\"".concat(d3.color(link.color).hex(), "\" color=\"").concat(d3.color(link.color).hex(), "\"") : '';
      }

      return dotLink += ' ];';
    }
  }]);

  return DOTLanguageConverterHelper;
}(francy_core__WEBPACK_IMPORTED_MODULE_0__["DataHandler"]), (_applyDecoratedDescriptor(_class.prototype, "convert", [_dec, _dec2], Object.getOwnPropertyDescriptor(_class.prototype, "convert"), _class.prototype)), _class));


/***/ }),

/***/ "../francy/index.js":
/*!**************************!*\
  !*** ../francy/index.js ***!
  \**************************/
/*! exports provided: Francy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Francy", function() { return Francy; });
/* harmony import */ var _src_francy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/francy */ "../francy/src/francy.js");
/* harmony import */ var francy_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! francy-core */ "../francy-core/index.js");


/**
 * The {Francy} singleton
 * @public
 */

var Francy = new _src_francy__WEBPACK_IMPORTED_MODULE_0__["default"]({
  appendTo: 'body',
  callbackHandler: francy_core__WEBPACK_IMPORTED_MODULE_1__["Logger"].info
});

if (window) {
  if (!window.Francy) {
    francy_core__WEBPACK_IMPORTED_MODULE_1__["Logger"].debug('Attaching Francy instance to window object...');
    window.Francy = Francy;
  }
}

if (global) {
  if (!global.Francy) {
    francy_core__WEBPACK_IMPORTED_MODULE_1__["Logger"].debug('Attaching Francy instance to global object...');
    global.Francy = Francy;
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../francy-extension-browser/node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../francy/src/francy.js":
/*!*******************************!*\
  !*** ../francy/src/francy.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Francy; });
/* harmony import */ var francy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! francy-core */ "../francy-core/index.js");
/* harmony import */ var _render_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/frame */ "../francy/src/render/frame.js");
/* harmony import */ var _style_loader_css_loader_style_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-loader!css-loader!./style/index.css */ "../../node_modules/style-loader/index.js!../../node_modules/css-loader/index.js!../francy/src/style/index.css");
/* harmony import */ var _style_loader_css_loader_style_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_css_loader_style_index_css__WEBPACK_IMPORTED_MODULE_2__);
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }


 // import css inline - couldn't make this work on the webpack conf :/


/* global VERSION */

/**
 * Francy is the main entry point for the whole framework. By passing an input string/object to the {Francy.load} function,
 * Francy will handle the creation of that json as long it is a valid and understandable json object to Francy.
 *
 * @access public
 *
 * @example
 * let francy = new Francy({verbose: true, appendTo: '#div-id', callbackHandler: console.log});
 * francy.load(json).render();
 */

var Francy = (_dec = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Data.requires('canvas'), (_class =
/*#__PURE__*/
function (_Renderer) {
  _inherits(Francy, _Renderer);

  /**
   * Creates an instance of Francy with the following options:
   * @typedef {Object} Options
   * @property {Boolean} appendTo where the generated html/svg components will be attached to, default body
   * @property {Function} callbackHandler this handler will be used to invoke actions from the menu, default console.log
   */
  function Francy(_ref) {
    var _this;

    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Francy);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Francy).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    })); // all good!

    francy_core__WEBPACK_IMPORTED_MODULE_0__["Logger"].info("Francy JS v".concat("0.12.0", "! Enjoy..."));
    return _this;
  }
  /**
   * Returns the {RenderingManager] instance to register and unregister new renderers
   * 
   * @returns {RenderingManager} instance
   * @public
   */


  _createClass(Francy, [{
    key: "render",

    /**
     * Main entry point. Calling render will trigger the drawing of a json object
     * passed through the load method.
     * @returns {object} the html element created
     * @public
     */
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var frame;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.data.version !== "0.12.0") {
                  francy_core__WEBPACK_IMPORTED_MODULE_0__["Logger"].warn("Rendering may fail, data generated in Francy GAP v".concat(this.data.version, " using Francy JS v").concat("0.12.0", "... please update your system..."));
                }

                _context.next = 3;
                return new _render_frame__WEBPACK_IMPORTED_MODULE_1__["default"](this.options).load(this.data).render().then(function (element) {
                  return element;
                }).finally(function () {
                  return _this2.load({}, true);
                });

              case 3:
                frame = _context.sent;
                return _context.abrupt("return", frame.element.node());

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }, {
    key: "RenderingManager",
    get: function get() {
      return francy_core__WEBPACK_IMPORTED_MODULE_0__["RenderingManager"];
    }
  }]);

  return Francy;
}(francy_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy/src/render/frame.js":
/*!*************************************!*\
  !*** ../francy/src/render/frame.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Frame; });
/* harmony import */ var francy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! francy-core */ "../francy-core/index.js");
/* harmony import */ var _menu_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-main */ "../francy/src/render/menu-main.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message */ "../francy/src/render/message.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }




/* global d3 */

var Frame = (_dec = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Data.requires('canvas'), (_class =
/*#__PURE__*/
function (_CompositeRenderer) {
  _inherits(Frame, _CompositeRenderer);

  function Frame(_ref) {
    var _this;

    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Frame);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Frame).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
    var Renderer = francy_core__WEBPACK_IMPORTED_MODULE_0__["RenderingManager"].activeRenderer();
    _this.mainMenu = new _menu_main__WEBPACK_IMPORTED_MODULE_1__["default"](_this.options);
    _this.messages = new _message__WEBPACK_IMPORTED_MODULE_2__["default"](_this.options);
    _this.canvas = new Renderer(_this.options);

    _this.add(_this.mainMenu).add(_this.messages).add(_this.canvas);

    return _this;
  }

  _createClass(Frame, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var frameId;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                frameId = "Frame-".concat(this.data.canvas.id);
                this.element = d3.select("div#".concat(frameId)); // check if the canvas is already present

                if (!this.element.node()) {
                  // create a svg element detached from the DOM!
                  francy_core__WEBPACK_IMPORTED_MODULE_0__["Logger"].debug("Creating Frame [".concat(frameId, "]..."));
                  this.element = this.parent.append('div').attr('class', 'francy').attr('id', frameId);
                } // cannot continue if canvas is not present


                if (this.element.node()) {
                  _context.next = 5;
                  break;
                }

                throw new Error("Oops, could not create frame with id [".concat(frameId, "]... Cannot proceed."));

              case 5:
                this.element.style('height', +this.data.canvas.height + 37); // plus menu height

                francy_core__WEBPACK_IMPORTED_MODULE_0__["Logger"].debug("Frame updated [".concat(frameId, "]..."));
                this.handlePromise(this.renderChildren());
                return _context.abrupt("return", this);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }, {
    key: "MainMenu",
    get: function get() {
      return this.mainMenu;
    }
  }]);

  return Frame;
}(francy_core__WEBPACK_IMPORTED_MODULE_0__["CompositeRenderer"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "../francy/src/render/menu-main.js":
/*!*****************************************!*\
  !*** ../francy/src/render/menu-main.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainMenu; });
/* harmony import */ var francy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! francy-core */ "../francy-core/index.js");
/* harmony import */ var save_svg_as_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! save-svg-as-png */ "../../node_modules/save-svg-as-png/lib/saveSvgAsPng.js");
/* harmony import */ var save_svg_as_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(save_svg_as_png__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/* global d3 */

var MainMenu =
/*#__PURE__*/
function (_Menu) {
  _inherits(MainMenu, _Menu);

  function MainMenu(_ref) {
    var _this;

    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, MainMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MainMenu).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
    _this.aboutModal = new francy_core__WEBPACK_IMPORTED_MODULE_0__["AboutModal"](_this.options);
    return _this;
  }

  _createClass(MainMenu, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var menuId, loaderId, entry, menusIterator;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Otherwise clashes with the canvas itself!
                menuId = "MainMenu-".concat(this.data.canvas.id);
                this.element = d3.select("#".concat(menuId)); // Check if the menu is already present

                if (!this.element.node()) {
                  // create a div element detached from the DOM!
                  francy_core__WEBPACK_IMPORTED_MODULE_0__["Logger"].debug("Creating Main Menu [".concat(menuId, "]..."));
                  this.element = this.parent.append('div').attr('class', 'francy-main-menu-holder').attr('id', menuId);
                } // Force rebuild menu again


                this.element.selectAll('*').remove();
                this.element = this.element.append('ul').attr('class', 'francy-main-menu'); // Fixed loader

                loaderId = "Loader-".concat(this.data.canvas.id);
                this.element.append('li').attr('class', 'francy-loader').append('a').datum({}).attr('id', loaderId).classed('loader', true); // Title

                if (this.data.canvas.title) {
                  this.element.append('li').attr('class', 'francy-title').append('a').html(this.data.canvas.title);
                } // create default menu entry


                entry = this.element.append('li').attr('class', 'francy-entry');
                entry.append('a').attr('title', 'Francy').html('Francy').append('div').classed('francy-menu-arrow-down', true).style('float', 'right');
                entry.append('ul');

                this._buildDefaultMenu();

                entry = this.element.append('li').attr('class', 'settings-entry');
                entry.append('a').attr('title', 'Settings').html('Settings').append('div').classed('francy-menu-arrow-down', true).style('float', 'right');
                entry.append('ul');

                this._buildSettingsMenu(); // Traverse all menus and flatten them!


                menusIterator = this.iterator(Object.values(this.data.canvas.menus));
                this.traverse(this.element, menusIterator);
                francy_core__WEBPACK_IMPORTED_MODULE_0__["Logger"].debug("Main Menu updated [".concat(menuId, "]..."));
                return _context.abrupt("return", this);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }, {
    key: "_buildDefaultMenu",
    value: function _buildDefaultMenu() {
      var self = this;

      this._addEntryOnFrancyMenu({
        id: 'zoom-entry',
        title: 'Zoom to Fit',
        onClickCallback: function onClickCallback() {
          self.options.appendTo.canvas.zoomToFit(true);
        }
      });

      this._addEntryOnFrancyMenu({
        id: 'save-entry',
        title: 'Save to PNG',
        onClickCallback: function onClickCallback() {
          save_svg_as_png__WEBPACK_IMPORTED_MODULE_1__["saveSvgAsPng"](self.SVGParent.node(), 'diagram.png');
        }
      });

      this._addEntryOnFrancyMenu({
        id: 'about-entry',
        title: 'About',
        onClickCallback: function onClickCallback() {
          self.handlePromise(self.aboutModal.load(self.data).render());
        }
      });
    }
  }, {
    key: "_buildSettingsMenu",
    value: function _buildSettingsMenu() {
      var self = this;

      function insertEntry(o) {
        self.addMultiMenuOnSettingsMenu({
          menuId: 'renderers-entry',
          menuTitle: 'Renderers',
          entryId: o.id,
          entryTitle: "".concat(o.enable ? '&#9745' : '&#9744', " ").concat(o.name),
          entryOnClickCallback: function entryOnClickCallback() {
            francy_core__WEBPACK_IMPORTED_MODULE_0__["RenderingManager"].enable(o.name);
          },
          entryOnEachCallback: function entryOnEachCallback() {
            var unregisterId = "renderer-".concat(o.name, "-unregister-").concat(self.data.canvas.id);
            francy_core__WEBPACK_IMPORTED_MODULE_0__["RenderingManager"].subscribe(francy_core__WEBPACK_IMPORTED_MODULE_0__["RENDERING_EVENTS"].UNREGISTER, onUnregister, unregisterId);
          }
        });

        function onUnregister() {
          d3.select(d3.select(this).node().parentElement).remove();
        }
      }

      var registerId = "renderers-register-".concat(self.data.canvas.id);
      francy_core__WEBPACK_IMPORTED_MODULE_0__["RenderingManager"].subscribe(francy_core__WEBPACK_IMPORTED_MODULE_0__["RENDERING_EVENTS"].REGISTER, insertEntry, registerId);
      var reRenderId = "renderer-rerender-".concat(self.data.canvas.id);
      francy_core__WEBPACK_IMPORTED_MODULE_0__["RenderingManager"].subscribe(francy_core__WEBPACK_IMPORTED_MODULE_0__["RENDERING_EVENTS"].STATUS, reRender, reRenderId);

      function reRender(o) {
        self.element.select(".".concat(o.id)).html("".concat(o.enable ? '&#9745' : '&#9744', " ").concat(o.name));

        if (o.enable) {
          // remove previous rendered canvas
          self.parent.select("#Canvas-".concat(self.data.canvas.id, ">g")).selectAll('*').remove(); // re-render

          setTimeout(function () {
            var Renderer = francy_core__WEBPACK_IMPORTED_MODULE_0__["RenderingManager"].activeRenderer();
            self.handlePromise(new Renderer(self.options).load(self.data).render());
          }, 100);
        }
      }

      Object.values(francy_core__WEBPACK_IMPORTED_MODULE_0__["RenderingManager"].allRenderers()).forEach(insertEntry);
    }
  }, {
    key: "addEntryOnSettingsMenu",
    value: function addEntryOnSettingsMenu(_ref2) {
      var id = _ref2.id,
          title = _ref2.title,
          onClickCallback = _ref2.onClickCallback,
          onEachCallback = _ref2.onEachCallback,
          withSeparator = _ref2.withSeparator;
      var entry = this.element.select('.settings-entry>ul').data([{
        id: id,
        title: title
      }]);
      entry = entry.append('li').attr('class', function (d) {
        return d.id;
      });

      onClickCallback = onClickCallback || function () {};

      onEachCallback = onEachCallback || function () {};

      entry.append('a').attr('title', function (d) {
        return d.title;
      }).html(function (d) {
        return d.title;
      }).on('click', onClickCallback).each(onEachCallback);

      if (withSeparator) {
        // add separator
        entry.append('hr');
      }

      return entry;
    }
  }, {
    key: "addMultiMenuOnSettingsMenu",
    value: function addMultiMenuOnSettingsMenu(_ref3) {
      var menuId = _ref3.menuId,
          menuTitle = _ref3.menuTitle,
          entryId = _ref3.entryId,
          entryTitle = _ref3.entryTitle,
          entryOnClickCallback = _ref3.entryOnClickCallback,
          entryOnEachCallback = _ref3.entryOnEachCallback;
      var entry = this.element.select(".settings-entry>ul>li.".concat(menuId));

      if (!entry.node()) {
        entry = this.element.select('.settings-entry>ul').append('li').attr('class', menuId);
        entry.append('a').text(menuTitle).append('div').classed('francy-menu-arrow-right', true).style('float', 'right');
      }

      var content = entry.select('ul');

      if (!content.node()) {
        content = entry.append('ul');
      }

      entryOnClickCallback = entryOnClickCallback || function () {};

      entryOnEachCallback = entryOnEachCallback || function () {};

      function insertEntry(_ref4) {
        var entryId = _ref4.entryId,
            entryTitle = _ref4.entryTitle,
            entryOnClickCallback = _ref4.entryOnClickCallback,
            entryOnEachCallback = _ref4.entryOnEachCallback;
        var entryMenu = content.select("li>a.".concat(entryId));

        if (!entryMenu.node()) {
          entryMenu = content.append('li').append('a').attr('class', entryId);
        }

        entryMenu.html(entryTitle).on('click', entryOnClickCallback).each(entryOnEachCallback);
      }

      insertEntry({
        entryId: entryId,
        entryTitle: entryTitle,
        entryOnClickCallback: entryOnClickCallback,
        entryOnEachCallback: entryOnEachCallback
      });
    }
  }, {
    key: "_addEntryOnFrancyMenu",
    value: function _addEntryOnFrancyMenu(_ref5) {
      var id = _ref5.id,
          title = _ref5.title,
          onClickCallback = _ref5.onClickCallback,
          onEachCallback = _ref5.onEachCallback,
          withSeparator = _ref5.withSeparator;
      var entry = this.element.select('.francy-entry>ul').data([{
        id: id,
        title: title
      }]);
      entry = entry.append('li').attr('class', function (d) {
        return d.id;
      });

      onClickCallback = onClickCallback || function () {};

      onEachCallback = onEachCallback || function () {};

      entry.append('a').html(function (d) {
        return d.title;
      }).on('click', onClickCallback).each(onEachCallback);

      if (withSeparator) {
        // add separator
        entry.append('hr');
      }

      return entry;
    }
  }, {
    key: "addEntryOnMenu",
    value: function addEntryOnMenu(_ref6) {
      var id = _ref6.id,
          title = _ref6.title,
          onClickCallback = _ref6.onClickCallback,
          onEachCallback = _ref6.onEachCallback;
      var entry = this.element.data([{
        id: id,
        title: title
      }]);
      entry = entry.append('li').attr('class', function (d) {
        return d.id;
      });

      onClickCallback = onClickCallback || function () {};

      onEachCallback = onEachCallback || function () {};

      entry.append('a').html(function (d) {
        return d.title;
      }).on('click', onClickCallback).each(onEachCallback);
      return entry;
    }
  }, {
    key: "removeMenuEntry",
    value: function removeMenuEntry(id) {
      this.element.select(".".concat(id)).remove();
    }
  }]);

  return MainMenu;
}(francy_core__WEBPACK_IMPORTED_MODULE_0__["Menu"]);



/***/ }),

/***/ "../francy/src/render/message.js":
/*!***************************************!*\
  !*** ../francy/src/render/message.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
/* harmony import */ var francy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! francy-core */ "../francy-core/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }


/* global d3 */

var Message = (_dec = francy_core__WEBPACK_IMPORTED_MODULE_0__["Decorators"].Data.requires('canvas.messages'), (_class =
/*#__PURE__*/
function (_Renderer) {
  _inherits(Message, _Renderer);

  function Message(_ref) {
    var appendTo = _ref.appendTo,
        callbackHandler = _ref.callbackHandler;

    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, _getPrototypeOf(Message).call(this, {
      appendTo: appendTo,
      callbackHandler: callbackHandler
    }));
  }

  _createClass(Message, [{
    key: "render",
    value: function () {
      var _render = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var messages, alertsId, message, messageEnter;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                messages = Object.keys(this.data.canvas.messages).map(function (key) {
                  return {
                    id: key,
                    type: _this.data.canvas.messages[key].type,
                    title: _this.data.canvas.messages[key].title,
                    text: _this.data.canvas.messages[key].text
                  };
                });
                alertsId = "Messages-".concat(this.data.canvas.id);
                this.element = d3.select("#".concat(alertsId)); // check if the div is already present

                if (!this.element.node()) {
                  this.element = this.parent.append('div').attr('class', 'francy-message-holder').attr('id', alertsId);
                }

                message = this.element.selectAll('div.francy-alert').data(messages, function (d) {
                  return d.id;
                });
                messageEnter = message.enter().append('div').attr('id', function (d) {
                  return d.id;
                }).attr('class', function (d) {
                  return "francy-alert alert-".concat(d.type);
                }).on('click', function () {
                  d3.select(this).style('display', 'none');
                });
                messageEnter.append('span').attr('class', 'strong').text(function (d) {
                  return d.title;
                });
                messageEnter.append('span').text(function (d) {
                  return d.text;
                });
                messageEnter.append('span').attr('class', 'strong closeme').style('display', 'none').text('x');
                messageEnter.merge(message);
                message.exit().remove();
                this.element.style('display', 'block'); // render mathjax

                this.handlePromise(this.mathjax.settings({
                  appendTo: this,
                  renderType: 'HTML-CSS'
                }).render());
                return _context.abrupt("return", this);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function render() {
        return _render.apply(this, arguments);
      };
    }()
  }]);

  return Message;
}(francy_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]), (_applyDecoratedDescriptor(_class.prototype, "render", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "render"), _class.prototype)), _class));


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var francy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! francy */ "../francy/index.js");
/* harmony import */ var francy_renderer_d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! francy-renderer-d3 */ "../francy-renderer-d3/index.js");
/* harmony import */ var francy_renderer_graphviz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! francy-renderer-graphviz */ "../francy-renderer-graphviz/index.js");




/***/ }),

/***/ "./node_modules/@babel/polyfill/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(/*! core-js/es6 */ "./node_modules/core-js/es6/index.js");

__webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");

__webpack_require__(/*! core-js/fn/string/pad-start */ "./node_modules/core-js/fn/string/pad-start.js");

__webpack_require__(/*! core-js/fn/string/pad-end */ "./node_modules/core-js/fn/string/pad-end.js");

__webpack_require__(/*! core-js/fn/symbol/async-iterator */ "./node_modules/core-js/fn/symbol/async-iterator.js");

__webpack_require__(/*! core-js/fn/object/get-own-property-descriptors */ "./node_modules/core-js/fn/object/get-own-property-descriptors.js");

__webpack_require__(/*! core-js/fn/object/values */ "./node_modules/core-js/fn/object/values.js");

__webpack_require__(/*! core-js/fn/object/entries */ "./node_modules/core-js/fn/object/entries.js");

__webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");

__webpack_require__(/*! core-js/web */ "./node_modules/core-js/web/index.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (global._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

global._babelPolyfill = true;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/es6/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/es6/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");

__webpack_require__(/*! ../modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");

__webpack_require__(/*! ../modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");

__webpack_require__(/*! ../modules/es6.object.define-properties */ "./node_modules/core-js/modules/es6.object.define-properties.js");

__webpack_require__(/*! ../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");

__webpack_require__(/*! ../modules/es6.object.get-prototype-of */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");

__webpack_require__(/*! ../modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");

__webpack_require__(/*! ../modules/es6.object.get-own-property-names */ "./node_modules/core-js/modules/es6.object.get-own-property-names.js");

__webpack_require__(/*! ../modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");

__webpack_require__(/*! ../modules/es6.object.seal */ "./node_modules/core-js/modules/es6.object.seal.js");

__webpack_require__(/*! ../modules/es6.object.prevent-extensions */ "./node_modules/core-js/modules/es6.object.prevent-extensions.js");

__webpack_require__(/*! ../modules/es6.object.is-frozen */ "./node_modules/core-js/modules/es6.object.is-frozen.js");

__webpack_require__(/*! ../modules/es6.object.is-sealed */ "./node_modules/core-js/modules/es6.object.is-sealed.js");

__webpack_require__(/*! ../modules/es6.object.is-extensible */ "./node_modules/core-js/modules/es6.object.is-extensible.js");

__webpack_require__(/*! ../modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");

__webpack_require__(/*! ../modules/es6.object.is */ "./node_modules/core-js/modules/es6.object.is.js");

__webpack_require__(/*! ../modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");

__webpack_require__(/*! ../modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");

__webpack_require__(/*! ../modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");

__webpack_require__(/*! ../modules/es6.function.has-instance */ "./node_modules/core-js/modules/es6.function.has-instance.js");

__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/core-js/modules/es6.parse-int.js");

__webpack_require__(/*! ../modules/es6.parse-float */ "./node_modules/core-js/modules/es6.parse-float.js");

__webpack_require__(/*! ../modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");

__webpack_require__(/*! ../modules/es6.number.to-fixed */ "./node_modules/core-js/modules/es6.number.to-fixed.js");

__webpack_require__(/*! ../modules/es6.number.to-precision */ "./node_modules/core-js/modules/es6.number.to-precision.js");

__webpack_require__(/*! ../modules/es6.number.epsilon */ "./node_modules/core-js/modules/es6.number.epsilon.js");

__webpack_require__(/*! ../modules/es6.number.is-finite */ "./node_modules/core-js/modules/es6.number.is-finite.js");

__webpack_require__(/*! ../modules/es6.number.is-integer */ "./node_modules/core-js/modules/es6.number.is-integer.js");

__webpack_require__(/*! ../modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");

__webpack_require__(/*! ../modules/es6.number.is-safe-integer */ "./node_modules/core-js/modules/es6.number.is-safe-integer.js");

__webpack_require__(/*! ../modules/es6.number.max-safe-integer */ "./node_modules/core-js/modules/es6.number.max-safe-integer.js");

__webpack_require__(/*! ../modules/es6.number.min-safe-integer */ "./node_modules/core-js/modules/es6.number.min-safe-integer.js");

__webpack_require__(/*! ../modules/es6.number.parse-float */ "./node_modules/core-js/modules/es6.number.parse-float.js");

__webpack_require__(/*! ../modules/es6.number.parse-int */ "./node_modules/core-js/modules/es6.number.parse-int.js");

__webpack_require__(/*! ../modules/es6.math.acosh */ "./node_modules/core-js/modules/es6.math.acosh.js");

__webpack_require__(/*! ../modules/es6.math.asinh */ "./node_modules/core-js/modules/es6.math.asinh.js");

__webpack_require__(/*! ../modules/es6.math.atanh */ "./node_modules/core-js/modules/es6.math.atanh.js");

__webpack_require__(/*! ../modules/es6.math.cbrt */ "./node_modules/core-js/modules/es6.math.cbrt.js");

__webpack_require__(/*! ../modules/es6.math.clz32 */ "./node_modules/core-js/modules/es6.math.clz32.js");

__webpack_require__(/*! ../modules/es6.math.cosh */ "./node_modules/core-js/modules/es6.math.cosh.js");

__webpack_require__(/*! ../modules/es6.math.expm1 */ "./node_modules/core-js/modules/es6.math.expm1.js");

__webpack_require__(/*! ../modules/es6.math.fround */ "./node_modules/core-js/modules/es6.math.fround.js");

__webpack_require__(/*! ../modules/es6.math.hypot */ "./node_modules/core-js/modules/es6.math.hypot.js");

__webpack_require__(/*! ../modules/es6.math.imul */ "./node_modules/core-js/modules/es6.math.imul.js");

__webpack_require__(/*! ../modules/es6.math.log10 */ "./node_modules/core-js/modules/es6.math.log10.js");

__webpack_require__(/*! ../modules/es6.math.log1p */ "./node_modules/core-js/modules/es6.math.log1p.js");

__webpack_require__(/*! ../modules/es6.math.log2 */ "./node_modules/core-js/modules/es6.math.log2.js");

__webpack_require__(/*! ../modules/es6.math.sign */ "./node_modules/core-js/modules/es6.math.sign.js");

__webpack_require__(/*! ../modules/es6.math.sinh */ "./node_modules/core-js/modules/es6.math.sinh.js");

__webpack_require__(/*! ../modules/es6.math.tanh */ "./node_modules/core-js/modules/es6.math.tanh.js");

__webpack_require__(/*! ../modules/es6.math.trunc */ "./node_modules/core-js/modules/es6.math.trunc.js");

__webpack_require__(/*! ../modules/es6.string.from-code-point */ "./node_modules/core-js/modules/es6.string.from-code-point.js");

__webpack_require__(/*! ../modules/es6.string.raw */ "./node_modules/core-js/modules/es6.string.raw.js");

__webpack_require__(/*! ../modules/es6.string.trim */ "./node_modules/core-js/modules/es6.string.trim.js");

__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");

__webpack_require__(/*! ../modules/es6.string.code-point-at */ "./node_modules/core-js/modules/es6.string.code-point-at.js");

__webpack_require__(/*! ../modules/es6.string.ends-with */ "./node_modules/core-js/modules/es6.string.ends-with.js");

__webpack_require__(/*! ../modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");

__webpack_require__(/*! ../modules/es6.string.repeat */ "./node_modules/core-js/modules/es6.string.repeat.js");

__webpack_require__(/*! ../modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");

__webpack_require__(/*! ../modules/es6.string.anchor */ "./node_modules/core-js/modules/es6.string.anchor.js");

__webpack_require__(/*! ../modules/es6.string.big */ "./node_modules/core-js/modules/es6.string.big.js");

__webpack_require__(/*! ../modules/es6.string.blink */ "./node_modules/core-js/modules/es6.string.blink.js");

__webpack_require__(/*! ../modules/es6.string.bold */ "./node_modules/core-js/modules/es6.string.bold.js");

__webpack_require__(/*! ../modules/es6.string.fixed */ "./node_modules/core-js/modules/es6.string.fixed.js");

__webpack_require__(/*! ../modules/es6.string.fontcolor */ "./node_modules/core-js/modules/es6.string.fontcolor.js");

__webpack_require__(/*! ../modules/es6.string.fontsize */ "./node_modules/core-js/modules/es6.string.fontsize.js");

__webpack_require__(/*! ../modules/es6.string.italics */ "./node_modules/core-js/modules/es6.string.italics.js");

__webpack_require__(/*! ../modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");

__webpack_require__(/*! ../modules/es6.string.small */ "./node_modules/core-js/modules/es6.string.small.js");

__webpack_require__(/*! ../modules/es6.string.strike */ "./node_modules/core-js/modules/es6.string.strike.js");

__webpack_require__(/*! ../modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");

__webpack_require__(/*! ../modules/es6.string.sup */ "./node_modules/core-js/modules/es6.string.sup.js");

__webpack_require__(/*! ../modules/es6.date.now */ "./node_modules/core-js/modules/es6.date.now.js");

__webpack_require__(/*! ../modules/es6.date.to-json */ "./node_modules/core-js/modules/es6.date.to-json.js");

__webpack_require__(/*! ../modules/es6.date.to-iso-string */ "./node_modules/core-js/modules/es6.date.to-iso-string.js");

__webpack_require__(/*! ../modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");

__webpack_require__(/*! ../modules/es6.date.to-primitive */ "./node_modules/core-js/modules/es6.date.to-primitive.js");

__webpack_require__(/*! ../modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");

__webpack_require__(/*! ../modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");

__webpack_require__(/*! ../modules/es6.array.of */ "./node_modules/core-js/modules/es6.array.of.js");

__webpack_require__(/*! ../modules/es6.array.join */ "./node_modules/core-js/modules/es6.array.join.js");

__webpack_require__(/*! ../modules/es6.array.slice */ "./node_modules/core-js/modules/es6.array.slice.js");

__webpack_require__(/*! ../modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");

__webpack_require__(/*! ../modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");

__webpack_require__(/*! ../modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");

__webpack_require__(/*! ../modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");

__webpack_require__(/*! ../modules/es6.array.some */ "./node_modules/core-js/modules/es6.array.some.js");

__webpack_require__(/*! ../modules/es6.array.every */ "./node_modules/core-js/modules/es6.array.every.js");

__webpack_require__(/*! ../modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");

__webpack_require__(/*! ../modules/es6.array.reduce-right */ "./node_modules/core-js/modules/es6.array.reduce-right.js");

__webpack_require__(/*! ../modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");

__webpack_require__(/*! ../modules/es6.array.last-index-of */ "./node_modules/core-js/modules/es6.array.last-index-of.js");

__webpack_require__(/*! ../modules/es6.array.copy-within */ "./node_modules/core-js/modules/es6.array.copy-within.js");

__webpack_require__(/*! ../modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");

__webpack_require__(/*! ../modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");

__webpack_require__(/*! ../modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");

__webpack_require__(/*! ../modules/es6.array.species */ "./node_modules/core-js/modules/es6.array.species.js");

__webpack_require__(/*! ../modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

__webpack_require__(/*! ../modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");

__webpack_require__(/*! ../modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");

__webpack_require__(/*! ../modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");

__webpack_require__(/*! ../modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");

__webpack_require__(/*! ../modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");

__webpack_require__(/*! ../modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");

__webpack_require__(/*! ../modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");

__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");

__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");

__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");

__webpack_require__(/*! ../modules/es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js");

__webpack_require__(/*! ../modules/es6.weak-set */ "./node_modules/core-js/modules/es6.weak-set.js");

__webpack_require__(/*! ../modules/es6.typed.array-buffer */ "./node_modules/core-js/modules/es6.typed.array-buffer.js");

__webpack_require__(/*! ../modules/es6.typed.data-view */ "./node_modules/core-js/modules/es6.typed.data-view.js");

__webpack_require__(/*! ../modules/es6.typed.int8-array */ "./node_modules/core-js/modules/es6.typed.int8-array.js");

__webpack_require__(/*! ../modules/es6.typed.uint8-array */ "./node_modules/core-js/modules/es6.typed.uint8-array.js");

__webpack_require__(/*! ../modules/es6.typed.uint8-clamped-array */ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");

__webpack_require__(/*! ../modules/es6.typed.int16-array */ "./node_modules/core-js/modules/es6.typed.int16-array.js");

__webpack_require__(/*! ../modules/es6.typed.uint16-array */ "./node_modules/core-js/modules/es6.typed.uint16-array.js");

__webpack_require__(/*! ../modules/es6.typed.int32-array */ "./node_modules/core-js/modules/es6.typed.int32-array.js");

__webpack_require__(/*! ../modules/es6.typed.uint32-array */ "./node_modules/core-js/modules/es6.typed.uint32-array.js");

__webpack_require__(/*! ../modules/es6.typed.float32-array */ "./node_modules/core-js/modules/es6.typed.float32-array.js");

__webpack_require__(/*! ../modules/es6.typed.float64-array */ "./node_modules/core-js/modules/es6.typed.float64-array.js");

__webpack_require__(/*! ../modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");

__webpack_require__(/*! ../modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");

__webpack_require__(/*! ../modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");

__webpack_require__(/*! ../modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");

__webpack_require__(/*! ../modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");

__webpack_require__(/*! ../modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");

__webpack_require__(/*! ../modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");

__webpack_require__(/*! ../modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");

__webpack_require__(/*! ../modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");

__webpack_require__(/*! ../modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");

__webpack_require__(/*! ../modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");

__webpack_require__(/*! ../modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");

__webpack_require__(/*! ../modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");

__webpack_require__(/*! ../modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");

module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");

/***/ }),

/***/ "./node_modules/core-js/fn/array/includes.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/array/includes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Array.includes;

/***/ }),

/***/ "./node_modules/core-js/fn/object/entries.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/object/entries.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.entries;

/***/ }),

/***/ "./node_modules/core-js/fn/object/get-own-property-descriptors.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/fn/object/get-own-property-descriptors.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.getOwnPropertyDescriptors;

/***/ }),

/***/ "./node_modules/core-js/fn/object/values.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/object/values.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Object.values;

/***/ }),

/***/ "./node_modules/core-js/fn/promise/finally.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/fn/promise/finally.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");

__webpack_require__(/*! ../../modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").Promise['finally'];

/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-end.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-end.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.string.pad-end */ "./node_modules/core-js/modules/es7.string.pad-end.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padEnd;

/***/ }),

/***/ "./node_modules/core-js/fn/string/pad-start.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/fn/string/pad-start.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.string.pad-start */ "./node_modules/core-js/modules/es7.string.pad-start.js");

module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").String.padStart;

/***/ }),

/***/ "./node_modules/core-js/fn/symbol/async-iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/fn/symbol/async-iterator.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");

module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js").f('asyncIterator');

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');

var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});

module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }

  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)


var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = [].copyWithin || function copyWithin(target
/* = 0 */
, start
/* = 0, end = @length */
) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;

  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }

  while (count-- > 0) {
    if (from in O) O[to] = O[from];else delete O[to];
    to += inc;
    from += inc;
  }

  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

  while (endPos > index) {
    O[index++] = value;
  }

  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");

module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;

    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);

        if (TYPE) {
          if (IS_MAP) result[index] = res; // map
          else if (res) switch (TYPE) {
              case 3:
                return true;
              // some

              case 5:
                return val;
              // find

              case 6:
                return index;
              // findIndex

              case 2:
                result.push(val);
              // filter
            } else if (IS_EVERY) return false; // every
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }

    index += i;

    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }

  for (; isRight ? index >= 0 : length > index; index += i) {
    if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
  }

  return memo;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");

var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;

  if (isArray(original)) {
    C = original.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;

    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array : C;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");

var arraySlice = [].slice;
var factories = {};

var construct = function construct(F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) {
      n[i] = 'a[' + i + ']';
    } // eslint-disable-next-line no-new-func


    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  }

  return factories[len](F, args);
};

module.exports = Function.bind || function bind(that
/* , ...args */
) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);

  var bound = function bound()
  /* args... */
  {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };

  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag'); // ES3 wrong here


var ARG = cof(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {
    /* empty */
  }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
  : ARG ? cof(O) // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");

var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");

var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");

var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function getEntry(that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index]; // frozen object case

  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type

      that._i = create(null); // index

      that._f = undefined; // first entry

      that._l = undefined; // last entry

      that[SIZE] = 0; // size

      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }

        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function _delete(key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);

        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }

        return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn
      /* , that = undefined */
      ) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;

        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this); // revert to the last existing entry

          while (entry && entry.r) {
            entry = entry.p;
          }
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function get() {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var entry = getEntry(that, key);
    var prev, index; // change existing entry

    if (entry) {
      entry.v = value; // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true),
        // <- index
        k: key,
        // <- key
        v: value,
        // <- value
        p: prev = that._l,
        // <- previous entry
        n: undefined,
        // <- next entry
        r: false // <- removed

      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++; // add to index

      if (index !== 'F') that._i[index] = entry;
    }

    return that;
  },
  getEntry: getEntry,
  setStrong: function setStrong(C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target

      this._k = kind; // kind

      this._l = undefined; // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l; // revert to the last existing entry

      while (entry && entry.r) {
        entry = entry.p;
      } // get next entry


      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      } // return step by kind


      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

    setSpecies(NAME);
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");

var getWeak = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");

var $has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");

var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0; // fallback for uncaught frozen keys

var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function UncaughtFrozenStore() {
  this.a = [];
};

var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function get(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function has(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function set(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;else this.a.push([key, value]);
  },
  'delete': function _delete(key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};
module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type

      that._i = id++; // collection id

      that._l = undefined; // leak store for uncaught frozen objects

      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function _delete(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");

var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};

  var fixMethod = function fixMethod(KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);
      return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);
      return this;
    });
  };

  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C(); // early implementations not supports chaining

    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    }); // most early implementations doesn't supports iterables, most modern - not close it correctly

    var ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same

    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;

      while (index--) {
        $instance[ADDER](index, index);
      }

      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);
  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);
  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
  return C;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.5.7'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function lz(num) {
  return num > 9 ? num : '0' + num;
}; // PhantomJS / old WebKit has a broken implementations


module.exports = fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
}) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");

module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;

  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;

    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

    if (target) redefine(target, key, out, type & $export.U); // export

    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

global.core = core; // type bitmap

$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');

module.exports = function (KEY) {
  var re = /./;

  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) {
      /* empty */
    }
  }

  return true;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];

  if (fails(function () {
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return rxfn.call(string, this, arg);
    } // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return rxfn.call(string, this);
    });
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 21.2.5.3 get RegExp.prototype.flags

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");

var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

var BREAK = {};
var RETURN = {};

var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};

exports.BREAK = BREAK;
exports.RETURN = RETURN;

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;

module.exports = document && document.documentElement;

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;

module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;

  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }

  return that;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;

  switch (args.length) {
    case 0:
      return un ? fn() : fn.call(that);

    case 1:
      return un ? fn(args[0]) : fn.call(that, args[0]);

    case 2:
      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

    case 3:
      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

    case 4:
      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
  }

  return fn.apply(that, args);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js"); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var floor = Math.floor;

module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');

module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");

var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, {
    next: descriptor(1, next)
  });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);

  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];

    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };

      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }

    return function entries() {
      return new Constructor(this, kind);
    };
  };

  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  } // Plug for library


  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;

  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }

  return methods;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();

  riter['return'] = function () {
    SAFE_CLOSING = true;
  }; // eslint-disable-next-line no-throw-literal


  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {
  /* empty */
}

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;

  try {
    var arr = [7];
    var iter = arr[ITERATOR]();

    iter.next = function () {
      return {
        done: safe = true
      };
    };

    arr[ITERATOR] = function () {
      return iter;
    };

    exec(arr);
  } catch (e) {
    /* empty */
  }

  return safe;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = !$expm1 // Old FF bug
|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 // Tor Browser bug
|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");

var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function roundTiesToEven(n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs); // eslint-disable-next-line no-self-compare

  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});

var setMeta = function setMeta(it) {
  setDesc(it, META, {
    value: {
      i: 'O' + ++id,
      // object ID
      w: {} // weak collections IDs

    }
  });
};

var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    setMeta(it); // return object ID
  }

  return it[META].i;
};

var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    setMeta(it); // return hash weak collections IDs
  }

  return it[META].w;
}; // add metadata on freeze-family methods calling


var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};

var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;

var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function flush() {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();

    while (head) {
      fn = head.fn;
      head = head.next;

      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }

    last = undefined;
    if (parent) parent.enter();
  }; // Node.js


  if (isNode) {
    notify = function notify() {
      process.nextTick(flush);
    }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, {
      characterData: true
    }); // eslint-disable-line no-new

    notify = function notify() {
      node.data = toggle = !toggle;
    }; // environments with maybe non-completely correct, but existent Promise

  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);

    notify = function notify() {
      promise.then(flush);
    }; // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout

  } else {
    notify = function notify() {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;

    if (!head) {
      head = task;
      notify();
    }

    last = task;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 25.4.1.5 NewPromiseCapability(C)

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.2.1 Object.assign(target, source, ...)

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");

var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;

  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }

  return T;
} : $assign;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

var Empty = function Empty() {
  /* empty */
};

var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');

  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);

  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;

  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }

  return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

var dP = Object.defineProperty;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;

  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }

  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");

var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {
    /* empty */
  }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;

var toString = {}.toString;
var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");

var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectProto : null;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f;

module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;

    while (length > i) {
      if (isEnum.call(O, key = keys[i++])) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }

    return result;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect;

module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseFloat;

var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseInt;

var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;

var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");

var hex = /^[-+]?0[xX]/;
module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
} : $parseInt;

/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return {
      e: false,
      v: exec()
    };
  } catch (e) {
    return {
      e: true,
      v: e
    };
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

module.exports = function (target, src, safe) {
  for (var key in src) {
    redefine(target, key, src[key], safe);
  }

  return target;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');

var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};

module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }

    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () {
      /* empty */
    }, 1) : method.call(null);
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js"); // true  -> String#at
// false -> String#codePointAt


module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)

var createHTML = function createHTML(string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};

module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");

  for (; n > 0; (n >>>= 1) && (str += str)) {
    if (n & 1) res += str;
  }

  return res;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");

var space = '[' + spaces + ']';
var non = "\u200B\x85";
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function exporter(KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
}; // 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim


var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");

var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");

var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function run() {
  var id = +this; // eslint-disable-next-line no-prototype-builtins

  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var listener = function listener(event) {
  run.call(event.data);
}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };

    defer(counter);
    return counter;
  };

  clearTask = function clearImmediate(id) {
    delete queue[id];
  }; // Node.js 0.8-


  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function defer(id) {
      process.nextTick(ctx(run, id, 1));
    }; // Sphere (JS game engine) Dispatch API

  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(ctx(run, id, 1));
    }; // Browsers with MessageChannel, includes WebWorkers

  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function defer(id) {
      global.postMessage(id + '', '*');
    };

    global.addEventListener('message', listener, false); // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    }; // Rest old browsers

  } else {
    defer = function defer(id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}

module.exports = {
  set: setTask,
  clear: clearTask
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")) {
  var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");

  var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

  var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

  var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

  var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");

  var $buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");

  var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

  var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");

  var propertyDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

  var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

  var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");

  var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

  var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

  var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");

  var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");

  var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

  var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

  var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");

  var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

  var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

  var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");

  var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");

  var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

  var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;

  var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

  var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

  var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

  var createArrayMethod = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");

  var createArrayIncludes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js");

  var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");

  var ArrayIterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

  var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

  var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");

  var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");

  var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");

  var arrayCopyWithin = __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js");

  var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

  var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");

  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';
  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });
  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });
  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function toOffset(it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function validate(it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function allocate(C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    }

    return new C(length);
  };

  var speciesFromList = function speciesFromList(O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function fromList(C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);

    while (length > index) {
      result[index] = list[index++];
    }

    return result;
  };

  var addGetter = function addGetter(it, key, internal) {
    dP(it, key, {
      get: function get() {
        return this._d[internal];
      }
    });
  };

  var $from = function from(source
  /* , mapfn, thisArg */
  ) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;

    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      }

      O = values;
    }

    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);

    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }

    return result;
  };

  var $of = function of()
  /* ...items */
  {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);

    while (length > index) {
      result[index] = arguments[index++];
    }

    return result;
  }; // iOS Safari 6.x fails here


  var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
    arrayToLocaleString.call(new Uint8Array(1));
  });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start
    /* , end */
    ) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn
    /* , thisArg */
    ) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value
    /* , start, end */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate
    /* , thisArg */
    ) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate
    /* , thisArg */
    ) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn
    /* , thisArg */
    ) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement
    /* , fromIndex */
    ) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement
    /* , fromIndex */
    ) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) {
      // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement
    /* , fromIndex */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn
    /* , thisArg */
    ) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn
    /* , initialValue */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;

      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      }

      return that;
    },
    some: function some(callbackfn
    /* , thisArg */
    ) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike
  /* , offset */
  ) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);

    while (index < len) {
      this[offset + index] = src[index++];
    }
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function isTAIndex(target, key) {
    return isObject(target) && target[TYPED_ARRAY] && _typeof(key) != 'symbol' && key in target && String(+key) == String(key);
  };

  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
  };

  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set') // TODO: add validation descriptor w/o calling accessors
    && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
      target[key] = desc.value;
      return target;
    }

    return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () {
    arrayToString.call({});
  })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function constructor() {
      /* noop */
    },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function get() {
      return this[TYPED_ARRAY];
    }
  }); // eslint-disable-next-line max-statements

  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];

    var getter = function getter(that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };

    var setter = function setter(that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };

    var addElement = function addElement(that, index) {
      dP(that, index, {
        get: function get() {
          return getter(this, index);
        },
        set: function set(value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;

        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;

          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }

          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }

        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });

        while (index < length) {
          addElement(that, index++);
        }
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new

      new TypedArray(null); // eslint-disable-line no-new

      new TypedArray(1.5); // eslint-disable-line no-new

      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass; // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645

        if (!isObject(data)) return new Base(toIndex(data));

        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
        }

        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }

    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function get() {
          return NAME;
        }
      });
    }

    O[NAME] = TypedArray;
    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });
    $export($export.S + $export.F * fails(function () {
      Base.of.call(TypedArray, 1);
    }), NAME, {
      from: $from,
      of: $of
    });
    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
    $export($export.P, NAME, proto);
    setSpecies(NAME);
    $export($export.P + $export.F * FORCED_SET, NAME, {
      set: $set
    });
    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, {
      slice: $slice
    });
    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {
      toLocaleString: $toLocaleString
    });
    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () {
  /* empty */
};

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");

var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var toIndex = __webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");

var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var arrayFill = __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError; // eslint-disable-next-line no-shadow-restricted-names

var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET; // IEEE754 conversions based on https://github.com/feross/ieee754

function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value); // eslint-disable-next-line no-self-compare

  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);

    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {
    ;
  }

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {
    ;
  }

  buffer[--i] |= s * 128;
  return buffer;
}

function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;

  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {
    ;
  }

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {
    ;
  }

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}

function packI8(it) {
  return [it & 0xff];
}

function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}

function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}

function packF64(it) {
  return packIEEE754(it, 52, 8);
}

function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, {
    get: function get() {
      return this[internal];
    }
  });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}

function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);

  for (var i = 0; i < bytes; i++) {
    store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
  }
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset
    /* , littleEndian */
    ) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset
    /* , littleEndian */
    ) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset
    /* , littleEndian */
    ) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset
    /* , littleEndian */
    ) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new

    new $ArrayBuffer(1.5); // eslint-disable-line no-new

    new $ArrayBuffer(NaN); // eslint-disable-line no-new

    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };

    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];

    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }

    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  } // iOS Safari 7.x bug


  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;
var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var navigator = global.navigator;
module.exports = navigator && navigator.userAgent || '';

/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");

var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");

var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
    value: wksExt.f(name)
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

var _Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;

var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', {
  copyWithin: __webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js")
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $every = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(4);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn
  /* , thisArg */
  ) {
    return $every(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Array', {
  fill: __webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js")
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $filter = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);

var KEY = 'findIndex';
var forced = true; // Shouldn't skip holes

if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $find = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);

var KEY = 'find';
var forced = true; // Shouldn't skip holes

if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);

var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");

var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  Array.from(iter);
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case

    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);

      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }

    result.length = index;
    return result;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);

var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement
  /* , fromIndex = 0 */
  ) {
    return NEGATIVE_ZERO // convert -0 to +0
    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Array', {
  isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");

var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js"); // 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()


module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target

  this._i = 0; // next index

  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;

  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }

  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 22.1.3.13 Array.prototype.join(separator)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var arrayJoin = [].join; // fallback for not array-like strings

$export($export.P + $export.F * (__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js") != Object || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement
  /* , fromIndex = @[*-1] */
  ) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;

    for (; index >= 0; index--) {
      if (index in O) if (O[index] === searchElement) return index || 0;
    }

    return -1;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $map = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js"); // WebKit Array.of isn't generic


$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  function F() {
    /* empty */
  }

  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of()
  /* ...args */
  {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);

    while (aLen > index) {
      createProperty(result, index, arguments[index++]);
    }

    result.length = aLen;
    return result;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn
  /* , initialValue */
  ) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $reduce = __webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn
  /* , initialValue */
  ) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var arraySlice = [].slice; // fallback for not array-like ES3 strings and DOM objects

$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;

    for (; i < size; i++) {
      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
    }

    return cloned;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $some = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(3);

$export($export.P + $export.F * !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn
  /* , thisArg */
  ) {
    return $some(this, callbackfn, arguments[1]);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var $sort = [].sort;
var test = [1, 2, 3];
$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null); // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Array');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Date', {
  now: function now() {
    return new Date().getTime();
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toISOString = __webpack_require__(/*! ./_date-to-iso-string */ "./node_modules/core-js/modules/_date-to-iso-string.js"); // PhantomJS / old WebKit has a broken implementations


$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

$export($export.P + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
    toISOString: function toISOString() {
      return 1;
    }
  }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toPrimitive');

var proto = Date.prototype;
if (!(TO_PRIMITIVE in proto)) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(proto, TO_PRIMITIVE, __webpack_require__(/*! ./_date-to-primitive */ "./node_modules/core-js/modules/_date-to-primitive.js"));

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;

if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this); // eslint-disable-next-line no-self-compare

    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', {
  bind: __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

var HAS_INSTANCE = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('hasInstance');

var FunctionProto = Function.prototype; // 19.2.3.6 Function.prototype[@@hasInstance](V)

if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(FunctionProto, HAS_INSTANCE, {
  value: function value(O) {
    if (typeof this != 'function' || !isObject(O)) return false;
    if (!isObject(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

    while (O = getPrototypeOf(O)) {
      if (this.prototype === O) return true;
    }

    return false;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name'; // 19.2.4.2 name

NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function get() {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");

var MAP = 'Map'; // 23.1 Map Objects

module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP, function (get) {
  return function Map() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var log1p = __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js");

var sqrt = Math.sqrt;
var $acosh = Math.acosh;
$export($export.S + $export.F * !($acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
&& Math.floor($acosh(Number.MAX_VALUE)) == 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
&& $acosh(Infinity) == Infinity), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
} // Tor Browser bug: Math.asinh(0) -> -0


$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {
  asinh: asinh
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $atanh = Math.atanh; // Tor Browser bug: Math.atanh(-0) -> 0

$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var sign = __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var exp = Math.exp;
$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {
  expm1: $expm1
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  fround: __webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var abs = Math.abs;
$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) {
    // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;

    while (i < aLen) {
      arg = abs(arguments[i++]);

      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }

    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $imul = Math.imul; // some WebKit versions fails with big numbers, some has wrong arity

$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log1p: __webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  sign: __webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");

var exp = Math.exp; // V8 near Chromium 38 has a problem with very small numbers

$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var expm1 = __webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");

var exp = Math.exp;
$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;

var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;

var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype; // Opera ~12 has broken Object#toString

var BROKEN_COF = cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype; // 7.1.3 ToNumber(argument)

var toNumber = function toNumber(argument) {
  var it = toPrimitive(argument, false);

  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;

    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal /^0b[01]+$/i

        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        // fast equal /^0o[0-7]+$/i

        default:
          return +it;
      }

      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i); // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols

        if (code < 48 || code > maxCode) return NaN;
      }

      return parseInt(digits, radix);
    }
  }

  return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number // check on 1..constructor(foo) case
    && (BROKEN_COF ? fails(function () {
      proto.valueOf.call(that);
    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };

  for (var keys = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPN(Base) : ( // ES3:
  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):
  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }

  $Number.prototype = proto;
  proto.constructor = $Number;

  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, NUMBER, $Number);
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  EPSILON: Math.pow(2, -52)
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var _isFinite = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isInteger: __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var isInteger = __webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js");

var abs = Math.abs;
$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  MAX_SAFE_INTEGER: 0x1fffffffffffff
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  MIN_SAFE_INTEGER: -0x1fffffffffffff
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js"); // 20.1.2.12 Number.parseFloat(string)


$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {
  parseFloat: $parseFloat
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js"); // 20.1.2.13 Number.parseInt(string, radix)


$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {
  parseInt: $parseInt
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");

var repeat = __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");

var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function multiply(n, c) {
  var i = -1;
  var c2 = c;

  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function divide(n) {
  var i = 6;
  var c = 0;

  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = c % n * 1e7;
  }
};

var numToString = function numToString() {
  var i = 6;
  var s = '';

  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  }

  return s;
};

var pow = function pow(x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function log(x) {
  var n = 0;
  var x2 = x;

  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }

  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  }

  return n;
};

$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR); // eslint-disable-next-line no-self-compare

    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);

    if (x < 0) {
      s = '-';
      x = -x;
    }

    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;

      if (e > 0) {
        multiply(0, z);
        j = f;

        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }

        multiply(pow(10, j, 1), 0);
        j = e - 1;

        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }

        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }

    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    }

    return m;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var aNumberValue = __webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");

var $toPrecision = 1.0.toPrecision;
$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S + $export.F, 'Object', {
  assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js"); // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


$export($export.S, 'Object', {
  create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js"); // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)


$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', {
  defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js"); // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)


$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"), 'Object', {
  defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames', function () {
  return __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js").f;
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Object', {
  is: __webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Object', {
  setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.3.6 Object.prototype.toString()

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");

var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';

if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js"); // 18.2.4 parseFloat(string)


$export($export.G + $export.F * (parseFloat != $parseFloat), {
  parseFloat: $parseFloat
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js"); // 18.2.5 parseInt(string, radix)


$export($export.G + $export.F * (parseInt != $parseInt), {
  parseInt: $parseInt
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");

var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;

var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();

var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");

var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';

var empty = function empty() {
  /* empty */
};

var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);

    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) {
    /* empty */
  }
}(); // helpers

var isThenable = function isThenable(it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function notify(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;

    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;

      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }

          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value); // may throw

            if (domain) {
              domain.exit();
              exited = true;
            }
          }

          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };

    while (chain.length > i) {
      run(chain[i++]);
    } // variable length - can't use forEach


    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};

var onUnhandled = function onUnhandled(promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;

    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({
            promise: promise,
            reason: value
          });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }

    promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};

var isUnhandled = function isUnhandled(promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};

var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(global, function () {
    var handler;

    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({
        promise: promise,
        reason: promise._v
      });
    }
  });
};

var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap

  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};

var $resolve = function $resolve(value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap

  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");

    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = {
          _w: promise,
          _d: false
        }; // wrap

        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({
      _w: promise,
      _d: false
    }, e); // wrap
  }
}; // constructor polyfill


if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);

    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  }; // eslint-disable-next-line no-unused-vars


  Internal = function Promise(executor) {
    this._c = []; // <- awaiting reactions

    this._a = undefined; // <- checked in isUnhandled reactions

    this._s = 0; // <- state

    this._d = false; // <- done

    this._v = undefined; // <- value

    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

    this._n = false; // <- notify
  };

  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;

      this._c.push(reaction);

      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Promise: $Promise
});

__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);

Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE]; // statics

$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var rApply = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).apply;
var fApply = Function.apply; // MS Edge argumentsList argument is optional

$export($export.S + $export.F * !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  rApply(function () {
    /* empty */
  });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");

var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect || {}).construct; // MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it

var NEW_TARGET_BUG = fails(function () {
  function F() {
    /* empty */
  }

  return !(rConstruct(function () {
    /* empty */
  }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () {
    /* empty */
  });
});
$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args
  /* , newTarget */
  ) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);

    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0:
          return new Target();

        case 1:
          return new Target(args[0]);

        case 2:
          return new Target(args[0], args[1]);

        case 3:
          return new Target(args[0], args[1], args[2]);

        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      } // w/o altered newTarget, lot of arguments case


      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    } // with altered newTarget, not support built-in constructors


    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js"); // MS Edge has broken Reflect.defineProperty - throwing instead of returning false


$export($export.S + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, {
    value: 1
  }), 1, {
    value: 2
  });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);

    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 26.1.5 Reflect.enumerate(target)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var Enumerate = function Enumerate(iterated) {
  this._t = anObject(iterated); // target

  this._i = 0; // next index

  var keys = this._k = []; // keys

  var key;

  for (key in iterated) {
    keys.push(key);
  }
};

__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;

  do {
    if (that._i >= keys.length) return {
      value: undefined,
      done: true
    };
  } while (!((key = keys[that._i++]) in that._t));

  return {
    value: key,
    done: false
  };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var getProto = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");

var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

function get(target, propertyKey
/* , receiver */
) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', {
  get: get
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var $isExtensible = Object.isExtensible;
$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Reflect', {
  ownKeys: __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var $preventExtensions = Object.preventExtensions;
$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);

    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var setProto = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);

    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");

var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

function set(target, propertyKey, V
/* , receiver */
) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;

  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }

    ownDesc = createDesc(0);
  }

  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;

    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));

    return true;
  }

  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', {
  set: set
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;

var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");

var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g; // "new" creates a new object, old webkit buggy here

var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && (!CORRECT_NEW || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
  };

  var proxy = function proxy(key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function get() {
        return Base[key];
      },
      set: function set(it) {
        Base[key] = it;
      }
    });
  };

  for (var keys = gOPN(Base), i = 0; keys.length > i;) {
    proxy(keys[i++]);
  }

  proto.constructor = $RegExp;
  $RegExp.prototype = proto;

  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global, 'RegExp', $RegExp);
}

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';

    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';

    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';

    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split) {
  'use strict';

  var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");

  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';

  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it

    $split = function $split(separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i; // Doesn't need flags gy, but they don't hurt

      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);

      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];

        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index)); // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func

          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) {
              if (arguments[i] === undefined) match[i] = undefined;
            }
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }

        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }

      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));

      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    }; // Chakra, V8

  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function $split(separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  } // 21.1.3.17 String.prototype.split(separator, limit)


  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function define(fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
}; // 21.2.5.14 RegExp.prototype.toString()


if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $toString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
})) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  }); // FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");

var SET = 'Set'; // 23.2 Set Objects

module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.2 String.prototype.anchor(name)

__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.3 String.prototype.big()

__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.4 String.prototype.blink()

__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.5 String.prototype.bold()

__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(false);

$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");

var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];
$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString
  /* , endPosition = @length */
  ) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.6 String.prototype.fixed()

__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.7 String.prototype.fontcolor(color)

__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.8 String.prototype.fontsize(size)

__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");

var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) {
    // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;

    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
    }

    return res.join('');
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");

var INCLUDES = 'includes';
$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString
  /* , position = 0 */
  ) {
    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.9 String.prototype.italics()

__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true); // 21.1.3.27 String.prototype[@@iterator]()


__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target

  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.10 String.prototype.link(url)

__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;

    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    }

    return res.join('');
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.11 String.prototype.small()

__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");

var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];
$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString
  /* , position = 0 */
  ) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.12 String.prototype.strike()

__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.13 String.prototype.sub()

__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // B.2.3.14 String.prototype.sup()

__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 21.1.3.25 String.prototype.trim()

__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ECMAScript 6 symbols shim

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;

var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");

var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");

var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");

var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");

var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");

var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");

var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;

var _stringify = $JSON && $JSON.stringify;

var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return _typeof(it) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);

  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, {
        enumerable: createDesc(0, false)
      });
    }

    return setSymbolDesc(it, key, D);
  }

  return dP(it, key, D);
};

var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;

  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }

  return it;
};

var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};

var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};

var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }

  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }

  return result;
}; // 19.4.1.1 Symbol([description])


if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);

    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };

    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: $set
    });
    return wrap(tag);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Symbol: $Symbol
});

for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // 24.3.2 JSON.stringify(value [, replacer [, space]])

$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols

  return _stringify([S]) != '[null]' || _stringify({
    a: S
  }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
}); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

setToStringTag(global.JSON, 'JSON', true);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $typed = __webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");

var buffer = __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var ArrayBuffer = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").ArrayBuffer;

var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");

var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';
$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {
  ArrayBuffer: $ArrayBuffer
});
$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});
$export($export.P + $export.U + $export.F * __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix

    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;

    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    }

    return result;
  }
});

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.G + $export.W + $export.F * !__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js").ABV, {
  DataView: __webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js").DataView
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");

var assign = __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");

var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");

var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function wrapper(get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
}; // 23.3 WeakMap Objects

var $WeakMap = module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP, wrapper, methods, weak, true, true); // IE11 WeakMap frozen keys fix


if (fails(function () {
  return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7;
})) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();

        var result = this._f[key](a, b);

        return key == 'set' ? this : result; // store all the rest on native weakmap
      }

      return method.call(this, a, b);
    });
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var weak = __webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");

var WEAK_SET = 'WeakSet'; // 23.4 WeakSet Objects

__webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_SET, function (get) {
  return function WeakSet() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/tc39/Array.prototype.includes

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");

var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;

    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }

    return result;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");

var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', {
  'finally': function _finally(onFinally) {
    var C = speciesConstructor(this, core.Promise || global.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/tc39/proposal-string-pad-start-end

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");

var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js"); // https://github.com/zloirock/core-js/issues/280


$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padEnd: function padEnd(maxLength
  /* , fillString = ' ' */
  ) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // https://github.com/tc39/proposal-string-pad-start-end

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $pad = __webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");

var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js"); // https://github.com/zloirock/core-js/issues/280


$export($export.P + $export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent), 'String', {
  padStart: function padStart(maxLength
  /* , fillString = ' ' */
  ) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;
var DOMIterables = {
  CSSRuleList: true,
  // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true,
  // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true,
  // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;

  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) {
      if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
}

/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var $task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js");

$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function wrap(set) {
  return function (fn, time
  /* , ...args */
  ) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};

$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

/***/ }),

/***/ "./node_modules/core-js/web/index.js":
/*!*******************************************!*\
  !*** ./node_modules/core-js/web/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! ../modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");

module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = ( false ? undefined : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;

  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    } // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.


    return;
  } // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.


  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  runtime.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  runtime.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}( // In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this;
}() || Function("return this")());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
});
//# sourceMappingURL=francy-extension-browser.bundle.js.map