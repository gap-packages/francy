#############################################################################
##
#W  callback.gd                 FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##
#! @Chapter Francy Callbacks
#!
#! <C>Callbacks</C> are objects that hold a function, a list of arguments 
#! and a trigger event. <C>Callbacks</C> are used to execute GAP code 
#! from a remote client using the <C>Trigger</C> Operation.
#! <P/>
#! <C>Callbacks</C> can be added directly to <C>Menus</C> and/or <C>Shapes</C>.
#! <P/>
#! Please see Francy-JS for client implementation.


#############################################################################
##
#! @Section Categories
#! In this section we show the Francy Callback Categories.

#! @Description
#! Identifies <C>Callback</C> objects.
DeclareCategory("IsCallback", IsFrancyObject);

#! @Description
#! Identifies <C>RequiredArg</C> objects.
DeclareCategory( "IsRequiredArg", IsFrancyObject );

#! @Description
#! Identifies <C>ArgType</C> objects.
DeclareCategory("IsArgType", IsFrancyObject);

#! @Description
#! Identifies <C>Trigger</C> objects.
DeclareCategory("IsTrigger", IsFrancyObject);

#! @Description
#! Identifies <C>TriggerEvent</C> objects.
DeclareCategory("IsTriggerEvent", IsFrancyObject);


#############################################################################
##
#! @Section Families
#! In this section we show the Francy Callback Families.

#! @Description
#! This Family identifies all <C>Callback</C> objects
#! @Returns <C>CallbackFamily</C>
BindGlobal("CallbackFamily", NewFamily("CallbackFamily", IsCallback));

#! @Description
#! This Family identifies all <C>Trigger</C> objects
#! @Returns <C>TriggerFamily</C>
BindGlobal("TriggerFamily", NewFamily("TriggerFamily", IsTrigger));


#############################################################################
##
#! @Section Representations
#! In this section we show the Francy Callback Representations.

#! @Description
#! Checks whether an <C>Object</C> has a <C>Callback</C> internal representation.
DeclareRepresentation("IsCallbackRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["id", "func", "knownArgs", "requiredArgs"], IsCallback);

#! @Description
#! Checks whether an <C>Object</C> has a <C>RequiredArg</C> internal representation.
DeclareRepresentation("IsRequiredArgRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["id", "type", "title", "value"], IsRequiredArg);

#! @Description
#! Checks whether an <C>Object</C> has a <C>ArgType</C> internal representation.
DeclareRepresentation("IsArgTypeRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["value"], IsArgType);

#! @Description
#! Checks whether an <C>Object</C> has a <C>TriggerEvent</C> internal representation.
DeclareRepresentation("IsTriggerEventRep",
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["value"], IsTriggerEvent);


#############################################################################
##
#! @Section Operations
#! In this section we show the Francy Callback Operations.

#! @Description
#! Creates a Callback object that holds a function and args to be executed 
#!  by a trigger based on a trigger type.
#! <P/>
#! **Please note, the Function must Return!**
#! <P/>
#! Examples:
#! <P/>
#! Create a simple <C>Callback</C> with no arguments:
#! @InsertChunk Example_Create_Callback_1
#! <P/>
#! Create a <C>Callback</C> with one required argument of type string:
#! @InsertChunk Example_Create_Callback_2
#! <P/>
#! Create a <C>Callback</C> with one known argument of type string:
#! @InsertChunk Example_Create_Callback_3
#! <P/>
#! Create a <C>Callback</C> with one known argument and one required argument of type string:
#! @InsertChunk Example_Create_Callback_4
#! <P/>
#! Create a <C>Callback</C> with one known argument and one required argument of type string and double click trigger event:
#! @InsertChunk Example_Create_Callback_5
#! <P/>
#! In order to see the output of the previous examples, we have to simulate the external call to <C>Trigger</C> operation:
#! @InsertChunk Example_Create_Callback_6
#! <P/>
#! @Arguments IsTriggerEvent, IsFunction, IsList(object)
#! @Returns <C>Callback</C>
DeclareOperation("Callback", [IsTriggerEvent, IsFunction, IsList]);

#! @Description
#! Creates an empty Callback object that does nothing.
#! Useful to create menu holders.
#! @Returns <C>Callback</C>
DeclareOperation("NoopCallback", []);

#! @Description
#! Creates a <C>Callback</C> <C>RequiredArg</C>.
#! <C>RequiredArg</C> is user input driven and required for the execution of a <C>Callback</C>
#! This value will be provided by the user.
#! @Arguments IsArgType, IsString(title)
#! @Returns <C>RequiredArg</C>
DeclareOperation("RequiredArg", [IsArgType, IsString]);

#! @Description
#! Add <C>RequiredArg</C> to a specific <C>Callback</C>.
#! @Arguments IsCallback, [IsRequiredArg, List(IsRequiredArg)]
#! @Returns <C>Callback</C>
DeclareOperation("Add", [IsCallback, IsRequiredArg]);

#! @Description
#! Remove required args from a specific callback.
#! @Arguments IsCallback, [IsRequiredArg, List(IsRequiredArg)]
#! @Returns <C>Callback</C>
DeclareOperation("Remove", [IsCallback, IsRequiredArg]);

#! @Description
#! Triggers a callback function in GAP.
#! Gets a JSON String object representation of the callback to execute.
#! @Arguments IsString(JSON)
#! @Returns the result of the execution of the <C>Callback</C> defined <C>Function</C>
DeclareOperation("Trigger", [IsString]);

#############################################################################
##
#! @Section Global
#! In this section we show the Global Callback Francy Records for multi purpose.

#! @Description
#! This <C>rec</C> holds all the records registered within a <C>Menu</C> or <C>Shape</C>.
#! This way it's possible to handle asynchronous calls to execute <C>Functions</C>
#! @Returns <C>rec</C> of <C>Callback</C>
BindGlobal("FrancyCallbacks", rec());

#! @Description
#! This <C>rec</C> holds all the <C>ArgType</C> supported by Francy.
#! The available <C>ArgType</C> specify the type of argument a <C>Callback</C> is expecting.
#! @Returns <C>rec</C> of <C>ArgType</C>: <C>ArgType.INTEGER</C>,<C>ArgType.BOOLEAN</C>,<C>ArgType.STRING</C>,<C>ArgType.NUMBER</C>
BindGlobal("ArgType", rec(
  INTEGER := Objectify(NewType(CallbackFamily, IsArgType and IsArgTypeRep), rec(value := "int")),
  BOOLEAN := Objectify(NewType(CallbackFamily, IsArgType and IsArgTypeRep), rec(value := "boolean")),
  STRING  := Objectify(NewType(CallbackFamily, IsArgType and IsArgTypeRep), rec(value := "string")),
  NUMBER  := Objectify(NewType(CallbackFamily, IsArgType and IsArgTypeRep), rec(value := "number"))
));

#! @Description
#! This <C>rec</C> holds all the <C>TriggerEvent</C> supported by Francy.
#! The available <C>TriggerEvent</C> specify the event that will trigger this <C>Callback</C>.
#! @Returns <C>rec</C> of <C>TriggerEvent</C>: <C>TriggerEvent.DOUBLE_CLICK</C> mouse event, double click, <C>TriggerEvent.RIGHT_CLICK</C> mouse event, right click or context-menu,  <C>TriggerEvent.CLICK</C> mouse event, ledft click and **default for <C>Menu</C> <C>Callback</C>**
BindGlobal("TriggerEvent", rec(
  DOUBLE_CLICK := Objectify(NewType(TriggerFamily, IsTriggerEvent and IsTriggerEventRep), rec(value := "dblclick")),
  RIGHT_CLICK  := Objectify(NewType(TriggerFamily, IsTriggerEvent and IsTriggerEventRep), rec(value := "context")),
  CLICK        := Objectify(NewType(TriggerFamily, IsTriggerEvent and IsTriggerEventRep), rec(value := "click"))
));
