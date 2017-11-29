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
#! @Chapter Francy Core
#! @Section Global Types
#! In this section we show the core Francy types
#! @Description
#! Specifies the content-type mime of this package. 
#! A MIME type stands for "Multipurpose Internet Mail Extensions" and it's a standard to identify a document.
#! @Returns application/vnd.francy+json
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
#! @Chapter Francy Core
#! @Section Global Families
#! In this section we show the core Francy Families for multi purpose.
#! @Description
#! This Family identifies all objects of this package 
#! @Returns <C>FrancyFamily<C> of 
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

