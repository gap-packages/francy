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
  LINE    := Objectify(NewType(ChartFamily, IsChartType and IsChartTypeRep), rec(value := "line")),
  BAR     := Objectify(NewType(ChartFamily, IsChartType and IsChartTypeRep), rec(value := "bar")),
  SCATTER := Objectify(NewType(ChartFamily, IsChartType and IsChartTypeRep), rec(value := "scatter"))
));

#############################################################################
##
#M  TriggerEvent . . .  the various events supported to trigger a callback
##
BindGlobal("AxisScaleType", rec(
  LINEAR := Objectify(NewType(ChartFamily, IsAxisScaleType and IsAxisScaleTypeRep), rec(value := "linear")),
  BAND   := Objectify(NewType(ChartFamily, IsAxisScaleType and IsAxisScaleTypeRep), rec(value := "band"))
));

#############################################################################
##
#M  ChartDefaults . . . . . . . . . .  the various types of shapes supported
##
BindGlobal("ChartDefaults", Objectify(NewType(ChartFamily, IsChartDefaults and IsChartDefaultsRep), rec(
  labels := true,
  legend := true
)));

#############################################################################
##
#M  Chart( <chart type> ) . 
##
InstallMethod(Chart,
  "a chart type, chart defaults",
  true,
  [IsChartType,
   IsChartDefaults],
  0,
function(chartType, options)
  return MergeObjects(Objectify(NewType(ChartFamily, IsChart and IsChartRep), rec(
    id   := HexStringUUID(RandomUUID()),
    data := rec(),
    axis := DefaultAxis(chartType),
    type := chartType!.value,
  )), options);
end);

InstallOtherMethod(Chart,
  "a Chart type",
  true,
  [IsChartType],
  0,
function(chartType)
  return Chart(chartType, ChartDefaults);
end);

#############################################################################
##
#M  DefaultAxis( <chart type> ) . 
##
InstallMethod(DefaultAxis,
  "a chart type",
  true,
  [IsChartType],
  0,
function(chartType)
  local axis;
  axis := rec();
  if chartType!.value = ChartType.LINE!.value then
    axis.x := XAxis(AxisScaleType.LINEAR, "", []);
    axis.y := XAxis(AxisScaleType.LINEAR, "", []);
  elif chartType!.value = ChartType.BAR!.value then
    axis.x := XAxis(AxisScaleType.BAND, "", []);
    axis.y := XAxis(AxisScaleType.LINEAR, "", []);
  fi;
  return axis;
end);

#############################################################################
##
#M  Add( <chart>, <francy object> ) . . . . . add objects to canvas
##
InstallMethod(Add,
  "a Chart, an object",
  true,
  [IsChart,
   IsFrancyObject],
  0,
function(chart, object)
  if IsXAxis(object) then
    chart!.axis!.x := object;
  elif IsYAxis(object) then
    chart!.axis!.y := object;
  elif IsDataset(object) then
    chart!.data!.(object!.title) := object!.data;
  fi;
  return chart;
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
function(chart, object)
  if IsXAxis(object) then
    Unbind(chart!.nodes!.x);
  elif IsYAxis(object) then
    Unbind(chart!.nodes!.y);
  elif IsDataset(object) then
    Unbind(chart!.nodes!.(object!.title));
  fi;
  return chart;
end);

InstallOtherMethod(Remove,
  "a Chart, a list of francy objects",
  true,
  [IsChart,
   IsList],
  0,
function(chart, objects)
  local object;
  for object in objects do
    Remove(chart, object);
  od;
  return chart;
end);

#############################################################################
##
#M  Dataset( <title>, <list of data> ) . . . . . create a dataset
##
InstallMethod(Dataset,
  "a title, a list of data",
  true,
  [IsString,
   IsList],
  0,
function(title, list)
  return Objectify(NewType(ChartFamily, IsDataset and IsDatasetRep), rec(
    title := title,
    data  := list
  ));
end);

#############################################################################
##
#M  XAxis( <axis scale type>, <title>, <domain range> )
##
InstallMethod(XAxis,
  "the axis scale type, a title, a list of data",
  true,
  [IsAxisScaleType, 
   IsString, 
   IsList],
  0,
function(axisScale, title, list)
  return Objectify(NewType(ChartFamily, IsXAxis and IsAxisRep), rec(
    scale  := axisScale!.value,
    title  := title,
    domain := list
  ));
end);

InstallOtherMethod(XAxis,
  "the axis scale type, a title",
  true,
  [IsAxisScaleType, 
   IsString],
  0,
function(axisScale, title)
  return XAxis(axisScale, title, []);
end);

#############################################################################
##
#M  YAxis( <axis scale type>, <title>, <domain range> )
##
InstallMethod(YAxis,
  "the axis scale type, a title, a list of data",
  true,
  [IsAxisScaleType, 
   IsString, 
   IsList],
  0,
function(axisScale, title, list)
  return Objectify(NewType(ChartFamily, IsYAxis and IsAxisRep), rec(
    scale  := axisScale!.value,
    title  := title,
    domain := list
  ));
end);

InstallOtherMethod(YAxis,
  "the axis scale type, a title",
  true,
  [IsAxisScaleType, 
   IsString],
  0,
function(axisScale, title)
  return YAxis(axisScale, title, []);
end);
