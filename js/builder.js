let SvgBuilder = (function () {
  "use strict";

  return {
    build: function build(json) {
      // TODO maybe the argument json could be an array, so we should iterate
      let type, canvasId, objectId, windowId;
      canvasId = json.canvasId;
      objectId = canvasId + '-' + json.objectId;
      windowId = 'window-' + canvasId;
      type = json.type;
      // FIXME what if the request is to build another canvas?
      if (type == 'canvas') {
        // create new window pop up add div and assign windowId
        new SVG(windowId).size(json.width, json.height).id(canvasId);
        return;
      }
      let svg = SVG.get(canvasId);
      if (!svg) {
        throw new Error('The Window with id ' + windowId + ' is not present anymore, please reset the root object.')
      }
      if (type == 'rect') {
        svg.rect(json.width, json.height).x(json.x).y(json.y).id(objectId);
      } else if (type == 'circle') {
        svg.circle(json.r).x(json.cx).y(json.cy).id(objectId);
      } else if (type == 'line') {
        svg.line(json.x1, json.y1, json.x2, json.y2).id(objectId);
      }
      // TODO implement support to other objects
    }
  }
})();
