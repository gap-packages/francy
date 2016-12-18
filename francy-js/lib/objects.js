define(['id-helper', 'shape/rect', 'shape/circle'], function (idHelper, rectangle, circle) {
  "use strict";

  return {
    build: function build(json, options) {
      let canvas = json.object;
      for (let i in canvas.object) {
        switch (canvas.object[i]['@type']) {
          case 'svg:rect':
            rectangle.build(canvas.object[i], options);
            break;
          case 'svg:circle':
            circle.build(canvas.object[i], options);
            break;
        }
      }
      return new this.vehicleClass(options);
    }
  }

});
