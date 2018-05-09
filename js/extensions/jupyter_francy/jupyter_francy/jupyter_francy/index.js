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

var _utils = __webpack_require__(4);

__webpack_require__(8);

/* global d3 */

var francy = undefined;

function init(Jupyter, d3, FrancyBundle) {

  console.log('Starting loading Module Francy Javascript...');

  // attach d3 to window
  window.d3 = d3;

  // start Francy
  francy = new FrancyBundle.Francy({
    verbose: false,
    appendTo: '#' + _utils.APPEND_ID,
    callbackHandler: function callbackHandler(command) {
      Jupyter.notebook.kernel.execute(command, {
        iopub: {
          output: function output(msg) {
            if (msg.content && msg.content.data && msg.content.data[_utils.MIME_TYPE]) {
              // This will update an existing canvas by its ID!
              francy.load(msg.content.data[_utils.MIME_TYPE]).render();
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
  francy.load(props.data).render().then(function (element) {
    return node.append(element);
  });
}

/**
 * Handle when an output is cleared or removed
 */
function handleClearOutput(event, _ref) {
  var output_area = _ref.cell.output_area;

  /* Get rendered DOM node */
  var toinsert = output_area.element.find(_utils.CLASS_NAME.split(' ')[0]);
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
  var toinsert = output_area.element.find(_utils.CLASS_NAME.split(' ')[0]);
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
    var toinsert = this.create_output_subarea(metadata, _utils.CLASS_NAME, _utils.MIME_TYPE);
    this.keyboard_manager.register_events(toinsert);
    /* Render data to DOM node */
    var props = { data: data, metadata: metadata[_utils.MIME_TYPE] };
    render(props, toinsert[0]);
    element.append(toinsert);
    return toinsert;
  };

  /* Handle when an output is cleared or removed */
  output_area.events.on('clear_output.CodeCell', handleClearOutput);

  /* Handle when a new output is added */
  output_area.events.on('output_added.OutputArea', handleAddOutput);

  /* Register the mime type and append_mim function with output_area */
  output_area.register_mime_type(_utils.MIME_TYPE, append_mime, {
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
      return output.data && output.data[_utils.MIME_TYPE];
    })) {
      /* Re-render the cell */
      notebook.render_cell_output(cell);
    }
  });
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"name":"jupyter_francy","version":"0.6.0","description":"A package for rendering application/vnd.francy+json in Jupyter","author":"Manuel Martins <manuelmachadomartins@gmail.com>","main":"lib/index.js","keywords":["jupyter","francy","gap","jupyter notebook","jupyter notebook extension","jupyterlab","jupyterlab extension"],"scripts":{"build:lib":"babel src -d lib","build:labextension":"cd jupyter_francy && rimraf labextension && mkdirp labextension && cd labextension && npm pack ../..","build:nbextension":"webpack","build:all":"npm run build:lib && npm run build:nbextension && npm run build:labextension","build":"npm run build:lib","prepare":"npm run build","watch:nbextension":"webpack --watch","watch:lib":"babel src -d lib --watch","watch":"npm-run-all -p watch:*"},"babel":{"presets":["latest"],"plugins":["transform-class-properties"]},"jupyterlab":{"mimeExtension":"lib/lab_extension"},"dependencies":{},"devDependencies":{"babel-cli":"^6.26.0","babel-core":"^6.18.2","babel-loader":"^6.4.0","babel-preset-latest":"^6.16.0","babel-plugin-transform-class-properties":"^6.19.0","css-loader":"^0.25.0","file-loader":"^0.9.0","json-loader":"^0.5.4","npm-run-all":"^4.1.1","mkdirp":"^0.5.1","rimraf":"^2.6.2","style-loader":"^0.13.1","url-loader":"^0.5.7","webpack":"^2.2.0"}}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// https://d3js.org Version 5.0.0. Copyright 2018 Mike Bostock.
(function (t, n) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? n(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : n(t.d3 = t.d3 || {});
})(undefined, function (t) {
  "use strict";
  function n(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }function e(t) {
    return 1 === t.length && (t = function (t) {
      return function (e, r) {
        return n(t(e), r);
      };
    }(t)), { left: function left(n, e, r, i) {
        for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
          var o = r + i >>> 1;t(n[o], e) < 0 ? r = o + 1 : i = o;
        }return r;
      }, right: function right(n, e, r, i) {
        for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
          var o = r + i >>> 1;t(n[o], e) > 0 ? i = o : r = o + 1;
        }return r;
      } };
  }function r(t, n) {
    return [t, n];
  }function i(t) {
    return null === t ? NaN : +t;
  }function o(t, n) {
    var e,
        r,
        o = t.length,
        a = 0,
        u = -1,
        f = 0,
        c = 0;if (null == n) for (; ++u < o;) {
      isNaN(e = i(t[u])) || (c += (r = e - f) * (e - (f += r / ++a)));
    } else for (; ++u < o;) {
      isNaN(e = i(n(t[u], u, t))) || (c += (r = e - f) * (e - (f += r / ++a)));
    }if (a > 1) return c / (a - 1);
  }function a(t, n) {
    var e = o(t, n);return e ? Math.sqrt(e) : e;
  }function u(t, n) {
    var e,
        r,
        i,
        o = t.length,
        a = -1;if (null == n) {
      for (; ++a < o;) {
        if (null != (e = t[a]) && e >= e) for (r = i = e; ++a < o;) {
          null != (e = t[a]) && (r > e && (r = e), i < e && (i = e));
        }
      }
    } else for (; ++a < o;) {
      if (null != (e = n(t[a], a, t)) && e >= e) for (r = i = e; ++a < o;) {
        null != (e = n(t[a], a, t)) && (r > e && (r = e), i < e && (i = e));
      }
    }return [r, i];
  }function f(t) {
    return function () {
      return t;
    };
  }function c(t) {
    return t;
  }function s(t, n, e) {
    t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) {
      o[r] = t + r * e;
    }return o;
  }function l(t, n, e) {
    var r,
        i,
        o,
        a,
        u = -1;if (n = +n, t = +t, e = +e, t === n && e > 0) return [t];if ((r = n < t) && (i = t, t = n, n = i), 0 === (a = h(t, n, e)) || !isFinite(a)) return [];if (a > 0) for (t = Math.ceil(t / a), n = Math.floor(n / a), o = new Array(i = Math.ceil(n - t + 1)); ++u < i;) {
      o[u] = (t + u) * a;
    } else for (t = Math.floor(t * a), n = Math.ceil(n * a), o = new Array(i = Math.ceil(t - n + 1)); ++u < i;) {
      o[u] = (t - u) / a;
    }return r && o.reverse(), o;
  }function h(t, n, e) {
    var r = (n - t) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        o = r / Math.pow(10, i);return i >= 0 ? (o >= ns ? 10 : o >= es ? 5 : o >= rs ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= ns ? 10 : o >= es ? 5 : o >= rs ? 2 : 1);
  }function d(t, n, e) {
    var r = Math.abs(n - t) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        o = r / i;return o >= ns ? i *= 10 : o >= es ? i *= 5 : o >= rs && (i *= 2), n < t ? -i : i;
  }function p(t) {
    return Math.ceil(Math.log(t.length) / Math.LN2) + 1;
  }function v(t, n, e) {
    if (null == e && (e = i), r = t.length) {
      if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);if (n >= 1) return +e(t[r - 1], r - 1, t);var r,
          o = (r - 1) * n,
          a = Math.floor(o),
          u = +e(t[a], a, t);return u + (+e(t[a + 1], a + 1, t) - u) * (o - a);
    }
  }function g(t, n) {
    var e,
        r,
        i = t.length,
        o = -1;if (null == n) {
      for (; ++o < i;) {
        if (null != (e = t[o]) && e >= e) for (r = e; ++o < i;) {
          null != (e = t[o]) && e > r && (r = e);
        }
      }
    } else for (; ++o < i;) {
      if (null != (e = n(t[o], o, t)) && e >= e) for (r = e; ++o < i;) {
        null != (e = n(t[o], o, t)) && e > r && (r = e);
      }
    }return r;
  }function y(t) {
    for (var n, e, r, i = t.length, o = -1, a = 0; ++o < i;) {
      a += t[o].length;
    }for (e = new Array(a); --i >= 0;) {
      for (n = (r = t[i]).length; --n >= 0;) {
        e[--a] = r[n];
      }
    }return e;
  }function _(t, n) {
    var e,
        r,
        i = t.length,
        o = -1;if (null == n) {
      for (; ++o < i;) {
        if (null != (e = t[o]) && e >= e) for (r = e; ++o < i;) {
          null != (e = t[o]) && r > e && (r = e);
        }
      }
    } else for (; ++o < i;) {
      if (null != (e = n(t[o], o, t)) && e >= e) for (r = e; ++o < i;) {
        null != (e = n(t[o], o, t)) && r > e && (r = e);
      }
    }return r;
  }function b(t) {
    if (!(i = t.length)) return [];for (var n = -1, e = _(t, m), r = new Array(e); ++n < e;) {
      for (var i, o = -1, a = r[n] = new Array(i); ++o < i;) {
        a[o] = t[o][n];
      }
    }return r;
  }function m(t) {
    return t.length;
  }function x(t) {
    return t;
  }function w(t) {
    return "translate(" + (t + .5) + ",0)";
  }function M(t) {
    return "translate(0," + (t + .5) + ")";
  }function A() {
    return !this.__axis;
  }function T(t, n) {
    function e(e) {
      var h = null == i ? n.ticks ? n.ticks.apply(n, r) : n.domain() : i,
          d = null == o ? n.tickFormat ? n.tickFormat.apply(n, r) : x : o,
          p = Math.max(a, 0) + f,
          v = n.range(),
          g = +v[0] + .5,
          y = +v[v.length - 1] + .5,
          _ = (n.bandwidth ? function (t) {
        var n = Math.max(0, t.bandwidth() - 1) / 2;return t.round() && (n = Math.round(n)), function (e) {
          return +t(e) + n;
        };
      } : function (t) {
        return function (n) {
          return +t(n);
        };
      })(n.copy()),
          b = e.selection ? e.selection() : e,
          m = b.selectAll(".domain").data([null]),
          w = b.selectAll(".tick").data(h, n).order(),
          M = w.exit(),
          T = w.enter().append("g").attr("class", "tick"),
          N = w.select("line"),
          S = w.select("text");m = m.merge(m.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), w = w.merge(T), N = N.merge(T.append("line").attr("stroke", "#000").attr(s + "2", c * a)), S = S.merge(T.append("text").attr("fill", "#000").attr(s, c * p).attr("dy", t === os ? "0em" : t === us ? "0.71em" : "0.32em")), e !== b && (m = m.transition(e), w = w.transition(e), N = N.transition(e), S = S.transition(e), M = M.transition(e).attr("opacity", cs).attr("transform", function (t) {
        return isFinite(t = _(t)) ? l(t) : this.getAttribute("transform");
      }), T.attr("opacity", cs).attr("transform", function (t) {
        var n = this.parentNode.__axis;return l(n && isFinite(n = n(t)) ? n : _(t));
      })), M.remove(), m.attr("d", t === fs || t == as ? "M" + c * u + "," + g + "H0.5V" + y + "H" + c * u : "M" + g + "," + c * u + "V0.5H" + y + "V" + c * u), w.attr("opacity", 1).attr("transform", function (t) {
        return l(_(t));
      }), N.attr(s + "2", c * a), S.attr(s, c * p).text(d), b.filter(A).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === as ? "start" : t === fs ? "end" : "middle"), b.each(function () {
        this.__axis = _;
      });
    }var r = [],
        i = null,
        o = null,
        a = 6,
        u = 6,
        f = 3,
        c = t === os || t === fs ? -1 : 1,
        s = t === fs || t === as ? "x" : "y",
        l = t === os || t === us ? w : M;return e.scale = function (t) {
      return arguments.length ? (n = t, e) : n;
    }, e.ticks = function () {
      return r = is.call(arguments), e;
    }, e.tickArguments = function (t) {
      return arguments.length ? (r = null == t ? [] : is.call(t), e) : r.slice();
    }, e.tickValues = function (t) {
      return arguments.length ? (i = null == t ? null : is.call(t), e) : i && i.slice();
    }, e.tickFormat = function (t) {
      return arguments.length ? (o = t, e) : o;
    }, e.tickSize = function (t) {
      return arguments.length ? (a = u = +t, e) : a;
    }, e.tickSizeInner = function (t) {
      return arguments.length ? (a = +t, e) : a;
    }, e.tickSizeOuter = function (t) {
      return arguments.length ? (u = +t, e) : u;
    }, e.tickPadding = function (t) {
      return arguments.length ? (f = +t, e) : f;
    }, e;
  }function N() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);r[t] = [];
    }return new S(r);
  }function S(t) {
    this._ = t;
  }function E(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r) {
      if (t[r].name === n) {
        t[r] = ss, t = t.slice(0, r).concat(t.slice(r + 1));break;
      }
    }return null != e && t.push({ name: n, value: e }), t;
  }function k(t) {
    var n = t += "",
        e = n.indexOf(":");return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), hs.hasOwnProperty(n) ? { space: hs[n], local: t } : t;
  }function C(t) {
    var n = k(t);return (n.local ? function (t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local);
      };
    } : function (t) {
      return function () {
        var n = this.ownerDocument,
            e = this.namespaceURI;return e === ls && n.documentElement.namespaceURI === ls ? n.createElement(t) : n.createElementNS(e, t);
      };
    })(n);
  }function P() {}function z(t) {
    return null == t ? P : function () {
      return this.querySelector(t);
    };
  }function R() {
    return [];
  }function L(t) {
    return null == t ? R : function () {
      return this.querySelectorAll(t);
    };
  }function D(t) {
    return new Array(t.length);
  }function U(t, n) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
  }function q(t, n, e, r, i, o) {
    for (var a, u = 0, f = n.length, c = o.length; u < c; ++u) {
      (a = n[u]) ? (a.__data__ = o[u], r[u] = a) : e[u] = new U(t, o[u]);
    }for (; u < f; ++u) {
      (a = n[u]) && (i[u] = a);
    }
  }function O(t, n, e, r, i, o, a) {
    var u,
        f,
        c,
        s = {},
        l = n.length,
        h = o.length,
        d = new Array(l);for (u = 0; u < l; ++u) {
      (f = n[u]) && (d[u] = c = ys + a.call(f, f.__data__, u, n), c in s ? i[u] = f : s[c] = f);
    }for (u = 0; u < h; ++u) {
      (f = s[c = ys + a.call(t, o[u], u, o)]) ? (r[u] = f, f.__data__ = o[u], s[c] = null) : e[u] = new U(t, o[u]);
    }for (u = 0; u < l; ++u) {
      (f = n[u]) && s[d[u]] === f && (i[u] = f);
    }
  }function Y(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }function B(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
  }function F(t, n) {
    return t.style.getPropertyValue(n) || B(t).getComputedStyle(t, null).getPropertyValue(n);
  }function I(t) {
    return t.trim().split(/^|\s+/);
  }function j(t) {
    return t.classList || new H(t);
  }function H(t) {
    this._node = t, this._names = I(t.getAttribute("class") || "");
  }function X(t, n) {
    for (var e = j(t), r = -1, i = n.length; ++r < i;) {
      e.add(n[r]);
    }
  }function G(t, n) {
    for (var e = j(t), r = -1, i = n.length; ++r < i;) {
      e.remove(n[r]);
    }
  }function V() {
    this.textContent = "";
  }function $() {
    this.innerHTML = "";
  }function W() {
    this.nextSibling && this.parentNode.appendChild(this);
  }function Z() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }function Q() {
    return null;
  }function J() {
    var t = this.parentNode;t && t.removeChild(this);
  }function K() {
    return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
  }function tt() {
    return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
  }function nt(t, n, e) {
    return t = et(t, n, e), function (n) {
      var e = n.relatedTarget;e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n);
    };
  }function et(n, e, r) {
    return function (i) {
      var o = t.event;t.event = i;try {
        n.call(this, this.__data__, e, r);
      } finally {
        t.event = o;
      }
    };
  }function rt(t) {
    return function () {
      var n = this.__on;if (n) {
        for (var e, r = 0, i = -1, o = n.length; r < o; ++r) {
          e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
        }++i ? n.length = i : delete this.__on;
      }
    };
  }function it(t, n, e) {
    var r = _s.hasOwnProperty(t.type) ? nt : et;return function (i, o, a) {
      var u,
          f = this.__on,
          c = r(n, o, a);if (f) for (var s = 0, l = f.length; s < l; ++s) {
        if ((u = f[s]).type === t.type && u.name === t.name) return this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, u.listener = c, u.capture = e), void (u.value = n);
      }this.addEventListener(t.type, c, e), u = { type: t.type, name: t.name, value: n, listener: c, capture: e }, f ? f.push(u) : this.__on = [u];
    };
  }function ot(n, e, r, i) {
    var o = t.event;n.sourceEvent = t.event, t.event = n;try {
      return e.apply(r, i);
    } finally {
      t.event = o;
    }
  }function at(t, n, e) {
    var r = B(t),
        i = r.CustomEvent;"function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
  }function ut(t, n) {
    this._groups = t, this._parents = n;
  }function ft() {
    return new ut([[document.documentElement]], bs);
  }function ct(t) {
    return "string" == typeof t ? new ut([[document.querySelector(t)]], [document.documentElement]) : new ut([[t]], bs);
  }function st() {
    return new lt();
  }function lt() {
    this._ = "@" + (++ms).toString(36);
  }function ht() {
    for (var n, e = t.event; n = e.sourceEvent;) {
      e = n;
    }return e;
  }function dt(t, n) {
    var e = t.ownerSVGElement || t;if (e.createSVGPoint) {
      var r = e.createSVGPoint();return r.x = n.clientX, r.y = n.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }var i = t.getBoundingClientRect();return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop];
  }function pt(t) {
    var n = ht();return n.changedTouches && (n = n.changedTouches[0]), dt(t, n);
  }function vt(t, n, e) {
    arguments.length < 3 && (e = n, n = ht().changedTouches);for (var r, i = 0, o = n ? n.length : 0; i < o; ++i) {
      if ((r = n[i]).identifier === e) return dt(t, r);
    }return null;
  }function gt() {
    t.event.stopImmediatePropagation();
  }function yt() {
    t.event.preventDefault(), t.event.stopImmediatePropagation();
  }function _t(t) {
    var n = t.document.documentElement,
        e = ct(t).on("dragstart.drag", yt, !0);"onselectstart" in n ? e.on("selectstart.drag", yt, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
  }function bt(t, n) {
    var e = t.document.documentElement,
        r = ct(t).on("dragstart.drag", null);n && (r.on("click.drag", yt, !0), setTimeout(function () {
      r.on("click.drag", null);
    }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
  }function mt(t) {
    return function () {
      return t;
    };
  }function xt(t, n, e, r, i, o, a, u, f, c) {
    this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = a, this.dx = u, this.dy = f, this._ = c;
  }function wt() {
    return !t.event.button;
  }function Mt() {
    return this.parentNode;
  }function At(n) {
    return null == n ? { x: t.event.x, y: t.event.y } : n;
  }function Tt() {
    return "ontouchstart" in this;
  }function Nt(t, n, e) {
    t.prototype = n.prototype = e, e.constructor = t;
  }function St(t, n) {
    var e = Object.create(t.prototype);for (var r in n) {
      e[r] = n[r];
    }return e;
  }function Et() {}function kt(t) {
    var n;return t = (t + "").trim().toLowerCase(), (n = As.exec(t)) ? (n = parseInt(n[1], 16), new Lt(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = Ts.exec(t)) ? Ct(parseInt(n[1], 16)) : (n = Ns.exec(t)) ? new Lt(n[1], n[2], n[3], 1) : (n = Ss.exec(t)) ? new Lt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = Es.exec(t)) ? Pt(n[1], n[2], n[3], n[4]) : (n = ks.exec(t)) ? Pt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Cs.exec(t)) ? Dt(n[1], n[2] / 100, n[3] / 100, 1) : (n = Ps.exec(t)) ? Dt(n[1], n[2] / 100, n[3] / 100, n[4]) : zs.hasOwnProperty(t) ? Ct(zs[t]) : "transparent" === t ? new Lt(NaN, NaN, NaN, 0) : null;
  }function Ct(t) {
    return new Lt(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
  }function Pt(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new Lt(t, n, e, r);
  }function zt(t) {
    return t instanceof Et || (t = kt(t)), t ? (t = t.rgb(), new Lt(t.r, t.g, t.b, t.opacity)) : new Lt();
  }function Rt(t, n, e, r) {
    return 1 === arguments.length ? zt(t) : new Lt(t, n, e, null == r ? 1 : r);
  }function Lt(t, n, e, r) {
    this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
  }function Dt(t, n, e, r) {
    return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new qt(t, n, e, r);
  }function Ut(t, n, e, r) {
    return 1 === arguments.length ? function (t) {
      if (t instanceof qt) return new qt(t.h, t.s, t.l, t.opacity);if (t instanceof Et || (t = kt(t)), !t) return new qt();if (t instanceof qt) return t;var n = (t = t.rgb()).r / 255,
          e = t.g / 255,
          r = t.b / 255,
          i = Math.min(n, e, r),
          o = Math.max(n, e, r),
          a = NaN,
          u = o - i,
          f = (o + i) / 2;return u ? (a = n === o ? (e - r) / u + 6 * (e < r) : e === o ? (r - n) / u + 2 : (n - e) / u + 4, u /= f < .5 ? o + i : 2 - o - i, a *= 60) : u = f > 0 && f < 1 ? 0 : a, new qt(a, u, f, t.opacity);
    }(t) : new qt(t, n, e, null == r ? 1 : r);
  }function qt(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function Ot(t, n, e) {
    return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n);
  }function Yt(t) {
    if (t instanceof Ft) return new Ft(t.l, t.a, t.b, t.opacity);if (t instanceof Vt) {
      var n = t.h * Rs;return new Ft(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
    }t instanceof Lt || (t = zt(t));var e = Xt(t.r),
        r = Xt(t.g),
        i = Xt(t.b),
        o = It((.4124564 * e + .3575761 * r + .1804375 * i) / Ds),
        a = It((.2126729 * e + .7151522 * r + .072175 * i) / Us);return new Ft(116 * a - 16, 500 * (o - a), 200 * (a - It((.0193339 * e + .119192 * r + .9503041 * i) / qs)), t.opacity);
  }function Bt(t, n, e, r) {
    return 1 === arguments.length ? Yt(t) : new Ft(t, n, e, null == r ? 1 : r);
  }function Ft(t, n, e, r) {
    this.l = +t, this.a = +n, this.b = +e, this.opacity = +r;
  }function It(t) {
    return t > Fs ? Math.pow(t, 1 / 3) : t / Bs + Os;
  }function jt(t) {
    return t > Ys ? t * t * t : Bs * (t - Os);
  }function Ht(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
  }function Xt(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  }function Gt(t, n, e, r) {
    return 1 === arguments.length ? function (t) {
      if (t instanceof Vt) return new Vt(t.h, t.c, t.l, t.opacity);t instanceof Ft || (t = Yt(t));var n = Math.atan2(t.b, t.a) * Ls;return new Vt(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
    }(t) : new Vt(t, n, e, null == r ? 1 : r);
  }function Vt(t, n, e, r) {
    this.h = +t, this.c = +n, this.l = +e, this.opacity = +r;
  }function $t(t, n, e, r) {
    return 1 === arguments.length ? function (t) {
      if (t instanceof Wt) return new Wt(t.h, t.s, t.l, t.opacity);t instanceof Lt || (t = zt(t));var n = t.r / 255,
          e = t.g / 255,
          r = t.b / 255,
          i = (Vs * r + Xs * n - Gs * e) / (Vs + Xs - Gs),
          o = r - i,
          a = (Hs * (e - i) - Is * o) / js,
          u = Math.sqrt(a * a + o * o) / (Hs * i * (1 - i)),
          f = u ? Math.atan2(a, o) * Ls - 120 : NaN;return new Wt(f < 0 ? f + 360 : f, u, i, t.opacity);
    }(t) : new Wt(t, n, e, null == r ? 1 : r);
  }function Wt(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function Zt(t, n, e, r, i) {
    var o = t * t,
        a = o * t;return ((1 - 3 * t + 3 * o - a) * n + (4 - 6 * o + 3 * a) * e + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6;
  }function Qt(t) {
    var n = t.length - 1;return function (e) {
      var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
          i = t[r],
          o = t[r + 1],
          a = r > 0 ? t[r - 1] : 2 * i - o,
          u = r < n - 1 ? t[r + 2] : 2 * o - i;return Zt((e - r / n) * n, a, i, o, u);
    };
  }function Jt(t) {
    var n = t.length;return function (e) {
      var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
          i = t[(r + n - 1) % n],
          o = t[r % n],
          a = t[(r + 1) % n],
          u = t[(r + 2) % n];return Zt((e - r / n) * n, i, o, a, u);
    };
  }function Kt(t) {
    return function () {
      return t;
    };
  }function tn(t, n) {
    return function (e) {
      return t + e * n;
    };
  }function nn(t, n) {
    var e = n - t;return e ? tn(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Kt(isNaN(t) ? n : t);
  }function en(t) {
    return 1 == (t = +t) ? rn : function (n, e) {
      return e - n ? function (t, n, e) {
        return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
          return Math.pow(t + r * n, e);
        };
      }(n, e, t) : Kt(isNaN(n) ? e : n);
    };
  }function rn(t, n) {
    var e = n - t;return e ? tn(t, e) : Kt(isNaN(t) ? n : t);
  }function on(t) {
    return function (n) {
      var e,
          r,
          i = n.length,
          o = new Array(i),
          a = new Array(i),
          u = new Array(i);for (e = 0; e < i; ++e) {
        r = Rt(n[e]), o[e] = r.r || 0, a[e] = r.g || 0, u[e] = r.b || 0;
      }return o = t(o), a = t(a), u = t(u), r.opacity = 1, function (t) {
        return r.r = o(t), r.g = a(t), r.b = u(t), r + "";
      };
    };
  }function an(t, n) {
    var e,
        r = n ? n.length : 0,
        i = t ? Math.min(r, t.length) : 0,
        o = new Array(i),
        a = new Array(r);for (e = 0; e < i; ++e) {
      o[e] = ln(t[e], n[e]);
    }for (; e < r; ++e) {
      a[e] = n[e];
    }return function (t) {
      for (e = 0; e < i; ++e) {
        a[e] = o[e](t);
      }return a;
    };
  }function un(t, n) {
    var e = new Date();return t = +t, n -= t, function (r) {
      return e.setTime(t + n * r), e;
    };
  }function fn(t, n) {
    return t = +t, n -= t, function (e) {
      return t + n * e;
    };
  }function cn(t, n) {
    var e,
        r = {},
        i = {};null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || (t = {}), null !== n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) || (n = {});for (e in n) {
      e in t ? r[e] = ln(t[e], n[e]) : i[e] = n[e];
    }return function (t) {
      for (e in r) {
        i[e] = r[e](t);
      }return i;
    };
  }function sn(t, n) {
    var e,
        r,
        i,
        o = rl.lastIndex = il.lastIndex = 0,
        a = -1,
        u = [],
        f = [];for (t += "", n += ""; (e = rl.exec(t)) && (r = il.exec(n));) {
      (i = r.index) > o && (i = n.slice(o, i), u[a] ? u[a] += i : u[++a] = i), (e = e[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null, f.push({ i: a, x: fn(e, r) })), o = il.lastIndex;
    }return o < n.length && (i = n.slice(o), u[a] ? u[a] += i : u[++a] = i), u.length < 2 ? f[0] ? function (t) {
      return function (n) {
        return t(n) + "";
      };
    }(f[0].x) : function (t) {
      return function () {
        return t;
      };
    }(n) : (n = f.length, function (t) {
      for (var e, r = 0; r < n; ++r) {
        u[(e = f[r]).i] = e.x(t);
      }return u.join("");
    });
  }function ln(t, n) {
    var e,
        r = typeof n === "undefined" ? "undefined" : _typeof(n);return null == n || "boolean" === r ? Kt(n) : ("number" === r ? fn : "string" === r ? (e = kt(n)) ? (n = e, tl) : sn : n instanceof kt ? tl : n instanceof Date ? un : Array.isArray(n) ? an : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? cn : fn)(t, n);
  }function hn(t, n) {
    return t = +t, n -= t, function (e) {
      return Math.round(t + n * e);
    };
  }function dn(t, n, e, r, i, o) {
    var a, u, f;return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (f = t * e + n * r) && (e -= t * f, r -= n * f), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, f /= u), t * r < n * e && (t = -t, n = -n, f = -f, a = -a), { translateX: i, translateY: o, rotate: Math.atan2(n, t) * ol, skewX: Math.atan(f) * ol, scaleX: a, scaleY: u };
  }function pn(t, n, e, r) {
    function i(t) {
      return t.length ? t.pop() + " " : "";
    }return function (o, a) {
      var u = [],
          f = [];return o = t(o), a = t(a), function (t, r, i, o, a, u) {
        if (t !== i || r !== o) {
          var f = a.push("translate(", null, n, null, e);u.push({ i: f - 4, x: fn(t, i) }, { i: f - 2, x: fn(r, o) });
        } else (i || o) && a.push("translate(" + i + n + o + e);
      }(o.translateX, o.translateY, a.translateX, a.translateY, u, f), function (t, n, e, o) {
        t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({ i: e.push(i(e) + "rotate(", null, r) - 2, x: fn(t, n) })) : n && e.push(i(e) + "rotate(" + n + r);
      }(o.rotate, a.rotate, u, f), function (t, n, e, o) {
        t !== n ? o.push({ i: e.push(i(e) + "skewX(", null, r) - 2, x: fn(t, n) }) : n && e.push(i(e) + "skewX(" + n + r);
      }(o.skewX, a.skewX, u, f), function (t, n, e, r, o, a) {
        if (t !== e || n !== r) {
          var u = o.push(i(o) + "scale(", null, ",", null, ")");a.push({ i: u - 4, x: fn(t, e) }, { i: u - 2, x: fn(n, r) });
        } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")");
      }(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, f), o = a = null, function (t) {
        for (var n, e = -1, r = f.length; ++e < r;) {
          u[(n = f[e]).i] = n.x(t);
        }return u.join("");
      };
    };
  }function vn(t) {
    return ((t = Math.exp(t)) + 1 / t) / 2;
  }function gn(t, n) {
    var e,
        r,
        i = t[0],
        o = t[1],
        a = t[2],
        u = n[0],
        f = n[1],
        c = n[2],
        s = u - i,
        l = f - o,
        h = s * s + l * l;if (h < hl) r = Math.log(c / a) / cl, e = function e(t) {
      return [i + t * s, o + t * l, a * Math.exp(cl * t * r)];
    };else {
      var d = Math.sqrt(h),
          p = (c * c - a * a + ll * h) / (2 * a * sl * d),
          v = (c * c - a * a - ll * h) / (2 * c * sl * d),
          g = Math.log(Math.sqrt(p * p + 1) - p),
          y = Math.log(Math.sqrt(v * v + 1) - v);r = (y - g) / cl, e = function e(t) {
        var n = t * r,
            e = vn(g),
            u = a / (sl * d) * (e * function (t) {
          return ((t = Math.exp(2 * t)) - 1) / (t + 1);
        }(cl * n + g) - function (t) {
          return ((t = Math.exp(t)) - 1 / t) / 2;
        }(g));return [i + u * s, o + u * l, a * e / vn(cl * n + g)];
      };
    }return e.duration = 1e3 * r, e;
  }function yn(t) {
    return function (n, e) {
      var r = t((n = Ut(n)).h, (e = Ut(e)).h),
          i = rn(n.s, e.s),
          o = rn(n.l, e.l),
          a = rn(n.opacity, e.opacity);return function (t) {
        return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = a(t), n + "";
      };
    };
  }function _n(t) {
    return function (n, e) {
      var r = t((n = Gt(n)).h, (e = Gt(e)).h),
          i = rn(n.c, e.c),
          o = rn(n.l, e.l),
          a = rn(n.opacity, e.opacity);return function (t) {
        return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = a(t), n + "";
      };
    };
  }function bn(t) {
    return function n(e) {
      function r(n, r) {
        var i = t((n = $t(n)).h, (r = $t(r)).h),
            o = rn(n.s, r.s),
            a = rn(n.l, r.l),
            u = rn(n.opacity, r.opacity);return function (t) {
          return n.h = i(t), n.s = o(t), n.l = a(Math.pow(t, e)), n.opacity = u(t), n + "";
        };
      }return e = +e, r.gamma = n, r;
    }(1);
  }function mn() {
    return Al || (Sl(xn), Al = Nl.now() + Tl);
  }function xn() {
    Al = 0;
  }function wn() {
    this._call = this._time = this._next = null;
  }function Mn(t, n, e) {
    var r = new wn();return r.restart(t, n, e), r;
  }function An() {
    mn(), ++bl;for (var t, n = Js; n;) {
      (t = Al - n._time) >= 0 && n._call.call(null, t), n = n._next;
    }--bl;
  }function Tn() {
    Al = (Ml = Nl.now()) + Tl, bl = ml = 0;try {
      An();
    } finally {
      bl = 0, function () {
        var t,
            n,
            e = Js,
            r = 1 / 0;for (; e;) {
          e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Js = n);
        }Ks = t, Sn(r);
      }(), Al = 0;
    }
  }function Nn() {
    var t = Nl.now(),
        n = t - Ml;n > wl && (Tl -= n, Ml = t);
  }function Sn(t) {
    if (!bl) {
      ml && (ml = clearTimeout(ml));t - Al > 24 ? (t < 1 / 0 && (ml = setTimeout(Tn, t - Nl.now() - Tl)), xl && (xl = clearInterval(xl))) : (xl || (Ml = Nl.now(), xl = setInterval(Nn, wl)), bl = 1, Sl(Tn));
    }
  }function En(t, n, e) {
    var r = new wn();return n = null == n ? 0 : +n, r.restart(function (e) {
      r.stop(), t(e + n);
    }, n, e), r;
  }function kn(t, n, e, r, i, o) {
    var a = t.__transition;if (a) {
      if (e in a) return;
    } else t.__transition = {};(function (t, n, e) {
      function r(f) {
        var c, s, l, h;if (e.state !== Pl) return o();for (c in u) {
          if ((h = u[c]).name === e.name) {
            if (h.state === Rl) return En(r);h.state === Ll ? (h.state = Ul, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete u[c]) : +c < n && (h.state = Ul, h.timer.stop(), delete u[c]);
          }
        }if (En(function () {
          e.state === Rl && (e.state = Ll, e.timer.restart(i, e.delay, e.time), i(f));
        }), e.state = zl, e.on.call("start", t, t.__data__, e.index, e.group), e.state === zl) {
          for (e.state = Rl, a = new Array(l = e.tween.length), c = 0, s = -1; c < l; ++c) {
            (h = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (a[++s] = h);
          }a.length = s + 1;
        }
      }function i(n) {
        for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(o), e.state = Dl, 1), i = -1, u = a.length; ++i < u;) {
          a[i].call(null, r);
        }e.state === Dl && (e.on.call("end", t, t.__data__, e.index, e.group), o());
      }function o() {
        e.state = Ul, e.timer.stop(), delete u[n];for (var r in u) {
          return;
        }delete t.__transition;
      }var a,
          u = t.__transition;u[n] = e, e.timer = Mn(function (t) {
        e.state = Pl, e.timer.restart(r, e.delay, e.time), e.delay <= t && r(t - e.delay);
      }, 0, e.time);
    })(t, e, { name: n, index: r, group: i, on: El, tween: kl, time: o.time, delay: o.delay, duration: o.duration, ease: o.ease, timer: null, state: Cl });
  }function Cn(t, n) {
    var e = zn(t, n);if (e.state > Cl) throw new Error("too late; already scheduled");return e;
  }function Pn(t, n) {
    var e = zn(t, n);if (e.state > zl) throw new Error("too late; already started");return e;
  }function zn(t, n) {
    var e = t.__transition;if (!e || !(e = e[n])) throw new Error("transition not found");return e;
  }function Rn(t, n) {
    var e,
        r,
        i,
        o = t.__transition,
        a = !0;if (o) {
      n = null == n ? null : n + "";for (i in o) {
        (e = o[i]).name === n ? (r = e.state > zl && e.state < Dl, e.state = Ul, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : a = !1;
      }a && delete t.__transition;
    }
  }function Ln(t, n, e) {
    var r = t._id;return t.each(function () {
      var t = Pn(this, r);(t.value || (t.value = {}))[n] = e.apply(this, arguments);
    }), function (t) {
      return zn(t, r).value[n];
    };
  }function Dn(t, n) {
    var e;return ("number" == typeof n ? fn : n instanceof kt ? tl : (e = kt(n)) ? (n = e, tl) : sn)(t, n);
  }function Un(t, n, e, r) {
    this._groups = t, this._parents = n, this._name = e, this._id = r;
  }function qn(t) {
    return ft().transition(t);
  }function On() {
    return ++Ol;
  }function Yn(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
  }function Bn(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }function Fn(t) {
    return (1 - Math.cos(jl * t)) / 2;
  }function In(t) {
    return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
  }function jn(t) {
    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
  }function Hn(t) {
    return (t = +t) < Xl ? th * t * t : t < Vl ? th * (t -= Gl) * t + $l : t < Zl ? th * (t -= Wl) * t + Ql : th * (t -= Jl) * t + Kl;
  }function Xn(t, n) {
    for (var e; !(e = t.__transition) || !(e = e[n]);) {
      if (!(t = t.parentNode)) return fh.time = mn(), fh;
    }return e;
  }function Gn(t) {
    return function () {
      return t;
    };
  }function Vn() {
    t.event.stopImmediatePropagation();
  }function $n() {
    t.event.preventDefault(), t.event.stopImmediatePropagation();
  }function Wn(t) {
    return { type: t };
  }function Zn() {
    return !t.event.button;
  }function Qn() {
    var t = this.ownerSVGElement || this;return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]];
  }function Jn(t) {
    for (; !t.__brush;) {
      if (!(t = t.parentNode)) return;
    }return t.__brush;
  }function Kn(t) {
    return t[0][0] === t[1][0] || t[0][1] === t[1][1];
  }function te(n) {
    function e(t) {
      var e = t.property("__brush", u).selectAll(".overlay").data([Wn("overlay")]);e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", yh.overlay).merge(e).each(function () {
        var t = Jn(this).extent;ct(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1]);
      }), t.selectAll(".selection").data([Wn("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", yh.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");var i = t.selectAll(".handle").data(n.handles, function (t) {
        return t.type;
      });i.exit().remove(), i.enter().append("rect").attr("class", function (t) {
        return "handle handle--" + t.type;
      }).attr("cursor", function (t) {
        return yh[t.type];
      }), t.each(r).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", a);
    }function r() {
      var t = ct(this),
          n = Jn(this).selection;n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", function (t) {
        return "e" === t.type[t.type.length - 1] ? n[1][0] - h / 2 : n[0][0] - h / 2;
      }).attr("y", function (t) {
        return "s" === t.type[0] ? n[1][1] - h / 2 : n[0][1] - h / 2;
      }).attr("width", function (t) {
        return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + h : h;
      }).attr("height", function (t) {
        return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + h : h;
      })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
    }function i(t, n) {
      return t.__brush.emitter || new o(t, n);
    }function o(t, n) {
      this.that = t, this.args = n, this.state = t.__brush, this.active = 0;
    }function a() {
      function e() {
        var t = pt(w);!L || m || x || (Math.abs(t[0] - U[0]) > Math.abs(t[1] - U[1]) ? x = !0 : m = !0), U = t, b = !0, $n(), o();
      }function o() {
        var t;switch (y = U[0] - D[0], _ = U[1] - D[1], A) {case lh:case sh:
            T && (y = Math.max(C - u, Math.min(z - d, y)), c = u + y, p = d + y), N && (_ = Math.max(P - l, Math.min(R - v, _)), h = l + _, g = v + _);break;case hh:
            T < 0 ? (y = Math.max(C - u, Math.min(z - u, y)), c = u + y, p = d) : T > 0 && (y = Math.max(C - d, Math.min(z - d, y)), c = u, p = d + y), N < 0 ? (_ = Math.max(P - l, Math.min(R - l, _)), h = l + _, g = v) : N > 0 && (_ = Math.max(P - v, Math.min(R - v, _)), h = l, g = v + _);break;case dh:
            T && (c = Math.max(C, Math.min(z, u - y * T)), p = Math.max(C, Math.min(z, d + y * T))), N && (h = Math.max(P, Math.min(R, l - _ * N)), g = Math.max(P, Math.min(R, v + _ * N)));}p < c && (T *= -1, t = u, u = d, d = t, t = c, c = p, p = t, M in _h && Y.attr("cursor", yh[M = _h[M]])), g < h && (N *= -1, t = l, l = v, v = t, t = h, h = g, g = t, M in bh && Y.attr("cursor", yh[M = bh[M]])), S.selection && (k = S.selection), m && (c = k[0][0], p = k[1][0]), x && (h = k[0][1], g = k[1][1]), k[0][0] === c && k[0][1] === h && k[1][0] === p && k[1][1] === g || (S.selection = [[c, h], [p, g]], r.call(w), q.brush());
      }function a() {
        if (Vn(), t.event.touches) {
          if (t.event.touches.length) return;f && clearTimeout(f), f = setTimeout(function () {
            f = null;
          }, 500), O.on("touchmove.brush touchend.brush touchcancel.brush", null);
        } else bt(t.event.view, b), B.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);O.attr("pointer-events", "all"), Y.attr("cursor", yh.overlay), S.selection && (k = S.selection), Kn(k) && (S.selection = null, r.call(w)), q.end();
      }if (t.event.touches) {
        if (t.event.changedTouches.length < t.event.touches.length) return $n();
      } else if (f) return;if (s.apply(this, arguments)) {
        var u,
            c,
            l,
            h,
            d,
            p,
            v,
            g,
            y,
            _,
            b,
            m,
            x,
            w = this,
            M = t.event.target.__data__.type,
            A = "selection" === (t.event.metaKey ? M = "overlay" : M) ? sh : t.event.altKey ? dh : hh,
            T = n === vh ? null : mh[M],
            N = n === ph ? null : xh[M],
            S = Jn(w),
            E = S.extent,
            k = S.selection,
            C = E[0][0],
            P = E[0][1],
            z = E[1][0],
            R = E[1][1],
            L = T && N && t.event.shiftKey,
            D = pt(w),
            U = D,
            q = i(w, arguments).beforestart();"overlay" === M ? S.selection = k = [[u = n === vh ? C : D[0], l = n === ph ? P : D[1]], [d = n === vh ? z : u, v = n === ph ? R : l]] : (u = k[0][0], l = k[0][1], d = k[1][0], v = k[1][1]), c = u, h = l, p = d, g = v;var O = ct(w).attr("pointer-events", "none"),
            Y = O.selectAll(".overlay").attr("cursor", yh[M]);if (t.event.touches) O.on("touchmove.brush", e, !0).on("touchend.brush touchcancel.brush", a, !0);else {
          var B = ct(t.event.view).on("keydown.brush", function () {
            switch (t.event.keyCode) {case 16:
                L = T && N;break;case 18:
                A === hh && (T && (d = p - y * T, u = c + y * T), N && (v = g - _ * N, l = h + _ * N), A = dh, o());break;case 32:
                A !== hh && A !== dh || (T < 0 ? d = p - y : T > 0 && (u = c - y), N < 0 ? v = g - _ : N > 0 && (l = h - _), A = lh, Y.attr("cursor", yh.selection), o());break;default:
                return;}$n();
          }, !0).on("keyup.brush", function () {
            switch (t.event.keyCode) {case 16:
                L && (m = x = L = !1, o());break;case 18:
                A === dh && (T < 0 ? d = p : T > 0 && (u = c), N < 0 ? v = g : N > 0 && (l = h), A = hh, o());break;case 32:
                A === lh && (t.event.altKey ? (T && (d = p - y * T, u = c + y * T), N && (v = g - _ * N, l = h + _ * N), A = dh) : (T < 0 ? d = p : T > 0 && (u = c), N < 0 ? v = g : N > 0 && (l = h), A = hh), Y.attr("cursor", yh[M]), o());break;default:
                return;}$n();
          }, !0).on("mousemove.brush", e, !0).on("mouseup.brush", a, !0);_t(t.event.view);
        }Vn(), Rn(w), r.call(w), q.start();
      }
    }function u() {
      var t = this.__brush || { selection: null };return t.extent = c.apply(this, arguments), t.dim = n, t;
    }var f,
        c = Qn,
        s = Zn,
        l = N(e, "start", "brush", "end"),
        h = 6;return e.move = function (t, e) {
      t.selection ? t.on("start.brush", function () {
        i(this, arguments).beforestart().start();
      }).on("interrupt.brush end.brush", function () {
        i(this, arguments).end();
      }).tween("brush", function () {
        function t(t) {
          a.selection = 1 === t && Kn(c) ? null : s(t), r.call(o), u.brush();
        }var o = this,
            a = o.__brush,
            u = i(o, arguments),
            f = a.selection,
            c = n.input("function" == typeof e ? e.apply(this, arguments) : e, a.extent),
            s = ln(f, c);return f && c ? t : t(1);
      }) : t.each(function () {
        var t = arguments,
            o = this.__brush,
            a = n.input("function" == typeof e ? e.apply(this, t) : e, o.extent),
            u = i(this, t).beforestart();Rn(this), o.selection = null == a || Kn(a) ? null : a, r.call(this), u.start().brush().end();
      });
    }, o.prototype = { beforestart: function beforestart() {
        return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this;
      }, start: function start() {
        return this.starting && (this.starting = !1, this.emit("start")), this;
      }, brush: function brush() {
        return this.emit("brush"), this;
      }, end: function end() {
        return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this;
      }, emit: function emit(t) {
        ot(new function (t, n, e) {
          this.target = t, this.type = n, this.selection = e;
        }(e, t, n.output(this.state.selection)), l.apply, l, [t, this.that, this.args]);
      } }, e.extent = function (t) {
      return arguments.length ? (c = "function" == typeof t ? t : Gn([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), e) : c;
    }, e.filter = function (t) {
      return arguments.length ? (s = "function" == typeof t ? t : Gn(!!t), e) : s;
    }, e.handleSize = function (t) {
      return arguments.length ? (h = +t, e) : h;
    }, e.on = function () {
      var t = l.on.apply(l, arguments);return t === l ? e : t;
    }, e;
  }function ne(t) {
    return function () {
      return t;
    };
  }function ee() {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
  }function re() {
    return new ee();
  }function ie(t) {
    return t.source;
  }function oe(t) {
    return t.target;
  }function ae(t) {
    return t.radius;
  }function ue(t) {
    return t.startAngle;
  }function fe(t) {
    return t.endAngle;
  }function ce() {}function se(t, n) {
    var e = new ce();if (t instanceof ce) t.each(function (t, n) {
      e.set(n, t);
    });else if (Array.isArray(t)) {
      var r,
          i = -1,
          o = t.length;if (null == n) for (; ++i < o;) {
        e.set(i, t[i]);
      } else for (; ++i < o;) {
        e.set(n(r = t[i], i, t), r);
      }
    } else if (t) for (var a in t) {
      e.set(a, t[a]);
    }return e;
  }function le() {
    return {};
  }function he(t, n, e) {
    t[n] = e;
  }function de() {
    return se();
  }function pe(t, n, e) {
    t.set(n, e);
  }function ve() {}function ge(t, n) {
    var e = new ve();if (t instanceof ve) t.each(function (t) {
      e.add(t);
    });else if (t) {
      var r = -1,
          i = t.length;if (null == n) for (; ++r < i;) {
        e.add(t[r]);
      } else for (; ++r < i;) {
        e.add(n(t[r], r, t));
      }
    }return e;
  }function ye(t, n) {
    return t - n;
  }function _e(t) {
    return function () {
      return t;
    };
  }function be(t, n) {
    for (var e, r = -1, i = n.length; ++r < i;) {
      if (e = function (t, n) {
        for (var e = n[0], r = n[1], i = -1, o = 0, a = t.length, u = a - 1; o < a; u = o++) {
          var f = t[o],
              c = f[0],
              s = f[1],
              l = t[u],
              h = l[0],
              d = l[1];if (function (t, n, e) {
            var r;return function (t, n, e) {
              return (n[0] - t[0]) * (e[1] - t[1]) == (e[0] - t[0]) * (n[1] - t[1]);
            }(t, n, e) && function (t, n, e) {
              return t <= n && n <= e || e <= n && n <= t;
            }(t[r = +(t[0] === n[0])], e[r], n[r]);
          }(f, l, n)) return 0;s > r != d > r && e < (h - c) * (r - s) / (d - s) + c && (i = -i);
        }return i;
      }(t, n[r])) return e;
    }return 0;
  }function me() {}function xe() {
    function t(t) {
      var e = a(t);if (Array.isArray(e)) e = e.slice().sort(ye);else {
        var r = u(t),
            i = r[0],
            o = r[1];e = d(i, o, e), e = s(Math.floor(i / e) * e, Math.floor(o / e) * e, e);
      }return e.map(function (e) {
        return n(t, e);
      });
    }function n(t, n) {
      var r = [],
          a = [];return function (t, n, r) {
        function a(t) {
          var n,
              i,
              o = [t[0][0] + u, t[0][1] + f],
              a = [t[1][0] + u, t[1][1] + f],
              c = e(o),
              s = e(a);(n = p[c]) ? (i = d[s]) ? (delete p[n.end], delete d[i.start], n === i ? (n.ring.push(a), r(n.ring)) : d[n.start] = p[i.end] = { start: n.start, end: i.end, ring: n.ring.concat(i.ring) }) : (delete p[n.end], n.ring.push(a), p[n.end = s] = n) : (n = d[s]) ? (i = p[c]) ? (delete d[n.start], delete p[i.end], n === i ? (n.ring.push(a), r(n.ring)) : d[i.start] = p[n.end] = { start: i.start, end: n.end, ring: i.ring.concat(n.ring) }) : (delete d[n.start], n.ring.unshift(o), d[n.start = c] = n) : d[c] = p[s] = { start: c, end: s, ring: [o, a] };
        }var u,
            f,
            c,
            s,
            l,
            h,
            d = new Array(),
            p = new Array();u = f = -1, s = t[0] >= n, Lh[s << 1].forEach(a);for (; ++u < i - 1;) {
          c = s, s = t[u + 1] >= n, Lh[c | s << 1].forEach(a);
        }Lh[s << 0].forEach(a);for (; ++f < o - 1;) {
          for (u = -1, s = t[f * i + i] >= n, l = t[f * i] >= n, Lh[s << 1 | l << 2].forEach(a); ++u < i - 1;) {
            c = s, s = t[f * i + i + u + 1] >= n, h = l, l = t[f * i + u + 1] >= n, Lh[c | s << 1 | l << 2 | h << 3].forEach(a);
          }Lh[s | l << 3].forEach(a);
        }u = -1, l = t[f * i] >= n, Lh[l << 2].forEach(a);for (; ++u < i - 1;) {
          h = l, l = t[f * i + u + 1] >= n, Lh[l << 2 | h << 3].forEach(a);
        }Lh[l << 3].forEach(a);
      }(t, n, function (e) {
        f(e, t, n), function (t) {
          for (var n = 0, e = t.length, r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1]; ++n < e;) {
            r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1];
          }return r;
        }(e) > 0 ? r.push([e]) : a.push(e);
      }), a.forEach(function (t) {
        for (var n, e = 0, i = r.length; e < i; ++e) {
          if (-1 !== be((n = r[e])[0], t)) return void n.push(t);
        }
      }), { type: "MultiPolygon", value: n, coordinates: r };
    }function e(t) {
      return 2 * t[0] + t[1] * (i + 1) * 4;
    }function r(t, n, e) {
      t.forEach(function (t) {
        var r,
            a = t[0],
            u = t[1],
            f = 0 | a,
            c = 0 | u,
            s = n[c * i + f];a > 0 && a < i && f === a && (r = n[c * i + f - 1], t[0] = a + (e - r) / (s - r) - .5), u > 0 && u < o && c === u && (r = n[(c - 1) * i + f], t[1] = u + (e - r) / (s - r) - .5);
      });
    }var i = 1,
        o = 1,
        a = p,
        f = r;return t.contour = n, t.size = function (n) {
      if (!arguments.length) return [i, o];var e = Math.ceil(n[0]),
          r = Math.ceil(n[1]);if (!(e > 0 && r > 0)) throw new Error("invalid size");return i = e, o = r, t;
    }, t.thresholds = function (n) {
      return arguments.length ? (a = "function" == typeof n ? n : Array.isArray(n) ? _e(Rh.call(n)) : _e(n), t) : a;
    }, t.smooth = function (n) {
      return arguments.length ? (f = n ? r : me, t) : f === r;
    }, t;
  }function we(t, n, e) {
    for (var r = t.width, i = t.height, o = 1 + (e << 1), a = 0; a < i; ++a) {
      for (var u = 0, f = 0; u < r + e; ++u) {
        u < r && (f += t.data[u + a * r]), u >= e && (u >= o && (f -= t.data[u - o + a * r]), n.data[u - e + a * r] = f / Math.min(u + 1, r - 1 + o - u, o));
      }
    }
  }function Me(t, n, e) {
    for (var r = t.width, i = t.height, o = 1 + (e << 1), a = 0; a < r; ++a) {
      for (var u = 0, f = 0; u < i + e; ++u) {
        u < i && (f += t.data[a + u * r]), u >= e && (u >= o && (f -= t.data[a + (u - o) * r]), n.data[a + (u - e) * r] = f / Math.min(u + 1, i - 1 + o - u, o));
      }
    }
  }function Ae(t) {
    return t[0];
  }function Te(t) {
    return t[1];
  }function Ne(t) {
    return new Function("d", "return {" + t.map(function (t, n) {
      return JSON.stringify(t) + ": d[" + n + "]";
    }).join(",") + "}");
  }function Se(t) {
    function n(t, n) {
      function e() {
        if (c) return Uh;if (s) return s = !1, Dh;var n,
            e,
            r = u;if (t.charCodeAt(r) === qh) {
          for (; u++ < a && t.charCodeAt(u) !== qh || t.charCodeAt(++u) === qh;) {}return (n = u) >= a ? c = !0 : (e = t.charCodeAt(u++)) === Oh ? s = !0 : e === Yh && (s = !0, t.charCodeAt(u) === Oh && ++u), t.slice(r + 1, n - 1).replace(/""/g, '"');
        }for (; u < a;) {
          if ((e = t.charCodeAt(n = u++)) === Oh) s = !0;else if (e === Yh) s = !0, t.charCodeAt(u) === Oh && ++u;else if (e !== o) continue;return t.slice(r, n);
        }return c = !0, t.slice(r, a);
      }var r,
          i = [],
          a = t.length,
          u = 0,
          f = 0,
          c = a <= 0,
          s = !1;for (t.charCodeAt(a - 1) === Oh && --a, t.charCodeAt(a - 1) === Yh && --a; (r = e()) !== Uh;) {
        for (var l = []; r !== Dh && r !== Uh;) {
          l.push(r), r = e();
        }n && null == (l = n(l, f++)) || i.push(l);
      }return i;
    }function e(n) {
      return n.map(r).join(t);
    }function r(t) {
      return null == t ? "" : i.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t;
    }var i = new RegExp('["' + t + "\n\r]"),
        o = t.charCodeAt(0);return { parse: function parse(t, e) {
        var r,
            i,
            o = n(t, function (t, n) {
          if (r) return r(t, n - 1);i = t, r = e ? function (t, n) {
            var e = Ne(t);return function (r, i) {
              return n(e(r), i, t);
            };
          }(t, e) : Ne(t);
        });return o.columns = i || [], o;
      }, parseRows: n, format: function format(n, e) {
        return null == e && (e = function (t) {
          var n = Object.create(null),
              e = [];return t.forEach(function (t) {
            for (var r in t) {
              r in n || e.push(n[r] = r);
            }
          }), e;
        }(n)), [e.map(r).join(t)].concat(n.map(function (n) {
          return e.map(function (t) {
            return r(n[t]);
          }).join(t);
        })).join("\n");
      }, formatRows: function formatRows(t) {
        return t.map(e).join("\n");
      } };
  }function Ee(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);return t.blob();
  }function ke(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);return t.arrayBuffer();
  }function Ce(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);return t.text();
  }function Pe(t, n) {
    return fetch(t, n).then(Ce);
  }function ze(t) {
    return function (n, e, r) {
      return 2 === arguments.length && "function" == typeof e && (r = e, e = void 0), Pe(n, e).then(function (n) {
        return t(n, r);
      });
    };
  }function Re(t) {
    if (!t.ok) throw new Error(t.status + " " + t.statusText);return t.json();
  }function Le(t) {
    return function (n, e) {
      return Pe(n, e).then(function (n) {
        return new DOMParser().parseFromString(n, t);
      });
    };
  }function De(t) {
    return function () {
      return t;
    };
  }function Ue() {
    return 1e-6 * (Math.random() - .5);
  }function qe(t, n, e, r) {
    if (isNaN(n) || isNaN(e)) return t;var i,
        o,
        a,
        u,
        f,
        c,
        s,
        l,
        h,
        d = t._root,
        p = { data: r },
        v = t._x0,
        g = t._y0,
        y = t._x1,
        _ = t._y1;if (!d) return t._root = p, t;for (; d.length;) {
      if ((c = n >= (o = (v + y) / 2)) ? v = o : y = o, (s = e >= (a = (g + _) / 2)) ? g = a : _ = a, i = d, !(d = d[l = s << 1 | c])) return i[l] = p, t;
    }if (u = +t._x.call(null, d.data), f = +t._y.call(null, d.data), n === u && e === f) return p.next = d, i ? i[l] = p : t._root = p, t;do {
      i = i ? i[l] = new Array(4) : t._root = new Array(4), (c = n >= (o = (v + y) / 2)) ? v = o : y = o, (s = e >= (a = (g + _) / 2)) ? g = a : _ = a;
    } while ((l = s << 1 | c) == (h = (f >= a) << 1 | u >= o));return i[h] = d, i[l] = p, t;
  }function Oe(t, n, e, r, i) {
    this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i;
  }function Ye(t) {
    return t[0];
  }function Be(t) {
    return t[1];
  }function Fe(t, n, e) {
    var r = new Ie(null == n ? Ye : n, null == e ? Be : e, NaN, NaN, NaN, NaN);return null == t ? r : r.addAll(t);
  }function Ie(t, n, e, r, i, o) {
    this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0;
  }function je(t) {
    for (var n = { data: t.data }, e = n; t = t.next;) {
      e = e.next = { data: t.data };
    }return n;
  }function He(t) {
    return t.x + t.vx;
  }function Xe(t) {
    return t.y + t.vy;
  }function Ge(t) {
    return t.index;
  }function Ve(t, n) {
    var e = t.get(n);if (!e) throw new Error("missing: " + n);return e;
  }function $e(t) {
    return t.x;
  }function We(t) {
    return t.y;
  }function Ze(t, n) {
    if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;var e,
        r = t.slice(0, e);return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
  }function Qe(t) {
    return (t = Ze(Math.abs(t))) ? t[1] : NaN;
  }function Je(t, n) {
    var e = Ze(t, n);if (!e) return t + "";var r = e[0],
        i = e[1];return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
  }function Ke(t) {
    return new tr(t);
  }function tr(t) {
    if (!(n = ad.exec(t))) throw new Error("invalid format: " + t);var n,
        e = n[1] || " ",
        r = n[2] || ">",
        i = n[3] || "-",
        o = n[4] || "",
        a = !!n[5],
        u = n[6] && +n[6],
        f = !!n[7],
        c = n[8] && +n[8].slice(1),
        s = n[9] || "";"n" === s ? (f = !0, s = "g") : od[s] || (s = ""), (a || "0" === e && "=" === r) && (a = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = o, this.zero = a, this.width = u, this.comma = f, this.precision = c, this.type = s;
  }function nr(t) {
    return t;
  }function er(t) {
    function n(t) {
      function n(t) {
        var n,
            r,
            a,
            s = g,
            m = y;if ("c" === v) m = _(t) + m, t = "";else {
          var x = (t = +t) < 0;if (t = _(Math.abs(t), p), x && 0 == +t && (x = !1), s = (x ? "(" === c ? c : "-" : "-" === c || "(" === c ? "" : c) + s, m = ("s" === v ? fd[8 + ed / 3] : "") + m + (x && "(" === c ? ")" : ""), b) for (n = -1, r = t.length; ++n < r;) {
            if (48 > (a = t.charCodeAt(n)) || a > 57) {
              m = (46 === a ? i + t.slice(n + 1) : t.slice(n)) + m, t = t.slice(0, n);break;
            }
          }
        }d && !l && (t = e(t, 1 / 0));var w = s.length + t.length + m.length,
            M = w < h ? new Array(h - w + 1).join(u) : "";switch (d && l && (t = e(M + t, M.length ? h - m.length : 1 / 0), M = ""), f) {case "<":
            t = s + t + m + M;break;case "=":
            t = s + M + t + m;break;case "^":
            t = M.slice(0, w = M.length >> 1) + s + t + m + M.slice(w);break;default:
            t = M + s + t + m;}return o(t);
      }var u = (t = Ke(t)).fill,
          f = t.align,
          c = t.sign,
          s = t.symbol,
          l = t.zero,
          h = t.width,
          d = t.comma,
          p = t.precision,
          v = t.type,
          g = "$" === s ? r[0] : "#" === s && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "",
          y = "$" === s ? r[1] : /[%p]/.test(v) ? a : "",
          _ = od[v],
          b = !v || /[defgprs%]/.test(v);return p = null == p ? v ? 6 : 12 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, p)) : Math.max(0, Math.min(20, p)), n.toString = function () {
        return t + "";
      }, n;
    }var e = t.grouping && t.thousands ? function (t, n) {
      return function (e, r) {
        for (var i = e.length, o = [], a = 0, u = t[0], f = 0; i > 0 && u > 0 && (f + u + 1 > r && (u = Math.max(1, r - f)), o.push(e.substring(i -= u, i + u)), !((f += u + 1) > r));) {
          u = t[a = (a + 1) % t.length];
        }return o.reverse().join(n);
      };
    }(t.grouping, t.thousands) : nr,
        r = t.currency,
        i = t.decimal,
        o = t.numerals ? function (t) {
      return function (n) {
        return n.replace(/[0-9]/g, function (n) {
          return t[+n];
        });
      };
    }(t.numerals) : nr,
        a = t.percent || "%";return { format: n, formatPrefix: function formatPrefix(t, e) {
        var r = n((t = Ke(t), t.type = "f", t)),
            i = 3 * Math.max(-8, Math.min(8, Math.floor(Qe(e) / 3))),
            o = Math.pow(10, -i),
            a = fd[8 + i / 3];return function (t) {
          return r(o * t) + a;
        };
      } };
  }function rr(n) {
    return ud = er(n), t.format = ud.format, t.formatPrefix = ud.formatPrefix, ud;
  }function ir(t) {
    return Math.max(0, -Qe(Math.abs(t)));
  }function or(t, n) {
    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Qe(n) / 3))) - Qe(Math.abs(t)));
  }function ar(t, n) {
    return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Qe(n) - Qe(t)) + 1;
  }function ur() {
    return new fr();
  }function fr() {
    this.reset();
  }function cr(t, n, e) {
    var r = t.s = n + e,
        i = r - n,
        o = r - i;t.t = n - o + (e - i);
  }function sr(t) {
    return t > 1 ? 0 : t < -1 ? jd : Math.acos(t);
  }function lr(t) {
    return t > 1 ? Hd : t < -1 ? -Hd : Math.asin(t);
  }function hr(t) {
    return (t = rp(t / 2)) * t;
  }function dr() {}function pr(t, n) {
    t && fp.hasOwnProperty(t.type) && fp[t.type](t, n);
  }function vr(t, n, e) {
    var r,
        i = -1,
        o = t.length - e;for (n.lineStart(); ++i < o;) {
      r = t[i], n.point(r[0], r[1], r[2]);
    }n.lineEnd();
  }function gr(t, n) {
    var e = -1,
        r = t.length;for (n.polygonStart(); ++e < r;) {
      vr(t[e], n, 1);
    }n.polygonEnd();
  }function yr(t, n) {
    t && up.hasOwnProperty(t.type) ? up[t.type](t, n) : pr(t, n);
  }function _r() {
    lp.point = mr;
  }function br() {
    xr(cd, sd);
  }function mr(t, n) {
    lp.point = xr, cd = t, sd = n, ld = t *= $d, hd = Jd(n = (n *= $d) / 2 + Xd), dd = rp(n);
  }function xr(t, n) {
    n = (n *= $d) / 2 + Xd;var e = (t *= $d) - ld,
        r = e >= 0 ? 1 : -1,
        i = r * e,
        o = Jd(n),
        a = rp(n),
        u = dd * a,
        f = hd * o + u * Jd(i),
        c = u * r * rp(i);cp.add(Qd(c, f)), ld = t, hd = o, dd = a;
  }function wr(t) {
    return [Qd(t[1], t[0]), lr(t[2])];
  }function Mr(t) {
    var n = t[0],
        e = t[1],
        r = Jd(e);return [r * Jd(n), r * rp(n), rp(e)];
  }function Ar(t, n) {
    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
  }function Tr(t, n) {
    return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
  }function Nr(t, n) {
    t[0] += n[0], t[1] += n[1], t[2] += n[2];
  }function Sr(t, n) {
    return [t[0] * n, t[1] * n, t[2] * n];
  }function Er(t) {
    var n = op(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);t[0] /= n, t[1] /= n, t[2] /= n;
  }function kr(t, n) {
    wd.push(Md = [pd = t, gd = t]), n < vd && (vd = n), n > yd && (yd = n);
  }function Cr(t, n) {
    var e = Mr([t * $d, n * $d]);if (xd) {
      var r = Tr(xd, e),
          i = Tr([r[1], -r[0], 0], r);Er(i), i = wr(i);var o,
          a = t - _d,
          u = a > 0 ? 1 : -1,
          f = i[0] * Vd * u,
          c = Wd(a) > 180;c ^ (u * _d < f && f < u * t) ? (o = i[1] * Vd) > yd && (yd = o) : (f = (f + 360) % 360 - 180, c ^ (u * _d < f && f < u * t) ? (o = -i[1] * Vd) < vd && (vd = o) : (n < vd && (vd = n), n > yd && (yd = n))), c ? t < _d ? Ur(pd, t) > Ur(pd, gd) && (gd = t) : Ur(t, gd) > Ur(pd, gd) && (pd = t) : gd >= pd ? (t < pd && (pd = t), t > gd && (gd = t)) : t > _d ? Ur(pd, t) > Ur(pd, gd) && (gd = t) : Ur(t, gd) > Ur(pd, gd) && (pd = t);
    } else wd.push(Md = [pd = t, gd = t]);n < vd && (vd = n), n > yd && (yd = n), xd = e, _d = t;
  }function Pr() {
    dp.point = Cr;
  }function zr() {
    Md[0] = pd, Md[1] = gd, dp.point = kr, xd = null;
  }function Rr(t, n) {
    if (xd) {
      var e = t - _d;hp.add(Wd(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
    } else bd = t, md = n;lp.point(t, n), Cr(t, n);
  }function Lr() {
    lp.lineStart();
  }function Dr() {
    Rr(bd, md), lp.lineEnd(), Wd(hp) > Fd && (pd = -(gd = 180)), Md[0] = pd, Md[1] = gd, xd = null;
  }function Ur(t, n) {
    return (n -= t) < 0 ? n + 360 : n;
  }function qr(t, n) {
    return t[0] - n[0];
  }function Or(t, n) {
    return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
  }function Yr(t, n) {
    t *= $d;var e = Jd(n *= $d);Br(e * Jd(t), e * rp(t), rp(n));
  }function Br(t, n, e) {
    Nd += (t - Nd) / ++Ad, Sd += (n - Sd) / Ad, Ed += (e - Ed) / Ad;
  }function Fr() {
    pp.point = Ir;
  }function Ir(t, n) {
    t *= $d;var e = Jd(n *= $d);qd = e * Jd(t), Od = e * rp(t), Yd = rp(n), pp.point = jr, Br(qd, Od, Yd);
  }function jr(t, n) {
    t *= $d;var e = Jd(n *= $d),
        r = e * Jd(t),
        i = e * rp(t),
        o = rp(n),
        a = Qd(op((a = Od * o - Yd * i) * a + (a = Yd * r - qd * o) * a + (a = qd * i - Od * r) * a), qd * r + Od * i + Yd * o);Td += a, kd += a * (qd + (qd = r)), Cd += a * (Od + (Od = i)), Pd += a * (Yd + (Yd = o)), Br(qd, Od, Yd);
  }function Hr() {
    pp.point = Yr;
  }function Xr() {
    pp.point = Vr;
  }function Gr() {
    $r(Dd, Ud), pp.point = Yr;
  }function Vr(t, n) {
    Dd = t, Ud = n, t *= $d, n *= $d, pp.point = $r;var e = Jd(n);qd = e * Jd(t), Od = e * rp(t), Yd = rp(n), Br(qd, Od, Yd);
  }function $r(t, n) {
    t *= $d;var e = Jd(n *= $d),
        r = e * Jd(t),
        i = e * rp(t),
        o = rp(n),
        a = Od * o - Yd * i,
        u = Yd * r - qd * o,
        f = qd * i - Od * r,
        c = op(a * a + u * u + f * f),
        s = lr(c),
        l = c && -s / c;zd += l * a, Rd += l * u, Ld += l * f, Td += s, kd += s * (qd + (qd = r)), Cd += s * (Od + (Od = i)), Pd += s * (Yd + (Yd = o)), Br(qd, Od, Yd);
  }function Wr(t) {
    return function () {
      return t;
    };
  }function Zr(t, n) {
    function e(e, r) {
      return e = t(e, r), n(e[0], e[1]);
    }return t.invert && n.invert && (e.invert = function (e, r) {
      return (e = n.invert(e, r)) && t.invert(e[0], e[1]);
    }), e;
  }function Qr(t, n) {
    return [t > jd ? t - Gd : t < -jd ? t + Gd : t, n];
  }function Jr(t, n, e) {
    return (t %= Gd) ? n || e ? Zr(ti(t), ni(n, e)) : ti(t) : n || e ? ni(n, e) : Qr;
  }function Kr(t) {
    return function (n, e) {
      return n += t, [n > jd ? n - Gd : n < -jd ? n + Gd : n, e];
    };
  }function ti(t) {
    var n = Kr(t);return n.invert = Kr(-t), n;
  }function ni(t, n) {
    function e(t, n) {
      var e = Jd(n),
          u = Jd(t) * e,
          f = rp(t) * e,
          c = rp(n),
          s = c * r + u * i;return [Qd(f * o - s * a, u * r - c * i), lr(s * o + f * a)];
    }var r = Jd(t),
        i = rp(t),
        o = Jd(n),
        a = rp(n);return e.invert = function (t, n) {
      var e = Jd(n),
          u = Jd(t) * e,
          f = rp(t) * e,
          c = rp(n),
          s = c * o - f * a;return [Qd(f * o + c * a, u * r + s * i), lr(s * r - u * i)];
    }, e;
  }function ei(t) {
    function n(n) {
      return n = t(n[0] * $d, n[1] * $d), n[0] *= Vd, n[1] *= Vd, n;
    }return t = Jr(t[0] * $d, t[1] * $d, t.length > 2 ? t[2] * $d : 0), n.invert = function (n) {
      return n = t.invert(n[0] * $d, n[1] * $d), n[0] *= Vd, n[1] *= Vd, n;
    }, n;
  }function ri(t, n, e, r, i, o) {
    if (e) {
      var a = Jd(n),
          u = rp(n),
          f = r * e;null == i ? (i = n + r * Gd, o = n - f / 2) : (i = ii(a, i), o = ii(a, o), (r > 0 ? i < o : i > o) && (i += r * Gd));for (var c, s = i; r > 0 ? s > o : s < o; s -= f) {
        c = wr([a, -u * Jd(s), -u * rp(s)]), t.point(c[0], c[1]);
      }
    }
  }function ii(t, n) {
    (n = Mr(n))[0] -= t, Er(n);var e = sr(-n[1]);return ((-n[2] < 0 ? -e : e) + Gd - Fd) % Gd;
  }function oi() {
    var t,
        n = [];return { point: function point(n, e) {
        t.push([n, e]);
      }, lineStart: function lineStart() {
        n.push(t = []);
      }, lineEnd: dr, rejoin: function rejoin() {
        n.length > 1 && n.push(n.pop().concat(n.shift()));
      }, result: function result() {
        var e = n;return n = [], t = null, e;
      } };
  }function ai(t, n) {
    return Wd(t[0] - n[0]) < Fd && Wd(t[1] - n[1]) < Fd;
  }function ui(t, n, e, r) {
    this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
  }function fi(t, n, e, r, i) {
    var o,
        a,
        u = [],
        f = [];if (t.forEach(function (t) {
      if (!((n = t.length - 1) <= 0)) {
        var n,
            e,
            r = t[0],
            a = t[n];if (ai(r, a)) {
          for (i.lineStart(), o = 0; o < n; ++o) {
            i.point((r = t[o])[0], r[1]);
          }i.lineEnd();
        } else u.push(e = new ui(r, t, null, !0)), f.push(e.o = new ui(r, null, e, !1)), u.push(e = new ui(a, t, null, !1)), f.push(e.o = new ui(a, null, e, !0));
      }
    }), u.length) {
      for (f.sort(n), ci(u), ci(f), o = 0, a = f.length; o < a; ++o) {
        f[o].e = e = !e;
      }for (var c, s, l = u[0];;) {
        for (var h = l, d = !0; h.v;) {
          if ((h = h.n) === l) return;
        }c = h.z, i.lineStart();do {
          if (h.v = h.o.v = !0, h.e) {
            if (d) for (o = 0, a = c.length; o < a; ++o) {
              i.point((s = c[o])[0], s[1]);
            } else r(h.x, h.n.x, 1, i);h = h.n;
          } else {
            if (d) for (c = h.p.z, o = c.length - 1; o >= 0; --o) {
              i.point((s = c[o])[0], s[1]);
            } else r(h.x, h.p.x, -1, i);h = h.p;
          }c = (h = h.o).z, d = !d;
        } while (!h.v);i.lineEnd();
      }
    }
  }function ci(t) {
    if (n = t.length) {
      for (var n, e, r = 0, i = t[0]; ++r < n;) {
        i.n = e = t[r], e.p = i, i = e;
      }i.n = e = t[0], e.p = i;
    }
  }function si(t, n) {
    var e = n[0],
        r = n[1],
        i = rp(r),
        o = [rp(e), -Jd(e), 0],
        a = 0,
        u = 0;Np.reset(), 1 === i ? r = Hd + Fd : -1 === i && (r = -Hd - Fd);for (var f = 0, c = t.length; f < c; ++f) {
      if (l = (s = t[f]).length) for (var s, l, h = s[l - 1], d = h[0], p = h[1] / 2 + Xd, v = rp(p), g = Jd(p), y = 0; y < l; ++y, d = b, v = x, g = w, h = _) {
        var _ = s[y],
            b = _[0],
            m = _[1] / 2 + Xd,
            x = rp(m),
            w = Jd(m),
            M = b - d,
            A = M >= 0 ? 1 : -1,
            T = A * M,
            N = T > jd,
            S = v * x;if (Np.add(Qd(S * A * rp(T), g * w + S * Jd(T))), a += N ? M + A * Gd : M, N ^ d >= e ^ b >= e) {
          var E = Tr(Mr(h), Mr(_));Er(E);var k = Tr(o, E);Er(k);var C = (N ^ M >= 0 ? -1 : 1) * lr(k[2]);(r > C || r === C && (E[0] || E[1])) && (u += N ^ M >= 0 ? 1 : -1);
        }
      }
    }return (a < -Fd || a < Fd && Np < -Fd) ^ 1 & u;
  }function li(t, n, e, r) {
    return function (i) {
      function o(n, e) {
        t(n, e) && i.point(n, e);
      }function a(t, n) {
        v.point(t, n);
      }function u() {
        m.point = a, v.lineStart();
      }function f() {
        m.point = o, v.lineEnd();
      }function c(t, n) {
        p.push([t, n]), _.point(t, n);
      }function s() {
        _.lineStart(), p = [];
      }function l() {
        c(p[0][0], p[0][1]), _.lineEnd();var t,
            n,
            e,
            r,
            o = _.clean(),
            a = g.result(),
            u = a.length;if (p.pop(), h.push(p), p = null, u) if (1 & o) {
          if (e = a[0], (n = e.length - 1) > 0) {
            for (b || (i.polygonStart(), b = !0), i.lineStart(), t = 0; t < n; ++t) {
              i.point((r = e[t])[0], r[1]);
            }i.lineEnd();
          }
        } else u > 1 && 2 & o && a.push(a.pop().concat(a.shift())), d.push(a.filter(hi));
      }var h,
          d,
          p,
          v = n(i),
          g = oi(),
          _ = n(g),
          b = !1,
          m = { point: o, lineStart: u, lineEnd: f, polygonStart: function polygonStart() {
          m.point = c, m.lineStart = s, m.lineEnd = l, d = [], h = [];
        }, polygonEnd: function polygonEnd() {
          m.point = o, m.lineStart = u, m.lineEnd = f, d = y(d);var t = si(h, r);d.length ? (b || (i.polygonStart(), b = !0), fi(d, di, t, e, i)) : t && (b || (i.polygonStart(), b = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), b && (i.polygonEnd(), b = !1), d = h = null;
        }, sphere: function sphere() {
          i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd();
        } };return m;
    };
  }function hi(t) {
    return t.length > 1;
  }function di(t, n) {
    return ((t = t.x)[0] < 0 ? t[1] - Hd - Fd : Hd - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Hd - Fd : Hd - n[1]);
  }function pi(t) {
    function n(t, n) {
      return Jd(t) * Jd(n) > i;
    }function e(t, n, e) {
      var r = [1, 0, 0],
          o = Tr(Mr(t), Mr(n)),
          a = Ar(o, o),
          u = o[0],
          f = a - u * u;if (!f) return !e && t;var c = i * a / f,
          s = -i * u / f,
          l = Tr(r, o),
          h = Sr(r, c);Nr(h, Sr(o, s));var d = l,
          p = Ar(h, d),
          v = Ar(d, d),
          g = p * p - v * (Ar(h, h) - 1);if (!(g < 0)) {
        var y = op(g),
            _ = Sr(d, (-p - y) / v);if (Nr(_, h), _ = wr(_), !e) return _;var b,
            m = t[0],
            x = n[0],
            w = t[1],
            M = n[1];x < m && (b = m, m = x, x = b);var A = x - m,
            T = Wd(A - jd) < Fd;if (!T && M < w && (b = w, w = M, M = b), T || A < Fd ? T ? w + M > 0 ^ _[1] < (Wd(_[0] - m) < Fd ? w : M) : w <= _[1] && _[1] <= M : A > jd ^ (m <= _[0] && _[0] <= x)) {
          var N = Sr(d, (-p + y) / v);return Nr(N, h), [_, wr(N)];
        }
      }
    }function r(n, e) {
      var r = a ? t : jd - t,
          i = 0;return n < -r ? i |= 1 : n > r && (i |= 2), e < -r ? i |= 4 : e > r && (i |= 8), i;
    }var i = Jd(t),
        o = 6 * $d,
        a = i > 0,
        u = Wd(i) > Fd;return li(n, function (t) {
      var i, o, f, c, s;return { lineStart: function lineStart() {
          c = f = !1, s = 1;
        }, point: function point(l, h) {
          var d,
              p = [l, h],
              v = n(l, h),
              g = a ? v ? 0 : r(l, h) : v ? r(l + (l < 0 ? jd : -jd), h) : 0;if (!i && (c = f = v) && t.lineStart(), v !== f && (!(d = e(i, p)) || ai(i, d) || ai(p, d)) && (p[0] += Fd, p[1] += Fd, v = n(p[0], p[1])), v !== f) s = 0, v ? (t.lineStart(), d = e(p, i), t.point(d[0], d[1])) : (d = e(i, p), t.point(d[0], d[1]), t.lineEnd()), i = d;else if (u && i && a ^ v) {
            var y;g & o || !(y = e(p, i, !0)) || (s = 0, a ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd()) : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1])));
          }!v || i && ai(i, p) || t.point(p[0], p[1]), i = p, f = v, o = g;
        }, lineEnd: function lineEnd() {
          f && t.lineEnd(), i = null;
        }, clean: function clean() {
          return s | (c && f) << 1;
        } };
    }, function (n, e, r, i) {
      ri(i, t, o, r, n, e);
    }, a ? [0, -t] : [-jd, t - jd]);
  }function vi(t, n, e, r) {
    function i(i, o) {
      return t <= i && i <= e && n <= o && o <= r;
    }function o(i, o, u, c) {
      var s = 0,
          l = 0;if (null == i || (s = a(i, u)) !== (l = a(o, u)) || f(i, o) < 0 ^ u > 0) do {
        c.point(0 === s || 3 === s ? t : e, s > 1 ? r : n);
      } while ((s = (s + u + 4) % 4) !== l);else c.point(o[0], o[1]);
    }function a(r, i) {
      return Wd(r[0] - t) < Fd ? i > 0 ? 0 : 3 : Wd(r[0] - e) < Fd ? i > 0 ? 2 : 1 : Wd(r[1] - n) < Fd ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2;
    }function u(t, n) {
      return f(t.x, n.x);
    }function f(t, n) {
      var e = a(t, 1),
          r = a(n, 1);return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0];
    }return function (a) {
      function f(t, n) {
        i(t, n) && w.point(t, n);
      }function c(o, a) {
        var u = i(o, a);if (l && h.push([o, a]), m) d = o, p = a, v = u, m = !1, u && (w.lineStart(), w.point(o, a));else if (u && b) w.point(o, a);else {
          var f = [g = Math.max(kp, Math.min(Ep, g)), _ = Math.max(kp, Math.min(Ep, _))],
              c = [o = Math.max(kp, Math.min(Ep, o)), a = Math.max(kp, Math.min(Ep, a))];!function (t, n, e, r, i, o) {
            var a,
                u = t[0],
                f = t[1],
                c = 0,
                s = 1,
                l = n[0] - u,
                h = n[1] - f;if (a = e - u, l || !(a > 0)) {
              if (a /= l, l < 0) {
                if (a < c) return;a < s && (s = a);
              } else if (l > 0) {
                if (a > s) return;a > c && (c = a);
              }if (a = i - u, l || !(a < 0)) {
                if (a /= l, l < 0) {
                  if (a > s) return;a > c && (c = a);
                } else if (l > 0) {
                  if (a < c) return;a < s && (s = a);
                }if (a = r - f, h || !(a > 0)) {
                  if (a /= h, h < 0) {
                    if (a < c) return;a < s && (s = a);
                  } else if (h > 0) {
                    if (a > s) return;a > c && (c = a);
                  }if (a = o - f, h || !(a < 0)) {
                    if (a /= h, h < 0) {
                      if (a > s) return;a > c && (c = a);
                    } else if (h > 0) {
                      if (a < c) return;a < s && (s = a);
                    }return c > 0 && (t[0] = u + c * l, t[1] = f + c * h), s < 1 && (n[0] = u + s * l, n[1] = f + s * h), !0;
                  }
                }
              }
            }
          }(f, c, t, n, e, r) ? u && (w.lineStart(), w.point(o, a), x = !1) : (b || (w.lineStart(), w.point(f[0], f[1])), w.point(c[0], c[1]), u || w.lineEnd(), x = !1);
        }g = o, _ = a, b = u;
      }var s,
          l,
          h,
          d,
          p,
          v,
          g,
          _,
          b,
          m,
          x,
          w = a,
          M = oi(),
          A = { point: f, lineStart: function lineStart() {
          A.point = c, l && l.push(h = []), m = !0, b = !1, g = _ = NaN;
        }, lineEnd: function lineEnd() {
          s && (c(d, p), v && b && M.rejoin(), s.push(M.result())), A.point = f, b && w.lineEnd();
        }, polygonStart: function polygonStart() {
          w = M, s = [], l = [], x = !0;
        }, polygonEnd: function polygonEnd() {
          var n = function () {
            for (var n = 0, e = 0, i = l.length; e < i; ++e) {
              for (var o, a, u = l[e], f = 1, c = u.length, s = u[0], h = s[0], d = s[1]; f < c; ++f) {
                o = h, a = d, h = (s = u[f])[0], d = s[1], a <= r ? d > r && (h - o) * (r - a) > (d - a) * (t - o) && ++n : d <= r && (h - o) * (r - a) < (d - a) * (t - o) && --n;
              }
            }return n;
          }(),
              e = x && n,
              i = (s = y(s)).length;(e || i) && (a.polygonStart(), e && (a.lineStart(), o(null, null, 1, a), a.lineEnd()), i && fi(s, u, n, o, a), a.polygonEnd()), w = a, s = l = h = null;
        } };return A;
    };
  }function gi() {
    Pp.point = Pp.lineEnd = dr;
  }function yi(t, n) {
    vp = t *= $d, gp = rp(n *= $d), yp = Jd(n), Pp.point = _i;
  }function _i(t, n) {
    t *= $d;var e = rp(n *= $d),
        r = Jd(n),
        i = Wd(t - vp),
        o = Jd(i),
        a = r * rp(i),
        u = yp * e - gp * r * o,
        f = gp * e + yp * r * o;Cp.add(Qd(op(a * a + u * u), f)), vp = t, gp = e, yp = r;
  }function bi(t) {
    return Cp.reset(), yr(t, Pp), +Cp;
  }function mi(t, n) {
    return zp[0] = t, zp[1] = n, bi(Rp);
  }function xi(t, n) {
    return !(!t || !Dp.hasOwnProperty(t.type)) && Dp[t.type](t, n);
  }function wi(t, n) {
    return 0 === mi(t, n);
  }function Mi(t, n) {
    var e = mi(t[0], t[1]);return mi(t[0], n) + mi(n, t[1]) <= e + Fd;
  }function Ai(t, n) {
    return !!si(t.map(Ti), Ni(n));
  }function Ti(t) {
    return (t = t.map(Ni)).pop(), t;
  }function Ni(t) {
    return [t[0] * $d, t[1] * $d];
  }function Si(t, n, e) {
    var r = s(t, n - Fd, e).concat(n);return function (t) {
      return r.map(function (n) {
        return [t, n];
      });
    };
  }function Ei(t, n, e) {
    var r = s(t, n - Fd, e).concat(n);return function (t) {
      return r.map(function (n) {
        return [n, t];
      });
    };
  }function ki() {
    function t() {
      return { type: "MultiLineString", coordinates: n() };
    }function n() {
      return s(Kd(o / y) * y, i, y).map(d).concat(s(Kd(c / _) * _, f, _).map(p)).concat(s(Kd(r / v) * v, e, v).filter(function (t) {
        return Wd(t % y) > Fd;
      }).map(l)).concat(s(Kd(u / g) * g, a, g).filter(function (t) {
        return Wd(t % _) > Fd;
      }).map(h));
    }var e,
        r,
        i,
        o,
        a,
        u,
        f,
        c,
        l,
        h,
        d,
        p,
        v = 10,
        g = v,
        y = 90,
        _ = 360,
        b = 2.5;return t.lines = function () {
      return n().map(function (t) {
        return { type: "LineString", coordinates: t };
      });
    }, t.outline = function () {
      return { type: "Polygon", coordinates: [d(o).concat(p(f).slice(1), d(i).reverse().slice(1), p(c).reverse().slice(1))] };
    }, t.extent = function (n) {
      return arguments.length ? t.extentMajor(n).extentMinor(n) : t.extentMinor();
    }, t.extentMajor = function (n) {
      return arguments.length ? (o = +n[0][0], i = +n[1][0], c = +n[0][1], f = +n[1][1], o > i && (n = o, o = i, i = n), c > f && (n = c, c = f, f = n), t.precision(b)) : [[o, c], [i, f]];
    }, t.extentMinor = function (n) {
      return arguments.length ? (r = +n[0][0], e = +n[1][0], u = +n[0][1], a = +n[1][1], r > e && (n = r, r = e, e = n), u > a && (n = u, u = a, a = n), t.precision(b)) : [[r, u], [e, a]];
    }, t.step = function (n) {
      return arguments.length ? t.stepMajor(n).stepMinor(n) : t.stepMinor();
    }, t.stepMajor = function (n) {
      return arguments.length ? (y = +n[0], _ = +n[1], t) : [y, _];
    }, t.stepMinor = function (n) {
      return arguments.length ? (v = +n[0], g = +n[1], t) : [v, g];
    }, t.precision = function (n) {
      return arguments.length ? (b = +n, l = Si(u, a, 90), h = Ei(r, e, b), d = Si(c, f, 90), p = Ei(o, i, b), t) : b;
    }, t.extentMajor([[-180, -90 + Fd], [180, 90 - Fd]]).extentMinor([[-180, -80 - Fd], [180, 80 + Fd]]);
  }function Ci(t) {
    return t;
  }function Pi() {
    Op.point = zi;
  }function zi(t, n) {
    Op.point = Ri, _p = mp = t, bp = xp = n;
  }function Ri(t, n) {
    qp.add(xp * t - mp * n), mp = t, xp = n;
  }function Li() {
    Ri(_p, bp);
  }function Di(t, n) {
    Hp += t, Xp += n, ++Gp;
  }function Ui() {
    Kp.point = qi;
  }function qi(t, n) {
    Kp.point = Oi, Di(Ap = t, Tp = n);
  }function Oi(t, n) {
    var e = t - Ap,
        r = n - Tp,
        i = op(e * e + r * r);Vp += i * (Ap + t) / 2, $p += i * (Tp + n) / 2, Wp += i, Di(Ap = t, Tp = n);
  }function Yi() {
    Kp.point = Di;
  }function Bi() {
    Kp.point = Ii;
  }function Fi() {
    ji(wp, Mp);
  }function Ii(t, n) {
    Kp.point = ji, Di(wp = Ap = t, Mp = Tp = n);
  }function ji(t, n) {
    var e = t - Ap,
        r = n - Tp,
        i = op(e * e + r * r);Vp += i * (Ap + t) / 2, $p += i * (Tp + n) / 2, Wp += i, Zp += (i = Tp * t - Ap * n) * (Ap + t), Qp += i * (Tp + n), Jp += 3 * i, Di(Ap = t, Tp = n);
  }function Hi(t) {
    this._context = t;
  }function Xi(t, n) {
    av.point = Gi, nv = rv = t, ev = iv = n;
  }function Gi(t, n) {
    rv -= t, iv -= n, ov.add(op(rv * rv + iv * iv)), rv = t, iv = n;
  }function Vi() {
    this._string = [];
  }function $i(t) {
    return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z";
  }function Wi(t) {
    return function (n) {
      var e = new Zi();for (var r in t) {
        e[r] = t[r];
      }return e.stream = n, e;
    };
  }function Zi() {}function Qi(t, n, e) {
    var r = t.clipExtent && t.clipExtent();return t.scale(150).translate([0, 0]), null != r && t.clipExtent(null), yr(e, t.stream(jp)), n(jp.result()), null != r && t.clipExtent(r), t;
  }function Ji(t, n, e) {
    return Qi(t, function (e) {
      var r = n[1][0] - n[0][0],
          i = n[1][1] - n[0][1],
          o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
          a = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2,
          u = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;t.scale(150 * o).translate([a, u]);
    }, e);
  }function Ki(t, n, e) {
    return Ji(t, [[0, 0], n], e);
  }function to(t, n, e) {
    return Qi(t, function (e) {
      var r = +n,
          i = r / (e[1][0] - e[0][0]),
          o = (r - i * (e[1][0] + e[0][0])) / 2,
          a = -i * e[0][1];t.scale(150 * i).translate([o, a]);
    }, e);
  }function no(t, n, e) {
    return Qi(t, function (e) {
      var r = +n,
          i = r / (e[1][1] - e[0][1]),
          o = -i * e[0][0],
          a = (r - i * (e[1][1] + e[0][1])) / 2;t.scale(150 * i).translate([o, a]);
    }, e);
  }function eo(t, n) {
    return +n ? function (t, n) {
      function e(r, i, o, a, u, f, c, s, l, h, d, p, v, g) {
        var y = c - r,
            _ = s - i,
            b = y * y + _ * _;if (b > 4 * n && v--) {
          var m = a + h,
              x = u + d,
              w = f + p,
              M = op(m * m + x * x + w * w),
              A = lr(w /= M),
              T = Wd(Wd(w) - 1) < Fd || Wd(o - l) < Fd ? (o + l) / 2 : Qd(x, m),
              N = t(T, A),
              S = N[0],
              E = N[1],
              k = S - r,
              C = E - i,
              P = _ * k - y * C;(P * P / b > n || Wd((y * k + _ * C) / b - .5) > .3 || a * h + u * d + f * p < fv) && (e(r, i, o, a, u, f, S, E, T, m /= M, x /= M, w, v, g), g.point(S, E), e(S, E, T, m, x, w, c, s, l, h, d, p, v, g));
        }
      }return function (n) {
        function r(e, r) {
          e = t(e, r), n.point(e[0], e[1]);
        }function i() {
          y = NaN, w.point = o, n.lineStart();
        }function o(r, i) {
          var o = Mr([r, i]),
              a = t(r, i);e(y, _, g, b, m, x, y = a[0], _ = a[1], g = r, b = o[0], m = o[1], x = o[2], uv, n), n.point(y, _);
        }function a() {
          w.point = r, n.lineEnd();
        }function u() {
          i(), w.point = f, w.lineEnd = c;
        }function f(t, n) {
          o(s = t, n), l = y, h = _, d = b, p = m, v = x, w.point = o;
        }function c() {
          e(y, _, g, b, m, x, l, h, s, d, p, v, uv, n), w.lineEnd = a, a();
        }var s,
            l,
            h,
            d,
            p,
            v,
            g,
            y,
            _,
            b,
            m,
            x,
            w = { point: r, lineStart: i, lineEnd: a, polygonStart: function polygonStart() {
            n.polygonStart(), w.lineStart = u;
          }, polygonEnd: function polygonEnd() {
            n.polygonEnd(), w.lineStart = i;
          } };return w;
      };
    }(t, n) : function (t) {
      return Wi({ point: function point(n, e) {
          n = t(n, e), this.stream.point(n[0], n[1]);
        } });
    }(t);
  }function ro(t, n, e, r) {
    function i(t, r) {
      return [u * t - f * r + n, e - f * t - u * r];
    }var o = Jd(r),
        a = rp(r),
        u = o * t,
        f = a * t,
        c = o / t,
        s = a / t,
        l = (a * e - o * n) / t,
        h = (a * n + o * e) / t;return i.invert = function (t, n) {
      return [c * t - s * n + l, h - s * t - c * n];
    }, i;
  }function io(t) {
    return oo(function () {
      return t;
    })();
  }function oo(t) {
    function n(t) {
      return l(t[0] * $d, t[1] * $d);
    }function e() {
      var t = ro(p, 0, 0, w).apply(null, i(y, _)),
          n = (w ? ro : function (t, n, e) {
        function r(r, i) {
          return [n + t * r, e - t * i];
        }return r.invert = function (r, i) {
          return [(r - n) / t, (e - i) / t];
        }, r;
      })(p, v - t[0], g - t[1], w);return o = Jr(b, m, x), s = Zr(i, n), l = Zr(o, s), c = eo(s, S), r();
    }function r() {
      return h = d = null, n;
    }var i,
        o,
        a,
        u,
        f,
        c,
        s,
        l,
        h,
        d,
        p = 150,
        v = 480,
        g = 250,
        y = 0,
        _ = 0,
        b = 0,
        m = 0,
        x = 0,
        w = 0,
        M = null,
        A = Sp,
        T = null,
        N = Ci,
        S = .5;return n.stream = function (t) {
      return h && d === t ? h : h = cv(function (t) {
        return Wi({ point: function point(n, e) {
            var r = t(n, e);return this.stream.point(r[0], r[1]);
          } });
      }(o)(A(c(N(d = t)))));
    }, n.preclip = function (t) {
      return arguments.length ? (A = t, M = void 0, r()) : A;
    }, n.postclip = function (t) {
      return arguments.length ? (N = t, T = a = u = f = null, r()) : N;
    }, n.clipAngle = function (t) {
      return arguments.length ? (A = +t ? pi(M = t * $d) : (M = null, Sp), r()) : M * Vd;
    }, n.clipExtent = function (t) {
      return arguments.length ? (N = null == t ? (T = a = u = f = null, Ci) : vi(T = +t[0][0], a = +t[0][1], u = +t[1][0], f = +t[1][1]), r()) : null == T ? null : [[T, a], [u, f]];
    }, n.scale = function (t) {
      return arguments.length ? (p = +t, e()) : p;
    }, n.translate = function (t) {
      return arguments.length ? (v = +t[0], g = +t[1], e()) : [v, g];
    }, n.center = function (t) {
      return arguments.length ? (y = t[0] % 360 * $d, _ = t[1] % 360 * $d, e()) : [y * Vd, _ * Vd];
    }, n.rotate = function (t) {
      return arguments.length ? (b = t[0] % 360 * $d, m = t[1] % 360 * $d, x = t.length > 2 ? t[2] % 360 * $d : 0, e()) : [b * Vd, m * Vd, x * Vd];
    }, n.angle = function (t) {
      return arguments.length ? (w = t % 360 * $d, e()) : w * Vd;
    }, n.precision = function (t) {
      return arguments.length ? (c = eo(s, S = t * t), r()) : op(S);
    }, n.fitExtent = function (t, e) {
      return Ji(n, t, e);
    }, n.fitSize = function (t, e) {
      return Ki(n, t, e);
    }, n.fitWidth = function (t, e) {
      return to(n, t, e);
    }, n.fitHeight = function (t, e) {
      return no(n, t, e);
    }, function () {
      return i = t.apply(this, arguments), n.invert = i.invert && function (t) {
        return (t = l.invert(t[0], t[1])) && [t[0] * Vd, t[1] * Vd];
      }, e();
    };
  }function ao(t) {
    var n = 0,
        e = jd / 3,
        r = oo(t),
        i = r(n, e);return i.parallels = function (t) {
      return arguments.length ? r(n = t[0] * $d, e = t[1] * $d) : [n * Vd, e * Vd];
    }, i;
  }function uo(t, n) {
    function e(t, n) {
      var e = op(o - 2 * i * rp(n)) / i;return [e * rp(t *= i), a - e * Jd(t)];
    }var r = rp(t),
        i = (r + rp(n)) / 2;if (Wd(i) < Fd) return function (t) {
      function n(t, n) {
        return [t * e, rp(n) / e];
      }var e = Jd(t);return n.invert = function (t, n) {
        return [t / e, lr(n * e)];
      }, n;
    }(t);var o = 1 + r * (2 * i - r),
        a = op(o) / i;return e.invert = function (t, n) {
      var e = a - n;return [Qd(t, Wd(e)) / i * ip(e), lr((o - (t * t + e * e) * i * i) / (2 * i))];
    }, e;
  }function fo() {
    return ao(uo).scale(155.424).center([0, 33.6442]);
  }function co() {
    return fo().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7]);
  }function so(t) {
    return function (n, e) {
      var r = Jd(n),
          i = Jd(e),
          o = t(r * i);return [o * i * rp(n), o * rp(e)];
    };
  }function lo(t) {
    return function (n, e) {
      var r = op(n * n + e * e),
          i = t(r),
          o = rp(i),
          a = Jd(i);return [Qd(n * o, r * a), lr(r && e * o / r)];
    };
  }function ho(t, n) {
    return [t, np(ap((Hd + n) / 2))];
  }function po(t) {
    function n() {
      var n = jd * u(),
          a = o(ei(o.rotate()).invert([0, 0]));return c(null == s ? [[a[0] - n, a[1] - n], [a[0] + n, a[1] + n]] : t === ho ? [[Math.max(a[0] - n, s), e], [Math.min(a[0] + n, r), i]] : [[s, Math.max(a[1] - n, e)], [r, Math.min(a[1] + n, i)]]);
    }var e,
        r,
        i,
        o = io(t),
        a = o.center,
        u = o.scale,
        f = o.translate,
        c = o.clipExtent,
        s = null;return o.scale = function (t) {
      return arguments.length ? (u(t), n()) : u();
    }, o.translate = function (t) {
      return arguments.length ? (f(t), n()) : f();
    }, o.center = function (t) {
      return arguments.length ? (a(t), n()) : a();
    }, o.clipExtent = function (t) {
      return arguments.length ? (null == t ? s = e = r = i = null : (s = +t[0][0], e = +t[0][1], r = +t[1][0], i = +t[1][1]), n()) : null == s ? null : [[s, e], [r, i]];
    }, n();
  }function vo(t) {
    return ap((Hd + t) / 2);
  }function go(t, n) {
    function e(t, n) {
      o > 0 ? n < -Hd + Fd && (n = -Hd + Fd) : n > Hd - Fd && (n = Hd - Fd);var e = o / ep(vo(n), i);return [e * rp(i * t), o - e * Jd(i * t)];
    }var r = Jd(t),
        i = t === n ? rp(t) : np(r / Jd(n)) / np(vo(n) / vo(t)),
        o = r * ep(vo(t), i) / i;return i ? (e.invert = function (t, n) {
      var e = o - n,
          r = ip(i) * op(t * t + e * e);return [Qd(t, Wd(e)) / i * ip(e), 2 * Zd(ep(o / r, 1 / i)) - Hd];
    }, e) : ho;
  }function yo(t, n) {
    return [t, n];
  }function _o(t, n) {
    function e(t, n) {
      var e = o - n,
          r = i * t;return [e * rp(r), o - e * Jd(r)];
    }var r = Jd(t),
        i = t === n ? rp(t) : (r - Jd(n)) / (n - t),
        o = r / i + t;return Wd(i) < Fd ? yo : (e.invert = function (t, n) {
      var e = o - n;return [Qd(t, Wd(e)) / i * ip(e), o - ip(i) * op(t * t + e * e)];
    }, e);
  }function bo(t, n) {
    var e = Jd(n),
        r = Jd(t) * e;return [e * rp(t) / r, rp(n) / r];
  }function mo(t, n, e, r) {
    return 1 === t && 1 === n && 0 === e && 0 === r ? Ci : Wi({ point: function point(i, o) {
        this.stream.point(i * t + e, o * n + r);
      } });
  }function xo(t, n) {
    var e = n * n,
        r = e * e;return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))];
  }function wo(t, n) {
    return [Jd(n) * rp(t), rp(n)];
  }function Mo(t, n) {
    var e = Jd(n),
        r = 1 + Jd(t) * e;return [e * rp(t) / r, rp(n) / r];
  }function Ao(t, n) {
    return [np(ap((Hd + n) / 2)), -t];
  }function To(t, n) {
    return t.parent === n.parent ? 1 : 2;
  }function No(t, n) {
    return t + n.x;
  }function So(t, n) {
    return Math.max(t, n.y);
  }function Eo(t) {
    var n = 0,
        e = t.children,
        r = e && e.length;if (r) for (; --r >= 0;) {
      n += e[r].value;
    } else n = 1;t.value = n;
  }function ko(t, n) {
    var e,
        r,
        i,
        o,
        a,
        u = new Ro(t),
        f = +t.value && (u.value = t.value),
        c = [u];for (null == n && (n = Co); e = c.pop();) {
      if (f && (e.value = +e.data.value), (i = n(e.data)) && (a = i.length)) for (e.children = new Array(a), o = a - 1; o >= 0; --o) {
        c.push(r = e.children[o] = new Ro(i[o])), r.parent = e, r.depth = e.depth + 1;
      }
    }return u.eachBefore(zo);
  }function Co(t) {
    return t.children;
  }function Po(t) {
    t.data = t.data.data;
  }function zo(t) {
    var n = 0;do {
      t.height = n;
    } while ((t = t.parent) && t.height < ++n);
  }function Ro(t) {
    this.data = t, this.depth = this.height = 0, this.parent = null;
  }function Lo(t) {
    for (var n, e, r = 0, i = (t = function (t) {
      for (var n, e, r = t.length; r;) {
        e = Math.random() * r-- | 0, n = t[r], t[r] = t[e], t[e] = n;
      }return t;
    }(hv.call(t))).length, o = []; r < i;) {
      n = t[r], e && Uo(e, n) ? ++r : (e = function (t) {
        switch (t.length) {case 1:
            return function (t) {
              return { x: t.x, y: t.y, r: t.r };
            }(t[0]);case 2:
            return Oo(t[0], t[1]);case 3:
            return Yo(t[0], t[1], t[2]);}
      }(o = function (t, n) {
        var e, r;if (qo(n, t)) return [n];for (e = 0; e < t.length; ++e) {
          if (Do(n, t[e]) && qo(Oo(t[e], n), t)) return [t[e], n];
        }for (e = 0; e < t.length - 1; ++e) {
          for (r = e + 1; r < t.length; ++r) {
            if (Do(Oo(t[e], t[r]), n) && Do(Oo(t[e], n), t[r]) && Do(Oo(t[r], n), t[e]) && qo(Yo(t[e], t[r], n), t)) return [t[e], t[r], n];
          }
        }throw new Error();
      }(o, n)), r = 0);
    }return e;
  }function Do(t, n) {
    var e = t.r - n.r,
        r = n.x - t.x,
        i = n.y - t.y;return e < 0 || e * e < r * r + i * i;
  }function Uo(t, n) {
    var e = t.r - n.r + 1e-6,
        r = n.x - t.x,
        i = n.y - t.y;return e > 0 && e * e > r * r + i * i;
  }function qo(t, n) {
    for (var e = 0; e < n.length; ++e) {
      if (!Uo(t, n[e])) return !1;
    }return !0;
  }function Oo(t, n) {
    var e = t.x,
        r = t.y,
        i = t.r,
        o = n.x,
        a = n.y,
        u = n.r,
        f = o - e,
        c = a - r,
        s = u - i,
        l = Math.sqrt(f * f + c * c);return { x: (e + o + f / l * s) / 2, y: (r + a + c / l * s) / 2, r: (l + i + u) / 2 };
  }function Yo(t, n, e) {
    var r = t.x,
        i = t.y,
        o = t.r,
        a = n.x,
        u = n.y,
        f = n.r,
        c = e.x,
        s = e.y,
        l = e.r,
        h = r - a,
        d = r - c,
        p = i - u,
        v = i - s,
        g = f - o,
        y = l - o,
        _ = r * r + i * i - o * o,
        b = _ - a * a - u * u + f * f,
        m = _ - c * c - s * s + l * l,
        x = d * p - h * v,
        w = (p * m - v * b) / (2 * x) - r,
        M = (v * g - p * y) / x,
        A = (d * b - h * m) / (2 * x) - i,
        T = (h * y - d * g) / x,
        N = M * M + T * T - 1,
        S = 2 * (o + w * M + A * T),
        E = w * w + A * A - o * o,
        k = -(N ? (S + Math.sqrt(S * S - 4 * N * E)) / (2 * N) : E / S);return { x: r + w + M * k, y: i + A + T * k, r: k };
  }function Bo(t, n, e) {
    var r = t.x,
        i = t.y,
        o = n.r + e.r,
        a = t.r + e.r,
        u = n.x - r,
        f = n.y - i,
        c = u * u + f * f;if (c) {
      var s = .5 + ((a *= a) - (o *= o)) / (2 * c),
          l = Math.sqrt(Math.max(0, 2 * o * (a + c) - (a -= c) * a - o * o)) / (2 * c);e.x = r + s * u + l * f, e.y = i + s * f - l * u;
    } else e.x = r + a, e.y = i;
  }function Fo(t, n) {
    var e = n.x - t.x,
        r = n.y - t.y,
        i = t.r + n.r;return i * i - 1e-6 > e * e + r * r;
  }function Io(t) {
    var n = t._,
        e = t.next._,
        r = n.r + e.r,
        i = (n.x * e.r + e.x * n.r) / r,
        o = (n.y * e.r + e.y * n.r) / r;return i * i + o * o;
  }function jo(t) {
    this._ = t, this.next = null, this.previous = null;
  }function Ho(t) {
    if (!(i = t.length)) return 0;var n, e, r, i, o, a, u, f, c, s, l;if (n = t[0], n.x = 0, n.y = 0, !(i > 1)) return n.r;if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2)) return n.r + e.r;Bo(e, n, r = t[2]), n = new jo(n), e = new jo(e), r = new jo(r), n.next = r.previous = e, e.next = n.previous = r, r.next = e.previous = n;t: for (u = 3; u < i; ++u) {
      Bo(n._, e._, r = t[u]), r = new jo(r), f = e.next, c = n.previous, s = e._.r, l = n._.r;do {
        if (s <= l) {
          if (Fo(f._, r._)) {
            e = f, n.next = e, e.previous = n, --u;continue t;
          }s += f._.r, f = f.next;
        } else {
          if (Fo(c._, r._)) {
            (n = c).next = e, e.previous = n, --u;continue t;
          }l += c._.r, c = c.previous;
        }
      } while (f !== c.next);for (r.previous = n, r.next = e, n.next = e.previous = e = r, o = Io(n); (r = r.next) !== e;) {
        (a = Io(r)) < o && (n = r, o = a);
      }e = n.next;
    }for (n = [e._], r = e; (r = r.next) !== e;) {
      n.push(r._);
    }for (r = Lo(n), u = 0; u < i; ++u) {
      n = t[u], n.x -= r.x, n.y -= r.y;
    }return r.r;
  }function Xo(t) {
    if ("function" != typeof t) throw new Error();return t;
  }function Go() {
    return 0;
  }function Vo(t) {
    return function () {
      return t;
    };
  }function $o(t) {
    return Math.sqrt(t.value);
  }function Wo(t) {
    return function (n) {
      n.children || (n.r = Math.max(0, +t(n) || 0));
    };
  }function Zo(t, n) {
    return function (e) {
      if (r = e.children) {
        var r,
            i,
            o,
            a = r.length,
            u = t(e) * n || 0;if (u) for (i = 0; i < a; ++i) {
          r[i].r += u;
        }if (o = Ho(r), u) for (i = 0; i < a; ++i) {
          r[i].r -= u;
        }e.r = o + u;
      }
    };
  }function Qo(t) {
    return function (n) {
      var e = n.parent;n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y);
    };
  }function Jo(t) {
    t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1);
  }function Ko(t, n, e, r, i) {
    for (var o, a = t.children, u = -1, f = a.length, c = t.value && (r - n) / t.value; ++u < f;) {
      (o = a[u]).y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * c;
    }
  }function ta(t) {
    return t.id;
  }function na(t) {
    return t.parentId;
  }function ea(t, n) {
    return t.parent === n.parent ? 1 : 2;
  }function ra(t) {
    var n = t.children;return n ? n[0] : t.t;
  }function ia(t) {
    var n = t.children;return n ? n[n.length - 1] : t.t;
  }function oa(t, n, e) {
    var r = e / (n.i - t.i);n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e;
  }function aa(t, n, e) {
    return t.a.parent === n.parent ? t.a : e;
  }function ua(t, n) {
    this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n;
  }function fa(t, n, e, r, i) {
    for (var o, a = t.children, u = -1, f = a.length, c = t.value && (i - e) / t.value; ++u < f;) {
      (o = a[u]).x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * c;
    }
  }function ca(t, n, e, r, i, o) {
    for (var a, u, f, c, s, l, h, d, p, v, g, y = [], _ = n.children, b = 0, m = 0, x = _.length, w = n.value; b < x;) {
      f = i - e, c = o - r;do {
        s = _[m++].value;
      } while (!s && m < x);for (l = h = s, g = s * s * (v = Math.max(c / f, f / c) / (w * t)), p = Math.max(h / g, g / l); m < x; ++m) {
        if (s += u = _[m].value, u < l && (l = u), u > h && (h = u), g = s * s * v, (d = Math.max(h / g, g / l)) > p) {
          s -= u;break;
        }p = d;
      }y.push(a = { value: s, dice: f < c, children: _.slice(b, m) }), a.dice ? Ko(a, e, r, i, w ? r += c * s / w : o) : fa(a, e, r, w ? e += f * s / w : i, o), w -= s, b = m;
    }return y;
  }function sa(t, n, e) {
    return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0]);
  }function la(t, n) {
    return t[0] - n[0] || t[1] - n[1];
  }function ha(t) {
    for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; ++i) {
      for (; r > 1 && sa(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;) {
        --r;
      }e[r++] = i;
    }return e.slice(0, r);
  }function da() {
    return Math.random();
  }function pa(t) {
    function n(n) {
      var o = n + "",
          a = e.get(o);if (!a) {
        if (i !== Ev) return i;e.set(o, a = r.push(n));
      }return t[(a - 1) % t.length];
    }var e = se(),
        r = [],
        i = Ev;return t = null == t ? [] : Sv.call(t), n.domain = function (t) {
      if (!arguments.length) return r.slice();r = [], e = se();for (var i, o, a = -1, u = t.length; ++a < u;) {
        e.has(o = (i = t[a]) + "") || e.set(o, r.push(i));
      }return n;
    }, n.range = function (e) {
      return arguments.length ? (t = Sv.call(e), n) : t.slice();
    }, n.unknown = function (t) {
      return arguments.length ? (i = t, n) : i;
    }, n.copy = function () {
      return pa().domain(r).range(t).unknown(i);
    }, n;
  }function va() {
    function t() {
      var t = i().length,
          r = a[1] < a[0],
          h = a[r - 0],
          d = a[1 - r];n = (d - h) / Math.max(1, t - f + 2 * c), u && (n = Math.floor(n)), h += (d - h - n * (t - f)) * l, e = n * (1 - f), u && (h = Math.round(h), e = Math.round(e));var p = s(t).map(function (t) {
        return h + n * t;
      });return o(r ? p.reverse() : p);
    }var n,
        e,
        r = pa().unknown(void 0),
        i = r.domain,
        o = r.range,
        a = [0, 1],
        u = !1,
        f = 0,
        c = 0,
        l = .5;return delete r.unknown, r.domain = function (n) {
      return arguments.length ? (i(n), t()) : i();
    }, r.range = function (n) {
      return arguments.length ? (a = [+n[0], +n[1]], t()) : a.slice();
    }, r.rangeRound = function (n) {
      return a = [+n[0], +n[1]], u = !0, t();
    }, r.bandwidth = function () {
      return e;
    }, r.step = function () {
      return n;
    }, r.round = function (n) {
      return arguments.length ? (u = !!n, t()) : u;
    }, r.padding = function (n) {
      return arguments.length ? (f = c = Math.max(0, Math.min(1, n)), t()) : f;
    }, r.paddingInner = function (n) {
      return arguments.length ? (f = Math.max(0, Math.min(1, n)), t()) : f;
    }, r.paddingOuter = function (n) {
      return arguments.length ? (c = Math.max(0, Math.min(1, n)), t()) : c;
    }, r.align = function (n) {
      return arguments.length ? (l = Math.max(0, Math.min(1, n)), t()) : l;
    }, r.copy = function () {
      return va().domain(i()).range(a).round(u).paddingInner(f).paddingOuter(c).align(l);
    }, t();
  }function ga(t) {
    var n = t.copy;return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function () {
      return ga(n());
    }, t;
  }function ya(t) {
    return function () {
      return t;
    };
  }function _a(t) {
    return +t;
  }function ba(t, n) {
    return (n -= t = +t) ? function (e) {
      return (e - t) / n;
    } : ya(n);
  }function ma(t, n, e, r) {
    var i = t[0],
        o = t[1],
        a = n[0],
        u = n[1];return o < i ? (i = e(o, i), a = r(u, a)) : (i = e(i, o), a = r(a, u)), function (t) {
      return a(i(t));
    };
  }function xa(t, n, e, r) {
    var i = Math.min(t.length, n.length) - 1,
        o = new Array(i),
        a = new Array(i),
        u = -1;for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++u < i;) {
      o[u] = e(t[u], t[u + 1]), a[u] = r(n[u], n[u + 1]);
    }return function (n) {
      var e = Zc(t, n, 1, i) - 1;return a[e](o[e](n));
    };
  }function wa(t, n) {
    return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp());
  }function Ma(t, n) {
    function e() {
      return i = Math.min(u.length, f.length) > 2 ? xa : ma, o = a = null, r;
    }function r(n) {
      return (o || (o = i(u, f, s ? function (t) {
        return function (n, e) {
          var r = t(n = +n, e = +e);return function (t) {
            return t <= n ? 0 : t >= e ? 1 : r(t);
          };
        };
      }(t) : t, c)))(+n);
    }var i,
        o,
        a,
        u = kv,
        f = kv,
        c = ln,
        s = !1;return r.invert = function (t) {
      return (a || (a = i(f, u, ba, s ? function (t) {
        return function (n, e) {
          var r = t(n = +n, e = +e);return function (t) {
            return t <= 0 ? n : t >= 1 ? e : r(t);
          };
        };
      }(n) : n)))(+t);
    }, r.domain = function (t) {
      return arguments.length ? (u = Nv.call(t, _a), e()) : u.slice();
    }, r.range = function (t) {
      return arguments.length ? (f = Sv.call(t), e()) : f.slice();
    }, r.rangeRound = function (t) {
      return f = Sv.call(t), c = hn, e();
    }, r.clamp = function (t) {
      return arguments.length ? (s = !!t, e()) : s;
    }, r.interpolate = function (t) {
      return arguments.length ? (c = t, e()) : c;
    }, e();
  }function Aa(n) {
    var e = n.domain;return n.ticks = function (t) {
      var n = e();return l(n[0], n[n.length - 1], null == t ? 10 : t);
    }, n.tickFormat = function (n, r) {
      return function (n, e, r) {
        var i,
            o = n[0],
            a = n[n.length - 1],
            u = d(o, a, null == e ? 10 : e);switch ((r = Ke(null == r ? ",f" : r)).type) {case "s":
            var f = Math.max(Math.abs(o), Math.abs(a));return null != r.precision || isNaN(i = or(u, f)) || (r.precision = i), t.formatPrefix(r, f);case "":case "e":case "g":case "p":case "r":
            null != r.precision || isNaN(i = ar(u, Math.max(Math.abs(o), Math.abs(a)))) || (r.precision = i - ("e" === r.type));break;case "f":case "%":
            null != r.precision || isNaN(i = ir(u)) || (r.precision = i - 2 * ("%" === r.type));}return t.format(r);
      }(e(), n, r);
    }, n.nice = function (t) {
      null == t && (t = 10);var r,
          i = e(),
          o = 0,
          a = i.length - 1,
          u = i[o],
          f = i[a];return f < u && (r = u, u = f, f = r, r = o, o = a, a = r), (r = h(u, f, t)) > 0 ? r = h(u = Math.floor(u / r) * r, f = Math.ceil(f / r) * r, t) : r < 0 && (r = h(u = Math.ceil(u * r) / r, f = Math.floor(f * r) / r, t)), r > 0 ? (i[o] = Math.floor(u / r) * r, i[a] = Math.ceil(f / r) * r, e(i)) : r < 0 && (i[o] = Math.ceil(u * r) / r, i[a] = Math.floor(f * r) / r, e(i)), n;
    }, n;
  }function Ta() {
    var t = Ma(ba, fn);return t.copy = function () {
      return wa(t, Ta());
    }, Aa(t);
  }function Na() {
    function t(t) {
      return +t;
    }var n = [0, 1];return t.invert = t, t.domain = t.range = function (e) {
      return arguments.length ? (n = Nv.call(e, _a), t) : n.slice();
    }, t.copy = function () {
      return Na().domain(n);
    }, Aa(t);
  }function Sa(t, n) {
    var e,
        r = 0,
        i = (t = t.slice()).length - 1,
        o = t[r],
        a = t[i];return a < o && (e = r, r = i, i = e, e = o, o = a, a = e), t[r] = n.floor(o), t[i] = n.ceil(a), t;
  }function Ea(t, n) {
    return (n = Math.log(n / t)) ? function (e) {
      return Math.log(e / t) / n;
    } : ya(n);
  }function ka(t, n) {
    return t < 0 ? function (e) {
      return -Math.pow(-n, e) * Math.pow(-t, 1 - e);
    } : function (e) {
      return Math.pow(n, e) * Math.pow(t, 1 - e);
    };
  }function Ca(t) {
    return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
  }function Pa(t) {
    return 10 === t ? Ca : t === Math.E ? Math.exp : function (n) {
      return Math.pow(t, n);
    };
  }function za(t) {
    return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function (n) {
      return Math.log(n) / t;
    });
  }function Ra(t) {
    return function (n) {
      return -t(-n);
    };
  }function La() {
    function n() {
      return o = za(i), a = Pa(i), r()[0] < 0 && (o = Ra(o), a = Ra(a)), e;
    }var e = Ma(Ea, ka).domain([1, 10]),
        r = e.domain,
        i = 10,
        o = za(10),
        a = Pa(10);return e.base = function (t) {
      return arguments.length ? (i = +t, n()) : i;
    }, e.domain = function (t) {
      return arguments.length ? (r(t), n()) : r();
    }, e.ticks = function (t) {
      var n,
          e = r(),
          u = e[0],
          f = e[e.length - 1];(n = f < u) && (d = u, u = f, f = d);var c,
          s,
          h,
          d = o(u),
          p = o(f),
          v = null == t ? 10 : +t,
          g = [];if (!(i % 1) && p - d < v) {
        if (d = Math.round(d) - 1, p = Math.round(p) + 1, u > 0) {
          for (; d < p; ++d) {
            for (s = 1, c = a(d); s < i; ++s) {
              if (!((h = c * s) < u)) {
                if (h > f) break;g.push(h);
              }
            }
          }
        } else for (; d < p; ++d) {
          for (s = i - 1, c = a(d); s >= 1; --s) {
            if (!((h = c * s) < u)) {
              if (h > f) break;g.push(h);
            }
          }
        }
      } else g = l(d, p, Math.min(p - d, v)).map(a);return n ? g.reverse() : g;
    }, e.tickFormat = function (n, r) {
      if (null == r && (r = 10 === i ? ".0e" : ","), "function" != typeof r && (r = t.format(r)), n === 1 / 0) return r;null == n && (n = 10);var u = Math.max(1, i * n / e.ticks().length);return function (t) {
        var n = t / a(Math.round(o(t)));return n * i < i - .5 && (n *= i), n <= u ? r(t) : "";
      };
    }, e.nice = function () {
      return r(Sa(r(), { floor: function floor(t) {
          return a(Math.floor(o(t)));
        }, ceil: function ceil(t) {
          return a(Math.ceil(o(t)));
        } }));
    }, e.copy = function () {
      return wa(e, La().base(i));
    }, e;
  }function Da(t, n) {
    return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n);
  }function Ua() {
    var t = 1,
        n = Ma(function (n, e) {
      return (e = Da(e, t) - (n = Da(n, t))) ? function (r) {
        return (Da(r, t) - n) / e;
      } : ya(e);
    }, function (n, e) {
      return e = Da(e, t) - (n = Da(n, t)), function (r) {
        return Da(n + e * r, 1 / t);
      };
    }),
        e = n.domain;return n.exponent = function (n) {
      return arguments.length ? (t = +n, e(e())) : t;
    }, n.copy = function () {
      return wa(n, Ua().exponent(t));
    }, Aa(n);
  }function qa() {
    function t() {
      var t = 0,
          n = Math.max(1, i.length);for (o = new Array(n - 1); ++t < n;) {
        o[t - 1] = v(r, t / n);
      }return e;
    }function e(t) {
      if (!isNaN(t = +t)) return i[Zc(o, t)];
    }var r = [],
        i = [],
        o = [];return e.invertExtent = function (t) {
      var n = i.indexOf(t);return n < 0 ? [NaN, NaN] : [n > 0 ? o[n - 1] : r[0], n < o.length ? o[n] : r[r.length - 1]];
    }, e.domain = function (e) {
      if (!arguments.length) return r.slice();r = [];for (var i, o = 0, a = e.length; o < a; ++o) {
        null == (i = e[o]) || isNaN(i = +i) || r.push(i);
      }return r.sort(n), t();
    }, e.range = function (n) {
      return arguments.length ? (i = Sv.call(n), t()) : i.slice();
    }, e.quantiles = function () {
      return o.slice();
    }, e.copy = function () {
      return qa().domain(r).range(i);
    }, e;
  }function Oa() {
    function t(t) {
      if (t <= t) return a[Zc(o, t, 0, i)];
    }function n() {
      var n = -1;for (o = new Array(i); ++n < i;) {
        o[n] = ((n + 1) * r - (n - i) * e) / (i + 1);
      }return t;
    }var e = 0,
        r = 1,
        i = 1,
        o = [.5],
        a = [0, 1];return t.domain = function (t) {
      return arguments.length ? (e = +t[0], r = +t[1], n()) : [e, r];
    }, t.range = function (t) {
      return arguments.length ? (i = (a = Sv.call(t)).length - 1, n()) : a.slice();
    }, t.invertExtent = function (t) {
      var n = a.indexOf(t);return n < 0 ? [NaN, NaN] : n < 1 ? [e, o[0]] : n >= i ? [o[i - 1], r] : [o[n - 1], o[n]];
    }, t.copy = function () {
      return Oa().domain([e, r]).range(a);
    }, Aa(t);
  }function Ya() {
    function t(t) {
      if (t <= t) return e[Zc(n, t, 0, r)];
    }var n = [.5],
        e = [0, 1],
        r = 1;return t.domain = function (i) {
      return arguments.length ? (n = Sv.call(i), r = Math.min(n.length, e.length - 1), t) : n.slice();
    }, t.range = function (i) {
      return arguments.length ? (e = Sv.call(i), r = Math.min(n.length, e.length - 1), t) : e.slice();
    }, t.invertExtent = function (t) {
      var r = e.indexOf(t);return [n[r - 1], n[r]];
    }, t.copy = function () {
      return Ya().domain(n).range(e);
    }, t;
  }function Ba(t, n, e, r) {
    function i(n) {
      return t(n = new Date(+n)), n;
    }return i.floor = i, i.ceil = function (e) {
      return t(e = new Date(e - 1)), n(e, 1), t(e), e;
    }, i.round = function (t) {
      var n = i(t),
          e = i.ceil(t);return t - n < e - t ? n : e;
    }, i.offset = function (t, e) {
      return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t;
    }, i.range = function (e, r, o) {
      var a,
          u = [];if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0)) return u;do {
        u.push(a = new Date(+e)), n(e, o), t(e);
      } while (a < e && e < r);return u;
    }, i.filter = function (e) {
      return Ba(function (n) {
        if (n >= n) for (; t(n), !e(n);) {
          n.setTime(n - 1);
        }
      }, function (t, r) {
        if (t >= t) if (r < 0) for (; ++r <= 0;) {
          for (; n(t, -1), !e(t);) {}
        } else for (; --r >= 0;) {
          for (; n(t, 1), !e(t);) {}
        }
      });
    }, e && (i.count = function (n, r) {
      return Cv.setTime(+n), Pv.setTime(+r), t(Cv), t(Pv), Math.floor(e(Cv, Pv));
    }, i.every = function (t) {
      return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (n) {
        return r(n) % t == 0;
      } : function (n) {
        return i.count(0, n) % t == 0;
      }) : i : null;
    }), i;
  }function Fa(t) {
    return Ba(function (n) {
      n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setDate(t.getDate() + 7 * n);
    }, function (t, n) {
      return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Lv) / Dv;
    });
  }function Ia(t) {
    return Ba(function (n) {
      n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setUTCDate(t.getUTCDate() + 7 * n);
    }, function (t, n) {
      return (n - t) / Dv;
    });
  }function ja(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);return n.setFullYear(t.y), n;
    }return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
  }function Ha(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));return n.setUTCFullYear(t.y), n;
    }return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
  }function Xa(t) {
    return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
  }function Ga(t) {
    function n(t, n) {
      return function (e) {
        var r,
            i,
            o,
            a = [],
            u = -1,
            f = 0,
            c = t.length;for (e instanceof Date || (e = new Date(+e)); ++u < c;) {
          37 === t.charCodeAt(u) && (a.push(t.slice(f, u)), null != (i = Rg[r = t.charAt(++u)]) ? r = t.charAt(++u) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), a.push(r), f = u + 1);
        }return a.push(t.slice(f, u)), a.join("");
      };
    }function e(t, n) {
      return function (e) {
        var i,
            o,
            a = Xa(1900);if (r(a, t, e += "", 0) != e.length) return null;if ("Q" in a) return new Date(a.Q);if ("p" in a && (a.H = a.H % 12 + 12 * a.p), "V" in a) {
          if (a.V < 1 || a.V > 53) return null;"w" in a || (a.w = 1), "Z" in a ? (i = (o = (i = Ha(Xa(a.y))).getUTCDay()) > 4 || 0 === o ? vg.ceil(i) : vg(i), i = hg.offset(i, 7 * (a.V - 1)), a.y = i.getUTCFullYear(), a.m = i.getUTCMonth(), a.d = i.getUTCDate() + (a.w + 6) % 7) : (i = (o = (i = n(Xa(a.y))).getDay()) > 4 || 0 === o ? Xv.ceil(i) : Xv(i), i = Iv.offset(i, 7 * (a.V - 1)), a.y = i.getFullYear(), a.m = i.getMonth(), a.d = i.getDate() + (a.w + 6) % 7);
        } else ("W" in a || "U" in a) && ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0), o = "Z" in a ? Ha(Xa(a.y)).getUTCDay() : n(Xa(a.y)).getDay(), a.m = 0, a.d = "W" in a ? (a.w + 6) % 7 + 7 * a.W - (o + 5) % 7 : a.w + 7 * a.U - (o + 6) % 7);return "Z" in a ? (a.H += a.Z / 100 | 0, a.M += a.Z % 100, Ha(a)) : n(a);
      };
    }function r(t, n, e, r) {
      for (var i, o, a = 0, u = n.length, f = e.length; a < u;) {
        if (r >= f) return -1;if (37 === (i = n.charCodeAt(a++))) {
          if (i = n.charAt(a++), !(o = A[i in Rg ? n.charAt(a++) : i]) || (r = o(t, e, r)) < 0) return -1;
        } else if (i != e.charCodeAt(r++)) return -1;
      }return r;
    }var i = t.dateTime,
        o = t.date,
        a = t.time,
        u = t.periods,
        f = t.days,
        c = t.shortDays,
        s = t.months,
        l = t.shortMonths,
        h = Wa(u),
        d = Za(u),
        p = Wa(f),
        v = Za(f),
        g = Wa(c),
        y = Za(c),
        _ = Wa(s),
        b = Za(s),
        m = Wa(l),
        x = Za(l),
        w = { a: function a(t) {
        return c[t.getDay()];
      }, A: function A(t) {
        return f[t.getDay()];
      }, b: function b(t) {
        return l[t.getMonth()];
      }, B: function B(t) {
        return s[t.getMonth()];
      }, c: null, d: gu, e: gu, f: xu, H: yu, I: _u, j: bu, L: mu, m: wu, M: Mu, p: function p(t) {
        return u[+(t.getHours() >= 12)];
      }, Q: Qu, s: Ju, S: Au, u: Tu, U: Nu, V: Su, w: Eu, W: ku, x: null, X: null, y: Cu, Y: Pu, Z: zu, "%": Zu },
        M = { a: function a(t) {
        return c[t.getUTCDay()];
      }, A: function A(t) {
        return f[t.getUTCDay()];
      }, b: function b(t) {
        return l[t.getUTCMonth()];
      }, B: function B(t) {
        return s[t.getUTCMonth()];
      }, c: null, d: Ru, e: Ru, f: Ou, H: Lu, I: Du, j: Uu, L: qu, m: Yu, M: Bu, p: function p(t) {
        return u[+(t.getUTCHours() >= 12)];
      }, Q: Qu, s: Ju, S: Fu, u: Iu, U: ju, V: Hu, w: Xu, W: Gu, x: null, X: null, y: Vu, Y: $u, Z: Wu, "%": Zu },
        A = { a: function a(t, n, e) {
        var r = g.exec(n.slice(e));return r ? (t.w = y[r[0].toLowerCase()], e + r[0].length) : -1;
      }, A: function A(t, n, e) {
        var r = p.exec(n.slice(e));return r ? (t.w = v[r[0].toLowerCase()], e + r[0].length) : -1;
      }, b: function b(t, n, e) {
        var r = m.exec(n.slice(e));return r ? (t.m = x[r[0].toLowerCase()], e + r[0].length) : -1;
      }, B: function B(t, n, e) {
        var r = _.exec(n.slice(e));return r ? (t.m = b[r[0].toLowerCase()], e + r[0].length) : -1;
      }, c: function c(t, n, e) {
        return r(t, i, n, e);
      }, d: au, e: au, f: hu, H: fu, I: fu, j: uu, L: lu, m: ou, M: cu, p: function p(t, n, e) {
        var r = h.exec(n.slice(e));return r ? (t.p = d[r[0].toLowerCase()], e + r[0].length) : -1;
      }, Q: pu, s: vu, S: su, u: Ja, U: Ka, V: tu, w: Qa, W: nu, x: function x(t, n, e) {
        return r(t, o, n, e);
      }, X: function X(t, n, e) {
        return r(t, a, n, e);
      }, y: ru, Y: eu, Z: iu, "%": du };return w.x = n(o, w), w.X = n(a, w), w.c = n(i, w), M.x = n(o, M), M.X = n(a, M), M.c = n(i, M), { format: function format(t) {
        var e = n(t += "", w);return e.toString = function () {
          return t;
        }, e;
      }, parse: function parse(t) {
        var n = e(t += "", ja);return n.toString = function () {
          return t;
        }, n;
      }, utcFormat: function utcFormat(t) {
        var e = n(t += "", M);return e.toString = function () {
          return t;
        }, e;
      }, utcParse: function utcParse(t) {
        var n = e(t, Ha);return n.toString = function () {
          return t;
        }, n;
      } };
  }function Va(t, n, e) {
    var r = t < 0 ? "-" : "",
        i = (r ? -t : t) + "",
        o = i.length;return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
  }function $a(t) {
    return t.replace(Ug, "\\$&");
  }function Wa(t) {
    return new RegExp("^(?:" + t.map($a).join("|") + ")", "i");
  }function Za(t) {
    for (var n = {}, e = -1, r = t.length; ++e < r;) {
      n[t[e].toLowerCase()] = e;
    }return n;
  }function Qa(t, n, e) {
    var r = Lg.exec(n.slice(e, e + 1));return r ? (t.w = +r[0], e + r[0].length) : -1;
  }function Ja(t, n, e) {
    var r = Lg.exec(n.slice(e, e + 1));return r ? (t.u = +r[0], e + r[0].length) : -1;
  }function Ka(t, n, e) {
    var r = Lg.exec(n.slice(e, e + 2));return r ? (t.U = +r[0], e + r[0].length) : -1;
  }function tu(t, n, e) {
    var r = Lg.exec(n.slice(e, e + 2));return r ? (t.V = +r[0], e + r[0].length) : -1;
  }function nu(t, n, e) {
    var r = Lg.exec(n.slice(e, e + 2));return r ? (t.W = +r[0], e + r[0].length) : -1;
  }function eu(t, n, e) {
    var r = Lg.exec(n.slice(e, e + 4));return r ? (t.y = +r[0], e + r[0].length) : -1;
  }function ru(t, n, e) {
    var r = Lg.exec(n.slice(e, e + 2));return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
  }function iu(t, n, e) {
    var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
  }function ou(t, n, e) {
    var r = Lg.exec(n.slice(e, e + 2));return r ? (t.m = r[0] - 1, e + r[0].length) : -1;
  }function au(t, n, e) {
    var r = Lg.exec(n.slice(e, e + 2));return r ? (t.d = +r[0], e + r[0].length) : -1;
  }function uu(t, n, e) {
    var r = Lg.exec(n.slice(e, e + 3));return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1;
  }function fu(t, n, e) {
    var r = Lg.exec(n.slice(e, e + 2));return r ? (t.H = +r[0], e + r[0].length) : -1;
  }function cu(t, n, e) {
    var r = Lg.exec(n.slice(e, e + 2));return r ? (t.M = +r[0], e + r[0].length) : -1;
  }function su(t, n, e) {
    var r = Lg.exec(n.slice(e, e + 2));return r ? (t.S = +r[0], e + r[0].length) : -1;
  }function lu(t, n, e) {
    var r = Lg.exec(n.slice(e, e + 3));return r ? (t.L = +r[0], e + r[0].length) : -1;
  }function hu(t, n, e) {
    var r = Lg.exec(n.slice(e, e + 6));return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1;
  }function du(t, n, e) {
    var r = Dg.exec(n.slice(e, e + 1));return r ? e + r[0].length : -1;
  }function pu(t, n, e) {
    var r = Lg.exec(n.slice(e));return r ? (t.Q = +r[0], e + r[0].length) : -1;
  }function vu(t, n, e) {
    var r = Lg.exec(n.slice(e));return r ? (t.Q = 1e3 * +r[0], e + r[0].length) : -1;
  }function gu(t, n) {
    return Va(t.getDate(), n, 2);
  }function yu(t, n) {
    return Va(t.getHours(), n, 2);
  }function _u(t, n) {
    return Va(t.getHours() % 12 || 12, n, 2);
  }function bu(t, n) {
    return Va(1 + Iv.count(ag(t), t), n, 3);
  }function mu(t, n) {
    return Va(t.getMilliseconds(), n, 3);
  }function xu(t, n) {
    return mu(t, n) + "000";
  }function wu(t, n) {
    return Va(t.getMonth() + 1, n, 2);
  }function Mu(t, n) {
    return Va(t.getMinutes(), n, 2);
  }function Au(t, n) {
    return Va(t.getSeconds(), n, 2);
  }function Tu(t) {
    var n = t.getDay();return 0 === n ? 7 : n;
  }function Nu(t, n) {
    return Va(Hv.count(ag(t), t), n, 2);
  }function Su(t, n) {
    var e = t.getDay();return t = e >= 4 || 0 === e ? $v(t) : $v.ceil(t), Va($v.count(ag(t), t) + (4 === ag(t).getDay()), n, 2);
  }function Eu(t) {
    return t.getDay();
  }function ku(t, n) {
    return Va(Xv.count(ag(t), t), n, 2);
  }function Cu(t, n) {
    return Va(t.getFullYear() % 100, n, 2);
  }function Pu(t, n) {
    return Va(t.getFullYear() % 1e4, n, 4);
  }function zu(t) {
    var n = t.getTimezoneOffset();return (n > 0 ? "-" : (n *= -1, "+")) + Va(n / 60 | 0, "0", 2) + Va(n % 60, "0", 2);
  }function Ru(t, n) {
    return Va(t.getUTCDate(), n, 2);
  }function Lu(t, n) {
    return Va(t.getUTCHours(), n, 2);
  }function Du(t, n) {
    return Va(t.getUTCHours() % 12 || 12, n, 2);
  }function Uu(t, n) {
    return Va(1 + hg.count(Cg(t), t), n, 3);
  }function qu(t, n) {
    return Va(t.getUTCMilliseconds(), n, 3);
  }function Ou(t, n) {
    return qu(t, n) + "000";
  }function Yu(t, n) {
    return Va(t.getUTCMonth() + 1, n, 2);
  }function Bu(t, n) {
    return Va(t.getUTCMinutes(), n, 2);
  }function Fu(t, n) {
    return Va(t.getUTCSeconds(), n, 2);
  }function Iu(t) {
    var n = t.getUTCDay();return 0 === n ? 7 : n;
  }function ju(t, n) {
    return Va(pg.count(Cg(t), t), n, 2);
  }function Hu(t, n) {
    var e = t.getUTCDay();return t = e >= 4 || 0 === e ? _g(t) : _g.ceil(t), Va(_g.count(Cg(t), t) + (4 === Cg(t).getUTCDay()), n, 2);
  }function Xu(t) {
    return t.getUTCDay();
  }function Gu(t, n) {
    return Va(vg.count(Cg(t), t), n, 2);
  }function Vu(t, n) {
    return Va(t.getUTCFullYear() % 100, n, 2);
  }function $u(t, n) {
    return Va(t.getUTCFullYear() % 1e4, n, 4);
  }function Wu() {
    return "+0000";
  }function Zu() {
    return "%";
  }function Qu(t) {
    return +t;
  }function Ju(t) {
    return Math.floor(+t / 1e3);
  }function Ku(n) {
    return Pg = Ga(n), t.timeFormat = Pg.format, t.timeParse = Pg.parse, t.utcFormat = Pg.utcFormat, t.utcParse = Pg.utcParse, Pg;
  }function tf(t) {
    return new Date(t);
  }function nf(t) {
    return t instanceof Date ? +t : +new Date(+t);
  }function ef(t, n, r, i, o, a, u, f, c) {
    function s(e) {
      return (u(e) < e ? g : a(e) < e ? y : o(e) < e ? _ : i(e) < e ? b : n(e) < e ? r(e) < e ? m : x : t(e) < e ? w : M)(e);
    }function l(n, r, i, o) {
      if (null == n && (n = 10), "number" == typeof n) {
        var a = Math.abs(i - r) / n,
            u = e(function (t) {
          return t[2];
        }).right(A, a);u === A.length ? (o = d(r / Gg, i / Gg, n), n = t) : u ? (o = (u = A[a / A[u - 1][2] < A[u][2] / a ? u - 1 : u])[1], n = u[0]) : (o = Math.max(d(r, i, n), 1), n = f);
      }return null == o ? n : n.every(o);
    }var h = Ma(ba, fn),
        p = h.invert,
        v = h.domain,
        g = c(".%L"),
        y = c(":%S"),
        _ = c("%I:%M"),
        b = c("%I %p"),
        m = c("%a %d"),
        x = c("%b %d"),
        w = c("%B"),
        M = c("%Y"),
        A = [[u, 1, Bg], [u, 5, 5 * Bg], [u, 15, 15 * Bg], [u, 30, 30 * Bg], [a, 1, Fg], [a, 5, 5 * Fg], [a, 15, 15 * Fg], [a, 30, 30 * Fg], [o, 1, Ig], [o, 3, 3 * Ig], [o, 6, 6 * Ig], [o, 12, 12 * Ig], [i, 1, jg], [i, 2, 2 * jg], [r, 1, Hg], [n, 1, Xg], [n, 3, 3 * Xg], [t, 1, Gg]];return h.invert = function (t) {
      return new Date(p(t));
    }, h.domain = function (t) {
      return arguments.length ? v(Nv.call(t, nf)) : v().map(tf);
    }, h.ticks = function (t, n) {
      var e,
          r = v(),
          i = r[0],
          o = r[r.length - 1],
          a = o < i;return a && (e = i, i = o, o = e), e = l(t, i, o, n), e = e ? e.range(i, o + 1) : [], a ? e.reverse() : e;
    }, h.tickFormat = function (t, n) {
      return null == n ? s : c(n);
    }, h.nice = function (t, n) {
      var e = v();return (t = l(t, e[0], e[e.length - 1], n)) ? v(Sa(e, t)) : h;
    }, h.copy = function () {
      return wa(h, ef(t, n, r, i, o, a, u, f, c));
    }, h;
  }function rf(t) {
    function n(n) {
      var o = (n - e) / (r - e);return t(i ? Math.max(0, Math.min(1, o)) : o);
    }var e = 0,
        r = 1,
        i = !1;return n.domain = function (t) {
      return arguments.length ? (e = +t[0], r = +t[1], n) : [e, r];
    }, n.clamp = function (t) {
      return arguments.length ? (i = !!t, n) : i;
    }, n.interpolator = function (e) {
      return arguments.length ? (t = e, n) : t;
    }, n.copy = function () {
      return rf(t).domain([e, r]).clamp(i);
    }, Aa(n);
  }function of(t) {
    for (var n = t.length / 6 | 0, e = new Array(n), r = 0; r < n;) {
      e[r] = "#" + t.slice(6 * r, 6 * ++r);
    }return e;
  }function af(t) {
    return nl(t[t.length - 1]);
  }function uf(t) {
    var n = t.length;return function (e) {
      return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
    };
  }function ff(t) {
    return function () {
      return t;
    };
  }function cf(t) {
    return t >= 1 ? b_ : t <= -1 ? -b_ : Math.asin(t);
  }function sf(t) {
    return t.innerRadius;
  }function lf(t) {
    return t.outerRadius;
  }function hf(t) {
    return t.startAngle;
  }function df(t) {
    return t.endAngle;
  }function pf(t) {
    return t && t.padAngle;
  }function vf(t, n, e, r, i, o, a) {
    var u = t - e,
        f = n - r,
        c = (a ? o : -o) / g_(u * u + f * f),
        s = c * f,
        l = -c * u,
        h = t + s,
        d = n + l,
        p = e + s,
        v = r + l,
        g = (h + p) / 2,
        y = (d + v) / 2,
        _ = p - h,
        b = v - d,
        m = _ * _ + b * b,
        x = i - o,
        w = h * v - p * d,
        M = (b < 0 ? -1 : 1) * g_(d_(0, x * x * m - w * w)),
        A = (w * b - _ * M) / m,
        T = (-w * _ - b * M) / m,
        N = (w * b + _ * M) / m,
        S = (-w * _ + b * M) / m,
        E = A - g,
        k = T - y,
        C = N - g,
        P = S - y;return E * E + k * k > C * C + P * P && (A = N, T = S), { cx: A, cy: T, x01: -s, y01: -l, x11: A * (i / x - 1), y11: T * (i / x - 1) };
  }function gf(t) {
    this._context = t;
  }function yf(t) {
    return new gf(t);
  }function _f(t) {
    return t[0];
  }function bf(t) {
    return t[1];
  }function mf() {
    function t(t) {
      var u,
          f,
          c,
          s = t.length,
          l = !1;for (null == i && (a = o(c = re())), u = 0; u <= s; ++u) {
        !(u < s && r(f = t[u], u, t)) === l && ((l = !l) ? a.lineStart() : a.lineEnd()), l && a.point(+n(f, u, t), +e(f, u, t));
      }if (c) return a = null, c + "" || null;
    }var n = _f,
        e = bf,
        r = ff(!0),
        i = null,
        o = yf,
        a = null;return t.x = function (e) {
      return arguments.length ? (n = "function" == typeof e ? e : ff(+e), t) : n;
    }, t.y = function (n) {
      return arguments.length ? (e = "function" == typeof n ? n : ff(+n), t) : e;
    }, t.defined = function (n) {
      return arguments.length ? (r = "function" == typeof n ? n : ff(!!n), t) : r;
    }, t.curve = function (n) {
      return arguments.length ? (o = n, null != i && (a = o(i)), t) : o;
    }, t.context = function (n) {
      return arguments.length ? (null == n ? i = a = null : a = o(i = n), t) : i;
    }, t;
  }function xf() {
    function t(t) {
      var n,
          s,
          l,
          h,
          d,
          p = t.length,
          v = !1,
          g = new Array(p),
          y = new Array(p);for (null == u && (c = f(d = re())), n = 0; n <= p; ++n) {
        if (!(n < p && a(h = t[n], n, t)) === v) if (v = !v) s = n, c.areaStart(), c.lineStart();else {
          for (c.lineEnd(), c.lineStart(), l = n - 1; l >= s; --l) {
            c.point(g[l], y[l]);
          }c.lineEnd(), c.areaEnd();
        }v && (g[n] = +e(h, n, t), y[n] = +i(h, n, t), c.point(r ? +r(h, n, t) : g[n], o ? +o(h, n, t) : y[n]));
      }if (d) return c = null, d + "" || null;
    }function n() {
      return mf().defined(a).curve(f).context(u);
    }var e = _f,
        r = null,
        i = ff(0),
        o = bf,
        a = ff(!0),
        u = null,
        f = yf,
        c = null;return t.x = function (n) {
      return arguments.length ? (e = "function" == typeof n ? n : ff(+n), r = null, t) : e;
    }, t.x0 = function (n) {
      return arguments.length ? (e = "function" == typeof n ? n : ff(+n), t) : e;
    }, t.x1 = function (n) {
      return arguments.length ? (r = null == n ? null : "function" == typeof n ? n : ff(+n), t) : r;
    }, t.y = function (n) {
      return arguments.length ? (i = "function" == typeof n ? n : ff(+n), o = null, t) : i;
    }, t.y0 = function (n) {
      return arguments.length ? (i = "function" == typeof n ? n : ff(+n), t) : i;
    }, t.y1 = function (n) {
      return arguments.length ? (o = null == n ? null : "function" == typeof n ? n : ff(+n), t) : o;
    }, t.lineX0 = t.lineY0 = function () {
      return n().x(e).y(i);
    }, t.lineY1 = function () {
      return n().x(e).y(o);
    }, t.lineX1 = function () {
      return n().x(r).y(i);
    }, t.defined = function (n) {
      return arguments.length ? (a = "function" == typeof n ? n : ff(!!n), t) : a;
    }, t.curve = function (n) {
      return arguments.length ? (f = n, null != u && (c = f(u)), t) : f;
    }, t.context = function (n) {
      return arguments.length ? (null == n ? u = c = null : c = f(u = n), t) : u;
    }, t;
  }function wf(t, n) {
    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
  }function Mf(t) {
    return t;
  }function Af(t) {
    this._curve = t;
  }function Tf(t) {
    function n(n) {
      return new Af(t(n));
    }return n._curve = t, n;
  }function Nf(t) {
    var n = t.curve;return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) {
      return arguments.length ? n(Tf(t)) : n()._curve;
    }, t;
  }function Sf() {
    return Nf(mf().curve(x_));
  }function Ef() {
    var t = xf().curve(x_),
        n = t.curve,
        e = t.lineX0,
        r = t.lineX1,
        i = t.lineY0,
        o = t.lineY1;return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function () {
      return Nf(e());
    }, delete t.lineX0, t.lineEndAngle = function () {
      return Nf(r());
    }, delete t.lineX1, t.lineInnerRadius = function () {
      return Nf(i());
    }, delete t.lineY0, t.lineOuterRadius = function () {
      return Nf(o());
    }, delete t.lineY1, t.curve = function (t) {
      return arguments.length ? n(Tf(t)) : n()._curve;
    }, t;
  }function kf(t, n) {
    return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)];
  }function Cf(t) {
    return t.source;
  }function Pf(t) {
    return t.target;
  }function zf(t) {
    function n() {
      var n,
          u = w_.call(arguments),
          f = e.apply(this, u),
          c = r.apply(this, u);if (a || (a = n = re()), t(a, +i.apply(this, (u[0] = f, u)), +o.apply(this, u), +i.apply(this, (u[0] = c, u)), +o.apply(this, u)), n) return a = null, n + "" || null;
    }var e = Cf,
        r = Pf,
        i = _f,
        o = bf,
        a = null;return n.source = function (t) {
      return arguments.length ? (e = t, n) : e;
    }, n.target = function (t) {
      return arguments.length ? (r = t, n) : r;
    }, n.x = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : ff(+t), n) : i;
    }, n.y = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : ff(+t), n) : o;
    }, n.context = function (t) {
      return arguments.length ? (a = null == t ? null : t, n) : a;
    }, n;
  }function Rf(t, n, e, r, i) {
    t.moveTo(n, e), t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i);
  }function Lf(t, n, e, r, i) {
    t.moveTo(n, e), t.bezierCurveTo(n, e = (e + i) / 2, r, e, r, i);
  }function Df(t, n, e, r, i) {
    var o = kf(n, e),
        a = kf(n, e = (e + i) / 2),
        u = kf(r, e),
        f = kf(r, i);t.moveTo(o[0], o[1]), t.bezierCurveTo(a[0], a[1], u[0], u[1], f[0], f[1]);
  }function Uf() {}function qf(t, n, e) {
    t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6);
  }function Of(t) {
    this._context = t;
  }function Yf(t) {
    this._context = t;
  }function Bf(t) {
    this._context = t;
  }function Ff(t, n) {
    this._basis = new Of(t), this._beta = n;
  }function If(t, n, e) {
    t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2);
  }function jf(t, n) {
    this._context = t, this._k = (1 - n) / 6;
  }function Hf(t, n) {
    this._context = t, this._k = (1 - n) / 6;
  }function Xf(t, n) {
    this._context = t, this._k = (1 - n) / 6;
  }function Gf(t, n, e) {
    var r = t._x1,
        i = t._y1,
        o = t._x2,
        a = t._y2;if (t._l01_a > y_) {
      var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
          f = 3 * t._l01_a * (t._l01_a + t._l12_a);r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / f, i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / f;
    }if (t._l23_a > y_) {
      var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
          s = 3 * t._l23_a * (t._l23_a + t._l12_a);o = (o * c + t._x1 * t._l23_2a - n * t._l12_2a) / s, a = (a * c + t._y1 * t._l23_2a - e * t._l12_2a) / s;
    }t._context.bezierCurveTo(r, i, o, a, t._x2, t._y2);
  }function Vf(t, n) {
    this._context = t, this._alpha = n;
  }function $f(t, n) {
    this._context = t, this._alpha = n;
  }function Wf(t, n) {
    this._context = t, this._alpha = n;
  }function Zf(t) {
    this._context = t;
  }function Qf(t) {
    return t < 0 ? -1 : 1;
  }function Jf(t, n, e) {
    var r = t._x1 - t._x0,
        i = n - t._x1,
        o = (t._y1 - t._y0) / (r || i < 0 && -0),
        a = (e - t._y1) / (i || r < 0 && -0),
        u = (o * i + a * r) / (r + i);return (Qf(o) + Qf(a)) * Math.min(Math.abs(o), Math.abs(a), .5 * Math.abs(u)) || 0;
  }function Kf(t, n) {
    var e = t._x1 - t._x0;return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n;
  }function tc(t, n, e) {
    var r = t._x0,
        i = t._y0,
        o = t._x1,
        a = t._y1,
        u = (o - r) / 3;t._context.bezierCurveTo(r + u, i + u * n, o - u, a - u * e, o, a);
  }function nc(t) {
    this._context = t;
  }function ec(t) {
    this._context = new rc(t);
  }function rc(t) {
    this._context = t;
  }function ic(t) {
    this._context = t;
  }function oc(t) {
    var n,
        e,
        r = t.length - 1,
        i = new Array(r),
        o = new Array(r),
        a = new Array(r);for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) {
      i[n] = 1, o[n] = 4, a[n] = 4 * t[n] + 2 * t[n + 1];
    }for (i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) {
      e = i[n] / o[n - 1], o[n] -= e, a[n] -= e * a[n - 1];
    }for (i[r - 1] = a[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) {
      i[n] = (a[n] - i[n + 1]) / o[n];
    }for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) {
      o[n] = 2 * t[n + 1] - i[n + 1];
    }return [i, o];
  }function ac(t, n) {
    this._context = t, this._t = n;
  }function uc(t, n) {
    if ((i = t.length) > 1) for (var e, r, i, o = 1, a = t[n[0]], u = a.length; o < i; ++o) {
      for (r = a, a = t[n[o]], e = 0; e < u; ++e) {
        a[e][1] += a[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1];
      }
    }
  }function fc(t) {
    for (var n = t.length, e = new Array(n); --n >= 0;) {
      e[n] = n;
    }return e;
  }function cc(t, n) {
    return t[n];
  }function sc(t) {
    var n = t.map(lc);return fc(t).sort(function (t, e) {
      return n[t] - n[e];
    });
  }function lc(t) {
    for (var n, e = 0, r = -1, i = t.length; ++r < i;) {
      (n = +t[r][1]) && (e += n);
    }return e;
  }function hc(t) {
    return function () {
      return t;
    };
  }function dc(t) {
    return t[0];
  }function pc(t) {
    return t[1];
  }function vc() {
    this._ = null;
  }function gc(t) {
    t.U = t.C = t.L = t.R = t.P = t.N = null;
  }function yc(t, n) {
    var e = n,
        r = n.R,
        i = e.U;i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e;
  }function _c(t, n) {
    var e = n,
        r = n.L,
        i = e.U;i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e;
  }function bc(t) {
    for (; t.L;) {
      t = t.L;
    }return t;
  }function mc(t, n, e, r) {
    var i = [null, null],
        o = Q_.push(i) - 1;return i.left = t, i.right = n, e && wc(i, t, n, e), r && wc(i, n, t, r), W_[t.index].halfedges.push(o), W_[n.index].halfedges.push(o), i;
  }function xc(t, n, e) {
    var r = [n, e];return r.left = t, r;
  }function wc(t, n, e, r) {
    t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e);
  }function Mc(t, n, e, r, i) {
    var o,
        a = t[0],
        u = t[1],
        f = a[0],
        c = a[1],
        s = 0,
        l = 1,
        h = u[0] - f,
        d = u[1] - c;if (o = n - f, h || !(o > 0)) {
      if (o /= h, h < 0) {
        if (o < s) return;o < l && (l = o);
      } else if (h > 0) {
        if (o > l) return;o > s && (s = o);
      }if (o = r - f, h || !(o < 0)) {
        if (o /= h, h < 0) {
          if (o > l) return;o > s && (s = o);
        } else if (h > 0) {
          if (o < s) return;o < l && (l = o);
        }if (o = e - c, d || !(o > 0)) {
          if (o /= d, d < 0) {
            if (o < s) return;o < l && (l = o);
          } else if (d > 0) {
            if (o > l) return;o > s && (s = o);
          }if (o = i - c, d || !(o < 0)) {
            if (o /= d, d < 0) {
              if (o > l) return;o > s && (s = o);
            } else if (d > 0) {
              if (o < s) return;o < l && (l = o);
            }return !(s > 0 || l < 1) || (s > 0 && (t[0] = [f + s * h, c + s * d]), l < 1 && (t[1] = [f + l * h, c + l * d]), !0);
          }
        }
      }
    }
  }function Ac(t, n, e, r, i) {
    var o = t[1];if (o) return !0;var a,
        u,
        f = t[0],
        c = t.left,
        s = t.right,
        l = c[0],
        h = c[1],
        d = s[0],
        p = s[1],
        v = (l + d) / 2,
        g = (h + p) / 2;if (p === h) {
      if (v < n || v >= r) return;if (l > d) {
        if (f) {
          if (f[1] >= i) return;
        } else f = [v, e];o = [v, i];
      } else {
        if (f) {
          if (f[1] < e) return;
        } else f = [v, i];o = [v, e];
      }
    } else if (a = (l - d) / (p - h), u = g - a * v, a < -1 || a > 1) {
      if (l > d) {
        if (f) {
          if (f[1] >= i) return;
        } else f = [(e - u) / a, e];o = [(i - u) / a, i];
      } else {
        if (f) {
          if (f[1] < e) return;
        } else f = [(i - u) / a, i];o = [(e - u) / a, e];
      }
    } else if (h < p) {
      if (f) {
        if (f[0] >= r) return;
      } else f = [n, a * n + u];o = [r, a * r + u];
    } else {
      if (f) {
        if (f[0] < n) return;
      } else f = [r, a * r + u];o = [n, a * n + u];
    }return t[0] = f, t[1] = o, !0;
  }function Tc(t, n) {
    var e = t.site,
        r = n.left,
        i = n.right;return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]));
  }function Nc(t, n) {
    return n[+(n.left !== t.site)];
  }function Sc(t, n) {
    return n[+(n.left === t.site)];
  }function Ec(t) {
    var n = t.P,
        e = t.N;if (n && e) {
      var r = n.site,
          i = t.site,
          o = e.site;if (r !== o) {
        var a = i[0],
            u = i[1],
            f = r[0] - a,
            c = r[1] - u,
            s = o[0] - a,
            l = o[1] - u,
            h = 2 * (f * l - c * s);if (!(h >= -nb)) {
          var d = f * f + c * c,
              p = s * s + l * l,
              v = (l * d - c * p) / h,
              g = (f * p - s * d) / h,
              y = J_.pop() || new function () {
            gc(this), this.x = this.y = this.arc = this.site = this.cy = null;
          }();y.arc = t, y.site = i, y.x = v + a, y.y = (y.cy = g + u) + Math.sqrt(v * v + g * g), t.circle = y;for (var _ = null, b = Z_._; b;) {
            if (y.y < b.y || y.y === b.y && y.x <= b.x) {
              if (!b.L) {
                _ = b.P;break;
              }b = b.L;
            } else {
              if (!b.R) {
                _ = b;break;
              }b = b.R;
            }
          }Z_.insert(_, y), _ || (V_ = y);
        }
      }
    }
  }function kc(t) {
    var n = t.circle;n && (n.P || (V_ = n.N), Z_.remove(n), J_.push(n), gc(n), t.circle = null);
  }function Cc(t) {
    var n = K_.pop() || new function () {
      gc(this), this.edge = this.site = this.circle = null;
    }();return n.site = t, n;
  }function Pc(t) {
    kc(t), $_.remove(t), K_.push(t), gc(t);
  }function zc(t) {
    var n = t.circle,
        e = n.x,
        r = n.cy,
        i = [e, r],
        o = t.P,
        a = t.N,
        u = [t];Pc(t);for (var f = o; f.circle && Math.abs(e - f.circle.x) < tb && Math.abs(r - f.circle.cy) < tb;) {
      o = f.P, u.unshift(f), Pc(f), f = o;
    }u.unshift(f), kc(f);for (var c = a; c.circle && Math.abs(e - c.circle.x) < tb && Math.abs(r - c.circle.cy) < tb;) {
      a = c.N, u.push(c), Pc(c), c = a;
    }u.push(c), kc(c);var s,
        l = u.length;for (s = 1; s < l; ++s) {
      c = u[s], f = u[s - 1], wc(c.edge, f.site, c.site, i);
    }f = u[0], (c = u[l - 1]).edge = mc(f.site, c.site, null, i), Ec(f), Ec(c);
  }function Rc(t) {
    for (var n, e, r, i, o = t[0], a = t[1], u = $_._; u;) {
      if ((r = Lc(u, a) - o) > tb) u = u.L;else {
        if (!((i = o - function (t, n) {
          var e = t.N;if (e) return Lc(e, n);var r = t.site;return r[1] === n ? r[0] : 1 / 0;
        }(u, a)) > tb)) {
          r > -tb ? (n = u.P, e = u) : i > -tb ? (n = u, e = u.N) : n = e = u;break;
        }if (!u.R) {
          n = u;break;
        }u = u.R;
      }
    }(function (t) {
      W_[t.index] = { site: t, halfedges: [] };
    })(t);var f = Cc(t);if ($_.insert(n, f), n || e) {
      if (n === e) return kc(n), e = Cc(n.site), $_.insert(f, e), f.edge = e.edge = mc(n.site, f.site), Ec(n), void Ec(e);if (e) {
        kc(n), kc(e);var c = n.site,
            s = c[0],
            l = c[1],
            h = t[0] - s,
            d = t[1] - l,
            p = e.site,
            v = p[0] - s,
            g = p[1] - l,
            y = 2 * (h * g - d * v),
            _ = h * h + d * d,
            b = v * v + g * g,
            m = [(g * _ - d * b) / y + s, (h * b - v * _) / y + l];wc(e.edge, c, p, m), f.edge = mc(c, t, null, m), e.edge = mc(t, p, null, m), Ec(n), Ec(e);
      } else f.edge = mc(n.site, f.site);
    }
  }function Lc(t, n) {
    var e = t.site,
        r = e[0],
        i = e[1],
        o = i - n;if (!o) return r;var a = t.P;if (!a) return -1 / 0;var u = (e = a.site)[0],
        f = e[1],
        c = f - n;if (!c) return u;var s = u - r,
        l = 1 / o - 1 / c,
        h = s / c;return l ? (-h + Math.sqrt(h * h - 2 * l * (s * s / (-2 * c) - f + c / 2 + i - o / 2))) / l + r : (r + u) / 2;
  }function Dc(t, n, e) {
    return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1]);
  }function Uc(t, n) {
    return n[1] - t[1] || n[0] - t[0];
  }function qc(t, n) {
    var e,
        r,
        i,
        o = t.sort(Uc).pop();for (Q_ = [], W_ = new Array(t.length), $_ = new vc(), Z_ = new vc();;) {
      if (i = V_, o && (!i || o[1] < i.y || o[1] === i.y && o[0] < i.x)) o[0] === e && o[1] === r || (Rc(o), e = o[0], r = o[1]), o = t.pop();else {
        if (!i) break;zc(i.arc);
      }
    }if (function () {
      for (var t, n, e, r, i = 0, o = W_.length; i < o; ++i) {
        if ((t = W_[i]) && (r = (n = t.halfedges).length)) {
          var a = new Array(r),
              u = new Array(r);for (e = 0; e < r; ++e) {
            a[e] = e, u[e] = Tc(t, Q_[n[e]]);
          }for (a.sort(function (t, n) {
            return u[n] - u[t];
          }), e = 0; e < r; ++e) {
            u[e] = n[a[e]];
          }for (e = 0; e < r; ++e) {
            n[e] = u[e];
          }
        }
      }
    }(), n) {
      var a = +n[0][0],
          u = +n[0][1],
          f = +n[1][0],
          c = +n[1][1];(function (t, n, e, r) {
        for (var i, o = Q_.length; o--;) {
          Ac(i = Q_[o], t, n, e, r) && Mc(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > tb || Math.abs(i[0][1] - i[1][1]) > tb) || delete Q_[o];
        }
      })(a, u, f, c), function (t, n, e, r) {
        var i,
            o,
            a,
            u,
            f,
            c,
            s,
            l,
            h,
            d,
            p,
            v,
            g = W_.length,
            y = !0;for (i = 0; i < g; ++i) {
          if (o = W_[i]) {
            for (a = o.site, u = (f = o.halfedges).length; u--;) {
              Q_[f[u]] || f.splice(u, 1);
            }for (u = 0, c = f.length; u < c;) {
              p = (d = Sc(o, Q_[f[u]]))[0], v = d[1], l = (s = Nc(o, Q_[f[++u % c]]))[0], h = s[1], (Math.abs(p - l) > tb || Math.abs(v - h) > tb) && (f.splice(u, 0, Q_.push(xc(a, d, Math.abs(p - t) < tb && r - v > tb ? [t, Math.abs(l - t) < tb ? h : r] : Math.abs(v - r) < tb && e - p > tb ? [Math.abs(h - r) < tb ? l : e, r] : Math.abs(p - e) < tb && v - n > tb ? [e, Math.abs(l - e) < tb ? h : n] : Math.abs(v - n) < tb && p - t > tb ? [Math.abs(h - n) < tb ? l : t, n] : null)) - 1), ++c);
            }c && (y = !1);
          }
        }if (y) {
          var _,
              b,
              m,
              x = 1 / 0;for (i = 0, y = null; i < g; ++i) {
            (o = W_[i]) && (m = (_ = (a = o.site)[0] - t) * _ + (b = a[1] - n) * b) < x && (x = m, y = o);
          }if (y) {
            var w = [t, n],
                M = [t, r],
                A = [e, r],
                T = [e, n];y.halfedges.push(Q_.push(xc(a = y.site, w, M)) - 1, Q_.push(xc(a, M, A)) - 1, Q_.push(xc(a, A, T)) - 1, Q_.push(xc(a, T, w)) - 1);
          }
        }for (i = 0; i < g; ++i) {
          (o = W_[i]) && (o.halfedges.length || delete W_[i]);
        }
      }(a, u, f, c);
    }this.edges = Q_, this.cells = W_, $_ = Z_ = Q_ = W_ = null;
  }function Oc(t) {
    return function () {
      return t;
    };
  }function Yc(t, n, e) {
    this.k = t, this.x = n, this.y = e;
  }function Bc(t) {
    return t.__zoom || eb;
  }function Fc() {
    t.event.stopImmediatePropagation();
  }function Ic() {
    t.event.preventDefault(), t.event.stopImmediatePropagation();
  }function jc() {
    return !t.event.button;
  }function Hc() {
    var t,
        n,
        e = this;return e instanceof SVGElement ? (t = (e = e.ownerSVGElement || e).width.baseVal.value, n = e.height.baseVal.value) : (t = e.clientWidth, n = e.clientHeight), [[0, 0], [t, n]];
  }function Xc() {
    return this.__zoom || eb;
  }function Gc() {
    return -t.event.deltaY * (t.event.deltaMode ? 120 : 1) / 500;
  }function Vc() {
    return "ontouchstart" in this;
  }function $c(t, n, e) {
    var r = t.invertX(n[0][0]) - e[0][0],
        i = t.invertX(n[1][0]) - e[1][0],
        o = t.invertY(n[0][1]) - e[0][1],
        a = t.invertY(n[1][1]) - e[1][1];return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a));
  }var Wc = e(n),
      Zc = Wc.right,
      Qc = Wc.left,
      Jc = Array.prototype,
      Kc = Jc.slice,
      ts = Jc.map,
      ns = Math.sqrt(50),
      es = Math.sqrt(10),
      rs = Math.sqrt(2),
      is = Array.prototype.slice,
      os = 1,
      as = 2,
      us = 3,
      fs = 4,
      cs = 1e-6,
      ss = { value: function value() {} };S.prototype = N.prototype = { constructor: S, on: function on(t, n) {
      var e,
          r = this._,
          i = function (t, n) {
        return t.trim().split(/^|\s+/).map(function (t) {
          var e = "",
              r = t.indexOf(".");if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);return { type: t, name: e };
        });
      }(t + "", r),
          o = -1,
          a = i.length;{
        if (!(arguments.length < 2)) {
          if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);for (; ++o < a;) {
            if (e = (t = i[o]).type) r[e] = E(r[e], t.name, n);else if (null == n) for (e in r) {
              r[e] = E(r[e], t.name, null);
            }
          }return this;
        }for (; ++o < a;) {
          if ((e = (t = i[o]).type) && (e = function (t, n) {
            for (var e, r = 0, i = t.length; r < i; ++r) {
              if ((e = t[r]).name === n) return e.value;
            }
          }(r[e], t.name))) return e;
        }
      }
    }, copy: function copy() {
      var t = {},
          n = this._;for (var e in n) {
        t[e] = n[e].slice();
      }return new S(t);
    }, call: function call(t, n) {
      if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), o = 0; o < e; ++o) {
        i[o] = arguments[o + 2];
      }if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (o = 0, e = (r = this._[t]).length; o < e; ++o) {
        r[o].value.apply(n, i);
      }
    }, apply: function apply(t, n, e) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (var r = this._[t], i = 0, o = r.length; i < o; ++i) {
        r[i].value.apply(n, e);
      }
    } };var ls = "http://www.w3.org/1999/xhtml",
      hs = { svg: "http://www.w3.org/2000/svg", xhtml: ls, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
      ds = function ds(t) {
    return function () {
      return this.matches(t);
    };
  };if ("undefined" != typeof document) {
    var ps = document.documentElement;if (!ps.matches) {
      var vs = ps.webkitMatchesSelector || ps.msMatchesSelector || ps.mozMatchesSelector || ps.oMatchesSelector;ds = function ds(t) {
        return function () {
          return vs.call(this, t);
        };
      };
    }
  }var gs = ds;U.prototype = { constructor: U, appendChild: function appendChild(t) {
      return this._parent.insertBefore(t, this._next);
    }, insertBefore: function insertBefore(t, n) {
      return this._parent.insertBefore(t, n);
    }, querySelector: function querySelector(t) {
      return this._parent.querySelector(t);
    }, querySelectorAll: function querySelectorAll(t) {
      return this._parent.querySelectorAll(t);
    } };var ys = "$";H.prototype = { add: function add(t) {
      this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    }, remove: function remove(t) {
      var n = this._names.indexOf(t);n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
    }, contains: function contains(t) {
      return this._names.indexOf(t) >= 0;
    } };var _s = {};if (t.event = null, "undefined" != typeof document) {
    "onmouseenter" in document.documentElement || (_s = { mouseenter: "mouseover", mouseleave: "mouseout" });
  }var bs = [null];ut.prototype = ft.prototype = { constructor: ut, select: function select(t) {
      "function" != typeof t && (t = z(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, a, u = n[i], f = u.length, c = r[i] = new Array(f), s = 0; s < f; ++s) {
          (o = u[s]) && (a = t.call(o, o.__data__, s, u)) && ("__data__" in o && (a.__data__ = o.__data__), c[s] = a);
        }
      }return new ut(r, this._parents);
    }, selectAll: function selectAll(t) {
      "function" != typeof t && (t = L(t));for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o) {
        for (var a, u = n[o], f = u.length, c = 0; c < f; ++c) {
          (a = u[c]) && (r.push(t.call(a, a.__data__, c, u)), i.push(a));
        }
      }return new ut(r, i);
    }, filter: function filter(t) {
      "function" != typeof t && (t = gs(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, a = n[i], u = a.length, f = r[i] = [], c = 0; c < u; ++c) {
          (o = a[c]) && t.call(o, o.__data__, c, a) && f.push(o);
        }
      }return new ut(r, this._parents);
    }, data: function data(t, n) {
      if (!t) return d = new Array(this.size()), c = -1, this.each(function (t) {
        d[++c] = t;
      }), d;var e = n ? O : q,
          r = this._parents,
          i = this._groups;"function" != typeof t && (t = function (t) {
        return function () {
          return t;
        };
      }(t));for (var o = i.length, a = new Array(o), u = new Array(o), f = new Array(o), c = 0; c < o; ++c) {
        var s = r[c],
            l = i[c],
            h = l.length,
            d = t.call(s, s && s.__data__, c, r),
            p = d.length,
            v = u[c] = new Array(p),
            g = a[c] = new Array(p);e(s, l, v, g, f[c] = new Array(h), d, n);for (var y, _, b = 0, m = 0; b < p; ++b) {
          if (y = v[b]) {
            for (b >= m && (m = b + 1); !(_ = g[m]) && ++m < p;) {}y._next = _ || null;
          }
        }
      }return a = new ut(a, r), a._enter = u, a._exit = f, a;
    }, enter: function enter() {
      return new ut(this._enter || this._groups.map(D), this._parents);
    }, exit: function exit() {
      return new ut(this._exit || this._groups.map(D), this._parents);
    }, merge: function merge(t) {
      for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u) {
        for (var f, c = n[u], s = e[u], l = c.length, h = a[u] = new Array(l), d = 0; d < l; ++d) {
          (f = c[d] || s[d]) && (h[d] = f);
        }
      }for (; u < r; ++u) {
        a[u] = n[u];
      }return new ut(a, this._parents);
    }, order: function order() {
      for (var t = this._groups, n = -1, e = t.length; ++n < e;) {
        for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0;) {
          (r = i[o]) && (a && a !== r.nextSibling && a.parentNode.insertBefore(r, a), a = r);
        }
      }return this;
    }, sort: function sort(t) {
      function n(n, e) {
        return n && e ? t(n.__data__, e.__data__) : !n - !e;
      }t || (t = Y);for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
        for (var a, u = e[o], f = u.length, c = i[o] = new Array(f), s = 0; s < f; ++s) {
          (a = u[s]) && (c[s] = a);
        }c.sort(n);
      }return new ut(i, this._parents).order();
    }, call: function call() {
      var t = arguments[0];return arguments[0] = this, t.apply(null, arguments), this;
    }, nodes: function nodes() {
      var t = new Array(this.size()),
          n = -1;return this.each(function () {
        t[++n] = this;
      }), t;
    }, node: function node() {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n) {
        for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
          var a = r[i];if (a) return a;
        }
      }return null;
    }, size: function size() {
      var t = 0;return this.each(function () {
        ++t;
      }), t;
    }, empty: function empty() {
      return !this.node();
    }, each: function each(t) {
      for (var n = this._groups, e = 0, r = n.length; e < r; ++e) {
        for (var i, o = n[e], a = 0, u = o.length; a < u; ++a) {
          (i = o[a]) && t.call(i, i.__data__, a, o);
        }
      }return this;
    }, attr: function attr(t, n) {
      var e = k(t);if (arguments.length < 2) {
        var r = this.node();return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
      }return this.each((null == n ? e.local ? function (t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      } : function (t) {
        return function () {
          this.removeAttribute(t);
        };
      } : "function" == typeof n ? e.local ? function (t, n) {
        return function () {
          var e = n.apply(this, arguments);null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
        };
      } : function (t, n) {
        return function () {
          var e = n.apply(this, arguments);null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
        };
      } : e.local ? function (t, n) {
        return function () {
          this.setAttributeNS(t.space, t.local, n);
        };
      } : function (t, n) {
        return function () {
          this.setAttribute(t, n);
        };
      })(e, n));
    }, style: function style(t, n, e) {
      return arguments.length > 1 ? this.each((null == n ? function (t) {
        return function () {
          this.style.removeProperty(t);
        };
      } : "function" == typeof n ? function (t, n, e) {
        return function () {
          var r = n.apply(this, arguments);null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
        };
      } : function (t, n, e) {
        return function () {
          this.style.setProperty(t, n, e);
        };
      })(t, n, null == e ? "" : e)) : F(this.node(), t);
    }, property: function property(t, n) {
      return arguments.length > 1 ? this.each((null == n ? function (t) {
        return function () {
          delete this[t];
        };
      } : "function" == typeof n ? function (t, n) {
        return function () {
          var e = n.apply(this, arguments);null == e ? delete this[t] : this[t] = e;
        };
      } : function (t, n) {
        return function () {
          this[t] = n;
        };
      })(t, n)) : this.node()[t];
    }, classed: function classed(t, n) {
      var e = I(t + "");if (arguments.length < 2) {
        for (var r = j(this.node()), i = -1, o = e.length; ++i < o;) {
          if (!r.contains(e[i])) return !1;
        }return !0;
      }return this.each(("function" == typeof n ? function (t, n) {
        return function () {
          (n.apply(this, arguments) ? X : G)(this, t);
        };
      } : n ? function (t) {
        return function () {
          X(this, t);
        };
      } : function (t) {
        return function () {
          G(this, t);
        };
      })(e, n));
    }, text: function text(t) {
      return arguments.length ? this.each(null == t ? V : ("function" == typeof t ? function (t) {
        return function () {
          var n = t.apply(this, arguments);this.textContent = null == n ? "" : n;
        };
      } : function (t) {
        return function () {
          this.textContent = t;
        };
      })(t)) : this.node().textContent;
    }, html: function html(t) {
      return arguments.length ? this.each(null == t ? $ : ("function" == typeof t ? function (t) {
        return function () {
          var n = t.apply(this, arguments);this.innerHTML = null == n ? "" : n;
        };
      } : function (t) {
        return function () {
          this.innerHTML = t;
        };
      })(t)) : this.node().innerHTML;
    }, raise: function raise() {
      return this.each(W);
    }, lower: function lower() {
      return this.each(Z);
    }, append: function append(t) {
      var n = "function" == typeof t ? t : C(t);return this.select(function () {
        return this.appendChild(n.apply(this, arguments));
      });
    }, insert: function insert(t, n) {
      var e = "function" == typeof t ? t : C(t),
          r = null == n ? Q : "function" == typeof n ? n : z(n);return this.select(function () {
        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
      });
    }, remove: function remove() {
      return this.each(J);
    }, clone: function clone(t) {
      return this.select(t ? tt : K);
    }, datum: function datum(t) {
      return arguments.length ? this.property("__data__", t) : this.node().__data__;
    }, on: function on(t, n, e) {
      var r,
          i,
          o = function (t) {
        return t.trim().split(/^|\s+/).map(function (t) {
          var n = "",
              e = t.indexOf(".");return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), { type: t, name: n };
        });
      }(t + ""),
          a = o.length;if (!(arguments.length < 2)) {
        for (u = n ? it : rt, null == e && (e = !1), r = 0; r < a; ++r) {
          this.each(u(o[r], n, e));
        }return this;
      }var u = this.node().__on;if (u) for (var f, c = 0, s = u.length; c < s; ++c) {
        for (r = 0, f = u[c]; r < a; ++r) {
          if ((i = o[r]).type === f.type && i.name === f.name) return f.value;
        }
      }
    }, dispatch: function dispatch(t, n) {
      return this.each(("function" == typeof n ? function (t, n) {
        return function () {
          return at(this, t, n.apply(this, arguments));
        };
      } : function (t, n) {
        return function () {
          return at(this, t, n);
        };
      })(t, n));
    } };var ms = 0;lt.prototype = st.prototype = { constructor: lt, get: function get(t) {
      for (var n = this._; !(n in t);) {
        if (!(t = t.parentNode)) return;
      }return t[n];
    }, set: function set(t, n) {
      return t[this._] = n;
    }, remove: function remove(t) {
      return this._ in t && delete t[this._];
    }, toString: function toString() {
      return this._;
    } }, xt.prototype.on = function () {
    var t = this._.on.apply(this._, arguments);return t === this._ ? this : t;
  };var xs = "\\s*([+-]?\\d+)\\s*",
      ws = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      Ms = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      As = /^#([0-9a-f]{3})$/,
      Ts = /^#([0-9a-f]{6})$/,
      Ns = new RegExp("^rgb\\(" + [xs, xs, xs] + "\\)$"),
      Ss = new RegExp("^rgb\\(" + [Ms, Ms, Ms] + "\\)$"),
      Es = new RegExp("^rgba\\(" + [xs, xs, xs, ws] + "\\)$"),
      ks = new RegExp("^rgba\\(" + [Ms, Ms, Ms, ws] + "\\)$"),
      Cs = new RegExp("^hsl\\(" + [ws, Ms, Ms] + "\\)$"),
      Ps = new RegExp("^hsla\\(" + [ws, Ms, Ms, ws] + "\\)$"),
      zs = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };Nt(Et, kt, { displayable: function displayable() {
      return this.rgb().displayable();
    }, toString: function toString() {
      return this.rgb() + "";
    } }), Nt(Lt, Rt, St(Et, { brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Lt(this.r * t, this.g * t, this.b * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new Lt(this.r * t, this.g * t, this.b * t, this.opacity);
    }, rgb: function rgb() {
      return this;
    }, displayable: function displayable() {
      return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
    }, toString: function toString() {
      var t = this.opacity;return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
    } })), Nt(qt, Ut, St(Et, { brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new qt(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new qt(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = this.h % 360 + 360 * (this.h < 0),
          n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          r = e + (e < .5 ? e : 1 - e) * n,
          i = 2 * e - r;return new Lt(Ot(t >= 240 ? t - 240 : t + 120, i, r), Ot(t, i, r), Ot(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
    }, displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    } }));var Rs = Math.PI / 180,
      Ls = 180 / Math.PI,
      Ds = .95047,
      Us = 1,
      qs = 1.08883,
      Os = 4 / 29,
      Ys = 6 / 29,
      Bs = 3 * Ys * Ys,
      Fs = Ys * Ys * Ys;Nt(Ft, Bt, St(Et, { brighter: function brighter(t) {
      return new Ft(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, darker: function darker(t) {
      return new Ft(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, rgb: function rgb() {
      var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200;return t = Us * jt(t), n = Ds * jt(n), e = qs * jt(e), new Lt(Ht(3.2404542 * n - 1.5371385 * t - .4985314 * e), Ht(-.969266 * n + 1.8760108 * t + .041556 * e), Ht(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity);
    } })), Nt(Vt, Gt, St(Et, { brighter: function brighter(t) {
      return new Vt(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
    }, darker: function darker(t) {
      return new Vt(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
    }, rgb: function rgb() {
      return Yt(this).rgb();
    } }));var Is = -.29227,
      js = -.90649,
      Hs = 1.97294,
      Xs = Hs * js,
      Gs = 1.78277 * Hs,
      Vs = 1.78277 * Is - -.14861 * js;Nt(Wt, $t, St(Et, { brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Wt(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new Wt(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * Rs,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          r = Math.cos(t),
          i = Math.sin(t);return new Lt(255 * (n + e * (-.14861 * r + 1.78277 * i)), 255 * (n + e * (Is * r + js * i)), 255 * (n + e * (Hs * r)), this.opacity);
    } }));var $s,
      Ws,
      Zs,
      Qs,
      Js,
      Ks,
      tl = function t(n) {
    function e(t, n) {
      var e = r((t = Rt(t)).r, (n = Rt(n)).r),
          i = r(t.g, n.g),
          o = r(t.b, n.b),
          a = rn(t.opacity, n.opacity);return function (n) {
        return t.r = e(n), t.g = i(n), t.b = o(n), t.opacity = a(n), t + "";
      };
    }var r = en(n);return e.gamma = t, e;
  }(1),
      nl = on(Qt),
      el = on(Jt),
      rl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      il = new RegExp(rl.source, "g"),
      ol = 180 / Math.PI,
      al = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 },
      ul = pn(function (t) {
    return "none" === t ? al : ($s || ($s = document.createElement("DIV"), Ws = document.documentElement, Zs = document.defaultView), $s.style.transform = t, t = Zs.getComputedStyle(Ws.appendChild($s), null).getPropertyValue("transform"), Ws.removeChild($s), t = t.slice(7, -1).split(","), dn(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
  }, "px, ", "px)", "deg)"),
      fl = pn(function (t) {
    return null == t ? al : (Qs || (Qs = document.createElementNS("http://www.w3.org/2000/svg", "g")), Qs.setAttribute("transform", t), (t = Qs.transform.baseVal.consolidate()) ? (t = t.matrix, dn(t.a, t.b, t.c, t.d, t.e, t.f)) : al);
  }, ", ", ")", ")"),
      cl = Math.SQRT2,
      sl = 2,
      ll = 4,
      hl = 1e-12,
      dl = yn(nn),
      pl = yn(rn),
      vl = _n(nn),
      gl = _n(rn),
      yl = bn(nn),
      _l = bn(rn),
      bl = 0,
      ml = 0,
      xl = 0,
      wl = 1e3,
      Ml = 0,
      Al = 0,
      Tl = 0,
      Nl = "object" == (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && performance.now ? performance : Date,
      Sl = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
    setTimeout(t, 17);
  };wn.prototype = Mn.prototype = { constructor: wn, restart: function restart(t, n, e) {
      if ("function" != typeof t) throw new TypeError("callback is not a function");e = (null == e ? mn() : +e) + (null == n ? 0 : +n), this._next || Ks === this || (Ks ? Ks._next = this : Js = this, Ks = this), this._call = t, this._time = e, Sn();
    }, stop: function stop() {
      this._call && (this._call = null, this._time = 1 / 0, Sn());
    } };var El = N("start", "end", "interrupt"),
      kl = [],
      Cl = 0,
      Pl = 1,
      zl = 2,
      Rl = 3,
      Ll = 4,
      Dl = 5,
      Ul = 6,
      ql = ft.prototype.constructor,
      Ol = 0,
      Yl = ft.prototype;Un.prototype = qn.prototype = { constructor: Un, select: function select(t) {
      var n = this._name,
          e = this._id;"function" != typeof t && (t = z(t));for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a) {
        for (var u, f, c = r[a], s = c.length, l = o[a] = new Array(s), h = 0; h < s; ++h) {
          (u = c[h]) && (f = t.call(u, u.__data__, h, c)) && ("__data__" in u && (f.__data__ = u.__data__), l[h] = f, kn(l[h], n, e, h, l, zn(u, e)));
        }
      }return new Un(o, this._parents, n, e);
    }, selectAll: function selectAll(t) {
      var n = this._name,
          e = this._id;"function" != typeof t && (t = L(t));for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u) {
        for (var f, c = r[u], s = c.length, l = 0; l < s; ++l) {
          if (f = c[l]) {
            for (var h, d = t.call(f, f.__data__, l, c), p = zn(f, e), v = 0, g = d.length; v < g; ++v) {
              (h = d[v]) && kn(h, n, e, v, d, p);
            }o.push(d), a.push(f);
          }
        }
      }return new Un(o, a, n, e);
    }, filter: function filter(t) {
      "function" != typeof t && (t = gs(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, a = n[i], u = a.length, f = r[i] = [], c = 0; c < u; ++c) {
          (o = a[c]) && t.call(o, o.__data__, c, a) && f.push(o);
        }
      }return new Un(r, this._parents, this._name, this._id);
    }, merge: function merge(t) {
      if (t._id !== this._id) throw new Error();for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u) {
        for (var f, c = n[u], s = e[u], l = c.length, h = a[u] = new Array(l), d = 0; d < l; ++d) {
          (f = c[d] || s[d]) && (h[d] = f);
        }
      }for (; u < r; ++u) {
        a[u] = n[u];
      }return new Un(a, this._parents, this._name, this._id);
    }, selection: function selection() {
      return new ql(this._groups, this._parents);
    }, transition: function transition() {
      for (var t = this._name, n = this._id, e = On(), r = this._groups, i = r.length, o = 0; o < i; ++o) {
        for (var a, u = r[o], f = u.length, c = 0; c < f; ++c) {
          if (a = u[c]) {
            var s = zn(a, n);kn(a, t, e, c, u, { time: s.time + s.delay + s.duration, delay: 0, duration: s.duration, ease: s.ease });
          }
        }
      }return new Un(r, this._parents, t, e);
    }, call: Yl.call, nodes: Yl.nodes, node: Yl.node, size: Yl.size, empty: Yl.empty, each: Yl.each, on: function on(t, n) {
      var e = this._id;return arguments.length < 2 ? zn(this.node(), e).on.on(t) : this.each(function (t, n, e) {
        var r,
            i,
            o = function (t) {
          return (t + "").trim().split(/^|\s+/).every(function (t) {
            var n = t.indexOf(".");return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
          });
        }(n) ? Cn : Pn;return function () {
          var a = o(this, t),
              u = a.on;u !== r && (i = (r = u).copy()).on(n, e), a.on = i;
        };
      }(e, t, n));
    }, attr: function attr(t, n) {
      var e = k(t),
          r = "transform" === e ? fl : Dn;return this.attrTween(t, "function" == typeof n ? (e.local ? function (t, n, e) {
        var r, i, o;return function () {
          var a,
              u = e(this);if (null != u) return (a = this.getAttributeNS(t.space, t.local)) === u ? null : a === r && u === i ? o : o = n(r = a, i = u);this.removeAttributeNS(t.space, t.local);
        };
      } : function (t, n, e) {
        var r, i, o;return function () {
          var a,
              u = e(this);if (null != u) return (a = this.getAttribute(t)) === u ? null : a === r && u === i ? o : o = n(r = a, i = u);this.removeAttribute(t);
        };
      })(e, r, Ln(this, "attr." + t, n)) : null == n ? (e.local ? function (t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      } : function (t) {
        return function () {
          this.removeAttribute(t);
        };
      })(e) : (e.local ? function (t, n, e) {
        var r, i;return function () {
          var o = this.getAttributeNS(t.space, t.local);return o === e ? null : o === r ? i : i = n(r = o, e);
        };
      } : function (t, n, e) {
        var r, i;return function () {
          var o = this.getAttribute(t);return o === e ? null : o === r ? i : i = n(r = o, e);
        };
      })(e, r, n + ""));
    }, attrTween: function attrTween(t, n) {
      var e = "attr." + t;if (arguments.length < 2) return (e = this.tween(e)) && e._value;if (null == n) return this.tween(e, null);if ("function" != typeof n) throw new Error();var r = k(t);return this.tween(e, (r.local ? function (t, n) {
        function e() {
          var e = this,
              r = n.apply(e, arguments);return r && function (n) {
            e.setAttributeNS(t.space, t.local, r(n));
          };
        }return e._value = n, e;
      } : function (t, n) {
        function e() {
          var e = this,
              r = n.apply(e, arguments);return r && function (n) {
            e.setAttribute(t, r(n));
          };
        }return e._value = n, e;
      })(r, n));
    }, style: function style(t, n, e) {
      var r = "transform" == (t += "") ? ul : Dn;return null == n ? this.styleTween(t, function (t, n) {
        var e, r, i;return function () {
          var o = F(this, t),
              a = (this.style.removeProperty(t), F(this, t));return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
        };
      }(t, r)).on("end.style." + t, function (t) {
        return function () {
          this.style.removeProperty(t);
        };
      }(t)) : this.styleTween(t, "function" == typeof n ? function (t, n, e) {
        var r, i, o;return function () {
          var a = F(this, t),
              u = e(this);return null == u && (this.style.removeProperty(t), u = F(this, t)), a === u ? null : a === r && u === i ? o : o = n(r = a, i = u);
        };
      }(t, r, Ln(this, "style." + t, n)) : function (t, n, e) {
        var r, i;return function () {
          var o = F(this, t);return o === e ? null : o === r ? i : i = n(r = o, e);
        };
      }(t, r, n + ""), e);
    }, styleTween: function styleTween(t, n, e) {
      var r = "style." + (t += "");if (arguments.length < 2) return (r = this.tween(r)) && r._value;if (null == n) return this.tween(r, null);if ("function" != typeof n) throw new Error();return this.tween(r, function (t, n, e) {
        function r() {
          var r = this,
              i = n.apply(r, arguments);return i && function (n) {
            r.style.setProperty(t, i(n), e);
          };
        }return r._value = n, r;
      }(t, n, null == e ? "" : e));
    }, text: function text(t) {
      return this.tween("text", "function" == typeof t ? function (t) {
        return function () {
          var n = t(this);this.textContent = null == n ? "" : n;
        };
      }(Ln(this, "text", t)) : function (t) {
        return function () {
          this.textContent = t;
        };
      }(null == t ? "" : t + ""));
    }, remove: function remove() {
      return this.on("end.remove", function (t) {
        return function () {
          var n = this.parentNode;for (var e in this.__transition) {
            if (+e !== t) return;
          }n && n.removeChild(this);
        };
      }(this._id));
    }, tween: function tween(t, n) {
      var e = this._id;if (t += "", arguments.length < 2) {
        for (var r, i = zn(this.node(), e).tween, o = 0, a = i.length; o < a; ++o) {
          if ((r = i[o]).name === t) return r.value;
        }return null;
      }return this.each((null == n ? function (t, n) {
        var e, r;return function () {
          var i = Pn(this, t),
              o = i.tween;if (o !== e) for (var a = 0, u = (r = e = o).length; a < u; ++a) {
            if (r[a].name === n) {
              (r = r.slice()).splice(a, 1);break;
            }
          }i.tween = r;
        };
      } : function (t, n, e) {
        var r, i;if ("function" != typeof e) throw new Error();return function () {
          var o = Pn(this, t),
              a = o.tween;if (a !== r) {
            i = (r = a).slice();for (var u = { name: n, value: e }, f = 0, c = i.length; f < c; ++f) {
              if (i[f].name === n) {
                i[f] = u;break;
              }
            }f === c && i.push(u);
          }o.tween = i;
        };
      })(e, t, n));
    }, delay: function delay(t) {
      var n = this._id;return arguments.length ? this.each(("function" == typeof t ? function (t, n) {
        return function () {
          Cn(this, t).delay = +n.apply(this, arguments);
        };
      } : function (t, n) {
        return n = +n, function () {
          Cn(this, t).delay = n;
        };
      })(n, t)) : zn(this.node(), n).delay;
    }, duration: function duration(t) {
      var n = this._id;return arguments.length ? this.each(("function" == typeof t ? function (t, n) {
        return function () {
          Pn(this, t).duration = +n.apply(this, arguments);
        };
      } : function (t, n) {
        return n = +n, function () {
          Pn(this, t).duration = n;
        };
      })(n, t)) : zn(this.node(), n).duration;
    }, ease: function ease(t) {
      var n = this._id;return arguments.length ? this.each(function (t, n) {
        if ("function" != typeof n) throw new Error();return function () {
          Pn(this, t).ease = n;
        };
      }(n, t)) : zn(this.node(), n).ease;
    } };var Bl = function t(n) {
    function e(t) {
      return Math.pow(t, n);
    }return n = +n, e.exponent = t, e;
  }(3),
      Fl = function t(n) {
    function e(t) {
      return 1 - Math.pow(1 - t, n);
    }return n = +n, e.exponent = t, e;
  }(3),
      Il = function t(n) {
    function e(t) {
      return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
    }return n = +n, e.exponent = t, e;
  }(3),
      jl = Math.PI,
      Hl = jl / 2,
      Xl = 4 / 11,
      Gl = 6 / 11,
      Vl = 8 / 11,
      $l = .75,
      Wl = 9 / 11,
      Zl = 10 / 11,
      Ql = .9375,
      Jl = 21 / 22,
      Kl = 63 / 64,
      th = 1 / Xl / Xl,
      nh = function t(n) {
    function e(t) {
      return t * t * ((n + 1) * t - n);
    }return n = +n, e.overshoot = t, e;
  }(1.70158),
      eh = function t(n) {
    function e(t) {
      return --t * t * ((n + 1) * t + n) + 1;
    }return n = +n, e.overshoot = t, e;
  }(1.70158),
      rh = function t(n) {
    function e(t) {
      return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2;
    }return n = +n, e.overshoot = t, e;
  }(1.70158),
      ih = 2 * Math.PI,
      oh = function t(n, e) {
    function r(t) {
      return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e);
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= ih);return r.amplitude = function (n) {
      return t(n, e * ih);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(1, .3),
      ah = function t(n, e) {
    function r(t) {
      return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e);
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= ih);return r.amplitude = function (n) {
      return t(n, e * ih);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(1, .3),
      uh = function t(n, e) {
    function r(t) {
      return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2;
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= ih);return r.amplitude = function (n) {
      return t(n, e * ih);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(1, .3),
      fh = { time: null, delay: 0, duration: 250, ease: Bn };ft.prototype.interrupt = function (t) {
    return this.each(function () {
      Rn(this, t);
    });
  }, ft.prototype.transition = function (t) {
    var n, e;t instanceof Un ? (n = t._id, t = t._name) : (n = On(), (e = fh).time = mn(), t = null == t ? null : t + "");for (var r = this._groups, i = r.length, o = 0; o < i; ++o) {
      for (var a, u = r[o], f = u.length, c = 0; c < f; ++c) {
        (a = u[c]) && kn(a, t, n, c, u, e || Xn(a, n));
      }
    }return new Un(r, this._parents, t, n);
  };var ch = [null],
      sh = { name: "drag" },
      lh = { name: "space" },
      hh = { name: "handle" },
      dh = { name: "center" },
      ph = { name: "x", handles: ["e", "w"].map(Wn), input: function input(t, n) {
      return t && [[t[0], n[0][1]], [t[1], n[1][1]]];
    }, output: function output(t) {
      return t && [t[0][0], t[1][0]];
    } },
      vh = { name: "y", handles: ["n", "s"].map(Wn), input: function input(t, n) {
      return t && [[n[0][0], t[0]], [n[1][0], t[1]]];
    }, output: function output(t) {
      return t && [t[0][1], t[1][1]];
    } },
      gh = { name: "xy", handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Wn), input: function input(t) {
      return t;
    }, output: function output(t) {
      return t;
    } },
      yh = { overlay: "crosshair", selection: "move", n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize" },
      _h = { e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se" },
      bh = { n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw" },
      mh = { overlay: 1, selection: 1, n: null, e: 1, s: null, w: -1, nw: -1, ne: 1, se: 1, sw: -1 },
      xh = { overlay: 1, selection: 1, n: -1, e: null, s: 1, w: null, nw: -1, ne: -1, se: 1, sw: 1 },
      wh = Math.cos,
      Mh = Math.sin,
      Ah = Math.PI,
      Th = Ah / 2,
      Nh = 2 * Ah,
      Sh = Math.max,
      Eh = Array.prototype.slice,
      kh = Math.PI,
      Ch = 2 * kh,
      Ph = Ch - 1e-6;ee.prototype = re.prototype = { constructor: ee, moveTo: function moveTo(t, n) {
      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
    }, closePath: function closePath() {
      null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
    }, lineTo: function lineTo(t, n) {
      this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
    }, quadraticCurveTo: function quadraticCurveTo(t, n, e, r) {
      this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r);
    }, bezierCurveTo: function bezierCurveTo(t, n, e, r, i, o) {
      this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o);
    }, arcTo: function arcTo(t, n, e, r, i) {
      t = +t, n = +n, e = +e, r = +r, i = +i;var o = this._x1,
          a = this._y1,
          u = e - t,
          f = r - n,
          c = o - t,
          s = a - n,
          l = c * c + s * s;if (i < 0) throw new Error("negative radius: " + i);if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);else if (l > 1e-6) {
        if (Math.abs(s * u - f * c) > 1e-6 && i) {
          var h = e - o,
              d = r - a,
              p = u * u + f * f,
              v = h * h + d * d,
              g = Math.sqrt(p),
              y = Math.sqrt(l),
              _ = i * Math.tan((kh - Math.acos((p + l - v) / (2 * g * y))) / 2),
              b = _ / y,
              m = _ / g;Math.abs(b - 1) > 1e-6 && (this._ += "L" + (t + b * c) + "," + (n + b * s)), this._ += "A" + i + "," + i + ",0,0," + +(s * h > c * d) + "," + (this._x1 = t + m * u) + "," + (this._y1 = n + m * f);
        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
      } else ;
    }, arc: function arc(t, n, e, r, i, o) {
      t = +t, n = +n;var a = (e = +e) * Math.cos(r),
          u = e * Math.sin(r),
          f = t + a,
          c = n + u,
          s = 1 ^ o,
          l = o ? r - i : i - r;if (e < 0) throw new Error("negative radius: " + e);null === this._x1 ? this._ += "M" + f + "," + c : (Math.abs(this._x1 - f) > 1e-6 || Math.abs(this._y1 - c) > 1e-6) && (this._ += "L" + f + "," + c), e && (l < 0 && (l = l % Ch + Ch), l > Ph ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - a) + "," + (n - u) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = f) + "," + (this._y1 = c) : l > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(l >= kh) + "," + s + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))));
    }, rect: function rect(t, n, e, r) {
      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z";
    }, toString: function toString() {
      return this._;
    } };ce.prototype = se.prototype = { constructor: ce, has: function has(t) {
      return "$" + t in this;
    }, get: function get(t) {
      return this["$" + t];
    }, set: function set(t, n) {
      return this["$" + t] = n, this;
    }, remove: function remove(t) {
      var n = "$" + t;return n in this && delete this[n];
    }, clear: function clear() {
      for (var t in this) {
        "$" === t[0] && delete this[t];
      }
    }, keys: function keys() {
      var t = [];for (var n in this) {
        "$" === n[0] && t.push(n.slice(1));
      }return t;
    }, values: function values() {
      var t = [];for (var n in this) {
        "$" === n[0] && t.push(this[n]);
      }return t;
    }, entries: function entries() {
      var t = [];for (var n in this) {
        "$" === n[0] && t.push({ key: n.slice(1), value: this[n] });
      }return t;
    }, size: function size() {
      var t = 0;for (var n in this) {
        "$" === n[0] && ++t;
      }return t;
    }, empty: function empty() {
      for (var t in this) {
        if ("$" === t[0]) return !1;
      }return !0;
    }, each: function each(t) {
      for (var n in this) {
        "$" === n[0] && t(this[n], n.slice(1), this);
      }
    } };var zh = se.prototype;ve.prototype = ge.prototype = { constructor: ve, has: zh.has, add: function add(t) {
      return t += "", this["$" + t] = t, this;
    }, remove: zh.remove, clear: zh.clear, values: zh.keys, size: zh.size, empty: zh.empty, each: zh.each };var Rh = Array.prototype.slice,
      Lh = [[], [[[1, 1.5], [.5, 1]]], [[[1.5, 1], [1, 1.5]]], [[[1.5, 1], [.5, 1]]], [[[1, .5], [1.5, 1]]], [[[1, 1.5], [.5, 1]], [[1, .5], [1.5, 1]]], [[[1, .5], [1, 1.5]]], [[[1, .5], [.5, 1]]], [[[.5, 1], [1, .5]]], [[[1, 1.5], [1, .5]]], [[[.5, 1], [1, .5]], [[1.5, 1], [1, 1.5]]], [[[1.5, 1], [1, .5]]], [[[.5, 1], [1.5, 1]]], [[[1, 1.5], [1.5, 1]]], [[[.5, 1], [1, 1.5]]], []],
      Dh = {},
      Uh = {},
      qh = 34,
      Oh = 10,
      Yh = 13,
      Bh = Se(","),
      Fh = Bh.parse,
      Ih = Bh.parseRows,
      jh = Bh.format,
      Hh = Bh.formatRows,
      Xh = Se("\t"),
      Gh = Xh.parse,
      Vh = Xh.parseRows,
      $h = Xh.format,
      Wh = Xh.formatRows,
      Zh = ze(Fh),
      Qh = ze(Gh),
      Jh = Le("application/xml"),
      Kh = Le("text/html"),
      td = Le("image/svg+xml"),
      nd = Fe.prototype = Ie.prototype;nd.copy = function () {
    var t,
        n,
        e = new Ie(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        r = this._root;if (!r) return e;if (!r.length) return e._root = je(r), e;for (t = [{ source: r, target: e._root = new Array(4) }]; r = t.pop();) {
      for (var i = 0; i < 4; ++i) {
        (n = r.source[i]) && (n.length ? t.push({ source: n, target: r.target[i] = new Array(4) }) : r.target[i] = je(n));
      }
    }return e;
  }, nd.add = function (t) {
    var n = +this._x.call(null, t),
        e = +this._y.call(null, t);return qe(this.cover(n, e), n, e, t);
  }, nd.addAll = function (t) {
    var n,
        e,
        r,
        i,
        o = t.length,
        a = new Array(o),
        u = new Array(o),
        f = 1 / 0,
        c = 1 / 0,
        s = -1 / 0,
        l = -1 / 0;for (e = 0; e < o; ++e) {
      isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (a[e] = r, u[e] = i, r < f && (f = r), r > s && (s = r), i < c && (c = i), i > l && (l = i));
    }for (s < f && (f = this._x0, s = this._x1), l < c && (c = this._y0, l = this._y1), this.cover(f, c).cover(s, l), e = 0; e < o; ++e) {
      qe(this, a[e], u[e], t[e]);
    }return this;
  }, nd.cover = function (t, n) {
    if (isNaN(t = +t) || isNaN(n = +n)) return this;var e = this._x0,
        r = this._y0,
        i = this._x1,
        o = this._y1;if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1;else {
      if (!(e > t || t > i || r > n || n > o)) return this;var a,
          u,
          f = i - e,
          c = this._root;switch (u = (n < (r + o) / 2) << 1 | t < (e + i) / 2) {case 0:
          do {
            a = new Array(4), a[u] = c, c = a;
          } while ((f *= 2, i = e + f, o = r + f, t > i || n > o));break;case 1:
          do {
            a = new Array(4), a[u] = c, c = a;
          } while ((f *= 2, e = i - f, o = r + f, e > t || n > o));break;case 2:
          do {
            a = new Array(4), a[u] = c, c = a;
          } while ((f *= 2, i = e + f, r = o - f, t > i || r > n));break;case 3:
          do {
            a = new Array(4), a[u] = c, c = a;
          } while ((f *= 2, e = i - f, r = o - f, e > t || r > n));}this._root && this._root.length && (this._root = c);
    }return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this;
  }, nd.data = function () {
    var t = [];return this.visit(function (n) {
      if (!n.length) do {
        t.push(n.data);
      } while (n = n.next);
    }), t;
  }, nd.extent = function (t) {
    return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
  }, nd.find = function (t, n, e) {
    var r,
        i,
        o,
        a,
        u,
        f,
        c,
        s = this._x0,
        l = this._y0,
        h = this._x1,
        d = this._y1,
        p = [],
        v = this._root;for (v && p.push(new Oe(v, s, l, h, d)), null == e ? e = 1 / 0 : (s = t - e, l = n - e, h = t + e, d = n + e, e *= e); f = p.pop();) {
      if (!(!(v = f.node) || (i = f.x0) > h || (o = f.y0) > d || (a = f.x1) < s || (u = f.y1) < l)) if (v.length) {
        var g = (i + a) / 2,
            y = (o + u) / 2;p.push(new Oe(v[3], g, y, a, u), new Oe(v[2], i, y, g, u), new Oe(v[1], g, o, a, y), new Oe(v[0], i, o, g, y)), (c = (n >= y) << 1 | t >= g) && (f = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - c], p[p.length - 1 - c] = f);
      } else {
        var _ = t - +this._x.call(null, v.data),
            b = n - +this._y.call(null, v.data),
            m = _ * _ + b * b;if (m < e) {
          var x = Math.sqrt(e = m);s = t - x, l = n - x, h = t + x, d = n + x, r = v.data;
        }
      }
    }return r;
  }, nd.remove = function (t) {
    if (isNaN(o = +this._x.call(null, t)) || isNaN(a = +this._y.call(null, t))) return this;var n,
        e,
        r,
        i,
        o,
        a,
        u,
        f,
        c,
        s,
        l,
        h,
        d = this._root,
        p = this._x0,
        v = this._y0,
        g = this._x1,
        y = this._y1;if (!d) return this;if (d.length) for (;;) {
      if ((c = o >= (u = (p + g) / 2)) ? p = u : g = u, (s = a >= (f = (v + y) / 2)) ? v = f : y = f, n = d, !(d = d[l = s << 1 | c])) return this;if (!d.length) break;(n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l);
    }for (; d.data !== t;) {
      if (r = d, !(d = d.next)) return this;
    }return (i = d.next) && delete d.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[h] = d : this._root = d), this) : (this._root = i, this);
  }, nd.removeAll = function (t) {
    for (var n = 0, e = t.length; n < e; ++n) {
      this.remove(t[n]);
    }return this;
  }, nd.root = function () {
    return this._root;
  }, nd.size = function () {
    var t = 0;return this.visit(function (n) {
      if (!n.length) do {
        ++t;
      } while (n = n.next);
    }), t;
  }, nd.visit = function (t) {
    var n,
        e,
        r,
        i,
        o,
        a,
        u = [],
        f = this._root;for (f && u.push(new Oe(f, this._x0, this._y0, this._x1, this._y1)); n = u.pop();) {
      if (!t(f = n.node, r = n.x0, i = n.y0, o = n.x1, a = n.y1) && f.length) {
        var c = (r + o) / 2,
            s = (i + a) / 2;(e = f[3]) && u.push(new Oe(e, c, s, o, a)), (e = f[2]) && u.push(new Oe(e, r, s, c, a)), (e = f[1]) && u.push(new Oe(e, c, i, o, s)), (e = f[0]) && u.push(new Oe(e, r, i, c, s));
      }
    }return this;
  }, nd.visitAfter = function (t) {
    var n,
        e = [],
        r = [];for (this._root && e.push(new Oe(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
      var i = n.node;if (i.length) {
        var o,
            a = n.x0,
            u = n.y0,
            f = n.x1,
            c = n.y1,
            s = (a + f) / 2,
            l = (u + c) / 2;(o = i[0]) && e.push(new Oe(o, a, u, s, l)), (o = i[1]) && e.push(new Oe(o, s, u, f, l)), (o = i[2]) && e.push(new Oe(o, a, l, s, c)), (o = i[3]) && e.push(new Oe(o, s, l, f, c));
      }r.push(n);
    }for (; n = r.pop();) {
      t(n.node, n.x0, n.y0, n.x1, n.y1);
    }return this;
  }, nd.x = function (t) {
    return arguments.length ? (this._x = t, this) : this._x;
  }, nd.y = function (t) {
    return arguments.length ? (this._y = t, this) : this._y;
  };var ed,
      rd = 10,
      id = Math.PI * (3 - Math.sqrt(5)),
      od = { "": function _(t, n) {
      t: for (var e, r = (t = t.toPrecision(n)).length, i = 1, o = -1; i < r; ++i) {
        switch (t[i]) {case ".":
            o = e = i;break;case "0":
            0 === o && (o = i), e = i;break;case "e":
            break t;default:
            o > 0 && (o = 0);}
      }return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t;
    }, "%": function _(t, n) {
      return (100 * t).toFixed(n);
    }, b: function b(t) {
      return Math.round(t).toString(2);
    }, c: function c(t) {
      return t + "";
    }, d: function d(t) {
      return Math.round(t).toString(10);
    }, e: function e(t, n) {
      return t.toExponential(n);
    }, f: function f(t, n) {
      return t.toFixed(n);
    }, g: function g(t, n) {
      return t.toPrecision(n);
    }, o: function o(t) {
      return Math.round(t).toString(8);
    }, p: function p(t, n) {
      return Je(100 * t, n);
    }, r: Je, s: function s(t, n) {
      var e = Ze(t, n);if (!e) return t + "";var r = e[0],
          i = e[1],
          o = i - (ed = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          a = r.length;return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Ze(t, Math.max(0, n + o - 1))[0];
    }, X: function X(t) {
      return Math.round(t).toString(16).toUpperCase();
    }, x: function x(t) {
      return Math.round(t).toString(16);
    } },
      ad = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;Ke.prototype = tr.prototype, tr.prototype.toString = function () {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type;
  };var ud,
      fd = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];rr({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] }), fr.prototype = { constructor: fr, reset: function reset() {
      this.s = this.t = 0;
    }, add: function add(t) {
      cr(Bd, t, this.t), cr(this, Bd.s, this.s), this.s ? this.t += Bd.t : this.s = Bd.t;
    }, valueOf: function valueOf() {
      return this.s;
    } };var cd,
      sd,
      ld,
      hd,
      dd,
      pd,
      vd,
      gd,
      yd,
      _d,
      bd,
      md,
      xd,
      wd,
      Md,
      Ad,
      Td,
      Nd,
      Sd,
      Ed,
      kd,
      Cd,
      Pd,
      zd,
      Rd,
      Ld,
      Dd,
      Ud,
      qd,
      Od,
      Yd,
      Bd = new fr(),
      Fd = 1e-6,
      Id = 1e-12,
      jd = Math.PI,
      Hd = jd / 2,
      Xd = jd / 4,
      Gd = 2 * jd,
      Vd = 180 / jd,
      $d = jd / 180,
      Wd = Math.abs,
      Zd = Math.atan,
      Qd = Math.atan2,
      Jd = Math.cos,
      Kd = Math.ceil,
      tp = Math.exp,
      np = Math.log,
      ep = Math.pow,
      rp = Math.sin,
      ip = Math.sign || function (t) {
    return t > 0 ? 1 : t < 0 ? -1 : 0;
  },
      op = Math.sqrt,
      ap = Math.tan,
      up = { Feature: function Feature(t, n) {
      pr(t.geometry, n);
    }, FeatureCollection: function FeatureCollection(t, n) {
      for (var e = t.features, r = -1, i = e.length; ++r < i;) {
        pr(e[r].geometry, n);
      }
    } },
      fp = { Sphere: function Sphere(t, n) {
      n.sphere();
    }, Point: function Point(t, n) {
      t = t.coordinates, n.point(t[0], t[1], t[2]);
    }, MultiPoint: function MultiPoint(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        t = e[r], n.point(t[0], t[1], t[2]);
      }
    }, LineString: function LineString(t, n) {
      vr(t.coordinates, n, 0);
    }, MultiLineString: function MultiLineString(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        vr(e[r], n, 0);
      }
    }, Polygon: function Polygon(t, n) {
      gr(t.coordinates, n);
    }, MultiPolygon: function MultiPolygon(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        gr(e[r], n);
      }
    }, GeometryCollection: function GeometryCollection(t, n) {
      for (var e = t.geometries, r = -1, i = e.length; ++r < i;) {
        pr(e[r], n);
      }
    } },
      cp = ur(),
      sp = ur(),
      lp = { point: dr, lineStart: dr, lineEnd: dr, polygonStart: function polygonStart() {
      cp.reset(), lp.lineStart = _r, lp.lineEnd = br;
    }, polygonEnd: function polygonEnd() {
      var t = +cp;sp.add(t < 0 ? Gd + t : t), this.lineStart = this.lineEnd = this.point = dr;
    }, sphere: function sphere() {
      sp.add(Gd);
    } },
      hp = ur(),
      dp = { point: kr, lineStart: Pr, lineEnd: zr, polygonStart: function polygonStart() {
      dp.point = Rr, dp.lineStart = Lr, dp.lineEnd = Dr, hp.reset(), lp.polygonStart();
    }, polygonEnd: function polygonEnd() {
      lp.polygonEnd(), dp.point = kr, dp.lineStart = Pr, dp.lineEnd = zr, cp < 0 ? (pd = -(gd = 180), vd = -(yd = 90)) : hp > Fd ? yd = 90 : hp < -Fd && (vd = -90), Md[0] = pd, Md[1] = gd;
    } },
      pp = { sphere: dr, point: Yr, lineStart: Fr, lineEnd: Hr, polygonStart: function polygonStart() {
      pp.lineStart = Xr, pp.lineEnd = Gr;
    }, polygonEnd: function polygonEnd() {
      pp.lineStart = Fr, pp.lineEnd = Hr;
    } };Qr.invert = Qr;var vp,
      gp,
      yp,
      _p,
      bp,
      mp,
      xp,
      wp,
      Mp,
      Ap,
      Tp,
      Np = ur(),
      Sp = li(function () {
    return !0;
  }, function (t) {
    var n,
        e = NaN,
        r = NaN,
        i = NaN;return { lineStart: function lineStart() {
        t.lineStart(), n = 1;
      }, point: function point(o, a) {
        var u = o > 0 ? jd : -jd,
            f = Wd(o - e);Wd(f - jd) < Fd ? (t.point(e, r = (r + a) / 2 > 0 ? Hd : -Hd), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), t.point(o, r), n = 0) : i !== u && f >= jd && (Wd(e - i) < Fd && (e -= i * Fd), Wd(o - u) < Fd && (o -= u * Fd), r = function (t, n, e, r) {
          var i,
              o,
              a = rp(t - e);return Wd(a) > Fd ? Zd((rp(n) * (o = Jd(r)) * rp(e) - rp(r) * (i = Jd(n)) * rp(t)) / (i * o * a)) : (n + r) / 2;
        }(e, r, o, a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), n = 0), t.point(e = o, r = a), i = u;
      }, lineEnd: function lineEnd() {
        t.lineEnd(), e = r = NaN;
      }, clean: function clean() {
        return 2 - n;
      } };
  }, function (t, n, e, r) {
    var i;if (null == t) i = e * Hd, r.point(-jd, i), r.point(0, i), r.point(jd, i), r.point(jd, 0), r.point(jd, -i), r.point(0, -i), r.point(-jd, -i), r.point(-jd, 0), r.point(-jd, i);else if (Wd(t[0] - n[0]) > Fd) {
      var o = t[0] < n[0] ? jd : -jd;i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i);
    } else r.point(n[0], n[1]);
  }, [-jd, -Hd]),
      Ep = 1e9,
      kp = -Ep,
      Cp = ur(),
      Pp = { sphere: dr, point: dr, lineStart: function lineStart() {
      Pp.point = yi, Pp.lineEnd = gi;
    }, lineEnd: dr, polygonStart: dr, polygonEnd: dr },
      zp = [null, null],
      Rp = { type: "LineString", coordinates: zp },
      Lp = { Feature: function Feature(t, n) {
      return xi(t.geometry, n);
    }, FeatureCollection: function FeatureCollection(t, n) {
      for (var e = t.features, r = -1, i = e.length; ++r < i;) {
        if (xi(e[r].geometry, n)) return !0;
      }return !1;
    } },
      Dp = { Sphere: function Sphere() {
      return !0;
    }, Point: function Point(t, n) {
      return wi(t.coordinates, n);
    }, MultiPoint: function MultiPoint(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        if (wi(e[r], n)) return !0;
      }return !1;
    }, LineString: function LineString(t, n) {
      return Mi(t.coordinates, n);
    }, MultiLineString: function MultiLineString(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        if (Mi(e[r], n)) return !0;
      }return !1;
    }, Polygon: function Polygon(t, n) {
      return Ai(t.coordinates, n);
    }, MultiPolygon: function MultiPolygon(t, n) {
      for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
        if (Ai(e[r], n)) return !0;
      }return !1;
    }, GeometryCollection: function GeometryCollection(t, n) {
      for (var e = t.geometries, r = -1, i = e.length; ++r < i;) {
        if (xi(e[r], n)) return !0;
      }return !1;
    } },
      Up = ur(),
      qp = ur(),
      Op = { point: dr, lineStart: dr, lineEnd: dr, polygonStart: function polygonStart() {
      Op.lineStart = Pi, Op.lineEnd = Li;
    }, polygonEnd: function polygonEnd() {
      Op.lineStart = Op.lineEnd = Op.point = dr, Up.add(Wd(qp)), qp.reset();
    }, result: function result() {
      var t = Up / 2;return Up.reset(), t;
    } },
      Yp = 1 / 0,
      Bp = Yp,
      Fp = -Yp,
      Ip = Fp,
      jp = { point: function point(t, n) {
      t < Yp && (Yp = t), t > Fp && (Fp = t), n < Bp && (Bp = n), n > Ip && (Ip = n);
    }, lineStart: dr, lineEnd: dr, polygonStart: dr, polygonEnd: dr, result: function result() {
      var t = [[Yp, Bp], [Fp, Ip]];return Fp = Ip = -(Bp = Yp = 1 / 0), t;
    } },
      Hp = 0,
      Xp = 0,
      Gp = 0,
      Vp = 0,
      $p = 0,
      Wp = 0,
      Zp = 0,
      Qp = 0,
      Jp = 0,
      Kp = { point: Di, lineStart: Ui, lineEnd: Yi, polygonStart: function polygonStart() {
      Kp.lineStart = Bi, Kp.lineEnd = Fi;
    }, polygonEnd: function polygonEnd() {
      Kp.point = Di, Kp.lineStart = Ui, Kp.lineEnd = Yi;
    }, result: function result() {
      var t = Jp ? [Zp / Jp, Qp / Jp] : Wp ? [Vp / Wp, $p / Wp] : Gp ? [Hp / Gp, Xp / Gp] : [NaN, NaN];return Hp = Xp = Gp = Vp = $p = Wp = Zp = Qp = Jp = 0, t;
    } };Hi.prototype = { _radius: 4.5, pointRadius: function pointRadius(t) {
      return this._radius = t, this;
    }, polygonStart: function polygonStart() {
      this._line = 0;
    }, polygonEnd: function polygonEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._point = 0;
    }, lineEnd: function lineEnd() {
      0 === this._line && this._context.closePath(), this._point = NaN;
    }, point: function point(t, n) {
      switch (this._point) {case 0:
          this._context.moveTo(t, n), this._point = 1;break;case 1:
          this._context.lineTo(t, n);break;default:
          this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, Gd);}
    }, result: dr };var tv,
      nv,
      ev,
      rv,
      iv,
      ov = ur(),
      av = { point: dr, lineStart: function lineStart() {
      av.point = Xi;
    }, lineEnd: function lineEnd() {
      tv && Gi(nv, ev), av.point = dr;
    }, polygonStart: function polygonStart() {
      tv = !0;
    }, polygonEnd: function polygonEnd() {
      tv = null;
    }, result: function result() {
      var t = +ov;return ov.reset(), t;
    } };Vi.prototype = { _radius: 4.5, _circle: $i(4.5), pointRadius: function pointRadius(t) {
      return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this;
    }, polygonStart: function polygonStart() {
      this._line = 0;
    }, polygonEnd: function polygonEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._point = 0;
    }, lineEnd: function lineEnd() {
      0 === this._line && this._string.push("Z"), this._point = NaN;
    }, point: function point(t, n) {
      switch (this._point) {case 0:
          this._string.push("M", t, ",", n), this._point = 1;break;case 1:
          this._string.push("L", t, ",", n);break;default:
          null == this._circle && (this._circle = $i(this._radius)), this._string.push("M", t, ",", n, this._circle);}
    }, result: function result() {
      if (this._string.length) {
        var t = this._string.join("");return this._string = [], t;
      }return null;
    } }, Zi.prototype = { constructor: Zi, point: function point(t, n) {
      this.stream.point(t, n);
    }, sphere: function sphere() {
      this.stream.sphere();
    }, lineStart: function lineStart() {
      this.stream.lineStart();
    }, lineEnd: function lineEnd() {
      this.stream.lineEnd();
    }, polygonStart: function polygonStart() {
      this.stream.polygonStart();
    }, polygonEnd: function polygonEnd() {
      this.stream.polygonEnd();
    } };var uv = 16,
      fv = Jd(30 * $d),
      cv = Wi({ point: function point(t, n) {
      this.stream.point(t * $d, n * $d);
    } }),
      sv = so(function (t) {
    return op(2 / (1 + t));
  });sv.invert = lo(function (t) {
    return 2 * lr(t / 2);
  });var lv = so(function (t) {
    return (t = sr(t)) && t / rp(t);
  });lv.invert = lo(function (t) {
    return t;
  }), ho.invert = function (t, n) {
    return [t, 2 * Zd(tp(n)) - Hd];
  }, yo.invert = yo, bo.invert = lo(Zd), xo.invert = function (t, n) {
    var e,
        r = n,
        i = 25;do {
      var o = r * r,
          a = o * o;r -= e = (r * (1.007226 + o * (.015085 + a * (.028874 * o - .044475 - .005916 * a))) - n) / (1.007226 + o * (.045255 + a * (.259866 * o - .311325 - .005916 * 11 * a)));
    } while (Wd(e) > Fd && --i > 0);return [t / (.8707 + (o = r * r) * (o * (o * o * o * (.003971 - .001529 * o) - .013791) - .131979)), r];
  }, wo.invert = lo(lr), Mo.invert = lo(function (t) {
    return 2 * Zd(t);
  }), Ao.invert = function (t, n) {
    return [-n, 2 * Zd(tp(t)) - Hd];
  }, Ro.prototype = ko.prototype = { constructor: Ro, count: function count() {
      return this.eachAfter(Eo);
    }, each: function each(t) {
      var n,
          e,
          r,
          i,
          o = this,
          a = [o];do {
        for (n = a.reverse(), a = []; o = n.pop();) {
          if (t(o), e = o.children) for (r = 0, i = e.length; r < i; ++r) {
            a.push(e[r]);
          }
        }
      } while (a.length);return this;
    }, eachAfter: function eachAfter(t) {
      for (var n, e, r, i = this, o = [i], a = []; i = o.pop();) {
        if (a.push(i), n = i.children) for (e = 0, r = n.length; e < r; ++e) {
          o.push(n[e]);
        }
      }for (; i = a.pop();) {
        t(i);
      }return this;
    }, eachBefore: function eachBefore(t) {
      for (var n, e, r = this, i = [r]; r = i.pop();) {
        if (t(r), n = r.children) for (e = n.length - 1; e >= 0; --e) {
          i.push(n[e]);
        }
      }return this;
    }, sum: function sum(t) {
      return this.eachAfter(function (n) {
        for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) {
          e += r[i].value;
        }n.value = e;
      });
    }, sort: function sort(t) {
      return this.eachBefore(function (n) {
        n.children && n.children.sort(t);
      });
    }, path: function path(t) {
      for (var n = this, e = function (t, n) {
        if (t === n) return t;var e = t.ancestors(),
            r = n.ancestors(),
            i = null;for (t = e.pop(), n = r.pop(); t === n;) {
          i = t, t = e.pop(), n = r.pop();
        }return i;
      }(n, t), r = [n]; n !== e;) {
        n = n.parent, r.push(n);
      }for (var i = r.length; t !== e;) {
        r.splice(i, 0, t), t = t.parent;
      }return r;
    }, ancestors: function ancestors() {
      for (var t = this, n = [t]; t = t.parent;) {
        n.push(t);
      }return n;
    }, descendants: function descendants() {
      var t = [];return this.each(function (n) {
        t.push(n);
      }), t;
    }, leaves: function leaves() {
      var t = [];return this.eachBefore(function (n) {
        n.children || t.push(n);
      }), t;
    }, links: function links() {
      var t = this,
          n = [];return t.each(function (e) {
        e !== t && n.push({ source: e.parent, target: e });
      }), n;
    }, copy: function copy() {
      return ko(this).eachBefore(Po);
    } };var hv = Array.prototype.slice,
      dv = "$",
      pv = { depth: -1 },
      vv = {};ua.prototype = Object.create(Ro.prototype);var gv = (1 + Math.sqrt(5)) / 2,
      yv = function t(n) {
    function e(t, e, r, i, o) {
      ca(n, t, e, r, i, o);
    }return e.ratio = function (n) {
      return t((n = +n) > 1 ? n : 1);
    }, e;
  }(gv),
      _v = function t(n) {
    function e(t, e, r, i, o) {
      if ((a = t._squarify) && a.ratio === n) for (var a, u, f, c, s, l = -1, h = a.length, d = t.value; ++l < h;) {
        for (f = (u = a[l]).children, c = u.value = 0, s = f.length; c < s; ++c) {
          u.value += f[c].value;
        }u.dice ? Ko(u, e, r, i, r += (o - r) * u.value / d) : fa(u, e, r, e += (i - e) * u.value / d, o), d -= u.value;
      } else t._squarify = a = ca(n, t, e, r, i, o), a.ratio = n;
    }return e.ratio = function (n) {
      return t((n = +n) > 1 ? n : 1);
    }, e;
  }(gv),
      bv = function t(n) {
    function e(t, e) {
      return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t, function () {
        return n() * e + t;
      };
    }return e.source = t, e;
  }(da),
      mv = function t(n) {
    function e(t, e) {
      var r, i;return t = null == t ? 0 : +t, e = null == e ? 1 : +e, function () {
        var o;if (null != r) o = r, r = null;else do {
          r = 2 * n() - 1, o = 2 * n() - 1, i = r * r + o * o;
        } while (!i || i > 1);return t + e * o * Math.sqrt(-2 * Math.log(i) / i);
      };
    }return e.source = t, e;
  }(da),
      xv = function t(n) {
    function e() {
      var t = mv.source(n).apply(this, arguments);return function () {
        return Math.exp(t());
      };
    }return e.source = t, e;
  }(da),
      wv = function t(n) {
    function e(t) {
      return function () {
        for (var e = 0, r = 0; r < t; ++r) {
          e += n();
        }return e;
      };
    }return e.source = t, e;
  }(da),
      Mv = function t(n) {
    function e(t) {
      var e = wv.source(n)(t);return function () {
        return e() / t;
      };
    }return e.source = t, e;
  }(da),
      Av = function t(n) {
    function e(t) {
      return function () {
        return -Math.log(1 - n()) / t;
      };
    }return e.source = t, e;
  }(da),
      Tv = Array.prototype,
      Nv = Tv.map,
      Sv = Tv.slice,
      Ev = { name: "implicit" },
      kv = [0, 1],
      Cv = new Date(),
      Pv = new Date(),
      zv = Ba(function () {}, function (t, n) {
    t.setTime(+t + n);
  }, function (t, n) {
    return n - t;
  });zv.every = function (t) {
    return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Ba(function (n) {
      n.setTime(Math.floor(n / t) * t);
    }, function (n, e) {
      n.setTime(+n + e * t);
    }, function (n, e) {
      return (e - n) / t;
    }) : zv : null;
  };var Rv = zv.range,
      Lv = 6e4,
      Dv = 6048e5,
      Uv = Ba(function (t) {
    t.setTime(1e3 * Math.floor(t / 1e3));
  }, function (t, n) {
    t.setTime(+t + 1e3 * n);
  }, function (t, n) {
    return (n - t) / 1e3;
  }, function (t) {
    return t.getUTCSeconds();
  }),
      qv = Uv.range,
      Ov = Ba(function (t) {
    t.setTime(Math.floor(t / Lv) * Lv);
  }, function (t, n) {
    t.setTime(+t + n * Lv);
  }, function (t, n) {
    return (n - t) / Lv;
  }, function (t) {
    return t.getMinutes();
  }),
      Yv = Ov.range,
      Bv = Ba(function (t) {
    var n = t.getTimezoneOffset() * Lv % 36e5;n < 0 && (n += 36e5), t.setTime(36e5 * Math.floor((+t - n) / 36e5) + n);
  }, function (t, n) {
    t.setTime(+t + 36e5 * n);
  }, function (t, n) {
    return (n - t) / 36e5;
  }, function (t) {
    return t.getHours();
  }),
      Fv = Bv.range,
      Iv = Ba(function (t) {
    t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setDate(t.getDate() + n);
  }, function (t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Lv) / 864e5;
  }, function (t) {
    return t.getDate() - 1;
  }),
      jv = Iv.range,
      Hv = Fa(0),
      Xv = Fa(1),
      Gv = Fa(2),
      Vv = Fa(3),
      $v = Fa(4),
      Wv = Fa(5),
      Zv = Fa(6),
      Qv = Hv.range,
      Jv = Xv.range,
      Kv = Gv.range,
      tg = Vv.range,
      ng = $v.range,
      eg = Wv.range,
      rg = Zv.range,
      ig = Ba(function (t) {
    t.setDate(1), t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setMonth(t.getMonth() + n);
  }, function (t, n) {
    return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear());
  }, function (t) {
    return t.getMonth();
  }),
      og = ig.range,
      ag = Ba(function (t) {
    t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setFullYear(t.getFullYear() + n);
  }, function (t, n) {
    return n.getFullYear() - t.getFullYear();
  }, function (t) {
    return t.getFullYear();
  });ag.every = function (t) {
    return isFinite(t = Math.floor(t)) && t > 0 ? Ba(function (n) {
      n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
    }, function (n, e) {
      n.setFullYear(n.getFullYear() + e * t);
    }) : null;
  };var ug = ag.range,
      fg = Ba(function (t) {
    t.setUTCSeconds(0, 0);
  }, function (t, n) {
    t.setTime(+t + n * Lv);
  }, function (t, n) {
    return (n - t) / Lv;
  }, function (t) {
    return t.getUTCMinutes();
  }),
      cg = fg.range,
      sg = Ba(function (t) {
    t.setUTCMinutes(0, 0, 0);
  }, function (t, n) {
    t.setTime(+t + 36e5 * n);
  }, function (t, n) {
    return (n - t) / 36e5;
  }, function (t) {
    return t.getUTCHours();
  }),
      lg = sg.range,
      hg = Ba(function (t) {
    t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCDate(t.getUTCDate() + n);
  }, function (t, n) {
    return (n - t) / 864e5;
  }, function (t) {
    return t.getUTCDate() - 1;
  }),
      dg = hg.range,
      pg = Ia(0),
      vg = Ia(1),
      gg = Ia(2),
      yg = Ia(3),
      _g = Ia(4),
      bg = Ia(5),
      mg = Ia(6),
      xg = pg.range,
      wg = vg.range,
      Mg = gg.range,
      Ag = yg.range,
      Tg = _g.range,
      Ng = bg.range,
      Sg = mg.range,
      Eg = Ba(function (t) {
    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCMonth(t.getUTCMonth() + n);
  }, function (t, n) {
    return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear());
  }, function (t) {
    return t.getUTCMonth();
  }),
      kg = Eg.range,
      Cg = Ba(function (t) {
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n);
  }, function (t, n) {
    return n.getUTCFullYear() - t.getUTCFullYear();
  }, function (t) {
    return t.getUTCFullYear();
  });Cg.every = function (t) {
    return isFinite(t = Math.floor(t)) && t > 0 ? Ba(function (n) {
      n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
    }, function (n, e) {
      n.setUTCFullYear(n.getUTCFullYear() + e * t);
    }) : null;
  };var Pg,
      zg = Cg.range,
      Rg = { "-": "", _: " ", 0: "0" },
      Lg = /^\s*\d+/,
      Dg = /^%/,
      Ug = /[\\^$*+?|[\]().{}]/g;Ku({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });var qg = "%Y-%m-%dT%H:%M:%S.%LZ",
      Og = Date.prototype.toISOString ? function (t) {
    return t.toISOString();
  } : t.utcFormat(qg),
      Yg = +new Date("2000-01-01T00:00:00.000Z") ? function (t) {
    var n = new Date(t);return isNaN(n) ? null : n;
  } : t.utcParse(qg),
      Bg = 1e3,
      Fg = 60 * Bg,
      Ig = 60 * Fg,
      jg = 24 * Ig,
      Hg = 7 * jg,
      Xg = 30 * jg,
      Gg = 365 * jg,
      Vg = of("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
      $g = of("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
      Wg = of("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
      Zg = of("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),
      Qg = of("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
      Jg = of("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
      Kg = of("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
      ty = of("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
      ny = of("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),
      ey = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(of),
      ry = af(ey),
      iy = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(of),
      oy = af(iy),
      ay = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(of),
      uy = af(ay),
      fy = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(of),
      cy = af(fy),
      sy = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(of),
      ly = af(sy),
      hy = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(of),
      dy = af(hy),
      py = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(of),
      vy = af(py),
      gy = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(of),
      yy = af(gy),
      _y = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(of),
      by = af(_y),
      my = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(of),
      xy = af(my),
      wy = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(of),
      My = af(wy),
      Ay = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(of),
      Ty = af(Ay),
      Ny = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(of),
      Sy = af(Ny),
      Ey = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(of),
      ky = af(Ey),
      Cy = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(of),
      Py = af(Cy),
      zy = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(of),
      Ry = af(zy),
      Ly = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(of),
      Dy = af(Ly),
      Uy = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(of),
      qy = af(Uy),
      Oy = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(of),
      Yy = af(Oy),
      By = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(of),
      Fy = af(By),
      Iy = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(of),
      jy = af(Iy),
      Hy = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(of),
      Xy = af(Hy),
      Gy = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(of),
      Vy = af(Gy),
      $y = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(of),
      Wy = af($y),
      Zy = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(of),
      Qy = af(Zy),
      Jy = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(of),
      Ky = af(Jy),
      t_ = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(of),
      n_ = af(t_),
      e_ = _l($t(300, .5, 0), $t(-240, .5, 1)),
      r_ = _l($t(-100, .75, .35), $t(80, 1.5, .8)),
      i_ = _l($t(260, .75, .35), $t(80, 1.5, .8)),
      o_ = $t(),
      a_ = uf(of("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
      u_ = uf(of("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
      f_ = uf(of("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
      c_ = uf(of("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),
      s_ = Math.abs,
      l_ = Math.atan2,
      h_ = Math.cos,
      d_ = Math.max,
      p_ = Math.min,
      v_ = Math.sin,
      g_ = Math.sqrt,
      y_ = 1e-12,
      __ = Math.PI,
      b_ = __ / 2,
      m_ = 2 * __;gf.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._point = 0;
    }, lineEnd: function lineEnd() {
      (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
          this._point = 2;default:
          this._context.lineTo(t, n);}
    } };var x_ = Tf(yf);Af.prototype = { areaStart: function areaStart() {
      this._curve.areaStart();
    }, areaEnd: function areaEnd() {
      this._curve.areaEnd();
    }, lineStart: function lineStart() {
      this._curve.lineStart();
    }, lineEnd: function lineEnd() {
      this._curve.lineEnd();
    }, point: function point(t, n) {
      this._curve.point(n * Math.sin(t), n * -Math.cos(t));
    } };var w_ = Array.prototype.slice,
      M_ = { draw: function draw(t, n) {
      var e = Math.sqrt(n / __);t.moveTo(e, 0), t.arc(0, 0, e, 0, m_);
    } },
      A_ = { draw: function draw(t, n) {
      var e = Math.sqrt(n / 5) / 2;t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath();
    } },
      T_ = Math.sqrt(1 / 3),
      N_ = 2 * T_,
      S_ = { draw: function draw(t, n) {
      var e = Math.sqrt(n / N_),
          r = e * T_;t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath();
    } },
      E_ = Math.sin(__ / 10) / Math.sin(7 * __ / 10),
      k_ = Math.sin(m_ / 10) * E_,
      C_ = -Math.cos(m_ / 10) * E_,
      P_ = { draw: function draw(t, n) {
      var e = Math.sqrt(.8908130915292852 * n),
          r = k_ * e,
          i = C_ * e;t.moveTo(0, -e), t.lineTo(r, i);for (var o = 1; o < 5; ++o) {
        var a = m_ * o / 5,
            u = Math.cos(a),
            f = Math.sin(a);t.lineTo(f * e, -u * e), t.lineTo(u * r - f * i, f * r + u * i);
      }t.closePath();
    } },
      z_ = { draw: function draw(t, n) {
      var e = Math.sqrt(n),
          r = -e / 2;t.rect(r, r, e, e);
    } },
      R_ = Math.sqrt(3),
      L_ = { draw: function draw(t, n) {
      var e = -Math.sqrt(n / (3 * R_));t.moveTo(0, 2 * e), t.lineTo(-R_ * e, -e), t.lineTo(R_ * e, -e), t.closePath();
    } },
      D_ = Math.sqrt(3) / 2,
      U_ = 1 / Math.sqrt(12),
      q_ = 3 * (U_ / 2 + 1),
      O_ = { draw: function draw(t, n) {
      var e = Math.sqrt(n / q_),
          r = e / 2,
          i = e * U_,
          o = r,
          a = e * U_ + e,
          u = -o,
          f = a;t.moveTo(r, i), t.lineTo(o, a), t.lineTo(u, f), t.lineTo(-.5 * r - D_ * i, D_ * r + -.5 * i), t.lineTo(-.5 * o - D_ * a, D_ * o + -.5 * a), t.lineTo(-.5 * u - D_ * f, D_ * u + -.5 * f), t.lineTo(-.5 * r + D_ * i, -.5 * i - D_ * r), t.lineTo(-.5 * o + D_ * a, -.5 * a - D_ * o), t.lineTo(-.5 * u + D_ * f, -.5 * f - D_ * u), t.closePath();
    } },
      Y_ = [M_, A_, S_, z_, P_, L_, O_];Of.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 3:
          qf(this, this._x1, this._y1);case 2:
          this._context.lineTo(this._x1, this._y1);}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
          this._point = 2;break;case 2:
          this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);default:
          qf(this, t, n);}this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
    } }, Yf.prototype = { areaStart: Uf, areaEnd: Uf, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 1:
          this._context.moveTo(this._x2, this._y2), this._context.closePath();break;case 2:
          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();break;case 3:
          this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);}
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1, this._x2 = t, this._y2 = n;break;case 1:
          this._point = 2, this._x3 = t, this._y3 = n;break;case 2:
          this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);break;default:
          qf(this, t, n);}this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
    } }, Bf.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1;break;case 1:
          this._point = 2;break;case 2:
          this._point = 3;var e = (this._x0 + 4 * this._x1 + t) / 6,
              r = (this._y0 + 4 * this._y1 + n) / 6;this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);break;case 3:
          this._point = 4;default:
          qf(this, t, n);}this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
    } }, Ff.prototype = { lineStart: function lineStart() {
      this._x = [], this._y = [], this._basis.lineStart();
    }, lineEnd: function lineEnd() {
      var t = this._x,
          n = this._y,
          e = t.length - 1;if (e > 0) for (var r, i = t[0], o = n[0], a = t[e] - i, u = n[e] - o, f = -1; ++f <= e;) {
        r = f / e, this._basis.point(this._beta * t[f] + (1 - this._beta) * (i + r * a), this._beta * n[f] + (1 - this._beta) * (o + r * u));
      }this._x = this._y = null, this._basis.lineEnd();
    }, point: function point(t, n) {
      this._x.push(+t), this._y.push(+n);
    } };var B_ = function t(n) {
    function e(t) {
      return 1 === n ? new Of(t) : new Ff(t, n);
    }return e.beta = function (n) {
      return t(+n);
    }, e;
  }(.85);jf.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 2:
          this._context.lineTo(this._x2, this._y2);break;case 3:
          If(this, this._x1, this._y1);}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
          this._point = 2, this._x1 = t, this._y1 = n;break;case 2:
          this._point = 3;default:
          If(this, t, n);}this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    } };var F_ = function t(n) {
    function e(t) {
      return new jf(t, n);
    }return e.tension = function (n) {
      return t(+n);
    }, e;
  }(0);Hf.prototype = { areaStart: Uf, areaEnd: Uf, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 1:
          this._context.moveTo(this._x3, this._y3), this._context.closePath();break;case 2:
          this._context.lineTo(this._x3, this._y3), this._context.closePath();break;case 3:
          this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);}
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1, this._x3 = t, this._y3 = n;break;case 1:
          this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);break;case 2:
          this._point = 3, this._x5 = t, this._y5 = n;break;default:
          If(this, t, n);}this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    } };var I_ = function t(n) {
    function e(t) {
      return new Hf(t, n);
    }return e.tension = function (n) {
      return t(+n);
    }, e;
  }(0);Xf.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1;break;case 1:
          this._point = 2;break;case 2:
          this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);break;case 3:
          this._point = 4;default:
          If(this, t, n);}this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    } };var j_ = function t(n) {
    function e(t) {
      return new Xf(t, n);
    }return e.tension = function (n) {
      return t(+n);
    }, e;
  }(0);Vf.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 2:
          this._context.lineTo(this._x2, this._y2);break;case 3:
          this.point(this._x2, this._y2);}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      if (t = +t, n = +n, this._point) {
        var e = this._x2 - t,
            r = this._y2 - n;this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha));
      }switch (this._point) {case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
          this._point = 2;break;case 2:
          this._point = 3;default:
          Gf(this, t, n);}this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    } };var H_ = function t(n) {
    function e(t) {
      return n ? new Vf(t, n) : new jf(t, 0);
    }return e.alpha = function (n) {
      return t(+n);
    }, e;
  }(.5);$f.prototype = { areaStart: Uf, areaEnd: Uf, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 1:
          this._context.moveTo(this._x3, this._y3), this._context.closePath();break;case 2:
          this._context.lineTo(this._x3, this._y3), this._context.closePath();break;case 3:
          this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);}
    }, point: function point(t, n) {
      if (t = +t, n = +n, this._point) {
        var e = this._x2 - t,
            r = this._y2 - n;this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha));
      }switch (this._point) {case 0:
          this._point = 1, this._x3 = t, this._y3 = n;break;case 1:
          this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);break;case 2:
          this._point = 3, this._x5 = t, this._y5 = n;break;default:
          Gf(this, t, n);}this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    } };var X_ = function t(n) {
    function e(t) {
      return n ? new $f(t, n) : new Hf(t, 0);
    }return e.alpha = function (n) {
      return t(+n);
    }, e;
  }(.5);Wf.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    }, lineEnd: function lineEnd() {
      (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      if (t = +t, n = +n, this._point) {
        var e = this._x2 - t,
            r = this._y2 - n;this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha));
      }switch (this._point) {case 0:
          this._point = 1;break;case 1:
          this._point = 2;break;case 2:
          this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);break;case 3:
          this._point = 4;default:
          Gf(this, t, n);}this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n;
    } };var G_ = function t(n) {
    function e(t) {
      return n ? new Wf(t, n) : new Xf(t, 0);
    }return e.alpha = function (n) {
      return t(+n);
    }, e;
  }(.5);Zf.prototype = { areaStart: Uf, areaEnd: Uf, lineStart: function lineStart() {
      this._point = 0;
    }, lineEnd: function lineEnd() {
      this._point && this._context.closePath();
    }, point: function point(t, n) {
      t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n));
    } }, nc.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 2:
          this._context.lineTo(this._x1, this._y1);break;case 3:
          tc(this, this._t0, Kf(this, this._t0));}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      var e = NaN;if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
        switch (this._point) {case 0:
            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
            this._point = 2;break;case 2:
            this._point = 3, tc(this, Kf(this, e = Jf(this, t, n)), e);break;default:
            tc(this, this._t0, e = Jf(this, t, n));}this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e;
      }
    } }, (ec.prototype = Object.create(nc.prototype)).point = function (t, n) {
    nc.prototype.point.call(this, n, t);
  }, rc.prototype = { moveTo: function moveTo(t, n) {
      this._context.moveTo(n, t);
    }, closePath: function closePath() {
      this._context.closePath();
    }, lineTo: function lineTo(t, n) {
      this._context.lineTo(n, t);
    }, bezierCurveTo: function bezierCurveTo(t, n, e, r, i, o) {
      this._context.bezierCurveTo(n, t, r, e, o, i);
    } }, ic.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x = [], this._y = [];
    }, lineEnd: function lineEnd() {
      var t = this._x,
          n = this._y,
          e = t.length;if (e) if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);else for (var r = oc(t), i = oc(n), o = 0, a = 1; a < e; ++o, ++a) {
        this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[a], n[a]);
      }(this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
    }, point: function point(t, n) {
      this._x.push(+t), this._y.push(+n);
    } }, ac.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x = this._y = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
    }, point: function point(t, n) {
      switch (t = +t, n = +n, this._point) {case 0:
          this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
          this._point = 2;default:
          if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);else {
            var e = this._x * (1 - this._t) + t * this._t;this._context.lineTo(e, this._y), this._context.lineTo(e, n);
          }}this._x = t, this._y = n;
    } }, vc.prototype = { constructor: vc, insert: function insert(t, n) {
      var e, r, i;if (t) {
        if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
          for (t = t.R; t.L;) {
            t = t.L;
          }t.L = n;
        } else t.R = n;e = t;
      } else this._ ? (t = bc(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) {
        e === (r = e.U).L ? (i = r.R) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (yc(this, e), e = (t = e).U), e.C = !1, r.C = !0, _c(this, r)) : (i = r.L) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (_c(this, e), e = (t = e).U), e.C = !1, r.C = !0, yc(this, r)), e = t.U;
      }this._.C = !1;
    }, remove: function remove(t) {
      t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;var n,
          e,
          r,
          i = t.U,
          o = t.L,
          a = t.R;if (e = o ? a ? bc(a) : o : a, i ? i.L === t ? i.L = e : i.R = e : this._ = e, o && a ? (r = e.C, e.C = t.C, e.L = o, o.U = e, e !== a ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = a, a.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r) if (t && t.C) t.C = !1;else {
        do {
          if (t === this._) break;if (t === i.L) {
            if ((n = i.R).C && (n.C = !1, i.C = !0, yc(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
              n.R && n.R.C || (n.L.C = !1, n.C = !0, _c(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, yc(this, i), t = this._;break;
            }
          } else if ((n = i.L).C && (n.C = !1, i.C = !0, _c(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
            n.L && n.L.C || (n.R.C = !1, n.C = !0, yc(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, _c(this, i), t = this._;break;
          }n.C = !0, t = i, i = i.U;
        } while (!t.C);t && (t.C = !1);
      }
    } };var V_,
      $_,
      W_,
      Z_,
      Q_,
      J_ = [],
      K_ = [],
      tb = 1e-6,
      nb = 1e-12;qc.prototype = { constructor: qc, polygons: function polygons() {
      var t = this.edges;return this.cells.map(function (n) {
        var e = n.halfedges.map(function (e) {
          return Nc(n, t[e]);
        });return e.data = n.site.data, e;
      });
    }, triangles: function triangles() {
      var t = [],
          n = this.edges;return this.cells.forEach(function (e, r) {
        if (o = (i = e.halfedges).length) for (var i, o, a, u = e.site, f = -1, c = n[i[o - 1]], s = c.left === u ? c.right : c.left; ++f < o;) {
          a = s, s = (c = n[i[f]]).left === u ? c.right : c.left, a && s && r < a.index && r < s.index && Dc(u, a, s) < 0 && t.push([u.data, a.data, s.data]);
        }
      }), t;
    }, links: function links() {
      return this.edges.filter(function (t) {
        return t.right;
      }).map(function (t) {
        return { source: t.left.data, target: t.right.data };
      });
    }, find: function find(t, n, e) {
      for (var r, i, o = this, a = o._found || 0, u = o.cells.length; !(i = o.cells[a]);) {
        if (++a >= u) return null;
      }var f = t - i.site[0],
          c = n - i.site[1],
          s = f * f + c * c;do {
        i = o.cells[r = a], a = null, i.halfedges.forEach(function (e) {
          var r = o.edges[e],
              u = r.left;if (u !== i.site && u || (u = r.right)) {
            var f = t - u[0],
                c = n - u[1],
                l = f * f + c * c;l < s && (s = l, a = u.index);
          }
        });
      } while (null !== a);return o._found = r, null == e || s <= e * e ? i.site : null;
    } }, Yc.prototype = { constructor: Yc, scale: function scale(t) {
      return 1 === t ? this : new Yc(this.k * t, this.x, this.y);
    }, translate: function translate(t, n) {
      return 0 === t & 0 === n ? this : new Yc(this.k, this.x + this.k * t, this.y + this.k * n);
    }, apply: function apply(t) {
      return [t[0] * this.k + this.x, t[1] * this.k + this.y];
    }, applyX: function applyX(t) {
      return t * this.k + this.x;
    }, applyY: function applyY(t) {
      return t * this.k + this.y;
    }, invert: function invert(t) {
      return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
    }, invertX: function invertX(t) {
      return (t - this.x) / this.k;
    }, invertY: function invertY(t) {
      return (t - this.y) / this.k;
    }, rescaleX: function rescaleX(t) {
      return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
    }, rescaleY: function rescaleY(t) {
      return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
    }, toString: function toString() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    } };var eb = new Yc(1, 0, 0);Bc.prototype = Yc.prototype, t.version = "5.0.0", t.bisect = Zc, t.bisectRight = Zc, t.bisectLeft = Qc, t.ascending = n, t.bisector = e, t.cross = function (t, n, e) {
    var i,
        o,
        a,
        u,
        f = t.length,
        c = n.length,
        s = new Array(f * c);for (null == e && (e = r), i = a = 0; i < f; ++i) {
      for (u = t[i], o = 0; o < c; ++o, ++a) {
        s[a] = e(u, n[o]);
      }
    }return s;
  }, t.descending = function (t, n) {
    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
  }, t.deviation = a, t.extent = u, t.histogram = function () {
    function t(t) {
      var i,
          o,
          a = t.length,
          u = new Array(a);for (i = 0; i < a; ++i) {
        u[i] = n(t[i], i, t);
      }var f = e(u),
          c = f[0],
          l = f[1],
          h = r(u, c, l);Array.isArray(h) || (h = d(c, l, h), h = s(Math.ceil(c / h) * h, Math.floor(l / h) * h, h));for (var p = h.length; h[0] <= c;) {
        h.shift(), --p;
      }for (; h[p - 1] > l;) {
        h.pop(), --p;
      }var v,
          g = new Array(p + 1);for (i = 0; i <= p; ++i) {
        (v = g[i] = []).x0 = i > 0 ? h[i - 1] : c, v.x1 = i < p ? h[i] : l;
      }for (i = 0; i < a; ++i) {
        c <= (o = u[i]) && o <= l && g[Zc(h, o, 0, p)].push(t[i]);
      }return g;
    }var n = c,
        e = u,
        r = p;return t.value = function (e) {
      return arguments.length ? (n = "function" == typeof e ? e : f(e), t) : n;
    }, t.domain = function (n) {
      return arguments.length ? (e = "function" == typeof n ? n : f([n[0], n[1]]), t) : e;
    }, t.thresholds = function (n) {
      return arguments.length ? (r = "function" == typeof n ? n : Array.isArray(n) ? f(Kc.call(n)) : f(n), t) : r;
    }, t;
  }, t.thresholdFreedmanDiaconis = function (t, e, r) {
    return t = ts.call(t, i).sort(n), Math.ceil((r - e) / (2 * (v(t, .75) - v(t, .25)) * Math.pow(t.length, -1 / 3)));
  }, t.thresholdScott = function (t, n, e) {
    return Math.ceil((e - n) / (3.5 * a(t) * Math.pow(t.length, -1 / 3)));
  }, t.thresholdSturges = p, t.max = g, t.mean = function (t, n) {
    var e,
        r = t.length,
        o = r,
        a = -1,
        u = 0;if (null == n) for (; ++a < r;) {
      isNaN(e = i(t[a])) ? --o : u += e;
    } else for (; ++a < r;) {
      isNaN(e = i(n(t[a], a, t))) ? --o : u += e;
    }if (o) return u / o;
  }, t.median = function (t, e) {
    var r,
        o = t.length,
        a = -1,
        u = [];if (null == e) for (; ++a < o;) {
      isNaN(r = i(t[a])) || u.push(r);
    } else for (; ++a < o;) {
      isNaN(r = i(e(t[a], a, t))) || u.push(r);
    }return v(u.sort(n), .5);
  }, t.merge = y, t.min = _, t.pairs = function (t, n) {
    null == n && (n = r);for (var e = 0, i = t.length - 1, o = t[0], a = new Array(i < 0 ? 0 : i); e < i;) {
      a[e] = n(o, o = t[++e]);
    }return a;
  }, t.permute = function (t, n) {
    for (var e = n.length, r = new Array(e); e--;) {
      r[e] = t[n[e]];
    }return r;
  }, t.quantile = v, t.range = s, t.scan = function (t, e) {
    if (r = t.length) {
      var r,
          i,
          o = 0,
          a = 0,
          u = t[a];for (null == e && (e = n); ++o < r;) {
        (e(i = t[o], u) < 0 || 0 !== e(u, u)) && (u = i, a = o);
      }return 0 === e(u, u) ? a : void 0;
    }
  }, t.shuffle = function (t, n, e) {
    for (var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n); o;) {
      i = Math.random() * o-- | 0, r = t[o + n], t[o + n] = t[i + n], t[i + n] = r;
    }return t;
  }, t.sum = function (t, n) {
    var e,
        r = t.length,
        i = -1,
        o = 0;if (null == n) for (; ++i < r;) {
      (e = +t[i]) && (o += e);
    } else for (; ++i < r;) {
      (e = +n(t[i], i, t)) && (o += e);
    }return o;
  }, t.ticks = l, t.tickIncrement = h, t.tickStep = d, t.transpose = b, t.variance = o, t.zip = function () {
    return b(arguments);
  }, t.axisTop = function (t) {
    return T(os, t);
  }, t.axisRight = function (t) {
    return T(as, t);
  }, t.axisBottom = function (t) {
    return T(us, t);
  }, t.axisLeft = function (t) {
    return T(fs, t);
  }, t.brush = function () {
    return te(gh);
  }, t.brushX = function () {
    return te(ph);
  }, t.brushY = function () {
    return te(vh);
  }, t.brushSelection = function (t) {
    var n = t.__brush;return n ? n.dim.output(n.selection) : null;
  }, t.chord = function () {
    function t(t) {
      var o,
          a,
          u,
          f,
          c,
          l,
          h = t.length,
          d = [],
          p = s(h),
          v = [],
          g = [],
          y = g.groups = new Array(h),
          _ = new Array(h * h);for (o = 0, c = -1; ++c < h;) {
        for (a = 0, l = -1; ++l < h;) {
          a += t[c][l];
        }d.push(a), v.push(s(h)), o += a;
      }for (e && p.sort(function (t, n) {
        return e(d[t], d[n]);
      }), r && v.forEach(function (n, e) {
        n.sort(function (n, i) {
          return r(t[e][n], t[e][i]);
        });
      }), f = (o = Sh(0, Nh - n * h) / o) ? n : Nh / h, a = 0, c = -1; ++c < h;) {
        for (u = a, l = -1; ++l < h;) {
          var b = p[c],
              m = v[b][l],
              x = t[b][m],
              w = a,
              M = a += x * o;_[m * h + b] = { index: b, subindex: m, startAngle: w, endAngle: M, value: x };
        }y[b] = { index: b, startAngle: u, endAngle: a, value: d[b] }, a += f;
      }for (c = -1; ++c < h;) {
        for (l = c - 1; ++l < h;) {
          var A = _[l * h + c],
              T = _[c * h + l];(A.value || T.value) && g.push(A.value < T.value ? { source: T, target: A } : { source: A, target: T });
        }
      }return i ? g.sort(i) : g;
    }var n = 0,
        e = null,
        r = null,
        i = null;return t.padAngle = function (e) {
      return arguments.length ? (n = Sh(0, e), t) : n;
    }, t.sortGroups = function (n) {
      return arguments.length ? (e = n, t) : e;
    }, t.sortSubgroups = function (n) {
      return arguments.length ? (r = n, t) : r;
    }, t.sortChords = function (n) {
      return arguments.length ? (null == n ? i = null : (i = function (t) {
        return function (n, e) {
          return t(n.source.value + n.target.value, e.source.value + e.target.value);
        };
      }(n))._ = n, t) : i && i._;
    }, t;
  }, t.ribbon = function () {
    function t() {
      var t,
          u = Eh.call(arguments),
          f = n.apply(this, u),
          c = e.apply(this, u),
          s = +r.apply(this, (u[0] = f, u)),
          l = i.apply(this, u) - Th,
          h = o.apply(this, u) - Th,
          d = s * wh(l),
          p = s * Mh(l),
          v = +r.apply(this, (u[0] = c, u)),
          g = i.apply(this, u) - Th,
          y = o.apply(this, u) - Th;if (a || (a = t = re()), a.moveTo(d, p), a.arc(0, 0, s, l, h), l === g && h === y || (a.quadraticCurveTo(0, 0, v * wh(g), v * Mh(g)), a.arc(0, 0, v, g, y)), a.quadraticCurveTo(0, 0, d, p), a.closePath(), t) return a = null, t + "" || null;
    }var n = ie,
        e = oe,
        r = ae,
        i = ue,
        o = fe,
        a = null;return t.radius = function (n) {
      return arguments.length ? (r = "function" == typeof n ? n : ne(+n), t) : r;
    }, t.startAngle = function (n) {
      return arguments.length ? (i = "function" == typeof n ? n : ne(+n), t) : i;
    }, t.endAngle = function (n) {
      return arguments.length ? (o = "function" == typeof n ? n : ne(+n), t) : o;
    }, t.source = function (e) {
      return arguments.length ? (n = e, t) : n;
    }, t.target = function (n) {
      return arguments.length ? (e = n, t) : e;
    }, t.context = function (n) {
      return arguments.length ? (a = null == n ? null : n, t) : a;
    }, t;
  }, t.nest = function () {
    function t(n, i, a, u) {
      if (i >= o.length) return null != e && n.sort(e), null != r ? r(n) : n;for (var f, c, s, l = -1, h = n.length, d = o[i++], p = se(), v = a(); ++l < h;) {
        (s = p.get(f = d(c = n[l]) + "")) ? s.push(c) : p.set(f, [c]);
      }return p.each(function (n, e) {
        u(v, e, t(n, i, a, u));
      }), v;
    }function n(t, e) {
      if (++e > o.length) return t;var i,
          u = a[e - 1];return null != r && e >= o.length ? i = t.entries() : (i = [], t.each(function (t, r) {
        i.push({ key: r, values: n(t, e) });
      })), null != u ? i.sort(function (t, n) {
        return u(t.key, n.key);
      }) : i;
    }var e,
        r,
        i,
        o = [],
        a = [];return i = { object: function object(n) {
        return t(n, 0, le, he);
      }, map: function map(n) {
        return t(n, 0, de, pe);
      }, entries: function entries(e) {
        return n(t(e, 0, de, pe), 0);
      }, key: function key(t) {
        return o.push(t), i;
      }, sortKeys: function sortKeys(t) {
        return a[o.length - 1] = t, i;
      }, sortValues: function sortValues(t) {
        return e = t, i;
      }, rollup: function rollup(t) {
        return r = t, i;
      } };
  }, t.set = ge, t.map = se, t.keys = function (t) {
    var n = [];for (var e in t) {
      n.push(e);
    }return n;
  }, t.values = function (t) {
    var n = [];for (var e in t) {
      n.push(t[e]);
    }return n;
  }, t.entries = function (t) {
    var n = [];for (var e in t) {
      n.push({ key: e, value: t[e] });
    }return n;
  }, t.color = kt, t.rgb = Rt, t.hsl = Ut, t.lab = Bt, t.hcl = Gt, t.cubehelix = $t, t.contours = xe, t.contourDensity = function () {
    function t(t) {
      var e = new Float32Array(v * y),
          r = new Float32Array(v * y);t.forEach(function (t, n, r) {
        var i = a(t, n, r) + p >> h,
            o = u(t, n, r) + p >> h;i >= 0 && i < v && o >= 0 && o < y && ++e[i + o * v];
      }), we({ width: v, height: y, data: e }, { width: v, height: y, data: r }, l >> h), Me({ width: v, height: y, data: r }, { width: v, height: y, data: e }, l >> h), we({ width: v, height: y, data: e }, { width: v, height: y, data: r }, l >> h), Me({ width: v, height: y, data: r }, { width: v, height: y, data: e }, l >> h), we({ width: v, height: y, data: e }, { width: v, height: y, data: r }, l >> h), Me({ width: v, height: y, data: r }, { width: v, height: y, data: e }, l >> h);var i = _(e);if (!Array.isArray(i)) {
        var o = g(e);i = d(0, o, i), (i = s(0, Math.floor(o / i) * i, i)).shift();
      }return xe().thresholds(i).size([v, y])(e).map(n);
    }function n(t) {
      return t.value *= Math.pow(2, -2 * h), t.coordinates.forEach(e), t;
    }function e(t) {
      t.forEach(r);
    }function r(t) {
      t.forEach(i);
    }function i(t) {
      t[0] = t[0] * Math.pow(2, h) - p, t[1] = t[1] * Math.pow(2, h) - p;
    }function o() {
      return p = 3 * l, v = f + 2 * p >> h, y = c + 2 * p >> h, t;
    }var a = Ae,
        u = Te,
        f = 960,
        c = 500,
        l = 20,
        h = 2,
        p = 3 * l,
        v = f + 2 * p >> h,
        y = c + 2 * p >> h,
        _ = _e(20);return t.x = function (n) {
      return arguments.length ? (a = "function" == typeof n ? n : _e(+n), t) : a;
    }, t.y = function (n) {
      return arguments.length ? (u = "function" == typeof n ? n : _e(+n), t) : u;
    }, t.size = function (t) {
      if (!arguments.length) return [f, c];var n = Math.ceil(t[0]),
          e = Math.ceil(t[1]);if (!(n >= 0 || n >= 0)) throw new Error("invalid size");return f = n, c = e, o();
    }, t.cellSize = function (t) {
      if (!arguments.length) return 1 << h;if (!((t = +t) >= 1)) throw new Error("invalid cell size");return h = Math.floor(Math.log(t) / Math.LN2), o();
    }, t.thresholds = function (n) {
      return arguments.length ? (_ = "function" == typeof n ? n : Array.isArray(n) ? _e(Rh.call(n)) : _e(n), t) : _;
    }, t.bandwidth = function (t) {
      if (!arguments.length) return Math.sqrt(l * (l + 1));if (!((t = +t) >= 0)) throw new Error("invalid bandwidth");return l = Math.round((Math.sqrt(4 * t * t + 1) - 1) / 2), o();
    }, t;
  }, t.dispatch = N, t.drag = function () {
    function n(t) {
      t.on("mousedown.drag", e).filter(g).on("touchstart.drag", o).on("touchmove.drag", a).on("touchend.drag touchcancel.drag", u).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }function e() {
      if (!h && d.apply(this, arguments)) {
        var n = f("mouse", p.apply(this, arguments), pt, this, arguments);n && (ct(t.event.view).on("mousemove.drag", r, !0).on("mouseup.drag", i, !0), _t(t.event.view), gt(), l = !1, c = t.event.clientX, s = t.event.clientY, n("start"));
      }
    }function r() {
      if (yt(), !l) {
        var n = t.event.clientX - c,
            e = t.event.clientY - s;l = n * n + e * e > m;
      }y.mouse("drag");
    }function i() {
      ct(t.event.view).on("mousemove.drag mouseup.drag", null), bt(t.event.view, l), yt(), y.mouse("end");
    }function o() {
      if (d.apply(this, arguments)) {
        var n,
            e,
            r = t.event.changedTouches,
            i = p.apply(this, arguments),
            o = r.length;for (n = 0; n < o; ++n) {
          (e = f(r[n].identifier, i, vt, this, arguments)) && (gt(), e("start"));
        }
      }
    }function a() {
      var n,
          e,
          r = t.event.changedTouches,
          i = r.length;for (n = 0; n < i; ++n) {
        (e = y[r[n].identifier]) && (yt(), e("drag"));
      }
    }function u() {
      var n,
          e,
          r = t.event.changedTouches,
          i = r.length;for (h && clearTimeout(h), h = setTimeout(function () {
        h = null;
      }, 500), n = 0; n < i; ++n) {
        (e = y[r[n].identifier]) && (gt(), e("end"));
      }
    }function f(e, r, i, o, a) {
      var u,
          f,
          c,
          s = i(r, e),
          l = _.copy();if (ot(new xt(n, "beforestart", u, e, b, s[0], s[1], 0, 0, l), function () {
        return null != (t.event.subject = u = v.apply(o, a)) && (f = u.x - s[0] || 0, c = u.y - s[1] || 0, !0);
      })) return function t(h) {
        var d,
            p = s;switch (h) {case "start":
            y[e] = t, d = b++;break;case "end":
            delete y[e], --b;case "drag":
            s = i(r, e), d = b;}ot(new xt(n, h, u, e, d, s[0] + f, s[1] + c, s[0] - p[0], s[1] - p[1], l), l.apply, l, [h, o, a]);
      };
    }var c,
        s,
        l,
        h,
        d = wt,
        p = Mt,
        v = At,
        g = Tt,
        y = {},
        _ = N("start", "drag", "end"),
        b = 0,
        m = 0;return n.filter = function (t) {
      return arguments.length ? (d = "function" == typeof t ? t : mt(!!t), n) : d;
    }, n.container = function (t) {
      return arguments.length ? (p = "function" == typeof t ? t : mt(t), n) : p;
    }, n.subject = function (t) {
      return arguments.length ? (v = "function" == typeof t ? t : mt(t), n) : v;
    }, n.touchable = function (t) {
      return arguments.length ? (g = "function" == typeof t ? t : mt(!!t), n) : g;
    }, n.on = function () {
      var t = _.on.apply(_, arguments);return t === _ ? n : t;
    }, n.clickDistance = function (t) {
      return arguments.length ? (m = (t = +t) * t, n) : Math.sqrt(m);
    }, n;
  }, t.dragDisable = _t, t.dragEnable = bt, t.dsvFormat = Se, t.csvParse = Fh, t.csvParseRows = Ih, t.csvFormat = jh, t.csvFormatRows = Hh, t.tsvParse = Gh, t.tsvParseRows = Vh, t.tsvFormat = $h, t.tsvFormatRows = Wh, t.easeLinear = function (t) {
    return +t;
  }, t.easeQuad = Yn, t.easeQuadIn = function (t) {
    return t * t;
  }, t.easeQuadOut = function (t) {
    return t * (2 - t);
  }, t.easeQuadInOut = Yn, t.easeCubic = Bn, t.easeCubicIn = function (t) {
    return t * t * t;
  }, t.easeCubicOut = function (t) {
    return --t * t * t + 1;
  }, t.easeCubicInOut = Bn, t.easePoly = Il, t.easePolyIn = Bl, t.easePolyOut = Fl, t.easePolyInOut = Il, t.easeSin = Fn, t.easeSinIn = function (t) {
    return 1 - Math.cos(t * Hl);
  }, t.easeSinOut = function (t) {
    return Math.sin(t * Hl);
  }, t.easeSinInOut = Fn, t.easeExp = In, t.easeExpIn = function (t) {
    return Math.pow(2, 10 * t - 10);
  }, t.easeExpOut = function (t) {
    return 1 - Math.pow(2, -10 * t);
  }, t.easeExpInOut = In, t.easeCircle = jn, t.easeCircleIn = function (t) {
    return 1 - Math.sqrt(1 - t * t);
  }, t.easeCircleOut = function (t) {
    return Math.sqrt(1 - --t * t);
  }, t.easeCircleInOut = jn, t.easeBounce = Hn, t.easeBounceIn = function (t) {
    return 1 - Hn(1 - t);
  }, t.easeBounceOut = Hn, t.easeBounceInOut = function (t) {
    return ((t *= 2) <= 1 ? 1 - Hn(1 - t) : Hn(t - 1) + 1) / 2;
  }, t.easeBack = rh, t.easeBackIn = nh, t.easeBackOut = eh, t.easeBackInOut = rh, t.easeElastic = ah, t.easeElasticIn = oh, t.easeElasticOut = ah, t.easeElasticInOut = uh, t.blob = function (t, n) {
    return fetch(t, n).then(Ee);
  }, t.buffer = function (t, n) {
    return fetch(t, n).then(ke);
  }, t.dsv = function (t, n, e, r) {
    3 === arguments.length && "function" == typeof e && (r = e, e = void 0);var i = Se(t);return Pe(n, e).then(function (t) {
      return i.parse(t, r);
    });
  }, t.csv = Zh, t.tsv = Qh, t.image = function (t, n) {
    return new Promise(function (e, r) {
      var i = new Image();for (var o in n) {
        i[o] = n[o];
      }i.onerror = r, i.onload = function () {
        e(i);
      }, i.src = t;
    });
  }, t.json = function (t, n) {
    return fetch(t, n).then(Re);
  }, t.text = Pe, t.xml = Jh, t.html = Kh, t.svg = td, t.forceCenter = function (t, n) {
    function e() {
      var e,
          i,
          o = r.length,
          a = 0,
          u = 0;for (e = 0; e < o; ++e) {
        a += (i = r[e]).x, u += i.y;
      }for (a = a / o - t, u = u / o - n, e = 0; e < o; ++e) {
        (i = r[e]).x -= a, i.y -= u;
      }
    }var r;return null == t && (t = 0), null == n && (n = 0), e.initialize = function (t) {
      r = t;
    }, e.x = function (n) {
      return arguments.length ? (t = +n, e) : t;
    }, e.y = function (t) {
      return arguments.length ? (n = +t, e) : n;
    }, e;
  }, t.forceCollide = function (t) {
    function n() {
      for (var t, n, r, f, c, s, l, h = i.length, d = 0; d < u; ++d) {
        for (n = Fe(i, He, Xe).visitAfter(e), t = 0; t < h; ++t) {
          r = i[t], s = o[r.index], l = s * s, f = r.x + r.vx, c = r.y + r.vy, n.visit(function (t, n, e, i, o) {
            var u = t.data,
                h = t.r,
                d = s + h;if (!u) return n > f + d || i < f - d || e > c + d || o < c - d;if (u.index > r.index) {
              var p = f - u.x - u.vx,
                  v = c - u.y - u.vy,
                  g = p * p + v * v;g < d * d && (0 === p && (p = Ue(), g += p * p), 0 === v && (v = Ue(), g += v * v), g = (d - (g = Math.sqrt(g))) / g * a, r.vx += (p *= g) * (d = (h *= h) / (l + h)), r.vy += (v *= g) * d, u.vx -= p * (d = 1 - d), u.vy -= v * d);
            }
          });
        }
      }
    }function e(t) {
      if (t.data) return t.r = o[t.data.index];for (var n = t.r = 0; n < 4; ++n) {
        t[n] && t[n].r > t.r && (t.r = t[n].r);
      }
    }function r() {
      if (i) {
        var n,
            e,
            r = i.length;for (o = new Array(r), n = 0; n < r; ++n) {
          e = i[n], o[e.index] = +t(e, n, i);
        }
      }
    }var i,
        o,
        a = 1,
        u = 1;return "function" != typeof t && (t = De(null == t ? 1 : +t)), n.initialize = function (t) {
      i = t, r();
    }, n.iterations = function (t) {
      return arguments.length ? (u = +t, n) : u;
    }, n.strength = function (t) {
      return arguments.length ? (a = +t, n) : a;
    }, n.radius = function (e) {
      return arguments.length ? (t = "function" == typeof e ? e : De(+e), r(), n) : t;
    }, n;
  }, t.forceLink = function (t) {
    function n(n) {
      for (var e = 0, r = t.length; e < d; ++e) {
        for (var i, u, f, s, l, h, p, v = 0; v < r; ++v) {
          u = (i = t[v]).source, s = (f = i.target).x + f.vx - u.x - u.vx || Ue(), l = f.y + f.vy - u.y - u.vy || Ue(), s *= h = ((h = Math.sqrt(s * s + l * l)) - a[v]) / h * n * o[v], l *= h, f.vx -= s * (p = c[v]), f.vy -= l * p, u.vx += s * (p = 1 - p), u.vy += l * p;
        }
      }
    }function e() {
      if (u) {
        var n,
            e,
            l = u.length,
            h = t.length,
            d = se(u, s);for (n = 0, f = new Array(l); n < h; ++n) {
          (e = t[n]).index = n, "object" != _typeof(e.source) && (e.source = Ve(d, e.source)), "object" != _typeof(e.target) && (e.target = Ve(d, e.target)), f[e.source.index] = (f[e.source.index] || 0) + 1, f[e.target.index] = (f[e.target.index] || 0) + 1;
        }for (n = 0, c = new Array(h); n < h; ++n) {
          e = t[n], c[n] = f[e.source.index] / (f[e.source.index] + f[e.target.index]);
        }o = new Array(h), r(), a = new Array(h), i();
      }
    }function r() {
      if (u) for (var n = 0, e = t.length; n < e; ++n) {
        o[n] = +l(t[n], n, t);
      }
    }function i() {
      if (u) for (var n = 0, e = t.length; n < e; ++n) {
        a[n] = +h(t[n], n, t);
      }
    }var o,
        a,
        u,
        f,
        c,
        s = Ge,
        l = function l(t) {
      return 1 / Math.min(f[t.source.index], f[t.target.index]);
    },
        h = De(30),
        d = 1;return null == t && (t = []), n.initialize = function (t) {
      u = t, e();
    }, n.links = function (r) {
      return arguments.length ? (t = r, e(), n) : t;
    }, n.id = function (t) {
      return arguments.length ? (s = t, n) : s;
    }, n.iterations = function (t) {
      return arguments.length ? (d = +t, n) : d;
    }, n.strength = function (t) {
      return arguments.length ? (l = "function" == typeof t ? t : De(+t), r(), n) : l;
    }, n.distance = function (t) {
      return arguments.length ? (h = "function" == typeof t ? t : De(+t), i(), n) : h;
    }, n;
  }, t.forceManyBody = function () {
    function t(t) {
      var n,
          u = i.length,
          f = Fe(i, $e, We).visitAfter(e);for (a = t, n = 0; n < u; ++n) {
        o = i[n], f.visit(r);
      }
    }function n() {
      if (i) {
        var t,
            n,
            e = i.length;for (u = new Array(e), t = 0; t < e; ++t) {
          n = i[t], u[n.index] = +f(n, t, i);
        }
      }
    }function e(t) {
      var n,
          e,
          r,
          i,
          o,
          a = 0,
          f = 0;if (t.length) {
        for (r = i = o = 0; o < 4; ++o) {
          (n = t[o]) && (e = Math.abs(n.value)) && (a += n.value, f += e, r += e * n.x, i += e * n.y);
        }t.x = r / f, t.y = i / f;
      } else {
        (n = t).x = n.data.x, n.y = n.data.y;do {
          a += u[n.data.index];
        } while (n = n.next);
      }t.value = a;
    }function r(t, n, e, r) {
      if (!t.value) return !0;var i = t.x - o.x,
          f = t.y - o.y,
          h = r - n,
          d = i * i + f * f;if (h * h / l < d) return d < s && (0 === i && (i = Ue(), d += i * i), 0 === f && (f = Ue(), d += f * f), d < c && (d = Math.sqrt(c * d)), o.vx += i * t.value * a / d, o.vy += f * t.value * a / d), !0;if (!(t.length || d >= s)) {
        (t.data !== o || t.next) && (0 === i && (i = Ue(), d += i * i), 0 === f && (f = Ue(), d += f * f), d < c && (d = Math.sqrt(c * d)));do {
          t.data !== o && (h = u[t.data.index] * a / d, o.vx += i * h, o.vy += f * h);
        } while (t = t.next);
      }
    }var i,
        o,
        a,
        u,
        f = De(-30),
        c = 1,
        s = 1 / 0,
        l = .81;return t.initialize = function (t) {
      i = t, n();
    }, t.strength = function (e) {
      return arguments.length ? (f = "function" == typeof e ? e : De(+e), n(), t) : f;
    }, t.distanceMin = function (n) {
      return arguments.length ? (c = n * n, t) : Math.sqrt(c);
    }, t.distanceMax = function (n) {
      return arguments.length ? (s = n * n, t) : Math.sqrt(s);
    }, t.theta = function (n) {
      return arguments.length ? (l = n * n, t) : Math.sqrt(l);
    }, t;
  }, t.forceRadial = function (t, n, e) {
    function r(t) {
      for (var r = 0, i = o.length; r < i; ++r) {
        var f = o[r],
            c = f.x - n || 1e-6,
            s = f.y - e || 1e-6,
            l = Math.sqrt(c * c + s * s),
            h = (u[r] - l) * a[r] * t / l;f.vx += c * h, f.vy += s * h;
      }
    }function i() {
      if (o) {
        var n,
            e = o.length;for (a = new Array(e), u = new Array(e), n = 0; n < e; ++n) {
          u[n] = +t(o[n], n, o), a[n] = isNaN(u[n]) ? 0 : +f(o[n], n, o);
        }
      }
    }var o,
        a,
        u,
        f = De(.1);return "function" != typeof t && (t = De(+t)), null == n && (n = 0), null == e && (e = 0), r.initialize = function (t) {
      o = t, i();
    }, r.strength = function (t) {
      return arguments.length ? (f = "function" == typeof t ? t : De(+t), i(), r) : f;
    }, r.radius = function (n) {
      return arguments.length ? (t = "function" == typeof n ? n : De(+n), i(), r) : t;
    }, r.x = function (t) {
      return arguments.length ? (n = +t, r) : n;
    }, r.y = function (t) {
      return arguments.length ? (e = +t, r) : e;
    }, r;
  }, t.forceSimulation = function (t) {
    function n() {
      e(), d.call("tick", o), a < u && (h.stop(), d.call("end", o));
    }function e() {
      var n,
          e,
          r = t.length;for (a += (c - a) * f, l.each(function (t) {
        t(a);
      }), n = 0; n < r; ++n) {
        null == (e = t[n]).fx ? e.x += e.vx *= s : (e.x = e.fx, e.vx = 0), null == e.fy ? e.y += e.vy *= s : (e.y = e.fy, e.vy = 0);
      }
    }function r() {
      for (var n, e = 0, r = t.length; e < r; ++e) {
        if (n = t[e], n.index = e, isNaN(n.x) || isNaN(n.y)) {
          var i = rd * Math.sqrt(e),
              o = e * id;n.x = i * Math.cos(o), n.y = i * Math.sin(o);
        }(isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
      }
    }function i(n) {
      return n.initialize && n.initialize(t), n;
    }var o,
        a = 1,
        u = .001,
        f = 1 - Math.pow(u, 1 / 300),
        c = 0,
        s = .6,
        l = se(),
        h = Mn(n),
        d = N("tick", "end");return null == t && (t = []), r(), o = { tick: e, restart: function restart() {
        return h.restart(n), o;
      }, stop: function stop() {
        return h.stop(), o;
      }, nodes: function nodes(n) {
        return arguments.length ? (t = n, r(), l.each(i), o) : t;
      }, alpha: function alpha(t) {
        return arguments.length ? (a = +t, o) : a;
      }, alphaMin: function alphaMin(t) {
        return arguments.length ? (u = +t, o) : u;
      }, alphaDecay: function alphaDecay(t) {
        return arguments.length ? (f = +t, o) : +f;
      }, alphaTarget: function alphaTarget(t) {
        return arguments.length ? (c = +t, o) : c;
      }, velocityDecay: function velocityDecay(t) {
        return arguments.length ? (s = 1 - t, o) : 1 - s;
      }, force: function force(t, n) {
        return arguments.length > 1 ? (null == n ? l.remove(t) : l.set(t, i(n)), o) : l.get(t);
      }, find: function find(n, e, r) {
        var i,
            o,
            a,
            u,
            f,
            c = 0,
            s = t.length;for (null == r ? r = 1 / 0 : r *= r, c = 0; c < s; ++c) {
          (a = (i = n - (u = t[c]).x) * i + (o = e - u.y) * o) < r && (f = u, r = a);
        }return f;
      }, on: function on(t, n) {
        return arguments.length > 1 ? (d.on(t, n), o) : d.on(t);
      } };
  }, t.forceX = function (t) {
    function n(t) {
      for (var n, e = 0, a = r.length; e < a; ++e) {
        (n = r[e]).vx += (o[e] - n.x) * i[e] * t;
      }
    }function e() {
      if (r) {
        var n,
            e = r.length;for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) {
          i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +a(r[n], n, r);
        }
      }
    }var r,
        i,
        o,
        a = De(.1);return "function" != typeof t && (t = De(null == t ? 0 : +t)), n.initialize = function (t) {
      r = t, e();
    }, n.strength = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : De(+t), e(), n) : a;
    }, n.x = function (r) {
      return arguments.length ? (t = "function" == typeof r ? r : De(+r), e(), n) : t;
    }, n;
  }, t.forceY = function (t) {
    function n(t) {
      for (var n, e = 0, a = r.length; e < a; ++e) {
        (n = r[e]).vy += (o[e] - n.y) * i[e] * t;
      }
    }function e() {
      if (r) {
        var n,
            e = r.length;for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) {
          i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +a(r[n], n, r);
        }
      }
    }var r,
        i,
        o,
        a = De(.1);return "function" != typeof t && (t = De(null == t ? 0 : +t)), n.initialize = function (t) {
      r = t, e();
    }, n.strength = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : De(+t), e(), n) : a;
    }, n.y = function (r) {
      return arguments.length ? (t = "function" == typeof r ? r : De(+r), e(), n) : t;
    }, n;
  }, t.formatDefaultLocale = rr, t.formatLocale = er, t.formatSpecifier = Ke, t.precisionFixed = ir, t.precisionPrefix = or, t.precisionRound = ar, t.geoArea = function (t) {
    return sp.reset(), yr(t, lp), 2 * sp;
  }, t.geoBounds = function (t) {
    var n, e, r, i, o, a, u;if (yd = gd = -(pd = vd = 1 / 0), wd = [], yr(t, dp), e = wd.length) {
      for (wd.sort(qr), n = 1, o = [r = wd[0]]; n < e; ++n) {
        Or(r, (i = wd[n])[0]) || Or(r, i[1]) ? (Ur(r[0], i[1]) > Ur(r[0], r[1]) && (r[1] = i[1]), Ur(i[0], r[1]) > Ur(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
      }for (a = -1 / 0, n = 0, r = o[e = o.length - 1]; n <= e; r = i, ++n) {
        i = o[n], (u = Ur(r[1], i[0])) > a && (a = u, pd = i[0], gd = r[1]);
      }
    }return wd = Md = null, pd === 1 / 0 || vd === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[pd, vd], [gd, yd]];
  }, t.geoCentroid = function (t) {
    Ad = Td = Nd = Sd = Ed = kd = Cd = Pd = zd = Rd = Ld = 0, yr(t, pp);var n = zd,
        e = Rd,
        r = Ld,
        i = n * n + e * e + r * r;return i < Id && (n = kd, e = Cd, r = Pd, Td < Fd && (n = Nd, e = Sd, r = Ed), (i = n * n + e * e + r * r) < Id) ? [NaN, NaN] : [Qd(e, n) * Vd, lr(r / op(i)) * Vd];
  }, t.geoCircle = function () {
    function t() {
      var t = r.apply(this, arguments),
          u = i.apply(this, arguments) * $d,
          f = o.apply(this, arguments) * $d;return n = [], e = Jr(-t[0] * $d, -t[1] * $d, 0).invert, ri(a, u, f, 1), t = { type: "Polygon", coordinates: [n] }, n = e = null, t;
    }var n,
        e,
        r = Wr([0, 0]),
        i = Wr(90),
        o = Wr(6),
        a = { point: function point(t, r) {
        n.push(t = e(t, r)), t[0] *= Vd, t[1] *= Vd;
      } };return t.center = function (n) {
      return arguments.length ? (r = "function" == typeof n ? n : Wr([+n[0], +n[1]]), t) : r;
    }, t.radius = function (n) {
      return arguments.length ? (i = "function" == typeof n ? n : Wr(+n), t) : i;
    }, t.precision = function (n) {
      return arguments.length ? (o = "function" == typeof n ? n : Wr(+n), t) : o;
    }, t;
  }, t.geoClipAntimeridian = Sp, t.geoClipCircle = pi, t.geoClipExtent = function () {
    var t,
        n,
        e,
        r = 0,
        i = 0,
        o = 960,
        a = 500;return e = { stream: function stream(e) {
        return t && n === e ? t : t = vi(r, i, o, a)(n = e);
      }, extent: function extent(u) {
        return arguments.length ? (r = +u[0][0], i = +u[0][1], o = +u[1][0], a = +u[1][1], t = n = null, e) : [[r, i], [o, a]];
      } };
  }, t.geoClipRectangle = vi, t.geoContains = function (t, n) {
    return (t && Lp.hasOwnProperty(t.type) ? Lp[t.type] : xi)(t, n);
  }, t.geoDistance = mi, t.geoGraticule = ki, t.geoGraticule10 = function () {
    return ki()();
  }, t.geoInterpolate = function (t, n) {
    var e = t[0] * $d,
        r = t[1] * $d,
        i = n[0] * $d,
        o = n[1] * $d,
        a = Jd(r),
        u = rp(r),
        f = Jd(o),
        c = rp(o),
        s = a * Jd(e),
        l = a * rp(e),
        h = f * Jd(i),
        d = f * rp(i),
        p = 2 * lr(op(hr(o - r) + a * f * hr(i - e))),
        v = rp(p),
        g = p ? function (t) {
      var n = rp(t *= p) / v,
          e = rp(p - t) / v,
          r = e * s + n * h,
          i = e * l + n * d,
          o = e * u + n * c;return [Qd(i, r) * Vd, Qd(o, op(r * r + i * i)) * Vd];
    } : function () {
      return [e * Vd, r * Vd];
    };return g.distance = p, g;
  }, t.geoLength = bi, t.geoPath = function (t, n) {
    function e(t) {
      return t && ("function" == typeof o && i.pointRadius(+o.apply(this, arguments)), yr(t, r(i))), i.result();
    }var r,
        i,
        o = 4.5;return e.area = function (t) {
      return yr(t, r(Op)), Op.result();
    }, e.measure = function (t) {
      return yr(t, r(av)), av.result();
    }, e.bounds = function (t) {
      return yr(t, r(jp)), jp.result();
    }, e.centroid = function (t) {
      return yr(t, r(Kp)), Kp.result();
    }, e.projection = function (n) {
      return arguments.length ? (r = null == n ? (t = null, Ci) : (t = n).stream, e) : t;
    }, e.context = function (t) {
      return arguments.length ? (i = null == t ? (n = null, new Vi()) : new Hi(n = t), "function" != typeof o && i.pointRadius(o), e) : n;
    }, e.pointRadius = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : (i.pointRadius(+t), +t), e) : o;
    }, e.projection(t).context(n);
  }, t.geoAlbers = co, t.geoAlbersUsa = function () {
    function t(t) {
      var n = t[0],
          e = t[1];return u = null, i.point(n, e), u || (o.point(n, e), u) || (a.point(n, e), u);
    }function n() {
      return e = r = null, t;
    }var e,
        r,
        i,
        o,
        a,
        u,
        f = co(),
        c = fo().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
        s = fo().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
        l = { point: function point(t, n) {
        u = [t, n];
      } };return t.invert = function (t) {
      var n = f.scale(),
          e = f.translate(),
          r = (t[0] - e[0]) / n,
          i = (t[1] - e[1]) / n;return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? c : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? s : f).invert(t);
    }, t.stream = function (t) {
      return e && r === t ? e : e = function (t) {
        var n = t.length;return { point: function point(e, r) {
            for (var i = -1; ++i < n;) {
              t[i].point(e, r);
            }
          }, sphere: function sphere() {
            for (var e = -1; ++e < n;) {
              t[e].sphere();
            }
          }, lineStart: function lineStart() {
            for (var e = -1; ++e < n;) {
              t[e].lineStart();
            }
          }, lineEnd: function lineEnd() {
            for (var e = -1; ++e < n;) {
              t[e].lineEnd();
            }
          }, polygonStart: function polygonStart() {
            for (var e = -1; ++e < n;) {
              t[e].polygonStart();
            }
          }, polygonEnd: function polygonEnd() {
            for (var e = -1; ++e < n;) {
              t[e].polygonEnd();
            }
          } };
      }([f.stream(r = t), c.stream(t), s.stream(t)]);
    }, t.precision = function (t) {
      return arguments.length ? (f.precision(t), c.precision(t), s.precision(t), n()) : f.precision();
    }, t.scale = function (n) {
      return arguments.length ? (f.scale(n), c.scale(.35 * n), s.scale(n), t.translate(f.translate())) : f.scale();
    }, t.translate = function (t) {
      if (!arguments.length) return f.translate();var e = f.scale(),
          r = +t[0],
          u = +t[1];return i = f.translate(t).clipExtent([[r - .455 * e, u - .238 * e], [r + .455 * e, u + .238 * e]]).stream(l), o = c.translate([r - .307 * e, u + .201 * e]).clipExtent([[r - .425 * e + Fd, u + .12 * e + Fd], [r - .214 * e - Fd, u + .234 * e - Fd]]).stream(l), a = s.translate([r - .205 * e, u + .212 * e]).clipExtent([[r - .214 * e + Fd, u + .166 * e + Fd], [r - .115 * e - Fd, u + .234 * e - Fd]]).stream(l), n();
    }, t.fitExtent = function (n, e) {
      return Ji(t, n, e);
    }, t.fitSize = function (n, e) {
      return Ki(t, n, e);
    }, t.fitWidth = function (n, e) {
      return to(t, n, e);
    }, t.fitHeight = function (n, e) {
      return no(t, n, e);
    }, t.scale(1070);
  }, t.geoAzimuthalEqualArea = function () {
    return io(sv).scale(124.75).clipAngle(179.999);
  }, t.geoAzimuthalEqualAreaRaw = sv, t.geoAzimuthalEquidistant = function () {
    return io(lv).scale(79.4188).clipAngle(179.999);
  }, t.geoAzimuthalEquidistantRaw = lv, t.geoConicConformal = function () {
    return ao(go).scale(109.5).parallels([30, 30]);
  }, t.geoConicConformalRaw = go, t.geoConicEqualArea = fo, t.geoConicEqualAreaRaw = uo, t.geoConicEquidistant = function () {
    return ao(_o).scale(131.154).center([0, 13.9389]);
  }, t.geoConicEquidistantRaw = _o, t.geoEquirectangular = function () {
    return io(yo).scale(152.63);
  }, t.geoEquirectangularRaw = yo, t.geoGnomonic = function () {
    return io(bo).scale(144.049).clipAngle(60);
  }, t.geoGnomonicRaw = bo, t.geoIdentity = function () {
    function t() {
      return i = o = null, a;
    }var n,
        e,
        r,
        i,
        o,
        a,
        u = 1,
        f = 0,
        c = 0,
        s = 1,
        l = 1,
        h = Ci,
        d = null,
        p = Ci;return a = { stream: function stream(t) {
        return i && o === t ? i : i = h(p(o = t));
      }, postclip: function postclip(i) {
        return arguments.length ? (p = i, d = n = e = r = null, t()) : p;
      }, clipExtent: function clipExtent(i) {
        return arguments.length ? (p = null == i ? (d = n = e = r = null, Ci) : vi(d = +i[0][0], n = +i[0][1], e = +i[1][0], r = +i[1][1]), t()) : null == d ? null : [[d, n], [e, r]];
      }, scale: function scale(n) {
        return arguments.length ? (h = mo((u = +n) * s, u * l, f, c), t()) : u;
      }, translate: function translate(n) {
        return arguments.length ? (h = mo(u * s, u * l, f = +n[0], c = +n[1]), t()) : [f, c];
      }, reflectX: function reflectX(n) {
        return arguments.length ? (h = mo(u * (s = n ? -1 : 1), u * l, f, c), t()) : s < 0;
      }, reflectY: function reflectY(n) {
        return arguments.length ? (h = mo(u * s, u * (l = n ? -1 : 1), f, c), t()) : l < 0;
      }, fitExtent: function fitExtent(t, n) {
        return Ji(a, t, n);
      }, fitSize: function fitSize(t, n) {
        return Ki(a, t, n);
      }, fitWidth: function fitWidth(t, n) {
        return to(a, t, n);
      }, fitHeight: function fitHeight(t, n) {
        return no(a, t, n);
      } };
  }, t.geoProjection = io, t.geoProjectionMutator = oo, t.geoMercator = function () {
    return po(ho).scale(961 / Gd);
  }, t.geoMercatorRaw = ho, t.geoNaturalEarth1 = function () {
    return io(xo).scale(175.295);
  }, t.geoNaturalEarth1Raw = xo, t.geoOrthographic = function () {
    return io(wo).scale(249.5).clipAngle(90 + Fd);
  }, t.geoOrthographicRaw = wo, t.geoStereographic = function () {
    return io(Mo).scale(250).clipAngle(142);
  }, t.geoStereographicRaw = Mo, t.geoTransverseMercator = function () {
    var t = po(Ao),
        n = t.center,
        e = t.rotate;return t.center = function (t) {
      return arguments.length ? n([-t[1], t[0]]) : (t = n(), [t[1], -t[0]]);
    }, t.rotate = function (t) {
      return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = e(), [t[0], t[1], t[2] - 90]);
    }, e([0, 0, 90]).scale(159.155);
  }, t.geoTransverseMercatorRaw = Ao, t.geoRotation = ei, t.geoStream = yr, t.geoTransform = function (t) {
    return { stream: Wi(t) };
  }, t.cluster = function () {
    function t(t) {
      var o,
          a = 0;t.eachAfter(function (t) {
        var e = t.children;e ? (t.x = function (t) {
          return t.reduce(No, 0) / t.length;
        }(e), t.y = function (t) {
          return 1 + t.reduce(So, 0);
        }(e)) : (t.x = o ? a += n(t, o) : 0, t.y = 0, o = t);
      });var u = function (t) {
        for (var n; n = t.children;) {
          t = n[0];
        }return t;
      }(t),
          f = function (t) {
        for (var n; n = t.children;) {
          t = n[n.length - 1];
        }return t;
      }(t),
          c = u.x - n(u, f) / 2,
          s = f.x + n(f, u) / 2;return t.eachAfter(i ? function (n) {
        n.x = (n.x - t.x) * e, n.y = (t.y - n.y) * r;
      } : function (n) {
        n.x = (n.x - c) / (s - c) * e, n.y = (1 - (t.y ? n.y / t.y : 1)) * r;
      });
    }var n = To,
        e = 1,
        r = 1,
        i = !1;return t.separation = function (e) {
      return arguments.length ? (n = e, t) : n;
    }, t.size = function (n) {
      return arguments.length ? (i = !1, e = +n[0], r = +n[1], t) : i ? null : [e, r];
    }, t.nodeSize = function (n) {
      return arguments.length ? (i = !0, e = +n[0], r = +n[1], t) : i ? [e, r] : null;
    }, t;
  }, t.hierarchy = ko, t.pack = function () {
    function t(t) {
      return t.x = e / 2, t.y = r / 2, n ? t.eachBefore(Wo(n)).eachAfter(Zo(i, .5)).eachBefore(Qo(1)) : t.eachBefore(Wo($o)).eachAfter(Zo(Go, 1)).eachAfter(Zo(i, t.r / Math.min(e, r))).eachBefore(Qo(Math.min(e, r) / (2 * t.r))), t;
    }var n = null,
        e = 1,
        r = 1,
        i = Go;return t.radius = function (e) {
      return arguments.length ? (n = function (t) {
        return null == t ? null : Xo(t);
      }(e), t) : n;
    }, t.size = function (n) {
      return arguments.length ? (e = +n[0], r = +n[1], t) : [e, r];
    }, t.padding = function (n) {
      return arguments.length ? (i = "function" == typeof n ? n : Vo(+n), t) : i;
    }, t;
  }, t.packSiblings = function (t) {
    return Ho(t), t;
  }, t.packEnclose = Lo, t.partition = function () {
    function t(t) {
      var o = t.height + 1;return t.x0 = t.y0 = r, t.x1 = n, t.y1 = e / o, t.eachBefore(function (t, n) {
        return function (e) {
          e.children && Ko(e, e.x0, t * (e.depth + 1) / n, e.x1, t * (e.depth + 2) / n);var i = e.x0,
              o = e.y0,
              a = e.x1 - r,
              u = e.y1 - r;a < i && (i = a = (i + a) / 2), u < o && (o = u = (o + u) / 2), e.x0 = i, e.y0 = o, e.x1 = a, e.y1 = u;
        };
      }(e, o)), i && t.eachBefore(Jo), t;
    }var n = 1,
        e = 1,
        r = 0,
        i = !1;return t.round = function (n) {
      return arguments.length ? (i = !!n, t) : i;
    }, t.size = function (r) {
      return arguments.length ? (n = +r[0], e = +r[1], t) : [n, e];
    }, t.padding = function (n) {
      return arguments.length ? (r = +n, t) : r;
    }, t;
  }, t.stratify = function () {
    function t(t) {
      var r,
          i,
          o,
          a,
          u,
          f,
          c,
          s = t.length,
          l = new Array(s),
          h = {};for (i = 0; i < s; ++i) {
        r = t[i], u = l[i] = new Ro(r), null != (f = n(r, i, t)) && (f += "") && (h[c = dv + (u.id = f)] = c in h ? vv : u);
      }for (i = 0; i < s; ++i) {
        if (u = l[i], null != (f = e(t[i], i, t)) && (f += "")) {
          if (!(a = h[dv + f])) throw new Error("missing: " + f);if (a === vv) throw new Error("ambiguous: " + f);a.children ? a.children.push(u) : a.children = [u], u.parent = a;
        } else {
          if (o) throw new Error("multiple roots");o = u;
        }
      }if (!o) throw new Error("no root");if (o.parent = pv, o.eachBefore(function (t) {
        t.depth = t.parent.depth + 1, --s;
      }).eachBefore(zo), o.parent = null, s > 0) throw new Error("cycle");return o;
    }var n = ta,
        e = na;return t.id = function (e) {
      return arguments.length ? (n = Xo(e), t) : n;
    }, t.parentId = function (n) {
      return arguments.length ? (e = Xo(n), t) : e;
    }, t;
  }, t.tree = function () {
    function t(t) {
      var f = function (t) {
        for (var n, e, r, i, o, a = new ua(t, 0), u = [a]; n = u.pop();) {
          if (r = n._.children) for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i) {
            u.push(e = n.children[i] = new ua(r[i], i)), e.parent = n;
          }
        }return (a.parent = new ua(null, 0)).children = [a], a;
      }(t);if (f.eachAfter(n), f.parent.m = -f.z, f.eachBefore(e), u) t.eachBefore(r);else {
        var c = t,
            s = t,
            l = t;t.eachBefore(function (t) {
          t.x < c.x && (c = t), t.x > s.x && (s = t), t.depth > l.depth && (l = t);
        });var h = c === s ? 1 : i(c, s) / 2,
            d = h - c.x,
            p = o / (s.x + h + d),
            v = a / (l.depth || 1);t.eachBefore(function (t) {
          t.x = (t.x + d) * p, t.y = t.depth * v;
        });
      }return t;
    }function n(t) {
      var n = t.children,
          e = t.parent.children,
          r = t.i ? e[t.i - 1] : null;if (n) {
        (function (t) {
          for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;) {
            (n = i[o]).z += e, n.m += e, e += n.s + (r += n.c);
          }
        })(t);var o = (n[0].z + n[n.length - 1].z) / 2;r ? (t.z = r.z + i(t._, r._), t.m = t.z - o) : t.z = o;
      } else r && (t.z = r.z + i(t._, r._));t.parent.A = function (t, n, e) {
        if (n) {
          for (var r, o = t, a = t, u = n, f = o.parent.children[0], c = o.m, s = a.m, l = u.m, h = f.m; u = ia(u), o = ra(o), u && o;) {
            f = ra(f), (a = ia(a)).a = t, (r = u.z + l - o.z - c + i(u._, o._)) > 0 && (oa(aa(u, t, e), t, r), c += r, s += r), l += u.m, c += o.m, h += f.m, s += a.m;
          }u && !ia(a) && (a.t = u, a.m += l - s), o && !ra(f) && (f.t = o, f.m += c - h, e = t);
        }return e;
      }(t, r, t.parent.A || e[0]);
    }function e(t) {
      t._.x = t.z + t.parent.m, t.m += t.parent.m;
    }function r(t) {
      t.x *= o, t.y = t.depth * a;
    }var i = ea,
        o = 1,
        a = 1,
        u = null;return t.separation = function (n) {
      return arguments.length ? (i = n, t) : i;
    }, t.size = function (n) {
      return arguments.length ? (u = !1, o = +n[0], a = +n[1], t) : u ? null : [o, a];
    }, t.nodeSize = function (n) {
      return arguments.length ? (u = !0, o = +n[0], a = +n[1], t) : u ? [o, a] : null;
    }, t;
  }, t.treemap = function () {
    function t(t) {
      return t.x0 = t.y0 = 0, t.x1 = i, t.y1 = o, t.eachBefore(n), a = [0], r && t.eachBefore(Jo), t;
    }function n(t) {
      var n = a[t.depth],
          r = t.x0 + n,
          i = t.y0 + n,
          o = t.x1 - n,
          h = t.y1 - n;o < r && (r = o = (r + o) / 2), h < i && (i = h = (i + h) / 2), t.x0 = r, t.y0 = i, t.x1 = o, t.y1 = h, t.children && (n = a[t.depth + 1] = u(t) / 2, r += l(t) - n, i += f(t) - n, o -= c(t) - n, h -= s(t) - n, o < r && (r = o = (r + o) / 2), h < i && (i = h = (i + h) / 2), e(t, r, i, o, h));
    }var e = yv,
        r = !1,
        i = 1,
        o = 1,
        a = [0],
        u = Go,
        f = Go,
        c = Go,
        s = Go,
        l = Go;return t.round = function (n) {
      return arguments.length ? (r = !!n, t) : r;
    }, t.size = function (n) {
      return arguments.length ? (i = +n[0], o = +n[1], t) : [i, o];
    }, t.tile = function (n) {
      return arguments.length ? (e = Xo(n), t) : e;
    }, t.padding = function (n) {
      return arguments.length ? t.paddingInner(n).paddingOuter(n) : t.paddingInner();
    }, t.paddingInner = function (n) {
      return arguments.length ? (u = "function" == typeof n ? n : Vo(+n), t) : u;
    }, t.paddingOuter = function (n) {
      return arguments.length ? t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n) : t.paddingTop();
    }, t.paddingTop = function (n) {
      return arguments.length ? (f = "function" == typeof n ? n : Vo(+n), t) : f;
    }, t.paddingRight = function (n) {
      return arguments.length ? (c = "function" == typeof n ? n : Vo(+n), t) : c;
    }, t.paddingBottom = function (n) {
      return arguments.length ? (s = "function" == typeof n ? n : Vo(+n), t) : s;
    }, t.paddingLeft = function (n) {
      return arguments.length ? (l = "function" == typeof n ? n : Vo(+n), t) : l;
    }, t;
  }, t.treemapBinary = function (t, n, e, r, i) {
    function o(t, n, e, r, i, a, u) {
      if (t >= n - 1) {
        var c = f[t];return c.x0 = r, c.y0 = i, c.x1 = a, void (c.y1 = u);
      }for (var l = s[t], h = e / 2 + l, d = t + 1, p = n - 1; d < p;) {
        var v = d + p >>> 1;s[v] < h ? d = v + 1 : p = v;
      }h - s[d - 1] < s[d] - h && t + 1 < d && --d;var g = s[d] - l,
          y = e - g;if (a - r > u - i) {
        var _ = (r * y + a * g) / e;o(t, d, g, r, i, _, u), o(d, n, y, _, i, a, u);
      } else {
        var b = (i * y + u * g) / e;o(t, d, g, r, i, a, b), o(d, n, y, r, b, a, u);
      }
    }var a,
        u,
        f = t.children,
        c = f.length,
        s = new Array(c + 1);for (s[0] = u = a = 0; a < c; ++a) {
      s[a + 1] = u += f[a].value;
    }o(0, c, t.value, n, e, r, i);
  }, t.treemapDice = Ko, t.treemapSlice = fa, t.treemapSliceDice = function (t, n, e, r, i) {
    (1 & t.depth ? fa : Ko)(t, n, e, r, i);
  }, t.treemapSquarify = yv, t.treemapResquarify = _v, t.interpolate = ln, t.interpolateArray = an, t.interpolateBasis = Qt, t.interpolateBasisClosed = Jt, t.interpolateDate = un, t.interpolateNumber = fn, t.interpolateObject = cn, t.interpolateRound = hn, t.interpolateString = sn, t.interpolateTransformCss = ul, t.interpolateTransformSvg = fl, t.interpolateZoom = gn, t.interpolateRgb = tl, t.interpolateRgbBasis = nl, t.interpolateRgbBasisClosed = el, t.interpolateHsl = dl, t.interpolateHslLong = pl, t.interpolateLab = function (t, n) {
    var e = rn((t = Bt(t)).l, (n = Bt(n)).l),
        r = rn(t.a, n.a),
        i = rn(t.b, n.b),
        o = rn(t.opacity, n.opacity);return function (n) {
      return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + "";
    };
  }, t.interpolateHcl = vl, t.interpolateHclLong = gl, t.interpolateCubehelix = yl, t.interpolateCubehelixLong = _l, t.quantize = function (t, n) {
    for (var e = new Array(n), r = 0; r < n; ++r) {
      e[r] = t(r / (n - 1));
    }return e;
  }, t.path = re, t.polygonArea = function (t) {
    for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;) {
      n = i, i = t[e], o += n[1] * i[0] - n[0] * i[1];
    }return o / 2;
  }, t.polygonCentroid = function (t) {
    for (var n, e, r = -1, i = t.length, o = 0, a = 0, u = t[i - 1], f = 0; ++r < i;) {
      n = u, u = t[r], f += e = n[0] * u[1] - u[0] * n[1], o += (n[0] + u[0]) * e, a += (n[1] + u[1]) * e;
    }return f *= 3, [o / f, a / f];
  }, t.polygonHull = function (t) {
    if ((e = t.length) < 3) return null;var n,
        e,
        r = new Array(e),
        i = new Array(e);for (n = 0; n < e; ++n) {
      r[n] = [+t[n][0], +t[n][1], n];
    }for (r.sort(la), n = 0; n < e; ++n) {
      i[n] = [r[n][0], -r[n][1]];
    }var o = ha(r),
        a = ha(i),
        u = a[0] === o[0],
        f = a[a.length - 1] === o[o.length - 1],
        c = [];for (n = o.length - 1; n >= 0; --n) {
      c.push(t[r[o[n]][2]]);
    }for (n = +u; n < a.length - f; ++n) {
      c.push(t[r[a[n]][2]]);
    }return c;
  }, t.polygonContains = function (t, n) {
    for (var e, r, i = t.length, o = t[i - 1], a = n[0], u = n[1], f = o[0], c = o[1], s = !1, l = 0; l < i; ++l) {
      e = (o = t[l])[0], (r = o[1]) > u != c > u && a < (f - e) * (u - r) / (c - r) + e && (s = !s), f = e, c = r;
    }return s;
  }, t.polygonLength = function (t) {
    for (var n, e, r = -1, i = t.length, o = t[i - 1], a = o[0], u = o[1], f = 0; ++r < i;) {
      n = a, e = u, n -= a = (o = t[r])[0], e -= u = o[1], f += Math.sqrt(n * n + e * e);
    }return f;
  }, t.quadtree = Fe, t.randomUniform = bv, t.randomNormal = mv, t.randomLogNormal = xv, t.randomBates = Mv, t.randomIrwinHall = wv, t.randomExponential = Av, t.scaleBand = va, t.scalePoint = function () {
    return ga(va().paddingInner(1));
  }, t.scaleIdentity = Na, t.scaleLinear = Ta, t.scaleLog = La, t.scaleOrdinal = pa, t.scaleImplicit = Ev, t.scalePow = Ua, t.scaleSqrt = function () {
    return Ua().exponent(.5);
  }, t.scaleQuantile = qa, t.scaleQuantize = Oa, t.scaleThreshold = Ya, t.scaleTime = function () {
    return ef(ag, ig, Hv, Iv, Bv, Ov, Uv, zv, t.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]);
  }, t.scaleUtc = function () {
    return ef(Cg, Eg, pg, hg, sg, fg, Uv, zv, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]);
  }, t.scaleSequential = rf, t.schemeCategory10 = Vg, t.schemeAccent = $g, t.schemeDark2 = Wg, t.schemePaired = Zg, t.schemePastel1 = Qg, t.schemePastel2 = Jg, t.schemeSet1 = Kg, t.schemeSet2 = ty, t.schemeSet3 = ny, t.interpolateBrBG = ry, t.schemeBrBG = ey, t.interpolatePRGn = oy, t.schemePRGn = iy, t.interpolatePiYG = uy, t.schemePiYG = ay, t.interpolatePuOr = cy, t.schemePuOr = fy, t.interpolateRdBu = ly, t.schemeRdBu = sy, t.interpolateRdGy = dy, t.schemeRdGy = hy, t.interpolateRdYlBu = vy, t.schemeRdYlBu = py, t.interpolateRdYlGn = yy, t.schemeRdYlGn = gy, t.interpolateSpectral = by, t.schemeSpectral = _y, t.interpolateBuGn = xy, t.schemeBuGn = my, t.interpolateBuPu = My, t.schemeBuPu = wy, t.interpolateGnBu = Ty, t.schemeGnBu = Ay, t.interpolateOrRd = Sy, t.schemeOrRd = Ny, t.interpolatePuBuGn = ky, t.schemePuBuGn = Ey, t.interpolatePuBu = Py, t.schemePuBu = Cy, t.interpolatePuRd = Ry, t.schemePuRd = zy, t.interpolateRdPu = Dy, t.schemeRdPu = Ly, t.interpolateYlGnBu = qy, t.schemeYlGnBu = Uy, t.interpolateYlGn = Yy, t.schemeYlGn = Oy, t.interpolateYlOrBr = Fy, t.schemeYlOrBr = By, t.interpolateYlOrRd = jy, t.schemeYlOrRd = Iy, t.interpolateBlues = Xy, t.schemeBlues = Hy, t.interpolateGreens = Vy, t.schemeGreens = Gy, t.interpolateGreys = Wy, t.schemeGreys = $y, t.interpolatePurples = Qy, t.schemePurples = Zy, t.interpolateReds = Ky, t.schemeReds = Jy, t.interpolateOranges = n_, t.schemeOranges = t_, t.interpolateCubehelixDefault = e_, t.interpolateRainbow = function (t) {
    (t < 0 || t > 1) && (t -= Math.floor(t));var n = Math.abs(t - .5);return o_.h = 360 * t - 100, o_.s = 1.5 - 1.5 * n, o_.l = .8 - .9 * n, o_ + "";
  }, t.interpolateWarm = r_, t.interpolateCool = i_, t.interpolateViridis = a_, t.interpolateMagma = u_, t.interpolateInferno = f_, t.interpolatePlasma = c_, t.create = function (t) {
    return ct(C(t).call(document.documentElement));
  }, t.creator = C, t.local = st, t.matcher = gs, t.mouse = pt, t.namespace = k, t.namespaces = hs, t.clientPoint = dt, t.select = ct, t.selectAll = function (t) {
    return "string" == typeof t ? new ut([document.querySelectorAll(t)], [document.documentElement]) : new ut([null == t ? [] : t], bs);
  }, t.selection = ft, t.selector = z, t.selectorAll = L, t.style = F, t.touch = vt, t.touches = function (t, n) {
    null == n && (n = ht().touches);for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e) {
      i[e] = dt(t, n[e]);
    }return i;
  }, t.window = B, t.customEvent = ot, t.arc = function () {
    function t() {
      var t,
          c,
          s = +n.apply(this, arguments),
          l = +e.apply(this, arguments),
          h = o.apply(this, arguments) - b_,
          d = a.apply(this, arguments) - b_,
          p = s_(d - h),
          v = d > h;if (f || (f = t = re()), l < s && (c = l, l = s, s = c), l > y_) {
        if (p > m_ - y_) f.moveTo(l * h_(h), l * v_(h)), f.arc(0, 0, l, h, d, !v), s > y_ && (f.moveTo(s * h_(d), s * v_(d)), f.arc(0, 0, s, d, h, v));else {
          var g,
              y,
              _ = h,
              b = d,
              m = h,
              x = d,
              w = p,
              M = p,
              A = u.apply(this, arguments) / 2,
              T = A > y_ && (i ? +i.apply(this, arguments) : g_(s * s + l * l)),
              N = p_(s_(l - s) / 2, +r.apply(this, arguments)),
              S = N,
              E = N;if (T > y_) {
            var k = cf(T / s * v_(A)),
                C = cf(T / l * v_(A));(w -= 2 * k) > y_ ? (k *= v ? 1 : -1, m += k, x -= k) : (w = 0, m = x = (h + d) / 2), (M -= 2 * C) > y_ ? (C *= v ? 1 : -1, _ += C, b -= C) : (M = 0, _ = b = (h + d) / 2);
          }var P = l * h_(_),
              z = l * v_(_),
              R = s * h_(x),
              L = s * v_(x);if (N > y_) {
            var D = l * h_(b),
                U = l * v_(b),
                q = s * h_(m),
                O = s * v_(m);if (p < __) {
              var Y = w > y_ ? function (t, n, e, r, i, o, a, u) {
                var f = e - t,
                    c = r - n,
                    s = a - i,
                    l = u - o,
                    h = (s * (n - o) - l * (t - i)) / (l * f - s * c);return [t + h * f, n + h * c];
              }(P, z, q, O, D, U, R, L) : [R, L],
                  B = P - Y[0],
                  F = z - Y[1],
                  I = D - Y[0],
                  j = U - Y[1],
                  H = 1 / v_(function (t) {
                return t > 1 ? 0 : t < -1 ? __ : Math.acos(t);
              }((B * I + F * j) / (g_(B * B + F * F) * g_(I * I + j * j))) / 2),
                  X = g_(Y[0] * Y[0] + Y[1] * Y[1]);S = p_(N, (s - X) / (H - 1)), E = p_(N, (l - X) / (H + 1));
            }
          }M > y_ ? E > y_ ? (g = vf(q, O, P, z, l, E, v), y = vf(D, U, R, L, l, E, v), f.moveTo(g.cx + g.x01, g.cy + g.y01), E < N ? f.arc(g.cx, g.cy, E, l_(g.y01, g.x01), l_(y.y01, y.x01), !v) : (f.arc(g.cx, g.cy, E, l_(g.y01, g.x01), l_(g.y11, g.x11), !v), f.arc(0, 0, l, l_(g.cy + g.y11, g.cx + g.x11), l_(y.cy + y.y11, y.cx + y.x11), !v), f.arc(y.cx, y.cy, E, l_(y.y11, y.x11), l_(y.y01, y.x01), !v))) : (f.moveTo(P, z), f.arc(0, 0, l, _, b, !v)) : f.moveTo(P, z), s > y_ && w > y_ ? S > y_ ? (g = vf(R, L, D, U, s, -S, v), y = vf(P, z, q, O, s, -S, v), f.lineTo(g.cx + g.x01, g.cy + g.y01), S < N ? f.arc(g.cx, g.cy, S, l_(g.y01, g.x01), l_(y.y01, y.x01), !v) : (f.arc(g.cx, g.cy, S, l_(g.y01, g.x01), l_(g.y11, g.x11), !v), f.arc(0, 0, s, l_(g.cy + g.y11, g.cx + g.x11), l_(y.cy + y.y11, y.cx + y.x11), v), f.arc(y.cx, y.cy, S, l_(y.y11, y.x11), l_(y.y01, y.x01), !v))) : f.arc(0, 0, s, x, m, v) : f.lineTo(R, L);
        }
      } else f.moveTo(0, 0);if (f.closePath(), t) return f = null, t + "" || null;
    }var n = sf,
        e = lf,
        r = ff(0),
        i = null,
        o = hf,
        a = df,
        u = pf,
        f = null;return t.centroid = function () {
      var t = (+n.apply(this, arguments) + +e.apply(this, arguments)) / 2,
          r = (+o.apply(this, arguments) + +a.apply(this, arguments)) / 2 - __ / 2;return [h_(r) * t, v_(r) * t];
    }, t.innerRadius = function (e) {
      return arguments.length ? (n = "function" == typeof e ? e : ff(+e), t) : n;
    }, t.outerRadius = function (n) {
      return arguments.length ? (e = "function" == typeof n ? n : ff(+n), t) : e;
    }, t.cornerRadius = function (n) {
      return arguments.length ? (r = "function" == typeof n ? n : ff(+n), t) : r;
    }, t.padRadius = function (n) {
      return arguments.length ? (i = null == n ? null : "function" == typeof n ? n : ff(+n), t) : i;
    }, t.startAngle = function (n) {
      return arguments.length ? (o = "function" == typeof n ? n : ff(+n), t) : o;
    }, t.endAngle = function (n) {
      return arguments.length ? (a = "function" == typeof n ? n : ff(+n), t) : a;
    }, t.padAngle = function (n) {
      return arguments.length ? (u = "function" == typeof n ? n : ff(+n), t) : u;
    }, t.context = function (n) {
      return arguments.length ? (f = null == n ? null : n, t) : f;
    }, t;
  }, t.area = xf, t.line = mf, t.pie = function () {
    function t(t) {
      var u,
          f,
          c,
          s,
          l,
          h = t.length,
          d = 0,
          p = new Array(h),
          v = new Array(h),
          g = +i.apply(this, arguments),
          y = Math.min(m_, Math.max(-m_, o.apply(this, arguments) - g)),
          _ = Math.min(Math.abs(y) / h, a.apply(this, arguments)),
          b = _ * (y < 0 ? -1 : 1);for (u = 0; u < h; ++u) {
        (l = v[p[u] = u] = +n(t[u], u, t)) > 0 && (d += l);
      }for (null != e ? p.sort(function (t, n) {
        return e(v[t], v[n]);
      }) : null != r && p.sort(function (n, e) {
        return r(t[n], t[e]);
      }), u = 0, c = d ? (y - h * b) / d : 0; u < h; ++u, g = s) {
        f = p[u], s = g + ((l = v[f]) > 0 ? l * c : 0) + b, v[f] = { data: t[f], index: u, value: l, startAngle: g, endAngle: s, padAngle: _ };
      }return v;
    }var n = Mf,
        e = wf,
        r = null,
        i = ff(0),
        o = ff(m_),
        a = ff(0);return t.value = function (e) {
      return arguments.length ? (n = "function" == typeof e ? e : ff(+e), t) : n;
    }, t.sortValues = function (n) {
      return arguments.length ? (e = n, r = null, t) : e;
    }, t.sort = function (n) {
      return arguments.length ? (r = n, e = null, t) : r;
    }, t.startAngle = function (n) {
      return arguments.length ? (i = "function" == typeof n ? n : ff(+n), t) : i;
    }, t.endAngle = function (n) {
      return arguments.length ? (o = "function" == typeof n ? n : ff(+n), t) : o;
    }, t.padAngle = function (n) {
      return arguments.length ? (a = "function" == typeof n ? n : ff(+n), t) : a;
    }, t;
  }, t.areaRadial = Ef, t.radialArea = Ef, t.lineRadial = Sf, t.radialLine = Sf, t.pointRadial = kf, t.linkHorizontal = function () {
    return zf(Rf);
  }, t.linkVertical = function () {
    return zf(Lf);
  }, t.linkRadial = function () {
    var t = zf(Df);return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t;
  }, t.symbol = function () {
    function t() {
      var t;if (r || (r = t = re()), n.apply(this, arguments).draw(r, +e.apply(this, arguments)), t) return r = null, t + "" || null;
    }var n = ff(M_),
        e = ff(64),
        r = null;return t.type = function (e) {
      return arguments.length ? (n = "function" == typeof e ? e : ff(e), t) : n;
    }, t.size = function (n) {
      return arguments.length ? (e = "function" == typeof n ? n : ff(+n), t) : e;
    }, t.context = function (n) {
      return arguments.length ? (r = null == n ? null : n, t) : r;
    }, t;
  }, t.symbols = Y_, t.symbolCircle = M_, t.symbolCross = A_, t.symbolDiamond = S_, t.symbolSquare = z_, t.symbolStar = P_, t.symbolTriangle = L_, t.symbolWye = O_, t.curveBasisClosed = function (t) {
    return new Yf(t);
  }, t.curveBasisOpen = function (t) {
    return new Bf(t);
  }, t.curveBasis = function (t) {
    return new Of(t);
  }, t.curveBundle = B_, t.curveCardinalClosed = I_, t.curveCardinalOpen = j_, t.curveCardinal = F_, t.curveCatmullRomClosed = X_, t.curveCatmullRomOpen = G_, t.curveCatmullRom = H_, t.curveLinearClosed = function (t) {
    return new Zf(t);
  }, t.curveLinear = yf, t.curveMonotoneX = function (t) {
    return new nc(t);
  }, t.curveMonotoneY = function (t) {
    return new ec(t);
  }, t.curveNatural = function (t) {
    return new ic(t);
  }, t.curveStep = function (t) {
    return new ac(t, .5);
  }, t.curveStepAfter = function (t) {
    return new ac(t, 1);
  }, t.curveStepBefore = function (t) {
    return new ac(t, 0);
  }, t.stack = function () {
    function t(t) {
      var o,
          a,
          u = n.apply(this, arguments),
          f = t.length,
          c = u.length,
          s = new Array(c);for (o = 0; o < c; ++o) {
        for (var l, h = u[o], d = s[o] = new Array(f), p = 0; p < f; ++p) {
          d[p] = l = [0, +i(t[p], h, p, t)], l.data = t[p];
        }d.key = h;
      }for (o = 0, a = e(s); o < c; ++o) {
        s[a[o]].index = o;
      }return r(s, a), s;
    }var n = ff([]),
        e = fc,
        r = uc,
        i = cc;return t.keys = function (e) {
      return arguments.length ? (n = "function" == typeof e ? e : ff(w_.call(e)), t) : n;
    }, t.value = function (n) {
      return arguments.length ? (i = "function" == typeof n ? n : ff(+n), t) : i;
    }, t.order = function (n) {
      return arguments.length ? (e = null == n ? fc : "function" == typeof n ? n : ff(w_.call(n)), t) : e;
    }, t.offset = function (n) {
      return arguments.length ? (r = null == n ? uc : n, t) : r;
    }, t;
  }, t.stackOffsetExpand = function (t, n) {
    if ((r = t.length) > 0) {
      for (var e, r, i, o = 0, a = t[0].length; o < a; ++o) {
        for (i = e = 0; e < r; ++e) {
          i += t[e][o][1] || 0;
        }if (i) for (e = 0; e < r; ++e) {
          t[e][o][1] /= i;
        }
      }uc(t, n);
    }
  }, t.stackOffsetDiverging = function (t, n) {
    if ((u = t.length) > 1) for (var e, r, i, o, a, u, f = 0, c = t[n[0]].length; f < c; ++f) {
      for (o = a = 0, e = 0; e < u; ++e) {
        (i = (r = t[n[e]][f])[1] - r[0]) >= 0 ? (r[0] = o, r[1] = o += i) : i < 0 ? (r[1] = a, r[0] = a += i) : r[0] = o;
      }
    }
  }, t.stackOffsetNone = uc, t.stackOffsetSilhouette = function (t, n) {
    if ((e = t.length) > 0) {
      for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
        for (var a = 0, u = 0; a < e; ++a) {
          u += t[a][r][1] || 0;
        }i[r][1] += i[r][0] = -u / 2;
      }uc(t, n);
    }
  }, t.stackOffsetWiggle = function (t, n) {
    if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
      for (var e, r, i, o = 0, a = 1; a < r; ++a) {
        for (var u = 0, f = 0, c = 0; u < i; ++u) {
          for (var s = t[n[u]], l = s[a][1] || 0, h = (l - (s[a - 1][1] || 0)) / 2, d = 0; d < u; ++d) {
            var p = t[n[d]];h += (p[a][1] || 0) - (p[a - 1][1] || 0);
          }f += l, c += h * l;
        }e[a - 1][1] += e[a - 1][0] = o, f && (o -= c / f);
      }e[a - 1][1] += e[a - 1][0] = o, uc(t, n);
    }
  }, t.stackOrderAscending = sc, t.stackOrderDescending = function (t) {
    return sc(t).reverse();
  }, t.stackOrderInsideOut = function (t) {
    var n,
        e,
        r = t.length,
        i = t.map(lc),
        o = fc(t).sort(function (t, n) {
      return i[n] - i[t];
    }),
        a = 0,
        u = 0,
        f = [],
        c = [];for (n = 0; n < r; ++n) {
      e = o[n], a < u ? (a += i[e], f.push(e)) : (u += i[e], c.push(e));
    }return c.reverse().concat(f);
  }, t.stackOrderNone = fc, t.stackOrderReverse = function (t) {
    return fc(t).reverse();
  }, t.timeInterval = Ba, t.timeMillisecond = zv, t.timeMilliseconds = Rv, t.utcMillisecond = zv, t.utcMilliseconds = Rv, t.timeSecond = Uv, t.timeSeconds = qv, t.utcSecond = Uv, t.utcSeconds = qv, t.timeMinute = Ov, t.timeMinutes = Yv, t.timeHour = Bv, t.timeHours = Fv, t.timeDay = Iv, t.timeDays = jv, t.timeWeek = Hv, t.timeWeeks = Qv, t.timeSunday = Hv, t.timeSundays = Qv, t.timeMonday = Xv, t.timeMondays = Jv, t.timeTuesday = Gv, t.timeTuesdays = Kv, t.timeWednesday = Vv, t.timeWednesdays = tg, t.timeThursday = $v, t.timeThursdays = ng, t.timeFriday = Wv, t.timeFridays = eg, t.timeSaturday = Zv, t.timeSaturdays = rg, t.timeMonth = ig, t.timeMonths = og, t.timeYear = ag, t.timeYears = ug, t.utcMinute = fg, t.utcMinutes = cg, t.utcHour = sg, t.utcHours = lg, t.utcDay = hg, t.utcDays = dg, t.utcWeek = pg, t.utcWeeks = xg, t.utcSunday = pg, t.utcSundays = xg, t.utcMonday = vg, t.utcMondays = wg, t.utcTuesday = gg, t.utcTuesdays = Mg, t.utcWednesday = yg, t.utcWednesdays = Ag, t.utcThursday = _g, t.utcThursdays = Tg, t.utcFriday = bg, t.utcFridays = Ng, t.utcSaturday = mg, t.utcSaturdays = Sg, t.utcMonth = Eg, t.utcMonths = kg, t.utcYear = Cg, t.utcYears = zg, t.timeFormatDefaultLocale = Ku, t.timeFormatLocale = Ga, t.isoFormat = Og, t.isoParse = Yg, t.now = mn, t.timer = Mn, t.timerFlush = An, t.timeout = En, t.interval = function (t, n, e) {
    var r = new wn(),
        i = n;return null == n ? (r.restart(t, n, e), r) : (n = +n, e = null == e ? mn() : +e, r.restart(function o(a) {
      a += i, r.restart(o, i += n, e), t(a);
    }, n, e), r);
  }, t.transition = qn, t.active = function (t, n) {
    var e,
        r,
        i = t.__transition;if (i) {
      n = null == n ? null : n + "";for (r in i) {
        if ((e = i[r]).state > Pl && e.name === n) return new Un([[t]], ch, n, +r);
      }
    }return null;
  }, t.interrupt = Rn, t.voronoi = function () {
    function t(t) {
      return new qc(t.map(function (r, i) {
        var o = [Math.round(n(r, i, t) / tb) * tb, Math.round(e(r, i, t) / tb) * tb];return o.index = i, o.data = r, o;
      }), r);
    }var n = dc,
        e = pc,
        r = null;return t.polygons = function (n) {
      return t(n).polygons();
    }, t.links = function (n) {
      return t(n).links();
    }, t.triangles = function (n) {
      return t(n).triangles();
    }, t.x = function (e) {
      return arguments.length ? (n = "function" == typeof e ? e : hc(+e), t) : n;
    }, t.y = function (n) {
      return arguments.length ? (e = "function" == typeof n ? n : hc(+n), t) : e;
    }, t.extent = function (n) {
      return arguments.length ? (r = null == n ? null : [[+n[0][0], +n[0][1]], [+n[1][0], +n[1][1]]], t) : r && [[r[0][0], r[0][1]], [r[1][0], r[1][1]]];
    }, t.size = function (n) {
      return arguments.length ? (r = null == n ? null : [[0, 0], [+n[0], +n[1]]], t) : r && [r[1][0] - r[0][0], r[1][1] - r[0][1]];
    }, t;
  }, t.zoom = function () {
    function n(t) {
      t.property("__zoom", Xc).on("wheel.zoom", f).on("mousedown.zoom", c).on("dblclick.zoom", s).filter(m).on("touchstart.zoom", l).on("touchmove.zoom", h).on("touchend.zoom touchcancel.zoom", d).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }function e(t, n) {
      return (n = Math.max(x[0], Math.min(x[1], n))) === t.k ? t : new Yc(n, t.x, t.y);
    }function r(t, n, e) {
      var r = n[0] - e[0] * t.k,
          i = n[1] - e[1] * t.k;return r === t.x && i === t.y ? t : new Yc(t.k, r, i);
    }function i(t) {
      return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
    }function o(t, n, e) {
      t.on("start.zoom", function () {
        a(this, arguments).start();
      }).on("interrupt.zoom end.zoom", function () {
        a(this, arguments).end();
      }).tween("zoom", function () {
        var t = arguments,
            r = a(this, t),
            o = y.apply(this, t),
            u = e || i(o),
            f = Math.max(o[1][0] - o[0][0], o[1][1] - o[0][1]),
            c = this.__zoom,
            s = "function" == typeof n ? n.apply(this, t) : n,
            l = A(c.invert(u).concat(f / c.k), s.invert(u).concat(f / s.k));return function (t) {
          if (1 === t) t = s;else {
            var n = l(t),
                e = f / n[2];t = new Yc(e, u[0] - n[0] * e, u[1] - n[1] * e);
          }r.zoom(null, t);
        };
      });
    }function a(t, n) {
      for (var e, r = 0, i = T.length; r < i; ++r) {
        if ((e = T[r]).that === t) return e;
      }return new u(t, n);
    }function u(t, n) {
      this.that = t, this.args = n, this.index = -1, this.active = 0, this.extent = y.apply(t, n);
    }function f() {
      if (g.apply(this, arguments)) {
        var t = a(this, arguments),
            n = this.__zoom,
            i = Math.max(x[0], Math.min(x[1], n.k * Math.pow(2, b.apply(this, arguments)))),
            o = pt(this);if (t.wheel) t.mouse[0][0] === o[0] && t.mouse[0][1] === o[1] || (t.mouse[1] = n.invert(t.mouse[0] = o)), clearTimeout(t.wheel);else {
          if (n.k === i) return;t.mouse = [o, n.invert(o)], Rn(this), t.start();
        }Ic(), t.wheel = setTimeout(function () {
          t.wheel = null, t.end();
        }, k), t.zoom("mouse", _(r(e(n, i), t.mouse[0], t.mouse[1]), t.extent, w));
      }
    }function c() {
      if (!v && g.apply(this, arguments)) {
        var n = a(this, arguments),
            e = ct(t.event.view).on("mousemove.zoom", function () {
          if (Ic(), !n.moved) {
            var e = t.event.clientX - o,
                i = t.event.clientY - u;n.moved = e * e + i * i > C;
          }n.zoom("mouse", _(r(n.that.__zoom, n.mouse[0] = pt(n.that), n.mouse[1]), n.extent, w));
        }, !0).on("mouseup.zoom", function () {
          e.on("mousemove.zoom mouseup.zoom", null), bt(t.event.view, n.moved), Ic(), n.end();
        }, !0),
            i = pt(this),
            o = t.event.clientX,
            u = t.event.clientY;_t(t.event.view), Fc(), n.mouse = [i, this.__zoom.invert(i)], Rn(this), n.start();
      }
    }function s() {
      if (g.apply(this, arguments)) {
        var i = this.__zoom,
            a = pt(this),
            u = i.invert(a),
            f = i.k * (t.event.shiftKey ? .5 : 2),
            c = _(r(e(i, f), a, u), y.apply(this, arguments), w);Ic(), M > 0 ? ct(this).transition().duration(M).call(o, c, a) : ct(this).call(n.transform, c);
      }
    }function l() {
      if (g.apply(this, arguments)) {
        var n,
            e,
            r,
            i,
            o = a(this, arguments),
            u = t.event.changedTouches,
            f = u.length;for (Fc(), e = 0; e < f; ++e) {
          i = [i = vt(this, u, (r = u[e]).identifier), this.__zoom.invert(i), r.identifier], o.touch0 ? o.touch1 || (o.touch1 = i) : (o.touch0 = i, n = !0);
        }if (p && (p = clearTimeout(p), !o.touch1)) return o.end(), void ((i = ct(this).on("dblclick.zoom")) && i.apply(this, arguments));n && (p = setTimeout(function () {
          p = null;
        }, E), Rn(this), o.start());
      }
    }function h() {
      var n,
          i,
          o,
          u,
          f = a(this, arguments),
          c = t.event.changedTouches,
          s = c.length;for (Ic(), p && (p = clearTimeout(p)), n = 0; n < s; ++n) {
        o = vt(this, c, (i = c[n]).identifier), f.touch0 && f.touch0[2] === i.identifier ? f.touch0[0] = o : f.touch1 && f.touch1[2] === i.identifier && (f.touch1[0] = o);
      }if (i = f.that.__zoom, f.touch1) {
        var l = f.touch0[0],
            h = f.touch0[1],
            d = f.touch1[0],
            v = f.touch1[1],
            g = (g = d[0] - l[0]) * g + (g = d[1] - l[1]) * g,
            y = (y = v[0] - h[0]) * y + (y = v[1] - h[1]) * y;i = e(i, Math.sqrt(g / y)), o = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2], u = [(h[0] + v[0]) / 2, (h[1] + v[1]) / 2];
      } else {
        if (!f.touch0) return;o = f.touch0[0], u = f.touch0[1];
      }f.zoom("touch", _(r(i, o, u), f.extent, w));
    }function d() {
      var n,
          e,
          r = a(this, arguments),
          i = t.event.changedTouches,
          o = i.length;for (Fc(), v && clearTimeout(v), v = setTimeout(function () {
        v = null;
      }, E), n = 0; n < o; ++n) {
        e = i[n], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
      }r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0 ? r.touch0[1] = this.__zoom.invert(r.touch0[0]) : r.end();
    }var p,
        v,
        g = jc,
        y = Hc,
        _ = $c,
        b = Gc,
        m = Vc,
        x = [0, 1 / 0],
        w = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]],
        M = 250,
        A = gn,
        T = [],
        S = N("start", "zoom", "end"),
        E = 500,
        k = 150,
        C = 0;return n.transform = function (t, n) {
      var e = t.selection ? t.selection() : t;e.property("__zoom", Xc), t !== e ? o(t, n) : e.interrupt().each(function () {
        a(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end();
      });
    }, n.scaleBy = function (t, e) {
      n.scaleTo(t, function () {
        return this.__zoom.k * ("function" == typeof e ? e.apply(this, arguments) : e);
      });
    }, n.scaleTo = function (t, o) {
      n.transform(t, function () {
        var t = y.apply(this, arguments),
            n = this.__zoom,
            a = i(t),
            u = n.invert(a),
            f = "function" == typeof o ? o.apply(this, arguments) : o;return _(r(e(n, f), a, u), t, w);
      });
    }, n.translateBy = function (t, e, r) {
      n.transform(t, function () {
        return _(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof r ? r.apply(this, arguments) : r), y.apply(this, arguments), w);
      });
    }, n.translateTo = function (t, e, r) {
      n.transform(t, function () {
        var t = y.apply(this, arguments),
            n = this.__zoom,
            o = i(t);return _(eb.translate(o[0], o[1]).scale(n.k).translate("function" == typeof e ? -e.apply(this, arguments) : -e, "function" == typeof r ? -r.apply(this, arguments) : -r), t, w);
      });
    }, u.prototype = { start: function start() {
        return 1 == ++this.active && (this.index = T.push(this) - 1, this.emit("start")), this;
      }, zoom: function zoom(t, n) {
        return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this;
      }, end: function end() {
        return 0 == --this.active && (T.splice(this.index, 1), this.index = -1, this.emit("end")), this;
      }, emit: function emit(t) {
        ot(new function (t, n, e) {
          this.target = t, this.type = n, this.transform = e;
        }(n, t, this.that.__zoom), S.apply, S, [t, this.that, this.args]);
      } }, n.wheelDelta = function (t) {
      return arguments.length ? (b = "function" == typeof t ? t : Oc(+t), n) : b;
    }, n.filter = function (t) {
      return arguments.length ? (g = "function" == typeof t ? t : Oc(!!t), n) : g;
    }, n.touchable = function (t) {
      return arguments.length ? (m = "function" == typeof t ? t : Oc(!!t), n) : m;
    }, n.extent = function (t) {
      return arguments.length ? (y = "function" == typeof t ? t : Oc([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), n) : y;
    }, n.scaleExtent = function (t) {
      return arguments.length ? (x[0] = +t[0], x[1] = +t[1], n) : [x[0], x[1]];
    }, n.translateExtent = function (t) {
      return arguments.length ? (w[0][0] = +t[0][0], w[1][0] = +t[1][0], w[0][1] = +t[0][1], w[1][1] = +t[1][1], n) : [[w[0][0], w[0][1]], [w[1][0], w[1][1]]];
    }, n.constrain = function (t) {
      return arguments.length ? (_ = t, n) : _;
    }, n.duration = function (t) {
      return arguments.length ? (M = +t, n) : M;
    }, n.interpolate = function (t) {
      return arguments.length ? (A = t, n) : A;
    }, n.on = function () {
      var t = S.on.apply(S, arguments);return t === S ? n : t;
    }, n.clickDistance = function (t) {
      return arguments.length ? (C = (t = +t) * t, n) : Math.sqrt(C);
    }, n;
  }, t.zoomTransform = Bc, t.zoomIdentity = eb, Object.defineProperty(t, "__esModule", { value: !0 });
});

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

__webpack_require__.p = document.querySelector('body').getAttribute('data-base-url') + 'nbextensions/jupyter_francy/';

/**
 * Export widget models and views, and the npm package version number.
 */

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APPEND_ID = exports.CLASS_NAME = exports.MIME_TYPE = undefined;

var _d = __webpack_require__(2);

var d3 = _interopRequireWildcard(_d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var MIME_TYPE = exports.MIME_TYPE = 'application/vnd.francy+json';
var CLASS_NAME = exports.CLASS_NAME = 'jp-OutputWidget-Francy';
var APPEND_ID = exports.APPEND_ID = 'francy-drawing-div';

// this will execute always!
(function createHiddenDrawingDiv() {
  // Create a 'display: none;' div for drawings
  // well, better putting this as visibility hidden in order to get sizes as visibility prevent this
  // the workaround would be setTimeout(()=>{francy.render}, 10) :/
  if (!d3.select('body').select('div#' + APPEND_ID).node()) {
    d3.select('body').append('div').attr('id', APPEND_ID).attr('style', 'visibility: false;');
  }
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, ".francy {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  position: relative;\n  margin-top: 3px;\n  border: solid 1px #cfcfcf\n}\n\n.francy-size10 {\n  font-size: 10px!important\n}\n\n.francy-highlight:hover {\n  stroke: #fffd00;\n  stroke-width: 2\n}\n\n.francy-context {\n  cursor: context-menu!important\n}\n\n.francy-links {\n  cursor: pointer\n}\n\n.francy-links line {\n  stroke: #999;\n  fill: #999\n}\n\n.francy-arrows path {\n  fill: #999\n}\n\n.francy a {\n  color: inherit\n}\n\n.francy-main-menu {\n  background: #f6f6f6;\n  float: left;\n  list-style: none;\n  width: 100%;\n  border-bottom: 1px solid #cfcfcf\n}\n\n.francy-main-menu li {\n  float: left;\n  position: relative;\n  cursor: pointer;\n  padding-left: 5px!important;\n}\n\n.francy-main-menu li ul {\n  box-shadow: 5px 5px 5px grey;\n  min-width: 120px;\n  z-index: 500\n}\n\n.francy-main-menu li a {\n  display: block;\n  padding: 10px 15px;\n  text-decoration: none\n}\n\n.francy-main-menu .francy-title,\n.francy-main-menu .francy-loader {\n  float: right!important;\n  cursor: auto\n}\n\n.francy-main-menu li.francy-title:hover a:hover {\n  background: inherit!important\n}\n\n.francy-main-menu li:hover a {\n  background: #f6f6f6;\n  text-decoration: none\n}\n\n.francy-main-menu li:hover a:hover {\n  background: #ededed;\n  text-decoration: none\n}\n\n.francy-main-menu li:hover ul {\n  left: 0\n}\n\n.francy-main-menu li:hover ul a {\n  text-decoration: none\n}\n\n.francy-main-menu li:hover ul li a:hover {\n  background: #ededed\n}\n\n.francy-main-menu ul {\n  left: -9999px;\n  list-style: none;\n  position: absolute\n}\n\n.francy-main-menu ul a {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 120px\n}\n\n.francy-main-menu ul li {\n  float: none;\n  width: 100%\n}\n\n.francy-context-menu-holder {\n  display: none;\n  position: absolute\n}\n\n.francy-nodes,\n.francy-bars,\n.francy-lines,\n.francy-labels,\n.francy-scatters {\n  cursor: pointer\n}\n\n.francy-nodes circle,\n.francy-nodes rect {\n  stroke: #fff\n}\n\n.francy-lines path {\n  fill: none\n}\n\n.francy-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  min-height: 100%;\n  width: 100%;\n  min-width: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 750\n}\n\n.francy-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  bottom: inherit;\n  right: inherit;\n  z-index: 1000;\n  background: #fff;\n  box-shadow: 5px 5px 5px #000;\n  margin-left: -182px;\n  margin-top: -102px;\n  padding: 10px;\n  display: block;\n  min-width: 250px\n}\n\n.francy-modal-header {\n  border-bottom: 1px solid #cfcfcf;\n  text-align: center;\n  padding: 10px 0\n}\n\n.francy-modal-footer {\n  border-top: 1px solid #cfcfcf;\n  padding: 10px 0\n}\n\n.francy-modal-content {\n  margin: 15px 5px\n}\n\n.francy-modal-content input {\n  margin: 5px\n}\n\n.francy-modal-footer button {\n  float: right;\n  margin-left: 5px\n}\n\n.francy-canvas {\n  width: 100%\n}\n\n.francy svg {\n  cursor: move;\n  background-color: white\n}\n\n.francy text {\n  fill: #000;\n  font-size: 12px\n}\n\n.francy ul {\n  margin: 0;\n  padding: 0\n}\n\n\ndiv.output_subarea.jp-OutputWidget-Francy.output_result {\n  padding: 0;\n  max-width: inherit!important\n}\n\n.francy-tooltip-holder {\n  display: none;\n  position: absolute\n}\n\n.francy-tooltip {\n  min-width: fit-content;\n  background: none repeat scroll 0 0 #f6f6f6;\n  border: 1px solid #cfcfcf;\n  padding: 10px;\n  text-align: justify\n}\n\n.francy-title {\n  font-weight: 700;\n  text-overflow: ellipsis\n}\n\n.francy-context-menu {\n  background: #f6f6f6;\n  color: #333;\n  min-width: 150px;\n  border: 1px solid #cfcfcf;\n  z-index: 500;\n  box-shadow: 5px 5px 5px grey\n}\n\n.francy-context-menu ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  cursor: pointer\n}\n\n.francy-context-menu ul li a {\n  background: #f6f6f6;\n  display: block;\n  padding: 5px 10px;\n  text-decoration: none\n}\n\n.francy-context-menu ul li a:hover {\n  background-color: #ededed\n}\n\n.francy-table {\n  display: table;\n  width: 100%\n}\n\n.francy-table-row {\n  display: table-row\n}\n\n.francy-table-heading {\n  background-color: #eee;\n  display: table-header-group\n}\n\n.francy-table-cell,\n.francy-table-head {\n  display: table-cell;\n  padding: 0 6px;\n  vertical-align: middle;\n  white-space: nowrap\n}\n\n.francy-table-heading {\n  background-color: #eee;\n  display: table-header-group;\n  font-weight: 700\n}\n\n.francy-table-foot {\n  background-color: #eee;\n  display: table-footer-group;\n  font-weight: 700\n}\n\n.francy-table-body {\n  display: table-row-group\n}\n\n.francy pre {\n  outline: 1px solid #ccc;\n  overflow: auto;\n  max-height: 200px\n}\n\n.francy .string {\n  color: green\n}\n\n.francy .number {\n  color: #ff8c00\n}\n\n.francy .boolean {\n  color: blue\n}\n\n.francy .null {\n  color: #f0f\n}\n\n.francy .key {\n  color: red\n}\n\n@media only screen and (max-width: 700px) {\n  .francy-main-menu .francy-title {\n    display: none\n  }\n}\n\n.francy-message-holder {\n  position: absolute;\n  width: fit-content;\n  top: 60px;\n  left: 20px;\n}\n\n.francy-alert>span {\n  margin-left: 5px\n}\n\n.francy-alert {\n  width: fit-content;\n  min-width: 250px;\n  max-width: 250px;\n  padding: .75rem 1.25rem;\n  margin: .2rem 0 0 .2rem;\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  cursor: pointer\n}\n\n.francy-alert:hover span.closeme {\n  display: inline!important;\n  float: right\n}\n\n.francy-alert.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb\n}\n\n.francy-alert.alert-error {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb\n}\n\n.francy-alert.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb\n}\n\n.francy-alert.alert-default {\n  color: #1b1e21;\n  background-color: #f6f6f6;\n  border-color: #cfcfcf\n}\n\n.francy-alert.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba\n}\n\n.strong {\n  font-weight: 700\n}\n\ndiv.output_subarea {\n  max-width: 100%;\n}\n\n.loader {\n  border: 3px solid #cfcfcf;\n  border-radius: 50%;\n  border-top: 3px solid #3498db;\n  width: 15px;\n  height: 15px;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n  margin: 10px 10px 0 0;\n  visibility: hidden;\n}\n\n/* Safari */\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./index.css");
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