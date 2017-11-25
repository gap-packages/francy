#############################################################################
##
#W  canvas.gd                   FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
## Categories
##

#############################################################################
##
#C  IsCanvas( <obj> ) . . . . . . . . . . . category of graphic canvas
##
DeclareCategory("IsCanvas", IsFrancyObject);

#############################################################################
##
#C  IsCanvasDefaults( <obj> ) . . . . . . . . . . . category of canvas defaults
##
DeclareCategory("IsCanvasDefaults", IsFrancyDefaults);


#############################################################################
##
## Families
##

#############################################################################
##
#V  CanvasFamily  . . . . . . . . . . . . . . .  family of all canvas
##
BindGlobal("CanvasFamily", NewFamily("CanvasFamily", IsCanvas));


#############################################################################
##
## Representations
##

#############################################################################
##
#R  IsCanvasRep . . . . . . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsCanvasRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["id", "title", "options"], IsCanvas);

#############################################################################
##
#R  IsCanvasDefaultsRep . . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsCanvasDefaultsRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["width", "height"], IsCanvasDefaults);


#############################################################################
##
## Operations
##

#############################################################################
##
#O  Canvas( <title>, <defaults> )
#O  Canvas( <title> )
##
## Canvas represents a base element to draw graphics on. Inspired by
## the HTML <canvas> element which is used to draw graphics, in runtime,
## via JavaScript.
##
DeclareOperation("Canvas", [IsString, IsCanvasDefaults]);

#############################################################################
##
#O  Add( <canvas>, <francy object> )
#O  Add( <canvas>, <list of francy object> )
##
DeclareOperation("Add", [IsCanvas, IsFrancyObject]);

#############################################################################
##
#O  Remove( <canvas>, <francy object> )
#O  Remove( <canvas>, <list of francy object> )
##
DeclareOperation("Remove", [IsCanvas, IsFrancyObject]);

#############################################################################
##
#O  Draw( <canvas> )
##
## Generates the json representation of the canvas and children objects
##
DeclareOperation("Draw", [IsCanvas]);