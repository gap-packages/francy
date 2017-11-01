#############################################################################
##
#W  canvas.gi                   FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
#M  CanvasType . . . . . . . . . . . .  the various types of canvas supported
##
BindGlobal("CanvasType", Objectify(NewType(CanvasFamily, IsFrancyType and IsFrancyTypeRep), rec(
  NORMAL := Objectify(NewType(CanvasFamily, IsCanvasType and IsCanvasTypeRep), rec(value := "normal")),
  FORCE := Objectify(NewType(CanvasFamily, IsCanvasType and IsCanvasTypeRep), rec(value := "force")),
  LAYERED := Objectify(NewType(CanvasFamily, IsCanvasType and IsCanvasTypeRep), rec(value := "layered")),
  GRID := Objectify(NewType(CanvasFamily, IsCanvasType and IsCanvasTypeRep), rec(value := "grid"))
)));

#############################################################################
##
#M  CanvasDefaults . . . . . . . . . .  the various types of shapes supported
##
BindGlobal("CanvasDefaults", Objectify(NewType(CanvasFamily, IsCanvasDefaults and IsCanvasDefaultsRep), rec(
  w:= 680,
  h:= 400 
)));

#############################################################################
##
#M  Canvas( <canvasType>, <title>, <options> ) . . . . . a new graphic canvas
##
InstallMethod(Canvas,
  "a canvas type, a title string, a default configurations record",
  true,
  [IsCanvasType,
   IsString,
   IsCanvasDefaults],
  0,
function(canvasType, title, options)
  return Objectify(NewType(CanvasFamily, IsCanvas and IsCanvasRep), rec(
    id        := HexStringUUID(RandomUUID()),
    menus     := rec(),
    nodes     := rec(),
    links     := rec(),
    type      := canvasType!.value,
    title     := title,
    options   := options
  ));
end);

InstallOtherMethod(Canvas,
  "a canvas type, a title string",
  true,
  [IsCanvasType,
   IsString],
  0,
function(canvasType, title)
  return Canvas(canvasType, title, CanvasDefaults);
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
  if IsShape(object) then
    canvas!.nodes!.(object!.id) := object;
  elif IsLink(object) then
    canvas!.links!.(object!.id) := object;
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
  if IsShape(object) then
    Unbind(canvas!.nodes!.(object!.id));
    # remove also links to this object
    for link in object!.links do
      if link!.source!.id = object!.id or link!.target!.id = object!.id then
        Unbind(canvas!.links!.(link!.id));
      fi;
    od;
  elif IsLink(object) then
    Unbind(canvas!.links!.(object!.id));
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
