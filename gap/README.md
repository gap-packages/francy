# FRANCY - GAP module

FRANCY is a Framework for Interactive Discrete Mathematics package for GAP.

Unlike XGAP, Francy is not linked with any GUI framework and instead, this package is responsible for the generation 
of Semantic Graphical Objects that can be used to produce Graphical Objects, using external libraries, e.g. _Francy - Javascript module_.

# Usage

```bash
 ┌───────┐   GAP 4.8.8, 20-Aug-2017, build of 2017-10-26 20:55:01 (UTC)
 │  GAP  │   https://www.gap-system.org
 └───────┘   Architecture: x86_64-pc-linux-gnu-gcc-default64
 Libs used:  gmp, readline
 Loading the library and packages ...
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Loading  json 1.1.0 (Reading and Writing JSON)
by Christopher Jefferson (http://caj.host.cs.st-andrews.ac.uk/).
Homepage: http://gap-packages.github.io/json/
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Loading  uuid 0.4 (RFC 4122 UUIDs)
by Markus Pfeiffer (http://www.morphism.de/~markusp/).
Homepage: https://gap-packages.github.io/uuid/
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Loading  Francy 0.2.0 (FRANCY - A Framework for Interactive Discrete Mathematics)
by Manuel Martins (http://github.com/mcmartins).
Homepage: https://github.com/mcmartins/francy
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
#I  Francy: return from LoadPackage
 Components: trans 1.0, prim 2.1, small* 1.0, id* 1.0
 Packages:   AClib 1.2, Alnuth 3.0.0, AtlasRep 1.5.1, AutPGrp 1.8, CRISP 1.4.4, Cryst 4.1.12, CrystCat 1.1.6, CTblLib 1.2.2, FactInt 1.5.4, FGA 1.3.1, Francy 0.2.0, GAPDoc 1.6, 
             IRREDSOL 1.4, json 1.1.0, LAGUNA 3.7.0, Polenta 1.3.7, Polycyclic 2.11, RadiRoot 2.7, ResClasses 4.6.0, Sophus 1.23, SpinSym 1.5, TomLib 1.2.6, Utils 0.46, uuid 0.4
 Try '??help' for help. See also '?copyright', '?cite' and '?authors'
gap>
gap> graph := Graph(GraphType.LAYERED);
<IsFrancyObject/IsGraph>
gap>
gap> shapeG := Shape(ShapeType!.DIAMOND, "G");
<IsFrancyObject/IsShape>
gap>
gap> shape1 := Shape(ShapeType!.DIAMOND, "1");
<IsFrancyObject/IsShape>
gap>
gap> link := Link(shapeG, shape1);
<IsFrancyObject/IsLink>
gap>
gap> Add(graph, [shapeG, shape1, link]);
gap>
gap> callback := Callback(AllSubgroups);
<IsFrancyObject/IsCallback>
gap>
gap> arg1 := RequiredArg(ArgType!.STRING, "A test String");
<IsFrancyObject/IsRequiredArg>
gap>
gap> Add(callback, arg1);
gap>
gap> menu := Menu( "All Subgroups", callback );
<IsFrancyObject/IsMenu>
gap>
gap> canvas := Canvas("Quaternion Group Subgroup Lattice");
<IsFrancyObject/IsCanvas>
gap>
gap> Add(canvas, [graph, menu]);
gap>
gap> Draw(canvas);
rec( 
  data := 
    rec( 
      ("application/francy+json") := "{\"canvas\" : {\"type\" : \"draw.hasse\",\"id\" : \"C2232D710B7840D7AC0B65170CB76F5A\",\"title\" : \"Quaternion Group Subgroup Lattice\",\"option\
s\" : {\"h\" : 400,\"w\" : 680},\"menus\" : {\"9ECB1D5F9D6D4278F434C256F63CBCD3\" : {\"id\" : \"9ECB1D5F9D6D4278F434C256F63CBCD3\",\"title\" : \"All Subgroups\",\"menus\" : {},\"callb\
ack\" : {\"type\" : \"click\",\"id\" : \"B9F9F0943FAD4D4E04CCA836666B98E8\",\"requiredArgs\" : {\"A7C5F31D44B44DC45CBDBDDEC5BFE2C6\" : {\"type\" : \"string\",\"id\" : \"A7C5F31D44B44D\
C45CBDBDDEC5BFE2C6\",\"title\" : \"A test String\",\"value\" : \"\"}},\"knownArgs\" : []}}},\"nodes\" : {\"BBD6B49E746F45D42483770446A32F42\" : {\"type\" : \"circle\",\"id\" : \"BBD6B\
49E746F45D42483770446A32F42\",\"title\" : \"G\",\"options\" : {\"x\" : 0,\"y\" : 0,\"size\" : 10,\"layer\" : 0,\"highlight\" : true}},\"381B78FE811840038CCD1ACBA164C267\" : {\"type\" \
: \"circle\",\"id\" : \"381B78FE811840038CCD1ACBA164C267\",\"title\" : \"1\",\"options\" : {\"x\" : 0,\"y\" : 0,\"size\" : 10,\"layer\" : 0,\"highlight\" : true}}},\"links\" : {\"92C7\
80AE49344AAB9C4130C7E437EAF0\" : {\"source\" : \"BBD6B49E746F45D42483770446A32F42\",\"id\" : \"92C780AE49344AAB9C4130C7E437EAF0\",\"target\" : \"381B78FE811840038CCD1ACBA164C267\"}},\
\"callbacks\" : {}},\"agent\" : \"application\\/francy\"}" ), json := true, source := "gap" )
gap>
```

# Features
This GAP Package allows the creation of Gap Objects that have a graphical and interactive
representation. It is possible to create:

-Canvas (Hasse, Force, Normal, Plot, etc);

-Shapes (circle, rectangle, lines, etc);

-Menus

-Callbacks (OnClick, OnDblClick, etc);

-Plots (Bars, Lines, etc);

The output of these objects is pure JSON and can be used to produce the Graphical representation 
in any Programing Language / OS.

Note: An external library is needed in order to translate the JSON produced into its Graphical representation, 
see _Francy - JS_ a javascript implementation module.