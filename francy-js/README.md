# Francy - Javascript module
This Javascript module intercepts the communication between a gap instance and a the UI
in order to produce Graphics when Francy GAP Package is present.

## Jupyter integration
In order to use this module in Jupyter, it can be installed as a notebook extension:

```bash
mcmartins@local:~$ git clone https://github.com/mcmartins/francy.git
mcmartins@local:~$ jupyter nbextension install ~/francy/francy-js --user|--system
mcmartins@local:~$ jupyter nbextension enable francy-js/main --user|--system
```

Now you should be able to see the output of the command **_Draw(canvas)_** from Francy GAP.

## WebSockets integration

Please check the _'francy/demo'_ for an example of usage of the module.

## TODO
At the moment this is a rudimentary implementation with few support to shapes and actions.

-Support d3.v4.js instead of SVG.js;

-Support to build interactive graphs will be added;

-Support to interact back with the kernel using callbacks as in XGAP;

...
