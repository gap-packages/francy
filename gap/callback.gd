#
# francy: Interactive Discrete Mathematics in GAP
#
#! @Chapter Francy Callbacks
#!
#! <C>Callbacks</C> are objects holding a <C>Function</C>, a list of arguments and a trigger event.
#! <C>Callbacks</C> are used to execute GAP code from a remote client using the <C>Trigger</C> Operation.
#! <P/>
#! <C>Callbacks</C> can be added directly to <C>Menus</C> and <C>Shapes</C>.
#! <P/>
#! Please see Francy-JS for client implementation.


#! @Section Categories
#! In this section we show all Francy Callback Categories.

#! @Description
#! Identifies <C>Callback</C> objects.
DeclareCategory("IsCallback", IsFrancyObject);

#! @Description
#! Identifies <C>RequiredArg</C> objects.
DeclareCategory("IsRequiredArg", IsFrancyObject);

#! @Description
#! Identifies <C>ArgType</C> objects.
DeclareCategory("IsArgType", IsFrancyTypeObject);

#! @Description
#! Identifies <C>TriggerType</C> objects.
DeclareCategory("IsTriggerType", IsFrancyTypeObject);


#! @Section Families
#! In this section we show all Francy Callback Families.

#! @Description
#! This Family identifies all <C>Callback</C> objects.
#! @Returns <C>CallbackFamily</C>
BindGlobal("CallbackFamily", NewFamily("CallbackFamily", IsCallback));


#! @Section Representations
#! In this section we show all Francy Callback Representations.

#! @Description
#! Checks whether an <C>Object</C> has a <C>Callback</C> internal representation.
DeclareRepresentation("IsCallbackRep", IsComponentObjectRep, [], IsCallback);

#! @Description
#! Checks whether an <C>Object</C> has a <C>RequiredArg</C> internal representation.
DeclareRepresentation("IsRequiredArgRep", IsComponentObjectRep, [], IsRequiredArg);

#! @Description
#! Checks whether an <C>Object</C> has a <C>ArgType</C> internal representation.
DeclareRepresentation("IsArgTypeRep", IsComponentObjectRep, [], IsArgType);

#! @Description
#! Checks whether an <C>Object</C> has a <C>TriggerType</C> internal representation.
DeclareRepresentation("IsTriggerTypeRep", IsComponentObjectRep, [], IsTriggerType);

#! @Description
#! Creates a new type for <C>Callback/C> objects.
BindGlobal("CallbackObjectType", NewType(CallbackFamily, IsCallback and IsCallbackRep));

#! @Description
#! Creates a new type for <C>RequiredArg/C> objects.
BindGlobal("RequiredArgObjectType", NewType(CallbackFamily, IsRequiredArg and IsRequiredArgRep));

#! @Description
#! Creates a new type for <C>ArgType/C> objects.
BindGlobal("ArgTypeObjectType",  NewType(CallbackFamily, IsArgType and IsArgTypeRep));

#! @Description
#! Creates a new type for <C>TriggerType/C> objects.
BindGlobal("TriggerTypeObjectType", NewType(CallbackFamily, IsTriggerType and IsTriggerTypeRep));


#! @Section Operations
#! In this section we show all Francy Callback Operations.

#! @Description
#! Creates a <C>Callback</C> object that holds a <C>Function</C> and the <C>RequiredArgs</C> to be executed by a <C>TriggerType</C>.
#! <P/>
#! **Please note, the Function must always <C>Return</C>**
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
#! Create a <C>Callback</C> with one known argument and one required argument of type string and double click trigger Type:
#! @InsertChunk Example_Create_Callback_5
#! <P/>
#! In order to see the output of the previous examples, we have to simulate the external call to <C>Trigger</C> operation:
#! @InsertChunk Example_Create_Callback_6
#! <P/>
#! Create a Noop Callback, useful for Menu holders, where no <C>Function</C> is required:
#! @InsertChunk Example_Create_Callback_7
#! <P/>
#! @Arguments IsTriggerType, IsFunction, IsList(object)
#! @Returns <C>Callback</C>
DeclareOperation("Callback", [IsTriggerType, IsFunction, IsList]);

#! @Description
#! Creates an empty <C>Callback</C> object that does nothing. Useful to create menu holders.
#! @Returns <C>Callback</C>
DeclareOperation("NoopCallback", []);

#! @Description
#! Creates a <C>Callback</C> with a <C>RequiredArg</C>.
#! <C>RequiredArg</C> is user input driven and required for the execution of a <C>Callback</C> <C>Function</C>.
#! The value for this argument will be provided by the user.
#! @Arguments IsArgType, IsString(title)
#! @Returns <C>RequiredArg</C>
DeclareOperation("RequiredArg", [IsArgType, IsString]);

#! @Description
#! Triggers a <C>Callback</C> <C>Function</C> in GAP.
#! Gets a JSON String object representation of the callback to execute.
#! @Arguments IsString(JSON)
#! @Returns the result of the execution of the <C>Callback</C> defined <C>Function</C>
DeclareOperation("Trigger", [IsString]);

#! @Description
#! Adds a <C>RequiredArg</C> to a specific <C>Callback</C>.
#! @Arguments IsCallback, [IsRequiredArg, List(IsRequiredArg)]
#! @Returns <C>Callback</C>
#DeclareOperation("Add", [IsCallback, IsRequiredArg]);

#! @Description
#! Removes a <C>RequiredArg</C> from a specific <C>Callback</C>.
#! @Arguments IsCallback, [IsRequiredArg, List(IsRequiredArg)]
#! @Returns <C>Callback</C>
#DeclareOperation("Remove", [IsCallback, IsRequiredArg]);


#! @Section Globals
#! In this section we show the Global Callback Francy Records for multi purpose.

#! @Description
#! This <C>rec</C> holds all the records registered within a <C>Menu</C> and <C>Shape</C>.
#! This way it is possible to handle asynchronous calls to <C>Functions</C>.
#! @Returns <C>rec</C> of <C>Callback</C>
BindGlobal("FrancyCallbacks", rec());

#! @Description
#! This <C>rec</C> holds all the <C>ArgType</C> supported by Francy.
#! The available <C>ArgType</C> specify the type of argument a <C>Callback</C> is expecting.
#! @Returns <C>rec</C> of <C>ArgType</C>: <C>ArgType.SELECT</C>,<C>ArgType.INTEGER</C>,<C>ArgType.BOOLEAN</C>,<C>ArgType.STRING</C>,<C>ArgType.NUMBER</C>
BindGlobal("ArgType", rec(
  BOOLEAN := Objectify(ArgTypeObjectType, rec(value := "boolean")),
  SELECT  := Objectify(ArgTypeObjectType, rec(value := "select")),
  STRING  := Objectify(ArgTypeObjectType, rec(value := "text")),
  NUMBER  := Objectify(ArgTypeObjectType, rec(value := "number"))
));

#! @Description
#! This <C>rec</C> holds all the <C>TriggerType</C> supported by Francy.
#! The available <C>TriggerType</C> specify the type of event that will trigger this <C>Callback</C>.
#! Supported event types are:
#! - <C>TriggerType.DOUBLE_CLICK</C> mouse event, double click, 
#! - <C>TriggerType.RIGHT_CLICK</C> mouse event, right click or context-menu,  
#! - <C>TriggerType.CLICK</C> mouse event, left click and **default for <C>Menu</C> <C>Callback</C>**
#! @Returns <C>rec</C> of <C>TriggerType</C>
BindGlobal("TriggerType", rec(
  DOUBLE_CLICK := Objectify(TriggerTypeObjectType, rec(value := "dblclick")),
  RIGHT_CLICK  := Objectify(TriggerTypeObjectType, rec(value := "context")),
  CLICK        := Objectify(TriggerTypeObjectType, rec(value := "click"))
));


#! @Section Attributes
#! In this section we show the Francy Callback Attributes

#! @Description
#! A title on a <C>RequiredArg</C> is used to retrieve input from a user.
#! @Returns <C>IsString</C> with the title of the object
DeclareAttribute("Title", IsRequiredArg);
InstallMethod(Title, "requiredArg", [IsRequiredArg], o -> o!.title);
#! @Description
#! Sets the title of the <C>RequiredArg</C>.
#! @Arguments IsRequiredArg, IsString
InstallMethod(SetTitle, "requiredArg, string", [IsRequiredArg, IsString], function(o, s) o!.title := s; end);

#! @Description
#! A value on a <C>RequiredArg</C> is the actual input value to be passed to back gap from the client GUI.
#! These values are stored as <C>String</C> for convenience, even if the <C>ArgType</C> specified for the <C>RequiredArg</C> is of another type.
#! Hence, explicit conversion is required within the <C>Callback</C> <C>Function</C>.
#! @Returns <C>IsString</C> with the value of the object
DeclareAttribute("Value", IsRequiredArg);
InstallMethod(Value, "requiredArg", [IsRequiredArg], o -> o!.value);
#! @Description
#! Sets the value of the <C>RequiredArg</C>.
#! @Arguments IsRequiredArg, IsString
InstallMethod(SetValue, "requiredArg, string", [IsRequiredArg, IsString], function(o, s) o!.value := s; end);

#! @Description
#! This will display a confirmation message before any <C>Callback</C> is executed.
#! @Returns a <C>IsString</C> with the message to be shown to the user before the <C>Callback</C> execution.
DeclareAttribute("ConfirmMessage", IsCallback);
InstallMethod(ConfirmMessage, "callback", [IsCallback], o -> o!.confirm);
#! @Description
#! Sets the value of the confirmation message to display to the user.
#! @Arguments IsRequiredArg, IsString
InstallMethod(SetConfirmMessage, "callback, string", [IsCallback, IsString], function(o, s) o!.confirm := s; end);