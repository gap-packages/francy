define(['helper'],
  function (helper) {
    "use strict";

    return {
      build: function build(json, options) {
        let canvas = json.object;
        let canvasId = helper.getCanvasId(canvas.id);
        var holder = undefined;
        // check if canvas is already present
        if (canvas.options.drawn) {
          holder = d3.select("div#" + helper.getWindowId(canvas.id));
        } else {
          holder = d3.select("div#" + helper.getWindowId(canvas.id))
            .append('svg').attr('id', canvasId);
        }
        // cannot continue if holder is not present
        if (!holder) {
          throw new Error('Oops, could not create canvas with id ' + canvasId);
        }
        // add attributes to object
        holder.attr('width', canvas.width).attr('height', canvas.height);
        return holder;
      }
    }

  });
