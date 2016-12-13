(function () {

  let Builder = (function () {
    "use strict";

    return {
      build: function build(id) {

      }
    }
  })();

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Builder;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return Builder;
      });
    }
    else {
      window.Builder = Builder;
    }
  }

})();
