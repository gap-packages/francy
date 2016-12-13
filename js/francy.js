(function () {
  "use strict";
  let Francy = (function () {

    let options = {};
    var Francy = function (options) {
      options = options;
    };

    // TODO replace svg.js with d3.js?

    function getWindowId(canvasId) {
      return 'window-' + canvasId;
    }

    function buildWindow() {
      options.window.build();
    }

    function buildCanvas(canvas) {
      let svg = SVG.get(canvas.id);
      let windowId = getWindowId(canvas.id);
      if (!svg) {
        if (canvas['@type'] === 'svg:svg') {
          // create new window pop up add div and assign windowId
          svg = new SVG(document.getElementById(windowId)).size(canvas.width, canvas.height).id(canvas.id);
        }
        if (!svg) {
          throw new Error('The Window with id ' + windowId + ' is not present or couldn\'t be built, please fix the canvas object.');
        }
      }
      return svg;
    }

    function buildGroup(svg, o) {
      let group = undefined;
      if (o.group) {
        let type = o.group['@type'];
        group = svg.get(document.getElementById(o.group.id));
        if (!group) {
          if (type == 'svg:g') {
            group = svg.group().id(o.group.id);
          }
        }
        if (!group) {
          throw new Error('The group with id ' + o.group.id + ' is not present or couldn\'t be built, please fix the canvas object.');
        }
      }
      return group;
    }

    function buildObject(svg, o) {
      let type = o['@type'];
      let objectId = o.id;
      let object = undefined;
      let element = document.getElementById(objectId);
      if (element) {
        object = SVG.adopt(element.parentElement);
      }
      let group = buildGroup(svg, o);
      let holder = group ? group : svg;
      if (type === 'svg:rect') {
        if (!object) {
          object = holder.rect(o.width, o.height).id(objectId);
        } else {
          object.width(o.width).height(o.height);
        }
      } else if (type === 'svg:circle') {
        if (!object) {
          object = holder.group();
          object.circle(o.r).id(objectId);
        } else {
          SVG.adopt(object.node.firstChild).radius(new SVG.Number(o.r).divide(2));
        }
      } else if (type === 'svg:line') {
        if (!object) {
          object = holder.line(o.x1, o.y1, o.x2, o.y2).id(objectId);
        } else {
          object.x1(o.x1).y1(o.y1).x2(o.x2).y2(o.y2);
        }
      }
      // TODO implement support to other objects
      if (!object) {
        throw new Error('The object with id ' + objectId + ' was not drawn!');
      }

      buildInteraction(holder, object, o);

      // add other properties
      object.fill(o.color).stroke({width: 1})
      object.x(o.x).y(o.y);

      return object;
    }

    function buildInteraction(svg, object, o) {
      let type = o['@type'];
      if (o.draggable) {
        object.style('cursor', 'pointer').draggy(function (x, y) {
          return {
            x: x < o.canvas.width - (o.width ? o.width : o.r * 2) && x > 0,
            y: y < o.canvas.height - (o.height ? o.height : o.r * 2) && y > 0
          };
        });
      }
      if (o.connectable && type === 'svg:circle') {
        for (let j in o.connectable.object) {
          let c = o.connectable.object[j];
          let connectable = buildObject(svg, c);
          if (connectable) {
            object.connectable({
              container: svg.group(),
              markers: svg.group(),
              padEllipse: true,
            }, connectable).setLineColor(c.color);
          }
        }
      }
    }

    return {
      draw: function build(json) {
        let canvas = json.object;
        let svg = buildCanvas(canvas);
        for (let i in canvas.object) {
          buildObject(svg, canvas.object[i]);
        }
      }
    }
  })();

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Francy;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return Francy;
      });
    }
    else {
      window.Francy = Francy;
    }
  }

})();