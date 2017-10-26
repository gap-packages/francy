#############################################################################
##
#W  shape.gi                   FRANCY library                  Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
#M  ShapeType . . . . . . . . . . . . . the various types of shapes supported
##
BindGlobal("ShapeType", Objectify(NewType(ShapeFamily, IsFrancyType and IsFrancyTypeRep), rec(
    TRIANGLE := Objectify(NewType(ShapeFamily, IsShapeType and IsShapeTypeRep), rec(value := "triangle")),
    DIAMOND := Objectify(NewType(ShapeFamily, IsShapeType and IsShapeTypeRep), rec(value := "diamond")),
    CIRCLE := Objectify(NewType(ShapeFamily, IsShapeType and IsShapeTypeRep), rec(value := "circle")),
    SQUARE := Objectify(NewType(ShapeFamily, IsShapeType and IsShapeTypeRep), rec(value := "square")),
    CROSS := Objectify(NewType(ShapeFamily, IsShapeType and IsShapeTypeRep), rec(value := "cross")),
    STAR := Objectify(NewType(ShapeFamily, IsShapeType and IsShapeTypeRep), rec(value := "star")),
    WYE := Objectify(NewType(ShapeFamily, IsShapeType and IsShapeTypeRep), rec(value := "wye"))
)));


#############################################################################
##
#M  ShapeDefaults . . . . . . . . . . . the various types of shapes supported
##
BindGlobal("ShapeDefaults", Objectify(NewType(ShapeFamily, IsShapeDefaults and IsShapeDefaultsRep), rec(
    highlight := true,
    layer := 0,
    size := 10,
    x := 0,
    y := 0 
)));


#############################################################################
##
#M  Shape( <shapeType>, <title>, <options> )  . .  create a Shape for a type
##
InstallMethod(Shape,
  "a shape type, a title string, a default configurations record",
  true,
  [ IsShapeType,
    IsString,
    IsShapeDefaults ],
  0,

function(shapeType, title, options)

  local object;

  object := Objectify(NewType(ShapeFamily, IsShape and IsShapeRep), rec(
    model := rec(
      id      := HexStringUUID(RandomUUID()),
      type    := shapeType!.value,
      title   := title,
      options := Clone(options)
    )
  ));

  return object;

end);

InstallOtherMethod(Shape,
  "a shape type, a title string",
  true,
  [ IsShapeType,
    IsString ],
  0,

function(shapeType, title)

  return Shape(shapeType, title, ShapeDefaults);

end);
