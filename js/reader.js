let JsonReader = (function () {
  "use strict";

  let latestJsonParsed;

  return {
    isValid: function isValid(input) {
      try {
        latestJsonParsed = JSON.parse(input);
      } catch (e) {
        return false;
      }
      return true;
    }
  }
})();