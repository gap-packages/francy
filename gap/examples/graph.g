################################################
#! @BeginChunk Example_Create_Graph_1
#! @BeginExample

graph := Graph(GraphType.HASSE);
shape := Shape(ShapeType.CIRCLE, "Title");
Add(graph, shape);

#! @EndExample
#! @EndChunk

################################################
#! @BeginChunk Example_Create_Graph_2
#! @BeginExample

defaults := GraphDefaults;
defaults!.simulation := false;
graph := Graph(GraphType.DIRECTED, defaults);
shape1 := Shape(ShapeType.SQUARE);
shape1!.layer := 1;
shape2 := Shape(ShapeType.TRIANGLE);
shape2!.layer := 3;
link := Link(shape1, shape2);
Add(graph, link);
Add(graph, [shape1, shape2]);

#! @EndExample
#! @EndChunk

################################################
#! @BeginChunk Example_Create_Graph_3
#! @BeginExample

graph := Graph(GraphType.UNDIRECTED);
shape := Shape(ShapeType.SQUARE);
MyFunction := function() Add(graph, Shape(ShapeType.Circle)); return graph; end;
callback := Callback(TriggerType.RIGHT_CLICK, MyFunction);
Add(shape, callback);
Add(graph, shape);

#! @EndExample
#! @EndChunk