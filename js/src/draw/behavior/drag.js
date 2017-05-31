import AbstractBehavior from './../../base/abstract-behavior';
import IDUtils from "./../../util/id-utils";

export default class Drag extends AbstractBehavior {

  constructor(json, {verbose = false} = {}) {
    super(json, {verbose: verbose});
    this.objectId = IDUtils.getObjectId(this.object.object.id);
    this.canvasId = IDUtils.getCanvasId(this.object.object.canvas.id);
    this.canvas = d3.select(`svg#${this.canvasId}`);
  }

  apply() {
    function onDrag() {
      let object = this.canvas.select(`#${this.objectId}`);
      var self = this;
      var x = d3.event.x;
      var y = d3.event.y;
      object.attr('cx', x).attr('cy', y).attr('x', x).attr('y', y);
      // explicitly update the object for the component
      object.data()[0].properties.x = x;
      object.data()[0].properties.cx = x;
      object.data()[0].properties.y = y;
      object.data()[0].properties.cy = y;
      // update connections between component if any
      this.canvas.selectAll('.link').each(function (d) {
        if (d.source.id === self.object.object.id) {
          let deltaX = d.target.properties.x - x,
            deltaY = d.target.properties.y - y,
            dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
            normX = deltaX / dist,
            normY = deltaY / dist,
            sourcePadding = d.source.properties.r,
            targetPadding = d.target.properties.r,
            sourceX = x + (sourcePadding * normX),
            sourceY = y + (sourcePadding * normY),
            targetX = d.target.properties.x - (targetPadding * normX),
            targetY = d.target.properties.y - (targetPadding * normY);
          d3.select(this).attr('x1', sourceX).attr('y1', sourceY).attr('x2', targetX).attr('y2', targetY);
          d3.select(this).data()[0].source.properties.x = x;
          d3.select(this).data()[0].source.properties.y = y;
        } else if (d.target.id === self.object.object.id) {
          let deltaX = x - d.source.properties.x,
            deltaY = y - d.source.properties.y,
            dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
            normX = deltaX / dist,
            normY = deltaY / dist,
            sourcePadding = d.source.properties.r,
            targetPadding = d.target.properties.r,
            sourceX = d.source.properties.x + (sourcePadding * normX),
            sourceY = d.source.properties.y + (sourcePadding * normY),
            targetX = x - (targetPadding * normX),
            targetY = y - (targetPadding * normY);
          d3.select(this).attr('x1', sourceX).attr('y1', sourceY).attr('x2', targetX).attr('y2', targetY);
          d3.select(this).data()[0].target.properties.x = x;
          d3.select(this).data()[0].target.properties.y = y;
        }
      });
    }

    return this.canvas.selectAll(`#${this.objectId}`).style('cursor', 'pointer').call(d3.drag().on('drag', onDrag.bind(this)));
  }

  remove() {
    return this.canvas.selectAll(`#${this.objectId}`).style('cursor', '').on('mousedown.drag', null);
  }
}
