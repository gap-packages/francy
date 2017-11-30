#############################################################################
##
#W  canvas.gi                   FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
#M  Canvas( <title>, <options> ) . . . . . a new graphic canvas
##
InstallMethod(Canvas,
  "a title string, a default configurations record",
  true,
  [IsString,
   IsCanvasDefaults],
  0,
function(title, options)
  return MergeObjects(Objectify(NewType(CanvasFamily, IsCanvas and IsCanvasRep), rec(
    id    := HexStringUUID(RandomUUID()),
    menus := rec(),
    graph := rec(),
    chart := rec(),
    title := title
  )), options);
end);

InstallOtherMethod(Canvas,
  "a title string",
  true,
  [IsString],
  0,
function(title)
  return Canvas(title, CanvasDefaults);
end);

#############################################################################
##
#M  Add( <canvas>, <francy object> ) . . . . . add objects to canvas
##
InstallMethod(Add,
  "a canvas, a shape",
  true,
  [IsCanvas,
   IsFrancyObject],
  0,
function(canvas, object)
  if IsGraph(object) then
    canvas!.graph := object;
    # unbind the chart, only one should exist!
    Unbind(canvas!.chart);
  elif IsChart(object) then
    canvas!.chart := object;
    # unbind the graph, only one should exist!
    Unbind(canvas!.graph);
  elif IsMenu(object) then
    canvas!.menus!.(object!.id) := object;
  fi;
  return canvas;
end);

InstallOtherMethod(Add,
  "a canvas, a list of francy objects",
  true,
  [IsCanvas,
   IsList],
  0,
function(canvas, objects)
  local object;
  for object in objects do
    Add(canvas, object);
  od;
  return canvas;
end);

#############################################################################
##
#M  Remove( <canvas>, <francy object> ) . . . . . remove object from canvas
##
InstallMethod(Remove,
  "a canvas, a shape",
  true,
  [IsCanvas,
   IsFrancyObject],
  0,
function(canvas, object)
  local link;
  if IsGraph(object) then
    Unbind(canvas!.graph);
  elif IsChart(object) then
    Unbind(canvas!.chart);
  elif IsMenu(object) then
    Unbind(canvas!.menus!.(object!.id));
  fi;
  return canvas;
end);

InstallOtherMethod(Remove,
  "a canvas, a list of francy objects",
  true,
  [IsCanvas,
   IsList],
  0,
function(canvas, objects)
  local object;
  for object in objects do
    Remove(canvas, object);
  od;
  return canvas;
end);

#############################################################################
##
#M  Draw( ) . . . . . 
##
InstallMethod(Draw,
  "",
  true,
  [IsCanvas],
  0,
function(canvas)
  local object;
  object := rec();
  object!.agent := FrancyMIMEType;
  object!.canvas := Sanitize(canvas);
  return rec(json := true, source := "gap", data := rec((FrancyMIMEType) := GapToJsonString(object)));
end);
