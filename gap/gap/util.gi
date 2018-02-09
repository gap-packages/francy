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
#M  ViewString( <obj> )  . . . . . . . . . . . . override for IsFrancyObjects
##
InstallMethod(ViewString,
  "a francy object",
  true,
  [IsFrancyObject],
  0,
function(object)
  return (Concatenation( "<",
      CategoriesOfObject( object )[1],
      "/", CategoriesOfObject( object )[2], ">"));
end);

#############################################################################
##
#M  JUPYTER_ViewString( <obj> )  . . . . . . . . override for IsFrancyObjects
##
InstallMethod(JUPYTER_ViewString,
  "a francy object",
  [IsFrancyObject],
  ViewString
);


#############################################################################
##
#M  Sanitize( <obj> )  . . . . . . . . simple properties clone for FrancyObjects
##
## This method will clone a FrancyObject and return a record, traversing all the
## components and converting when appropriate.
##
## This method removes components of type IsFunction, as they can't be
## converted to JSON string, converts lists of objects into lists of strings
## and everything else that is not a FrancyObject and therefore unknown!
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
## This method will return a sanitized list from another list
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
    # everything inside arrays we just convert to string...
    # ...if you wonder, these are most likely known arguments that are stored
    # in order to execute callbacks, so the client does nothing with them
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

#############################################################################
##
#O  GenerateID( ) . . . . . . . . . . . Generates sequential ids for objects
##
InstallMethod(GenerateID,
  "",
  true,
  [],
  0,
function()
  FrancyGeneratedID := FrancyGeneratedID + 1;
  return Concatenation("F", String(FrancyGeneratedID));
end);
