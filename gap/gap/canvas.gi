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
  NORMAL := Objectify(NewType(CanvasFamily, IsCanvasType and IsCanvasTypeRep), rec(value := "draw")),
  FORCE := Objectify(NewType(CanvasFamily, IsCanvasType and IsCanvasTypeRep), rec(value := "draw.force")),
  HASSE := Objectify(NewType(CanvasFamily, IsCanvasType and IsCanvasTypeRep), rec(value := "draw.hasse")),
  PLOT := Objectify(NewType(CanvasFamily, IsCanvasType and IsCanvasTypeRep), rec(value := "plot"))
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

  local object;
  
  object := Objectify(NewType(CanvasFamily, IsCanvas and IsCanvasRep), rec(
    add := function(obj)
      if not IsFrancyObject(obj) then
        Error("Object is not of type IsFrancyObject");
      elif IsShape(obj) then
        object!.nodes!.(obj!.id) := obj;
      elif IsLink(obj) then
        object!.links!.(obj!.id) := obj;
      elif IsMenu(obj) then
        object!.menus!.(obj!.id) := obj;
      fi;
      return;
    end,
    remove := function(obj)
      local l;
      if not IsFrancyObject(obj) then
        Error("Object is not of type IsFrancyObject");
      elif IsShape(obj) then
        Unbind(object!.nodes!.(obj!.id));
        # remove also links to this object
        for l in object!.links do
          if l!.source!.id = obj!.id or l!.target!.id = obj!.id then
            Unbind(object!.links!.(l!.id));
          fi;
        od;
      elif IsLink(obj) then
        Unbind(object!.links!.(obj!.id));
      elif IsMenu(obj) then
        Unbind(object!.menus!.(obj!.id));
      fi;
      return;
    end,
    id        := HexStringUUID(RandomUUID()),
    menus     := rec(),
    nodes     := rec(),
    links     := rec(),
    callbacks := rec(),
    type      := canvasType!.value,
    title     := title,
    options   := options
  ));

  return object;

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
