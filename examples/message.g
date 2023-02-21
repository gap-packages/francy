################################################
#! @BeginChunk Example_Create_Message_1
#! @BeginExample

canvas := Canvas("Example Canvas / Shape with Messages");

graph := Graph(GraphType.HASSE); # will go throughout graphs later
shape := Shape(ShapeType.CIRCLE); # will go throughout shapes later
Add(graph, shape);
Add(canvas, graph);

Add(canvas, FrancyMessage(FrancyMessageType.INFO, "Hello"));
Add(shape, FrancyMessage(FrancyMessageType.INFO, "Hello"));
Add(canvas, FrancyMessage(FrancyMessageType.ERROR, "Oops", "Hello"));
Add(shape, FrancyMessage(FrancyMessageType.ERROR, "Oops", "Hello"));
Add(canvas, FrancyMessage(FrancyMessageType.WARNING, "Hello"));
Add(shape, FrancyMessage(FrancyMessageType.WARNING, "Hello"));
Add(canvas, FrancyMessage(FrancyMessageType.SUCCESS, "Hello"));
Add(shape, FrancyMessage(FrancyMessageType.SUCCESS, "Hello"));
Add(canvas, FrancyMessage("Hello", "World"));
Add(shape, FrancyMessage("Hello", "World"));

#! @EndExample
#! @EndChunk
