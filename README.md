# FRANCY

FRANCY is a Framework for Interactive Discrete Mathematics package for GAP.

Unlike XGAP, Francy is not linked with any GUI framework and instead, this package is responsible for the generation 
of Semantic Graphical Objects that can be used to produce Graphical UIs, using external libraries - see _Francy-JS_.

# Usage

```bash
mcmartins@local:~$ gap
 ┌───────┐   GAP 4.8.5, 25-Sep-2016, build of 2016-11-10 12:51:45 (GMT)
 │  GAP  │   http://www.gap-system.org
 └───────┘   Architecture: x86_64-pc-linux-gnu-gcc-default64
 Libs used:  gmp
 Loading the library and packages ...
 Components: trans 1.0, prim 2.1, small* 1.0, id* 1.0
 Packages:   AClib 1.2, Alnuth 3.0.0, AtlasRep 1.5.1, AutPGrp 1.6, CRISP 1.4.4, Cryst 4.1.12, 
             CrystCat 1.1.6, CTblLib 1.2.2, FactInt 1.5.3, FGA 1.3.1, GAPDoc 1.5.1, IO 4.4.6, 
             IRREDSOL 1.3.1, LAGUNA 3.7.0, Polenta 1.3.6, Polycyclic 2.11, RadiRoot 2.7, 
             ResClasses 4.5.0, Sophus 1.23, SpinSym 1.5, TomLib 1.2.5, Utils 0.40
 Try '??help' for help. See also '?copyright', '?cite' and '?authors'
gap> LoadPackage("francy");
─────────────────────────────────────────────────────────────────────────────────────────────────────
Loading  json 1.0.1 (Reading and Writing JSON)
by Christopher Jefferson (http://caj.host.cs.st-andrews.ac.uk/).
Homepage: http://gap-packages.github.io/json/
─────────────────────────────────────────────────────────────────────────────────────────────────────
─────────────────────────────────────────────────────────────────────────────────────────────────────
Loading  FRANCY 0.0.1 (FRANCY - A Framework for Interactive Discrete Mathematics)
by Manuel Martins (http://github.com/mcmartins).
Homepage: https://github.com/mcmartins/francy
─────────────────────────────────────────────────────────────────────────────────────────────────────
true
gap> canvas:=GraphicCanvas("Canvas Test 1", 200, 200);
rec( @type := "svg:svg", defaults := rec( color := "Black", draggable := false ), drawn := false, 
  height := 200, id := 1, name := "Canvas Test 1", object := [  ], 
  potentialAction := rec( @type := "schema:AddAction" ), type := <object>, width := 200 )
gap> 
gap> circle1:=Circle(canvas, 1, 1, 20, rec(color:="Blue", name:="circle1", draggable:=true));
rec( @type := "svg:circle", color := "Blue", cx := 0, cy := 0, draggable := true, drawn := false, 
  id := 2, name := "circle1", potentialAction := rec( @type := "schema:AddAction" ), r := 20, 
  type := <object>, x := 1, y := 1 )
gap> 
rec( @type := "svg:circle", color := "Green", cx := 0, cy := 0, draggable := true, drawn := false, 
  id := 3, name := "circle2", potentialAction := rec( @type := "schema:AddAction" ), r := 40, 
  type := <object>, x := 100, y := 100 )
gap> 
gap> Link(circle1, circle2);
gap> 
gap> Draw(canvas);
{"@type" : {"@type" : "schema:DrawAction"},"object" : {"width" : 200,"name" : "Canvas Test 1","height"\
 : 200,"id" : 1,"@type" : "svg:svg","object" : [{"x" : 1,"y" : 1,"r" : 20,"name" : "circle1","id" : 2,\
"@type" : "svg:circle","drawn" : true,"potentialAction" : {"@type" : "schema:AddAction"},"color" : "Bl\
ue","draggable" : true,"cx" : 0,"cy" : 0,"connectable" : {"object" : [{"x" : 100,"y" : 100,"r" : 40,"n\
ame" : "circle2","id" : 3,"@type" : "svg:circle","drawn" : false,"potentialAction" : {"@type" : "schem\
a:AddAction"},"color" : "Green","draggable" : true,"cx" : 0,"cy" : 0}],"directional" : true}},{"x" : 1\
00,"y" : 100,"r" : 40,"name" : "circle2","id" : 3,"@type" : "svg:circle","drawn" : true,"potentialActi\
on" : {"@type" : "schema:AddAction"},"color" : "Green","draggable" : true,"cx" : 0,"cy" : 0}],"drawn" \
: true,"potentialAction" : {"@type" : "schema:AddAction"},"defaults" : {"color" : "Black","draggable" \
: false}},"@context" : {"svg" : "http:\/\/www.w3.org\/2000\/svg","schema" : "http:\/\/schema.org"}}
gap> 
```

Note: An external library is needed in order to translate the JSON produced into its Graphical representation, 
see _Francy-JS_