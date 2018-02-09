################################################
#! @BeginChunk Example_Create_Callback_1
#! @BeginExample

MyFunction := function() return "Hello World!"; end;
callback := Callback(MyFunction);

#! @EndExample
#! @EndChunk

#################################################
#! @BeginChunk Example_Create_Callback_2
#! @BeginExample

MyFunction := function(str) return Concatenation("Hello", " ", str); end;
callback := Callback(MyFunction);
arg := RequiredArg(ArgType.STRING, "Your Name");
Add(callback, arg);

#! @EndExample
#! @EndChunk

#################################################
#! @BeginChunk Example_Create_Callback_3
#! @BeginExample

MyFunction := function(args) return args; end;
callback := Callback(MyFunction, ["Hello World"]);

#! @EndExample
#! @EndChunk

#################################################
#! @BeginChunk Example_Create_Callback_4
#! @BeginExample

MyFunction := function(a,b) return Concatenation(a, b); end;
callback := Callback(MyFunction, ["Hello "]);
arg := RequiredArg(ArgType.STRING, "Your Name");
Add(callback, arg);

#! @EndExample
#! @EndChunk

#################################################
#! @BeginChunk Example_Create_Callback_5
#! @BeginExample

MyFunction := function(a,b) return Concatenation(a, b); end;

callback := Callback(TriggerType.DOUBLE_CLICK, MyFunction, ["Hello "]);
arg := RequiredArg(ArgType.STRING, "Your Name");
Add(callback, arg);

#! @EndExample
#! @EndChunk

#################################################
#! @BeginChunk Example_Create_Callback_6
#! @BeginExample

arg!.value := "Manuel"; # simulate the user input
Trigger(GapToJsonString(Sanitize(callback))); # simulate the external trigger

#! @EndExample
#! @EndChunk
