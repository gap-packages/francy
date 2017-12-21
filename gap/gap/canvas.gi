#############################################################################
##
#W  canvas.gi                   FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
#M  Canvas( <title>, <options> ) . . . . . a new graphic canvas
##
InstallMethod(Canvas,
  "a title string, a default configurations record",
  true,
  [IsString,
   IsCanvasDefaults],
  0,
function(title, options)
  return MergeObjects(Objectify(NewType(CanvasFamily, IsCanvas and IsCanvasRep), rec(
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
#M  Add( <canvas>, <francy object> ) . . . . . add objects to canvas
##
InstallMethod(Add,
  "a canvas, a shape",
  true,
  [IsCanvas,
   IsFrancyObject],
  0,
function(canvas, object)
  if IsFrancyGraph(object) then
    canvas!.graph := object;
    # unbind the chart, only graph should exist!
    Unbind(canvas!.chart);
  elif IsChart(object) then
    canvas!.chart := object;
    # unbind the graph, only chart should exist!
    Unbind(canvas!.graph);
  elif IsMenu(object) then
    canvas!.menus!.(object!.id) := object;
  fi;
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
#M  Remove( <canvas>, <francy object> ) . . . . . remove object from canvas
##
InstallMethod(Remove,
  "a canvas, a shape",
  true,
  [IsCanvas,
   IsFrancyObject],
  0,
function(canvas, object)
  local link;
  if IsFrancyGraph(object) then
    Unbind(canvas!.graph);
  elif IsChart(object) then
    Unbind(canvas!.chart);
  elif IsMenu(object) then
    Unbind(canvas!.menus!.(object!.id));
  fi;
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
#M  Add( <canvas>, <info> ) . . . . . add objects to canvas
##
InstallMethod(Add,
  "a canvas, a message",
  true,
  [IsCanvas,
   IsHintMessage],
  0,
function(canvas, message)
  canvas!.messages!.(message!.id) := message;
  return canvas;
end);

InstallOtherMethod(Add,
  "a canvas, a list of messages",
  true,
  [IsCanvas,
   IsList],
  0,
function(canvas, messages)
  local message;
  for message in messages do
    Add(canvas, message);
  od;
  return canvas;
end);

#############################################################################
##
#M  Remove( <canvas>, <info> ) . . . . . remove object from canvas
##
InstallMethod(Remove,
  "a canvas, a message",
  true,
  [IsCanvas,
   IsHintMessage],
  0,
function(canvas, message)
  Unbind(canvas!.messages!.(message!.id));
  return canvas;
end);

InstallOtherMethod(Remove,
  "a canvas, a list of messages",
  true,
  [IsCanvas,
   IsList],
  0,
function(canvas, messages)
  local message;
  for message in messages do
    Remove(canvas, message);
  od;
  return canvas;
end);

#############################################################################
##
#M  Draw( ) . . . . . 
##
InstallMethod(Draw,
  "",
  true,
  [IsCanvas],
  0,
function(canvas)
  local object;
  object := rec();
  object!.mime   := FrancyMIMEType;
  object!.version := InstalledPackageVersion("francy");
  object!.canvas  := Sanitize(canvas);
  return rec(
    json := true, 
    source := "gap", 
    data := rec((FrancyMIMEType) := GapToJsonString(object))
  );
end);

#############################################################################
##
#M  DrawSplash( ) . . . . . 
##
InstallMethod(DrawSplash,
  "",
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
        <meta charset=\"utf-8\" content=\"text/html\" property=\"GAP,francy,d3.v4\"></meta>\n\
        <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.rawgit.com/mcmartins/francy/develop/js/dist/francy/css/style.css\"></link>\n\
        <script src=\"https://cdn.rawgit.com/mcmartins/francy/develop/js/dist/francy/lib/d3.min.js\"></script>\n\
        <script src=\"https://cdn.rawgit.com/mcmartins/francy/develop/js/dist/francy/browser/francy.bundle.js\"></script>\n\
        <title>Francy</title>\n\
      </head>\n\
      <body>\n\
        <div id=\"francy\"></div>\n\
        <script>\n\
          var francy = new Francy({verbose: true, appendTo: 'body', callbackHandler: console.log});\n\
          francy.render(", result.data.(FrancyMIMEType), ");\n\
        </script>\n\
      </body>\n\
    </html>");
    
    PrintTo(name, page);

    if ARCH_IS_MAC_OS_X() then
        Exec("open ",name);
    fi;
    if ARCH_IS_WINDOWS() then
        Exec("start ",name);
    fi;
    if ARCH_IS_UNIX() then
        Exec("open ",name);
    fi;

    return page;
end);
