import AbstractRenderer from './../base/abstract-renderer';
import Drag from './../behavior/drag';

export default class Circle extends AbstractRenderer {

  constructor(object, {verbose = false} = {}) {
    super(object, {verbose: verbose});
  }

  render() {
    // add attributes to object
    this.object = this.canvas.selectAll(`circle#${this.objectId}`).data([this.tracker.object]).enter().append('circle')
      .attr('id', this.objectId)
      .attr('cx', this.tracker.object.x)
      .attr('cy', this.tracker.object.y)
      .attr('r', this.tracker.object.r)
      .style("fill", this.tracker.object.properties.color);
    Drag.apply(this.tracker.object);
  }

}
