#############################################################################
##
#W  meataxe.gd                 	XGAP library                  Max Neunhoeffer
##
##
#Y  Copyright 1998,       Max Neunhoeffer,              Aachen,       Germany
##
##  This file contains declarations for meataxe posets
##

## a new filter:

DeclareFilter("IsMeatAxeLattice");

#############################################################################
##
##  Constructors:
##
#############################################################################

#############################################################################
##
#O  GraphicMeatAxeLattice(<name>, <width>, <height>)  . creates graphic poset
##
##  creates a new graphic meataxe lattice which is a specialization of a
##  graphic poset. Those posets have a new filter for method selection.
##
if IsBound(GraphicMeatAxeLattice) then if not IsOperation(GraphicMeatAxeLattice) then
  Error("Identifier GraphicMeatAxeLattice already in use!"); fi;
else
  DeclareOperation("GraphicMeatAxeLattice",[IsString, IsInt, IsInt]);
fi;


