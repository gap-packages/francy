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

#! @Description
#! Identifies <C>LinkDefaults</C> objects.
DeclareCategory("IsLinkDefaults", IsFrancyDefaultObject);


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
#! Checks whether an <C>Object</C> has a <C>LinkDeafults</C> internal representation.
DeclareRepresentation("IsLinkDefaultsRep", IsComponentObjectRep, [], IsLinkDefaults);

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
#! Removes all nodes from gaph
DeclareOperation("UnsetNodes", [IsFrancyGraph]);

#! @Description
#! Add <C>IsLink</C> to a specific <C>Graph</C>.
#! @Arguments IsFrancyGraph, [IsLink, List(IsLink)]
#! @Returns <C>Graph</C>
#DeclareOperation("Add", [IsFrancyGraph, IsLink]);

#! @Description
#! Remove <C>IsLink</C> from a specific <C>Graph</C>.
#! @Arguments IsFrancyGraph, [IsLink, List(IsLink)]
#! @Returns <C>Graph</C>
#DeclareOperation("Remove", [IsFrancyGraph, IsLink]);

#! @Description
#! Add <C>IsShape</C> to a specific <C>Graph</C>.
#! @Arguments IsFrancyGraph, [IsShape, List(IsShape)]
#! @Returns <C>Graph</C>
#DeclareOperation("Add", [IsFrancyGraph, IsShape]);

#! @Description
#! Remove <C>IsShape</C> from a specific <C>Graph</C>.
#! @Arguments IsFrancyGraph, [IsShape, List(IsShape)]
#! @Returns <C>Graph</C>
#DeclareOperation("Remove", [IsFrancyGraph, IsShape]);

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
#DeclareOperation("Add", [IsShape, IsMenu]);

#! @Description
#! Remove <C>Menu</C> from a specific <C>Shape</C>.
#! @Arguments IsShape, [IsMenu, List(IsMenu)]
#! @Returns <C>Shape</C>
#DeclareOperation("Remove", [IsShape, IsMenu]);

#! @Description
#! Add <C>Callback</C> to a specific <C>Shape</C>.
#! @Arguments IsShape, [IsCallback, List(IsCallback)]
#! @Returns <C>Shape</C>
#DeclareOperation("Add", [IsShape, IsCallback]);

#! @Description
#! Remove <C>Callback</C> from a specific <C>Shape</C>.
#! @Arguments IsShape, [IsCallback, List(IsCallback)]
#! @Returns <C>Shape</C>
#DeclareOperation("Remove", [IsShape, IsCallback]);

#! @Description
#! Add <C>Callback</C> to a specific <C>Shape</C>.
#! @Arguments IsShape, [IsFrancyMessage, List(IsFrancyMessage)]
#! @Returns <C>Shape</C>
#DeclareOperation("Add", [IsShape, IsFrancyMessage]);

#! @Description
#! Remove <C>Callback</C> from a specific <C>Shape</C>.
#! @Arguments IsShape, [IsFrancyMessage, List(IsFrancyMessage)]
#! @Returns <C>Shape</C>
#DeclareOperation("Remove", [IsShape, IsFrancyMessage]);

#! @Description
#! Creates a <C>Link</C> between the two <C>Shape</C>.
#! <P/>
#! @Arguments IsShape IsShape
#! @Returns <C>Link</C>
DeclareOperation("Link", [IsShape, IsShape, IsLinkDefaults]);

#! @Description
#! Creates a <C>Link</C> between the <C>Shape</C> of the first list and the second list.
#! <P/>
#! @Arguments List(IsShape), List(IsShape)
#! @Returns <C>List(Link)</C>
DeclareOperation("Links", [IsList, IsList, IsLinkDefaults]);

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
  color     := "",
  highlight := true,
  size      := 10,
  x         := 0,
  y         := 0 
)));

#! @Description
#! The default configuration for a shape.
#! @Returns <C>rec</C> of <C>ShapeDefaults</C>
BindGlobal("LinkDefaults", Objectify(NewType(LinkFamily, IsLinkDefaults and IsLinkDefaultsRep), rec(
  color  := "",
  weight := 1
)));


#############################################################################
##
#! @Section Attributes
#! In this section we show the Francy Core Attributes


#! @Description
#! Sets the title on the Shape.
#! Supports LaTex syntax that gets translated, if enabled on the client.
#! @Returns <C>IsString</C> with the title of the object
DeclareAttribute("Title", IsShape);
InstallMethod(Title, "shape", [IsShape], o -> o!.title);
#! @Description
#! Sets the title of the Shape.
#! @Arguments IsRequiredArg, IsString
InstallMethod(SetTitle, "shape, string", [IsShape, IsString], function(o, s) o!.title := s; end);

#! @Description
#! The <C>Color</C> of the current shape.
#! @Returns <C>IsInt</C>
DeclareAttribute("Color", IsShape);
InstallMethod(Color, "shape", [IsShape], o -> o!.color);
#! @Description
#! Sets the <C>Color</C> value.
#! @Arguments IsShape, IsString
InstallMethod(SetColor, "shape, string", [IsShape, IsString], function(o, s) o!.color := s; end);

#! @Description
#! The Position in the X Axis of the Shape in the Canvas in pixels
#! @Returns <C>IsInt</C>
DeclareAttribute("PosX", IsShape);
InstallMethod(PosX, "shape", [IsShape], o -> o!.x);
#! @Description
#! Sets the Position in the X Axis of the Shape in the Canvas in pixels
#! @Arguments IsShape, IsInt
InstallMethod(SetPosX, "shape, int", [IsShape, IsInt], function(o, i) o!.x := i; end);

#! @Description
#! The Position in the Y Axis of the Shape in the Canvas in pixels
#! @Returns <C>IsInt</C>
DeclareAttribute("PosY", IsShape);
InstallMethod(PosY, "shape", [IsShape], o -> o!.y);
#! @Description
#! Sets the Position in the Y Axis of the Shape in the Canvas in pixels
#! @Arguments IsShape, IsInt
InstallMethod(SetPosY, "shape, int", [IsShape, IsInt], function(o, i) o!.y := i; end);

#! @Description
#! The <C>Size</C> of the Shape 
#! @Returns <C>IsPosInt</C>
DeclareAttribute("Size", IsShape);
InstallMethod(Size, "shape", [IsShape], o -> o!.size);
#! @Description
#! Sets the Size of the Shape
#! @Arguments IsShape, IsPosInt
InstallMethod(SetSize, "shape, int", [IsShape, IsPosInt], function(o, i) o!.size := i; end);

#! @Description
#! <C>Highlight</C> is a property that sets the highlight behavior on mouse over in the client implementation.
#! @Returns <C>IsBool</C> True if enabled otherwise False
DeclareAttribute("Highlight", IsShape);
InstallMethod(Highlight, "shape", [IsShape], o -> o!.highlight);
#! @Description
#! Sets the <C>Highlight</C> behavior on mouse over in the client implementation.
#! @Arguments IsCanvas, IsBool
InstallMethod(SetHighlight, "shape, boolean", [IsShape, IsBool], function(o, b) o!.highlight := b; end);

#! @Description
#! The <C>Layer</C> in which the node will be placed when HASSE diagram is selected.
#! This property is also used to apply a color based on a scale
#! @Returns <C>IsInt</C>
DeclareAttribute("Layer", IsShape);
InstallMethod(Layer, "shape", [IsShape], o -> o!.layer);
#! @Description
#! Sets the <C>Layer</C> number.
#! @Arguments IsShape, IsInt
InstallMethod(SetLayer, "shape, int", [IsShape, IsInt], function(o, i) o!.layer := i; end);

#! @Description
#! The <C>ParentNode</C> in which the node will be placed when HASSE diagram is selected.
#! This property is also used to apply a color based on a scale
#! @Returns <C>IsShape</C>
DeclareAttribute("ParentNode", IsShape);
InstallMethod(ParentNode, "shape", [IsShape], o -> o!.parent);
#! @Description
#! Sets the <C>ParentNode</C>.
#! @Arguments IsShape, IsShape
InstallMethod(SetParentNode, "shape, shape", [IsShape, IsShape], function(o, p) o!.parent := p!.id; end);

#! @Description
#! <C>Simulation</C> is a property that sets the simulation behavior by 
#! applying forces to organize the graphics, without the need to provide 
#! custom positions, in the client implementation.
#! @Returns <C>IsBool</C> True if enabled otherwise False
DeclareAttribute("Simulation", IsFrancyGraph);
InstallMethod(Simulation, "graph", [IsFrancyGraph], o -> o!.simulation);
#! @Description
#! Sets the <C>Simulation</C> behavior.
#! @Arguments IsCanvas, IsBool
InstallMethod(SetSimulation, "graph, boolean", [IsFrancyGraph, IsBool], function(o, b) o!.simulation := b; end);

#! @Description
#! <C>Collapsed</C> is a property that sets to collapsed the graphic structure by default
#! @Returns <C>IsBool</C> True if enabled otherwise False
DeclareAttribute("Collapsed", IsFrancyGraph);
InstallMethod(Collapsed, "graph", [IsFrancyGraph], o -> o!.collapsed);
#! @Description
#! Sets the <C>Collapsed</C> behavior.
#! @Arguments IsCanvas, IsBool
InstallMethod(SetCollapsed, "graph, boolean", [IsFrancyGraph, IsBool], function(o, b) o!.collapsed := b; end);

#! @Description
#! <C>Drag</C> is a property that sets the drag behavior on mouse drag, in the client implementation.
#! @Returns <C>IsBool</C> True if enabled otherwise False
DeclareAttribute("Drag", IsFrancyGraph);
InstallMethod(Drag, "graph", [IsFrancyGraph], o -> o!.drag);
#! @Description
#! Sets the <C>Drag</C> behavior.
#! @Arguments IsCanvas, IsBool
InstallMethod(SetDrag, "graph, boolean", [IsFrancyGraph, IsBool], function(o, b) o!.drag := b; end);

#! @Description
#! <C>ShowNeighbours</C> is a property that sets the behavior of showing 
#! connected nodes on click, in the client implementation.
#! @Returns <C>IsBool</C> True if enabled otherwise False
DeclareAttribute("ShowNeighbours", IsFrancyGraph);
InstallMethod(ShowNeighbours, "graph", [IsFrancyGraph], o -> o!.showNeighbours);
#! @Description
#! Sets the <C>ShowNeighbours</C> behavior.
#! @Arguments IsCanvas, IsBool
InstallMethod(SetShowNeighbours, "graph, boolean", [IsFrancyGraph, IsBool], function(o, b) if o!.type = "tree" then Error("Only supported by GraphType TREE!"); fi; o!.showNeighbours := b; end);

#! @Description
#! The <C>Weight</C> of the current link.
#! @Returns <C>IsInt</C>
DeclareAttribute("Weight", IsLink);
InstallMethod(Weight, "link", [IsLink], o -> o!.weight);
#! @Description
#! Sets the <C>Weight</C> value.
#! @Arguments IsLink, IsInt
InstallMethod(SetWeight, "link, int", [IsLink, IsInt], function(o, i) o!.weight := i; end);

#! @Description
#! The <C>Color</C> of the current link.
#! @Returns <C>IsInt</C>
DeclareAttribute("Color", IsLink);
InstallMethod(Color, "link", [IsLink], o -> o!.color);
#! @Description
#! Sets the <C>Color</C> value.
#! @Arguments IsShape, IsString
InstallMethod(SetColor, "link, string", [IsLink, IsString], function(o, s) o!.color := s; end);

#! @Description
#! The <C>Title</C> of the current link.
#! @Returns <C>IsInt</C>
DeclareAttribute("Title", IsLink);
InstallMethod(Title, "link", [IsLink], o -> o!.title);
#! @Description
#! Sets the <C>Title</C> value.
#! @Arguments IsShape, IsString
InstallMethod(SetTitle, "link, int", [IsLink, IsString], function(o, s) o!.title := s; end);
