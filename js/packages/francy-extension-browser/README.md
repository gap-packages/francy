# Francy Browser Extension

This is part of the Francy project, please check documentation [here](https://github.com/gap-packages/francy).

This extension can be used in `offline` mode in a web page as follows:

```html
<html>
<head>
  <meta charset="utf-8" content="text/html" property="GAP,francy,d3.v5,graphviz">
  <script src="https://d3js.org/d3.v5.min.js"></script>
  <script src="https://unpkg.com/viz.js@1.8.1/viz.js"></script>
  <script src="https://unpkg.com/d3-graphviz@2.6.1/build/d3-graphviz.js"></script>
  <script src="https://unpkg.com/francy-extension-browser@1.1.0/dist/FrancyJS.bundle.js"></script>
  <script src="https://unpkg.com/francy-extension-browser@1.1.0/dist/D3Renderer.bundle.js"></script>
  <script src="https://unpkg.com/francy-extension-browser@1.1.0/dist/GraphvizRenderer.bundle.js"></script>
  <title>Francy</title>
</head>
<body>
  <div id="francy-drawing-div"></div>
  <script>

    // configure francy
    var Francy = new FrancyApp({ 
      appendTo: '#francy_draw', 
      callbackHandler: (json) => {
        Logger.info(`Trigger(${JSON.stringify(JSON.stringify(json))});`);
      }, 
      configuration: new ConfigurationHandler({ configuration: DefaultConfiguration }) 
    });

    // register available renderers
    Francy.RenderingManager.register(new D3Renderer().getConfiguration());
    Francy.RenderingManager.register(new GraphvizRenderer().getConfiguration());

    d3.json("json.json", function (error, json) {
      Francy.load(json).render().catch(error => Console.log(error)).then(element => console.log('do whatever with the element:', element));
    });

  </script>
</body>
</html>
```

# License

[MIT](LICENSE) License
