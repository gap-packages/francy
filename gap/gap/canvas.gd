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
#C  IsCanvasType( <obj> ) . . . . . . . . . . . category of shapes
##
DeclareCategory("IsCanvasType", IsFrancyObject);

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
  IsComponentObjectRep and IsAttributeStoringRep, ["model"], IsCanvas);

#############################################################################
##
#R  IsCanvasDefaultsRep . . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsCanvasDefaultsRep",
  IsComponentObjectRep and IsAttributeStoringRep, ["w", "h"], IsCanvasDefaults);

#############################################################################
##
#R  IsCanvasType . . . . . . . . . . . . . . . .  . . default representation
##
DeclareRepresentation("IsCanvasTypeRep",
  IsComponentObjectRep and IsAttributeStoringRep, ["value"], IsCanvasType);


#############################################################################
##
## Operations
##

#############################################################################
##
#O  Canvas( <canvas type>, <title>, <defaults> )
#O  Canvas( <canvas type>, <title> )
##
## GraphicCanvas represents a base element to draw graphics on. Inspired by
## the HTML <canvas> element which is used to draw graphics, in runtime,
## via JavaScript.
##
DeclareOperation("Canvas", [IsCanvasType, IsString, IsCanvasDefaults]);
