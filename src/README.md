# Francy - GAP Package
This GAP Package allows the creation of Gap Objects that have a graphical and interactive
representation. It is possible to create:

-Shapes (circle, rectangle, lines, etc);

-Structural Objects (Groups, Layers, etc);

-Actions (OnClick, OnCTRLClick, etc);

-Events (CallbackToGAP, CallbackToJS, etc);

-Graphs (Bars, Lines, etc);

The output of these objects is pure JSON and can be used to produce the Graphical representation 
in any Programing Language / OS.

At the moment there is a Javascript implementation that allows to create these representation #
using d3.v4 on Jupyter.

## Demo

Demo: http://cloudgap-test.northeurope.cloudapp.azure.com:3000/

## Jupyter integration
In order to use this module in GAP, it can be installed as a 
soft link on the package directory of GAP:

```bash
mcmartins@local:~$ git clone https://github.com/mcmartins/francy.git
mcmartins@local:~$ ln -s ~/francy/src/ ~/gap-installation/pkg/francy
```

Now, to see the output of the command **_Draw(canvas)_** from Francy GAP you need to have the 
Francy-JS module installed on Jupyter, or you can load the demo from the repo:

Make sure gap.sh is in your path:

```bash
mcmartins@local:~$ ln -s ~/gap-installation/bin/gap.sh ~/bin/gap.sh
```

Now using node/npm:

```bash
mcmartins@local:~$ cd francy/demo
mcmartins@local:~$ npm install
mcmartins@local:~$ npm start
```

Go to your browser and you should be able to use gap with Graphics: http://localhost:3000

## TODO
At the moment this is a rudimentary implementation with few support to shapes and actions.

-Support more Shapes;

-Support Actions and Events;

-Support Graphs;

...
