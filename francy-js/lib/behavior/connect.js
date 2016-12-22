define(['id-helper'], function (idHelper) {
  "use strict";

  return {
    apply: function apply(o1, o2) {
      // Create a svg canvas
      var svg = d3.select("#drawArea")
        .append("svg")
        .attr("width", 700)
        .attr("height", 500);

//Drag nodes
      var drag = d3.behavior.drag()
        .on("dragstart", function () {
          d3.event.sourceEvent.stopPropagation()
        })
        .on("drag", dragmove);

      var line = svg.append("line")
        .style("stroke", "black")
        .attr("x1", 150)
        .attr("y1", 100)
        .attr("x2", 250)
        .attr("y2", 300);

//First node
      var g1 = svg.append("g")
        .attr("transform", "translate(" + 150 + "," + 100 + ")")
        .attr("class", "first")
        .call(drag)
        .append("circle").attr({
          r: 20,
        })
        .style("fill", "#F00")

//Second node
      var g2 = svg.append("g")
        .attr("transform", "translate(" + 250 + "," + 300 + ")")
        .attr("class", "second")
        .call(drag)
        .append("circle").attr({
          r: 20,
        })
        .style("fill", "#00F")

//Drag handler
      function dragmove(d) {
        var x = d3.event.x;
        var y = d3.event.y;
        d3.select(this).attr("transform", "translate(" + x + "," + y + ")");
        if (d3.select(this).attr("class") == "first") {
          line.attr("x1", x);
          line.attr("y1", y);
        } else {
          line.attr("x2", x);
          line.attr("y2", y);
        }
      }

      return drag;
    }
  }

});
