import AbstractRenderer from './../base/abstract-renderer';

export default class Rectangle extends AbstractRenderer {

  constructor(model, {verbose = false} = {}) {
    super(model, {verbose: verbose});
  }

  render() {
    let objectId = helper.getObjectId(o.id);
    let object = undefined;
    if (o.options.drawn) {
      object = d3.select('#' + objectId);
    } else {
      object = canvas.append("rect").attr('id', objectId);
    }
    // cannot continue if object is not present
    if (!object) {
      throw new Error('Oops, could not create object with id ' + objectId);
    }
    // add attributes to object
    object.attr("x", o.x).attr("y", o.y).attr("width", o.width).attr("height", o.height).style("fill", o.options.color);
    return object;
  }
}
