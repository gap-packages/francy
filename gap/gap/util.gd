#############################################################################
##
#W  util.gd                   FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##
#! @Chapter Francy Util


#############################################################################
##
#! @Section Operations
#! In this section we show the Francy Util Operations.

#! @Description
#! This method will clone a <C>Object</C> and return a record, traversing all the
#! components and sanitizing when appropriate.
#! This method removes components of type IsFunction, as they can't be
#! converted to a JSON string!
#! @Arguments IsObject
#! @Returns <C>rec</C>
DeclareOperation("Sanitize", [IsObject]);

#! @Description
#! This method will merge the properties of 2 <C>IsFrancyObjects</C> into one <C>rec</C>.
#! @Arguments IsFrancyObject, IsFrancyObject
#! @Returns <C>rec</C>
DeclareOperation("MergeObjects", [IsFrancyObject, IsFrancyObject]);
