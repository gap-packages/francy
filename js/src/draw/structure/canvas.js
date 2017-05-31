export default class Canvas {

  build(canvas, o, options) {
    /*
     function ticked() {
     d3.selectAll("circle").attr("cx", (d) => d.properties.x).attr("cy", (d) => d.properties.y);
     }

     this.simulation = d3.forceSimulation()
     .force("link", d3.forceLink().id(function (d) {
     return d.index
     }))
     .force("collide", d3.forceCollide(function (d) {
     return d.r + 8
     }).iterations(16))
     .force("charge", d3.forceManyBody())
     .force("y", d3.forceY(0))
     .force("x", d3.forceX(0));

     this.simulation.nodes(d3.selectAll("circle")).on("tick", ticked);
     this.simulation.start();
     */


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
