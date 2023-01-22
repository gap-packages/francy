#
# francy: Interactive Discrete Mathematics in GAP
#

#############################################################################
##
#M  Menu( <title> )
##
## A menu entry.
##
InstallMethod(Menu,
  "a title string",
  true,
  [IsString,
   IsCallback],
  0,
function(title, callback)
  return Objectify(MenuObjectType, rec(
    id       := GenerateID(),
    title    := title,
    callback := callback,
    menus    := rec()
  ));
end);

InstallOtherMethod(Menu,
  "a title string",
  true,
  [IsString],
  0,
function(title)
  return Menu(title, NoopCallback());
end);

#############################################################################
##
#M  Add( <menu>, <menu> )
##
## Add a menu to another menu creating a sub-menu.
##
InstallOtherMethod(Add,
  "a menu, a menu",
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
#M  Remove( <menu>, <menu> )
##
## Remove a menu from another menu.
##
InstallOtherMethod(Remove,
  "a menu, a menu",
  true,
  [IsMenu,
   IsMenu],
  0,
function(menu, object)
  Unbind(menu!.menus!.(object!.id));
  return menu;
end);

InstallOtherMethod(Remove,
  "a menu, a list of francy objects",
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
