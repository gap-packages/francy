#############################################################################
##
#W  shape.gd                   FRANCY library                  Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
## Categories
##

#############################################################################
##
#C  IsShape( <obj> ) . . . . . . . . . . . category of shapes
##
DeclareCategory("IsShape", IsFrancyObject);

#############################################################################
##
#C  IsShapeType( <obj> ) . . . . . . . . . . . category of shapes
##
DeclareCategory("IsShapeType", IsFrancyObject);

#############################################################################
##
#C  IsShapeDefaults( <obj> ) . . . . . . . . . . . category of shape defgaults
##
DeclareCategory("IsShapeDefaults", IsFrancyDefaults);


#############################################################################
##
## Families
##

#############################################################################
##
#V  ShapeFamily
##
BindGlobal("ShapeFamily", NewFamily("ShapeFamily", IsShape));


#############################################################################
##
## Representations
##

#############################################################################
##
#R  IsShapeRep  . . . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation("IsShapeRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["id", "type", "title", "options"], IsShape);

#############################################################################
##
#R  IsShapeDefaultsRep  . . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsShapeDefaultsRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["layer", "x", "y", "size", "highlight"], IsShapeDefaults);

#############################################################################
##
#R  IsShapeTypeRep  . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation("IsShapeTypeRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["value"], IsShapeType);


#############################################################################
##
## Operations
##

#############################################################################
##
#O  GraphicObject( <category representation>, <canvas>, <defaults> )
#O  GraphicObject( <category representation>, <canvas> )
##
## Every object to draw will be a subclass of this object. This will allow
## all the objects to contain the same base information.
##
DeclareOperation("Shape", [IsShapeType, IsString, IsShapeDefaults]);
