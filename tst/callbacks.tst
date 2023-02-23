gap> RANDOM_SEED(1);
gap> MyFunction := function() return "Hello World!"; end;
function(  ) ... end
gap> callback := Callback(MyFunction);
<IsFrancyObject/IsCallback>
gap> 
gap> MyFunction := function(str) return Concatenation("Hello", " ", str); end;
function( str ) ... end
gap> callback := Callback(MyFunction);
<IsFrancyObject/IsCallback>
gap> arg := RequiredArg(ArgType.STRING, "Your Name");
<IsFrancyObject/IsCallback>
gap> Add(callback, arg);
gap> 
gap> MyFunction := function(args) return args; end;
function( args ) ... end
gap> callback := Callback(MyFunction, ["Hello World"]);
<IsFrancyObject/IsCallback>
gap> 
gap> MyFunction := function(a,b) return Concatenation(a, b); end;
function( a, b ) ... end
gap> callback := Callback(MyFunction, ["Hello "]);
<IsFrancyObject/IsCallback>
gap> arg := RequiredArg(ArgType.STRING, "Your Name");
<IsFrancyObject/IsCallback>
gap> Add(callback, arg);
gap> 
gap> MyFunction := function(a,b) return Concatenation(a, b); end;
function( a, b ) ... end
gap> 
gap> callback := Callback(TriggerType.DOUBLE_CLICK, MyFunction, ["Hello "]);
<IsFrancyObject/IsCallback>
gap> arg := RequiredArg(ArgType.STRING, "Your Name");
<IsFrancyObject/IsCallback>
gap> Add(callback, arg);
gap> 
gap> MyFunction := function(a,b) return Concatenation(a, b); end;
function( a, b ) ... end
gap> 
gap> callback := Callback(TriggerType.DOUBLE_CLICK, MyFunction, ["Hello "]);
<IsFrancyObject/IsCallback>
gap> arg := RequiredArg(ArgType.STRING, "Your Name");
<IsFrancyObject/IsCallback>
gap> SetTitle(arg, "Enter your name");
gap> Title(arg) = "Enter your name";
true
gap> Add(callback, arg);
gap> SetValue(arg, "Manuel"); # simulate the user input
gap> Value(arg) = "Manuel";
true
gap> Trigger(GapToJsonString(Sanitize(callback))); # simulate the external trigger
"Hello Manuel"
gap> 
gap> callback := NoopCallback();
<IsFrancyObject/IsCallback>
gap> 
gap> MyFunction := function(s, i, a, b) return Concatenation("string ", s, " number ", String(i), " selected ", String(a), " boolean ", String(b) ); end;
function( s, i, a, b ) ... end
gap> callback := Callback(MyFunction);
<IsFrancyObject/IsCallback>
gap> arg1 := RequiredArg(ArgType.STRING, "Your Name");
<IsFrancyObject/IsCallback>
gap> arg2 := RequiredArg(ArgType.NUMBER, "Your Age");
<IsFrancyObject/IsCallback>
gap> arg3 := RequiredArg(ArgType.SELECT, "Nodes Selected");
<IsFrancyObject/IsCallback>
gap> arg4 := RequiredArg(ArgType.BOOLEAN, "Activate");
<IsFrancyObject/IsCallback>
gap> Add(callback, [arg1, arg2, arg3, arg4]);
gap> Remove(callback, arg1);
<IsFrancyObject/IsCallback>
gap> Add(callback, arg1);
gap> Remove(callback, [arg2]);
<IsFrancyObject/IsCallback>
gap> SetConfirmMessage(callback, "confirmation message");
gap> ConfirmMessage(callback) = "confirmation message";
true