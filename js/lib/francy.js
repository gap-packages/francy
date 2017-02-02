require(['window', 'canvas', 'objects'],
  function (windowBuilder, canvasBuilder, objectsBuilder) {

    let options = {
      appendTo: 'body'
    };

    let Francy = function () {

      let json;

      function isJsonValid(input) {
        input = input.replace(/[\n\r\b\s\\]+|(gap>)/g, '');
        var jsonRegex = /{(?:[^])*}/g;
        var match = jsonRegex.exec(input);
        if (match) {
          input = match[0];
          json = typeof input !== "string" ? JSON.stringify(input) : json;
          try {
            json = JSON.parse(input);
            return json.type === 'DrawAction' && json.agent === 'Francy';
          } catch (e) {
            return false;
          }
        }
        return false;
      }

      return {
        draw: function draw(input) {
          if (isJsonValid(input)) {
            console.log('Francy will draw the following object: ', json);
            // build the window
            windowBuilder.build(json, options);
            // build the canvas
            canvasBuilder.build(json, options);
            // build objects
            objectsBuilder.build(json, options);
          }
        }
      }

    }

    window.Francy = Francy();
    window.fireServerCommand = function (cmd) {
      Jupyter.notebook.kernel.execute(cmd, {}, {});
    };
    window.fireClientCommand = function (cmd) {
      eval(cmd);
    };

  });