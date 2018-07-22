# Francy - Javascript module

This Javascript module produces graphics based on the semantic model produced by Francy GAP.
This implementation follows a nondeterministic approach, so different behavior on rendering 
of Mathematical Structures can be observed, e.g. when drawing Graphs.

Francy depends on [d3.v5](https://d3js.org/) to produce graphics.

## Usage

## Browser integration

```html
<html>
<header>
  <meta charset="utf-8" content="text/html" property="GAP,francy,d3.v4">
  <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/mcmartins/francy/master/js/dist/style/index.css">
  <script src="https://d3js.org/d3.v5.js"></script>
  <script src="https://cdn.rawgit.com/mcmartins/francy/master/js/dist/browser/francy.bundle.js"></script>
</header>
<body>
<script>

  var francy = new Francy({ appendTo: '#francy', callbackHandler: console.log });
  d3.json("json.json", function (error, json) {
    francy.load(json).render().catch(error => Console.log(error)).then(element => console.log('do whatever with the element:', element));
  });

</script>
<div id="francy"></div>
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
