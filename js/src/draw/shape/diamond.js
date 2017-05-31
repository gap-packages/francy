import AbstractRenderer from './../../base/abstract-renderer';

export default class Diamond extends AbstractRenderer {

  constructor(model) {
    super(model);
  }

  render() {
    let objectId = helper.getObjectId(o.id);
    var object = undefined;
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
    object.attr("x", o.x).attr("y", o.y).attr("width", o.width)
      .attr("transform", "translate(30) rotate(45 " + o.width + " " + o.height + ")")
      .attr("height", o.height).style("fill", o.options.color);
    return object;
  }
}

