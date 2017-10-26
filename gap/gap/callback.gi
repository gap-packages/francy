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
#M  CanvasDefaults . . . . . . . . . .  the various types of shapes supported
##
BindGlobal("CallbackDefaults", Objectify(NewType(CallbackFamily, IsCallbackDefaults and IsCallbackDefaultsRep), rec(
    w:= 680,
    h:= 400 
)));

#############################################################################
##
#M  Trigger( <trigger type>, <function> ) . triggers a callback with a list of args
##
InstallMethod(Callback,
  "a trigger type, a function, a list of args, a record of defaults",
  true,
  [IsTriggerType,
   IsFunction,
   IsList,
   IsCallbackDefaults],
  0,

function(triggerType, func, args, options)

  local object;

  object := Objectify(NewType(CallbackFamily, IsCallback and IsCallbackRep), rec(
    model := rec(
      id      := HexStringUUID(RandomUUID()),
      type    := triggerType!.value,
      func    := func,
      options := Clone(options)
    )
  ));

  return object;

end);

InstallOtherMethod(Callback,
  "a trigger type, a function, a list of args",
  true,
  [IsTriggerType,
   IsFunction,
   IsList],
  0,

function(triggerType, func, args)

  return Callback(triggerType, func, args, CallbackDefaults);

end);

InstallOtherMethod(Callback,
  "a trigger type, a function",
  true,
  [IsTriggerType,
   IsFunction],
  0,

function(triggerType, func)

  return Callback(triggerType, func, [], CallbackDefaults);

end);

InstallOtherMethod(Callback,
  "a function",
  true,
  [IsFunction,
   IsList],
  0,

function(func, args)

  return Callback(TriggerType!.CLICK, func, args, CallbackDefaults);

end);

InstallOtherMethod(Callback,
  "a function",
  true,
  [IsFunction],
  0,

function(func)

  return Callback(TriggerType!.CLICK, func, [], CallbackDefaults);

end);


#############################################################################
##
#M  Trigger( <id>, <list of args> ) . triggers a callback with a list of args
##
InstallMethod(Trigger,
  "a uuid string, a list",
  true,
  [IsString],
  0,

function(json)

  local callback, object;
  
  #object := LoadJson(json);
  
  callback := FrancyCallbacks!.(object!.id);
  
  return CallFuncList(callback!.func, callback!.args + object!.args);

end);
