#############################################################################
##
#W  free.gd                   FRANCY library                  Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##
#! @Chapter Francy Free Form
#! It is possible to build <C>Free Form</C> scketches.
#! <P/>
#! Currently, Francy, supports Lines, Multilines and Text.
#! <P/>
#! Please see Francy-JS for client implementation.


#############################################################################
##
#! @Section Categories
#! In this section we show the Francy Chart Categories.

#! @Description
#! Identifies <C>FreeForm</C> objects.
DeclareCategory("IsFreeForm", IsFrancyObject);

#! @Description
#! Identifies <C>FreeFormType</C> objects.
DeclareCategory("IsFreeFormType", IsFrancyTypeObject);

#! @Description
#! Identifies <C>FreeFormDefaults</C> objects.
DeclareCategory("IsFreeFormDefaults", IsFrancyDefaultObject);


#############################################################################
##
#! @Section Families
#! In this section we show the Francy FreeForm Families.

#! @Description
#! This Family identifies all <C>FreeForm</C> objects
#! @Returns <C>FreeFormFamily</C>
BindGlobal("FreeFormFamily", NewFamily("FreeFormFamily", IsChart));


#############################################################################
##
#! @Section Representations
#! In this section we show the Francy Chart Representations.

#! @Description
#! Checks whether an <C>Object</C> has a <C>Chart</C> internal representation.
DeclareRepresentation("IsChartRep", IsComponentObjectRep, [], IsChart);

#! @Description
#! Checks whether an <C>Object</C> has a <C>ChartDefaults</C> internal representation.
DeclareRepresentation("IsChartDefaultsRep", IsComponentObjectRep, [], IsChartDefaults);

#! @Description
#! Checks whether an <C>Object</C> has a <C>ChartType</C> internal representation.
DeclareRepresentation("IsChartTypeRep", IsComponentObjectRep, [], IsChartType);

#! @Description
#! Checks whether an <C>Object</C> has a <C>AxisScaleType</C> internal representation.
DeclareRepresentation("IsAxisScaleTypeRep", IsComponentObjectRep, [], IsChartType);

#! @Description
#! Checks whether an <C>Object</C> has a <C>AxisRep</C> internal representation.
DeclareRepresentation("IsAxisRep", IsComponentObjectRep, [], IsChartType);

#! @Description
#! Checks whether an <C>Object</C> has a <C>DatasetRep</C> internal representation.
DeclareRepresentation("IsDatasetRep", IsComponentObjectRep, [], IsChartType);

#! @Description
#! Creates a new type for <C>Chart/C> objects.
BindGlobal("ChartObjectType", NewType(ChartFamily, IsChart and IsChartRep));

#! @Description
#! Creates a new type for <C>Dataset/C> objects.
BindGlobal("DatasetObjectType", NewType(ChartFamily, IsDataset and IsDatasetRep));

#! @Description
#! Creates a new type for <C>XAxis/C> objects.
BindGlobal("XAxisObjectType", NewType(ChartFamily, IsXAxis and IsAxisRep));

#! @Description
#! Creates a new type for <C>YAxis/C> objects.
BindGlobal("YAxisObjectType", NewType(ChartFamily, IsYAxis and IsAxisRep));

#! @Description
#! Creates a new type for <C>ChartType/C> objects.
BindGlobal("ChartTypeObjectType",  NewType(ChartFamily, IsChartType and IsChartTypeRep));

#! @Description
#! Creates a new type for <C>AxisScale/C> objects.
BindGlobal("AxisScaleTypeObjectType",  NewType(ChartFamily, IsAxisScaleType and IsAxisScaleTypeRep));


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
DeclareOperation("FreeForm", [IsFreeFormType, IsFreeFormDefaults]);

#############################################################################
##
#! @Section Global
#! In this section we show the Global Chart Francy Records for multi purpose.

#! @Description
#! The various types of Charts supported.
#! @Returns <C>rec</C> of <C>GraphType</C>
BindGlobal("FreeFormType", rec(
  LINE  := Objectify(FreeFormTypeObjectType, rec(value := "line")),
  TEXT  := Objectify(FreeFormTypeObjectType, rec(value := "text"))
));

#! @Description
#! The various types of Charts Defaults
#! @Returns <C>rec</C> of <C>ChartDefaults</C>
BindGlobal("FreeFormDefaults", Objectify(NewType(ChartFamily, IsChartDefaults and IsChartDefaultsRep), rec(
  
)));


#############################################################################
##
#! @Section Attributes
#! In this section we show the Francy Attributes
