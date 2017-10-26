#############################################################################
##
#W  francy.gi                   FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##


#############################################################################
##
#M  PrintObj( <obj> ) . . . . . . . . . . . . .  override for IsFrancyObjects
##
InstallMethod(PrintObj,
  "a francy object",
  true,
  [ IsFrancyObject ],
  0,

function(object)

  Print(Clone(object));

  return;

end);

#############################################################################
##
#M  ViewObj( <obj> )  . . . . . . . . . . . . .  override for IsFrancyObjects
##
InstallMethod(ViewObj,
  "a francy object",
  true,
  [ IsFrancyObject ],
  0,

function(object)

  Print(Concatenation( "<",
       CategoriesOfObject( object )[1],
       "/", CategoriesOfObject( object )[2], ">"));

  return;

end);

#############################################################################
##
#M  Clone( <obj> )  . . . . . . . . simple properties clone for FrancyObjects
##
InstallMethod(Clone,
  "a francy object",
  true,
  [ IsFrancyObject ],
  0,

function(object)

  local tmpObj, rObj;

  rObj := rec();
  for tmpObj in NamesOfComponents(object) do
    # copy everything except functions! Functions will break json conversion!
    if not IsFunction( object!.(tmpObj)) then
      rObj!.(tmpObj) := object!.(tmpObj);
    fi;
  od;

  return rObj;

end);

#############################################################################
##
#M  Clone( <obj> )  . . . . . . . . simple properties clone for FrancyObjects
##
InstallOtherMethod(Clone,
  "a francy object",
  true,
  [ IsRecord ],
  0,

function(object)

  local tmpObj, rObj;

  rObj := rec();
  for tmpObj in NamesOfComponents(object) do
    # copy everything except functions!
    if not IsFunction(object!.(tmpObj)) then
      rObj!.(tmpObj) := object!.(tmpObj);
    fi;
  od;

  return rObj;
end);

#############################################################################
##
#M  Flat( <obj> )  . . . . . . . . simple properties clone for FrancyObjects
##
InstallMethod(Flat,
  "a record",
  true,
  [ IsRecord ],
  0,

function(record)

  return FlattenHelper(record, rec());
end);

#############################################################################
##
#M  Clone( <obj> )  . . . . . . . . simple properties clone for FrancyObjects
##
InstallMethod(FlattenHelper,
  "a record",
  true,
  [ IsRecord, 
    IsRecord ],
  0,

function(record, flatten)
  local tmpObj;

  for tmpObj in NamesOfComponents(record) do
    if IsRecord(record!.(tmpObj)) then
      FlattenHelper(record!.(tmpObj), flatten);
    else
      flatten!.(tmpObj) := record!.(tmpObj);
    fi;
  od;

  return flatten;
end);

#############################################################################
##
#M  FlattenRecord( <obj> )  . . . . simple properties clone for FrancyObjects
##
InstallMethod(FlattenRecord,
  "a record",
  true,
  [ IsRecord ],
  0,

function(record)
  local list, obj;

  list := [];
  for obj in NamesOfComponents(record) do
    Add(list, Flat(record!.(obj)!.model));
  od;

  return list;
end);