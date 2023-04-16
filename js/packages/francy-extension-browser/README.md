# Francy Browser Extension

This is part of the Francy project, please check documentation [here](https://github.com/gap-packages/francy).

This extension can be used in `offline` mode in a web page as follows:

```html
<html>
<head>
  <meta charset="utf-8" content="text/html" property="GAP,francy,d3.v7,graphviz,vis,vis">
  <script src="https://unpkg.com/francy-extension-browser/dist/main.js"></script>
  <title>Francy</title>
</head>
<body>
  <div id="francy-drawing-div"></div>
  <script>

    // configure francy
    var Francy = new FrancyApp({ 
      appendTo: '#francy-drawing-div', 
      callbackHandler: (json) => {
        Logger.info(`Input from callback: ${json}`);
      }
    });

    // register available renderers
    Francy.RenderingManager.register(new D3Renderer());
    Francy.RenderingManager.register(new GraphvizRenderer());
    Francy.RenderingManager.register(new VisRenderer());

    d3.json("json.json", function (error, json) {
      Francy.load(json).render().catch(error => Logger.error(error)).then(element => Logger.info('Do whatever with me:', element));
    });

  </script>
</body>
</html>
```

# License

[MIT](LICENSE) License
