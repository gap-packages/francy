define(['id-helper'], function (idHelper) {
  "use strict";

  return {
    build: function build(canvas, o, options) {
      let objectId = idHelper.getObjectId(o.id);
      var object = undefined;
      if (o.potentialAction['@type'] === 'UpdateAction') {
        object = d3.select('#' + objectId).attr('cx', o.cx).attr('cy', o.cy).attr('r', o.r);
      } else {
        object = canvas.append('g').attr('cx', o.cx).attr('cy', o.cy).attr('r', o.r).attr('id', objectId);
      }
      // cannot continue if object is not present
      if (!object) {
        throw new Error('Oops, could not create structure with id ' + objectId);
      }
      return object;
    }
  }

});
