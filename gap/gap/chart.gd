#############################################################################
##
#W  shape.gd                   FRANCY library                  Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##

#############################################################################
##
## Categories
##

#############################################################################
##
#C  IsChart( <obj> ) . . . . . . . . . . . category of shapes
##
DeclareCategory("IsChart", IsFrancyObject);

#############################################################################
##
#C  IsChartType( <obj> ) . . . . . . . . . . . category of shapes
##
DeclareCategory("IsChartType", IsFrancyObject);

#############################################################################
##
#C  IsChartDefaults( <obj> ) . . . . . . . . . . . category of shape defgaults
##
DeclareCategory("IsChartDefaults", IsFrancyDefaults);


#############################################################################
##
## Families
##

#############################################################################
##
#V  ShapeFamily
##
BindGlobal("ChartFamily", NewFamily("ChartFamily", IsChart));


#############################################################################
##
## Representations
##

#############################################################################
##
#R  IsShapeRep  . . . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation("IsChartRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["id", "type", "title", "options"], IsChart);

#############################################################################
##
#R  IsShapeDefaultsRep  . . . . . . . . . . . . . . . default representation
##
DeclareRepresentation("IsChartDefaultsRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["layer", "x", "y", "size", "highlight"], IsChartDefaults);

#############################################################################
##
#R  IsShapeTypeRep  . . . . . . . . . . . . . . . . .  default representation
##
DeclareRepresentation("IsChartTypeRep",
  IsComponentObjectRep and IsAttributeStoringRep,
  ["value"], IsChartType);


#############################################################################
##
## Operations
##

#############################################################################
##
#O  Chart( <category representation>, <canvas>, <defaults> )
#O  Chart( <category representation>, <canvas> )
##
## Every object to draw will be a subclass of this object. This will allow
## all the objects to contain the same base information.
##
DeclareOperation("Chart", [IsChartType, IsChartDefaults]);

#############################################################################
##
#O  Add( <graph>, <francy object> )
#O  Add( <graph>, <list of francy object> )
##
## 
##
DeclareOperation("Add", [IsChart, IsFrancyObject]);

#############################################################################
##
#O  Remove( <graph>, <francy object> )
#O  Remove( <graph>, <list of francy object> )
##
## 
##
DeclareOperation("Remove", [IsChart, IsFrancyObject]);