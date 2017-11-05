#############################################################################
##
#W  callback.gi                 FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
#M  CallbackType . . .  the various events supported to trigger a callback
##
BindGlobal("CallbackType", Objectify(NewType(CallbackFamily, IsFrancyType and IsFrancyTypeRep), rec(
  SERVER := Objectify(NewType(CallbackFamily, IsCallbackType and IsCallbackTypeRep), rec(value := "server")),
  CLIENT := Objectify(NewType(CallbackFamily, IsCallbackType and IsCallbackTypeRep), rec(value := "client"))
)));

#############################################################################
##
#M  CallbackDefaults . . . . . . . . . .  the various types of shapes supported
##
BindGlobal("ArgType", Objectify(NewType(CallbackFamily, IsFrancyType and IsFrancyTypeRep), rec(
  INTEGER := Objectify(NewType(CallbackFamily, IsArgType and IsArgTypeRep), rec(value := "int")),
  BOOLEAN := Objectify(NewType(CallbackFamily, IsArgType and IsArgTypeRep), rec(value := "boolean")),
  STRING  := Objectify(NewType(CallbackFamily, IsArgType and IsArgTypeRep), rec(value := "string")),
  DOUBLE  := Objectify(NewType(CallbackFamily, IsArgType and IsArgTypeRep), rec(value := "double"))
)));

#############################################################################
##
#M  Callback( <callback type>, <trigger event>,  <function>, <known args> ) . 
##  
## triggers a callback with a list of known args.
## Extra args, or required args, should be registered using:
##      Callback!.add(CallbackRequiredArg)
##
InstallMethod(Callback,
  "a trigger type, a function, a list of known args",
  true,
  [IsCallbackType,
   IsTriggerEvent,
   IsFunction,
   IsList],
  0,
function(callbackType, triggerEvent, func, knownArgs)
  local object;
  object := Objectify(NewType(CallbackFamily, IsCallback and IsCallbackRep), rec(
    id           := HexStringUUID(RandomUUID()),
    type         := callbackType!.value,
    trigger      := triggerEvent!.value,
    func         := func,
    knownArgs    := knownArgs,
    requiredArgs := rec()
  ));
  FrancyCallbacks!.(object!.id) := object;
  return object;
end);

InstallOtherMethod(Callback,
  "a trigger type, a function",
  true,
  [IsCallbackType,
   IsTriggerEvent,
   IsFunction],
  0,
function(callbackType, triggerEvent, func)
  return Callback(callbackType, triggerEvent, func, []);
end);

InstallOtherMethod(Callback,
  "a function, a list of knownArgs",
  true,
  [IsFunction,
   IsList],
  0,
function(func, knownArgs)
  return Callback(CallbackType!.SERVER, TriggerEvent!.CLICK, func, knownArgs);
end);

InstallOtherMethod(Callback,
  "a function",
  true,
  [IsFunction],
  0,
function(func)
  return Callback(CallbackType!.SERVER, TriggerEvent!.CLICK, func, []);
end);

#############################################################################
##
#M  RequiredArg( <callback arg type>, <title> )
##
InstallMethod(RequiredArg,
  "a callback arg type, a title",
  true,
  [IsArgType,
   IsString],
  0,
function(argType, title)
  # FIXME might have to add a new property with order of the arg!
  return Objectify(NewType(CallbackFamily, IsRequiredArg and IsRequiredArgRep), rec(
    id    := HexStringUUID(RandomUUID()),
    type  := argType!.value,
    title := title,
    value := ""
  ));
end);


#############################################################################
##
#M  Add( <callback>, <required arg> ) . . . . . add objects to canvas
##
InstallMethod(Add,
  "a callback, a required arg",
  true,
  [IsCallback,
   IsRequiredArg],
  0,
function(callback, arg)
  callback!.requiredArgs!.(arg!.id) := arg;
  return callback;
end);

InstallOtherMethod(Add,
  "a canvas, a list of francy objects",
  true,
  [IsCallback,
   IsList],
  0,
function(callback, objects)
  local object;
  for object in objects do
    Add(callback, object);
  od;
  return callback;
end);

#############################################################################
##
#M  Remove( <callback>, <required arg> ) . . . . . add objects to canvas
##
InstallMethod(Remove,
  "a callback, a required arg",
  true,
  [IsCallback,
   IsRequiredArg],
  0,
function(callback, arg)
  Unbind(callback!.requiredArgs!.(arg!.id));
  return callback;
end);

InstallOtherMethod(Remove,
  "a canvas, a list of francy objects",
  true,
  [IsCallback,
   IsList],
  0,
function(callback, objects)
  local object;
  for object in objects do
    Remove(callback, object);
  od;
  return callback;
end);
