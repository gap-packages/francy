#############################################################################
##
#C  IsGraphicObject( <gobj> ) . . . . . . . . . . category of graphic objects
##
##  This is the category in which all graphic objects are.
##
DeclareCategory( "IsGraphicObject", IsObject );

#############################################################################
##
#C  IsGraphicCanvas( <gobj> ) . . . . . . . . . . . category of graphic canvas
##
DeclareCategory( "IsGraphicCanvas", IsObject );

#############################################################################
##
#C  IsBox( <gobj> ) . . . . . . . . . . . category of graphic boxes
##
DeclareCategory( "IsBox", IsObject );

#############################################################################
##
#R  IsGraphicObjectRep  . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation( "IsGraphicObjectRep", IsComponentObjectRep,
    [ "canvas", "color", "user" ], IsGraphicObject );

#############################################################################
##
#V  GraphicObjectFamily
##
BindGlobal( "GraphicObjectFamily", NewFamily( "GraphicObjectFamily", IsGraphicObject ) );

#############################################################################
##
#R  IsBoxObjectRep  . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation( "IsBoxObjectRep", IsGraphicObjectRep,
    [ "id", "x", "y", "w", "h" ], IsGraphicObject );

#############################################################################
##
#A  DefaultsForGraphicObject( <sheet> ) . . . . . . . . .  default color, etc
##
DeclareAttribute( "DefaultsForGraphicObject", IsGraphicSheet );

#############################################################################
##
#O  GraphicObject( <catrep>, <canvas>, <defaults> )  . . .  new graphic object
##
DeclareOperation( "GraphicObject", [ IsObject, IsGraphicCanvas, IsRecord ] );

#############################################################################
##
#O  Box( <canvas>, <x>, <y>, <w>, <h> )  . . . . . . . . draw a box in a canvas
#O  Box( <canvas>, <x>, <y>, <w>, <h>, <defaults> )  . . draw a box in a canvas
##
##  creates a new graphic object,  namely a filled black  box, in the graphic
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
##  See "operations for graphic objects" for a list of operations
##  that apply to boxes.
##
##  Note that `Reshape' for boxes takes three parameters, namely the box
##  object, the new width, and the new height of the box.
##
DeclareOperation( "Box", [ IsGraphicCanvas, IsInt, IsInt, IsInt, IsInt, IsRecord ] );

#############################################################################
##
#O  Draw( <object> )  . . . . . . . . . . . . . . . (re)draw a graphic object
##
##  This operation (re-)draws a graphic object on the screen. You normally
##  do not need to call this yourself. But in some rare cases of object
##  overlaps you could find it useful.
##
DeclareOperation( "Draw", [ IsGraphicObject ] );
