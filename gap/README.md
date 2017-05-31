# FRANCY - GAP module

FRANCY is a Framework for Interactive Discrete Mathematics package for GAP.

Unlike XGAP, Francy is not linked with any GUI framework and instead, this package is responsible for the generation 
of Semantic Graphical Objects that can be used to produce Graphical Objects, using external libraries, e.g. _Francy - Javascript module_.

# Usage

```bash
mcmartins@local:~$ gap
 ┌───────┐   GAP 4.8.5, 25-Sep-2016, build of 2016-11-10 12:51:45 (GMT)
 │  GAP  │   http://www.gap-system.org
 └───────┘   Architecture: x86_64-pc-linux-gnu-gcc-default64
 Libs used:  gmp
 Loading the library and packages ...
─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Loading  json 1.0.1 (Reading and Writing JSON)
by Christopher Jefferson (http://caj.host.cs.st-andrews.ac.uk/).
Homepage: http://gap-packages.github.io/json/
─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Loading  Francy 0.1.0 (FRANCY - A Framework for Interactive Discrete Mathematics)
by Manuel Martins (http://github.com/mcmartins).
Homepage: https://github.com/mcmartins/francy
─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 Components: trans 1.0, prim 2.1, small* 1.0, id* 1.0
 Packages:   AClib 1.2, Alnuth 3.0.0, AtlasRep 1.5.1, AutPGrp 1.6, CRISP 1.4.4, Cryst 4.1.12, CrystCat 1.1.6, CTblLib 1.2.2, FactInt 1.5.3, FGA 1.3.1, Francy 0.1.0, 
             GAPDoc 1.5.1, IO 4.4.6, IRREDSOL 1.3.1, json 1.0.1, LAGUNA 3.7.0, Polenta 1.3.6, Polycyclic 2.11, RadiRoot 2.7, ResClasses 4.5.0, Sophus 1.23, SpinSym 1.5, 
             TomLib 1.2.5, Utils 0.40
 Try '??help' for help. See also '?copyright', '?cite' and '?authors'
gap> 
gap> canvas := Canvas(CanvasType!.HASSE, "Quaternion Group Subgroup Lattice");
<IsFrancyObject/IsCanvas - 1>
gap> 
gap> shapeG := Shape(ShapeType!.CIRCLE, "G");
<IsFrancyObject/IsShape - 2>
gap> 
gap> canvas!.add(shapeG);
gap> 
gap> shape1 := Shape(ShapeType!.CIRCLE, "1");
<IsFrancyObject/IsShape - 3>
gap> 
gap> canvas!.add(shape1);
gap> 
gap> link := Link(shapeG, shape1);
<IsFrancyObject/IsLink - 4>
gap> 
gap> canvas!.add(link);
gap> 
gap> menu := Menu( "All Subgroups", CallbackFunction(AllSubgroups) );
<IsFrancyObject/IsMenu - 6>
gap> 
gap> canvas!.add(menu);
gap> 
gap> canvas!.draw();
gap> 
{"id" : 1,"nodes" : [{"model" : {"type" : "circle","id" : 2,"title" : "G","options" : {"x" : 0,"y" : 0,"size" : 10,"layer" : 0,"highlight" : true}}},{"model" : {"type" : "ci\
rcle","id" : 3,"title" : "1","options" : {"x" : 0,"y" : 0,"size" : 10,"layer" : 0,"highlight" : true}}}],"links" : [{"model" : {"source" : 2,"id" : 4,"target" : 3}}],"menus"\
 : [{"model" : {"id" : 6,"menus" : []}}],"agent" : "francy.draw.hasse","canvas" : {"id" : 1,"title" : "Quaternion Group Subgroup Lattice","options" : {"h" : 400,"w" : 680}}}
gap>
```

# Features
This GAP Package allows the creation of Gap Objects that have a graphical and interactive
representation. It is possible to create:

-Shapes (circle, rectangle, lines, etc);

-Menus

-Callbacks (OnClick, OnCTRLClick, etc);

-Graphs (Bars, Lines, etc);

The output of these objects is pure JSON and can be used to produce the Graphical representation 
in any Programing Language / OS.

Note: An external library is needed in order to translate the JSON produced into its Graphical representation, 
see _Francy - JS_ a javascript implementation module.