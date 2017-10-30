#############################################################################
##
#W  callback.gi                 FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
#M  CallbackTrigger . . .  the various events supported to trigger a callback
##
BindGlobal("TriggerType", Objectify(NewType(CallbackFamily, IsTriggerType and IsTriggerTypeRep), rec(
  DOUBLE_CLICK := Objectify(NewType(CallbackFamily, IsTriggerType and IsTriggerTypeRep), rec(value := "dblclick")),
  RIGHT_CLICK := Objectify(NewType(CallbackFamily, IsTriggerType and IsTriggerTypeRep), rec(value := "context")),
  CLICK := Objectify(NewType(CallbackFamily, IsTriggerType and IsTriggerTypeRep), rec(value := "click")),
  OVER := Objectify(NewType(CallbackFamily, IsTriggerType and IsTriggerTypeRep), rec(value := "mouseover"))
)));

#############################################################################
##
#M  CallbackDefaults . . . . . . . . . .  the various types of shapes supported
##
BindGlobal("ArgType", Objectify(NewType(CallbackFamily, IsArgType and IsArgTypeRep), rec(
  INTEGER := Objectify(NewType(CallbackFamily, IsArgType and IsArgTypeRep), rec(value := "int")),
  BOOLEAN := Objectify(NewType(CallbackFamily, IsArgType and IsArgTypeRep), rec(value := "boolean")),
  STRING := Objectify(NewType(CallbackFamily, IsArgType and IsArgTypeRep), rec(value := "string")),
  DOUBLE := Objectify(NewType(CallbackFamily, IsArgType and IsArgTypeRep), rec(value := "double"))
)));

#############################################################################
##
#M  Callback( <trigger type>,  <function>, <known args> ) . 
##  
## triggers a callback with a list of known args.
## Extra args, or required args, should be registered using:
##      Callback!.add(CallbackRequiredArg)
##
InstallMethod(Callback,
  "a trigger type, a function, a list of known args",
  true,
  [IsTriggerType,
   IsFunction,
   IsList],
  0,
function(triggerType, func, knownArgs)
  local object;
  object := Objectify(NewType(CallbackFamily, IsCallback and IsCallbackRep), rec(
    add := function(obj)
      if not IsCallbackRequiredArg(obj) then
        Error("Object is not of type IsFrancyObject");
      else
        object!.requiredArgs!.(obj!.id) := obj;
      fi;
      return object;
    end,
    id           := HexStringUUID(RandomUUID()),
    type         := triggerType!.value,
    func         := func,
    knownArgs    := knownArgs,
    requiredArgs := rec()
  ));
  return object;
end);

InstallOtherMethod(Callback,
  "a trigger type, a function",
  true,
  [IsTriggerType,
   IsFunction],
  0,
function(triggerType, func)
  return Callback(triggerType, func, []);
end);

InstallOtherMethod(Callback,
  "a function, a list of knownArgs",
  true,
  [IsFunction,
   IsList],
  0,
function(func, knownArgs)
  return Callback(TriggerType!.CLICK, func, knownArgs);
end);

InstallOtherMethod(Callback,
  "a function",
  true,
  [IsFunction],
  0,
function(func)
  return Callback(TriggerType!.CLICK, func, []);
end);

#############################################################################
##
#M  CallbackRequiredArg( <calbback args type>, <title> )
##
InstallMethod(CallbackRequiredArg,
  "a callback arg type, a title",
  true,
  [IsArgType,
   IsString],
  0,
function(argType, title)
  return Objectify(NewType(CallbackFamily, IsCallbackRequiredArg and IsCallbackRequiredArgRep), rec(
    id    := HexStringUUID(RandomUUID()),
    type  := argType!.value,
    title := title,
    value := ""
  ));
end);

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
  local callback, object, requiredArgs;
  object := JsonStringToGap(json);
  # TODO validate json object!
  callback := FrancyCallbacks!.(object!.id);
  # TODO iterate over args and create a list of values
  requiredArgs := [];
  return CallFuncList(callback!.func, callback!.knownArgs + requiredArgs);
end);
