#
# francy: Interactive Discrete Mathematics in GAP
#

#############################################################################
##
#M  FrancyMessage( <messageType>, <string>, <string> )  . .  create a Label
##
InstallMethod(FrancyMessage,
  "message type, a title, a value",
  true,
  [IsFrancyMessageType,
   IsString,
   IsString],
  0,
function(messageType, title, value)
local id;
id := GenerateID();
  return Objectify(FrancyMessageObjectType, rec(
    id    := id,
    type  := messageType!.value,
    title := title,
    text  := value
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
