import IDUtils from './../util/id-utils';

export default class Drag {

  static apply(model) {
    let objectId = IDUtils.getObjectId(model.id);

    function onDrag() {
      let self = d3.select(this);
      let x = self.node().r ? self.node().cx.baseVal.value + d3.event.dx : self.node().x.baseVal.value + d3.event.dx;
      let y = self.node().r ? self.node().cy.baseVal.value + d3.event.dy : self.node().y.baseVal.value + d3.event.dy;
      self.attr('cx', x).attr('cy', y).attr('x', x).attr('y', y);
      // explicitly update the object for the component
      d3.select(this).data()[0].x = x;
      d3.select(this).data()[0].y = y;
      // update connections between component if any
      d3.select('svg').selectAll('.link').each(function (l, li) {
        if (l.source == o.id) {
          d3.select(this).attr('x1', x).attr('y1', y);
        } else if (l.target == o.id) {
          d3.select(this).attr('x2', x).attr('yg2', y);
        }
      });
    }

    return d3.selectAll(`#${objectId}`).style('cursor', 'pointer').call(d3.drag().on('drag', onDrag));
  }

  static remove(model) {
    let objectId = IDUtils.getObjectId(model.id);
    d3.selectAll(`#${this.objectId}`).style('cursor', '').on('mousedown.drag', null);
  }
}
