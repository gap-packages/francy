#
# francy: Interactive Discrete Mathematics in GAP
#

#############################################################################
##
#M  Graph( <graph type> )
##
InstallMethod(Graph,
  "a graph type",
  true,
  [IsFrancyGraphType,
   IsFrancyGraphDefaults],
  0,
function(graphType, options)
  return MergeObjects(Objectify(FrancyGraphObjectType, rec(
    id    := GenerateID(),
    nodes := rec(),
    links := rec(),
    type  := graphType!.value,
  )), options);
end);

InstallOtherMethod(Graph,
  "a graph type",
  true,
  [IsFrancyGraphType],
  0,
function(graphType)
  return Graph(graphType, GraphDefaults);
end);

#############################################################################
##
#M  UnsetNodes( <graph> )
##
## Removes all objects from a graph.
##
InstallMethod(UnsetNodes,
  "a graph",
  true,
  [IsFrancyGraph],
  0,
function(graph)
  graph!.nodes := rec();
  return graph;
end);

#############################################################################
##
#M  UnsetNodes( <graph> )
##
## Removes all links or edges from a graph.
##
InstallMethod(UnsetLinks,
  "a graph",
  true,
  [IsFrancyGraph],
  0,
function(graph)
  graph!.links := rec();
  return graph;
end);

#############################################################################
##
#M  GetShape( <graph>, <string> )
##
## Gets a shape from a graph.
##
InstallMethod(GetShape,
  "a graph, an id",
  true,
  [IsFrancyGraph,
   IsString],
  0, 
function(g, s) 
  local shapes;
  shapes := GetShapes(g);
  if IsBound(shapes.(s)) then
    return shapes.(s);
  fi;
  return;
end);

#############################################################################
##
#M  GetShapes( <graph> )
##
## Gets all shapes from a graph.
##
InstallMethod(GetShapes,
  "a graph",
  true,
  [IsFrancyGraph],
  0, g -> g!.nodes);

#############################################################################
##
#M  GetLink( <graph>, <string> )
##
## Gets a link or edge from a graph.
##
InstallMethod(GetLink,
  "a graph, an id",
  true,
  [IsFrancyGraph,
   IsString],
  0, 
function(g, s) 
  local links;
  links := GetLinks(g);
  if IsBound(links.(s)) then
    return links.(s);
  fi;
  return;
end);


#############################################################################
##
#M  GetLinks( <graph> )
##
## Gets all links or edges from a graph.
##
InstallMethod(GetLinks,
  "a graph",
  true,
  [IsFrancyGraph],
  0, g -> g!.links);

#############################################################################
##
#M  Add( <graph>, <francy object> )
##
## Add an object to a graph.
##
InstallOtherMethod(Add,
  "a graph, a link",
  true,
  [IsFrancyGraph,
   IsLink],
  0,
function(graph, link)
  graph!.links!.(link!.id) := link;
  return graph;
end);

InstallOtherMethod(Add,
  "a graph, a shape",
  true,
  [IsFrancyGraph,
   IsShape],
  0,
function(graph, shape)
  graph!.nodes!.(shape!.id) := shape;
  return graph;
end);

InstallOtherMethod(Add,
  "a graph, a list of francy objects",
  true,
  [IsFrancyGraph,
   IsList],
  0,
function(graph, objects)
  local object;
  for object in objects do
    Add(graph, object);
  od;
  return graph;
end);

#############################################################################
##
#M  Remove( <graph>, <francy object> )
##
## Remove an object from a graph.
##
InstallOtherMethod(Remove,
  "a graph, a shape",
  true,
  [IsFrancyGraph,
   IsShape],
  0,
function(graph, shape)
  local link;
  Unbind(graph!.nodes!.(shape!.id));
  # remove also links to this object
  for link in graph!.links do
    if link!.source!.id = shape!.id or link!.target!.id = shape!.id then
      Unbind(graph!.links!.(link!.id));
    fi;
  od;
  return graph;
end);

InstallOtherMethod(Remove,
  "a graph, a link",
  true,
  [IsFrancyGraph,
   IsLink],
  0,
function(graph, link)
  Unbind(graph!.links!.(link!.id));
  return graph;
end);

InstallOtherMethod(Remove,
  "a graph, a list of francy objects",
  true,
  [IsFrancyGraph,
   IsList],
  0,
function(graph, objects)
  local object;
  for object in objects do
    Remove(graph, object);
  od;
  return graph;
end);

#############################################################################
##
#M  Shape( <shapeType>, <title>, <options> )
##
## Create a shape.
##
InstallMethod(Shape,
  "a shape type, a title string, a default configurations record",
  true,
  [IsShapeType,
   IsString,
   IsShapeDefaults],
  0,
function(shapeType, title, options)
  return MergeObjects(Objectify(ShapeObjectType, rec(
    id        := GenerateID(),
    type      := shapeType!.value,
    title     := title,
    callbacks := rec(),
    menus     := rec(),
    messages  := rec(),
    layer     := 0,
    parent    := ""
  )), options);
end);

InstallOtherMethod(Shape,
  "a shape type, a title string",
  true,
  [IsShapeType,
   IsString],
  0,
function(shapeType, title)
  return Shape(shapeType, title, ShapeDefaults);
end);

InstallOtherMethod(Shape,
  "a shape type",
  true,
  [IsShapeType],
  0,
function(shapeType)
  return Shape(shapeType, "", ShapeDefaults);
end);


#############################################################################
##
#M  Add( <graph>, <francy object> )
##
## Add a menu to a graph.
##
InstallOtherMethod(Add,
  "a shape, a menu",
  true,
  [IsShape,
   IsMenu],
  0,
function(shape, menu)
    shape!.menus!.(menu!.id) := menu;
  return shape;
end);

InstallOtherMethod(Add,
  "a shape, a callback",
  true,
  [IsShape,
   IsCallback],
  0,
function(shape, callback)
  shape!.callbacks!.(callback!.id) := callback;
  return shape;
end);

InstallOtherMethod(Add,
  "a shape, a message",
  true,
  [IsShape,
   IsFrancyMessage],
  0,
function(shape, message)
  Add(message, Callback(Remove, [shape, message]));
  shape!.messages!.(message!.id) := message;
  return shape;
end);

InstallOtherMethod(Add,
  "a shape, a list of objects",
  true,
  [IsShape,
   IsList],
  0,
function(shape, objects)
  local object;
  for object in objects do
    Add(shape, object);
  od;
  return shape;
end);

#############################################################################
##
#M  Remove( <graph>, <francy object> )
##
## Remove a menu from a graph.
##
InstallOtherMethod(Remove,
  "a shape, a menu",
  true,
  [IsShape,
   IsMenu],
  0,
function(shape, menu)
  Unbind(shape!.menus!.(menu!.id));
  return shape;
end);

InstallOtherMethod(Remove,
  "a shape, a callback",
  true,
  [IsShape,
   IsCallback],
  0,
function(shape, callback)
  Unbind(shape!.callbacks!.(callback!.id));
  return shape;
end);

InstallOtherMethod(Remove,
  "a shape, a message",
  true,
  [IsShape,
   IsFrancyMessage],
  0,
function(shape, message)
  Unbind(shape!.messages!.(message!.id));
  return shape;
end);

InstallOtherMethod(Remove,
  "a shape, a list of objects",
  true,
  [IsShape,
   IsList],
  0,
function(shape, objects)
  local object;
  for object in objects do
    Remove(shape, object);
  od;
  return shape;
end);


#############################################################################
##
#M  Link( <obj1>, <obj2> )
##
InstallMethod(Link,
  "a shape, another shape, link defaults",
  true,
  [IsShape,
   IsShape,
   IsLinkDefaults],
  0,
function(source, target, options)
  return MergeObjects(Objectify(LinkObjectType, rec(
    id     := GenerateID(),
    source := source!.id,
    target := target!.id
  )), options);
end);

InstallOtherMethod(Link,
  "a shape, another shape",
  true,
  [IsShape,
   IsShape],
  0,
function(source, target)
  return Link(source, target, LinkDefaults);
end);

InstallMethod(Links,
  "a list of shape, a list of shape",
  true,
  [IsList,
   IsList,
   IsLinkDefaults],
  0,
function(source, target, options)
  local list, src, tgt;
  list := [];
  for src in source do
    for tgt in target do
      AddSet(list, Link(src, tgt, options));
    od;
  od;
  return list;
end);

InstallOtherMethod(Links,
  "a list of shape, a list of shape",
  true,
  [IsList,
   IsList],
  0,
function(source, target)
  return Links(source, target, LinkDefaults);
end);
