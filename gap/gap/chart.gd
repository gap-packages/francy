#############################################################################
##
#W  chart.gd                   FRANCY library                  Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
## Categories
##

#############################################################################
##
#C  IsChart( <obj> ) . . . . . . . . . . . category of charts
##
DeclareCategory("IsChart", IsFrancyObject);

#############################################################################
##
#C  IsChartType( <obj> ) . . . . . . . . . . . category of charts
##
DeclareCategory("IsChartType", IsFrancyObject);

#############################################################################
##
#C  IsChartDefaults( <obj> ) . . . . . . . . . . . category of shape defgaults
##
DeclareCategory("IsChartDefaults", IsFrancyDefaults);

#############################################################################
##
#C  IsAxisScaleType( <obj> ) . . . . . . . . . . . category of charts
##
DeclareCategory("IsAxisScaleType", IsFrancyObject);

#############################################################################
##
#C  IsXAxis( <obj> ) . . . . . . . . . . . category of charts
##
DeclareCategory("IsXAxis", IsFrancyObject);

#############################################################################
##
#C  IsYAxis( <obj> ) . . . . . . . . . . . category of charts
##
DeclareCategory("IsYAxis", IsFrancyObject);

#############################################################################
##
#C  IsDataset( <obj> ) . . . . . . . . . . . category of charts
##
DeclareCategory("IsDataset", IsFrancyObject);


#############################################################################
##
## Families
##

#############################################################################
##
#V  ChartFamily
##
BindGlobal("ChartFamily", NewFamily("ChartFamily", IsChart));


#############################################################################
##
## Representations
##

#############################################################################
##
#R  IsChartRep  . . . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation("IsChartRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["id", "type", "title", "options"], IsChart);

#############################################################################
##
#R  IsChartDefaultsRep  . . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsChartDefaultsRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["layer", "x", "y", "size", "highlight"], IsChartDefaults);

#############################################################################
##
#R  IsChartTypeRep  . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation("IsChartTypeRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["value"], IsChartType);

#############################################################################
##
#R  IsAxisScaleTypeRep  . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation("IsAxisScaleTypeRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["value"], IsChartType);

#############################################################################
##
#R  IsAxisScaleTypeRep  . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation("IsAxisRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["scale", "title", "domain"], IsChartType);

#############################################################################
##
#R  IsAxisScaleTypeRep  . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation("IsDatasetRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  [], IsChartType);


#############################################################################
##
## Operations
##

#############################################################################
##
#O  Chart( <category representation>, <canvas>, <defaults> )
#O  Chart( <category representation>, <canvas> )
##
## Every object to draw will be a subclass of this object. This will allow
## all the objects to contain the same base information.
##
DeclareOperation("Chart", [IsChartType, IsChartDefaults]);

#############################################################################
##
#O  Add( <chart>, <francy object> )
#O  Add( <chart>, <list of francy object> )
##
DeclareOperation("Add", [IsChart, IsFrancyObject]);

#############################################################################
##
#O  Remove( <chart>, <francy object> )
#O  Remove( <chart>, <list of francy object> )
##
DeclareOperation("Remove", [IsChart, IsFrancyObject]);

#############################################################################
##
#O  Dataset( <title>, <data> )
##
DeclareOperation("Dataset", [IsString, IsList]);

#############################################################################
##
#O  DefaultAxis( <chart type> )
##
DeclareOperation("DefaultAxis", [IsChartType]);

#############################################################################
##
#O  XAxis( <axis scale type>, <title>, <domain range> )
#O  XAxis( <axis scale type>, <title> )
##
DeclareOperation("XAxis", [IsAxisScaleType, IsString, IsList]);

#############################################################################
##
#O  YAxis( <axis scale type>, <title>, <domain range> )
#O  YAxis( <axis scale type>, <title> )
##
DeclareOperation("YAxis", [IsAxisScaleType, IsString, IsList]);
