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
InstallMethod(Francy,
  "",
  true,
  [],
  0,

function()

  local object;
  
  object := Objectify(NewType(FrancyFamily, IsFrancy and IsFrancyRep), rec(
    draw := function(canvas)
      local obj;
      obj := Clone(object);
      obj!.canvas := Clone(canvas);
      return rec(json := true, source := "gap", data := rec((FrancyMIMEType) := GapToJsonString(obj)));
    end,
    agent := FrancyAgent
  ));

  return object;

end);