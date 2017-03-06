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

Now you should be able to see the output of the command **Draw(_GraphicalObject_)** from Francy GAP.

## WebSockets integration

Please check the _'francy/demo'_ for an example of usage of the module.
