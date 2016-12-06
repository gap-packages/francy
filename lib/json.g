
#############################################################################
##
#F  ToJson( record )  . . . . . . . . . . . . . . . . . . . . . . . . . . .
## Rudimentary function that converts a record into its json string representation
##
BindGlobal( "ToJson", function(object)
    local key, value, iterator;
    iterator := Iterator(NamesOfComponents(object));
    Print("{");
    while not IsDoneIterator(iterator) do
       key := NextIterator(iterator);
       value := object!.(key);
       Print("\""); Print(key); Print("\"");
       Print(":");
       if IsString(value) then
          Print("\""); Print(value); Print("\"");
       else
          Print(value);
       fi;
       if not IsDoneIterator(iterator) then
          Print(",");
       fi;
    od;
    Print("}");
end );
