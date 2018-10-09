#
# francy: Interactive Discrete Mathematics in GAP
#

#############################################################################
##
#M  Callback( <callback type>, <trigger Type>,  <function>, <known args> ) . 
##  
## triggers a callback with a list of known args.
## Extra args, or required args, should be registered using:
##      Callback!.add(CallbackRequiredArg)
##
InstallMethod(Callback,
  "a function, a list of known args",
  true,
  [IsTriggerType,
   IsFunction,
   IsList],
  0,
function(triggerType, func, knownArgs)
  local object;
  object := Objectify(CallbackObjectType, rec(
    id           := GenerateID(),
    trigger      := triggerType!.value,
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
  return Callback(TriggerType.CLICK, func, knownArgs);
end);

InstallOtherMethod(Callback,
  "a function",
  true,
  [IsFunction],
  0,
function(func)
  return Callback(TriggerType.CLICK, func, []);
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
  return Objectify(CallbackObjectType, rec());
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
  return Objectify(RequiredArgObjectType, rec(
    id    := GenerateID(),
    type  := argType!.value,
    title := title,
    value := ""
  ));
end);

#############################################################################
##
#M  Add( <callback>, <required arg> ) . . . . . add objects to canvas
##
InstallOtherMethod(Add,
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
  "a callback, a list of francy objects",
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
InstallOtherMethod(Remove,
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
  "a callback, a list of francy objects",
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
  # FIXME need to validate the callback!
  #if not IsCallbackRep(object) then
  #  Error("Not a valid Callback!");
  #fi;
  callback := FrancyCallbacks!.(object!.id);
  requiredArgs := [];
  for arg in NamesOfComponents(object!.requiredArgs) do
    Add(requiredArgs, object!.requiredArgs!.(arg)!.value);
  od;
  return CallFuncList(callback!.func, Concatenation(callback!.knownArgs, requiredArgs));
end);
