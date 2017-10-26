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
    NORMAL := Objectify(NewType(CanvasFamily, IsCanvasType and IsCanvasTypeRep), rec(value := ".draw")),
    FORCE := Objectify(NewType(CanvasFamily, IsCanvasType and IsCanvasTypeRep), rec(value := ".draw.force")),
    HASSE := Objectify(NewType(CanvasFamily, IsCanvasType and IsCanvasTypeRep), rec(value := ".draw.hasse")),
    PLOT := Objectify(NewType(CanvasFamily, IsCanvasType and IsCanvasTypeRep), rec(value := ".plot"))
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
  [ IsCanvasType,
    IsString,
    IsCanvasDefaults ],
  0,

function(canvasType, title, options)

  local object, id;

  id := HexStringUUID(RandomUUID());
  object := Objectify(NewType(CanvasFamily, IsCanvas and IsCanvasRep), rec(
    add := function(obj)
      ###
      ## <obj> must be of type IsFrancyObject
      ###
      if not IsFrancyObject(obj) then
        Error("Object is not of type IsFrancyObject");
      fi;
      if IsShape(obj) then
        object!.model!.nodes!.(obj!.model!.id) := Clone(obj);
        return;
      fi;
      if IsLink(obj) then
        object!.model!.links!.(obj!.model!.id) := Clone(obj);
        return;
      fi;
      if IsMenu(obj) then
        object!.model!.menus!.(obj!.model!.id) := Clone(obj);
        return;
      fi;
    end,
    remove := function(obj)
      local l;
      ###
      ## <obj> must be of type IsFrancyObject
      ###
      if not IsFrancyObject(obj) then
        Error("Object is not of type IsFrancyObject");
      fi;
      if IsShape(obj) then
        Unbind(object!.model!.nodes!.(obj!.model!.id));
        # remove also links to this object
        for l in object!.model!.links do
          if l!.model!.source!.id = obj!.model!.id or l!.model!.target!.id = obj!.model!.id then
            Unbind(object!.model!.links!.(l!.model!.id));
          fi;
        od;
        return;
      fi;
      if IsLink(obj) then
        Unbind(object!.model!.links!.(obj!.model!.id));
        return;
      fi;
      if IsMenu(obj) then
        Unbind(object!.model!.menus!.(obj!.model!.id));
        return;
      fi;
    end,
    draw := function()
      local obj;
      # clone the main object
      obj := Clone(object);
      # convert record to array
      obj!.model!.nodes := FlattenRecord(object!.model!.nodes);
      obj!.model!.links := FlattenRecord(object!.model!.links);
      obj!.model!.menus := FlattenRecord(object!.model!.menus);
      # flatten canvas object
      obj!.model!.canvas := Flat(object!.model!.canvas); #FIXME why not using FlattenRecord??
      return rec(json := true, source := "gap", data := rec((FrancyMIMEType) := GapToJsonString(obj!.model)));
    end,
    model := rec(
      id        := id,
      agent     := Concatenation("francy", canvasType!.value),
      menus     := rec(),
      nodes     := rec(),
      links     := rec(),
      callbacks := rec(),
      canvas    := rec(
        id      := id,
       	title   := title,
        options := Clone(options)
      )
    )
  ));

  return object;

end);

InstallOtherMethod(Canvas,
  "a canvas type, a title string",
  true,
  [ IsCanvasType,
    IsString ],
  0,

function(canvasType, title)

  return Canvas(canvasType, title, CanvasDefaults);

end);
