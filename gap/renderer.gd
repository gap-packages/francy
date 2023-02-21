#
# francy: Interactive Discrete Mathematics in GAP
#
#! @Chapter Francy Renderers
#! <C>FrancyRenderer</C> is an object that holds the renderer name to be used by the client to display the graphics.
#! <P/>
#! Francy JS allows users to switch between renderers in runtime, but if the renderer is specified in the GAP code,
#! then the user won't be able to switch between renderers on the client side.
#! <P/>
#! This implementation knows only about the official supported renderers: <C>D3</C>, <C>Vis</C> and <C>Graphviz</C>.
#! Please see Francy-JS for client implementation.


#! @Section Categories
#! In this section we show all Francy FrancyRenderer Categories.

#! @Description
#! Identifies <C>FrancyRenderer</C> objects.
DeclareCategory("IsFrancyRenderer", IsFrancyObject);

#! @Description
#! Identifies <C>FrancyRendererType</C> objects.
DeclareCategory("IsFrancyRendererType", IsFrancyObject);

#! @Section Families
#! In this section we show all Francy FrancyRenderer Families.

#! @Description
#! This Family identifies all <C>FrancyRenderer</C> objects.
#! @Returns <C>FrancyRendererFamily</C>
BindGlobal("FrancyRendererFamily", NewFamily("FrancyRendererFamily", IsFrancyObject));


#! @Section Representations
#! In this section we show all Francy FrancyRenderer Representations.

#! @Description
#! Checks whether an <C>Object</C> has a <C>FrancyRenderer</C> internal representation.
DeclareRepresentation("IsFrancyRendererRep", IsComponentObjectRep, [], IsFrancyRenderer);

#! @Description
#! Checks whether an <C>Object</C> has a <C>FrancyRendererType</C> internal representation.
DeclareRepresentation("IsFrancyRendererTypeRep", IsComponentObjectRep, [], IsFrancyRendererType);

#! @Description
#! Creates a new type for <C>FrancyRenderer/C> objects.
BindGlobal("FrancyRendererObjectType", NewType(FrancyRendererFamily, IsFrancyRenderer and IsFrancyRendererRep));

#! @Description
#! Creates a new type for <C>FrancyRendererType/C> objects.
BindGlobal("FrancyRendererTypeObjectType", NewType(FrancyRendererFamily, IsFrancyRendererType and IsFrancyRendererTypeRep));


#! @Section Operations
#! In this section we show all Francy FrancyRenderer Operations.

#! @Description
#! Adds an info label with the format "label: value"
#! <P/>
#! Examples:
#! <P/>
#! Configure <C>FrancyRendererType.VIS</C> as the renderer for a specific canvas:
#! @InsertChunk Example_Create_Renderer_1
#! <P/>
#! @Arguments IsFrancyRendererType
#! @Returns <C>FrancyRenderer</C>
DeclareOperation("FrancyRenderer", [IsFrancyRendererType]);


#! @Section Global
#! In this section we show all Global FrancyRendererType records for multi purpose.

#! @Description
#! The various types of <C>FrancyRendererType</C> supported.
#! @Returns <C>rec</C> of <C>FrancyRendererType</C>
BindGlobal("FrancyRendererType", rec(
  D3                 := Objectify(FrancyRendererTypeObjectType, rec(value := "D3-Renderer")),
  VIS                := Objectify(FrancyRendererTypeObjectType, rec(value := "Vis-Renderer")),
  GRAPHVIZ_DOT       := Objectify(FrancyRendererTypeObjectType, rec(value := "GraphViz-Renderer.dot")),
  GRAPHVIZ_FDP       := Objectify(FrancyRendererTypeObjectType, rec(value := "GraphViz-Renderer.fdp")),
  GRAPHVIZ_NEATO     := Objectify(FrancyRendererTypeObjectType, rec(value := "GraphViz-Renderer.neato")),
  GRAPHVIZ_OSAGE     := Objectify(FrancyRendererTypeObjectType, rec(value := "GraphViz-Renderer.osage")),
  GRAPHVIZ_TWOPI     := Objectify(FrancyRendererTypeObjectType, rec(value := "GraphViz-Renderer.twopi")),
  GRAPHVIZ_CIRCO     := Objectify(FrancyRendererTypeObjectType, rec(value := "GraphViz-Renderer.circo")),
  GRAPHVIZ_PATCHWORK := Objectify(FrancyRendererTypeObjectType, rec(value := "GraphViz-Renderer.patchwork"))
));


#! @Section Attributes
#! In this section we show all FrancyRenderer Core Attributes


#! @Description
#! A value on a <C>FrancyRenderer</C> is used to specify which renderer will be used to draw the graphics on the client.
#! @Returns <C>IsString</C> with the renderer of the object
DeclareAttribute("Value", IsFrancyRenderer);
InstallMethod(Value, "renderer", [IsFrancyRenderer], o -> o!.value);
#! @Description
#! Sets the actual renderer <C>FrancyRenderer</C>.
#! @Arguments IsFrancyRenderer, IsString
InstallMethod(SetValue, "renderer, renderer type", [IsFrancyRenderer, IsFrancyRendererType], function(o, s) o!.value := s!.value; end);
