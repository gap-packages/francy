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
  return MergeObjects(Objectify(NewType(GraphFamily, IsFrancyGraph and IsFrancyGraphRep), rec(
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
  return MergeObjects(Objectify(NewType(ShapeFamily, IsShape and IsShapeRep), rec(
    id        := GenerateID(),
    type      := shapeType!.value,
    title     := title,
    callbacks := rec(),
    menus     := rec(),
    info      := rec()
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
#M  InfoLabel( <string>, <string> )  . .  create a Info for a shape
##
InstallMethod(InfoLabel,
  "a title, a value",
  true,
  [IsString,
   IsString],
  0,
function(title, value)
  return Objectify(NewType(InfoLabelFamily, IsInfoLabel and IsInfoLabelRep), rec(
    title := title,
    value := value
  ));
end);

#############################################################################
##
#M  Add( <graph>, <info> ) . . . . . add objects to shape
##
InstallMethod(Add,
  "a shape, a info",
  true,
  [IsShape,
   IsInfoLabel],
  0,
function(shape, info)
    shape!.info!.(info!.title) := info!.value;
  return shape;
end);

InstallOtherMethod(Add,
  "a shape, a list of infos",
  true,
  [IsShape,
   IsList],
  0,
function(shape, infos)
  local info;
  for info in infos do
    Add(shape, info);
  od;
  return shape;
end);

#############################################################################
##
#M  Remove( <graph>, <info> ) . . . . . remove object from shape
##
InstallMethod(Remove,
  "a shape, a info",
  true,
  [IsShape,
   IsInfoLabel],
  0,
function(shape, info)
  Unbind(shape!.info!.(info!.title));
  return shape;
end);

InstallOtherMethod(Remove,
  "a shape, a list of infos",
  true,
  [IsShape,
   IsList],
  0,
function(shape, infos)
  local info;
  for info in infos do
    Remove(shape, info);
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
  return Objectify(NewType(LinkFamily, IsLink and IsLinkRep), rec(
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
