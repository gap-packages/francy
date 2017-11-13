#############################################################################
##
#W  callback.gi                 FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
#M  TriggerEvent . . .  the various events supported to trigger a callback
##
BindGlobal("ChartType", rec(
  BAR := Objectify(NewType(ChartFamily, IsChartType and IsChartTypeRep), rec(value := "bar")),
  LINE  := Objectify(NewType(ChartFamily, IsChartType and IsChartTypeRep), rec(value := "line"))
));

#############################################################################
##
#M  ChartDefaults . . . . . . . . . .  the various types of shapes supported
##
BindGlobal("ChartDefaults", Objectify(NewType(ChartFamily, IsChartDefaults and IsChartDefaultsRep), rec(
  force:= true
)));

#############################################################################
##
#M  Chart( <chart type> ) . 
##
InstallMethod(Chart,
  "a Chart type",
  true,
  [IsChartType,
   IsChartDefaults],
  0,
function(ChartType, options)
  return MergeObjects(Objectify(NewType(ChartFamily, IsChart and IsChartRep), rec(
    id        := HexStringUUID(RandomUUID()),
    nodes     := rec(),
    links     := rec(),
    type      := ChartType!.value,
  )), options);
end);

InstallOtherMethod(Chart,
  "a Chart type",
  true,
  [IsChartType],
  0,
function(ChartType)
  return Chart(ChartType, ChartDefaults);
end);
#############################################################################
##
#M  Add( <chart>, <francy object> ) . . . . . add objects to canvas
##
InstallMethod(Add,
  "a Chart, a shape",
  true,
  [IsChart,
   IsFrancyObject],
  0,
function(Chart, object)
  if IsShape(object) then
    Chart!.nodes!.(object!.id) := object;
  elif IsLink(object) then
    Chart!.links!.(object!.id) := object;
  fi;
  return Chart;
end);

InstallOtherMethod(Add,
  "a Chart, a list of francy objects",
  true,
  [IsChart,
   IsList],
  0,
function(Chart, objects)
  local object;
  for object in objects do
    Add(Chart, object);
  od;
  return Chart;
end);

#############################################################################
##
#M  Remove( <chart>, <francy object> ) . . . . . remove object from canvas
##
InstallMethod(Remove,
  "a canvas, a shape",
  true,
  [IsChart,
   IsFrancyObject],
  0,
function(Chart, object)
  local link;
  if IsShape(object) then
    Unbind(Chart!.nodes!.(object!.id));
    # remove also links to this object
    for link in object!.links do
      if link!.source!.id = object!.id or link!.target!.id = object!.id then
        Unbind(Chart!.links!.(link!.id));
      fi;
    od;
  elif IsLink(object) then
    Unbind(Chart!.links!.(object!.id));
  elif IsMenu(object) then
    Unbind(Chart!.menus!.(object!.id));
  fi;
  return Chart;
end);

InstallOtherMethod(Remove,
  "a Chart, a list of francy objects",
  true,
  [IsChart,
   IsList],
  0,
function(Chart, objects)
  local object;
  for object in objects do
    Remove(Chart, object);
  od;
  return Chart;
end);
