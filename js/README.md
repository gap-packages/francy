# Francy - Javascript

[![npm version](https://badge.fury.io/js/francy.svg)](https://badge.fury.io/js/francy)
[![npm version](https://badge.fury.io/js/francy-core.svg)](https://badge.fury.io/js/francy-core)
[![npm version](https://badge.fury.io/js/francy-extension-browser.svg)](https://badge.fury.io/js/francy-extension-browser)
[![npm version](https://badge.fury.io/js/jupyter-francy.svg)](https://badge.fury.io/js/jupyter-francy)
[![npm version](https://badge.fury.io/js/francy-renderer-d3.svg)](https://badge.fury.io/js/francy-renderer-d3)
[![npm version](https://badge.fury.io/js/francy-renderer-graphviz.svg)](https://badge.fury.io/js/francy-renderer-graphviz)

This Javascript module produces graphics based on the semantic model produced by Francy GAP.

Francy depends on [d3.v5](https://d3js.org/).

## Renderers

Francy supports renderers to be registered and thus producing different representations of graphs.
The renderers can be swithed at any time using the user interface, by selecting `Settings > Renderers` in the main menu.

Francy implements 3 renderers at the moment:

1. D3 using D3 forces to get a representation of network graphs and charts.
2. Graphviz using one of 'circo', 'dot', 'fdp', 'neato', 'osage', 'patchwork' or 'twopi' engines to get different representations.
3. Vis networks.

## Usage

Note: 
Make sure [JupyterKenel](https://github.com/gap-packages/JupyterKernel) is installed on Jupyter.
Make sure [Francy GAP](/) is installed on GAP.

### Jupyter integration

In order to use this module in Jupyter, it can be installed as a notebook extension and lab extension:

```bash
mcmartins@local:~$ pip install jupyter_francy
mcmartins@local:~$ jupyter lab build # for JupyterLab
mcmartins@local:~$ jupyter nbextension enable --py --sys-prefix jupyter_francy # for Notebook
```

It's possible to install it on Jupyter lab by running:

```bash
mcmartins@local:~$ jupyter labextension install jupyter-francy
```

### Browser integration

```html
<html>
<head>
  <meta charset="utf-8" content="text/html" property="GAP,francy,d3.v5,graphviz,vis">
  <script src="https://d3js.org/d3.v5.min.js"></script>
  <script src="https://unpkg.com/viz.js@1.8.1/viz.js"></script>
  <script src="https://unpkg.com/d3-graphviz@2.6.1/build/d3-graphviz.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.min.css" />
  <script src="https://unpkg.com/francy-extension-browser@1.2.1/dist/FrancyJS.bundle.js"></script>
  <script src="https://unpkg.com/francy-extension-browser@1.2.1/dist/D3Renderer.bundle.js"></script>
  <script src="https://unpkg.com/francy-extension-browser@1.2.1/dist/GraphvizRenderer.bundle.js"></script>
  <script src="https://unpkg.com/francy-extension-browser@1.2.1/dist/VisRenderer.bundle.js"></script>
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

# Package Structure

|Directory                          |Description                                                      |
|:----------------------------------|:----------------------------------------------------------------|
| packages                          | contains the packages that builds up francy-js                  |
| packages/francy                   | contains the base components of Francy                          |
| packages/francy-core              | contains the core components of Francy                          |
| packages/francy-extension-browser | contains the browser extension classes, for browser integration |
| packages/francy-extension-jupyter | contains the browser extension classes, for jupyter integration |
| packages/francy-renderer-d3       | contains the classes to produce graphics with D3                |
| packages/francy-renderer-graphviz | contains the classes to produce graphics with D3-Graphviz       |

# License

[MIT](LICENSE) License
