gap> canvas := Canvas("");
<IsFrancyObject/IsCanvas>
gap> FrancyId(canvas);
"F16"
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
<jupyter renderable>
gap> TexTypesetting(canvas);
false
gap> SetTexTypesetting(canvas, true);
gap> TexTypesetting(canvas);
true
gap> splash:=DrawSplash(canvas);;
gap> IsString(splash);
true
gap> StartsWith(splash, "<!DOCTYPE html>\n");
true
gap> PrintObj(canvas);
rec(
  chart := rec(
       ),
  graph := rec(
       ),
  height := 400,
  id := "F16",
  menus := rec(
       ),
  messages := rec(
       ),
  texTypesetting := true,
  title := "Quaternion Group Subgroup Lattice",
  width := 400,
  zoomToFit := false )