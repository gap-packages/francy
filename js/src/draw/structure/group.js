export default class Group {

  build(canvas, o, options) {
    let objectId = helper.getObjectId(o.options.structure.group);
    let object = d3.select('#' + objectId);
    if (!object.node()) {
      object = canvas.append('g').attr('id', objectId);
    }
    // cannot continue if object is not present
    if (!object) {
      throw new Error('Oops, could not create structure with id ' + objectId);
    }
    return object;
  }
}
