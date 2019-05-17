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
gap> DrawSplash(canvas);
"<!DOCTYPE html>\n    <html>\n      <head>\n        <meta charset=\"utf-8\" co\
ntent=\"text/html\" property=\"GAP,francy,d3.v5\"></meta>\n        <link rel=\
\"stylesheet\" type=\"text/css\" href=\"https://cdn.rawgit.com/mcmartins/franc\
y/develop/js/extensions/browser/index.css\"></link>\n        <script src=\"htt\
ps://d3js.org/d3.v5.js\"></script>\n        <script src=\"https://cdn.rawgit.c\
om/mcmartins/francy/master/js/extensions/browser/francy.bundle.js\"></script>\
\n        <title>Francy</title>\n      </head>\n      <body>\n        <div id=\
\"francy\"></div>\n        <script>\n          var francy = new Francy({verbos\
e: true, appendTo: 'body', callbackHandler: console.log});\n          francy.l\
oad({\"version\" : \"1.2.4\",\"mime\" : \"application\\/vnd.francy+json\",\"ca\
nvas\" : {\"width\" : 400,\"id\" : \"F16\",\"height\" : 400,\"title\" : \"Quat\
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
  id := "F16",
  menus := rec(
       ),
  messages := rec(
       ),
  texTypesetting := true,
  title := "Quaternion Group Subgroup Lattice",
  width := 400,
  zoomToFit := false )