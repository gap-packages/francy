gap> RANDOM_SEED(1);
gap> canvas := Canvas("Callbacks in action");
<IsFrancyObject/IsCanvas>
gap> SetHeight(canvas, 100);
gap> 
gap> graph := Graph(GraphType.UNDIRECTED);
<IsFrancyObject/IsFrancyGraph>
gap> shape := Shape(ShapeType.CIRCLE);
<IsFrancyObject/IsShape>
gap> Add(graph, shape);
gap> Add(canvas, graph);
gap> 
gap> myFirstFunction := function(name)
>     Add(canvas, FrancyMessage(Concatenation("Hello, ", name)));
>     return Draw(canvas);
> end;
function( name ) ... end
gap> 
gap> callback1 := Callback(myFirstFunction);
<IsFrancyObject/IsCallback>
gap> arg1 := RequiredArg(ArgType.STRING, "Your Name?");
<IsFrancyObject/IsCallback>
gap> Add(callback1, arg1);
gap> 
gap> menu := Menu("Example Menu Holder");
<IsFrancyObject/IsMenu>
gap> SetTitle(menu, "Menu Holder");
gap> Title(menu) = "Menu Holder";
true
gap> menu1 := Menu("Hello Menu Action", callback1 );
<IsFrancyObject/IsMenu>
gap> menu2 := Menu("Hello Menu Action", callback1 );
<IsFrancyObject/IsMenu>
gap> Add(menu, menu1);
gap> Remove(menu, menu1);
<IsFrancyObject/IsMenu>
gap> Add(menu, [menu1, menu2]);
gap> Remove(menu, [menu1, menu2]);
<IsFrancyObject/IsMenu>
gap> 
gap> Add(canvas, [menu, menu1]);
gap> Remove(canvas, menu1);
<IsFrancyObject/IsCanvas>
gap> Add(canvas, menu1);
gap> Add(shape, menu1);
gap> Remove(shape, menu1);
<IsFrancyObject/IsShape>
gap> Add(shape, [menu1, menu2]);
gap> Remove(shape, [menu1, menu2]);
<IsFrancyObject/IsShape>
