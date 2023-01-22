#
# francy: Interactive Discrete Mathematics in GAP
#

#############################################################################
##
#M  PrintObj( <obj> )
##
## Override of the PrintObj function for IsFrancyObjects
##
InstallOtherMethod(PrintObj,
  "a francy object",
  true,
  [IsFrancyObject],
  0,
function(object)
  Print(Sanitize(object));
end);

#############################################################################
##
#M  ViewString( <obj> )
##
## Override of the ViewString function for IsFrancyObjects
##
InstallOtherMethod(ViewString,
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
#M  JUPYTER_ViewString( <obj> )
##
## Override of the JUPYTER_ViewString function for IsFrancyObjects
##
InstallOtherMethod(JUPYTER_ViewString,
  "a francy object",
  true,
  [IsFrancyObject],
  0,
  ViewString
);

#############################################################################
##
#M  Sanitize( <obj> )
##
## Simple properties clone utility function for FrancyObjects.
##
## This method will clone a FrancyObject and return a record, traversing all the
## components and converting any types that are not JSON serializable, when appropriate.
##
## This method removes components of type IsFunction, as they aren't
## serializable JSON compatible, it converts lists of objects into lists of strings
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
#M  Sanitize( <obj> )
##
## Simple properties clone for Records
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
#M  Sanitize( <obj> )
##
## Simple properties clone for Records
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
    # ...if you wonder, these are most likely known arguments that are in memory
    # and will be used to execute callbacks, so the client does nothing with them
    Add(result, String(item));
  od;
  return result;
end);

#############################################################################
##
#O  MergeRecord( <obj>, <obj> )
##
## Simple properties merge utility function.
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
#O  GenerateID( )
##
## Generates random IDs for objects identification and integrity between client and server implementations.
##
InstallMethod(GenerateID,
  "",
  true,
  [],
  0,
function()
  return Concatenation("F", HexStringUUID(RandomUUID()));
end);
