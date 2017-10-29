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
#C  IsLink( <obj> ) . . . . . . . . . . . category of links
##
DeclareCategory("IsLink", IsFrancyObject);


#############################################################################
##
## Families
##

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
