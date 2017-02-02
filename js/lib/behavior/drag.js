define(['helper'], function (helper) {
  "use strict";

  /**
   * Allows to apply drag behavior on elements inside other elements within its boundaries
   */
  return {
    apply: function apply(o) {
      let objectId = helper.getObjectId(o.id);
      var object = d3.select('#' + objectId).style("cursor", "pointer").call(d3.drag().on("drag", dragged));
      var sizeW = o.r ? o.r : o.width;
      var sizeH = o.r ? o.r : o.height;
      var sizePW = object.node().parentNode.clientWidth;
      var sizePH = object.node().parentNode.clientHeight;

      function dragged() {
        //if (d3.event.x <= sizePW - sizeW && d3.event.x >= sizeW && d3.event.y <= sizePH - sizeH && d3.event.y >= sizeH) {
          var self = d3.select(this);
          var x = self.node().r ? self.node().cx.baseVal.value + d3.event.dx : self.node().x.baseVal.value + d3.event.dx;
          var y = self.node().r ? self.node().cy.baseVal.value + d3.event.dy : self.node().y.baseVal.value + d3.event.dy;
          self.attr("cx", x).attr("cy", y).attr("x", x).attr("y", y);
          d3.select('svg').selectAll('.link').each(function (l, li) {
            if (l.source == o.id) {
              d3.select(this).attr("x1", x).attr("y1", y);
            } else if (l.target == o.id) {
              d3.select(this).attr("x2", x).attr("y2", y);
            }
          });
        //}
      }

      return object;
    }
  }

});
