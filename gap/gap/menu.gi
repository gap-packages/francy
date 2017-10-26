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
  [ IsString,
    IsCallback ],
  0,

function(title, callback)

  local object;

  object := Objectify(NewType(MenuFamily, IsMenu and IsMenuRep), rec(
    add := function(obj)
      ###
      ## <obj> must be of type IsMenu or IsCallbackFunction
      ###
      if IsMenu(obj) then
        AddSet(object!.model!.menus, Clone(obj));
      else
        Error("Object is not of type IsMenu or IsCallbackFunction");
      fi;

      return;
    end,
    remove := function(obj)
      ###
      ## <obj> must be of type IsMenu or IsCallbackFunction
      ###
      if IsMenu(obj) then
        RemoveSet(object!.model!.menus, Clone(obj));
      else
        Error("Object is not of type IsMenu or IsCallbackFunction");
      fi;

      return;
    end,
    callback := callback,
    model := rec(
      id     := HexStringUUID(RandomUUID()),
      title  := title,
      menus  := []
    )
  ));

  return object;

end);
