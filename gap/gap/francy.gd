#############################################################################
##
#W  francy.gd                   FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##
##

#############################################################################
##
#V FrancySequentialID . . . . . . . . . . . . . Holds the latest generated ID
##
BindGlobal( "FrancySequentialID", 0 );
MakeReadWriteGlobal( "FrancySequentialID" );


#############################################################################
## Categories
#############################################################################


#############################################################################
##
#C  IsGraphicObject( <obj> ) . . . . . . . . . . category of graphic objects
##
##  This is the category in which all graphic objects are.
##
DeclareCategory( "IsFrancyObject", IsObject );

#############################################################################
##
#C  IsFrancyDefaults( <obj> ) . . . . . . . . . . . category of defaults record
##
DeclareCategory( "IsFrancyDefaults", IsFrancyObject );

#############################################################################
##
#C  IsFrancyType( <obj> ) . . . . . . . . . . . category of types
##
DeclareCategory( "IsFrancyType", IsFrancyObject );

#############################################################################
##
#O  IsCallback( <title> )
##
DeclareCategory( "IsCallback", IsFrancyObject );

#############################################################################
##
#O  IsCallbackFunction( <title> )
##
DeclareCategory( "IsCallbackFunction", IsFunction );

#############################################################################
##
#O  IsCallbackTrigger( <title> )
##
DeclareCategory( "IsCallbackTrigger", IsCallback );


#############################################################################
## Families
#############################################################################


#############################################################################
##
#V  ShapeFamily
##
BindGlobal( "CallbackFamily", NewFamily( "CallbackFamily", IsCallback ) );


#############################################################################
## Representations
#############################################################################


#############################################################################
##
#R  IsFrancyTypeRep . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation( "IsFrancyTypeRep",
    IsComponentObjectRep and IsAttributeStoringRep,
    [ "NORMAL", "FORCE", "HASSE", "PLOT" ], IsFrancyType );

#############################################################################
##
#R  IsCallbackRep  . . . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation( "IsCallbackRep",
    IsComponentObjectRep and IsAttributeStoringRep,
    [ "model" ], IsCallback );

#############################################################################
##
#R  IsCallbackRep  . . . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation( "IsCallbackTriggerRep",
    IsComponentObjectRep and IsAttributeStoringRep,
    [ "model" ], IsCallback );

#############################################################################
##
#R  IsCallbackFunctionRep  . . . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation( "IsCallbackFunctionRep",
    IsComponentObjectRep and IsAttributeStoringRep,
    [ "model" ], IsCallbackFunction );

#############################################################################
## Operations
#############################################################################


#############################################################################
##
#O  Clone . . . . . . . . . clones IsFrancyObjects using their representation
##
DeclareOperation( "Clone", [ IsFrancyObject ] );

#############################################################################
##
#O  Callback( <function> )
##
##
DeclareOperation( "CallbackFunction", [ IsFunction ] );
