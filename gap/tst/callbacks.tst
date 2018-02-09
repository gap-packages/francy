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
gap> arg!.value := "Manuel"; # simulate the user input
"Manuel"
gap> Trigger(GapToJsonString(Sanitize(callback)));
"Hello Manuel"