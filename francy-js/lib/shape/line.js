define(['id-helper'], function (idHelper) {
  "use strict";

  return {
    build: function build(canvas, o, options) {
      let objectId = idHelper.getObjectId(o.id);
      var object = undefined;
      if (o.potentialAction['@type'] === 'UpdateAction') {
        object = d3.select('#' + objectId).style("stroke", o.color).style("fill", "none")
          .attr("points", o.points.join(', '));
      } else {
        object = canvas.append("polyline").style("stroke", "black").style("fill", "none")
          .attr("points", o.points.join(', ')).attr('id', objectId);
      }
      // cannot continue if object is not present
      if (!object) {
        throw new Error('Oops, could not create object with id ' + objectId);
      }
      return object;
    }
  }

});
