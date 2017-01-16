#############################################################################
##
#W  init.g                      FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2016 Manuel Martins
##

#############################################################################
##
#M  Draw( <canvas> ) . . . . . . . . . . . . . . . . . . . . . . draw a canvas
##
InstallMethod( Draw,
    "generate json to draw a canvas and all its graphic objects",
    true,
    [ IsObject ],
    0,

function( canvas )
	local obj, tmpCanvas, tmpObj;

	if not IsGraphicCanvas(canvas!.@type) then
	    Error("Object is not of type GraphicCanvas!");
	fi;

    canvas!.options!.drawn := false;

	# copy the original object
    # this will remove all unsupported objects from dictionary
    # in order to allow json package to produce the json representation
    tmpCanvas:=ShallowCopy( canvas );
    Unbind( tmpCanvas!.@type );
    tmpCanvas!.objects := [];
    for tmpObj in canvas!.objects do
        tmpObj!.options!.drawn := false;
        tmpObj := ShallowCopy( tmpObj );
        Unbind( tmpObj!.@type );
        Append( tmpCanvas!.objects, [ tmpObj ] );
	od;

    obj             := rec();
    obj!.type       := "DrawAction";
    obj!.agent      := "Francy";
	obj!.object     := tmpCanvas;

	# FIXME at the moment the json is printed in the repl, this should go in a dedicated I/O channel
    Print(GapToJsonString(obj));

end );
