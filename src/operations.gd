#############################################################################
##
#W  init.g                      FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2016 Manuel Martins
##

#############################################################################
##
#O  Draw( <canvas> )
##
##  This operation (re-)draws a graphic object on the screen.
##
DeclareOperation( "Draw", [ IsObject ] );

#############################################################################
##
#O  AddToCanvas( <canvas>, <obj> )
##
## This operation adds a reference to the object in the canvas and vice-versa
##
DeclareOperation( "AddToCanvas", [ IsRecord, IsRecord ] );

#############################################################################
##
#O  RemoveFromCanvas( <canvas>, <obj> )
##
## This operation removes a reference to the object in the canvas and vice-versa
##
DeclareOperation( "RemoveFromCanvas", [ IsRecord, IsRecord ] );
