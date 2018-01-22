#############################################################################
##
#W  message.gd                    FRANCY library                  Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##
#! @Chapter Francy Messages
#! TODO FrancyMessage
#! <P/>
#! Please see Francy-JS for client implementation.


#############################################################################
##
#! @Section Categories
#! In this section we show the Francy FrancyMessage Categories.

#! @Description
#! Identifies <C>FrancyMessage</C> objects.
DeclareCategory("IsFrancyMessage", IsFrancyObject);

#! @Description
#! Identifies <C>MessageType</C> objects.
DeclareCategory("IsFrancyMessageType", IsFrancyObject);


#############################################################################
##
#! @Section Families
#! In this section we show the Francy FrancyMessage Families.

#! @Description
#! This Family identifies all <C>FrancyMessages</C> objects
#! @Returns <C>FrancyMessageFamily</C>
BindGlobal("FrancyMessageFamily", NewFamily("FrancyMessageFamily", IsFrancyObject));


#############################################################################
##
#! @Section Representations
#! In this section we show the Francy FrancyMessage Representations.

#! @Description
#! Checks whether an <C>Object</C> has a <C>FrancyMessage</C> internal representation.
DeclareRepresentation("IsFrancyMessageRep", IsComponentObjectRep, [], IsFrancyMessage);

#! @Description
#! Checks whether an <C>Object</C> has a <C>FrancyMessage</C> internal representation.
DeclareRepresentation("IsFrancyMessageTypeRep", IsComponentObjectRep, [], IsFrancyMessageType);

#! @Description
#! Creates a new type for <C>FrancyMessage/C> objects.
BindGlobal("FrancyMessageObjectType", NewType(FrancyMessageFamily, IsFrancyMessage and IsFrancyMessageRep));

#! @Description
#! Creates a new type for <C>FrancyMessageType/C> objects.
BindGlobal("FrancyMessageTypeObjectType", NewType(FrancyMessageFamily, IsFrancyMessageType and IsFrancyMessageTypeRep));

#############################################################################
##
#! @Section Operations
#! In this section we show the Francy FrancyMessage Operations.

#! @Description
#! Adds an info label with the format label: value
#! <P/>
#! @Arguments IsString, IsString
#! @Returns <C>FrancyMessage</C>
DeclareOperation("FrancyMessage", [IsFrancyMessageType, IsString, IsString]);

#############################################################################
##
#! @Section Global
#! In this section we show the Global Callback Francy Records for multi purpose.

#! @Description
#! The various types of Graph supported.
#! @Returns <C>rec</C> of <C>MessageType</C>
BindGlobal("FrancyMessageType", rec(
  INFO    := Objectify(FrancyMessageTypeObjectType, rec(value := "info")),
  ERROR   := Objectify(FrancyMessageTypeObjectType, rec(value := "error")),
  SUCCESS := Objectify(FrancyMessageTypeObjectType, rec(value := "success")),
  WARNING := Objectify(FrancyMessageTypeObjectType, rec(value := "warning")),
  DEFAULT := Objectify(FrancyMessageTypeObjectType, rec(value := "default"))
));

#############################################################################
##
#! @Section Attributes
#! In this section we show the Francy Core Attributes

DeclareAttribute("Title", IsFrancyMessage);
InstallMethod( Title, "message", [IsFrancyMessage], o -> o!.title);
InstallMethod( SetTitle, "message, string", [IsFrancyMessage, IsString], function(o, s) o!.title := s; end);

DeclareAttribute("Value", IsFrancyMessage);
InstallMethod( Value, "message", [IsFrancyMessage], o -> o!.value);
InstallMethod( SetValue, "message, string", [IsFrancyMessage, IsString], function(o, s) o!.value := s; end);
