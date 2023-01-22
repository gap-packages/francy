#
# francy: Interactive Discrete Mathematics in GAP
#

#############################################################################
##
#M  Chart( <chart type> )
##
InstallMethod(Chart,
  "a chart type, chart defaults",
  true,
  [IsChartType,
   IsChartDefaults],
  0,
function(chartType, options)
  return MergeObjects(Objectify(ChartObjectType, rec(
    id   := GenerateID(),
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
#M  DefaultAxis( <chart type> )
##
InstallMethod(DefaultAxis,
  "a chart type",
  true,
  [IsChartType],
  0,
function(chartType)
  local axis;
  axis := rec();
  # default is linear
  axis.x := XAxis(AxisScaleType.LINEAR, "", []);
  axis.y := YAxis(AxisScaleType.LINEAR, "", []);
  if chartType!.value = ChartType.BAR!.value then
    axis.x := XAxis(AxisScaleType.BAND, "", []);
  fi;
  return axis;
end);

#############################################################################
##
#M  Add( <chart>, <francy object> )
##
## Add a dataset to a chart.
##
InstallOtherMethod(Add,
  "a Chart, a dataset",
  true,
  [IsChart,
   IsDataset],
  0,
function(chart, object)
  chart!.data!.(object!.title) := object!.data;
  return chart;
end);

InstallOtherMethod(Add,
  "a Chart, a list of francy objects",
  true,
  [IsChart,
   IsList],
  0,
function(chart, objects)
  local object;
  for object in objects do
    Add(chart, object);
  od;
  return chart;
end);

#############################################################################
##
#M  Remove( <chart>, <francy object> )
##
## Remove a dataset from a chart.
##
InstallOtherMethod(Remove,
  "a chart, a dataset",
  true,
  [IsChart,
   IsDataset],
  0,
function(chart, object)
  Unbind(chart!.data!.(object!.title));
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
#M  Dataset( <title>, <list of data> )
##
## Create a dataset.
##
InstallMethod(Dataset,
  "a title, a list of data",
  true,
  [IsString,
   IsList],
  0,
function(title, list)
  return Objectify(DatasetObjectType, rec(
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
  return Objectify(XAxisObjectType, rec(
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
  return Objectify(YAxisObjectType, rec(
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
