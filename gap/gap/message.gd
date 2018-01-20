#############################################################################
##
#W  message.gd                    FRANCY library                  Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##
#! @Chapter Francy Messages
#! TODO HintMessage
#! <P/>
#! Please see Francy-JS for client implementation.


#############################################################################
##
#! @Section Categories
#! In this section we show the Francy HintMessage Categories.

#! @Description
#! Identifies <C>HintMessage</C> objects.
DeclareCategory("IsHintMessage", IsFrancyObject);

#! @Description
#! Identifies <C>MessageType</C> objects.
DeclareCategory("IsMessageType", IsFrancyObject);


#############################################################################
##
#! @Section Families
#! In this section we show the Francy HintMessage Families.

#! @Description
#! This Family identifies all <C>HintMessages</C> objects
#! @Returns <C>HintMessageFamily</C>
BindGlobal("HintMessageFamily", NewFamily("HintMessageFamily", IsFrancyObject));


#############################################################################
##
#! @Section Representations
#! In this section we show the Francy HintMessage Representations.

BindGlobal("HintMessageObjectType", NewType(HintMessageFamily, IsHintMessage));

BindGlobal("MessageTypeObjectType", NewType(HintMessageFamily, IsMessageType));

#############################################################################
##
#! @Section Operations
#! In this section we show the Francy HintMessage Operations.

#! @Description
#! Adds an info label with the format label: value
#! <P/>
#! @Arguments IsString, IsString
#! @Returns <C>HintMessage</C>
DeclareOperation("HintMessage", [IsMessageType, IsString, IsString]);

#############################################################################
##
#! @Section Global
#! In this section we show the Global Callback Francy Records for multi purpose.

#! @Description
#! The various types of Graph supported.
#! @Returns <C>rec</C> of <C>MessageType</C>
BindGlobal("MessageType", rec(
  INFO    := Objectify(MessageTypeObjectType, rec(value := "info")),
  ERROR   := Objectify(MessageTypeObjectType, rec(value := "error")),
  SUCCESS := Objectify(MessageTypeObjectType, rec(value := "success")),
  WARNING := Objectify(MessageTypeObjectType, rec(value := "warning")),
  DEFAULT := Objectify(MessageTypeObjectType, rec(value := "default"))
));