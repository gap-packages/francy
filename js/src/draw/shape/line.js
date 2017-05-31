import AbstractRenderer from './../../base/abstract-renderer';

export default class Line extends AbstractRenderer {

  constructor(model) {
    super(model);
  }

  render() {
    let objectId = helper.getObjectId(o.id);
    var object = undefined;
    if (o.options.drawn) {
      object = d3.select('#' + objectId);
    } else {
      object = canvas.append("polyline").attr('id', objectId);
    }
    // cannot continue if object is not present
    if (!object) {
      throw new Error('Oops, could not create object with id ' + objectId);
    }
    // add attributes to object
    object.style("stroke", o.options.color).style("fill", "none").attr("points", o.points.join(', '));
    return object;
  }
}
