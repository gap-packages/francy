import AbstractBehavior from './../../base/abstract-behavior';
import IDUtils from './../../util/id-utils';

export default class Link extends AbstractBehavior {

  constructor(json, {verbose = false} = {}) {
    super(json, {verbose: verbose});
    this.objectId = IDUtils.getObjectId(this.object.id);
    this.canvasId = IDUtils.getCanvasId(this.object.object1.canvas.id);
    this.canvas = d3.select(`svg#${this.canvasId}`);
    // define arrow markers for graph links
    this.canvas
      .append('svg:defs').append('svg:marker')
      .attr('id', 'end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 6)
      .attr('markerWidth', 3)
      .attr('markerHeight', 3)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', '#000')
      .append('svg:defs').append('svg:marker')
      .attr('id', 'start-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 4)
      .attr('markerWidth', 3)
      .attr('markerHeight', 3)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M10,-5L0,0L10,5')
      .attr('fill', '#000');
  }

  apply() {
    return this.canvas.selectAll(`line#${this.objectId}`)
      .data([{'source': this.object.object1, 'target': this.object.object2}]).enter()
      .append('line').attr('class', 'link')
      .style('marker-start', '').style('marker-end', 'url(#end-arrow)')
      .each(function (d) {
        let deltaX = d.target.properties.x - d.source.properties.x,
          deltaY = d.target.properties.y - d.source.properties.y,
          dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
          normX = deltaX / dist,
          normY = deltaY / dist,
          sourcePadding = d.source.properties.r,
          targetPadding = d.target.properties.r,
          sourceX = d.source.properties.x + (sourcePadding * normX),
          sourceY = d.source.properties.y + (sourcePadding * normY),
          targetX = d.target.properties.x - (targetPadding * normX),
          targetY = d.target.properties.y - (targetPadding * normY);
        d3.select(this)
          .attr('x1', sourceX).attr('y1', sourceY)
          .attr('x2', targetX).attr('y2', targetY);
      });
  }

  remove() {
    return this.canvas.selectAll(`line#${this.objectId}`)
      .style('stroke', 'none').style('fill', 'none')
      .data([{'source': this.object.object1, 'target': this.object.object2}]).removeAll();
  }
}

