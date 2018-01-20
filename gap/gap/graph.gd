#############################################################################
##
#W  shape.gd                   FRANCY library                  Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##
#! @Chapter Francy Graphs
#!
#! Please see Francy-JS for client implementation.


#############################################################################
##
#! @Section Categories
#! In this section we show the Francy Graph Categories.

#! @Description
#! Identifies <C>Graph</C> objects.
DeclareCategory("IsFrancyGraph", IsFrancyObject);

#! @Description
#! Identifies <C>GraphType</C> objects.
DeclareCategory("IsFrancyGraphType", IsFrancyObject);

#! @Description
#! Identifies <C>GraphDefaults</C> objects.
DeclareCategory("IsFrancyGraphDefaults", IsFrancyDefaults);

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
BindGlobal("GraphFamily", NewFamily("GraphFamily", IsFrancyGraph));

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

BindGlobal("FrancyGraphObjectType", NewType(GraphFamily, IsFrancyGraph));

BindGlobal("ShapeObjectType", NewType(ShapeFamily, IsShape));

BindGlobal("LinkObjectType", NewType(LinkFamily, IsLink));

BindGlobal("ShapeTypeObjectType", NewType(ShapeFamily, IsShapeType));

BindGlobal("GraphTypeObjectType", NewType(GraphFamily, IsFrancyGraphType));

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
#! @Arguments IsFrancyGraphType[, IsFrancyGraphDefaults]
#! @Returns <C>Graph</C>
DeclareOperation("Graph", [IsFrancyGraphType, IsFrancyGraphDefaults]);

#! @Description
#! Add <C>FrancyObject</C> to a specific <C>Graph</C>.
#! @Arguments IsFrancyGraph, [IsFrancyObject, List(IsFrancyObject)]
#! @Returns <C>Graph</C>
DeclareOperation("Add", [IsFrancyGraph, IsFrancyObject]);

#! @Description
#! Remove <C>FrancyObject</C> from a specific <C>Graph</C>.
#! @Arguments IsFrancyGraph, [IsFrancyObject, List(IsFrancyObject)]
#! @Returns <C>Graph</C>
DeclareOperation("Remove", [IsFrancyGraph, IsFrancyObject]);

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
#! Add <C>Callback</C> to a specific <C>Shape</C>.
#! @Arguments IsShape, [IsHintMessage, List(IsHintMessage)]
#! @Returns <C>Shape</C>
DeclareOperation("Add", [IsShape, IsHintMessage]);

#! @Description
#! Remove <C>Callback</C> from a specific <C>Shape</C>.
#! @Arguments IsShape, [IsHintMessage, List(IsHintMessage)]
#! @Returns <C>Shape</C>
DeclareOperation("Remove", [IsShape, IsHintMessage]);

#! @Description
#! Add <C>Callback</C> to a specific <C>Shape</C>.
#! @Arguments IsShape, [IsShape, List(IsShape)]
#! @Returns <C>Shape</C>
DeclareOperation("Add", [IsShape, IsShape]);

#! @Description
#! Remove <C>Callback</C> from a specific <C>Shape</C>.
#! @Arguments IsShape, [IsShape, List(IsShape)]
#! @Returns <C>Shape</C>
DeclareOperation("Remove", [IsShape, IsShape]);

#! @Description
#! Creates a <C>Link</C> between the two <C>Shape</C>.
#! <P/>
#! @Arguments IsShape IsShape
#! @Returns <C>Link</C>
DeclareOperation("Link", [IsShape, IsShape]);

#! @Description
#! Creates a <C>Link</C> between the <C>Shape</C> of the first list and the second list.
#! <P/>
#! @Arguments List(IsShape), List(IsShape)
#! @Returns <C>List(Link)</C>
DeclareOperation("Links", [IsList, IsList]);

#############################################################################
##
#! @Section Global
#! In this section we show the Global Callback Francy Records for multi purpose.

#! @Description
#! The various types of Graph supported.
#! @Returns <C>rec</C> of <C>GraphType</C>
BindGlobal("GraphType", rec(
  UNDIRECTED := Objectify(GraphTypeObjectType, rec(value := "undirected")),
  DIRECTED   := Objectify(GraphTypeObjectType, rec(value := "directed")),
  CUSTOM     := Objectify(GraphTypeObjectType, rec(value := "custom")),
  HASSE      := Objectify(GraphTypeObjectType, rec(value := "hasse")),
  TREE       := Objectify(GraphTypeObjectType, rec(value := "tree"))
));

#! @Description
#! The default configuration for a graph.
#! @Returns <C>rec</C> of <C>GraphDefaults</C>
BindGlobal("GraphDefaults", Objectify(NewType(GraphFamily, IsFrancyGraphDefaults), rec(
  simulation := true,
  collapse   := true,
  drag       := false,
  neighbours := false
)));

#! @Description
#! The various shape types supported
#! @Returns <C>rec</C> of <C>ShapeType</C>
BindGlobal("ShapeType", rec(
  TRIANGLE := Objectify(ShapeTypeObjectType, rec(value := "triangle")),
  DIAMOND  := Objectify(ShapeTypeObjectType, rec(value := "diamond")),
  CIRCLE   := Objectify(ShapeTypeObjectType, rec(value := "circle")),
  SQUARE   := Objectify(ShapeTypeObjectType, rec(value := "square")),
  CROSS    := Objectify(ShapeTypeObjectType, rec(value := "cross")),
  STAR     := Objectify(ShapeTypeObjectType, rec(value := "star")),
  WYE      := Objectify(ShapeTypeObjectType, rec(value := "wye"))
));

#! @Description
#! The default configuration for a shape.
#! @Returns <C>rec</C> of <C>ShapeDefaults</C>
BindGlobal("ShapeDefaults", Objectify(NewType(ShapeFamily, IsShapeDefaults), rec(
  highlight := true,
  size      := 10,
  x         := 0,
  y         := 0 
)));
