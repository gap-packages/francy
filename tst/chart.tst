gap> RANDOM_SEED(1);
gap> chart:=Chart(ChartType.BAR);
<IsFrancyObject/IsChart>
gap> SetAxisXTitle(chart, "X Axis");
gap> AxisXTitle(chart);
"X Axis"
gap> SetAxisXDomain(chart, ["domain1", "domain2", "domain3", "domain4", "domain5"]); # default []
gap> AxisXDomain(chart);
[ "domain1", "domain2", "domain3", "domain4", "domain5" ]
gap> SetAxisYTitle(chart, "Y Axis");
gap> AxisYTitle(chart);
"Y Axis"
gap> data1 := Dataset("data1", [100,20,30,47,90]);
<IsFrancyObject/IsChart>
gap> data2 := Dataset("data2", [51,60,72,38,97]);
<IsFrancyObject/IsChart>
gap> data3 := Dataset("data3", [50,60,70,80,90]);
<IsFrancyObject/IsChart>
gap> Add(chart, [data1, data2, data3]);
gap> Remove(chart, data1);
<IsFrancyObject/IsChart>
gap> Add(chart, data1);
gap> Remove(chart, [data2, data3]);
<IsFrancyObject/IsChart>
gap> 
gap> Length(RecNames(chart!.data)) = 1;
true
gap> 
gap> chart:=Chart(ChartType.LINE);
<IsFrancyObject/IsChart>
gap> SetShowLegend(chart, false);
gap> ShowLegend(chart) = false;
true
gap> SetAxisXTitle(chart, "X Axis");
gap> SetAxisYTitle(chart, "Y Axis");
gap> data1 := Dataset("data1", [100,20,30,47,90]);
<IsFrancyObject/IsChart>
gap> Add(chart, data1);
gap> 
gap> chart:=Chart(ChartType.SCATTER);
<IsFrancyObject/IsChart>
gap> SetAxisXTitle(chart, "X Axis");
gap> SetAxisYTitle(chart, "Y Axis");
gap> data1 := Dataset("data1", [100,20,30,47,90]);
<IsFrancyObject/IsChart>
gap> Add(chart, data1);
gap> canvas := Canvas("");
<IsFrancyObject/IsCanvas>
gap> Add(canvas, chart);
gap> Remove(canvas, chart);
<IsFrancyObject/IsCanvas>
gap> Add(canvas, [chart]);
gap> Remove(canvas, [chart]);
<IsFrancyObject/IsCanvas>