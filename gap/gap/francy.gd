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
DeclareCategory("IsFrancyDefaultObject", IsObject);

#! @Description
#! Identifies all Type records in Francy.
DeclareCategory("IsFrancyTypeObject", IsObject);


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

#############################################################################
##
#! @Section Attributes
#! In this section we show the Francy Core Attributes

#! @Description
#! All Objects created in Francy have a generated identifier.
#! @Returns <C>IsString</C> with the id of the object
DeclareAttribute("Id", IsFrancyObject);
InstallMethod( Id, "francyObject", [IsFrancyObject], o -> o!.id);

#! @Description
#! Use with care! Changing the unique ID might be useful in certain cases, 
#! but bare in mind it might cause unexpected behavior if you're not sure about!
InstallMethod(SetId, "francyObject, string", [IsFrancyObject, IsString], function(o, s) o!.id := s; end);
