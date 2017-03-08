import AbstractRenderer from './../base/abstract-renderer';
import Drag from './../behavior/drag';

export default class Rectangle extends AbstractRenderer {

  constructor(object, {verbose = false} = {}) {
    super(object, {verbose: verbose, tag: object.type});
  }

  render() {
    // add attributes to object
    this.object
      .attr('id', this.objectId)
      .attr('x', d => d.properties.x)
      .attr('y', d => d.properties.y)
      .attr('width', d => d.properties.width)
      .attr('height', d => d.properties.height)
      .style("fill", d => d.attributes.color)
      // TODO http://bl.ocks.org/ChrisJamesC/4474971
      .append('text')
      .attr('dx', d => ((d.properties.r / 2) - d.attributes.name.length))
      .attr('dy', d => ((d.properties.r / 2) - d.attributes.name.length))
      .text(d => d.attributes.name);
    // TODO remove the next line when behavior factory is implemented
    Drag.apply(this.tracker.object);
  }

}
