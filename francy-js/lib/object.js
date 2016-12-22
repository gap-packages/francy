define([
    'id-helper',
    'shape/rect',
    'shape/circle',
    'shape/line',
    'shape/diamond'
  ],
  function (idHelper, rectangle, circle, line, diamond) {
    "use strict";

    return {
      build: function build(SVGCanvas, json, options) {
        let c = json.object;
        // build object
        for (let i in c.object) {
          let o = canvas.object[i];
          let object = undefined;
          let parent = SVGCanvas;
          // build structure
          if (o.structure) {
            switch (o.structure['@type']) {
              case 'svg:rect':
                parent = rectangle.build(parent, o.structure, options);
                break;
              case 'svg:g':
                parent = group.build(parent, o.structure, options);
            }
          }
          switch (o['@type']) {
            case 'svg:rect':
              rectangle.build(parent, o, options);
              break;
            case 'svg:circle':
              circle.build(parent, o, options);
              break;
            case 'svg:line':
            case 'svg:polyline':
              line.build(parent, o, options);
              break;
            case 'svg:diamond':
              diamond.build(parent, o, options);
          }
        }
        // apply behavior

        // add event
        return object;
      }
    }

  });
