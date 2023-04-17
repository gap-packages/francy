# Francy - Javascript

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

Make sure [JupyterKenel](https://github.com/gap-packages/JupyterKernel) is installed on Jupyter - JupyterKernel is distributed with GAP by default, since v4.10 :)
Make sure [Francy GAP](/) is installed on GAP - Francy is distributed with GAP by default, since v4.10 :)

### Jupyterlab integration

In order to use this module on JupyterLab:

```bash
mcmartins@local:~$ pip install -U jupyterlab-francy
```

### Browser integration

```html
<html>
<head>
  <meta charset="utf-8" content="text/html" property="GAP,francy,d3.v7,graphviz,vis">
  <script src="https://unpkg.com/francy-extension-browser/dist/main.js"></script>
  <title>Francy</title>
</head>
<body>
  <div id="francy-drawing-div"></div>
  <script>

    // configure francy
    let Francy = new FrancyApp({ 
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

Bug fixing, new features or new Renderers, are welcome! 
This section provides basic information to start contributing to the Javascript code base.

## Development

The project is managed by yarn and follows all the standard Lerna project format.
To run Francy on your development environment follow the following recipe:

```bash
mcmartins@local:~/francy/js $ sudo npm install -g n && sudo n stable
mcmartins@local:~/francy/js $ # install dependencies
mcmartins@local:~/francy/js $ yarn install
mcmartins@local:~/francy/js $ # build project
mcmartins@local:~/francy/js $ yarn run build
mcmartins@local:~/francy/js $ # run tests
mcmartins@local:~/francy/js $ yarn run test
mcmartins@local:~/francy/js $ # development installation for jupyter
mcmartins@local:~/francy/js $ cd packages/francy-extension-jupyter
mcmartins@local:~/francy/js/packages/francy-extension-jupyterlab $ # for JupyterLab
mcmartins@local:~/francy/js/packages/francy-extension-jupyterlab $ pip install .
mcmartins@local:~/francy/js/packages/francy-extension-jupyterlab $ # run jupyter locally
mcmartins@local:~/francy/js/packages/francy-extension-jupyterlab $ cd ~/francy/notebooks
mcmartins@local:~/francy/notebooks $ jupyter lab --ip=0.0.0.0 --port=8080 --no-browser
```

## Releasing

To update the JS packages version, run the following command and pick the new version:

```bash
user@local js/ $ yarn run version
```

To update the Python PyPi.org package version please update the version on:

* `js/packages/francy-extension-jupyterlab/pypproject.toml`

# Package Structure

| Directory                            | Description                                                        |
|:-------------------------------------|:-------------------------------------------------------------------|
| packages                             | contains the packages that builds up francy-js                     |
| packages/francy                      | contains the base components of Francy                             |
| packages/francy-core                 | contains the core components of Francy                             |
| packages/francy-extension-browser    | contains the browser extension classes, for browser integration    |
| packages/francy-extension-jupyterlab | contains the browser extension classes, for jupyterlab integration |
| packages/francy-renderer-d3          | contains the classes to produce graphics with D3                   |
| packages/francy-renderer-graphviz    | contains the classes to produce graphics with D3-Graphviz          |
| packages/francy-renderer-vis         | contains the classes to produce graphics with Vis.js               |

# License

[MIT](LICENSE) License
