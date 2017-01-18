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
##  creates  a  graphic  sheet with  title  <title> and dimension <width>  by
##  <height>.  A graphic sheet  is the basic  tool  to draw something,  it is
##  like a piece of  paper on which you can  put your graphic objects, and to
##  which you  can attach your  menus.   The coordinate $(0,0)$ is  the upper
##  left corner, $(<width>-1,<height>-1)$ the lower right.
##
##  It is  possible to  change the  default behaviour of   a graphic sheet by
##  installing methods (or   sometimes  called callbacks) for   the following
##  events.  In order to  avoid  confusion with  the {\GAP} term  \"method\" the
##  term \"callback\" will be used in the following.  For example, to install
##  the function `MyLeftPBDownCallback' as callback for the left mouse button
##  down  event of a graphic <sheet>,  you have  to call `InstallCallback' as
##  follows.
##
##  \begintt
##      gap> InstallCallback( sheet, "LeftPBDown", MyLeftPBDownCallback );
##  \endtt
##
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

    canvas                  := rec();
    canvas!.type            := Objectify( NewType( GraphicCanvasFamily, IsGraphicCanvas and IsGraphicCanvasRep ), rec() );
	canvas!.id              := GenerateId();
    canvas!.@type           := "svg:svg";
    canvas!.name            := title;
    canvas!.width           := width;
    canvas!.height          := height;
	canvas!.object          := [];
	canvas!.drawn           := false;
	canvas!.potentialAction := rec ( @type := "schema:AddAction" );

	canvas!.defaults           := rec();
    canvas!.defaults.color     := "Black";
    canvas!.defaults.draggable := false;

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

	if not IsGraphicCanvas(canvas!.type) then
	    Error("Canvas is not of type GraphicCanvas");
	fi;

    obj                  := rec();
    obj!.type            := Objectify( NewType( GraphicObjectFamily, representation ), rec() );
    obj!.@type           := "";
    obj!.color           := def.color;
    obj!.name            := def.name;
    obj!.draggable       := def.draggable;
    obj!.drawn           := false;
    obj!.potentialAction := rec ( @type := "schema:AddAction" );

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
    local   box;

	if not IsGraphicCanvas(canvas!.type) then
	    Error("Canvas is not of type GraphicCanvas");
	fi;

    box           := GraphicObject( IsBox and IsBoxObjectRep, canvas, def );
    box!.@type    := "svg:rect";
    box!.id       := GenerateId();
    box!.x        := x;
    box!.y        := y;
    box!.width    := w;
    box!.height   := h;
    box!.rx       := 0; # TODO support later
    box!.ry       := 0; # TODO support later

    return box;

end );

InstallOtherMethod( Box,
    "using default from sheet",
    true,
    [ IsRecord,
      IsInt,
      IsInt,
      IsInt,
      IsInt ],
    0,

function( canvas, x, y, w, h )
    return Box( canvas, x, y, w, h, rec(color:="black", draggable:=true, name:="") );
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
    local   circle;

	if not IsGraphicCanvas(canvas!.type) then
	    Error("Canvas is not of type GraphicCanvas");
	fi;

    circle           := GraphicObject( IsCircle and IsCircleObjectRep, canvas, def );
    circle!.@type    := "svg:circle";
    circle!.id       := GenerateId();
    circle!.x        := x;
    circle!.y        := y;
    circle!.r        := r;
    circle!.cx       := 0; # TODO support later
    circle!.cy       := 0; # TODO support later

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
    return Circle( canvas, x, y, r, rec(color:="black", draggable:=true, name:="") );
end );


#############################################################################
##
#M  Link( <obj1>, <obj2> )
##
InstallMethod( LinkGraphicObjects,
    "link objects",
    true,
    [ IsRecord,
	  IsRecord ],
    0,

function( gObj1, gObj2 )

    local tmpObj;

	if not IsGraphicObject(gObj1!.type) then
	    Error("Canvas is not of type IsGraphicObject");
	fi;
	if not IsGraphicObject(gObj2!.type) then
        Error("Canvas is not of type IsGraphicObject");
    fi;

	gObj1!.connectable := rec();
	tmpObj := ShallowCopy( gObj2 );
    Unbind( tmpObj!.type );
	gObj1!.connectable!.object := [ tmpObj ];
	gObj1!.connectable!.directional := true;

    return true;

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
    local gObj, groupId;

    groupId := GenerateId();

    for gObj in objArray do

        if not IsGraphicObject(gObj!.type) then
            Error("Object is not of type IsGraphicObject");
        fi;

        gObj!.group := rec();
        gObj!.group!.@type    := "svg:g";
        gObj!.group!.id := groupId;

    od;

    return groupId;

end );

#############################################################################
##
#O  ServerEvent( object, onEvent, cmd )
##
InstallMethod( ServerEvent,
    "Execute code back in gap",
    true,
    [ IsRecord, IsString, IsString ],
    0,

function( obj, event, cmd )

    if not IsGraphicObject(obj!.type) then
        Error("Object is not of type IsGraphicObject");
    fi;

    obj!.serverEvent := rec();
    obj!.serverEvent!.onEvent := event;
    obj!.serverEvent!.cmd := cmd;

    return obj;

end );
