#
# francy: Interactive Discrete Mathematics in GAP
#
#! @Chapter Francy Messages
#! <C>FrancyMessage</C> is an object that holds a message.
#! <P/>
#! These messages can be used to provide information to users in the form of <C>SUCCESS</C>, <C>INFO</C>, <C>WARNING</C>, <C>ERROR</C>.
#! It is up to the client implementation to handle these messages and their types in a fashionable manner.
#! Please see Francy-JS for client implementation.


#! @Section Categories
#! In this section we show all Francy FrancyMessage Categories.

#! @Description
#! Identifies <C>FrancyMessage</C> objects.
DeclareCategory("IsFrancyMessage", IsFrancyObject);

#! @Description
#! Identifies <C>MessageType</C> objects.
DeclareCategory("IsFrancyMessageType", IsFrancyObject);


#! @Section Families
#! In this section we show all Francy FrancyMessage Families.

#! @Description
#! This Family identifies all <C>FrancyMessages</C> objects.
#! @Returns <C>FrancyMessageFamily</C>
BindGlobal("FrancyMessageFamily", NewFamily("FrancyMessageFamily", IsFrancyObject));


#! @Section Representations
#! In this section we show all Francy FrancyMessage Representations.

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


#! @Section Operations
#! In this section we show all Francy FrancyMessage Operations.

#! @Description
#! Adds an info label with the format "label: value"
#! <P/>
#! Examples:
#! <P/>
#! Create <C>FrancyMessage</C> of all types within a canvas:
#! @InsertChunk Example_Create_Message_1
#! <P/>
#! @Arguments IsString, IsString
#! @Returns <C>FrancyMessage</C>
DeclareOperation("FrancyMessage", [IsFrancyMessageType, IsString, IsString]);


#! @Section Global
#! In this section we show all Global FrancyMessage Records for multi purpose.

#! @Description
#! The various types of <C>FrancyMessage</C> supported.
#! @Returns <C>rec</C> of <C>MessageType</C>
BindGlobal("FrancyMessageType", rec(
  INFO    := Objectify(FrancyMessageTypeObjectType, rec(value := "info")),
  ERROR   := Objectify(FrancyMessageTypeObjectType, rec(value := "error")),
  SUCCESS := Objectify(FrancyMessageTypeObjectType, rec(value := "success")),
  WARNING := Objectify(FrancyMessageTypeObjectType, rec(value := "warning")),
  DEFAULT := Objectify(FrancyMessageTypeObjectType, rec(value := "default"))
));


#! @Section Attributes
#! In this section we show all FrancyMessage Core Attributes

#! @Description
#! A title on a <C>FrancyMessage</C> is used to display the title information to the user.
#! @Returns <C>IsString</C> with the title of the object
DeclareAttribute("Title", IsFrancyMessage);
InstallMethod(Title, "message", [IsFrancyMessage], o -> o!.title);
#! @Description
#! Sets the title of the <C>FrancyMessage</C>.
#! @Arguments IsFrancyMessage, IsString
InstallMethod(SetTitle, "message, string", [IsFrancyMessage, IsString], function(o, s) o!.title := s; end);

#! @Description
#! A value on a <C>FrancyMessage</C> is used to display the information to the user.
#! @Returns <C>IsString</C> with the title of the object
DeclareAttribute("Value", IsFrancyMessage);
InstallMethod(Value, "message", [IsFrancyMessage], o -> o!.value);
#! @Description
#! Sets the actual message of the <C>FrancyMessage</C>.
#! @Arguments IsFrancyMessage, IsString
InstallMethod(SetValue, "message, string", [IsFrancyMessage, IsString], function(o, s) o!.value := s; end);

#! @Description
#! Add a <C>Callback</C> to a specific <C>FrancyMessage</C>.
#! @Arguments IsFrancyMessage, [IsCallback, List(IsCallback)]
#! @Returns <C>FrancyMessage</C>
#DeclareOperation("Add", [IsFrancyMessage, IsCallback]);

#! @Description
#! Remove a <C>Callback</C> from a specific <C>FrancyMessage</C>.
#! @Arguments IsFrancyMessage, [IsCallback, List(IsCallback)]
#! @Returns <C>FrancyMessage</C>
#DeclareOperation("Remove", [IsFrancyMessage, IsCallback]);
