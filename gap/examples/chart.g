################################################
#! @BeginChunk Example_Create_Chart_1
#! @BeginExample

chart:=Chart(ChartType.BAR);
SetAxisXTitle(chart, "X Axis");
AxisXTitle(chart);
SetAxisXDomain(chart, ["domain1", "domain2", "domain3", "domain4", "domain5"]); # default []
AxisXDomain(chart);
SetAxisYTitle(chart, "Y Axis");
AxisYTitle(chart);
data1 := Dataset("data1", [100,20,30,47,90]);
data2 := Dataset("data2", [51,60,72,38,97]);
data3 := Dataset("data3", [50,60,70,80,90]);
Add(chart, [data1, data2, data3]);
Remove(chart, data1);
Add(chart, data1);
Remove(chart, [data2, data3]);

Length(RecNames(chart!.data)) = 1;

#! @EndExample
#! @EndChunk

################################################
#! @BeginChunk Example_Create_Chart_2
#! @BeginExample

chart:=Chart(ChartType.LINE);
SetAxisXTitle(chart, "X Axis");
SetAxisYTitle(chart, "Y Axis");
data1 := Dataset("data1", [100,20,30,47,90]);
Add(chart, data1);

#! @EndExample
#! @EndChunk

################################################
#! @BeginChunk Example_Create_Chart_3
#! @BeginExample

chart:=Chart(ChartType.SCATTER);
SetAxisXTitle(chart, "X Axis");
SetAxisYTitle(chart, "Y Axis");
data1 := Dataset("data1", [100,20,30,47,90]);
Add(chart, data1);

#! @EndExample
#! @EndChunk