#############################################################################
##
#W  init.g                      FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2016 Manuel Martins
##

#############################################################################
##
#M  Draw( <canvas> ) . . . . . . . . . . . . . . . . . . . . . . . draw a canvas
##
InstallMethod( Draw,
    "generate json to draw a canvas and all its graphic objects",
    true,
    [ IsObject ],
    0,

function( canvas )
	local obj, tmpCanvas, tmpObj;

	if not IsGraphicCanvas(canvas!.type) then
	    Error("Object is not of type GraphicCanvas!");
	fi;

	if canvas!.drawn then
        canvas!.potentialAction := rec ( @type := "schema:UpdateAction" );
	else
		canvas!.potentialAction := rec ( @type := "schema:AddAction" );
    fi;

    canvas!.drawn := true;

    # this will remove all unsupported objects from dictionary
    # in order to allow json package to produce the json representation
    tmpCanvas:=ShallowCopy( canvas );
    Unbind(tmpCanvas!.type);
    for tmpObj in tmpCanvas!.object do
	    Unbind(tmpObj!.type);
	    Unbind(tmpObj!.canvas!.type);
	    Unbind(tmpObj!.canvas!.object);
	od;

    obj            := rec();
    obj!.@context  := rec( svg:="http://www.w3.org/2000/svg", schema:="http://schema.org" );
    obj!.@type     := "schema:DrawAction";
	obj!.object    := tmpCanvas;

	# FIXME at the moment the json is printed in the repl, this should go in a dedicated I/O channel
    Print(GapToJsonString(obj));

end );


#############################################################################
##
#M  AddToCanvas( <canvas>, <object> ) . . . . . . add graphic object to a canvas
##
InstallMethod( AddToCanvas,
    "add graphic object to canvas",
    true,
    [ IsRecord,
	  IsRecord ],
    0,

function( canvas, gObj )

	if not IsGraphicCanvas(canvas!.type) then
	    Error("Canvas is not of type GraphicCanvas");
	fi;
	if not IsGraphicObject(gObj!.type) then
        Error("Object is not of type IsGraphicObject");
    fi;

	gObj!.canvas := canvas;
	Append( canvas!.object, [ gObj ] );

    return canvas;

end );

#############################################################################
##
#M  RemoveFromCanvas( <canvas>, <object> ) . remove graphic object from a canvas
##
InstallMethod( RemoveFromCanvas,
    "remove graphic object from canvas",
    true,
    [ IsRecord,
	  IsRecord ],
    0,

function( canvas, gObj )

	if not IsGraphicCanvas(canvas!.type) then
	    Error("Canvas is not of type GraphicCanvas");
	fi;
	if not IsGraphicObject(gObj!.type) then
        Error("Object is not of type IsGraphicObject");
    fi;

	gObj!.canvas := "";
	Remove( canvas!.object, Position( canvas!.object, [ gObj ] ) );

    return canvas;

end );
