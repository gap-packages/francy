#
# francy: Interactive Discrete Mathematics in GAP
#

#############################################################################
##
#M  FrancyMessage( <messageType>, <string>, <string> )
##
## Create a message object.
##
InstallMethod(FrancyMessage,
  "message type, a title, a value",
  true,
  [IsFrancyMessageType,
   IsString,
   IsString],
  0,
function(messageType, title, value)
  local id, message;
  id := GenerateID();
  return Objectify(FrancyMessageObjectType, rec(
    id       := id,
    type     := messageType!.value,
    title    := title,
    text     := value,
    callback := NoopCallback()
  ));
end);

InstallOtherMethod(FrancyMessage,
  "a title, a value",
  true,
  [IsString,
   IsString],
  0,
function(title, value)
  return FrancyMessage(FrancyMessageType.DEFAULT, title, value);
end);

InstallOtherMethod(FrancyMessage,
  "message type, a value",
  true,
  [IsFrancyMessageType,
   IsString],
  0,
function(messageType, value)
  return FrancyMessage(messageType, "", value);
end);

InstallOtherMethod(FrancyMessage,
  "a value",
  true,
  [IsString],
  0,
function(value)
  return FrancyMessage(FrancyMessageType.DEFAULT, "", value);
end);

#############################################################################
##
#M  Add( <message>, <francy object> )
##
## Add a menu to a graph.
##
InstallOtherMethod(Add,
  "a message, a callback",
  true,
  [IsFrancyMessage,
   IsCallback],
  0,
function(message, callback)
  message!.callback := callback;
  return message;
end);

#############################################################################
##
#M  Remove( <message>, <francy object> )
##
## Remove a callback from a message.
##
InstallOtherMethod(Remove,
  "a message, a callback",
  true,
  [IsFrancyMessage,
   IsCallback],
  0,
function(message, callback)
  message!.callback := NoopCallback();
  return message;
end);
