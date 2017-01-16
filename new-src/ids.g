#############################################################################
##
#W  ids.g                      FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2016 Manuel Martins
##

#############################################################################
#1
##  Generates sequential IDs
##
BindGlobal( "ID", 0 );

MakeReadWriteGlobal( "ID" );

BindGlobal( "GenerateId", function()
    ID := ID + 1;
    return ID;
end);
