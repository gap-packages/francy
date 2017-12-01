#############################################################################
##
#W  chart.gd                   FRANCY library                  Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##
#! @Chapter Francy Charts
#! It is possible to build <C>Charts</C> with simple <C>Datasets</C>.
#! <P/>
#! Currently, Francy, supports Bar, Line and Scatter Charts.
#! <P/>
#! Please see Francy-JS for client implementation.#


#############################################################################
##
#! @Section Categories
#! In this section we show the Francy Chart Categories.

#! @Description
#! Identifies <C>Chart</C> objects.
DeclareCategory("IsChart", IsFrancyObject);

#! @Description
#! Identifies <C>ChartType</C> objects.
DeclareCategory("IsChartType", IsFrancyObject);

#! @Description
#! Identifies <C>ChartDefaults</C> objects.
DeclareCategory("IsChartDefaults", IsFrancyDefaults);

#! @Description
#! Identifies <C>AxisScaleType</C> objects.
DeclareCategory("IsAxisScaleType", IsFrancyObject);

#! @Description
#! Identifies <C>XAxis</C> objects.
DeclareCategory("IsXAxis", IsFrancyObject);

#! @Description
#! Identifies <C>YAxis</C> objects.
DeclareCategory("IsYAxis", IsFrancyObject);

#! @Description
#! Identifies <C>Dataset</C> objects.
DeclareCategory("IsDataset", IsFrancyObject);


#############################################################################
##
#! @Section Families
#! In this section we show the Francy Chart Families.

#! @Description
#! This Family identifies all <C>Chart</C> objects
#! @Returns <C>ChartFamily</C>
BindGlobal("ChartFamily", NewFamily("ChartFamily", IsChart));


#############################################################################
##
#! @Section Representations
#! In this section we show the Francy Chart Representations.

#! @Description
#! Checks whether an <C>Object</C> has a <C>Chart</C> internal representation.
DeclareRepresentation("IsChartRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["id", "type", "title", "options"], IsChart);

#! @Description
#! Checks whether an <C>Object</C> has a <C>ChartDefaults</C> internal representation.
DeclareRepresentation("IsChartDefaultsRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["layer", "x", "y", "size", "highlight"], IsChartDefaults);

#! @Description
#! Checks whether an <C>Object</C> has a <C>ChartType</C> internal representation.
DeclareRepresentation("IsChartTypeRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["value"], IsChartType);

#! @Description
#! Checks whether an <C>Object</C> has a <C>AxisScaleType</C> internal representation.
DeclareRepresentation("IsAxisScaleTypeRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["value"], IsChartType);

#! @Description
#! Checks whether an <C>Object</C> has a <C>AxisRep</C> internal representation.
DeclareRepresentation("IsAxisRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["scale", "title", "domain"], IsChartType);

#! @Description
#! Checks whether an <C>Object</C> has a <C>DatasetRep</C> internal representation.
DeclareRepresentation("IsDatasetRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  [], IsChartType);


#############################################################################
##
#! @Section Operations
#! In this section we show the Francy Chart Operations.

#! @Description
#! Every object to draw will be a subclass of this object. This will allow
#! all the objects to contain the same base information.
#! <P/>
#! Examples:
#! <P/>
#! Create a simple <C>Chart</C> of type <C>ChartType.BAR</C>:
#! @InsertChunk Example_Create_Chart_1
#! <P/>
#! Create a simple <C>Chart</C> of type <C>ChartType.LINE</C>:
#! @InsertChunk Example_Create_Chart_2
#! <P/>
#! Create a simple <C>Chart</C> of type <C>ChartType.SCATTER</C>:
#! @InsertChunk Example_Create_Chart_3
#! <P/>
#! @Arguments IsChartType[, IsChartDefaults]
#! @Returns <C>Chart</C>
DeclareOperation("Chart", [IsChartType, IsChartDefaults]);

#! @Description
#! Add <C>FrancyObject</C> to a specific <C>Chart</C>.
#! @Arguments IsChart, [IsFrancyObject, List(IsFrancyObject)]
#! @Returns <C>Chart</C>
DeclareOperation("Add", [IsChart, IsFrancyObject]);

#! @Description
#! Remove <C>FrancyObject</C> from a specific <C>Chart</C>.
#! @Arguments IsChart, [IsFrancyObject, List(IsFrancyObject)]
#! @Returns <C>Chart</C>
DeclareOperation("Remove", [IsChart, IsFrancyObject]);

#! @Description
#! Creates a dataset
#! <P/>
#! @Arguments IsString(title), IsList(data)
#! @Returns <C>Dataset</C>
DeclareOperation("Dataset", [IsString, IsList]);

#! @Description
#! Returns the default settings for a <C>ChartType</C>
#! <P/>
#! @Arguments IsChartType
#! @Returns <C>rec</C>
DeclareOperation("DefaultAxis", [IsChartType]);

#! @Description
#! Creates a XAxis
#! <P/>
#! @Arguments IsAxisScaleType, IsString(title), IsList(domain)
#! @Returns <C>XAxis</C>
DeclareOperation("XAxis", [IsAxisScaleType, IsString, IsList]);

#! @Description
#! Creates a YAxis
#! <P/>
#! @Arguments IsAxisScaleType, IsString(title), IsList(domain)
#! @Returns <C>v</C>
DeclareOperation("YAxis", [IsAxisScaleType, IsString, IsList]);

#############################################################################
##
#! @Section Global
#! In this section we show the Global Chart Francy Records for multi purpose.

#! @Description
#! The various types of Charts supported.
#! @Returns <C>rec</C> of <C>GraphType</C>
BindGlobal("ChartType", rec(
  LINE    := Objectify(NewType(ChartFamily, IsChartType and IsChartTypeRep), rec(value := "line")),
  BAR     := Objectify(NewType(ChartFamily, IsChartType and IsChartTypeRep), rec(value := "bar")),
  SCATTER := Objectify(NewType(ChartFamily, IsChartType and IsChartTypeRep), rec(value := "scatter"))
));

#! @Description
#! The various types of Axis Scales supported.
#! @Returns <C>rec</C> of <C>AxisScaleType</C>
BindGlobal("AxisScaleType", rec(
  LINEAR := Objectify(NewType(ChartFamily, IsAxisScaleType and IsAxisScaleTypeRep), rec(value := "linear")),
  BAND   := Objectify(NewType(ChartFamily, IsAxisScaleType and IsAxisScaleTypeRep), rec(value := "band"))
));

#! @Description
#! The various types of Charts Defaults
#! @Returns <C>rec</C> of <C>ChartDefaults</C>
BindGlobal("ChartDefaults", Objectify(NewType(ChartFamily, IsChartDefaults and IsChartDefaultsRep), rec(
  labels := true,
  legend := true
)));