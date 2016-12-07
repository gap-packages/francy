
#############################################################################
##
#M  GraphicObject( <representation>, <canvas>, <def> )  . .  create a template
##
InstallMethod( GraphicObject,
    "for a representation, a graphic canvas, and defaults",
    true,
    [ IsFunction, IsGraphicCanvas, IsRecord ],
    0,

function( rep, canvas, def )
    local obj;

    if not IsBound( def.color ) then
        if not IsMutable( def ) then def:= ShallowCopy( def ); fi;
        def.color := DefaultsForGraphicObject( canvas ).color;
    fi;
    if not IsBound( def.draggable ) then
        if not IsMutable( def ) then def:= ShallowCopy( def ); fi;
        def.draggable := DefaultsForGraphicObject( canvas ).draggable;
    fi;
    if not IsBound( def.name ) then
        if not IsMutable( def ) then def:= ShallowCopy( def ); fi;
        def.name := DefaultsForGraphicObject( canvas ).name;
    fi;

    obj                  := Objectify( NewType( GraphicObjectFamily, rep ), rec() );
    obj!.@type           := "svg:";
    obj!.canvas          := canvas;
    obj!.color           := def.color;
    obj!.name            := def.name;
    obj!.draggable       := def.draggable;
    obj!.drawn           := false;
    obj!.potentialAction := "schema:AddAction"

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
    [ IsGraphicCanvas,
      IsInt,
      IsInt,
      IsInt,
      IsInt,
      IsRecord ],
    0,

function( canvas, x, y, w, h, def )
    local   box;

    box           := GraphicObject( IsBoxObjectRep, canvas, def );
    box!.@type    := "svg:rect"
    box!.id       := 0; # TODO generate ids
    box!.x        := x;
    box!.y        := y;
    box!.w        := w;
    box!.h        := h;

    return box;

end );


#############################################################################
##
#M  Draw( <box> ) . . . . . . . . . . . . . . . . . . . . . . . .  draw a box
##
InstallMethod( Draw,
    "for a box",
    true,
    [ IsGraphicObject and IsBoxObjectRep and IsAlive ],
    0,

function( box )

    if box!.drawn then
        box!.potentialAction := "schema:UpdateAction"
    fi;

    obj            := Objectify( NewType( GraphicObjectFamily, rep ), rec() );
    obj!.@context  := rec( svg:="http://www.w3.org/2000/svg", schema:="http://schema.org" );
    obj!.@type     := "schema:DrawAction";
    obj!.object    := [ box ];

    GapToJsonString(box);

    box!.drawn := true;

    return box;

end );
