define([
    'helper',
    'shape/rect',
    'shape/circle',
    'shape/line',
    'shape/diamond',
    'structure/group',
    'behavior/drag',
    'behavior/connect'
  ],
  function (helper, rectangle, circle, line, diamond, group, drag, connect) {
    "use strict";

    return {
      build: function build(json, options) {
        let canvas = json.object;
        let canvasId = helper.getCanvasId(canvas.id);
        let holder = d3.select("svg#" + canvasId);
        // build object
        for (let i in canvas.objects) {
          let o = canvas.objects[i];
          let object = undefined;
          let parent = holder;
          // build structure
          if (o.options.structure) {
            if (o.options.structure.layer) {
              parent = rectangle.build(parent, o, options);
            }
            if (o.options.structure.group) {
              parent = group.build(parent, o, options);
            }
          }
          // build object
          switch (o['type']) {
            case 'rect':
            case 'rectangle':
              object = rectangle.build(parent, o, options);
              break;
            case 'circle':
              object = circle.build(parent, o, options);
              break;
            case 'line':
            case 'polyline':
              object = line.build(parent, o, options);
              break;
            case 'diamond':
              object = diamond.build(parent, o, options);
          }
          // apply behavior
          if (o.options.behavior.connectable.objects) {
            for (let j in o.options.behavior.connectable.objects) {
              connect.apply(parent, o, o.options.behavior.connectable.objects[j]);
            }
          }
          drag.apply(o);
          // add event
        }
      }
    }

  });
