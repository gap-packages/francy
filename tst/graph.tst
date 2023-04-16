gap> RANDOM_SEED(1);
gap> graph := Graph(GraphType.DIRECTED);
<IsFrancyObject/IsFrancyGraph>
gap> SetSimulation(graph, false);
gap> Simulation(graph) = false;
true
gap> shape1 := Shape(ShapeType.SQUARE);
<IsFrancyObject/IsShape>
gap> SetTitle(shape1, "Title");
gap> Title(shape1) = "Title";
true
gap> SetColor(shape1, "#fff");
gap> Color(shape1) = "#fff";
true
gap> SetLayer(shape1, 1);
gap> shape2 := Shape(ShapeType.TRIANGLE);
<IsFrancyObject/IsShape>
gap> SetLayer(shape2, 3);
gap> Layer(shape2) = 3;
true
gap> SetConjugateId(shape2, 1);
gap> ConjugateId(shape2) = 1;
true
gap> link := Link(shape1, shape2);
<IsFrancyObject/IsLink>
gap> SetColor(link, "#fff");
gap> Color(link) = "#fff";
true
gap> SetTitle(link, "Title");
gap> Title(link) = "Title";
true
gap> SetWeight(link, 2);
gap> Weight(link) = 2;
true
gap> SetLength(link, 2);
gap> Length(link) = 2;
true
gap> SetInvisible(link, true);
gap> Invisible(link) = true;
true
gap> Add(graph, link);
gap> GetLink(graph, FrancyId(link));
<IsFrancyObject/IsLink>
gap> GetLink(graph, "I'm not there!");
gap> Remove(graph, link);
<IsFrancyObject/IsFrancyGraph>
gap> Add(graph, [link]);
gap> Remove(graph, [link]);
<IsFrancyObject/IsFrancyGraph>
gap> Add(graph, [shape1, shape2]);
gap> Length(RecNames(graph!.nodes)) = 2;
true
gap> UnsetNodes(graph);
<IsFrancyObject/IsFrancyGraph>
gap> UnsetLinks(graph);
<IsFrancyObject/IsFrancyGraph>
gap> Length(RecNames(graph!.nodes)) = 0;
true
gap> 
gap> graph := Graph(GraphType.UNDIRECTED);
<IsFrancyObject/IsFrancyGraph>
gap> shape := Shape(ShapeType.SQUARE, "Something");
<IsFrancyObject/IsShape>
gap> SetPosX(shape, 10);
gap> PosX(shape) = 10;
true
gap> SetPosY(shape, 20);
gap> PosY(shape) = 20;
true
gap> MyFunction := function() Add(graph, Shape(ShapeType.Circle)); return graph; end;
function(  ) ... end
gap> callback := Callback(TriggerType.RIGHT_CLICK, MyFunction);
<IsFrancyObject/IsCallback>
gap> Add(shape, callback);
gap> Add(graph, shape);
gap> 
gap> graph := Graph(GraphType.TREE);
<IsFrancyObject/IsFrancyGraph>
gap> shape := Shape(ShapeType.SQUARE);
<IsFrancyObject/IsShape>
gap> shape1 := Shape(ShapeType.SQUARE);
<IsFrancyObject/IsShape>
gap> SetParentShape(shape1, shape);
gap> ParentShape(shape1) = FrancyId(shape);
true
gap> SetSize(shape1, 5);
gap> Size(shape1) = 5;
true
gap> SetCollapsed(graph, false);
gap> Collapsed(graph) = false;
true
gap> canvas := Canvas("");
<IsFrancyObject/IsCanvas>
gap> Add(canvas, graph);
gap> Remove(canvas, graph);
<IsFrancyObject/IsCanvas>
gap> Add(canvas, [graph]);
gap> Remove(canvas, [graph]);
<IsFrancyObject/IsCanvas>
