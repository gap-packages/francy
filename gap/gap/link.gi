#############################################################################
##
#W  shape.gd                   FRANCY library                  Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
#M  Link( <obj1>, <obj2> )
##
InstallMethod(Link,
  "a shape, another shape",
  true,
  [IsShape,
   IsShape],
  0,

function(source, target)
  return Objectify(NewType(LinkFamily, IsLink and IsLinkRep), rec(
    id     := HexStringUUID(RandomUUID()),
    source := source!.id,
    target := target!.id
  ));
end);

InstallMethod(Links,
  "a list of shape, a list of shape",
  true,
  [IsList,
   IsList],
  0,
function(source, target)
  local list, src, tgt;
  list := [];
  for src in source do
    for tgt in target do
      AddSet(list, Link(src, tgt));
    od;
  od;
  return list;
end);
