#############################################################################
##
#W  free.gi                 FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
#M  Chart( <chart type> ) . 
##
InstallMethod(FreeForm,
  "a chart type, chart defaults",
  true,
  [IsChartType,
   IsChartDefaults],
  0,
function(chartType, options)
  return MergeObjects(Objectify(ChartObjectType, rec(
    id   := GenerateID(),
    data := rec(),
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