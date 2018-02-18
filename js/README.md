# Francy - Javascript module

This Javascript module produces graphics based on the semantic model produced by Francy GAP.

## Usage

Francy depends on [d3.v4](https://d3js.org/) to produce graphics.

```html
<html>
<header>
  <meta charset="utf-8" content="text/html" property="GAP,francy,d3.v4">
  <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/mcmartins/francy/develop/js/extensions/browser/index.css">
  <script src="https://d3js.org/d3.v4.js"></script>
  <script src="https://cdn.rawgit.com/mcmartins/francy/develop/js/extensions/browser/francy.bundle.js"></script>
</header>
<body>
<script>

  var francy = new Francy({verbose: true, appendTo: '#francy', callbackHandler: console.log});
  d3.json("json.json", function (error, json) {
    francy.load(json).render();
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
```
