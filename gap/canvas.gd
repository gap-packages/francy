#
# francy: Interactive Discrete Mathematics in GAP
#
#! @Chapter Francy Canvas
#! A <C>Canvas</C> is an area where the graphics representation of Francy live.
#! <P/>
#! Please see Francy-JS for client implementation.


#! @Section Categories
#! In this section we show all Francy Canvas Categories.

#! @Description
#! Identifies <C>Canvas</C> objects.
DeclareCategory("IsCanvas", IsFrancyObject);

#! @Description
#! Identifies <C>CanvasDefaults</C> objects.
DeclareCategory("IsCanvasDefaults", IsFrancyDefaultObject);


#! @Section Families
#! In this section we show all Francy Canvas Families.

#! @Description
#! This Family identifies all <C>Canvas</C> objects
#! @Returns <C>CanvasFamily</C>
BindGlobal("CanvasFamily", NewFamily("CanvasFamily", IsCanvas));


#! @Section Representations
#! In this section we show all Francy Canvas Representations.

#! @Description
#! Checks whether an <C>Object</C> has a <C>Canvas</C> internal representation.
DeclareRepresentation("IsCanvasRep", IsComponentObjectRep, [], IsCanvas);

#! @Description
#! Checks whether an <C>Object</C> has a <C>CanvasDefaults</C> internal representation.
DeclareRepresentation("IsCanvasDefaultsRep", IsComponentObjectRep, [], IsCanvasDefaults);

#! @Description
#! Creates a new type for <C>Canvas/C> objects.
BindGlobal("CanvasObjectType", NewType(CanvasFamily, IsCanvas and IsCanvasRep));


#! @Section Operations
#! In this section we show all Francy Canvas Operations.

#! @Description
#! A <C>Canvas</C> represents the base element where rendering happens. This object is inspired by
#! the HTML canvas tag element, which is used to draw graphics in runtime via JavaScript.
#! Examples:
#! <P/>
#! Create a simple <C>Canvas</C>:
#! @InsertChunk Example_Create_Canvas_1
#! <P/>
#! @Arguments IsString(title)[, IsCanvasDefaults]
#! @Returns <C>Canvas</C>
DeclareOperation("Canvas", [IsString, IsCanvasDefaults]);

#! @Description
#! Adds a <C>FrancyGraph</C> to a specific <C>Canvas</C>.
#! Well, the api is abstract enough to allow Adding a list of <C>IsFrancyGraph</C> 
#! to a canvas, but this results in setting the graph property only to the last 
#! <C>IsFrancyGraph</C> in the list.
#! @Arguments IsCanvas, [IsFrancyGraph, List(IsFrancyGraph)]
#! @Returns <C>Canvas</C>
#DeclareOperation("Add", [IsCanvas, IsFrancyGraph]);

#! @Description
#! Removes a <C>FrancyGraph</C> from a <C>Canvas</C>.
#! @Arguments IsCanvas, [IsFrancyGraph, List(IsFrancyGraph)]
#! @Returns <C>Canvas</C>
#DeclareOperation("Remove", [IsCanvas, IsFrancyGraph]);

#! @Description
#! Adds a <C>Chart</C> to a specific <C>Canvas</C>.
#! Well, the api is abstract enough to allow Adding a list of <C>IsChart</C> 
#! to a canvas, but this results in setting the graph property only to the last 
#! <C>IsChart</C> in the list.
#! @Arguments IsCanvas, [IsChart, List(IsChart)]
#! @Returns <C>Canvas</C>
#DeclareOperation("Add", [IsCanvas, IsChart]);

#! @Description
#! Removes a <C>Chart</C> from a <C>Canvas</C>.
#! @Arguments IsCanvas, [IsChart, List(IsChart)]
#! @Returns <C>Canvas</C>
#DeclareOperation("Remove", [IsCanvas, IsChart]);

#! @Description
#! Adds a <C>Menu</C> to a specific <C>Canvas</C>.
#! @Arguments IsCanvas, [IsMenu, List(IsMenu)]
#! @Returns <C>Canvas</C>
#DeclareOperation("Add", [IsCanvas, IsMenu]);

#! @Description
#! Removes a <C>Menu</C> from a <C>Canvas</C>.
#! @Arguments IsCanvas, [IsMenu, List(IsMenu)]
#! @Returns <C>Canvas</C>
#DeclareOperation("Remove", [IsCanvas, IsMenu]);

#! @Description
#! Adds a <C>FrancyMessage</C> to a specific <C>IsCanvas</C>.
#! @Arguments IsCanvas, [IsFrancyMessage, List(IsFrancyMessage)]
#! @Returns <C>IsCanvas</C>
#DeclareOperation("Add", [IsCanvas, IsFrancyMessage]);

#! @Description
#! Removes a <C>FrancyMessage</C> from a specific <C>IsCanvas</C>.
#! @Arguments IsCanvas, [IsFrancyMessage, List(IsFrancyMessage)]
#! @Returns <C>IsCanvas</C>
#DeclareOperation("Remove", [IsCanvas, IsFrancyMessage]);

#! @Description
#! Adds a <C>FrancyRenderer</C> to a specific <C>IsCanvas</C>.
#! @Arguments IsCanvas, [IsFrancyRenderer, List(IsFrancyRenderer)]
#! @Returns <C>IsCanvas</C>
#DeclareOperation("Add", [IsCanvas, IsFrancyRenderer]);

#! @Description
#! Removes a <C>FrancyRenderer</C> from a specific <C>IsCanvas</C>.
#! @Arguments IsCanvas, [IsFrancyRenderer, List(IsFrancyRenderer)]
#! @Returns <C>IsCanvas</C>
#DeclareOperation("Remove", [IsCanvas, IsFrancyRenderer]);

#! @Description
#! Generates the JSON metadata model representation of the <C>Canvas</C> object and all children objects.
#! @Arguments IsCanvas
#! @Returns <C>rec</C> with the JSON metadata model representation of the <C>Canvas</C>
DeclareOperation("Draw", [IsCanvas]);

#! @Description
#! Generates an HTML page with an offline version od Francy JS and opens it within the default browser of the system.
#! @Arguments IsCanvas
#! @Returns <C>IsString</C> with HTML generated
DeclareOperation("DrawSplash", [IsCanvas]);


#! @Section Global
#! In this section we show all Global Francy Canvas Records for multi purpose.

#! @Description
#! This <C>rec</C> holds all the default settings for a <C>Canvas</C>.
BindGlobal("CanvasDefaults", Objectify(NewType(CanvasFamily, IsCanvasDefaults and IsCanvasDefaultsRep), rec(
  width          := 800,
  height         := 600,
  zoomToFit      := true,
  texTypesetting := true
)));


#! @Section Attributes
#! In this section we show the Francy Attributes.

#! @Description
#! The Width of the <C>Canvas</C> in pixels <C>IsPosInt</C>.
#! @Returns <C>IsPosInt</C>
DeclareAttribute("Width", IsCanvas);
InstallMethod(Width, "canvas", [IsCanvas], o -> o!.width);
#! @Description
#! Sets the Width of the <C>Canvas</C> in pixels <C>IsPosInt</C>.
#! @Arguments IsCanvas, IsPosInt
InstallMethod(SetWidth, "canvas, positive int", [IsCanvas, IsPosInt], function(o, i) o!.width := i; end);

#! @Description
#! The Height of the <C>Canvas</C> in pixels <C>IsPosInt</C>.
#! @Returns <C>IsPosInt</C>
DeclareAttribute("Height", IsCanvas);
InstallMethod(Height, "canvas", [IsCanvas], o -> o!.height);
#! @Description
#! Sets the Height of the <C>Canvas</C> in pixels <C>IsPosInt</C>.
#! @Arguments IsCanvas, IsPosInt
InstallMethod(SetHeight, "canvas, positive int", [IsCanvas, IsPosInt], function(o, i) o!.height := i; end);

#! @Description
#! <C>ZoomToFit</C> is a property that sets the objects within the <C>Canvas</C> to fit within the GUI visible area,
#! after rendering in the client implementation.
#! @Returns <C>IsBool</C> True if enabled otherwise False
DeclareAttribute("ZoomToFit", IsCanvas);
InstallMethod(ZoomToFit, "canvas", [IsCanvas], o -> o!.zoomToFit);
#! @Description
#! <C>ZoomToFit</C> is a property that sets the objects within the <C>Canvas</C> to fit within the GUI visible area.
#! @Arguments IsCanvas, IsBool
InstallMethod(SetZoomToFit, "canvas, boolean", [IsCanvas, IsBool], function(o, b) o!.zoomToFit := b; end);

#! @Description
#! The <C>Canvas</C> title to show on the GUI.
#! @Returns <C>IsString</C> with the title of the object
DeclareAttribute("Title", IsCanvas);
InstallMethod(Title, "canvas", [IsCanvas], o -> o!.title);
#! @Description
#! Sets the title of the <C>Canvas</C>.
#! @Arguments IsCanvas, IsString
InstallMethod(SetTitle, "canvas, string", [IsCanvas, IsString], function(o, s) o!.title := s; end);

#! @Description
#! Enables usage of TeX Typesetting on the client implementation, if supported.
#! @Returns <C>IsBool</C> with the title of the object
DeclareAttribute("TexTypesetting", IsCanvas);
InstallMethod(TexTypesetting, "canvas", [IsCanvas], o -> o!.texTypesetting);
#! @Description
#! Sets TeX Typesetting on the canvas objects.
#! @Arguments IsCanvas, IsBool
InstallMethod(SetTexTypesetting, "canvas, boolean", [IsCanvas, IsBool], function(o, b) o!.texTypesetting := b; end);
