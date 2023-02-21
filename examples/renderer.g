################################################
#! @BeginChunk Example_Create_Renderer_1
#! @BeginExample

canvas := Canvas("Example Canvas / Shape with Messages");

graph := Graph(GraphType.UNDIRECTED);
Add(canvas, graph);

vis := FrancyRenderer(FrancyRendererType.VIS);
Add(canvas, vis);

#! @EndExample
#! @EndChunk
