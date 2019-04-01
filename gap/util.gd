#
# francy: Interactive Discrete Mathematics in GAP
#
#! @Chapter Francy Util


#! @Section Operations
#! In this section we show all Francy Util Operations.
#! Contains utility methods to handle Object printing/viewing, Sanitizing, etc.

#! @Description
#! This method will pretty print in jupyter environment.
#! @Returns <C>String</C>
DeclareOperation("JUPYTER_ViewString", [IsObject]);

#! @Description
#! This method will clone a <C>Object</C> and return a sanitized record, traversing all the
#! components and sanitizing when appropriate.
#! Sanitizing in this context means, replace everything with it's string representation 
#! that can't be converted into JSON!
#! @Arguments IsObject
#! @Returns <C>rec</C>
DeclareOperation("Sanitize", [IsObject]);

#! @Description
#! This method will merge the properties of 2 <C>IsFrancyObjects</C> into one <C>rec</C>.
#! @Arguments IsFrancyObject, IsFrancyObject
#! @Returns <C>rec</C>
DeclareOperation("MergeObjects", [IsFrancyObject, IsFrancyObject]);

#! @Description
#! This method will generate a sequential ID for use as object identifier.
#! @Returns <C>IsString</C>
DeclareOperation("GenerateID", []);

#! @Description
#! Holds the latest generated ID.
#! @Returns <C>IsString</C>
BindGlobal("FrancyGeneratedID", 0);
MakeReadWriteGlobal("FrancyGeneratedID");
