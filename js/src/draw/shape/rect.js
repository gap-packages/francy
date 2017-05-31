import AbstractRenderer from './../../base/abstract-renderer';

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
      .style("fill", d => d.attributes.color);
  }

}
