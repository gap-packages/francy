define(['id-helper'], function (idHelper) {
  "use strict";

  /**
   * Allows to apply drag behavior on elements inside other elements within its boundaries
   */
  return {
    apply: function apply(parent, o) {
      var sizeW = o.r ? o.r : o.width;
      var sizeH = o.r ? o.r : o.height;
      var drag = d3.behavior.drag().on('dragstart', function () {
        d3.event.sourceEvent.stopPropagation();
      }).on("drag", function () {
        var x = d3.event.x, y = d3.event.y;
        if (x <= parent.width - sizeW && x >= sizeW && y <= parent.height - sizeH && y >= sizeH) {
          // TODO check if the circle can be removed and we can use transform for every shape
          if (this.tagName == 'circle') {
            d3.select(this).attr("cx", x).attr("cy", y);
          } else {
            d3.select(this).attr("transform", "translate(" + x + "," + y + ")");
          }
        }
      });
      return drag;
    }
  }

});
