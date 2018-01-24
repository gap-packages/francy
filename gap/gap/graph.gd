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
DeclareCategory("IsFrancyGraphDefaults", IsFrancyDefaultObject);

#! @Description
#! Identifies <C>Shape</C> objects.
DeclareCategory("IsShape", IsFrancyObject);

#! @Description
#! Identifies <C>ShapeType</C> objects.
DeclareCategory("IsShapeType", IsFrancyObject);

#! @Description
#! Identifies <C>ShapeDefaults</C> objects.
DeclareCategory("IsShapeDefaults", IsFrancyDefaultObject);

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

#! @Description
#! Checks whether an <C>Object</C> has a <C>Graph</C> internal representation.
DeclareRepresentation("IsFrancyGraphRep", IsComponentObjectRep, [], IsFrancyGraph);

#! @Description
#! Checks whether an <C>Object</C> has a <C>GraphDefaults</C> internal representation.
DeclareRepresentation("IsFrancyGraphDefaultsRep", IsComponentObjectRep, [], IsFrancyGraphDefaults);

#! @Description
#! Checks whether an <C>Object</C> has a <C>GraphType</C> internal representation.
DeclareRepresentation("IsFrancyGraphTypeRep", IsComponentObjectRep, [], IsFrancyGraphType);

#! @Description
#! Checks whether an <C>Object</C> has a <C>Shape</C> internal representation.
DeclareRepresentation("IsShapeRep", IsComponentObjectRep, [], IsShape);

#! @Description
#! Checks whether an <C>Object</C> has a <C>ShapeDeafults</C> internal representation.
DeclareRepresentation("IsShapeDefaultsRep", IsComponentObjectRep, [], IsShapeDefaults);

#! @Description
#! Checks whether an <C>Object</C> has a <C>ShapeType</C> internal representation.
DeclareRepresentation("IsShapeTypeRep", IsComponentObjectRep, [], IsShapeType);

#! @Description
#! Checks whether an <C>Object</C> has a <C>Link</C> internal representation.
DeclareRepresentation("IsLinkRep", IsComponentObjectRep, [], IsLink);
  
#! @Description
#! Creates a new type for <C>FrancyGraph/C> objects.
BindGlobal("FrancyGraphObjectType", NewType(GraphFamily, IsFrancyGraph and IsFrancyGraphRep));

#! @Description
#! Creates a new type for <C>Shape/C> objects.
BindGlobal("ShapeObjectType", NewType(ShapeFamily, IsShape and IsShapeRep));

#! @Description
#! Creates a new type for <C>Link/C> objects.
BindGlobal("LinkObjectType", NewType(LinkFamily, IsLink and IsLinkRep));

#! @Description
#! Creates a new type for <C>ShapeType/C> objects.
BindGlobal("ShapeTypeObjectType", NewType(ShapeFamily, IsShapeType and IsShapeTypeRep));

#! @Description
#! Creates a new type for <C>GraphType/C> objects.
BindGlobal("GraphTypeObjectType", NewType(GraphFamily, IsFrancyGraphType and IsFrancyGraphTypeRep));

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
#! @Arguments IsShape, [IsFrancyMessage, List(IsFrancyMessage)]
#! @Returns <C>Shape</C>
DeclareOperation("Add", [IsShape, IsFrancyMessage]);

#! @Description
#! Remove <C>Callback</C> from a specific <C>Shape</C>.
#! @Arguments IsShape, [IsFrancyMessage, List(IsFrancyMessage)]
#! @Returns <C>Shape</C>
DeclareOperation("Remove", [IsShape, IsFrancyMessage]);

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
  HASSE      := Objectify(GraphTypeObjectType, rec(value := "hasse")),
  TREE       := Objectify(GraphTypeObjectType, rec(value := "tree"))
));

#! @Description
#! The default configuration for a graph.
#! @Returns <C>rec</C> of <C>GraphDefaults</C>
BindGlobal("GraphDefaults", Objectify(NewType(GraphFamily, IsFrancyGraphDefaults and IsFrancyGraphDefaultsRep), rec(
  simulation     := true,
  collapsed      := true,
  drag           := false,
  showNeighbours := false
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
BindGlobal("ShapeDefaults", Objectify(NewType(ShapeFamily, IsShapeDefaults and IsShapeDefaultsRep), rec(
  highlight := true,
  size      := 10,
  x         := 0,
  y         := 0 
)));


#############################################################################
##
#! @Section Attributes
#! In this section we show the Francy Core Attributes

DeclareAttribute("Title", IsShape);
InstallMethod(Title, "shape", [IsShape], o -> o!.title);
InstallMethod(SetTitle, "shape, string", [IsShape, IsString], function(o, s) o!.title := s; end);

DeclareAttribute("PosX", IsShape);
InstallMethod(PosX, "shape", [IsShape], o -> o!.x);
InstallMethod(SetPosX, "shape, int", [IsShape, IsInt], function(o, i) o!.x := i; end);

DeclareAttribute("PosY", IsShape);
InstallMethod(PosY, "shape", [IsShape], o -> o!.y);
InstallMethod(SetPosY, "shape, int", [IsShape, IsInt], function(o, i) o!.y := i; end);

DeclareAttribute("Size", IsShape);
InstallMethod(Size, "shape", [IsShape], o -> o!.size);
InstallMethod(SetSize, "shape, int", [IsShape, IsInt], function(o, i) o!.size := i; end);

DeclareAttribute("Highlight", IsShape);
InstallMethod(Highlight, "shape", [IsShape], o -> o!.highlight);
InstallMethod(SetHighlight, "shape, boolean", [IsShape, IsBool], function(o, b) o!.highlight := b; end);

DeclareAttribute("Layer", IsShape);
InstallMethod(Layer, "shape", [IsShape], o -> o!.layer);
InstallMethod(SetLayer, "shape, int", [IsShape, IsInt], function(o, i) o!.layer := i; end);

DeclareAttribute("ParentNode", IsShape);
InstallMethod(ParentNode, "shape", [IsShape], o -> o!.parent);
InstallMethod(SetParentNode, "shape, shape", [IsShape, IsShape], function(o, p) if not o!.type = "tree" then Error("This is only for GraphType.TREE!"); fi; o!.parent := p!.id; end);
InstallMethod(UnsetParentNode, "shape", [IsShape], function(o) if not o!.type = "tree" then Error("This is only for GraphType.TREE!"); fi; o!.parent := ""; end);

DeclareAttribute("Simulation", IsFrancyGraph);
InstallMethod(Simulation, "graph", [IsFrancyGraph], o -> o!.simulation);
InstallMethod(SetSimulation, "graph, boolean", [IsFrancyGraph, IsBool], function(o, b) o!.simulation := b; end);

DeclareAttribute("Collapsed", IsFrancyGraph);
InstallMethod(Collapsed, "graph", [IsFrancyGraph], o -> o!.collapsed);
InstallMethod(SetCollapsed, "graph, boolean", [IsFrancyGraph, IsBool], function(o, b) o!.collapsed := b; end);

DeclareAttribute("Drag", IsFrancyGraph);
InstallMethod(Drag, "graph", [IsFrancyGraph], o -> o!.drag);
InstallMethod(SetDrag, "graph, boolean", [IsFrancyGraph, IsBool], function(o, b) o!.drag := b; end);

DeclareAttribute("ShowNeighbours", IsFrancyGraph);
InstallMethod(ShowNeighbours, "graph", [IsFrancyGraph], o -> o!.showNeighbours);
InstallMethod(SetShowNeighbours, "graph, boolean", [IsFrancyGraph, IsBool], function(o, b) if o!.type = "tree" then Error("This is only for GraphType.TREE!"); fi; o!.showNeighbours := b; end);

DeclareAttribute("Nodes", IsFrancyGraph);
InstallMethod(Nodes, "graph", [IsFrancyGraph], o -> o!.nodes);
InstallMethod(UnsetNodes, "graph", [IsFrancyGraph], function(o) o!.nodes := rec(); end);
