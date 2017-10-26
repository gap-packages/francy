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
  [ IsShape,
    IsShape ],
  0,

function(source, target)

  local object;

  object := Objectify(NewType(LinkFamily, IsLink and IsLinkRep), rec(
    model := rec(
      id     := HexStringUUID(RandomUUID()),
      source := source!.model!.id,
      target := target!.model!.id
    )
  ));

  return object;

end);

InstallOtherMethod(Link,
  "a list of shape, a list of shape",
  true,
  [ IsList,
    IsList ],
  0,

function(source, target)

  local tmpList, tmpSrc, tmpTgt;

  tmpList := [];
  for tmpSrc in source do
    for tmpTgt in target do
      AddSet(tmpList, Link(tmpSrc, tmpTgt));
    od;
  od;

  return tmpList;

end);

