define([], function () {
  "use strict";

  return {
    getWindowId: function getWindowId(canvasId) {
      return 'window-' + canvasId;
    },
    getCanvasId: function getCanvasId(canvasId) {
      return 'canvas-' + canvasId;
    },
    getObjectId: function getobjectId(objectId) {
      return 'object-' + objectId;
    }
  }

});