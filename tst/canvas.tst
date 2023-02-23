gap> RANDOM_SEED(1);
gap> canvas := Canvas("");
<IsFrancyObject/IsCanvas>
gap> FrancyId(canvas);
"FB9434EB1D9C3443A9C319E151A4721EC"
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
true
gap> SetTexTypesetting(canvas, false);
gap> TexTypesetting(canvas);
false
gap> PrintObj(canvas);
rec(
  chart := rec(
       ),
  graph := rec(
       ),
  height := 400,
  id := "FB9434EB1D9C3443A9C319E151A4721EC",
  menus := rec(
       ),
  messages := rec(
       ),
  texTypesetting := false,
  title := "Quaternion Group Subgroup Lattice",
  width := 400,
  zoomToFit := false )