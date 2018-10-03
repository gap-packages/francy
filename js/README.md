# Francy - Javascript module

This Javascript module produces graphics based on the semantic model produced by Francy GAP.

Francy depends on [d3.v5](https://d3js.org/) to produce graphics.

## Usage

## Browser integration

```html
<html>
<head>
  <meta charset="utf-8" content="text/html" property="GAP,francy,d3.v5">
  <script src="https://unpkg.com/viz.js@1.8.1/viz.js"></script>
  <script src="https://d3js.org/d3.v5.min.js"></script>
  <script src="https://unpkg.com/d3-graphviz@2.6.0/build/d3-graphviz.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS-MML_HTMLorMML-full,Safe"></script>
  <script src="https://cdn.rawgit.com/mcmartins/francy/master/js/packages/francy-extension-browser/dist/browser/francy-extension-browser.bundle.js"></script>
  <title>Francy</title>
</head>
<body>
  <div id="francy-drawing-div"></div>
  <script>
  
    var francy = new Francy({ appendTo: '#francy-drawing-div', callbackHandler: console.log });
    d3.json("json.json", function (error, json) {
      francy.load(json).render().catch(error => Console.log(error)).then(element => console.log('do whatever with the element:', element));
    });
  
  </script>
</body>
</html>
```

## Jupyter integration

In order to use this module in Jupyter, it can be installed as a notebook extension and lab extension:

```bash
mcmartins@local:~$ pip install jupyter_francy
mcmartins@local:~$ jupyter lab build # for JupyterLab
mcmartins@local:~$ jupyter nbextension enable --py --sys-prefix jupyter_francy # for Notebook
```

Note: 
Make sure [JupyterKenel](https://github.com/gap-packages/JupyterKernel) is installed on Jupyter.
Make sure [Francy GAP](/gap) is installed on GAP.

## Renderers

Francy supports renderers to be registered and thus producing different representations of graphs.

Francy implements 2 renderers at the moment:

1. D3 using D3 forces to get a representation of network graphs
2. Graphviz using one of 'circo', 'dot', 'fdp', 'neato', 'osage', 'patchwork' or 'twopi'.

