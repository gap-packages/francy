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
  [IsFrancyObject],
  0,
function(object)
  Print(Sanitize(object));
end);

#############################################################################
##
#M  ViewObj( <obj> )  . . . . . . . . . . . . .  override for IsFrancyObjects
##
InstallMethod(ViewObj,
  "a francy object",
  true,
  [IsFrancyObject],
  0,
function(object)
  Print(Concatenation( "<",
       CategoriesOfObject( object )[1],
       "/", CategoriesOfObject( object )[2], ">"));
end);

#############################################################################
##
#M  Sanitize( <obj> )  . . . . . . . . simple properties clone for FrancyObjects
##
## This method will clone a FrancyObject and return a record, traversing all the
## components and converting when appropriate.
##
## This method removes components of type IsFunction, as they can't be
## converted to JSON string.
##
InstallMethod(Sanitize,
  "an object",
  true,
  [IsObject],
  0,
function(object)
  return Sanitize(object, rec());
end);

#############################################################################
##
#M  Sanitize( <obj> )  . . . . . . . . simple properties clone for Records
##
## This method will clone a FrancyObject into the given record
##
InstallOtherMethod(Sanitize,
  "an object, a record",
  true,
  [IsObject,
   IsRecord],
  0,
function(object, record)
  local component, copy, tmp;
  copy := StructuralCopy(object);
  for component in NamesOfComponents(copy) do
    if IsRecord(copy!.(component)) or IsFrancyObject(copy!.(component)) then
      record!.(component) := rec();
      Sanitize(copy!.(component), record!.(component));
    elif IsList(copy!.(component)) and not IsString(copy!.(component)) then
      record!.(component) := [];
      Sanitize(copy!.(component), record!.(component));
    elif IsFunction(copy!.(component)) then
      record!.(component) := NameFunction(copy!.(component));
    else
      record!.(component) := copy!.(component);
    fi;
  od;
  return record;
end);

#############################################################################
##
#M  Sanitize( <obj> )  . . . . . . . . simple properties clone for Records
##
## This method will clone a FrancyObject into the given record
##
InstallOtherMethod(Sanitize,
  "a list, another list",
  true,
  [IsList,
   IsList],
  0,
function(list, result)
  local item;
  for item in list do
    # well, everything that is important for the client is in records
    # everything inside arrays we just convert to string
    Add(result, String(item));
  od;
  return result;
end);
#############################################################################
##
#O  MergeRecord( <obj>, <obj> )  . . . . . . . . simple properties merge
##
InstallMethod(MergeObjects,
  "an object, another object",
  true,
  [IsFrancyObject, IsFrancyObject],
  0,
function(dst, src)
  local name;
  for name in NamesOfComponents(src) do
    dst!.(name) := src!.(name);
  od;
  return dst;
end);
