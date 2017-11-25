#############################################################################
##
#W  francy.gd                   FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
## Globals
##

#############################################################################
##
#V FrancyMIMEType . . . Contains the MIME Type defined for francy application
##
BindGlobal("FrancyMIMEType", "application/vnd.francy+json");

#############################################################################
##
## Categories
##

#############################################################################
##
#C  IsGraphicObject( <obj> ) . . . . . . . . . . category of graphic objects
##
##  This is the category in which all graphic objects are.
##
DeclareCategory("IsFrancyObject", IsObject);

#############################################################################
##
#C  IsFrancyDefaults( <obj> ) . . . . . . . . . . . category of defaults record
##
DeclareCategory("IsFrancyDefaults", IsFrancyObject);

#############################################################################
##
#C  IsFrancyType( <obj> ) . . . . . . . . . . . category of types
##
DeclareCategory("IsFrancyType", IsFrancyObject);

#############################################################################
##
#C  IsFrancy( <obj> ) . . . . . . . . . . . category of types
##
DeclareCategory("IsFrancy", IsFrancyObject);


#############################################################################
##
## Families
##

#############################################################################
##
#V  CanvasFamily  . . . . . . . . . . . . . . .  family of all canvas
##
BindGlobal("FrancyFamily", NewFamily("FrancyFamily", IsFrancyObject));


#############################################################################
##
## Representations
##

#############################################################################
##
#R  IsFrancyTypeRep . . . . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsFrancyTypeRep", 
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["value"], IsFrancyType);

#############################################################################
##
#R  IsFrancyRep . . . . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsFrancyRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["agent"], IsFrancyObject);


#############################################################################
##
## Operations
##

