#
# francy: Interactive Discrete Mathematics in GAP
#

#############################################################################
##
#M  Canvas( <title>, <options> )
##
## A new graphic canvas.
##
InstallMethod(Canvas,
  "a title string, a default configurations record",
  true,
  [IsString,
   IsCanvasDefaults],
  0,
function(title, options)
  return MergeObjects(Objectify(CanvasObjectType, rec(
    id       := GenerateID(),
    menus    := rec(),
    graph    := rec(),
    chart    := rec(),
    messages := rec(),
    title    := title
  )), options);
end);

InstallOtherMethod(Canvas,
  "a title string",
  true,
  [IsString],
  0,
function(title)
  return Canvas(title, CanvasDefaults);
end);

#############################################################################
##
#M  Add( <canvas>, <francy object> )
##
## Add objects to canvas.
##
InstallOtherMethod(Add,
  "a canvas, a graph",
  true,
  [IsCanvas,
   IsFrancyGraph],
  0,
function(canvas, graph)
  canvas!.graph := graph;
  # unbind the chart, only graph should exist!
  Unbind(canvas!.chart);
  return canvas;
end);

InstallOtherMethod(Add,
  "a canvas, a chart",
  true,
  [IsCanvas,
   IsChart],
  0,
function(canvas, chart)
  canvas!.chart := chart;
  # unbind the graph, only chart should exist!
  Unbind(canvas!.graph);
  return canvas;
end);

InstallOtherMethod(Add,
  "a canvas, a menu",
  true,
  [IsCanvas,
   IsMenu],
  0,
function(canvas, menu)
  canvas!.menus!.(menu!.id) := menu;
  return canvas;
end);

InstallOtherMethod(Add,
  "a canvas, a message",
  true,
  [IsCanvas,
   IsFrancyMessage],
  0,
function(canvas, message)
  Add(message, Callback(Remove, [canvas, message]));
  canvas!.messages!.(message!.id) := message;
  return canvas;
end);

InstallOtherMethod(Add,
  "a canvas, a renderer",
  true,
  [IsCanvas,
   IsFrancyRenderer],
  0,
function(canvas, renderer)
  canvas!.renderer := renderer!.value;
  return canvas;
end);

InstallOtherMethod(Add,
  "a canvas, a list of francy objects",
  true,
  [IsCanvas,
   IsList],
  0,
function(canvas, objects)
  local object;
  for object in objects do
    Add(canvas, object);
  od;
  return canvas;
end);

#############################################################################
##
#M  Remove( <canvas>, <francy object> )
##
## Remove object from canvas.
##
InstallOtherMethod(Remove,
  "a canvas, a graph",
  true,
  [IsCanvas,
   IsFrancyGraph],
  0,
function(canvas, graph)
  Unbind(canvas!.graph);
  canvas!.graph := rec();
  canvas!.chart := rec();
  return canvas;
end);

InstallOtherMethod(Remove,
  "a canvas, a chart",
  true,
  [IsCanvas,
   IsChart],
  0,
function(canvas, chart)
  Unbind(canvas!.chart);
  canvas!.graph := rec();
  canvas!.chart := rec();
  return canvas;
end);

InstallOtherMethod(Remove,
  "a canvas, a menu",
  true,
  [IsCanvas,
   IsMenu],
  0,
function(canvas, menu)
  Unbind(canvas!.menus!.(menu!.id));
  return canvas;
end);

InstallOtherMethod(Remove,
  "a canvas, a message",
  true,
  [IsCanvas,
   IsFrancyMessage],
  0,
function(canvas, message)
  Unbind(canvas!.messages!.(message!.id));
  return canvas;
end);

InstallOtherMethod(Remove,
  "a canvas, a list of francy objects",
  true,
  [IsCanvas,
   IsList],
  0,
function(canvas, objects)
  local object;
  for object in objects do
    Remove(canvas, object);
  od;
  return canvas;
end);

#############################################################################
##
#M  Draw( )
##
## Prints to the output a JSON metadata model representation of the objects.
##
InstallMethod(Draw,
  "a canvas",
  true,
  [IsCanvas],
  0,
function(canvas)
  local object;
  object := rec();
  object!.mime    := FrancyMIMEType;
  object!.version := InstalledPackageVersion("francy");
  object!.canvas  := Sanitize(canvas);
  return Objectify(
    JupyterRenderableType, 
    rec(
      data := rec((FrancyMIMEType) := GapToJsonString(object)),
      metadata := rec((FrancyMIMEType) := rec())
    )
  );
end);

#############################################################################
##
#M  DrawSplash( )
##
## Creates an offline HTML page with the GUI representation of the objects.
##
InstallMethod(DrawSplash,
  "a canvas",
  true,
  [IsCanvas],
  0,
function(canvas)
    local name, result, page;

    name := Filename(DirectoryTemporary(), Concatenation("francy_", LowercaseString(ReplacedString(canvas!.title, " ", "_")) ,".html"));
    
    result := Draw(canvas);

    page := Concatenation(
    "<!DOCTYPE html>\n\
    <html>\n\
      <head>\n\
        <meta charset=\"utf-8\" content=\"text/html\" property=\"GAP,francy,d3.v7,vis,graphviz\"></meta>\n\
        <script src=\"https://unpkg.com/francy-extension-browser/dist/main.js\"></script>\n\
        <title>Francy</title>\n\
      </head>\n\
      <body>\n\
        <div id=\"francy\"></div>\n\
        <script>\n\
          var francy = new Francy({verbose: true, appendTo: '#francy', callbackHandler: console.log});\n\
          francy.RenderingManager.register(new D3Renderer());\n\
          francy.RenderingManager.register(new GraphvizRenderer());\n\
          francy.RenderingManager.register(new VisRenderer());\n\
          francy.load(", result!.data!.(FrancyMIMEType), ").render();\n\
        </script>\n\
      </body>\n\
    </html>");
    
    PrintTo(name, page);

    if ARCH_IS_UNIX() then
        Exec("xdg-open ", name);
    elif ARCH_IS_MAC_OS_X() then
        Exec("open ", name);
    elif ARCH_IS_WINDOWS() then
        Exec("start ", name);
    fi;

    return page;
end);
