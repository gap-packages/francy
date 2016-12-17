define([], function () {
  "use strict";

  return {
    getWindowId: function getWindowId(canvasId) {
      return 'window-' + canvasId;
    },
    getWindowIdSelector: function getCanvasId(canvasId) {
      return '#' + getWindowId(canvasId);
    },
    getCanvasId: function getCanvasId(canvasId) {
      return 'canvas-' + canvasId;
    },
    getCanvasIdSelector: function getCanvasId(canvasId) {
      return '#' + getCanvasId(canvasId);
    },
    getObjectId: function getobjectId(objectId) {
      return 'object-' + objectId;
    },
    getObjectIdSelector: function getobjectId(objectId) {
      return '#' + getobjectId(objectId);
    }
  }

});