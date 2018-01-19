#############################################################################
##
#W  canvas.gd                   FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##
#! @Chapter Francy Canvas
#! A <C>Canvas</C> is an area where the graphics representation of Francy live.
#! <P/>
#! Please see Francy-JS for client implementation.


#############################################################################
##
#! @Section Categories
#! In this section we show the Francy Canvas Categories.

#! @Description
#! Identifies <C>Canvas</C> objects.
DeclareCategory("IsCanvas", IsFrancyObject);

#! @Description
#! Identifies <C>CanvasDefaults</C> objects.
DeclareCategory("IsCanvasDefaults", IsFrancyDefaults);


#############################################################################
##
#! @Section Families
#! In this section we show the Francy Canvas Families.

#! @Description
#! This Family identifies all <C>Canvas</C> objects
#! @Returns <C>CanvasFamily</C>
BindGlobal("CanvasFamily", NewFamily("CanvasFamily", IsCanvas));


#############################################################################
##
#! @Section Representations
#! In this section we show the Francy Canvas Representations.

#! @Description
#! Checks whether an <C>Object</C> has a <C>Canvas</C> internal representation.
DeclareRepresentation("IsCanvasRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["id", "title", "options", "width", "height", "zoomToFit"], IsCanvas);

#! @Description
#! Checks whether an <C>Object</C> has a <C>CanvasDefaults</C> internal representation.
DeclareRepresentation("IsCanvasDefaultsRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["width", "height", "zoomToFit"], IsCanvasDefaults);


#############################################################################
##
#! @Section Operations
#! In this section we show the Francy Canvas Operations.

#! @Description
#! Canvas represents a base element to draw graphics on. Inspired by
#! the HTML canvas tag element which is used to draw graphics, in runtime,
#! via JavaScript.
#! Examples:
#! <P/>
#! Create a simple <C>Canvas</C>:
#! @InsertChunk Example_Create_Canvas_1
#! <P/>
#! @Arguments IsString(title)[, IsCanvasDefaults]
#! @Returns <C>Callback</C>
DeclareOperation("Canvas", [IsString, IsCanvasDefaults]);

#! @Description
#! Add <C>FrancyObject</C> to a specific <C>Canvas</C>.
#! @Arguments IsCanvas, [IsFrancyObject, List(IsFrancyObject)]
#! @Returns <C>Canvas</C>
DeclareOperation("Add", [IsCanvas, IsFrancyObject]);

#! @Description
#! Remove <C>FrancyObject</C> from a <C>Canvas</C>.
#! @Arguments IsCanvas, [IsFrancyObject, List(IsFrancyObject)]
#! @Returns <C>Canvas</C>
DeclareOperation("Remove", [IsCanvas, IsFrancyObject]);

#! @Description
#! Add <C>Callback</C> to a specific <C>Shape</C>.
#! @Arguments IsCanvas, [IsHintMessage, List(IsHintMessage)]
#! @Returns <C>Shape</C>
DeclareOperation("Add", [IsCanvas, IsHintMessage]);

#! @Description
#! Remove <C>Callback</C> from a specific <C>Shape</C>.
#! @Arguments IsCanvas, [IsHintMessage, List(IsHintMessage)]
#! @Returns <C>Shape</C>
DeclareOperation("Remove", [IsCanvas, IsHintMessage]);

#! @Description
#! Generates the JSON representation of the canvas and children objects
#! @Arguments IsCanvas
#! @Returns <C>rec</C> with json representation of the canvas
DeclareOperation("Draw", [IsCanvas]);

#! @Description
#! Generates the an HTML page and opens it within the default browser of the system
#! @Arguments IsCanvas
#! @Returns <C>rec</C> with html generated
DeclareOperation("DrawSplash", [IsCanvas]);

# You could use Attributes to store data for a canvas:
# (inc)
DeclareAttribute("Width", IsCanvas);
DeclareAttribute("Height", IsCanvas);
DeclareAttribute("ZoomToFit", IsCanvas);

# Probably in canvas.gi you now do
InstallMethod( Width, "for a canvas", [IsCanvas], c -> c!.width );
InstallMethod( SetWidth, "for a canvas, and a posing"
             , [IsCanvas, IsPosInt]
             , function(c, w) c!.width := w; end );

# This is a bit verbose, but allows you to type- and sanity check what people
# set attributes to.

# Alternatively, you can use IsAttributeStoringRep, but declare the attributes mutable:
DeclareAttribute("Width", IsCanvas, "mutable");
DeclareAttribute("Height", IsCanvas, "mutable");
DeclareAttribute("ZoomToFit", IsCanvas, "mutale");

# GAP then creates SetWidth and Width "accessors" (but note this will not go
# into your rec() in the object!)
# also, no type checking (or other code) this way.

#############################################################################
##
#! @Section Global
#! In this section we show the Global Francy Canvas Records for multi purpose.

#! @Description
#! This <C>rec</C> holds all the default setting for a canvas
BindGlobal("CanvasDefaults", Objectify(NewType(CanvasFamily, IsCanvasDefaults and IsCanvasDefaultsRep), rec(
# I find it weird to store widths/heights as strings...
  width     := "800",
  height    := "600",
  zoomToFit := true
)));
