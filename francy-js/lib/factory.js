define(['window', 'canvas', 'objects'], function (windowBuilder, canvasBuilder, objectsBuilder) {

  return {
    build: function build(json, options) {
      let window = windowBuilder.build(json, options);
      let canvas = canvasBuilder.build(json, options);
      let object = objectsBuilder.build(json, options);
      return canvas;
    }
  };

});
