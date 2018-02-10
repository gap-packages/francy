################################################
#! @BeginChunk Example_Create_Callback_1
#! @BeginExample

MyFunction := function() return "Hello World!"; end;
callback := Callback(MyFunction);
Id(callback);

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

MyFunction := function(a,b) return Concatenation(a, b); end;

callback := Callback(TriggerType.DOUBLE_CLICK, MyFunction, ["Hello "]);
arg := RequiredArg(ArgType.STRING, "Your Name");
SetTitle(arg, "Enter your name");
Title(arg);
Add(callback, arg);
SetValue(arg, "Manuel"); # simulate the user input
Value(arg);
Trigger(GapToJsonString(Sanitize(callback))); # simulate the external trigger

#! @EndExample
#! @EndChunk

#################################################
#! @BeginChunk Example_Create_Callback_7
#! @BeginExample

callback := NoopCallback();

#! @EndExample
#! @EndChunk

#################################################
#! @BeginChunk Example_Create_Callback_8
#! @BeginExample

MyFunction := function(str) return Concatenation("Hello", " ", str); end;
callback := Callback(MyFunction);
arg1 := RequiredArg(ArgType.STRING, "Your Name");
arg2 := RequiredArg(ArgType.STRING, "Your Age");
Add(callback, [arg1, arg2]);
Remove(callback, arg1);
Add(callback, arg1);
Remove(callback, [arg2]);

#! @EndExample
#! @EndChunk