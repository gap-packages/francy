############################################################################
##
#W  idgenerator.gd               FRANCY library               Manuel Martins
##
##
#Y  Copyright 2016
##
#############################################################################
#1
##  Generates sequential IDs in order to replace the X11 createWindow function
##  that returns an ID and is used internally.
##  This should be removed in the future as we might be able to replace this
##  with a more suitable mechanism to store internal graphical objects state
##

#############################################################################
##
#O  WindowCmd( <id>, <w> )  . . . . . . . . . . unbind core WindowCmd function
##
MakeReadWriteGlobal("WindowCmd");
UnbindGlobal("WindowCmd");


#############################################################################
##
#V  IDS . . . . . . . . . . . . . . . . . . . . . . . . list of generated ids
##
BindGlobal( "IDS", rec(WIN:=0, MENU:=0, OTHER:=0) );
# BindGlobal( "IDS", rec(WIN:=0, OBJ:=0, rec(MENU:=0, OTHER:=0)) );


#############################################################################
##
#F  WindowCmd( args )  . . . . . . . . . . . . . . . . . . . . . . . . . . .
## This function overrides the Core WindowCmd (implemented for xgap)
## and dependent on X11, and it returns sequential ids depending on
## graphical objects
##
BindGlobal( "WindowCmd", function( args )
    local id, windowCmds, otherCmds, menuCmds;
    windowCmds := ["XOW" , "XSP", "XSD"];
    otherCmds := ["XDB", "XDC", "XDD", "XDL", "XDT", "XQP", "XOS"];
    menuCmds := ["XME", "XPS"];
    if args[1] in windowCmds then
        id := IDS!.WIN;
        IDS!.WIN := id+1;
    elif args[1] in menuCmds then
        id := IDS!.MENU;
        IDS!.MENU := id+1;
    else
        id := IDS!.OTHER;
        IDS!.OTHER := id+1;
    fi;
    Print(args); Print("\n");
    return [id];
end );
