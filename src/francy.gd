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
DeclareCategory( "IsGraphicCanvas", IsGraphicObject );

#############################################################################
##
#C  IsBox( <gobj> ) . . . . . . . . . . . category of graphic boxes
##
DeclareCategory( "IsBox", IsGraphicObject );

#############################################################################
##
#C  IsCircle( <gobj> ) . . . . . . . . . . . category of graphic boxes
##
DeclareCategory( "IsCircle", IsGraphicObject );

#############################################################################
##
#V  GraphicSheetFamily  . . . . . . . . . . . . . . . .  family of all sheets
##
BindGlobal( "GraphicCanvasFamily", NewFamily( "GraphicCanvasFamily" ) );

#############################################################################
##
#R  IsGraphicObjectRep  . . . . . . . . . . . . . . .  default representation

DeclareRepresentation( "IsGraphicObjectRep",
    IsComponentObjectRep, [ "canvas", "color", "user" ], IsGraphicObject );

#############################################################################
##
#R  IsGraphicCanvasRep . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation( "IsGraphicCanvasRep",
    IsComponentObjectRep and IsAttributeStoringRep,
    [ "name", "width", "height", "gapMenu", "callbackName", "callbackFunc",
      "menus", "objects", "free", "filenamePS", "filenameFig" ],
    IsGraphicCanvas );

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
#R  IsCircleObjectRep . . . . . . . . . . . . . . . .  default representation
DeclareRepresentation( "IsCircleObjectRep",
    IsGraphicObjectRep, [ "id", "x", "y", "r", "width" ], IsGraphicObject );
