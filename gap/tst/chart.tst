gap> chart:=Chart(ChartType.BAR);
<IsFrancyObject/IsChart>
gap> SetAxisXTitle(chart, "X Axis");
gap> SetAxisXDomain(chart, ["domain1", "domain2", "domain3", "domain4", "domain5"]); # default []
gap> SetAxisYTitle(chart, "Y Axis");
gap> data1 := Dataset("data1", [100,20,30,47,90]);
<IsFrancyObject/IsChart>
gap> data2 := Dataset("data2", [51,60,72,38,97]);
<IsFrancyObject/IsChart>
gap> data3 := Dataset("data3", [50,60,70,80,90]);
<IsFrancyObject/IsChart>
gap> Add(chart, [data1, data2, data3]);
gap> 
gap> 
gap> chart:=Chart(ChartType.LINE);
<IsFrancyObject/IsChart>
gap> SetAxisXTitle(chart, "X Axis"); # default ""
gap> SetAxisYTitle(chart, "Y Axis"); # default ""
gap> data1 := Dataset("data1", [100,20,30,47,90]);
<IsFrancyObject/IsChart>
gap> Add(chart, data1);
gap> 
gap> 
gap> chart:=Chart(ChartType.SCATTER);
<IsFrancyObject/IsChart>
gap> SetAxisXTitle(chart, "X Axis");
gap> SetAxisXTitle(chart, "Y Axis");
gap> data1 := Dataset("data1", [100,20,30,47,90]);
<IsFrancyObject/IsChart>
gap> Add(chart, data1);