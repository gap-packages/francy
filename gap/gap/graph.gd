#############################################################################
##
#W  shape.gd                   FRANCY library                  Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##
#! @Chapter Francy Graphs
#!

#############################################################################
##
#! @Section Categories
#! In this section we show the Francy Graph Categories.

#! @Description
#! Identifies <C>Graph</C> objects.
DeclareCategory("IsGraph", IsFrancyObject);

#! @Description
#! Identifies <C>GraphType</C> objects.
DeclareCategory("IsGraphType", IsFrancyObject);

#! @Description
#! Identifies <C>GraphDefaults</C> objects.
DeclareCategory("IsGraphDefaults", IsFrancyDefaults);

#! @Description
#! Identifies <C>Shape</C> objects.
DeclareCategory("IsShape", IsFrancyObject);

#! @Description
#! Identifies <C>ShapeType</C> objects.
DeclareCategory("IsShapeType", IsFrancyObject);

#! @Description
#! Identifies <C>ShapeDefaults</C> objects.
DeclareCategory("IsShapeDefaults", IsFrancyDefaults);

#! @Description
#! Identifies <C>Link</C> objects.
DeclareCategory("IsLink", IsFrancyObject);


#############################################################################
##
#! @Section Families
#! In this section we show the Francy Graph Families.

#! @Description
#! This Family identifies all <C>Graph</C> objects
#! @Returns <C>GraphFamily</C>
BindGlobal("GraphFamily", NewFamily("GraphFamily", IsGraph));

#! @Description
#! This Family identifies all <C>Shape</C> objects
#! @Returns <C>ShapeFamily</C>
BindGlobal("ShapeFamily", NewFamily("ShapeFamily", IsShape));

#! @Description
#! This Family identifies all <C>Link</C> objects
#! @Returns <C>LinkFamily</C>
BindGlobal("LinkFamily", NewFamily("LinkFamily", IsLink));


#############################################################################
##
#! @Section Representations
#! In this section we show the Francy Graph Representations.

#! @Description
#! Checks whether an <C>Object</C> has a <C>Graph</C> internal representation.
DeclareRepresentation("IsGraphRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["id", "type", "title", "options"], IsGraph);

#! @Description
#! Checks whether an <C>Object</C> has a <C>GraphDefaults</C> internal representation.
DeclareRepresentation("IsGraphDefaultsRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["layer", "x", "y", "size", "highlight"], IsGraphDefaults);

#! @Description
#! Checks whether an <C>Object</C> has a <C>GraphType</C> internal representation.
DeclareRepresentation("IsGraphTypeRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["value"], IsGraphType);

#! @Description
#! Checks whether an <C>Object</C> has a <C>Shape</C> internal representation.
DeclareRepresentation("IsShapeRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["id", "type", "title", "options"], IsShape);

#! @Description
#! Checks whether an <C>Object</C> has a <C>ShapeDeafults</C> internal representation.
DeclareRepresentation("IsShapeDefaultsRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["layer", "x", "y", "size", "highlight"], IsShapeDefaults);

#! @Description
#! Checks whether an <C>Object</C> has a <C>ShapeType</C> internal representation.
DeclareRepresentation("IsShapeTypeRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["value"], IsShapeType);

#! @Description
#! Checks whether an <C>Object</C> has a <C>Link</C> internal representation.
DeclareRepresentation("IsLinkRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["id", "source", "target"], IsLink);


#############################################################################
##
#! @Section Operations
#! In this section we show the Francy Graph Operations.

#! @Description
#! Every object to draw will be a subclass of this object. This will allow
#! all the objects to contain the same base information.
#! <P/>
#! Examples:
#! <P/>
#! Create a simple <C>Graph</C> of type <C>GraphType.HASSE</C>:
#! @InsertChunk Example_Create_Graph_1
#! <P/>
#! Create a simple <C>Graph</C> of type <C>GraphType.DIRECTED</C> and simple <C>Shapes</C> connected with <C>Links</C>:
#! @InsertChunk Example_Create_Graph_2
#! <P/>
#! Create a simple <C>Graph</C> of type <C>GraphType.UNDIRECTED</C> and a simple <C>Shape</C> with a <C>TriggerEvent.RIGHT_CLICK</C> <C>Callback</C>:
#! @InsertChunk Example_Create_Graph_3
#! <P/>
#! @Arguments IsGraphType[, IsGraphDefaults]
#! @Returns <C>Graph</C>
DeclareOperation("Graph", [IsGraphType, IsGraphDefaults]);

#! @Description
#! Add <C>FrancyObject</C> to a specific <C>Graph</C>.
#! @Arguments IsGraph, [IsFrancyObject, List(IsFrancyObject)]
#! @Returns <C>Graph</C>
DeclareOperation("Add", [IsGraph, IsFrancyObject]);

#! @Description
#! Remove <C>FrancyObject</C> from a specific <C>Graph</C>.
#! @Arguments IsGraph, [IsFrancyObject, List(IsFrancyObject)]
#! @Returns <C>Graph</C>
DeclareOperation("Remove", [IsGraph, IsFrancyObject]);

#! @Description
#! Every object to draw will be a subclass of this object. This will allow
#! all the objects to contain the same base information.
#! <P/>
#! @Arguments IsShapeType[, IsString(title), IsShapeDefaults]
#! @Returns <C>Shape</C>
DeclareOperation("Shape", [IsShapeType, IsString, IsShapeDefaults]);

#! @Description
#! Add <C>Menu</C> to a specific <C>Shape</C>.
#! @Arguments IsShape, [IsMenu, List(IsMenu)]
#! @Returns <C>Shape</C>
DeclareOperation("Add", [IsShape, IsMenu]);

#! @Description
#! Remove <C>Menu</C> from a specific <C>Shape</C>.
#! @Arguments IsShape, [IsMenu, List(IsMenu)]
#! @Returns <C>Shape</C>
DeclareOperation("Remove", [IsShape, IsMenu]);

#! @Description
#! Add <C>Callback</C> to a specific <C>Shape</C>.
#! @Arguments IsShape, [IsCallback, List(IsCallback)]
#! @Returns <C>Shape</C>
DeclareOperation("Add", [IsShape, IsCallback]);

#! @Description
#! Remove <C>Callback</C> from a specific <C>Shape</C>.
#! @Arguments IsShape, [IsCallback, List(IsCallback)]
#! @Returns <C>Shape</C>
DeclareOperation("Remove", [IsShape, IsCallback]);

#! @Description
#! Creates a link between the objects. This allow to produce graphics
#! representing connected objects.
#! <P/>
#! @Arguments IsShape IsShape
#! @Returns <C>Link</C>
DeclareOperation("Link", [IsShape, IsShape]);

#! @Description
#! Creates a link between the objects. This allow to produce graphics
#! representing connected objects.
#! <P/>
#! @Arguments List(IsShape), List(IsShape)
#! @Returns <C>Link</C>
DeclareOperation("Links", [IsList, IsList]);

#############################################################################
##
#! @Section Global
#! In this section we show the Global Callback Francy Records for multi purpose.

#! @Description
#! The various types of Graph supported.
#! @Returns <C>rec</C> of <C>GraphType</C>
BindGlobal("GraphType", rec(
  UNDIRECTED := Objectify(NewType(GraphFamily, IsGraphType and IsGraphTypeRep), rec(value := "undirected")),
  DIRECTED   := Objectify(NewType(GraphFamily, IsGraphType and IsGraphTypeRep), rec(value := "directed")),
  HASSE      := Objectify(NewType(GraphFamily, IsGraphType and IsGraphTypeRep), rec(value := "hasse"))
));

#! @Description
#! The default configuration for a graph.
#! @Returns <C>rec</C> of <C>GraphDefaults</C>
BindGlobal("GraphDefaults", Objectify(NewType(GraphFamily, IsGraphDefaults and IsGraphDefaultsRep), rec(
  simulation := true
)));

#! @Description
#! The various shape types supported
#! @Returns <C>rec</C> of <C>ShapeType</C>
BindGlobal("ShapeType", rec(
  TRIANGLE := Objectify(NewType(ShapeFamily, IsShapeType and IsShapeTypeRep), rec(value := "triangle")),
  DIAMOND  := Objectify(NewType(ShapeFamily, IsShapeType and IsShapeTypeRep), rec(value := "diamond")),
  CIRCLE   := Objectify(NewType(ShapeFamily, IsShapeType and IsShapeTypeRep), rec(value := "circle")),
  SQUARE   := Objectify(NewType(ShapeFamily, IsShapeType and IsShapeTypeRep), rec(value := "square")),
  CROSS    := Objectify(NewType(ShapeFamily, IsShapeType and IsShapeTypeRep), rec(value := "cross")),
  STAR     := Objectify(NewType(ShapeFamily, IsShapeType and IsShapeTypeRep), rec(value := "star")),
  WYE      := Objectify(NewType(ShapeFamily, IsShapeType and IsShapeTypeRep), rec(value := "wye"))
));

#! @Description
#! The default configuration for a shape.
#! @Returns <C>rec</C> of <C>ShapeDefaults</C>
BindGlobal("ShapeDefaults", Objectify(NewType(ShapeFamily, IsShapeDefaults and IsShapeDefaultsRep), rec(
  highlight := true,
  layer := 0,
  size  := 10,
  x     := 0,
  y     := 0 
)));
