import AbstractRenderer from './../base/abstract-renderer';
import Drag from './../behavior/drag';

export default class Circle extends AbstractRenderer {

  constructor(object, {verbose = false} = {}) {
    super(object, {verbose: verbose, tag: object.type});
  }

  render() {
    // add attributes to object
    this.object
      .attr('id', this.objectId)
      .attr('cx', d => d.properties.x)
      .attr('cy', d => d.properties.y)
      .attr('r', d => d.properties.r)
      .style('fill', d => d.attributes.color)
      // TODO http://bl.ocks.org/ChrisJamesC/4474971
      .append('text')
      .attr('dx', d => (d.properties.r - d.attributes.name.length))
      .text(d => d.attributes.name);
    // TODO remove the next line when behavior factory is implemented
    Drag.apply(this.tracker.object);
  }

}
