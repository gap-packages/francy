#
# francy: Interactive Discrete Mathematics in GAP
#

#############################################################################
##
#M  FrancyRenderer( <rendererType> )
##
## Create a renderer object.
##
InstallMethod(FrancyRenderer,
  "renderer type",
  true,
  [IsFrancyRendererType],
  0,
function(rendererType)
  return Objectify(FrancyRendererObjectType, rec(
    value := rendererType!.value
  ));
end);
