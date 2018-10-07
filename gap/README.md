# FRANCY - GAP module

FRANCY is a Framework for Interactive Discrete Mathematics package for GAP.

UPDATE ME

# Usage

UPDATE ME

```bash
mcmartins_1:~/workspace (develop) $ gap
 ┌───────┐   GAP 4.10dev-1283-g56eb514 of today
 │  GAP  │   https://www.gap-system.org
 └───────┘   Architecture: x86_64-pc-linux-gnu-default64-kv5
 Configuration:  gmp 5.1.3, GASMAN, readline
 Loading the library and packages ...
 Packages:   GAPDoc 1.6.1, IO 4.5.4, PrimGrp 3.3.0, smallgrp 1.2, TransGrp 2.0.2
 Try '??help' for help. See also '?copyright', '?cite' and '?authors'
gap>
gap> LoadPackage("francy");
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Loading  crypting 0.9 (Hashes and Crypto in GAP)
by Markus Pfeiffer (http://www.morphism.de/~markusp/).
Homepage: https://gap-packages.github.io/crypting/
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Loading  json 2.0.0 (Reading and Writing JSON)
by Christopher Jefferson (http://caj.host.cs.st-andrews.ac.uk/).
Homepage: https://gap-packages.github.io/json/
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Loading  uuid 0.6 (RFC 4122 UUIDs)
by Markus Pfeiffer (http://www.morphism.de/~markusp/).
Homepage: https://gap-packages.github.io/uuid/
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Loading  ZeroMQInterface 0.10 (ZeroMQ bindings for GAP)
by Markus Pfeiffer (http://www.morphism.de/~markusp/) and
   Reimer Behrends (http://www.mathematik.uni-kl.de/agag/mitglieder/wissenschaftliche-mitarbeiter/dr-reimer-behrends/).
Homepage: https://gap-packages.github.io/ZeroMQInterface/
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Loading  JupyterKernel 1.0 (Jupyter kernel written in GAP)
by Markus Pfeiffer (https://markusp.morphism.de/).
Homepage: https://gap-packages.github.io/JupyterKernel/
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Loading  Francy 0.12.0 (FRANCY - A Framework for Interactive Discrete Mathematics)
by Manuel Martins (http://github.com/mcmartins).
Homepage: https://github.com/gap-packages/francy
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
true
gap>
gap> graph := Graph(GraphType.DIRECTED);
<IsFrancyObject/IsFrancyGraph>
gap> shapeG := Shape(ShapeType!.DIAMOND, "G");
<IsFrancyObject/IsShape>
gap> shape1 := Shape(ShapeType!.DIAMOND, "1");
<IsFrancyObject/IsShape>
gap> link := Link(shapeG, shape1);
<IsFrancyObject/IsLink>
gap> Add(graph, [shapeG, shape1, link]);
gap> canvas := Canvas("Group Lattice");
<IsFrancyObject/IsCanvas>
gap> Add(canvas, graph);
gap> Draw(canvas);
<jupyter renderable>
gap> 
```

# Features

This GAP Package allows the creation of Gap Objects that have a graphical and interactive
representation. It is possible to create:

- Shapes (circle, square, etc);

- Callbacks (OnClick, OnDblClick, etc);

- Graphs (Directed, Hasse, etc);

- Plots (Bars, Lines, etc);

The output of these objects is pure JSON and can be used to produce the Graphical representation 
in any Framework / Programing Language / OS.

Note: An external library is needed in order to translate the JSON produced into its Graphical representation, 
see _Francy - JS_ a javascript implementation module.

# Usage

```bash
mcmartins@local:~$ wget -qO- https://github.com/gap-packages/francy/archive/v0.12.0.tar.gz | tar xzf - francy-0.12.0/gap/ --strip=1 --transform 's/gap/francy/' -C /path-to-gap/pkg
```

Note: 
Make sure [Francy JS](/js) is installed on your system.
