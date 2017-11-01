#############################################################################
##
#W  menu.gd                    FRANCY library                  Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
#M  Menu( <title> ) . . . . . . . . . . . . . . . a new menu entry
##
InstallMethod(Menu,
  "a title string",
  true,
  [IsString,
   IsCallback],
  0,
function(title, callback)
  return Objectify(NewType(MenuFamily, IsMenu and IsMenuRep), rec(
    id       := HexStringUUID(RandomUUID()),
    title    := title,
    callback := callback,
    menus    := rec()
  ));
end);


#############################################################################
##
#M  Add( <menu>, <menu> ) . . . . . add menu to canvas
##
InstallMethod(Add,
  "a canvas, a shape",
  true,
  [IsMenu,
   IsMenu],
  0,
function(menu, object)
  menu!.menus!.(object!.id) := object;
  return menu;
end);

InstallOtherMethod(Add,
  "a canvas, a list of francy objects",
  true,
  [IsMenu,
   IsList],
  0,
function(menu, objects)
  local object;
  for object in objects do
    Add(menu, object);
  od;
  return menu;
end);

#############################################################################
##
#M  Remove( <menu>, <menu> ) . . . . . remove menu from menu
##
InstallMethod(Remove,
  "a canvas, a shape",
  true,
  [IsMenu,
   IsMenu],
  0,
function(menu, object)
  Unbind(menu!.menus!.(object!.id));
  return menu;
end);

InstallOtherMethod(Remove,
  "a canvas, a list of francy objects",
  true,
  [IsMenu,
   IsList],
  0,
function(menu, objects)
  local object;
  for object in objects do
    Remove(menu, object);
  od;
  return menu;
end);