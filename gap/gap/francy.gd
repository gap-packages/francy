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
BindGlobal("FrancyMIMEType", "application/francy+json");

#############################################################################
##
#V FrancyFunctionCallbacks . . . Contains the list of callbacks to be executed
##
BindGlobal("FrancyFunctionCallbacks", rec());

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
#O  IsCallback( <title> )
##
DeclareCategory("IsCallback", IsFrancyObject);

#############################################################################
##
#O  IsCallbackFunction( <title> )
##
DeclareCategory("IsCallbackFunction", IsFunction);

#############################################################################
##
#O  IsCallbackTrigger( <title> )
##
DeclareCategory("IsCallbackTrigger", IsCallback);


#############################################################################
##
## Families
##

#############################################################################
##
#V  ShapeFamily
##
BindGlobal("CallbackFamily", NewFamily("CallbackFamily", IsCallback));


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
  ["NORMAL", "FORCE", "HASSE", "PLOT"], IsFrancyType);

#############################################################################
##
#R  IsCallbackRep  . . . . . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsCallbackRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["model"], IsCallback);

#############################################################################
##
#R  IsCallbackRep  . . . . . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsCallbackTriggerRep",
  IsComponentObjectRep and IsAttributeStoringRep, ["model"], IsCallback);

#############################################################################
##
#R  IsCallbackFunctionRep  . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsCallbackFunctionRep",
  IsComponentObjectRep and IsAttributeStoringRep, ["model"], IsCallbackFunction);


#############################################################################
##
## Operations
##

#############################################################################
##
#O  Clone . . . . . . . . . clones IsFrancyObjects using their representation
##
DeclareOperation("Clone", [IsFrancyObject]);

#############################################################################
##
#O  Flat . . . . . . . . . clones IsFrancyObjects using their representation
##
DeclareOperation("Flat", [IsRecord]);

#############################################################################
##
#O  FlattenHelper . . . . clones IsFrancyObjects using their representation
##
DeclareOperation("FlattenHelper", [IsRecord, IsRecord]);

#############################################################################
##
#O  FlattenRecord . . . . . clones IsFrancyObjects using their representation
##
DeclareOperation("FlattenRecord", [IsRecord]);

#############################################################################
##
#O  CallbackFunction( <function> )
##
##
DeclareOperation("CallbackFunction", [IsFunction]);
