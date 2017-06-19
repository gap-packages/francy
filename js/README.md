# Francy - Javascript module
This Javascript module intercepts the communication between a gap instance and the UI
in order to produce Graphics when Francy GAP Package is present.

## Usage

Francy depends on other javascript modules, such as:

- JQuery & JQueryUI

- Underscore

```html
<html>
<header>
  <meta charset="utf-8" content="text/html" property="GAP,francy,d3.v4">
  <link rel="stylesheet" type="text/css" href="../dist/francy/css/style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css"/>
  <script src="../lib/jquery.min.js"></script>
  <script src="../lib/jquery-ui.min.js"></script>
  <script src="../dist/francy/lib/d3.v4.min.js"></script>
  <script src="../dist/francy/lib/underscore-min.js"></script>
  <script src="../dist/francy/browser/francy.bundle.js"></script>
</header>
<body>
<script>

  francy = new Francy({verbose: true});
  d3.json("json.json", function (error, json) {
    francy.handle(json);
  });

</script>
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

