# Francy - Javascript module
This Javascript module intercepts the communication between a gap instance and the UI
in order to produce Graphics when Francy GAP Package is present.

## Usage

Francy depends on other javascript modules, such as:

- JQuery & JQueryUI

- Async

- Underscore

```html
<html>
<header>
  <meta charset="utf-8" content="text/html" property="GAP,francy,d3.v4">
  <link rel="stylesheet" type="text/css" href="../css/style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.css"/>
  <script src="/jquery.min.js"></script>
  <script src="/jquery-ui.min.js"></script>
  <script src="/d3.v4.min.js"></script>
  <script src="/async.min.js"></script>
  <script src="/underscore-min.js"></script>
  <script src="/francy.bundle.js"></script>
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
mcmartins@local:~$ npm run build
mcmartins@local:~$ jupyter nbextension install ~/francy/js --user|--system
mcmartins@local:~$ jupyter nbextension enable js/jupyter/main --user|--system
```

Now you should be able to see the output of the command **Draw(_GraphicalObject_)** from Francy GAP.
