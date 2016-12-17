define(['id-helper'], function (idHelper) {
  "use strict";

  return {
    build: function build(json, options) {
      let canvas = json.object;
      let canvasId = idHelper.getCanvasId(canvas);
      var holder = undefined;
      // check if svg is already present
      if (canvas.potentialAction['@type'] === 'UpdateAction') {
        holder = d3.select(canvasId)
          .attr('width', canvas.width).attr('height', canvas.height)
      } else {
        holder = d3.select(idHelper.getWindowId(canvas))
          .append('svg').attr('id', canvasId)
          .attr('width', canvas.width).attr('height', canvas.height);
      }
      // cannot continue if holder is not present
      if (!holder) {
        throw new Error('Oops, could not create canvas with id ' + canvasId);
      }
      return holder;
    }
  }

});
