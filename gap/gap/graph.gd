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
#C  IsGraph( <obj> ) . . . . . . . . . . . category of shapes
##
DeclareCategory("IsGraph", IsFrancyObject);

#############################################################################
##
#C  IsGraphType( <obj> ) . . . . . . . . . . . category of shapes
##
DeclareCategory("IsGraphType", IsFrancyObject);

#############################################################################
##
#C  IsGraphDefaults( <obj> ) . . . . . . . . . . . category of shape defgaults
##
DeclareCategory("IsGraphDefaults", IsFrancyDefaults);

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
#C  IsLink( <obj> ) . . . . . . . . . . . category of links
##
DeclareCategory("IsLink", IsFrancyObject);


#############################################################################
##
## Families
##

#############################################################################
##
#V  ShapeFamily
##
BindGlobal("GraphFamily", NewFamily("GraphFamily", IsGraph));

#############################################################################
##
#V  ShapeFamily
##
BindGlobal("ShapeFamily", NewFamily("ShapeFamily", IsShape));

#############################################################################
##
#V  LinkFamily  . . . . . . . . . . . . . . .  family of all links
##
BindGlobal("LinkFamily", NewFamily("LinkFamily", IsLink));


#############################################################################
##
## Representations
##

#############################################################################
##
#R  IsShapeRep  . . . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation("IsGraphRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["id", "type", "title", "options"], IsGraph);

#############################################################################
##
#R  IsShapeDefaultsRep  . . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsGraphDefaultsRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["layer", "x", "y", "size", "highlight"], IsGraphDefaults);

#############################################################################
##
#R  IsShapeTypeRep  . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation("IsGraphTypeRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["value"], IsGraphType);

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
#R  IsLinkRep  . . . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation("IsLinkRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["id", "source", "target"], IsLink);


#############################################################################
##
## Operations
##

#############################################################################
##
#O  Graph( <graph type>, <defaults> )
#O  Graph( <graph type> )
##
## Every object to draw will be a subclass of this object. This will allow
## all the objects to contain the same base information.
##
DeclareOperation("Graph", [IsGraphType, IsGraphDefaults]);

#############################################################################
##
#O  Add( <graph>, <francy object> )
#O  Add( <graph>, <list of francy object> )
##
## 
##
DeclareOperation("Add", [IsGraph, IsFrancyObject]);

#############################################################################
##
#O  Remove( <graph>, <francy object> )
#O  Remove( <graph>, <list of francy object> )
##
## 
##
DeclareOperation("Remove", [IsGraph, IsFrancyObject]);

#############################################################################
##
#O  GraphicObject( <category representation>, <canvas>, <defaults> )
#O  GraphicObject( <category representation>, <canvas> )
##
## Every object to draw will be a subclass of this object. This will allow
## all the objects to contain the same base information.
##
DeclareOperation("Shape", [IsShapeType, IsString, IsCallback, IsShapeDefaults]);

#############################################################################
##
#O  Link( [<object>], [<object>] )
##
## Creates a link between the objects. This allow to produce graphics
## representing connected objects.
##
DeclareOperation("Link", [IsShape, IsShape]);

#############################################################################
##
#O  Links( [<object>], [<object>] )
##
## Creates a link between the objects. This allow to produce graphics
## representing connected objects.
##
DeclareOperation("Links", [IsList, IsList]);
