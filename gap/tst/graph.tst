gap> defaults := GraphDefaults;
<IsFrancyObject/IsFrancyDefaultObject>
gap> defaults!.simulation := false;
false
gap> graph := Graph(GraphType.DIRECTED, defaults);
<IsFrancyObject/IsFrancyGraph>
gap> shape1 := Shape(ShapeType.SQUARE);
<IsFrancyObject/IsShape>
gap> SetLayer(shape1, 1);
gap> shape2 := Shape(ShapeType.TRIANGLE);
<IsFrancyObject/IsShape>
gap> SetLayer(shape2, 3);
gap> link := Link(shape1, shape2);
<IsFrancyObject/IsLink>
gap> Add(graph, link);
gap> Add(graph, [shape1, shape2]);
gap> 
gap> graph := Graph(GraphType.UNDIRECTED);
<IsFrancyObject/IsFrancyGraph>
gap> shape := Shape(ShapeType.SQUARE);
<IsFrancyObject/IsShape>
gap> MyFunction := function() Add(graph, Shape(ShapeType.Circle)); return graph; end;
function(  ) ... end
gap> callback := Callback(TriggerType.RIGHT_CLICK, MyFunction);
<IsFrancyObject/IsCallback>
gap> Add(shape, callback);
gap> Add(graph, shape);