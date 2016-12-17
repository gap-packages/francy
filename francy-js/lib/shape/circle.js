define(['id-helper'], function (idHelper) {
  "use strict";

  return {
    build: function build(o, options) {
      let objectId = idHelper.getObjectId(o.id);
      var object = undefined;
      if (o.potentialAction['@type'] === 'UpdateAction') {
        object = svg.select('#' + objectId).attr('cx', o.cx).attr('cy', o.cy).attr('r', o.r);
      } else {
        // cannot continue if holder is not present
        if (!canvas) {
          throw new Error('Oops, could not load canvas with id ' + canvasId);
        }
        object = canvas.append('circle').attr('cx', o.cx).attr('cy', o.cy).attr('r', o.r).attr('id', objectId);
      }
      let canvasId = idHelper.getCanvasId(o.canvasId);
      var canvas = svg.select('#' + canvasId);
      // cannot continue if object is not present
      if (!object) {
        throw new Error('Oops, could not create object with id ' + objectId);
      }
      return object;
    }
  }

});
