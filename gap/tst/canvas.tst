gap> graph := Graph(GraphType.HASSE);
<IsFrancyObject/IsFrancyGraph>
gap> 
gap> shapeG := Shape(ShapeType.DIAMOND, "G");
<IsFrancyObject/IsShape>
gap> SetLayer(shapeG, 1);
gap> 
gap> shape1 := Shape(ShapeType.WYE, "1");
<IsFrancyObject/IsShape>
gap> SetLayer(shape1, 3);
gap> 
gap> Add(graph, Link(shapeG, shape1));
gap> 
gap> Add(graph, [shapeG, shape1]);
gap> 
gap> canvas := Canvas("Quaternion Group Subgroup Lattice");
<IsFrancyObject/IsCanvas>
gap> SetHeight(canvas, 400); # default 600
gap> SetWidth(canvas, 400); # default 800
gap> SetZoomToFit(canvas, false); # default true
gap> Draw(canvas);
rec( 
  data := 
    rec( 
      ("application/vnd.francy+json") := "{\"mime\" : \"application\\/vnd.fran\
cy+json\",\"version\" : \"0.5.0\",\"canvas\" : {\"width\" : 400,\"height\" : 4\
00,\"id\" : \"F13\",\"title\" : \"Quaternion Group Subgroup Lattice\",\"zoomTo\
Fit\" : false,\"menus\" : {},\"graph\" : {},\"chart\" : {},\"messages\" : {}}}\
" ), json := true, source := "gap" )