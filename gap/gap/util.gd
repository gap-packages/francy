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
## Categories
##


#############################################################################
##
## Families
##


#############################################################################
##
## Representations
##


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
