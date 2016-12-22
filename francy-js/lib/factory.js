define(['canvas'], function (windowBuilder, canvasBuilder, objectsBuilder) {

  return {
    build: function build(json, options) {
      return canvasBuilder.build(json, options);
    }
  };

});
