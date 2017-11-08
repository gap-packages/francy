#############################################################################
##
#W  francy.gi                   FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
#M  Francy( ) . . . . . a new graphic object
##
InstallMethod(Draw,
  "",
  true,
  [IsCanvas],
  0,
function(canvas)
  local object;
  object := rec();
  object!.agent := FrancyMIMEType;
  object!.canvas := Clone(canvas);
  return rec(json := true, source := "gap", data := rec((FrancyMIMEType) := GapToJsonString(object)));
end);