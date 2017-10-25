#############################################################################
##
#W  menu.gd                    FRANCY library                  Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
## Categories
##

#############################################################################
##
#C  IsMenu( <obj> ) . . . . . . . . . . . category of menus
##
DeclareCategory("IsMenu", IsFrancyObject);


#############################################################################
##
## Families
##

#############################################################################
##
#V  MenuFamily
##
BindGlobal("MenuFamily", NewFamily("MenuFamily", IsMenu));


#############################################################################
##
## Representations
##

#############################################################################
##
#R  IsMenuRep  . . . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation("IsMenuRep",
  IsComponentObjectRep and IsAttributeStoringRep, ["model"], IsMenu);


#############################################################################
##
## Operations
##

#############################################################################
##
#O  Menu( <title>, <object> )
##
##
DeclareOperation("Menu", [IsString, IsCallbackFunction]);

#############################################################################
##
#O  Callback( <function> )
##
##
DeclareOperation("Callback", [IsCanvas, IsInt, IsList]);
