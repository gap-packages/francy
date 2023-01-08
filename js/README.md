# Francy - Javascript

[![npm version](https://badge.fury.io/js/francy.svg)](https://badge.fury.io/js/francy)
[![npm version](https://badge.fury.io/js/francy-core.svg)](https://badge.fury.io/js/francy-core)
[![npm version](https://badge.fury.io/js/francy-extension-browser.svg)](https://badge.fury.io/js/francy-extension-browser)
[![npm version](https://badge.fury.io/js/jupyter-francy.svg)](https://badge.fury.io/js/jupyter-francy)
[![npm version](https://badge.fury.io/js/francy-renderer-d3.svg)](https://badge.fury.io/js/francy-renderer-d3)
[![npm version](https://badge.fury.io/js/francy-renderer-graphviz.svg)](https://badge.fury.io/js/francy-renderer-graphviz)
[![npm version](https://badge.fury.io/js/francy-renderer-vis.svg)](https://badge.fury.io/js/francy-renderer-vis)

This Javascript module produces graphics based on the semantic model produced by Francy GAP.

Francy depends on [d3.v7](https://d3js.org/).

## Renderers

Francy supports renderers to be registered and thus producing different representations of graphs.
The renderers can be switched at any time using the user interface, by selecting `Settings > Renderers` in the main menu.

Francy implements 3 renderers at the moment:

1. [D3](https://d3js.org/) using D3 forces to get a representation of network graphs and charts.
2. [Graphviz](https://www.graphviz.org/), [d3-graphviz](https://github.com/magjac/d3-graphviz), using one of 'circo', 'dot', 'fdp', 'neato', 'osage', 'patchwork' or 'twopi' engines to get different representations.
3. [Vis](http://visjs.org/) using dynamic customizable networks.

## Usage

Note: 
Make sure [JupyterKenel](https://github.com/gap-packages/JupyterKernel) is installed on Jupyter - JupyterKernel is distributed with GAP by default, since v4.10 :)
Make sure [Francy GAP](/) is installed on GAP - Francy is distributed with GAP by default, since v4.10 :)

### Jupyterlab integration

In order to use this module on JupyterLab:

```bash
mcmartins@local:~$ cd pkgs/francy/js/packages/francy-extension-jupyterlab/
mcmartins@local:~$ pip install .
```

NOTE: Jupyter notebook integration is only available on version 1.x.x of Francy.

### Browser integration

```html
<html>
<head>
  <meta charset="utf-8" content="text/html" property="GAP,francy,d3.v5,graphviz,vis">
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <script src="https://unpkg.com/viz.js@1.8.1/viz.js"></script>
  <script src="https://unpkg.com/d3-graphviz@2.6.1/build/d3-graphviz.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/vis/4.21.0/vis.min.css" />
  <script src="https://unpkg.com/francy-extension-browser@1.2.4/dist/FrancyJS.bundle.js"></script>
  <script src="https://unpkg.com/francy-extension-browser@1.2.4/dist/D3Renderer.bundle.js"></script>
  <script src="https://unpkg.com/francy-extension-browser@1.2.4/dist/GraphvizRenderer.bundle.js"></script>
  <script src="https://unpkg.com/francy-extension-browser@1.2.4/dist/VisRenderer.bundle.js"></script>
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

# Contribute

Bug fixing, new features or new Renderers, contributions are welcome! This section provides basic information in order to start contributing to the Javascript code base.

## Development

The project is managed by npm and follows all the standard Lerna project format.

To run Francy on your development environment follow the following recipe:

```bash
mcmartins@local:~/francy/js $ sudo npm install -g n && sudo n stable
mcmartins@local:~/francy/js $ # install dependencies
mcmartins@local:~/francy/js $ npm install
mcmartins@local:~/francy/js $ npm run bootstrap
mcmartins@local:~/francy/js $ # run tests
mcmartins@local:~/francy/js $ npm run test
mcmartins@local:~/francy/js $ # build project
mcmartins@local:~/francy/js $ npm run build
mcmartins@local:~/francy/js $ # development installation for jupyter
mcmartins@local:~/francy/js $ cd packages/francy-extension-jupyter
mcmartins@local:~/francy/js/packages/francy-extension-jupyter $ pip install -e .
mcmartins@local:~/francy/js/packages/francy-extension-jupyter $ # for JupyterLab
mcmartins@local:~/francy/js/packages/francy-extension-jupyter $ jupyter labextension link
mcmartins@local:~/francy/js/packages/francy-extension-jupyter $ jupyter lab --watch
mcmartins@local:~/francy/js/packages/francy-extension-jupyter $ # for Notebook
mcmartins@local:~/francy/js/packages/francy-extension-jupyter $ jupyter nbextension install --symlink --py --sys-prefix jupyter_francy
mcmartins@local:~/francy/js/packages/francy-extension-jupyter $ jupyter nbextension enable --py --sys-prefix jupyter_francy
mcmartins@local:~/francy/js/packages/francy-extension-jupyter $ # run jupyter locally
mcmartins@local:~/francy/js/packages/francy-extension-jupyter $ cd ~/francy/notebooks
mcmartins@local:~/francy/notebooks $ jupyter notebook --ip=0.0.0.0 --port=8080 --no-browser
```

## Releasing

Please follow these [instructions](/RELEASE.md) for releasing.

# Package Structure

| Directory                            | Description                                                        |
|:-------------------------------------|:-------------------------------------------------------------------|
| packages                             | contains the packages that builds up francy-js                     |
| packages/francy                      | contains the base components of Francy                             |
| packages/francy-core                 | contains the core components of Francy                             |
| packages/francy-extension-browser    | contains the browser extension classes, for browser integration    |
| packages/francy-extension-jupyter    | contains the browser extension classes, for jupyter integration    |
| packages/francy-extension-jupyterlab | contains the browser extension classes, for jupyterlab integration |
| packages/francy-renderer-d3          | contains the classes to produce graphics with D3                   |
| packages/francy-renderer-graphviz    | contains the classes to produce graphics with D3-Graphviz          |
| packages/francy-renderer-vis         | contains the classes to produce graphics with Vis.js               |

# License

[MIT](LICENSE) License
