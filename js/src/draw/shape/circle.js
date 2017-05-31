import AbstractRenderer from './../../base/abstract-renderer';

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
      .style('fill', d => d.attributes.color);
  }

}
