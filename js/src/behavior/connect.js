import IDUtils from './../util/id-utils';

export default class Connect {

  static apply(model1, model2) {
    let canvasId = IDUtils.getCanvasId(model1.canvas.id);
    let line = d3.select(`svg#${canvasId}`).append("line").style("stroke", "black").style("fill", "none")
      .data([{"source": model1.id, "target": model2.id}])
      .attr("x1", function () {
        d3.select(this).attr("y1", model1.y);
        return model1.x
      }).attr("x2", function () {
        d3.select(this).attr("y2", model2.y);
        return model2.x
      }).attr("class", "link");
  }

  static remove(model1, model2) {
    let canvasId = IDUtils.getCanvasId(model1.canvas.id);
    d3.select(`svg#${canvasId}`).select("line").style("stroke", "black").style("fill", "none")
      .data([{"source": model1.id, "target": model2.id}]).removeAll();
  }
}

