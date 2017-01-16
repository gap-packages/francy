#############################################################################
##
#W  init.g                      FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2016 Manuel Martins
##

#############################################################################
##
#M  GraphicCanvas( <title>, <width>, <height> ) . . . . .  a new graphic sheet
##
##  creates  a  graphic canvas with  title  <title> and dimension <width>  by
##  <height>.  A graphic canvas  is the basic  tool  to draw something,  it is
##  like a piece of  paper on which you can  put your graphic objects, and to
##  which you  can attach your  menus.   The coordinate $(0,0)$ is  the upper
##  left corner, $(<width>-1,<height>-1)$ the lower right.
##
InstallMethod( GraphicCanvas,
    "a string, and two integers",
    true,
    [ IsString,
      IsInt,
      IsInt ],
    0,

function( title, width, height )
    local canvas;

    canvas          := rec();
    canvas!.@type   := Objectify( NewType( GraphicCanvasFamily, IsGraphicCanvas and IsGraphicCanvasRep ), rec() );
    canvas!.type    := "canvas";
    canvas!.id      := GenerateId();
    canvas!.width   := width;
    canvas!.height  := height;
    canvas!.objects := [];

	canvas!.options                      := rec();
    canvas!.options!.name                := title;
    canvas!.options!.drawn               := false;
    canvas!.options!.presentation        := rec();
    canvas!.options!.presentation!.color := "";
    canvas!.options!.menu                := rec();

    return canvas;

end );

#############################################################################
##
#M  GraphicObject( <representation>, <canvas>, <def> )  . .  create a template
##
InstallMethod( GraphicObject,
    "a representation, a graphic canvas, and defaults",
    true,
    [ IsFunction, IsRecord, IsRecord ],
    0,

function( representation, canvas, def )
    local obj;

	if not IsGraphicCanvas(canvas!.@type) then
	    Error("Canvas is not of type GraphicCanvas");
	fi;

    obj        := rec();
    obj!.@type := Objectify( NewType( GraphicObjectFamily, representation ), rec() );
	obj!.type  := "";
    obj!.id    := GenerateId();

	obj!.options                                    := rec();
    obj!.options!.name                              := "";
    obj!.options!.drawn                             := false;
    obj!.options!.presentation                      := rec();
    obj!.options!.presentation!.color               := "";
    obj!.options!.behavior                          := rec();
    obj!.options!.behavior!.draggable               := true;
    obj!.options!.behavior!.connectable             := rec();
    obj!.options!.behavior!.connectable.objects     := [];
    obj!.options!.behavior!.connectable.directional := false;
    obj!.options!.structure                         := rec();
    obj!.options!.structure!.group                  := "";
    obj!.options!.structure!.layer                  := "";

    # add this one to the canvas
    AddToCanvas( canvas, obj );

    return obj;

end );


#############################################################################
##
#M  Box( <canvas>, <x>, <y>, <w>, <h> )  . . . . . . . . draw a box in a canvas
#M  Box( <canvas>, <x>, <y>, <w>, <h>, <defaults> )  . . draw a box in a canvas
##
##  creates a new graphic object,  namely a filled black  box, on the graphic
##  canvas <canvas> and  returns a {\GAP} record describing  this  object.  The
##  four   corners     of  the    box    are   $(<x>,<y>)$,  $(<x>+<w>,<y>)$,
##  $(<x>+<w>,<y>+<h>)$, and $(<x>,<y>+<h>)$.
##
##  Note that the box is $<w>+1$ pixel wide and $<h>+1$ pixels high.
##
##  If a record <defaults> is given and contains a component `color' of value
##  <color>, the  function works like the first version  of  `Box', except
##  that the color of the box will be <color>.  See "Color Models" for how
##  to select a <color>.
##
##  See "table of operations for graphic objects" for a list of operations
##  that apply to boxes.
##
InstallMethod( Box,
    "one canvas object, four integers for position and size, and one record of defaults",
    true,
    [ IsRecord,
      IsInt,
      IsInt,
      IsInt,
      IsInt,
      IsRecord ],
    0,

function( canvas, x, y, w, h, def )
    local box;

	if not IsGraphicCanvas(canvas!.@type) then
	    Error("Canvas is not of type GraphicCanvas");
	fi;

    box         := GraphicObject( IsBox and IsBoxObjectRep, canvas, def );
    box!.type   := "rectangle";
    box!.x      := x;
    box!.y      := y;
    box!.width  := w;
    box!.height := h;
    box!.rx     := 0; # TODO support later
    box!.ry     := 0; # TODO support later

    return box;

end );

InstallMethod( Circle,
    "one canvas object, four integers for position and size, and one record of defaults",
    true,
    [ IsRecord,
      IsInt,
      IsInt,
      IsInt,
      IsRecord ],
    0,

function( canvas, x, y, r, def )
    local circle;

	if not IsGraphicCanvas(canvas!.@type) then
	    Error("Canvas is not of type GraphicCanvas");
	fi;

    circle       := GraphicObject( IsCircle and IsCircleObjectRep, canvas, def );
    circle!.type := "circle";
    circle!.x    := x;
    circle!.y    := y;
    circle!.r    := r;
    circle!.cx   := 0; # TODO support later
    circle!.cy   := 0; # TODO support later

    return circle;

end );

InstallOtherMethod( Circle,
    "using default from sheet",
    true,
    [ IsRecord,
      IsInt,
      IsInt,
      IsInt ],
    0,

function( canvas, x, y, r )
    return Circle( canvas, x, y, r, rec() );
end );

#############################################################################
##
#M  Line( <sheet>, <x>, <y>, <w>, <h> )  . . . . . . . draw a line in a sheet
#M  Line( <sheet>, <x>, <y>, <w>, <h>, <defaults> )  . . . . . . . . . . dito
##
InstallMethod( Line,
    "one canvas, four integers, and record of defaults",
    true,
    [ IsRecord,
      IsList,
      IsInt,
      IsRecord ],
    0,

function( canvas, points, width, def )
    local line;

    # create a line object in <sheet>
    line         := GraphicObject( IsLine and IsLineObjectRep, canvas, def );
    line!.type   := "line";
    line!.points := points;
    line!.width  := width;

    # and return
    return line;

end );

InstallOtherMethod( Line,
    "using defaults",
    true,
    [ IsRecord,
      IsList,
      IsInt ],
    0,

function( canvas, points, width )
    return Line( canvas, points, width, rec() );
end );

#############################################################################
##
#M  Link( [<obj1>], [<obj2>] )
##
InstallMethod( LinkGraphicObjects,
    "link objects",
    true,
    [ IsList,
	  IsList ],
    0,

function( objArray1, objArray2 )
    local tmpObj, tmpObj1, tmpObj2;

    for tmpObj1 in objArray1 do

        for tmpObj2 in objArray2 do

        	if not IsGraphicObject(tmpObj1!.@type) or not IsGraphicObject(tmpObj2!.@type) then
        	    Error("Object is not of type IsGraphicObject");
        	fi;

        	tmpObj := ShallowCopy( tmpObj2 );
            Unbind( tmpObj!.@type );
        	Append( tmpObj1!.options!.behavior!.connectable!.objects,  [ tmpObj ]);
        	tmpObj1!.options!.behavior!.connectable!.directional := true;
        od;

    od;

end );

#############################################################################
##
#M  Group( [<obj1>] )
##
InstallMethod( GroupGraphicObjects,
    "link objects",
    true,
    [ IsList ],
    0,

function( objArray )
    local gObj, id;

    id :=  GenerateId();

    for gObj in objArray do

        if not IsGraphicObject(gObj!.@type) then
            Error("Object is not of type IsGraphicObject");
        fi;

        gObj!.options!.structure!.group := id;

    od;

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

	if not IsGraphicCanvas(canvas!.@type) then
	    Error("Canvas is not of type GraphicCanvas");
	fi;
	if not IsGraphicObject(gObj!.@type) then
        Error("Object is not of type IsGraphicObject");
    fi;

	Append( canvas!.objects, [ gObj ] );

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

	if not IsGraphicCanvas(canvas!.@type) then
	    Error("Canvas is not of type GraphicCanvas");
	fi;
	if not IsGraphicObject(gObj!.@type) then
        Error("Object is not of type IsGraphicObject");
    fi;

	Remove( canvas!.objects, Position( canvas!.object, [ gObj ] ) );

    return canvas;

end );
