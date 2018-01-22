# Francy - Javascript module

This Javascript module produces graphics based on the semantic model produced by Francy GAP.

## Usage

Francy depends on [d3.v4](https://d3js.org/) to produce graphics.

```html
<html>
<header>
  <meta charset="utf-8" content="text/html" property="GAP,francy,d3.v4">
  <link rel="stylesheet" type="text/css" href="../dist/francy/css/style.css">
  <script src="../dist/francy/lib/d3.v4.min.js"></script>
  <script src="../dist/francy/browser/francy.bundle.js"></script>
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

In order to use this module in Jupyter, it can be installed as a notebook extension:

```bash
mcmartins@local:~$ git clone https://github.com/mcmartins/francy.git
mcmartins@local:~$ npm install
mcmartins@local:~$ npm run jupyter
```
