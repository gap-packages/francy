import AbstractBehavior from './../base/abstract-behavior';
import IDUtils from './../util/id-utils';

export default class Link extends AbstractBehavior {

  constructor(json, {verbose = false} = {}) {
    super(json, {verbose: verbose});
  }

  apply(object) {
    let canvasId = IDUtils.getCanvasId(object.object1.canvas.id);
    let objectId = IDUtils.getObjectId(object.id);
    // TODO http://bl.ocks.org/rkirsling/5001347
    return d3.select(`svg#${canvasId}`).selectAll(`line#${objectId}`)
      .data([{'source': object.object1.id, 'target': object.object2.id}]).enter()
      .append('line').style('stroke', 'black').style('fill', 'none').attr('class', 'link')
      .attr('x1', object.object1.properties.x).attr('y1', object.object1.properties.y)
      .attr('x2', object.object2.properties.x).attr('y2', object.object2.properties.y);
  }

  remove(object) {
    let canvasId = IDUtils.getCanvasId(object.object1.canvas.id);
    return d3.select(`svg#${canvasId}`).select('line').style('stroke', 'black').style('fill', 'none')
      .data([{'source': object.object1.id, 'target': object.object2.id}]).removeAll();
  }
}

