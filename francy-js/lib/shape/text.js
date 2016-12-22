define(['id-helper'], function (idHelper) {
  "use strict";

  return {
    build: function build(canvas, o, options) {
      let objectId = idHelper.getObjectId(o.id);
      var object = undefined;
      if (o.potentialAction['@type'] === 'UpdateAction') {
        object = d3.select('#' + objectId).style("fill", o.color).attr("x", o.x).attr("y", o.y).text(o.value);
      } else {
        object = canvas.append("text").style("fill", o.color).attr("x", o.x).attr("y", o.y).text(o.value).attr('id', objectId);
      }
      // cannot continue if object is not present
      if (!object) {
        throw new Error('Oops, could not create object with id ' + objectId);
      }
      return object;
    }
  }

});
