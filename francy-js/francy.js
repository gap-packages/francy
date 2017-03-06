(function () {
  "use strict";
  let Francy = (function () {

    let options = {
      appendTo: 'body'
    };
    let json;

    let Francy = function (opt) {
      options = opt || options;
    };

    // TODO replace svg.js with d3.js

    function isJsonValid(input) {
      input = input.replace(/[\n\r\b\s\\]+|(gap>)/g, '');
      var jsonRegex = /{(?:[^])*}/g;
      var match = jsonRegex.exec(input);
      if (match) {
        input = match[0];
        json = typeof input !== "string" ? JSON.stringify(input) : json;
        try {
          json = JSON.parse(input);
          // TODO validate something in the structure of the object
        } catch (e) {
          return false;
        }
        return typeof json === "object" && input !== null;
      }
      return false;
    }

    function getWindowId(canvasId) {
      return 'window-' + canvasId;
    }

    function buildWindow(canvas) {
      let windowId = getWindowId(canvas.id);
      $('<div>', {
        id: windowId,
        title: canvas.name
      }).appendTo(options.appendTo);
    }

    function buildCanvas(canvas) {
      let svg = SVG.get(canvas.id);
      let windowId = getWindowId(canvas.id);
      let window = document.getElementById(windowId);

      if (!window) {
        buildWindow(canvas);
        window = document.getElementById(windowId);
      }

      $("#" + windowId).dialog({
        appendTo: options.appendTo,
        resizable: true
      }).attr({id: windowId});

      if (!svg) {
        if (canvas['@type'] === 'svg:svg') {
          // create new window pop up add div and assign windowId
          svg = new SVG(window).id(canvas.id);
        }
        if (!svg) {
          throw new Error('Something went wrong creating the window with id ' + windowId + '.');
        }
      }
      svg.size(canvas.width, canvas.height);
      return svg;
    }

    function buildGroup(svg, o) {
      let group = undefined;
      if (o.group) {
        let type = o.group['@type'];
        let element = document.getElementById(o.group.id);
        if (element) {
          group = SVG.adopt(element);
        }
        if (!group) {
          if (type == 'svg:g') {
            group = svg.group().id(o.group.id);
          }
        }
        if (!group) {
          throw new Error('Something went wrong drawing the group with id ' + o.group.id + '.');
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
        if (element.tagName !== 'g' && element.tagName !== 'text') {
          object = SVG.adopt(element.parentElement);
        } else {
          object = SVG.adopt(element);
        }
      }
      let group = buildGroup(svg, o);
      let holder = group ? group : svg;
      if (type === 'svg:rect') {
        if (!object) {
          object = holder.rect(o.width, o.height).id(objectId);
          object.x(o.x).y(o.y);
        } else {
          object.width(o.width).height(o.height);
        }
      } else if (type === 'svg:circle') {
        if (!object) {
          object = holder.group();
          object.circle(o.r).id(objectId);
          object.x(o.x).y(o.y);
        } else {
          SVG.adopt(object.node.firstChild).radius(new SVG.Number(o.r).divide(2));
        }
      } else if (type === 'svg:line') {
        if (!object) {
          object = holder.line(o.x1, o.y1, o.x2, o.y2).id(objectId);
          object.x(o.x).y(o.y);
        } else {
          object.x1(o.x1).y1(o.y1).x2(o.x2).y2(o.y2);
        }
      } else if (type === 'svg:text') {
        if (!object) {
          object = holder.text(o.text).x(o.x).y(o.y).id(objectId);
          object.x(o.x).y(o.y);
        }
      }
      // TODO implement support to other objects
      if (!object) {
        throw new Error('Something went wrong drawing the object with id ' + objectId + '.');
      }

      makeDraggable(holder, object, o);
      makeConnectable(holder, object, o);
      addEvent(holder, object, o);

      // add other properties
      object.fill(o.color).stroke({width: o.highlight ? 2 : 1})

      return object;
    }

    function makeDraggable(svg, object, o) {
      if (o.draggable) {
        object.style('cursor', 'pointer').draggy(function (x, y) {
          return {
            x: x < svg.width() - (o.width ? o.width : o.r * 2) && x > 0,
            y: y < svg.height() - (o.height ? o.height : o.r * 2) && y > 0
          };
        });
      }
    }

    function makeConnectable(svg, object, o) {
      let type = o['@type'];
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

    function addEvent(svg, object, o) {
      if (o.serverEvent) {
        object.attr({ 'cursor': 'pointer' });
        object.node.addEventListener(o.serverEvent.onEvent, function () {
          function callback(data) {
            console.log(data);
          }

          Jupyter.notebook.kernel.execute(o.serverEvent.cmd, {
            "iopub": {"output": callback},
            "output": callback
          }, {"silent": false});
        });
      }
    }

    return {
      draw: function draw(input) {
        if (isJsonValid(input)) {
          console.log('Francy will draw the following object: ', json);
          let canvas = json.object;
          let svg = buildCanvas(canvas);
          for (let i in canvas.object) {
            buildObject(svg, canvas.object[i]);
          }
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
  }

  window.Francy = Francy;

})();