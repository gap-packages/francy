gap> RANDOM_SEED(1);
gap> canvas := Canvas("Example Canvas / Shape with Messages");
<IsFrancyObject/IsCanvas>
gap> 
gap> graph := Graph(GraphType.UNDIRECTED);
<IsFrancyObject/IsFrancyGraph>
gap> shape := Shape(ShapeType.CIRCLE);
<IsFrancyObject/IsShape>
gap> Add(graph, shape);
gap> Add(canvas, graph);
gap> 
gap> message := FrancyMessage(FrancyMessageType.INFO, "Hello");
<IsFrancyObject/IsFrancyMessage>
gap> SetTitle(message, "Title");
gap> Title(message) = "Title";
true
gap> SetValue(message, "Value");
gap> Value(message) = "Value";
true
gap> message2 := FrancyMessage(FrancyMessageType.INFO, "Hello");
<IsFrancyObject/IsFrancyMessage>
gap> Add(canvas, [message, message2]);
gap> Remove(canvas, message2);
<IsFrancyObject/IsCanvas>
gap> Remove(canvas, [message]);
<IsFrancyObject/IsCanvas>
gap> Add(canvas, FrancyMessage(FrancyMessageType.ERROR, "Oops", "Hello"));
gap> Add(shape, FrancyMessage(FrancyMessageType.ERROR, "Oops", "Hello"));
gap> Add(canvas, FrancyMessage(FrancyMessageType.WARNING, "Hello"));
gap> Add(shape, FrancyMessage(FrancyMessageType.WARNING, "Hello"));
gap> Add(canvas, FrancyMessage(FrancyMessageType.SUCCESS, "Hello"));
gap> Add(shape, FrancyMessage(FrancyMessageType.SUCCESS, "Hello"));
gap> Add(canvas, FrancyMessage("Hello", "World"));
gap> Add(shape, FrancyMessage("Hello", "World"));
gap> Add(canvas, FrancyMessage("Hello World"));
gap> Add(shape, FrancyMessage("Hello World"));