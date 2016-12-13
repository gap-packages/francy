(function () {

  let JsonReader = (function () {
    "use strict";

    let json;

    return {
      isValid: function isValid(input) {
        json = typeof input !== "string" ? JSON.stringify(input) : json;
        try {
          json = JSON.parse(input);
        } catch (e) {
          return false;
        }
        return typeof json === "object" && input !== null;
      },
      get: function () {
        return json;
      }
    }
  })();

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = JsonReader;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return JsonReader;
      });
    }
    else {
      window.JsonReader = JsonReader;
    }
  }

})();
