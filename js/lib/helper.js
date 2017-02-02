define([],
  function () {
    "use strict";

    return {
      getWindowId: function getWindowId(windowId) {
        return 'window-' + windowId;
      },
      getCanvasId: function getCanvasId(canvasId) {
        return 'canvas-' + canvasId;
      },
      getObjectId: function getobjectId(objectId) {
        return 'object-' + objectId;
      }
    }

  });