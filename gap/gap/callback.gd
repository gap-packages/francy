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
#C  IsCallbackRequiredArg( <obj> ) . . . . . . . category of callbacks args
##
DeclareCategory( "IsCallbackRequiredArg", IsFrancyObject );

#############################################################################
##
#O  IsArgType( <obj> )
##
DeclareCategory("IsArgType", IsFrancyObject);

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
  ["id", "type", "func", "knownArgs", "requiredArgs"], IsCallback);

#############################################################################
##
#R  IsCallbackRequiredArgRep  . . . . . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsCallbackRequiredArgRep",
  IsComponentObjectRep and IsAttributeStoringRep, ["model"], IsCallbackRequiredArg);

#############################################################################
##
#R  IsCallbackRequiredArgTypeRep  . . . . . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsArgTypeRep",
  IsComponentObjectRep and IsAttributeStoringRep, ["value"], IsArgType);

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
#O  Callback( <trigger type>, <function>, <args> )
##
## Creates a Callback objec that holds the function and args to be executed 
## remotly by a trigger based on a trigger type.
##
DeclareOperation("Callback", [IsTriggerType, IsFunction, IsList]);

#############################################################################
##
#O  CallbackRequiredArgs( <calbback args type>, <title> )
##
## Creates a Callback 
##
DeclareOperation("CallbackRequiredArg", [IsArgType, IsString]);

#############################################################################
##
#O  Trigger( <json> )
##
## TODO
##
DeclareOperation("Trigger", [IsString]);