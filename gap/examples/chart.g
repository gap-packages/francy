################################################
#! @BeginChunk Example_Create_Chart_1
#! @BeginExample

chart:=Chart(ChartType.BAR);
chart!.axis!.x!.title := "X Axis";
chart!.axis!.x!.domain := ["domain1", "domain2", "domain3", "domain4", "domain5"]; # default []
chart!.axis!.y!.title := "Y Axis";
data1 := Dataset("data1", [100,20,30,47,90]);
data2 := Dataset("data2", [51,60,72,38,97]);
data3 := Dataset("data3", [50,60,70,80,90]);
Add(chart, [data1, data2, data3]);


#! @EndExample
#! @EndChunk

################################################
#! @BeginChunk Example_Create_Chart_2
#! @BeginExample

chart:=Chart(ChartType.LINE);
chart!.axis!.x!.title := "X Axis"; # default ""
chart!.axis!.y!.title := "Y Axis"; # default ""
data1 := Dataset("data1", [100,20,30,47,90]);
Add(chart, data1);

#! @EndExample
#! @EndChunk

################################################
#! @BeginChunk Example_Create_Chart_3
#! @BeginExample

chart:=Chart(ChartType.SCATTER);
chart!.axis!.x!.title := "X Axis";
chart!.axis!.y!.title := "Y Axis";
data1 := Dataset("data1", [100,20,30,47,90]);
Add(chart, data1);

#! @EndExample
#! @EndChunk