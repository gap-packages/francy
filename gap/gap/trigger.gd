#############################################################################
##
#W  callback.gd                 FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
## Globals
##


#############################################################################
##
## Categories
##

#############################################################################
##
#O  IsTrigger( <obj> )
##
DeclareCategory("IsTrigger", IsFrancyObject);

#############################################################################
##
#O  IsTriggerType( <obj> )
##
DeclareCategory("IsTriggerEvent", IsFrancyObject);

#############################################################################
##
## Families
##

#############################################################################
##
#V  CallbackFamily
##
BindGlobal("TriggerFamily", NewFamily("TriggerFamily", IsTrigger));


#############################################################################
##
## Representations
##

#############################################################################
##
#R  IsTriggerRep  . . . . . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsTriggerEventRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["value"], IsTriggerEvent);


#############################################################################
##
## Operations
##

#############################################################################
##
#O  Trigger( <json> )
##
## TODO
##
DeclareOperation("Trigger", [IsString]);
