gap> canvas := Canvas("");
<IsFrancyObject/IsCanvas>
gap> Id(canvas);
"F14"
gap> SetTitle(canvas, "Quaternion Group Subgroup Lattice");
gap> Title(canvas);
"Quaternion Group Subgroup Lattice"
gap> SetHeight(canvas, 400); # default 600
gap> Height(canvas);
400
gap> SetWidth(canvas, 400); # default 800
gap> Width(canvas);
400
gap> SetZoomToFit(canvas, false); # default true
gap> ZoomToFit(canvas);
false
gap> 
gap> Draw(canvas);
rec( 
  data := 
    rec( 
      ("application/vnd.francy+json") := "{\"mime\" : \"application\\/vnd.fran\
cy+json\",\"version\" : \"0.5.0\",\"canvas\" : {\"width\" : 400,\"height\" : 4\
00,\"id\" : \"F14\",\"title\" : \"Quaternion Group Subgroup Lattice\",\"zoomTo\
Fit\" : false,\"menus\" : {},\"graph\" : {},\"chart\" : {},\"messages\" : {}}}\
" ), json := true, source := "gap" )