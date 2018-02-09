define(function() { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.register_renderer = register_renderer;
exports.render_cells = render_cells;

var _constants = __webpack_require__(2);

__webpack_require__(7);

/* global d3 */

var francy = undefined;

// Create a 'display: none;' div for drawing
d3.select('body').append('div').attr('id', 'francy-drawing-div').attr('style', 'display: none;');

function init(Jupyter, d3, FrancyBundle) {

  console.log('Starting loading Module Francy Javascript...');

  // attach d3 to window
  window.d3 = d3;

  // start Francy
  francy = new FrancyBundle.Francy({
    verbose: true,
    appendTo: _constants.APPEND_ID,
    callbackHandler: function callbackHandler(command) {
      Jupyter.notebook.kernel.execute(command, {
        iopub: {
          output: function output(msg) {
            if (msg.content && msg.content.data && msg.content.data[_constants.MIME_TYPE]) {
              // This will update an existing canvas by its ID!
              francy.load(msg.content.data[_constants.MIME_TYPE]).render();
            }
          }
        }
      }, {});
    }
  });

  console.log('Finished loading Module Francy Javascript.');
}
/**
 * Render data to the DOM node
 */
function render(props, node) {
  var francyObject = francy.load(props.data).render();
  node.append(francyObject);
}

/**
 * Handle when an output is cleared or removed
 */
function handleClearOutput(event, _ref) {
  var output_area = _ref.cell.output_area;

  /* Get rendered DOM node */
  var toinsert = output_area.element.find(_constants.CLASS_NAME.split(' ')[0]);
  if (toinsert[0]) {
    // The svg might be gone to another cell (!?)
    // well, when Draw is invoked for a canvas inside another cell it moves the svg to another output cell!
    var svg = d3.select(toinsert[0]).select('svg');
    var id = svg ? svg.attr('id') : undefined;
    francy.unrender(id);
  }
}

/**
 * Handle when a new output is added
 */
function handleAddOutput(event, _ref2) {
  var output = _ref2.output,
      output_area = _ref2.output_area;

  /* Get rendered DOM node */
  var toinsert = output_area.element.find(_constants.CLASS_NAME.split(' ')[0]);
  /** e.g. Inject a static image representation into the mime bundle for
   *  endering on Github, etc.
   */
  // if (toinsert) {
  //   renderLibrary.toPng(toinsert[0]).then(url => {
  //     const data = url.split(',')[1];
  //     output_area.outputs
  //       .filter(output => output.data[MIME_TYPE])
  //       .forEach(output => {
  //         output.data['image/png'] = data;
  //       });
  //   });
  // }
}

/**
 * Register the mime type and append_mime function with the notebook's
 * output area
 */
function register_renderer(notebook) {
  /* Get an instance of output_area from a CodeCell instance */
  var _notebook$get_cells$r = notebook.get_cells().reduce(function (result, cell) {
    return cell.output_area ? cell : result;
  }, {}),
      output_area = _notebook$get_cells$r.output_area;

  /* A function to render output of 'application/vnd.francy+json' mime type */


  var append_mime = function append_mime(data, metadata, element) {
    /* Create a DOM node to render to */
    var toinsert = this.create_output_subarea(metadata, _constants.CLASS_NAME, _constants.MIME_TYPE);
    this.keyboard_manager.register_events(toinsert);
    /* Render data to DOM node */
    var props = { data: data, metadata: metadata[_constants.MIME_TYPE] };
    render(props, toinsert[0]);
    element.append(toinsert);
    return toinsert;
  };

  /* Handle when an output is cleared or removed */
  output_area.events.on('clear_output.CodeCell', handleClearOutput);

  /* Handle when a new output is added */
  output_area.events.on('output_added.OutputArea', handleAddOutput);

  /* Register the mime type and append_mim function with output_area */
  output_area.register_mime_type(_constants.MIME_TYPE, append_mime, {
    /* Is output safe? */
    safe: true,
    /* Index of renderer in `output_area.display_order` */
    index: 0
  });
}

/**
 * Re-render cells with output data of 'application/vnd.francy+json' mime type
 */
function render_cells(notebook) {
  /* Get all cells in notebook */
  notebook.get_cells().forEach(function (cell) {
    /* If a cell has output data of 'application/vnd.francy+json' mime type */
    if (cell.output_area && cell.output_area.outputs.find(function (output) {
      return output.data && output.data[_constants.MIME_TYPE];
    })) {
      /* Re-render the cell */
      notebook.render_cell_output(cell);
    }
  });
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"name":"francy","version":"0.1.0","description":"A package for rendering francy in Jupyter","author":"Manuel Martins <manuelmachadomartins@gmail.com>","main":"lib/index.js","keywords":["jupyter","jupyterlab","jupyterlab extension"],"scripts":{"build:lib":"babel src -d lib","build:labextension":"cd francy && rimraf labextension && mkdirp labextension && cd labextension && npm pack ../..","build:nbextension":"webpack && npm run copy_libs","build:all":"npm run build:lib && npm run build:labextension && npm run build:nbextension","build":"npm run build:lib","prepare":"npm run build","watch:nbextension":"webpack --watch","watch:lib":"babel src -d lib --watch","watch":"npm-run-all -p watch:*","copy_libs":"cp lib/*.css lib/*min.js francy/nbextension"},"babel":{"presets":["latest"],"plugins":["transform-class-properties"]},"jupyterlab":{"mimeExtension":"lib/lab_extension"},"dependencies":{},"devDependencies":{"babel-cli":"^6.26.0","babel-core":"^6.18.2","babel-loader":"^6.4.0","babel-preset-latest":"^6.16.0","babel-plugin-transform-class-properties":"^6.19.0","css-loader":"^0.25.0","file-loader":"^0.9.0","json-loader":"^0.5.4","npm-run-all":"^4.1.1","mkdirp":"^0.5.1","rimraf":"^2.6.2","style-loader":"^0.13.1","url-loader":"^0.5.7","webpack":"^2.2.0"}}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MIME_TYPE = exports.MIME_TYPE = 'application/vnd.francy+json';
var CLASS_NAME = exports.CLASS_NAME = 'francy-view';
var APPEND_ID = exports.APPEND_ID = '#francy-drawing-div';

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _renderer = __webpack_require__(0);

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

var _package = __webpack_require__(1);

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

__webpack_require__.p = document.querySelector('body').getAttribute('data-base-url') + 'nbextensions/francy/';

/**
 * Export widget models and views, and the npm package version number.
 */

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".francy {\nfont-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;\nposition:relative;\nmargin-top:3px;\nborder:solid 1px #cfcfcf\n}\n\n.francy-highlight:hover {\nstroke:#fffd00;\nstroke-width:2px\n}\n\n.francy-context {\ncursor:context-menu!important\n}\n\n.francy-links {\ncursor:auto\n}\n\n.francy-links line,.francy-arrows path {\nstroke:#999;\nstroke-opacity:.6\n}\n\n.francy a {\ncolor:inherit\n}\n\n.francy-main-menu {\nbackground:#f6f6f6;\nfloat:left;\nlist-style:none;\nwidth:100%;\nborder-bottom:1px solid #cfcfcf\n}\n\n.francy-main-menu li {\nfloat:left;\nposition:relative;\ncursor:pointer;\npadding-left:5px!important;\n}\n\n.francy-main-menu li ul {\nbox-shadow:5px 5px 5px grey;\nmin-width:120px;\nz-index:500\n}\n\n.francy-main-menu li a {\ndisplay:block;\npadding:10px 15px;\ntext-decoration:none\n}\n\n.francy-main-menu li.francy-title {\nfloat:right!important;\ncursor:auto\n}\n\n.francy-main-menu li.francy-title:hover a:hover {\nbackground:inherit!important\n}\n\n.francy-main-menu li:hover a {\nbackground:#f6f6f6;\ntext-decoration:none\n}\n\n.francy-main-menu li:hover a:hover {\nbackground:#ededed;\ntext-decoration:none\n}\n\n.francy-main-menu li:hover ul {\nleft:0\n}\n\n.francy-main-menu li:hover ul a {\ntext-decoration:none\n}\n\n.francy-main-menu li:hover ul li a:hover {\nbackground:#ededed\n}\n\n.francy-main-menu ul {\nleft:-9999px;\nlist-style:none;\nposition:absolute\n}\n\n.francy-main-menu ul a {\nwhite-space:nowrap;\noverflow:hidden;\ntext-overflow:ellipsis;\nmin-width:120px\n}\n\n.francy-main-menu ul li {\nfloat:none;\nwidth:100%\n}\n\n.francy-context-menu-holder {\ndisplay:none;\nposition:absolute\n}\n\n.francy-nodes,.francy-bars,.francy-lines,.francy-labels,.francy-scatters {\ncursor:pointer\n}\n\n.francy-nodes circle,.francy-nodes rect {\nstroke:#fff\n}\n\n.francy-lines path {\nfill:none\n}\n\n.francy-overlay {\nposition:fixed;\ntop:0;\nleft:0;\nheight:100%;\nmin-height:100%;\nwidth:100%;\nmin-width:100%;\nbackground-color:rgba(0,0,0,0.5);\nz-index:750\n}\n\n.francy-modal {\nposition:fixed;\ntop:50%;\nleft:50%;\nbottom:inherit;\nright:inherit;\nz-index:1000;\nbackground:#fff;\nbox-shadow:5px 5px 5px #000;\nmargin-left:-182px;\nmargin-top:-102px;\npadding:10px;\ndisplay:block;\nmin-width:250px\n}\n\n.francy-modal-header {\nborder-bottom:1px solid #cfcfcf;\ntext-align:center;\npadding:10px 0\n}\n\n.francy-modal-footer {\nborder-top:1px solid #cfcfcf;\npadding:10px 0\n}\n\n.francy-modal-content {\nmargin:15px 5px\n}\n\n.francy-modal-content input {\nmargin:5px\n}\n\n.francy-modal-footer button {\nfloat:right;\nmargin-left:5px\n}\n\n.francy-canvas {\nwidth:100%\n}\n\n.francy svg {\ncursor:move\n}\n\n.francy text {\nfill:#000;\nfont-size:12px\n}\n\n.francy ul {\nmargin:0;\npadding:0\n}\n\ndiv.output_subarea.francy-view.output_result {\nmax-width:inherit!important\n}\n\n.francy-tooltip-holder {\ndisplay:none;\nposition: absolute\n}\n\n.francy-tooltip {\nmin-width:fit-content;\nbackground:none repeat scroll 0 0 #f6f6f6;\nborder:1px solid #cfcfcf;\npadding:10px;\ntext-align:justify\n}\n\n.francy-title {\nfont-weight:700;\ntext-overflow:ellipsis\n}\n\n.francy-context-menu {\nbackground:#f6f6f6;\ncolor:#333;\nmin-width:150px;\nborder:1px solid #cfcfcf;\nz-index:500;\nbox-shadow:5px 5px 5px grey\n}\n\n.francy-context-menu ul {\nlist-style-type:none;\nmargin:0;\npadding:0;\ncursor:pointer\n}\n\n.francy-context-menu ul li a {\nbackground:#f6f6f6;\ndisplay:block;\npadding:5px 10px;\ntext-decoration:none\n}\n\n.francy-context-menu ul li a:hover {\nbackground-color:#ededed\n}\n\n.francy-table {\ndisplay:table;\nwidth:100%\n}\n\n.francy-table-row {\ndisplay:table-row\n}\n\n.francy-table-heading {\nbackground-color:#eee;\ndisplay:table-header-group\n}\n\n.francy-table-cell,.francy-table-head {\ndisplay:table-cell;\npadding:0 6px;\nvertical-align:middle;\nwhite-space:nowrap\n}\n\n.francy-table-heading {\nbackground-color:#eee;\ndisplay:table-header-group;\nfont-weight:700\n}\n\n.francy-table-foot {\nbackground-color:#eee;\ndisplay:table-footer-group;\nfont-weight:700\n}\n\n.francy-table-body {\ndisplay:table-row-group\n}\n\n.francy pre {\noutline:1px solid #ccc;\noverflow:auto;\nmax-height:200px\n}\n\n.francy .string {\ncolor:green\n}\n\n.francy .number {\ncolor:#ff8c00\n}\n\n.francy .boolean {\ncolor:blue\n}\n\n.francy .null {\ncolor:#f0f\n}\n\n.francy .key {\ncolor:red\n}\n\n@media only screen and (max-width: 700px) {\n.francy-main-menu .francy-title {\ndisplay:none\n}\n}\n\n.francy-message-holder {\nposition:absolute;\nwidth:fit-content;\ntop:60px;\nleft:20px;\n}\n\n.francy-alert > span {\nmargin-left:5px\n}\n\n.francy-alert {\nwidth:fit-content;\nmin-width:250px;\nmax-width:250px;\npadding:.75rem 1.25rem;\nmargin:.2rem 0 0 .2rem;\nborder:1px solid transparent;\nborder-radius:.25rem;\ncursor:pointer\n}\n\n.francy-alert:hover span:last-of-type {\ndisplay:inline!important;\nfloat:right\n}\n\n.francy-alert.alert-info {\ncolor:#0c5460;\nbackground-color:#d1ecf1;\nborder-color:#bee5eb\n}\n\n.francy-alert.alert-error {\ncolor:#721c24;\nbackground-color:#f8d7da;\nborder-color:#f5c6cb\n}\n\n.francy-alert.alert-success {\ncolor:#155724;\nbackground-color:#d4edda;\nborder-color:#c3e6cb\n}\n\n.francy-alert.alert-default {\ncolor:#1b1e21;\nbackground-color:#f6f6f6;\nborder-color:#cfcfcf\n}\n\n.francy-alert.alert-warning {\ncolor: #856404;\nbackground-color: #fff3cd;\nborder-color: #ffeeba\n}\n\n.strong {\nfont-weight:700\n}\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
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

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
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

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })
/******/ ])});;
//# sourceMappingURL=index.js.map