#############################################################################
##
#W  francy.gd                   FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##
#! @Chapter Francy Core
#!
#! Francy is responsible for generating JSON metadata which allows external
#! tools / libraries / frameworks to add a visual representation. See Francy-JS.
#! <P/>
#! Please see Francy-JS for client implementation.


#############################################################################
##
#! @Section Categories
#! In this section we show the Francy Core Categories.

#! @Description
#! Identifies all <C>Objects</C> in Francy.
DeclareCategory("IsFrancyObject", IsObject);

#! @Description
#! Identifies all Default records in Francy.
DeclareCategory("IsFrancyDefaults", IsFrancyObject);

#! @Description
#! Identifies all Type records in Francy.
DeclareCategory("IsFrancyType", IsFrancyObject);


#############################################################################
##
#! @Section Families
#! In this section we show the Francy Core Families.

#! @Description
#! This Family identifies all objects of this package 
#! @Returns <C>FrancyFamily<C>
BindGlobal("FrancyFamily", NewFamily("FrancyFamily", IsFrancyObject));


#############################################################################
##
#! @Section Representations
#! In this section we show the Francy Core Representations.

#! @Description
#! Checks whether an <C>Object</C> has a <C>FrancyType</C> internal representation.
DeclareRepresentation("IsFrancyTypeRep", 
  IsComponentObjectRep and IsAttributeStoringRep, 
  ["value"], IsFrancyType);

#############################################################################
##
#! @Section Global
#! In this section we show the Francy Core Types

#! @Description
#! Specifies the content-type mime of this package. 
#! A MIME type stands for "Multipurpose Internet Mail Extensions" and it's a 
#! standard to identify a document on the internet.
#! @Returns application/vnd.francy+json
BindGlobal("FrancyMIMEType", "application/vnd.francy+json");
