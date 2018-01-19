#############################################################################
##
#W  francy.gd                   FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##
#! @Chapter Francy Core
#!
#! Francy is responsible for generating JSON metadata which allows external
#! tools / libraries / frameworks to add a visual representation. This JSON
#! representation defines the contract between this package (server) and a
#! GUI framework (client), this enables complete SoC (Separation of Concerns).
#! <P/>
#! A JSON schema is present and can be used to produce clients for this package.
#! See TODO link to schema
#! Francy can be used to provide a graphical interactive environment on existing
#! GAP packages.
#! <P/>
#! Although Francy has the concept of a <C>Graph</C>, it does not implement any 
#! Mathematics Graphs Theory.
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

# Calling this "type" *might* be a confusing choice (but I don't have a better
# suggestion)
# you also do not say what a "Type" is
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

# As mentioned yesterday "IsAttributeStoringRep" might be a bad choice: If you use
# attributes (as I will suggest), and an object is in attribute storing representation,
# then once set an attribute will not change its value (so say the position of a node in a
# graph cannot change anymore after being setup). There are mutable attributes, but they are
# mostly a bad idea.
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
#! <P/>
#! Using this mime, the client should be able to now how to render the JSON Metadata.
#! @Returns <C>IsString</C> with content 'application/vnd.francy+json'
BindGlobal("FrancyMIMEType", "application/vnd.francy+json");
