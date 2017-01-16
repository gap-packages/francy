define(['helper'], function (helper) {
  "use strict";

  return {
    apply: function apply(parent, o1, o2) {
      let objectId1 = helper.getObjectId(o1.id);
      let objectId2 = helper.getObjectId(o2.id);
      //var object1 = d3.select('#' + objectId1);
      //var object2 = d3.select('#' + objectId2);
      var line = parent.append("line").style("stroke", "black").style("fill", "none")
        .data([{"source": o1.id, "target": o2.id}])
        .attr("x1", function (l) {
          d3.select(this).attr("y1", o1.y);
          return o1.x
        }).attr("x2", function (l) {
          d3.select(this).attr("y2", o2.y);
          return o2.x
        }).attr("class", "link");
    }
  }

});
