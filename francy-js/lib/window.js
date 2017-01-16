define(['helper'],
  function (helper) {
  "use strict";

  return {
    build: function build(json, options) {
      let canvas = json.object;
      let windowId = helper.getWindowId(canvas.id);
      let window = document.getElementById(windowId);
      // check if the window is already present
      if (!window) {
        $('<div>', {
          id: windowId,
          title: canvas.options.name,
          width: canvas.width,
          height: canvas.height
        }).appendTo(options.appendTo);
        // update element
        window = document.getElementById(windowId);
      }
      // this will force the dialog to open
      $('#' + windowId).dialog({
        appendTo: options.appendTo
      });
      // cannot continue if window is not present
      if (!window) {
        throw new Error('Oops, could not create window with id ' + windowId);
      }
      return window;
    }
  }

});
