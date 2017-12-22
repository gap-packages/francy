define(function() { return function(e) {
    function t(r) { if (n[r]) return n[r].exports; var a = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports } var n = {}; return t.m = e, t.c = n, t.d = function(e, n, r) { t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r }) }, t.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(n, "a", n), n }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "", t(t.s = 8) }([function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var r = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      a = function(e) { return e && e.__esModule ? e : { default: e } }(n(5)),
      o = function(e) {
        function t(e) { var n = e.verbose,
            r = void 0 !== n && n,
            a = e.appendTo,
            o = e.callbackHandler;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var i = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { verbose: r, appendTo: a, callbackHandler: o })); if (new.target === t) throw new TypeError("Cannot construct [Renderer] instances directly!"); if (void 0 === i.render || "function" != typeof i.render) throw new TypeError("Must override [render()] method!"); return void 0 === i.unrender && i.logger.debug("No [unrender()] method specified..."), i.element = void 0, i } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, a.default), r(t, [{ key: "HTMLParent", get: function() { return "SVG" === this.options.appendTo.element.node().tagName.toUpperCase() ? d3.select(this.options.appendTo.element.node().parentNode) : this.options.appendTo.element } }, { key: "SVGParent", get: function() { return "DIV" === this.options.appendTo.element.node().tagName.toUpperCase() ? this.options.appendTo.element.select("svg") : this.options.appendTo.element } }]), t }();
    t.default = o }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.dontExecuteIfNoData = function(e) { return function(t, n, r) { var a = r.value; return r.value = function() { if (function(e) { return !(!e || !(e instanceof Array && e.length || e instanceof Object && Object.values(e).length)) }(function(e, t) { var n = e; if (n && t) { var r = t.split("."),
                  a = !0,
                  o = !1,
                  i = void 0; try { for (var l, c = r[Symbol.iterator](); !(a = (l = c.next()).done); a = !0) { var u = l.value; if (!n.hasOwnProperty(u)) { n = void 0; break } n = n[u] } } catch (e) { o = !0, i = e } finally { try {!a && c.return && c.return() } finally { if (o) throw i } } } return n }(this.data, e))) return a.apply(this, arguments);
          this.logger.debug("No data here [" + e + "], nothing to render... continuing...") }, r } } }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var r, a, o = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
      l = (r = (0, n(1).dontExecuteIfNoData)(), a = function(e) {
        function t(e) { var n = e.verbose,
            r = void 0 !== n && n,
            a = e.appendTo,
            o = e.callbackHandler; return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t),
            function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { verbose: r, appendTo: a, callbackHandler: o })) } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, i.default), o(t, [{ key: "render", value: function() { this.element = this.HTMLParent.select("div.francy-tooltip-holder"), this.element.node() || (this.element = this.HTMLParent.append("div").attr("class", "francy-tooltip-holder")); var e = d3.mouse(this.SVGParent.node()); if (this.element.style("left", e[0] + "px").style("top", e[1] + "px"), !this.element.selectAll("*").node()) { var t = this.element.append("div").attr("class", "francy-tooltip").append("div").attr("class", "francy-table").append("div").attr("class", "francy-table-body"),
                n = this;
              Object.keys(this.data).map(function(e) { var r = t.append("div").attr("class", "francy-table-row");
                r.append("div").attr("class", "francy-table-cell").text(n.data[e].title), r.append("div").attr("class", "francy-table-cell").text(n.data[e].text) }), this.element.style("display", "block") } } }, { key: "unrender", value: function() { this.element && (this.element.selectAll("*").remove(), this.element.style("display", null)) } }]), t }(), function(e, t, n, r, a) { var o = {};
        Object.keys(r).forEach(function(e) { o[e] = r[e] }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function(n, r) { return r(e, t, n) || n }, o), a && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(a) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null) }(a.prototype, "render", [r], Object.getOwnPropertyDescriptor(a.prototype, "render"), a.prototype), a);
    t.default = l }, function(e, t, n) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var a, o, i = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      l = r(n(0)),
      c = r(n(16)),
      u = r(n(17)),
      s = r(n(18)),
      f = (a = (0, n(1).dontExecuteIfNoData)("canvas.chart"), o = function(e) {
        function t(e) { var n = e.verbose,
            r = void 0 !== n && n,
            a = e.appendTo,
            o = e.callbackHandler; return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t),
            function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { verbose: r, appendTo: a, callbackHandler: o })) } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, l.default), i(t, [{ key: "render", value: function() { var e = void 0; switch (this.data.canvas.chart.type) {
              case "bar":
                e = new c.default(this.options).load(this.data).render(); break;
              case "line":
                e = new u.default(this.options).load(this.data).render(); break;
              case "scatter":
                e = new s.default(this.options).load(this.data).render() } return this.options.appendTo.element.zoomToFit(), e } }, { key: "unrender", value: function() {} }], [{ key: "tooltip", value: function(e, t) { return { A: { title: "Dataset", text: e }, B: { title: "Value", text: t } } } }, { key: "domainRange", value: function(e) { return Array.from(new Array(e), function(e, t) { return t }).map(function(e) { return e }) } }, { key: "colors", get: function() { return d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow) } }]), t }(), function(e, t, n, r, a) { var o = {};
        Object.keys(r).forEach(function(e) { o[e] = r[e] }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function(n, r) { return r(e, t, n) || n }, o), a && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(a) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null) }(o.prototype, "render", [a], Object.getOwnPropertyDescriptor(o.prototype, "render"), o.prototype), o);
    t.default = f }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var r = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      a = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
      o = function(e) {
        function t(e) { var n = e.verbose,
            r = void 0 !== n && n,
            a = e.appendTo,
            o = e.callbackHandler;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var i = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { verbose: r, appendTo: a, callbackHandler: o })); if (new.target === t) throw new TypeError("Cannot construct [Composite] instances directly!"); return i.renderers = [], i } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, a.default), r(t, [{ key: "add", value: function(e) { return this.renderers.push(e), this } }, { key: "renderChildren", value: function() { var e = this.options;
            e.appendTo = this; var t = !0,
              n = !1,
              r = void 0; try { for (var a, o = this.renderers[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) { a.value.settings(e).load(this.data).render() } } catch (e) { n = !0, r = e } finally { try {!t && o.return && o.return() } finally { if (n) throw r } } } }]), t }();
    t.default = o }, function(e, t, n) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var a = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      o = r(n(10)),
      i = r(n(11)),
      l = function() {
        function e(t) { var n = t.verbose,
            r = void 0 !== n && n,
            a = t.appendTo,
            i = t.callbackHandler;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.settings({ verbose: r, appendTo: a, callbackHandler: i }), this.log = new o.default(this.options) } return a(e, [{ key: "settings", value: function(e) { var t = e.verbose,
              n = e.appendTo,
              r = e.callbackHandler; if (!r) throw new Error("A Callback Handler must be provided! This will be used to trigger events from the graphics produced..."); if (!n) throw new Error("Missing an element or id to append the graphics to...!"); return this.options = {}, this.options.verbose = t || this.options.verbose, this.options.appendTo = n || this.options.verbose, this.options.callbackHandler = r || this.options.callbackHandler, this } }, { key: "load", value: function(e, t) { var n = i.default.parse(e, t); return n && (this.data = n), this } }, { key: "logger", get: function() { return this.log } }]), e }();
    t.default = l }, function(e, t, n) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var a = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      o = r(n(0)),
      i = r(n(7)),
      l = function(e) {
        function t(e) { var n = e.verbose,
            r = void 0 !== n && n,
            a = e.appendTo,
            o = e.callbackHandler; return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t),
            function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { verbose: r, appendTo: a, callbackHandler: o })) } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, o.default), a(t, [{ key: "traverse", value: function(e, t) { for (var n = this; t.hasNext();) { var r = t.next(),
                a = e.append("li"),
                o = a.selectAll("a").data([r]).enter().append("a").attr("title", r.title).html(r.title); if (r.callback && Object.values(r.callback).length && o.on("click", function(e) { return new i.default(n.options).load(e, !0).execute() }), r.menus && Object.values(r.menus).length > 0) { var l = a.append("ul"),
                  c = this.iterator(Object.values(r.menus));
                this.traverse(l, c) } } } }, { key: "iterator", value: function(e) { var t = 0; return { next: function() { return this.hasNext() ? e[t++] : void 0 }, hasNext: function() { return t < e.length } } } }, { key: "unrender", value: function() {} }]), t }();
    t.default = l }, function(e, t, n) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var a, o, i = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      l = r(n(5)),
      c = r(n(15)),
      u = (a = (0, n(1).dontExecuteIfNoData)(), o = function(e) {
        function t(e) { var n = e.verbose,
            r = void 0 !== n && n,
            a = e.appendTo,
            o = e.callbackHandler;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var i = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { verbose: r, appendTo: a, callbackHandler: o })); return i.callback = o, i } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, l.default), i(t, [{ key: "execute", value: function() { var e = this; if (Object.keys(this.data.callback.requiredArgs).length) { var t = this.options; return t.callbackHandler = function(t) { return e._execute.call(e, t) }, new c.default(t).load(this.data, !0).render() } this._execute(this.data.callback) } }, { key: "_execute", value: function(e) { this.callback("Trigger(" + JSON.stringify(JSON.stringify(e)) + ");") } }]), t }(), function(e, t, n, r, a) { var o = {};
        Object.keys(r).forEach(function(e) { o[e] = r[e] }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function(n, r) { return r(e, t, n) || n }, o), a && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(a) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null) }(o.prototype, "execute", [a], Object.getOwnPropertyDescriptor(o.prototype, "execute"), o.prototype), o);
    t.default = u }, function(e, t, n) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var a = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      o = r(n(9)),
      i = r(n(0)),
      l = {},
      c = function(e) {
        function t(e) { var n = e.verbose,
            r = void 0 !== n && n,
            a = e.appendTo,
            o = e.callbackHandler;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var i = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { verbose: r, appendTo: a, callbackHandler: o })); if (!d3) throw new Error("D3 is not imported! Francy won't work without it... please import D3 v4+."); return i } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, i.default), a(t, [{ key: "render", value: function() { var e = new o.default(this.options).load(this.data).render(); return l[this.data.canvas.id] = e.canvas, e.element.node() } }, { key: "unrender", value: function(e) { delete l[e] } }]), t }();
    t.default = c; try { t.Francy = window.Francy = c; var u = window.onresize;
      window.onresize = function() { Object.values(l).forEach(function(e) { e.zoomToFit() }), "function" == typeof u && u() } } catch (e) { t.Francy = c } }, function(e, t, n) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var a, o, i = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      l = r(n(4)),
      c = r(n(12)),
      u = r(n(19)),
      s = r(n(21)),
      f = (a = (0, n(1).dontExecuteIfNoData)(), o = function(e) {
        function t(e) { var n = e.verbose,
            r = void 0 !== n && n,
            a = e.appendTo,
            o = e.callbackHandler;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var i = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { verbose: r, appendTo: a, callbackHandler: o })); return i.canvas = new c.default(i.options), i.menu = new u.default(i.options), i.messages = new s.default(i.options), i.add(i.messages).add(i.menu).add(i.canvas), i.element = void 0, i } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, l.default), i(t, [{ key: "render", value: function() { var e = d3.select(this.options.appendTo),
              t = "F" + this.data.canvas.id; if (this.element = d3.select("div#" + t), this.element.node() || (this.logger.debug("Creating Frame [" + t + "]..."), this.element = e.append("div").attr("class", "francy").attr("id", t)), !this.element.node()) throw new Error("Oops, could not create frame with id [" + t + "]... Cannot proceed."); return this.logger.debug("Frame updated [" + t + "]..."), this.renderChildren(), this } }, { key: "unrender", value: function() {} }]), t }(), function(e, t, n, r, a) { var o = {};
        Object.keys(r).forEach(function(e) { o[e] = r[e] }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function(n, r) { return r(e, t, n) || n }, o), a && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(a) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null) }(o.prototype, "render", [a], Object.getOwnPropertyDescriptor(o.prototype, "render"), o.prototype), o);
    t.default = f }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      a = function() {
        function e() { var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).verbose,
            n = void 0 !== t && t;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.verbose = n, this.console = console } return r(e, [{ key: "debug", value: function(e) { this.verbose && this.console.debug(this._format("DEBUG", e)) } }, { key: "info", value: function(e) { this.console.info(this._format("INFO", e)) } }, { key: "error", value: function(e, t) { this.console.error(this._format("ERROR", e), t) } }, { key: "warn", value: function(e, t) { t = t || {}, this.console.error(this._format("WARN", e), t) } }, { key: "_format", value: function(e, t) { return "[" + e + "] - " + (new Date).toISOString() + " - " + t } }]), e }();
    t.default = a }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      a = function() {
        function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e) } return r(e, null, [{ key: "parse", value: function(t, n) { if (t) { t = (t = "string" != typeof t ? JSON.stringify(t) : t).replace(/[\n\r\b\\]+|(gap>)/g, ""); var r = /{(?:[^])*}/g.exec(t); if (r) { t = r[0]; try { var a = JSON.parse(t); return a.mime === e.MIME || n ? a : void 0 } catch (e) { console.error(e) } } } } }, { key: "MIME", get: function() { return "application/vnd.francy+json" } }]), e }();
    t.default = a }, function(e, t, n) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var a, o, i = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      l = r(n(4)),
      c = r(n(13)),
      u = r(n(3)),
      s = (a = (0, n(1).dontExecuteIfNoData)(), o = function(e) {
        function t(e) { var n = e.verbose,
            r = void 0 !== n && n,
            a = e.appendTo,
            o = e.callbackHandler;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var i = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { verbose: r, appendTo: a, callbackHandler: o })); return i.graph = new c.default(i.options), i.chart = new u.default(i.options), i.add(i.graph).add(i.chart), i } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, l.default), i(t, [{ key: "render", value: function() {
            function e() { a.attr("transform", d3.event.transform) } var t = this.options.appendTo.element,
              n = this.data.canvas.id; if (this.element = d3.select("svg#" + n), this.element.node() || (this.logger.debug("Creating Canvas [" + n + "]..."), this.element = t.append("svg").attr("class", "francy-canvas").attr("id", n)), !this.element.node()) throw new Error("Oops, could not create canvas with id [" + n + "]... Cannot proceed.");
            this.element.attr("width", this.data.canvas.width).attr("height", this.data.canvas.height); var r = d3.zoom(),
              a = this.element.select("g.francy-content");
            a.node() || (a = this.element.append("g").attr("class", "francy-content"), r.on("zoom", e), this.element.call(r).on("dblclick.zoom", null)), this.element.on("click", function() { d3.event.defaultPrevented && d3.event.stopPropagation() }, !0); var o = this; return this.element.zoomToFit = this.zoomToFit = function() { if (o.data.canvas.zoomToFit) { var e = a.node().getBBox(),
                  t = o.element.node().getBoundingClientRect(),
                  n = t.right - t.left,
                  i = t.bottom - t.top,
                  l = e.width,
                  c = e.height; if (0 == l || 0 == c) return; var u = e.x + l / 2,
                  s = e.y + c / 2,
                  f = .9 / Math.max(l / n, c / i),
                  d = n / 2 - f * u,
                  p = i / 2 - f * s;
                a.transition().duration(1e3).attr("transform", "translate(" + d + "," + p + ")scale(" + f + "," + f + ")").on("end", function() { return function(e, t, n) { o.element.call(r.transform, d3.zoomIdentity.translate(e, t).scale(n, n)) }(d, p, f) }) } }, this.logger.debug("Canvas updated [" + n + "]..."), this.renderChildren(), this } }, { key: "unrender", value: function() {} }]), t }(), function(e, t, n, r, a) { var o = {};
        Object.keys(r).forEach(function(e) { o[e] = r[e] }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function(n, r) { return r(e, t, n) || n }, o), a && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(a) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null) }(o.prototype, "render", [a], Object.getOwnPropertyDescriptor(o.prototype, "render"), o.prototype), o);
    t.default = s }, function(e, t, n) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var a, o, i = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      l = r(n(0)),
      c = r(n(14)),
      u = r(n(2)),
      s = r(n(7)),
      f = (a = (0, n(1).dontExecuteIfNoData)("canvas.graph"), o = function(e) {
        function t(e) { var n = e.verbose,
            r = void 0 !== n && n,
            a = e.appendTo,
            o = e.callbackHandler; return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t),
            function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { verbose: r, appendTo: a, callbackHandler: o })) } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, l.default), i(t, null, [{ key: "getSymbol", value: function(e) { return "circle" === e ? d3.symbolCircle : "cross" === e ? d3.symbolCross : "diamond" === e ? d3.symbolDiamond : "square" === e ? d3.symbolSquare : "triangle" === e ? d3.symbolTriangle : "star" === e ? d3.symbolStar : "wye" === e ? d3.symbolWye : d3.symbolCircle } }, { key: "colors", get: function() { return d3.scaleSequential().domain([0, 100]).interpolator(d3.interpolateRainbow) } }]), i(t, [{ key: "render", value: function() {
            function e() { _.attr("x1", function(e) { return e.source.x }).attr("y1", function(e) { return e.source.y }).attr("x2", function(e) { return e.target.x }).attr("y2", function(e) { return e.target.y }), x.attr("transform", function(e) { return "translate(" + e.x + "," + e.y + ")" }), j.attr("x", function(e) { return e.x - e.title.length - Math.sqrt(e.size * e.title.length * 2) }).attr("y", function(e) { return e.y - Math.sqrt(2 * e.size) }), x.each(function(e) { var t = d3.quadtree(v); return function(n) { var r = 100 * n.size + H,
                    a = n.x - r,
                    o = n.x + r,
                    i = n.y - r,
                    l = n.y + r;
                  t.visit(function(t, c, u, s, f) { if (t.point && t.point !== n) { var d = n.x - t.point.x,
                        p = n.y - t.point.y,
                        y = Math.sqrt(d * d + p * p);
                      y < r && (y = (y - r) / y * e, n.x -= d *= y, n.y -= p *= y, t.point.x += d, t.point.y += p) } return c > o || s < a || u > l || f < i }) } }(1)) }

            function n() {
              function e(e, t) { return S[e.index + "," + t.index] } if (d3.event.preventDefault(), 0 === R) { var t = d3.select(this).node().__data__;
                x.style("opacity", function(n) { return e(t, n) || e(n, t) ? 1 : .1 }), _.style("opacity", function(e) { return t.index === e.source.index || t.index === e.target.index ? 1 : .1 }), R = 1 } else x.style("opacity", 1), _.style("opacity", 1), R = 0 }

            function r(e) {!d3.event.active && h && f && C.alphaTarget(.01).restart(), e.fx = e.x, e.fy = e.y }

            function a(e) { e.fx = d3.event.x, e.fy = d3.event.y }

            function o(e) {!d3.event.active && h && f && C.alphaTarget(0), e.fx = null, e.fy = null }

            function i(e, t) { e.callbacks && Object.values(e.callbacks).forEach(function(e) { e.trigger === t && y.load({ callback: e }, !0).execute() }) } var l = this.options.appendTo.element,
              f = !1,
              d = new u.default(this.options),
              p = new c.default(this.options),
              y = new s.default(this.options),
              h = this.data.canvas.graph.simulation,
              v = this.data.canvas.graph.nodes ? Object.values(this.data.canvas.graph.nodes) : [],
              b = this.data.canvas.graph.links ? Object.values(this.data.canvas.graph.links) : [];
            this.element = l.select("g.francy-content"); var m = +l.attr("width") || d3.select("body").node().getBoundingClientRect().width,
              g = +l.attr("height") || d3.select("body").node().getBoundingClientRect().height,
              w = this.element.selectAll("g.francy-links");
            w.node() || (w = this.element.append("g").attr("class", "francy-links")); var _ = w.selectAll("line.francy-link").data(b);
            (_.enter().data().length > 0 || _.enter().data().length > 0) && (f = !0), _.exit().remove(), _ = _.enter().append("line").attr("class", "francy-link").attr("id", function(e) { return e.source + "," + e.target }).attr("x1", function(e) { return e.source.x }).attr("y1", function(e) { return e.source.y }).attr("x2", function(e) { return e.target.x }).attr("y2", function(e) { return e.target.y }).merge(_), "directed" === this.data.canvas.graph.type && (l.append("defs").selectAll("marker").data(["arrow"]).enter().append("marker").attr("class", "francy-arrows").attr("id", function(e) { return e }).attr("viewBox", "0 -5 10 10").attr("refX", 25).attr("refY", 0).attr("markerWidth", 10).attr("markerHeight", 10).attr("orient", "auto").append("path").attr("d", "M0,-5L10,0L0,5 L10,0 L0, -5"), _.style("marker-end", "url(#arrow)")); var O = this.element.selectAll("g.francy-nodes");
            O.node() || (O = this.element.append("g").attr("class", "francy-nodes")); var x = O.selectAll("path.francy-node").data(v);
            (x.exit().data().length > 0 || x.enter().data().length > 0) && (f = !0), x.exit().remove(), x = x.enter().append("path").merge(x).attr("d", d3.symbol().type(function(e) { return t.getSymbol(e.type) }).size(function(e) { return 100 * e.size })).attr("transform", function(e) { return "translate(" + e.x + "," + e.y + ")" }).style("fill", function(e) { return t.colors(5 * e.layer) }).attr("class", function(e) { return "francy-node" + (e.highlight ? " francy-highlight" : "") + (Object.values(e.menus).length ? " francy-context" : "") }).attr("id", function(e) { return e.id }), this.data.canvas.graph.drag && x.call(d3.drag().on("start", r).on("drag", a).on("end", o)), x.on("contextmenu", function(e) { p.load(e, !0).render(), i.call(this, e, "contextmenu") }).on("click", function(e) { n.call(this), i.call(this, e, "click") }).on("dblclick", function(e) { i.call(this, e, "dblclick") }).on("mouseenter", function(e) { d.load(e.messages, !0).render() }).on("mouseleave", function() { d.unrender() }); var k = this.element.selectAll(".francy-labels");
            k.node() || (k = this.element.append("g").attr("class", "francy-labels")); var j = k.selectAll("text").data(v); if (j.exit().remove(), (j = j.enter().append("text").merge(j).attr("class", "francy-label").text(function(e) { return e.title }).attr("x", function(e) { return e.x - e.title.length - Math.sqrt(e.size * e.title.length * 2) }).attr("y", function(e) { return e.y - Math.sqrt(2 * e.size) })).on("contextmenu", function(e) { p.load(e, !0).render(), i.call(this, e, "contextmenu") }).on("click", function(e) { n.call(this), i.call(this, e, "click") }).on("dblclick", function(e) { i.call(this, e, "dblclick") }).on("mouseover", function(e) { d.load(e.messages, !0).render() }).on("mouseout", function() { d.unrender() }), h) { var P = d3.forceCenter().x(m / 2).y(g / 2),
                T = d3.forceManyBody().strength(30 * -v.length),
                E = d3.forceLink(b).id(function(e) { return e.id }).distance(50),
                z = d3.forceCollide(function(e) { return 2 * e.size }),
                M = d3.forceX(m / 2).strength(.05),
                A = d3.forceY(g / 2).strength(.25); "hasse" === this.data.canvas.graph.type && (M = d3.forceX(m / 2).strength(.5), A = d3.forceY(function(e) { return 50 * e.layer }).strength(5)); var C = d3.forceSimulation(v).force("charge", T).force("link", E).force("center", P).force("x", M).force("y", A).force("collide", z).on("tick", e).on("end", function() { l.zoomToFit() });
              C.restart() } else l.zoomToFit(); for (var H = 10, R = 0, S = {}, D = 0; D < v.length; D++) S[D + "," + D] = 1; return b.forEach(function(e) { S[e.source.index + "," + e.target.index] = 1 }), this } }, { key: "unrender", value: function() {} }]), t }(), function(e, t, n, r, a) { var o = {};
        Object.keys(r).forEach(function(e) { o[e] = r[e] }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function(n, r) { return r(e, t, n) || n }, o), a && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(a) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null) }(o.prototype, "render", [a], Object.getOwnPropertyDescriptor(o.prototype, "render"), o.prototype), o);
    t.default = f }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var r, a, o = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      i = function(e) { return e && e.__esModule ? e : { default: e } }(n(6)),
      l = (r = (0, n(1).dontExecuteIfNoData)("menus"), a = function(e) {
        function t(e) { var n = e.verbose,
            r = void 0 !== n && n,
            a = e.appendTo,
            o = e.callbackHandler; return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t),
            function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { verbose: r, appendTo: a, callbackHandler: o })) } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, i.default), o(t, [{ key: "render", value: function() { var e = this;
            d3.event.preventDefault(), this.element = this.HTMLParent.select("div.francy-context-menu-holder"), this.element.node() || (this.element = this.HTMLParent.append("div").attr("class", "francy-context-menu-holder")); var t = d3.mouse(this.SVGParent.node()); if (this.element.style("left", t[0] + 5 + "px").style("top", t[1] + 5 + "px"), this.element.style("display", "block"), !this.element.selectAll("*").node()) { d3.select("body").on("click.francy-context-menu", function() { return e.unrender() }); var n = this.element.append("div").attr("class", "francy-context-menu").append("ul"),
                r = this.iterator(Object.values(this.data.menus)); return this.traverse(n, r), this } } }, { key: "unrender", value: function() { this.element && (this.element.selectAll("*").remove(), this.element.style("display", null)) } }]), t }(), function(e, t, n, r, a) { var o = {};
        Object.keys(r).forEach(function(e) { o[e] = r[e] }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function(n, r) { return r(e, t, n) || n }, o), a && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(a) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null) }(a.prototype, "render", [r], Object.getOwnPropertyDescriptor(a.prototype, "render"), a.prototype), a);
    t.default = l }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var r = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      a = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
      o = function(e) {
        function t(e) { var n = e.verbose,
            r = void 0 !== n && n,
            a = e.appendTo,
            o = e.callbackHandler; return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t),
            function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { verbose: r, appendTo: a, callbackHandler: o })) } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, a.default), r(t, [{ key: "render", value: function() { var e = this,
              t = this.data.callback.id;
            this.logger.debug("Creating Callback Modal [" + t + "]..."); var n = d3.select("body").append("div").attr("class", "francy-overlay"),
              r = d3.select("body").append("div").attr("class", "francy");
            this.element = r.append("div").attr("id", t).attr("class", "francy-modal"); var a = this.element.append("form"),
              o = a.append("div").attr("class", "francy-modal-header").append("span").html("Required arguments&nbsp;");
            this.data.title && o.append("span").attr("style", "font-weight: bold;").text("for " + this.data.title); var i = a.append("div").attr("class", "francy-modal-content").append("div").attr("class", "francy-table").append("div").attr("class", "francy-table-body"),
              l = !0,
              c = !1,
              u = void 0; try { for (var s, f = Object.values(this.data.callback.requiredArgs)[Symbol.iterator](); !(l = (s = f.next()).done); l = !0) { var d = s.value,
                  p = i.append("div").attr("class", "francy-table-row");
                p.append("div").attr("class", "francy-table-cell").append("label").attr("for", d.id).text(d.title); var y = p.append("div").attr("class", "francy-table-cell").append("input").attr("id", d.id).attr("class", "francy-arg").attr("required", "").attr("name", d.id).attr("type", d.type).attr("value", d.value).on("change", function() { e.data.callback.requiredArgs[this.id].value = this.value }).on("input", this.onchange).on("keyup", this.onchange).on("paste", this.onchange); "boolean" === d.type && (d.value = d.value || !1, y.attr("type", "checkbox").attr("required", null).attr("value", d.value).on("change", function() { e.data.callback.requiredArgs[this.id].value = this.value = this.checked })), p.append("span").attr("class", "validity") } } catch (e) { c = !0, u = e } finally { try {!l && f.return && f.return() } finally { if (c) throw u } } var h = a.append("div").attr("class", "francy-modal-footer");
            h.append("button").text("Ok").on("click", function() { return a.node().checkValidity() && (d3.event.preventDefault(), e.options.callbackHandler(e.data.callback), n.remove(), e.element.remove(), r.remove()), !1 }), h.append("button").text("Cancel").on("click", function() { return n.remove(), e.element.remove(), r.remove(), d3.event.preventDefault(), !1 }); try { Jupyter.keyboard_manager.register_events(".francy"), Jupyter.keyboard_manager.register_events(".francy-arg"), Jupyter.keyboard_manager.register_events(".francy-overlay"), Jupyter.keyboard_manager.register_events(".francy-modal") } catch (t) { "ReferenceError" == t.name && e.logger.debug("It seems we're not running on Jupyter...", t) } return i.selectAll(".francy-arg").node().focus(), this.logger.debug("Callback Modal updated [" + t + "]..."), this } }, { key: "unrender", value: function() {} }]), t }();
    t.default = o }, function(e, t, n) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var a = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      o = r(n(0)),
      i = r(n(2)),
      l = r(n(3)),
      c = function(e) {
        function t(e) { var n = e.verbose,
            r = void 0 !== n && n,
            a = e.appendTo,
            o = e.callbackHandler; return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t),
            function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { verbose: r, appendTo: a, callbackHandler: o })) } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, o.default), a(t, [{ key: "render", value: function() { var e = new i.default(this.options),
              t = this.options.appendTo.element,
              n = this.data.canvas.chart.axis,
              r = this.data.canvas.chart.data,
              a = Object.keys(r);
            this.element = t.select("g.francy-content"); var o = 50,
              c = 50,
              u = 50,
              s = 50,
              f = +t.attr("width") || d3.select("body").node().getBoundingClientRect().width,
              d = +t.attr("height") || d3.select("body").node().getBoundingClientRect().height;
            f = f - s - c, d = d - o - u; var p = d3.scaleBand().range([0, f]).padding(.1).domain(n.x.domain),
              y = d3.scaleLinear().range([d, 0]).domain(n.y.domain),
              h = [];
            a.forEach(function(e) { return h = h.concat(r[e]) }), n.y.domain.length || y.domain([0, d3.max(h, function(e) { return e })]), n.x.domain.length || (n.x.domain = l.default.domainRange(h.length / a.length), p.domain(n.x.domain)); var v = this.element.selectAll("g.francy-bars");
            v.node() || (v = this.element.append("g").attr("class", "francy-bars")), a.forEach(function(t, o) { var i = v.selectAll(".francy-bar" + o).data(r[t]);
              i.exit().remove(), i.enter().append("rect").style("fill", function() { return l.default.colors(5 * o) }).attr("class", "francy-bar" + o).attr("x", function(e, t) { return p(n.x.domain[t]) + o * (p.bandwidth() / a.length) }).attr("width", p.bandwidth() / a.length - 1).attr("y", function(e) { return y(e) }).attr("height", function(e) { return d - y(e) }).on("mouseenter", function(n) { d3.select(this).transition().duration(250).style("fill-opacity", .5), e.load(l.default.tooltip(t, n), !0).render() }).on("mouseleave", function() { d3.select(this).transition().duration(250).style("fill-opacity", 1), e.unrender() }), i.merge(i) }); var b = this.element.selectAll("g.francy-x-axis");
            b.node() || (b = this.element.append("g").attr("class", "francy-x-axis")), b.selectAll("*").remove(), b.attr("transform", "translate(0," + d + ")").call(d3.axisBottom(p)).append("text").attr("dy", 50).attr("dx", f / 2).attr("fill", "black").attr("class", "francy-axis").style("text-anchor", "end").text(n.x.title); var m = this.element.selectAll("g.francy-y-axis");
            m.node() || (m = this.element.append("g").attr("class", "francy-y-axis")), m.selectAll("*").remove(), m.call(d3.axisLeft(y)).append("text").attr("dx", -50).attr("dy", d / 2).attr("fill", "black").attr("class", "francy-axis").style("text-anchor", "end").text(n.y.title); var g = this.element.selectAll(".francy-legend");
            g.node() || (g = this.element.append("g").attr("class", "francy-legend")), g.selectAll("*").remove(); var w = g.selectAll("g").data(a.slice()); return w.exit().remove(), (w = w.enter().append("g").attr("transform", function(e, t) { return "translate(0," + 20 * t + ")" }).merge(w)).append("rect").attr("x", f + 20).attr("width", 19).attr("height", 19).style("fill", function(e, t) { return l.default.colors(5 * t) }), w.append("text").attr("x", f + 80).attr("y", 9).attr("dy", ".35em").style("text-anchor", "end").text(function(e) { return e }), this } }, { key: "unrender", value: function() {} }]), t }();
    t.default = c }, function(e, t, n) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var a = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      o = r(n(0)),
      i = r(n(2)),
      l = r(n(3)),
      c = function(e) {
        function t(e) { var n = e.verbose,
            r = void 0 !== n && n,
            a = e.appendTo,
            o = e.callbackHandler; return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t),
            function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { verbose: r, appendTo: a, callbackHandler: o })) } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, o.default), a(t, [{ key: "render", value: function() { var e = new i.default(this.options),
              t = this.options.appendTo.element,
              n = this.data.canvas.chart.axis,
              r = this.data.canvas.chart.data,
              a = Object.keys(r);
            this.element = t.select("g.francy-content"); var o = 50,
              c = 50,
              u = 50,
              s = 50,
              f = +t.attr("width") || d3.select("body").node().getBoundingClientRect().width,
              d = +t.attr("height") || d3.select("body").node().getBoundingClientRect().height;
            f = f - s - c, d = d - o - u; var p = d3.scaleLinear().range([0, f]).domain(n.x.domain),
              y = d3.scaleLinear().range([d, 0]).domain(n.y.domain),
              h = [];
            a.forEach(function(e) { return h = h.concat(r[e]) }), n.y.domain.length || y.domain([0, d3.max(h, function(e) { return e })]), n.x.domain.length || p.domain([0, h.length / a.length]); var v = this.element.selectAll("g.francy-lines");
            v.node() || (v = this.element.append("g").attr("class", "francy-lines")), a.forEach(function(t, n) { var a = d3.line().x(function(e, t) { return p(t) }).y(function(e) { return y(e) }),
                o = v.selectAll(".line" + n).data([r[t]]);
              o.exit().remove(), o.enter().append("path").style("stroke", function() { return l.default.colors(5 * n) }).style("stroke-width", "5px").attr("class", "francy-line" + n).attr("d", a).on("mouseenter", function(n) { d3.select(this).transition().duration(250).style("stroke-opacity", .5).style("stroke-width", "10px"), e.load(l.default.tooltip(t, n), !0).render() }).on("mouseleave", function() { d3.select(this).transition().duration(250).style("stroke-opacity", 1).style("stroke-width", "5px"), e.unrender() }), o.merge(o) }); var b = this.element.selectAll("g.francy-x-axis");
            b.node() || (b = this.element.append("g").attr("class", "francy-x-axis")), b.selectAll("*").remove(), b.attr("transform", "translate(0," + d + ")").call(d3.axisBottom(p)).append("text").attr("dy", 50).attr("dx", f / 2).attr("fill", "black").attr("class", "francy-axis").style("text-anchor", "end").text(n.x.title); var m = this.element.selectAll("g.francy-y-axis");
            m.node() || (m = this.element.append("g").attr("class", "francy-y-axis")), m.selectAll("*").remove(), m.call(d3.axisLeft(y)).append("text").attr("dx", -50).attr("dy", d / 2).attr("fill", "black").attr("class", "francy-axis").style("text-anchor", "end").text(n.y.title); var g = this.element.selectAll(".francy-legend");
            g.node() || (g = this.element.append("g").attr("class", "francy-legend")), g.selectAll("*").remove(); var w = g.selectAll("g").data(a.slice()); return w.exit().remove(), (w = w.enter().append("g").attr("transform", function(e, t) { return "translate(0," + 20 * t + ")" }).merge(w)).append("rect").attr("x", f + 20).attr("width", 19).attr("height", 19).style("fill", function(e, t) { return l.default.colors(5 * t) }), w.append("text").attr("x", f + 80).attr("y", 9).attr("dy", ".35em").style("text-anchor", "end").text(function(e) { return e }), this } }, { key: "unrender", value: function() {} }]), t }();
    t.default = c }, function(e, t, n) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var a = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      o = r(n(0)),
      i = r(n(2)),
      l = r(n(3)),
      c = function(e) {
        function t(e) { var n = e.verbose,
            r = void 0 !== n && n,
            a = e.appendTo,
            o = e.callbackHandler; return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t),
            function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { verbose: r, appendTo: a, callbackHandler: o })) } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, o.default), a(t, [{ key: "render", value: function() { var e = new i.default(this.options),
              t = this.options.appendTo.element,
              n = this.data.canvas.chart.axis,
              r = this.data.canvas.chart.data,
              a = Object.keys(r);
            this.element = t.select("g.francy-content"); var o = 50,
              c = 50,
              u = 50,
              s = 50,
              f = +t.attr("width") || d3.select("body").node().getBoundingClientRect().width,
              d = +t.attr("height") || d3.select("body").node().getBoundingClientRect().height;
            f = f - s - c, d = d - o - u; var p = d3.scaleLinear().range([0, f]).domain(n.x.domain),
              y = d3.scaleLinear().range([d, 0]).domain(n.y.domain),
              h = [];
            a.forEach(function(e) { return h = h.concat(r[e]) }), n.y.domain.length || y.domain([0, d3.max(h, function(e) { return e })]), n.x.domain.length || p.domain([0, h.length / a.length]); var v = this.element.selectAll("g.francy-scatters");
            v.node() || (v = this.element.append("g").attr("class", "francy-scatters")), a.forEach(function(t, n) { var a = v.selectAll(".scatter" + n).data(r[t]);
              a.exit().remove(), a.enter().append("circle").style("fill", function() { return l.default.colors(5 * n) }).attr("class", "francy-scatter" + n).attr("r", 5).attr("cx", function(e, t) { return p(t) }).attr("cy", function(e) { return y(e) }).on("mouseenter", function(n) { d3.select(this).transition().duration(250).style("fill-opacity", .5).attr("r", 10), e.load(l.default.tooltip(t, n), !0).render() }).on("mouseleave", function() { d3.select(this).transition().duration(250).style("fill-opacity", 1).attr("r", 5), e.unrender() }), a.merge(a) }); var b = this.element.selectAll("g.francy-x-axis");
            b.node() || (b = this.element.append("g").attr("class", "francy-x-axis")), b.selectAll("*").remove(), b.attr("transform", "translate(0," + d + ")").call(d3.axisBottom(p)).append("text").attr("dy", 50).attr("dx", f / 2).attr("fill", "black").attr("class", "francy-axis").style("text-anchor", "end").text(n.x.title); var m = this.element.selectAll("g.francy-y-axis");
            m.node() || (m = this.element.append("g").attr("class", "francy-y-axis")), m.selectAll("*").remove(), m.call(d3.axisLeft(y)).append("text").attr("dx", -50).attr("dy", d / 2).attr("fill", "black").attr("class", "francy-axis").style("text-anchor", "end").text(n.y.title); var g = this.element.selectAll(".francy-legend");
            g.node() || (g = this.element.append("g").attr("class", "francy-legend")), g.selectAll("*").remove(); var w = g.selectAll("g").data(a.slice()); return w.exit().remove(), (w = w.enter().append("g").attr("transform", function(e, t) { return "translate(0," + 20 * t + ")" }).merge(w)).append("rect").attr("x", f + 20).attr("width", 19).attr("height", 19).style("fill", function(e, t) { return l.default.colors(5 * t) }), w.append("text").attr("x", f + 80).attr("y", 9).attr("dy", ".35em").style("text-anchor", "end").text(function(e) { return e }), this } }, { key: "unrender", value: function() {} }]), t }();
    t.default = c }, function(e, t, n) { "use strict";

    function r(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var a = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      o = r(n(6)),
      i = r(n(20)),
      l = function(e) {
        function t(e) { var n = e.verbose,
            r = void 0 !== n && n,
            a = e.appendTo,
            o = e.callbackHandler; return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t),
            function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { verbose: r, appendTo: a, callbackHandler: o })) } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, o.default), a(t, [{ key: "render", value: function() { var e = this,
              t = this.options.appendTo.element,
              n = new i.default(this.options),
              r = "MainMenu-" + this.data.canvas.id;
            this.element = d3.select("#" + r), this.element.node() || (this.logger.debug("Creating Main Menu [" + r + "]..."), this.element = t.append("div").attr("class", "francy-main-menu-holder").attr("id", r)), this.element.selectAll("*").remove(), this.element = this.element.append("ul").attr("class", "francy-main-menu"), this.data.canvas.title && this.element.append("li").attr("class", "francy-title").append("a").html(this.data.canvas.title); var a = this.element.append("li");
            a.append("a").html("Francy"); var o = a.append("ul");
            this.data.canvas.zoomToFit && o.append("li").append("a").on("click", function() { return e.options.appendTo.canvas.zoomToFit() }).attr("title", "Zoom to Fit").html("Zoom to Fit"), o.append("li").append("a").on("click", function() { return n.load(e.data).render() }).attr("title", "About").html("About"); var l = this.iterator(Object.values(this.data.canvas.menus)); return this.traverse(this.element, l), this.logger.debug("Main Menu updated [" + r + "]..."), this } }, { key: "unrender", value: function() {} }]), t }();
    t.default = l }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var r = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      a = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
      o = function(e) {
        function t(e) { var n = e.verbose,
            r = void 0 !== n && n,
            a = e.appendTo,
            o = e.callbackHandler; return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t),
            function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { verbose: r, appendTo: a, callbackHandler: o })) } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, a.default), r(t, [{ key: "render", value: function() { var e = "AboutModalWindow";
            this.logger.debug("Creating About Modal [" + e + "]..."); var t = d3.select("body").append("div").attr("class", "francy-overlay"),
              n = d3.select("body").append("div").attr("class", "francy");
            this.element = n.append("div").attr("id", e).attr("class", "francy-modal"); var r = this.element.append("form");
            r.append("div").attr("class", "francy-modal-header").append("span").html("About Francy v" + (this.data.version || "N/A")); var a = r.append("div").attr("class", "francy-modal-content").append("div").attr("class", "francy-table").append("div").attr("class", "francy-table-body");
            a.append("span").text("Loaded Object:"), a.append("pre").attr("class", "francy").html(this.syntaxHighlight(JSON.stringify(this.data.canvas, null, 2))), a.append("span").append("a").attr("href", "https://github.com/mcmartins/francy").text("Francy on Github");
            r.append("div").attr("class", "francy-modal-footer").append("button").text("Ok").on("click", function() { return this.element.remove(), n.remove(), t.remove(), d3.event.preventDefault(), !1 }); try { Jupyter.keyboard_manager.register_events(".francy"), Jupyter.keyboard_manager.register_events(".francy-arg"), Jupyter.keyboard_manager.register_events(".francy-overlay"), Jupyter.keyboard_manager.register_events(".francy-modal") } catch (e) { "ReferenceError" == e.name && self.logger.debug("It seems we're not running on Jupyter...", e) } return this.logger.debug("Callback About updated [" + e + "]..."), this } }, { key: "unrender", value: function() {} }, { key: "syntaxHighlight", value: function(e) { return (e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")).replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function(e) { var t = "number"; return /^"/.test(e) ? t = /:$/.test(e) ? "key" : "string" : /true|false/.test(e) ? t = "boolean" : /null/.test(e) && (t = "null"), '<span class="' + t + '">' + e + "</span>" }) } }]), t }();
    t.default = o }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0; var r, a, o = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
      i = function(e) { return e && e.__esModule ? e : { default: e } }(n(0)),
      l = (r = (0, n(1).dontExecuteIfNoData)("canvas.messages"), a = function(e) {
        function t(e) { var n = e.verbose,
            r = void 0 !== n && n,
            a = e.appendTo,
            o = e.callbackHandler; return function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t),
            function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, { verbose: r, appendTo: a, callbackHandler: o })) } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, i.default), o(t, [{ key: "render", value: function() { var e = this,
              t = this.options.appendTo.element,
              n = Object.keys(this.data.canvas.messages).map(function(t) { return { id: t, type: e.data.canvas.messages[t].type, title: e.data.canvas.messages[t].title, text: e.data.canvas.messages[t].text } }),
              r = "Messages-" + this.data.canvas.id;
            this.element = d3.select("#" + r), this.element.node() || (this.element = t.append("div").attr("class", "francy-message-holder").attr("id", r)); var a = this; return n.map(function(e) { if (!a.element.select("div#" + e.id).node()) { var t = a.element.append("div").attr("id", e.id).attr("class", "francy-alert alert-" + e.type).on("click", function() { d3.select(this).style("display", "none") });
                t.append("span").attr("class", "strong").text(e.title), t.append("span").text(e.text), t.append("span").attr("class", "strong").style("display", "none").text("x") } }), this.element.style("display", "block"), this } }, { key: "unrender", value: function() {} }]), t }(), function(e, t, n, r, a) { var o = {};
        Object.keys(r).forEach(function(e) { o[e] = r[e] }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce(function(n, r) { return r(e, t, n) || n }, o), a && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(a) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null) }(a.prototype, "render", [r], Object.getOwnPropertyDescriptor(a.prototype, "render"), a.prototype), a);
    t.default = l }]) });
