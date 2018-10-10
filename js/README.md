# Francy - Javascript

This Javascript module produces graphics based on the semantic model produced by Francy GAP.

Francy depends on [d3.v5](https://d3js.org/).

## Renderers

Francy supports renderers to be registered and thus producing different representations of graphs.
The renderers can be swithed at any time using the user interface, by selecting `Settings > Renderers` in the main menu.

Francy implements 2 renderers at the moment:

1. D3 using D3 forces to get a representation of network graphs and charts.
2. Graphviz using one of 'circo', 'dot', 'fdp', 'neato', 'osage', 'patchwork' or 'twopi' engines to get different representations.

## Usage

Note: 
Make sure [JupyterKenel](https://github.com/gap-packages/JupyterKernel) is installed on Jupyter.
Make sure [Francy GAP](/gap) is installed on GAP.

## Jupyter integration

In order to use this module in Jupyter, it can be installed as a notebook extension and lab extension:

```bash
mcmartins@local:~$ pip install jupyter_francy
mcmartins@local:~$ jupyter lab build # for JupyterLab
mcmartins@local:~$ jupyter nbextension enable --py --sys-prefix jupyter_francy # for Notebook
```

## Browser integration

```html
<html>
<head>
  <meta charset="utf-8" content="text/html" property="GAP,francy,d3.v5,graphviz">
  <script src="https://d3js.org/d3.v5.min.js"></script>
  <script src="https://unpkg.com/viz.js@1.8.1/viz.js"></script>
  <script src="https://unpkg.com/d3-graphviz@2.6.0/build/d3-graphviz.js"></script>
  <script src="https://cdn.rawgit.com/mcmartins/francy/master/js/packages/francy-extension-browser/dist/browser/francy-extension-browser.bundle.js"></script>
  <title>Francy</title>
</head>
<body>
  <div id="francy-drawing-div"></div>
  <script>

    // configure francy
    Francy.settings({ appendTo: '#francy-drawing-div', callbackHandler: console.log });

    d3.json("json.json", function (error, json) {
      francy.load(json).render().catch(error => Console.log(error)).then(element => console.log('do whatever with the element:', element));
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
