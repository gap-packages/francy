define(['helper'], function (helper) {
  "use strict";

  return {
    build: function build(canvas, o, options) {
      let objectId = helper.getObjectId(o.id);
      var object = undefined;
      if (o.options.drawn) {
        object = d3.select('#' + objectId);
      } else {
        object = canvas.append('circle').attr('id', objectId);
      }
      // cannot continue if object is not present
      if (!object) {
        throw new Error('Oops, could not create object with id ' + objectId);
      }
      // add attributes to object
      object.attr('cx', o.x).attr('cy', o.y).attr('r', o.r).style("fill", o.options.color);
      return object;
    }
  }

});
