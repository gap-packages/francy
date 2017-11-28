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
#C  IsRequiredArg( <obj> ) . . . . . . . category of callbacks args
##
DeclareCategory( "IsRequiredArg", IsFrancyObject );

#############################################################################
##
#O  IsArgType( <obj> )
##
DeclareCategory("IsArgType", IsFrancyObject);

#############################################################################
##
#O  IsTrigger( <obj> )
##
DeclareCategory("IsTrigger", IsFrancyObject);

#############################################################################
##
#O  IsTriggerEvent( <obj> )
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
BindGlobal("CallbackFamily", NewFamily("CallbackFamily", IsCallback));

#############################################################################
##
#V  TriggerFamily
##
BindGlobal("TriggerFamily", NewFamily("TriggerFamily", IsTrigger));


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
#R  IsRequiredArgRep  . . . . . . . . .. . . . default representation
##
DeclareRepresentation("IsRequiredArgRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["id", "type", "title", "value"], IsRequiredArg);

#############################################################################
##
#R  IsArgTypeRep  . . . . . . . . . .  default representation
##
DeclareRepresentation("IsArgTypeRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["value"], IsArgType);

#############################################################################
##
#R  IsTriggerEventRep  . . . . . . . . . . . . . . . . . . default representation
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
#O  Callback( <callback type>, <trigger event>, <function>, <args> )
##
## Creates a Callback object that holds a function and args to be executed 
##  by a trigger based on a trigger type.
##
DeclareOperation("Callback", [IsTriggerEvent, IsFunction, IsList]);

#############################################################################
##
#O  NoopCallback( )
##
## Creates an empty Callback object that does nothing.
## Useful, for instance, to creat menu holders.
##
DeclareOperation("NoopCallback", []);

#############################################################################
##
#O  CallbackRequiredArgs( <calbback args type>, <title> )
##
## Creates a Callback Require Argument
##
DeclareOperation("RequiredArg", [IsArgType, IsString]);

#############################################################################
##
#O  Add( <callback>, <arg> )
#O  Add( <callback>, <list of args> )
##
## Add required args to a specific callback.
## Required Args, are user input driven and required for the execution of a callback
##
DeclareOperation("Add", [IsCallback, IsRequiredArg]);

#############################################################################
##
#O  Remove( <callback>, <arg> )
#O  Remove( <callback>, <list of args> )
##
## Remove required args to a specific callback.
##
DeclareOperation("Remove", [IsCallback, IsRequiredArg]);

#############################################################################
##
#O  Trigger( <json> )
##
## Triggers a callback function in GAP.
## Gets a JSON String object representation of the callback to execute.
##
DeclareOperation("Trigger", [IsString]);
