gap> canvas := Canvas("Example Canvas / Shape with Messages");
<IsFrancyObject/IsCanvas>
gap> 
gap> graph := Graph(GraphType.HASSE); # will go throughout graphs later
<IsFrancyObject/IsFrancyGraph>
gap> shape := Shape(ShapeType.CIRCLE); # will go throughout shapes later
<IsFrancyObject/IsShape>
gap> Add(graph, shape);
gap> Add(canvas, graph);
gap> 
gap> Add(canvas, FrancyMessage(FrancyMessageType.INFO, "Hello"));
gap> Add(shape, FrancyMessage(FrancyMessageType.INFO, "Hello"));
gap> Add(canvas, FrancyMessage(FrancyMessageType.ERROR, "Oops", "Hello"));
gap> Add(shape, FrancyMessage(FrancyMessageType.ERROR, "Oops", "Hello"));
gap> Add(canvas, FrancyMessage(FrancyMessageType.WARNING, "Hello"));
gap> Add(shape, FrancyMessage(FrancyMessageType.WARNING, "Hello"));
gap> Add(canvas, FrancyMessage(FrancyMessageType.SUCCESS, "Hello"));
gap> Add(shape, FrancyMessage(FrancyMessageType.SUCCESS, "Hello"));
gap> Add(canvas, FrancyMessage("Hello", "World"));
gap> Add(shape, FrancyMessage("Hello", "World"));