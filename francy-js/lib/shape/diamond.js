define(['id-helper'], function (idHelper) {
  "use strict";

  return {
    build: function build(canvas, o, options) {
      let objectId = idHelper.getObjectId(o.id);
      var object = undefined;
      if (o.potentialAction['@type'] === 'UpdateAction') {
        object = d3.select('#' + objectId).attr("x", o.x).attr("y", o.y)
          .attr("width", o.width).attr("height", o.height);
      } else {
        object = canvas.append("rect").attr("x", o.x).attr("y", o.y).attr("width", o.width)
          .attr("transform", "transform=\"translate(30) rotate(45 " + o.width + " " + o.height + ")\"")
          .attr("height", o.height).attr('id', objectId);
      }
      // cannot continue if object is not present
      if (!object) {
        throw new Error('Oops, could not create object with id ' + objectId);
      }
      return object;
    }
  }

});
