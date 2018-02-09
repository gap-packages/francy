################################################
#! @BeginChunk Example_Create_Canvas_1
#! @BeginExample

graph := Graph(GraphType.HASSE);

shapeG := Shape(ShapeType.DIAMOND, "G");
SetLayer(shapeG, 1);

shape1 := Shape(ShapeType.WYE, "1");
SetLayer(shape1, 3);

Add(graph, Link(shapeG, shape1));

Add(graph, [shapeG, shape1]);

canvas := Canvas("Quaternion Group Subgroup Lattice");
SetHeight(canvas, 400); # default 600
SetWidth(canvas, 400); # default 800
SetZoomToFit(canvas, false); # default true

Draw(canvas);

#! @EndExample
#! @EndChunk
