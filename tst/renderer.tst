gap> canvas := Canvas("Example Canvas / Shape with Messages");
<IsFrancyObject/IsCanvas>
gap> 
gap> graph := Graph(GraphType.UNDIRECTED);
<IsFrancyObject/IsFrancyGraph>
gap> Add(canvas, graph);
gap> 
gap> d3 := FrancyRenderer(FrancyRendererType.D3);
<IsFrancyObject/IsFrancyRenderer>
gap> Add(canvas, d3);
gap>
gap> vis := FrancyRenderer(FrancyRendererType.VIS);
<IsFrancyObject/IsFrancyRenderer>
gap> Add(canvas, vis);
gap>
gap> graphviz := FrancyRenderer(FrancyRendererType.GRAPHVIZ_DOT);
<IsFrancyObject/IsFrancyRenderer>
gap> Add(canvas, vis);
gap>
gap> graphviz := FrancyRenderer(FrancyRendererType.GRAPHVIZ_FDP);
<IsFrancyObject/IsFrancyRenderer>
gap> Add(canvas, vis);
gap>
gap> graphviz := FrancyRenderer(FrancyRendererType.GRAPHVIZ_NEATO);
<IsFrancyObject/IsFrancyRenderer>
gap> Add(canvas, vis);
gap>
gap> graphviz := FrancyRenderer(FrancyRendererType.GRAPHVIZ_OSAGE);
<IsFrancyObject/IsFrancyRenderer>
gap> Add(canvas, vis);
gap>
gap> graphviz := FrancyRenderer(FrancyRendererType.GRAPHVIZ_TWOPI);
<IsFrancyObject/IsFrancyRenderer>
gap> Add(canvas, vis);
gap>
gap> graphviz := FrancyRenderer(FrancyRendererType.GRAPHVIZ_CIRCO);
<IsFrancyObject/IsFrancyRenderer>
gap> Add(canvas, vis);
gap>
gap> graphviz := FrancyRenderer(FrancyRendererType.GRAPHVIZ_PATCHWORK);
<IsFrancyObject/IsFrancyRenderer>
gap> Add(canvas, vis);
gap>
