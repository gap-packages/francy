# Francy Browser Extension

[![npm version](https://badge.fury.io/js/francy-extension-browser.svg)](https://badge.fury.io/js/francy-extension-browser)

This is part of the Francy project, please check documentation [here](https://github.com/gap-packages/francy).

This extension can be used in `offline` mode in a web page as follows:

```html
<html>
<head>
  <meta charset="utf-8" content="text/html" property="GAP,francy,d3.v5,graphviz,vis,vis">
  <script src="https://d3js.org/d3.v5.min.js"></script>
  <script src="https://unpkg.com/viz.js@1.8.1/viz.js"></script>
  <script src="https://unpkg.com/d3-graphviz@2.6.1/build/d3-graphviz.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.min.css" />
  <script src="https://unpkg.com/francy-extension-browser@1.2.3/dist/FrancyJS.bundle.js"></script>
  <script src="https://unpkg.com/francy-extension-browser@1.2.3/dist/D3Renderer.bundle.js"></script>
  <script src="https://unpkg.com/francy-extension-browser@1.2.3/dist/GraphvizRenderer.bundle.js"></script>
  <script src="https://unpkg.com/francy-extension-browser@1.2.3/dist/VisRenderer.bundle.js"></script>
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
      Francy.load(json).render().catch(error => Logger.error(error)).then(element => Logger.info('... Do whatever with me:', element));
    });

  </script>
</body>
</html>
```

# License

[MIT](LICENSE) License
