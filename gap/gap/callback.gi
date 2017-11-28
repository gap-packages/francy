#############################################################################
##
#W  callback.gi                 FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##


#############################################################################
##
#M  CallbackDefaults . . . . . . . . . .  the various types of shapes supported
##
BindGlobal("ArgType", rec(
  INTEGER := Objectify(NewType(CallbackFamily, IsArgType and IsArgTypeRep), rec(value := "int")),
  BOOLEAN := Objectify(NewType(CallbackFamily, IsArgType and IsArgTypeRep), rec(value := "boolean")),
  STRING  := Objectify(NewType(CallbackFamily, IsArgType and IsArgTypeRep), rec(value := "string")),
  NUMBER  := Objectify(NewType(CallbackFamily, IsArgType and IsArgTypeRep), rec(value := "number"))
));

#############################################################################
##
#M  TriggerEvent . . .  the various events supported to trigger a callback
##
BindGlobal("TriggerEvent", rec(
  DOUBLE_CLICK := Objectify(NewType(TriggerFamily, IsTriggerEvent and IsTriggerEventRep), rec(value := "dblclick")),
  RIGHT_CLICK  := Objectify(NewType(TriggerFamily, IsTriggerEvent and IsTriggerEventRep), rec(value := "context")),
  CLICK        := Objectify(NewType(TriggerFamily, IsTriggerEvent and IsTriggerEventRep), rec(value := "click"))
));

#############################################################################
##
#M  Callback( <callback type>, <trigger event>,  <function>, <known args> ) . 
##  
## triggers a callback with a list of known args.
## Extra args, or required args, should be registered using:
##      Callback!.add(CallbackRequiredArg)
##
InstallMethod(Callback,
  "a function, a list of known args",
  true,
  [IsTriggerEvent,
   IsFunction,
   IsList],
  0,
function(triggerEvent, func, knownArgs)
  local object;
  object := Objectify(NewType(CallbackFamily, IsCallback and IsCallbackRep), rec(
    id           := HexStringUUID(RandomUUID()),
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
  [IsTriggerEvent,
   IsFunction],
  0,
function(triggerEvent, func)
  return Callback(triggerEvent, func, []);
end);

InstallOtherMethod(Callback,
  "a function, a list of knownArgs",
  true,
  [IsFunction,
   IsList],
  0,
function(func, knownArgs)
  return Callback(TriggerEvent.CLICK, func, knownArgs);
end);

InstallOtherMethod(Callback,
  "a function",
  true,
  [IsFunction],
  0,
function(func)
  return Callback(TriggerEvent.CLICK, func, []);
end);

#############################################################################
##
#M  NoopCallback( )
##
## Creates an empty Callback object that does nothing
##
InstallMethod(NoopCallback,
  "",
  true,
  [],
  0,
function()
  return Objectify(NewType(CallbackFamily, IsCallback and IsCallbackRep), rec());
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
  return CallFuncList(callback!.func, Concatenation(callback!.knownArgs, requiredArgs));
end);
