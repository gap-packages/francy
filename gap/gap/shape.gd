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
DeclareCategory( "IsShape", IsFrancyObject );

#############################################################################
##
#C  IsShapeType( <obj> ) . . . . . . . . . . . category of shapes
##
DeclareCategory( "IsShapeType", IsFrancyObject );

#############################################################################
##
#C  IsShapeDefaults( <obj> ) . . . . . . . . . . . category of shape defgaults
##
DeclareCategory( "IsShapeDefaults", IsFrancyDefaults );

#############################################################################
##
#C  IsLink( <obj> ) . . . . . . . . . . . category of links
##
DeclareCategory( "IsLink", IsFrancyObject );


#############################################################################
## Families
#############################################################################


#############################################################################
##
#V  ShapeFamily
##
BindGlobal( "ShapeFamily", NewFamily( "ShapeFamily", IsShape ) );

#############################################################################
##
#V  LinkFamily  . . . . . . . . . . . . . . .  family of all links
##
BindGlobal( "LinkFamily", NewFamily( "LinkFamily", IsLink ) );


#############################################################################
## Representations
#############################################################################


#############################################################################
##
#R  IsShapeRep  . . . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation( "IsShapeRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  [ "model" ], IsShape );

#############################################################################
##
#R  IsShapeDefaultsRep  . . . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation( "IsShapeDefaultsRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  [ "layer", "x", "y", "size", "highlight" ], IsShapeDefaults );

#############################################################################
##
#R  IsShapeTypeRep  . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation( "IsShapeTypeRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  [ "value" ], IsShapeType );


#############################################################################
##
#R  IsLinkRep  . . . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation( "IsLinkRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  [ "id", "source", "target" ], IsLink );


#############################################################################
## Operations
#############################################################################


#############################################################################
##
#O  GraphicObject( <category representation>, <canvas>, <defaults> )
##
## Every object to draw will be a subclass of this object. This will allow
## all the objects to contain the same base information.
##
DeclareOperation( "Shape", [ IsShapeType, IsString, IsShapeDefaults ] );

#############################################################################
##
#O  Link( <object>, <object> )
#O  Link( [<object>], [<object>] )
##
## Creates a link between the objects. This allows to produce graphics that
## represent connected objects.
##
DeclareOperation( "Link", [ IsShape, IsShape ] );
