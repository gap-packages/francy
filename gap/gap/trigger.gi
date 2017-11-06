#############################################################################
##
#W  callback.gi                 FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
#M  TriggerEvent . . .  the various events supported to trigger a callback
##
BindGlobal("TriggerEvent", Objectify(NewType(TriggerFamily, IsFrancyType and IsFrancyTypeRep), rec(
  DOUBLE_CLICK := Objectify(NewType(TriggerFamily, IsTriggerEvent and IsTriggerEventRep), rec(value := "dblclick")),
  RIGHT_CLICK  := Objectify(NewType(TriggerFamily, IsTriggerEvent and IsTriggerEventRep), rec(value := "context")),
  CLICK        := Objectify(NewType(TriggerFamily, IsTriggerEvent and IsTriggerEventRep), rec(value := "click")),
  OVER         := Objectify(NewType(TriggerFamily, IsTriggerEvent and IsTriggerEventRep), rec(value := "mouseover"))
)));

#############################################################################
##
#M  Trigger( <a json string> ) . triggers a callback
##
InstallMethod(Trigger,
  "a json string",
  true,
  [IsString],
  0,
function(json)
  local callback, object, requiredArgs, arg;
  object := JsonStringToGap(json);
  # TODO validate json object!
  callback := FrancyCallbacks!.(object!.id);
  requiredArgs := [];
  for arg in NamesOfComponents(object!.requiredArgs) do
    Add(requiredArgs, object!.requiredArgs!.(arg)!.value);
  od;
  Print(requiredArgs);
  Print(Concatenation(callback!.knownArgs, requiredArgs));
  Print(callback!.func);
  CallFuncList(callback!.func, Concatenation(callback!.knownArgs, requiredArgs));
end);
