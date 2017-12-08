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
#! Generates the JSON representation of the canvas and children objects
#! @Arguments IsCanvas
#! @Returns <C>rec</C> with json representation of the canvas
DeclareOperation("Draw", [IsCanvas]);

#! @Description
#! Generates the an HTML page and opens it within the default browser of the system
#! @Arguments IsCanvas
#! @Returns <C>rec</C> with html generated
DeclareOperation("DrawSplash", [IsCanvas]);


#############################################################################
##
#! @Section Global
#! In this section we show the Global Francy Canvas Records for multi purpose.

#! @Description
#! This <C>rec</C> holds all the default setting for a canvas
BindGlobal("CanvasDefaults", Objectify(NewType(CanvasFamily, IsCanvasDefaults and IsCanvasDefaultsRep), rec(
  width     := "800",
  height    := "600",
  zoomToFit := true
)));
