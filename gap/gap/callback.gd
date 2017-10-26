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
#V FrancyCallbacks . . . . . . Contains the record of callbacks to be executed
##
BindGlobal("FrancyCallbacks", rec());


#############################################################################
##
## Categories
##

#############################################################################
##
#O  IsCallback( <obj> )
##
DeclareCategory("IsCallback", IsFrancyObject);

#############################################################################
##
#C  IsCallbackDefaults( <obj> ) . . . . . . . category of callbacks defaults
##
DeclareCategory( "IsCallbackDefaults", IsFrancyDefaults );

#############################################################################
##
#O  IsTrigger( <obj> )
##
DeclareCategory("IsTriggerType", IsFrancyObject);


#############################################################################
##
## Families
##

#############################################################################
##
#V  CallbackFamily
##
BindGlobal("CallbackFamily", NewFamily("CallbackFamily", IsCallback));


#############################################################################
##
## Representations
##

#############################################################################
##
#R  IsCallbackRep  . . . . . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsCallbackRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["id", "triggerType", "func", "args", "options"], IsCallback);

#############################################################################
##
#R  IsCallbackRep  . . . . . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsCallbackDefaultsRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["model"], IsCallbackDefaults);

#############################################################################
##
#R  IsTriggerRep  . . . . . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsTriggerTypeRep",
  IsComponentObjectRep and IsAttributeStoringRep, ["value"], IsTriggerType);


#############################################################################
##
## Operations
##

#############################################################################
##
#O  Callback( <category representation>, <canvas>, <defaults> )
##
## Creates a Callback objec that holds the function and args to be executed 
## remotly by a trigger based on a trigger type.
##
DeclareOperation("Callback", [IsTriggerType, IsFunction, IsList, IsCallbackDefaults]);

#############################################################################
##
#O  Trigger( <json> )
##
## TODO
##
DeclareOperation("Trigger", [IsString]);