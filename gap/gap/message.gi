#############################################################################
##
#W  messages.gd                    FRANCY library                  Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##


#############################################################################
##
#M  HintMessage( <messageType>, <string>, <string> )  . .  create a Label
##
InstallMethod(HintMessage,
  "message type, a title, a value",
  true,
  [IsMessageType,
   IsString,
   IsString],
  0,
function(messageType, title, value)
  return Objectify(HintMessageObjectType, rec(
    id    := GenerateID(),
    type  := messageType!.value,
    title := title,
    text := value
  ));
end);

InstallOtherMethod(HintMessage,
  "a title, a value",
  true,
  [IsString,
   IsString],
  0,
function(title, value)
  return HintMessage(MessageType.DEFAULT, title, value);
end);

InstallOtherMethod(HintMessage,
  "message type, a value",
  true,
  [IsMessageType,
   IsString],
  0,
function(messageType, value)
  return HintMessage(messageType, "", value);
end);

InstallOtherMethod(HintMessage,
  "a value",
  true,
  [IsString],
  0,
function(value)
  return HintMessage(MessageType.DEFAULT, "", value);
end);