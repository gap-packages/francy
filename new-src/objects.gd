#############################################################################
##
#W  init.g                      FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2016 Manuel Martins
##

#############################################################################
##
#O  GraphicCanvas( <title>, <width>, <height> )
##
## GraphicCanvas represents a base element to draw graphics on. Inspired by
## the HTML <canvas> element which is used to draw graphics, in runtime,
## via JavaScript.
##
DeclareOperation( "GraphicCanvas", [ IsString, IsInt, IsInt ] );

#############################################################################
##
#O  GraphicObject( <category representation>, <canvas>, <defaults> )
##
## Every object to draw will be a subclass of this object. This will allow
## all the objects to contain the same base information.
##
DeclareOperation( "GraphicObject", [ IsObject, IsRecord, IsRecord ] );

#############################################################################
##
#O  Box( <canvas>, <x>, <y>, <w>, <h> )
#O  Box( <canvas>, <x>, <y>, <w>, <h>, <defaults> )
##
## Creates a new graphic object,  namely a filled black  box, in the graphic
##  canvas <canvas> and  returns a {\GAP} record describing  this  object.  The
##  four   corners     of  the    box    are   $(<x>,<y>)$,  $(<x>+<w>,<y>)$,
##  $(<x>+<w>,<y>+<h>)$, and $(<x>,<y>+<h>)$.
##
##  Note that the box is $<w>+1$ pixel wide and $<h>+1$ pixels high.
##
DeclareOperation( "Box", [ IsRecord, IsInt, IsInt, IsInt, IsInt, IsRecord ] );

#############################################################################
##
#O  Circle( <canvas>, <x>, <y>, <r> )
#O  Circle( <canvas>, <x>, <y>, <r>, <defaults> )
##
##  creates a new graphic object, namely a black circle, in the graphic canvas
##  <sheet> and returns a {\GAP} record describing this object. The center
##  of the circle is $(<x>,<y>)$ and the radius is $<r>$.
##
DeclareOperation( "Circle", [ IsRecord, IsInt, IsInt, IsInt, IsRecord ] );

#############################################################################
##
#O  Line( <canvas>, <points>, <width>, <defaults> )
#O  Line( <canvas>, <points>, <width> )
##
##  creates a new graphic object, namely a black line, in the graphic canvas
##  <canvas> and returns a {\GAP} record describing this object. The center
##  of the circle is $(<x>,<y>)$ and the radius is $<r>$.
##
DeclareOperation( "Line", [ IsRecord, IsList, IsInt, IsRecord ] );

#############################################################################
##
#O  Link( <object>, <object>, <defaults> )
#O  Link( [<object>], [<object>], <defaults> )
##
## Creates a link between the objects. This allows to produce graphics that
## represent connected objects.
##
DeclareOperation( "Link", [ IsList, IsList ] );

#############################################################################
##
#O  Group( [<object>], <defaults> )
##
## Creates a group of objects that will lay within the boundaries of this group
##
DeclareOperation( "GroupGraphicObjects", [ IsList ] );

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

#############################################################################
##
#O  ServerEvent( object, onEvent, cmd )
##
##
DeclareOperation( "ServerEvent", [IsRecord, IsString, IsString] );
