################################################
#! @BeginChunk Example_Create_Menu_1
#! @BeginExample

canvas := Canvas("Callbacks in action");
SetHeight(canvas, 100);

graph := Graph(GraphType.HASSE);
shape := Shape(ShapeType.CIRCLE);
Add(graph, shape);
Add(canvas, graph);

HelloWorld := function(name)
    Add(canvas, FrancyMessage(Concatenation("Hello, ", name)));
    return Draw(canvas);
end;

callback1 := Callback(HelloWorld);
arg1 := RequiredArg(ArgType.STRING, "Your Name?");
Add(callback1, arg1);

menu := Menu("Example Menu Holder");
menu1 := Menu("Hello Menu Action", callback1 );
menu2 := Menu("Hello Menu Action", callback1 );
Add(menu, menu1);
Remove(menu, menu1);
Add(menu, [menu1, menu2]);
Remove(menu, [menu1, menu2]);

Add(canvas, [menu, menu1]);
Remove(canvas, menu1);
Add(canvas, menu1);
Add(shape, menu1);
Remove(shape, menu1);
Add(shape, [menu1, menu2]);
Remove(shape, [menu1, menu2]);

#! @EndExample
#! @EndChunk
