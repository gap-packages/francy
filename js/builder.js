let Francy = (function () {
  "use strict";

  // TODO replace svg.js with d3.js?

  function getWindowId(canvasId) {
    return 'window-' + canvasId;
  }

  function randomXPosition(canvasW, objectW) {
    return Math.random() * ( canvasW - 20 - ( objectW ) ) + ( objectW / 2 + 10 );
  }

  function randomYPosition(canvasH, objectH) {
    return Math.random() * ( canvasH - 20 - ( objectH ) ) + ( objectH / 2 + 10 );
  }

  function collision() {
    var w = 1280,
      h = 800;

    var nodes = d3.range(200).map(function () {
        return {radius: Math.random() * 12 + 4};
      }),
      color = d3.scale.category10();

    var force = d3.layout.force()
      .gravity(0.05)
      .charge(function (d, i) {
        return i ? 0 : -2000;
      })
      .nodes(nodes)
      .size([w, h]);

    var root = nodes[0];
    root.radius = 0;
    root.fixed = true;

    force.start();

    var svg = d3.select("#body").append("svg:svg")
      .attr("width", w)
      .attr("height", h);

    svg.selectAll("circle")
      .data(nodes.slice(1))
      .enter().append("svg:circle")
      .attr("r", function (d) {
        return d.radius - 2;
      })
      .style("fill", function (d, i) {
        return color(i % 3);
      });

    force.on("tick", function (e) {
      var q = d3.geom.quadtree(nodes),
        i = 0,
        n = nodes.length;

      while (++i < n) {
        q.visit(collide(nodes[i]));
      }

      svg.selectAll("circle")
        .attr("cx", function (d) {
          return d.x;
        })
        .attr("cy", function (d) {
          return d.y;
        });
    });

    svg.on("mousemove", function () {
      var p1 = d3.svg.mouse(this);
      root.px = p1[0];
      root.py = p1[1];
      force.resume();
    });

    function collide(node) {
      var r = node.radius + 16,
        nx1 = node.x - r,
        nx2 = node.x + r,
        ny1 = node.y - r,
        ny2 = node.y + r;
      return function (quad, x1, y1, x2, y2) {
        if (quad.point && (quad.point !== node)) {
          var x = node.x - quad.point.x,
            y = node.y - quad.point.y,
            l = Math.sqrt(x * x + y * y),
            r = node.radius + quad.point.radius;
          if (l < r) {
            l = (l - r) / l * .5;
            node.x -= x *= l;
            node.y -= y *= l;
            quad.point.x += x;
            quad.point.y += y;
          }
        }
        return x1 > nx2
          || x2 < nx1
          || y1 > ny2
          || y2 < ny1;
      };
    }

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
    let object = SVG.adopt(document.getElementById(objectId));
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
        object.r(o.r);
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
