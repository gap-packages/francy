#
# francy: Interactive Discrete Mathematics in GAP
#
#! @Chapter Francy Charts
#! It is possible to build <C>Charts</C> with simple <C>Datasets</C>.
#! <P/>
#! Currently, Francy, supports Bar, Line and Scatter charts.
#! <P/>
#! Please see Francy-JS for client implementation.


#! @Section Categories
#! In this section we show all Francy Chart Categories.

#! @Description
#! Identifies <C>Chart</C> objects.
DeclareCategory("IsChart", IsFrancyObject);

#! @Description
#! Identifies <C>ChartType</C> objects.
DeclareCategory("IsChartType", IsFrancyTypeObject);

#! @Description
#! Identifies <C>ChartDefaults</C> objects.
DeclareCategory("IsChartDefaults", IsFrancyDefaultObject);

#! @Description
#! Identifies <C>AxisScaleType</C> objects.
DeclareCategory("IsAxisScaleType", IsFrancyTypeObject);

#! @Description
#! Identifies <C>XAxis</C> objects.
DeclareCategory("IsXAxis", IsFrancyObject);

#! @Description
#! Identifies <C>YAxis</C> objects.
DeclareCategory("IsYAxis", IsFrancyObject);

#! @Description
#! Identifies <C>Dataset</C> objects.
DeclareCategory("IsDataset", IsFrancyObject);


#! @Section Families
#! In this section we show all Francy Chart Families.

#! @Description
#! This Family identifies all <C>Chart</C> objects
#! @Returns <C>ChartFamily</C>
BindGlobal("ChartFamily", NewFamily("ChartFamily", IsChart));


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


#! @Section Operations
#! In this section we show all Francy Chart Operations.

#! @Description
#! Every object will be a subclass of <C>Chart</C> object. All objects contain the same base information.
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
#! Adds a <C>Dataset</C> to a specific <C>Chart</C>.
#! @Arguments IsChart, [IsDataset, List(IsDataset)]
#! @Returns <C>Chart</C>
#DeclareOperation("Add", [IsChart, IsDataset]);

#! @Description
#! Removes a <C>Dataset</C> from a specific <C>Chart</C>.
#! @Arguments IsChart, [IsDataset, List(IsDataset)]
#! @Returns <C>Chart</C>
#DeclareOperation("Remove", [IsChart, IsDataset]);

#! @Description
#! Creates a dataset.
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
#! Creates a <C>XAxis</C>
#! <P/>
#! @Arguments IsAxisScaleType, IsString(title), IsList(domain)
#! @Returns <C>XAxis</C>
DeclareOperation("XAxis", [IsAxisScaleType, IsString, IsList]);

#! @Description
#! Creates a <C>YAxis</C>
#! <P/>
#! @Arguments IsAxisScaleType, IsString(title), IsList(domain)
#! @Returns <C>YAxis</C>
DeclareOperation("YAxis", [IsAxisScaleType, IsString, IsList]);


#! @Section Global
#! In this section we show all Global Chart Francy Records for multi purpose.

#! @Description
#! The various types of <C>Chart</C> supported.
#! @Returns <C>rec</C> of <C>GraphType</C>
BindGlobal("ChartType", rec(
  LINE    := Objectify(ChartTypeObjectType, rec(value := "line")),
  BAR     := Objectify(ChartTypeObjectType, rec(value := "bar")),
  SCATTER := Objectify(ChartTypeObjectType, rec(value := "scatter"))
));

#! @Description
#! The various types of Axis Scales supported.
#! @Returns <C>rec</C> of <C>AxisScaleType</C>
BindGlobal("AxisScaleType", rec(
  LINEAR := Objectify(AxisScaleTypeObjectType, rec(value := "linear")),
  BAND   := Objectify(AxisScaleTypeObjectType, rec(value := "band"))
));

#! @Description
#! The various types of <C>Chart</C> Defaults
#! @Returns <C>rec</C> of <C>ChartDefaults</C>
BindGlobal("ChartDefaults", Objectify(NewType(ChartFamily, IsChartDefaults and IsChartDefaultsRep), rec(
  showLegend := true
)));


#! @Section Attributes
#! In this section we show all Francy Attributes

#! @Description
#! <C>ShowLegend</C> is a property that enables or disables displaying the <C>Chart</C> legend in the client implementation.
#! @Returns <C>IsBool</C> True if enabled otherwise False
DeclareAttribute("ShowLegend", IsChart);
InstallMethod(ShowLegend, "chart", [IsChart], o -> o!.showLegend);
#! @Description
#! <C>ShowLegend</C> is a property that enables or disables displaying the <C>Chart</C> legend in the client implementation.
#! @Arguments IsChart, IsBool
InstallMethod(SetShowLegend, "chart, boolean", [IsChart, IsBool], function(o, b) o!.showLegend := b; end);

#! @Description
#! This is used to display the X Axis Title in the client implementation.
#! @Returns <C>IsString</C> with the title of the object
DeclareAttribute("AxisXTitle", IsChart);
InstallMethod(AxisXTitle, "chart", [IsChart], o -> o!.axis!.x!.title);
#! @Description
#! This is used to display the X Axis Title in the client implementation.
#! @Arguments IsChart, IsString
InstallMethod(SetAxisXTitle, "chart, string", [IsChart, IsString], function(o, s) o!.axis!.x!.title := s; end);

#! @Description
#! This is used to display the Y Axis Title in the client implementation.
#! @Returns <C>IsString</C> with the title of the object
DeclareAttribute("AxisYTitle", IsChart);
InstallMethod(AxisYTitle, "chart", [IsChart], o -> o!.axis!.y!.title);
#! @Description
#! This is used to display the Y Axis Title in the client implementation.
#! @Arguments IsChart, IsString
InstallMethod(SetAxisYTitle, "chart, string", [IsChart, IsString], function(o, s) o!.axis!.y!.title := s; end);

#! @Description
#! This is the domain of the X Axis values in the client implementation.
#! @Returns <C>IsList</C>
DeclareAttribute("AxisXDomain", IsChart);
InstallMethod(AxisXDomain, "chart", [IsChart], o -> o!.axis!.x!.domain);
#! @Description
#! This is the domain of the X Axis values in the client implementation.
#! @Arguments IsList, IsList
InstallMethod(SetAxisXDomain, "chart, list", [IsChart, IsList], function(o, l) o!.axis!.x!.domain := l; end);
