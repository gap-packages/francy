#############################################################################
##
#W  callback.gi                 FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
#M  Graph( <graph type> ) . 
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
#M  Add( <graph>, <francy object> ) . . . . . add objects to graph
##
InstallMethod(Add,
  "a graph, a shape",
  true,
  [IsFrancyGraph,
   IsFrancyObject],
  0,
function(graph, object)
  if IsShape(object) then
    graph!.nodes!.(object!.id) := object;
  elif IsLink(object) then
    graph!.links!.(object!.id) := object;
  fi;
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
#M  Remove( <graph>, <francy object> ) . . . . . remove object from graph
##
InstallMethod(Remove,
  "a graph, a shape",
  true,
  [IsFrancyGraph,
   IsFrancyObject],
  0,
function(graph, object)
  local link;
  if IsShape(object) then
    Unbind(graph!.nodes!.(object!.id));
    # remove also links to this object
    for link in object!.links do
      if link!.source!.id = object!.id or link!.target!.id = object!.id then
        Unbind(graph!.links!.(link!.id));
      fi;
    od;
  elif IsLink(object) then
    Unbind(graph!.links!.(object!.id));
  elif IsMenu(object) then
    Unbind(graph!.menus!.(object!.id));
  fi;
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
#M  Shape( <shapeType>, <title>, <options> )  . .  create a Shape for a type
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
#M  Add( <shape>, <shape> ) . . . . . add shape children
##
InstallMethod(Add,
  "a shape, a shape",
  true,
  [IsShape,
   IsShape],
  0,
function(shape1, shape2)
  shape2!.parent := shape1!.id;
  return shape1;
end);

InstallOtherMethod(Add,
  "a shape, a list of shape",
  true,
  [IsShape,
   IsList],
  0,
function(shape, shapes)
  local shp;
  for shp in shapes do
    Add(shape, shp);
  od;
  return shape;
end);

#############################################################################
##
#M  Remove( <shape>, <shape> ) . . . . . remove shape children
##
InstallMethod(Remove,
  "a shape, a shape",
  true,
  [IsShape,
   IsShape],
  0,
function(shape1, shape2)
  shape2!.parent := "";
  return shape1;
end);

InstallOtherMethod(Remove,
  "a shape, a list of shape",
  true,
  [IsShape,
   IsList],
  0,
function(shape, shapes)
  local shp;
  for shp in shapes do
    Remove(shape, shp);
  od;
  return shape;
end);


#############################################################################
##
#M  Add( <graph>, <francy object> ) . . . . . add objects to graph
##
InstallMethod(Add,
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
  "a shape, a list of menu",
  true,
  [IsShape,
   IsList],
  0,
function(shape, menus)
  local menu;
  for menu in menus do
    Add(shape, menu);
  od;
  return shape;
end);

#############################################################################
##
#M  Remove( <graph>, <francy object> ) . . . . . remove object from graph
##
InstallMethod(Remove,
  "a shape, a menu",
  true,
  [IsShape,
   IsMenu],
  0,
function(shape, menu)
  Unbind(shape!.menu!.(menu!.id));
  return shape;
end);

InstallOtherMethod(Remove,
  "a shape, a list of menus",
  true,
  [IsShape,
   IsList],
  0,
function(shape, menus)
  local menu;
  for menu in menus do
    Remove(shape, menu);
  od;
  return shape;
end);


#############################################################################
##
#M  Add( <graph>, <callback> ) . . . . . add objects to graph
##
InstallMethod(Add,
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
  "a shape, a list of callback",
  true,
  [IsShape,
   IsList],
  0,
function(shape, callbacks)
  local callback;
  for callback in callbacks do
    Add(shape, callback);
  od;
  return shape;
end);

#############################################################################
##
#M  Remove( <graph>, <callback> ) . . . . . remove object from graph
##
InstallMethod(Remove,
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
  "a shape, a list of callbacks",
  true,
  [IsShape,
   IsList],
  0,
function(shape, callbacks)
  local callback;
  for callback in callbacks do
    Remove(shape, callback);
  od;
  return shape;
end);


#############################################################################
##
#M  Add( <shape>, <info> ) . . . . . add objects to shape
##
InstallMethod(Add,
  "a shape, a message",
  true,
  [IsShape,
   IsHintMessage],
  0,
function(shape, message)
  shape!.messages!.(message!.id) := message;
  return shape;
end);

InstallOtherMethod(Add,
  "a shape, a list of messages",
  true,
  [IsShape,
   IsList],
  0,
function(shape, messages)
  local message;
  for message in messages do
    Add(shape, message);
  od;
  return shape;
end);

#############################################################################
##
#M  Remove( <shape>, <info> ) . . . . . remove object from shape
##
InstallMethod(Remove,
  "a shape, a message",
  true,
  [IsShape,
   IsHintMessage],
  0,
function(shape, message)
  Unbind(shape!.messages!.(message!.id));
  return shape;
end);

InstallOtherMethod(Remove,
  "a shape, a list of messages",
  true,
  [IsShape,
   IsList],
  0,
function(shape, messages)
  local message;
  for message in messages do
    Remove(shape, message);
  od;
  return shape;
end);


#############################################################################
##
#M  Link( <obj1>, <obj2> )
##
InstallMethod(Link,
  "a shape, another shape",
  true,
  [IsShape,
   IsShape],
  0,

function(source, target)
  return Objectify(LinkObjectType, rec(
    id     := GenerateID(),
    source := source!.id,
    target := target!.id
  ));
end);

InstallMethod(Links,
  "a list of shape, a list of shape",
  true,
  [IsList,
   IsList],
  0,
function(source, target)
  local list, src, tgt;
  list := [];
  for src in source do
    for tgt in target do
      AddSet(list, Link(src, tgt));
    od;
  od;
  return list;
end);
