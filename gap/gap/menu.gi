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
  local object;
  object := Objectify(NewType(MenuFamily, IsMenu and IsMenuRep), rec(
    add := function(obj)
      if not IsMenu(obj) then
        Error("Object is not of type IsMenu");
      else
        object!.menus!.(obj!.id) := obj;
      fi;
      return;
    end,
    remove := function(obj)
      if not IsMenu(obj) then
        Error("Object is not of type IsMenu");
      else
        Unbind(object!.menus!.(obj!.id));
      fi;
      return;
    end,
    id       := HexStringUUID(RandomUUID()),
    title    := title,
    callback := callback,
    menus    := rec()
  ));
  return object;
end);
