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
cy+json\",\"version\" : \"0.6.0\",\"canvas\" : {\"width\" : 400,\"height\" : 4\
00,\"id\" : \"F14\",\"title\" : \"Quaternion Group Subgroup Lattice\",\"zoomTo\
Fit\" : false,\"texTypesetting\" : false,\"menus\" : {},\"graph\" : {},\"chart\
\" : {},\"messages\" : {}}}" ), json := true, source := "gap" )
gap> TexTypesetting(canvas);
false
gap> SetTexTypesetting(canvas, true);
gap> TexTypesetting(canvas);
true
gap> DrawSplash(canvas);
"<!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset=\"utf-8\" co\
ntent=\"text/html\" property=\"GAP,francy,d3.v4\"></meta>\n        <link rel=\
\"stylesheet\" type=\"text/css\" href=\"https://cdn.rawgit.com/mcmartins/franc\
y/develop/js/extensions/browser/index.css\"></link>\n        <script src=\"htt\
ps://d3js.org/d3.v4.js\"></script>\n        <script src=\"https://cdn.rawgit.c\
om/mcmartins/francy/develop/js/extensions/browser/francy.bundle.js\"></script>\
\n        <title>Francy</title>\n      </head>\n      <body>\n        <div id=\
\"francy\"></div>\n        <script>\n          var francy = new Francy({verbos\
e: true, appendTo: 'body', callbackHandler: console.log});\n          francy.l\
oad({\"mime\" : \"application\\/vnd.francy+json\",\"version\" : \"0.6.0\",\"ca\
nvas\" : {\"width\" : 400,\"height\" : 400,\"id\" : \"F14\",\"title\" : \"Quat\
ernion Group Subgroup Lattice\",\"zoomToFit\" : false,\"texTypesetting\" : tru\
e,\"menus\" : {},\"graph\" : {},\"chart\" : {},\"messages\" : {}}}).render();\
\n        </script>\n      </body>\n    </html>"
gap> PrintObj(canvas);
rec(
  chart := rec(
       ),
  graph := rec(
       ),
  height := 400,
  id := "F14",
  menus := rec(
       ),
  messages := rec(
       ),
  texTypesetting := true,
  title := "Quaternion Group Subgroup Lattice",
  width := 400,
  zoomToFit := false )