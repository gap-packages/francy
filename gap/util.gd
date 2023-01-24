#
# francy: Interactive Discrete Mathematics in GAP
#
#! @Chapter Francy Util
#!
#! Utility functions used across the package.


#! @Section Operations
#! In this section we show all Francy Util Operations.
#! Contains utility methods to handle Object printing/viewing, Sanitizing, etc.

#! @Description
#! This method will pretty print in jupyter environment.
#! @Returns <C>String</C>
DeclareOperation("JUPYTER_ViewString", [IsObject]);

#! @Description
#! This method will clone an <C>Object</C> and return a sanitized record. It traverses all the
#! components sanitizing when appropriate.
#! Sanitizing in this context means: replace everything that can't be converted into JSON, with its string representation!
#! @Arguments IsObject
#! @Returns <C>rec</C>
DeclareOperation("Sanitize", [IsObject]);

#! @Description
#! This method will merge the properties of 2 <C>IsFrancyObjects</C> into one <C>rec</C>.
#! @Arguments IsFrancyObject, IsFrancyObject
#! @Returns <C>rec</C>
DeclareOperation("MergeObjects", [IsFrancyObject, IsFrancyObject]);

#! @Description
#! This method will generate a sequential ID to be used as object identifier.
#! These IDs are used to identify the objects between the client and the server, and are crucial for the communication between both.
#! @Returns <C>IsString</C>
DeclareOperation("GenerateID", []);
