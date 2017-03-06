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
#O  Circle( <sheet>, <x>, <y>, <r> )
#O  Circle( <sheet>, <x>, <y>, <r>, <defaults> )
##
##  creates a new graphic object, namely a black circle, in the graphic sheet
##  <sheet> and returns a {\GAP} record describing this object. The center
##  of the circle is $(<x>,<y>)$ and the radius is $<r>$.
##
DeclareOperation( "Circle", [ IsRecord, IsInt, IsInt, IsInt, IsRecord ] );

#############################################################################
##
#O  Text( <canvas>, <font>, <x>, <y>, <str> )  . . . . write a text in a sheet
#O  Text( <canvas>, <font>, <x>, <y>, <str>, <defaults> )
##
##  creates a new graphic object, namely the string <str> as a black text,
##  in the graphic sheet <sheet> and returns a {\GAP} record describing
##  this object.  The text has the baseline of the first character at
##  $(x,y)$.
##
##  If a record <defaults> is given and contains a component `color' of value
##  <color>, the  function works like the first version  of  `Text', except
##  that the color of the text will be <color>.  See "Color Models" for how
##  to select a <color>.
##
##  See "operations for graphic objects" for a list of operations
##  that apply to texts.
##
##  Note that `Reshape' for texts takes two parameters, namely the
##  text object, and the new font. Use `Relabel' to change the string of the
##  text.
##
DeclareOperation( "Text", [ IsRecord, IsInt, IsInt, IsString, IsRecord ] );

#############################################################################
##
#O  Highlight( <vertex> ) . . . . . . .  switch highlighting status of vertex
#O  Highlight( <vertex>, <flag> ) . . .  switch highlighting status of vertex
##
##  In the first form this operation switches the highlighting status of a
##  vertex to ON. In the second form the <flag> decides about ON or OFF.
##  Highlighting normally means a thicker line width and a change in color.
##
DeclareOperation( "Highlight", [ IsRecord, IsBool ] );

#############################################################################
##
#O  Link( <object>, <object>, <defaults> )
#O  Link( [<object>], [<object>], <defaults> )
##
## Creates a link between the objects. This allows to produce graphics that
## represent connected objects.
##
DeclareOperation( "Link", [ IsRecord, IsRecord ] );

#############################################################################
##
#O  Group( [<object>], <defaults> )
##
## Creates a group of objects that will lay within the boundaries of this group
##
DeclareOperation( "GroupGraphicObjects", [ IsList ] );

#############################################################################
##
#O  ServerEvent( object, onEvent, cmd )
##
##
DeclareOperation( "ServerEvent", [IsRecord, IsString, IsString] );
