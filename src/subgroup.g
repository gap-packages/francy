#############################################################################
##
#W  subgroup.g                    FRANCY library               Manuel Martins
##
#Y  Copyright (C) 2016 Manuel Martins
##
## This is an example of the possible usage of Francy to produce interactive content


#############################################################################
##
#R  IsGraphicGraphRep . . . . . . . . . . . . . . .  representation for graph
##
if not IsBound(IsGraphicGraphRep) then
  DeclareRepresentation( "IsGraphicGraphRep",
    IsComponentObjectRep and IsAttributeStoringRep and IsGraphicCanvas and
    IsGraphicCanvasRep,
# we inherit those components from the sheet:
    [ "name", "width", "height", "gapMenu", "callbackName", "callbackFunc",
      "menus", "objects", "free",
# now our own components:
      "vertices","edges","selectedvertices","menutypes",
      "menuenabled","rightclickfunction","color"],
    IsGraphicCanvas );
fi;


#############################################################################
##
#R  IsGraphicPosetRep . . . . . . . . . . . . . . .  representation for poset
##
if not IsBound(IsGraphicPosetRep) then
  DeclareRepresentation( "IsGraphicPosetRep",
        IsComponentObjectRep and IsAttributeStoringRep and
        IsGraphicCanvas and IsGraphicCanvasRep and IsGraphicGraphRep,
# we inherit those components from the sheet:
    [ "name", "width", "height", "gapMenu", "callbackName", "callbackFunc",
      "menus", "objects", "free",
# now our own components:
      "levels",           # list of levels, stores current total ordering
      "levelparams",      # list of level parameters
      "selectedvertices", # list of selected vertices
      "menutypes",        # one entry per menu which contains list of types
      "menuenabled",      # one entry per menu which contains list of flags
      "rightclickfunction",    # the current function which is called when
                               # user clicks right button
      "color",            # some color infos for the case of different models
      "levelboxes",       # little graphic boxes for the user to handle levels
      "showlevelparams",  # flag, if level parameters are shown
      "showlevels"],      # flag, if levelboxes are shown
    IsGraphicCanvas );
fi;

#############################################################################
##
##
## FIXME...
#F  HasHasseProperty . . . . . . . . . . . . . . .  whether lattice has Hasse
DeclareFilter( "HasseProperty" );

#############################################################################
##
#F  CanCompareSubgroups  . . . . . . . . . . whether we can compare subgroups
##
## FIXME...
DeclareFilter( "CanCompareSubgroups");


#############################################################################
##
#O  GGLSylowSubgroup(<grp>)  . . . . . .  asks for prime, calls SylowSubgroup
##
##  This operation just asks for a prime by a little dialog and calls then
##  SylowSubgroup. Returns its result.
##
DeclareOperation( "GGLSylowSubgroup", [ IsGroup ] );

#############################################################################
##
#P  KnowsAllLevels . . . . . . . . . . . . . . . whether all levels are known
##
## FIXME...
DeclareFilter( "KnowsAllLevels" );

#############################################################################
##
#R  IsGraphicSubgroupLattice . . . . . .  repr. for graphic subgroup lattices
##
if not IsBound(IsGraphicSubgroupLattice) then
  DeclareRepresentation( "IsGraphicSubgroupLattice",
    IsComponentObjectRep and IsAttributeStoringRep and IsGraphicCanvas and
    IsGraphicCanvasRep and IsGraphicGraphRep and IsGraphicPosetRep,
# we inherit those components from the sheet:
    [ "name", "width", "height", "gapMenu", "callbackName", "callbackFunc",
      "menus", "objects", "free",
# and the following from being a poset:
      "levels",           # list of levels, stores current total ordering
      "levelparams",      # list of level parameters
      "selectedvertices", # list of selected vertices
      "menutypes",        # one entry per menu which contains list of types
      "menuenabled",      # one entry per menu which contains list of flags
      "rightclickfunction",    # the current function which is called when
                               # user clicks right button
      "color",            # some color infos for the case of different models
      "levelboxes",       # little graphic boxes for the user to handle levels
      "showlevels",       # flag, if levelboxes are shown
# now follow our own components:
      "group",            # the group
      "limits",           # a record with some limits, e.g. "conjugates"
      "menuoperations",   # configuration of menu operations
      "infodisplays",     # list of records for info displays, see below
      "largestlabel",     # largest used number for label
      "lastresult",       # list of vertices which are "green"
      "largestinflevel",  # largest used number for infinity-level
      "selector",         # the current text selector or "false"
      "WholeGroupVert",   # Vertex of the whole group
      "TrivialGroupVert"],# Vertex of the trivial subgroup
    IsGraphicCanvas );
fi;

#############################################################################
##
##  Some global constants for configuration purposes (see "ilatgrp.gi"):
##
#############################################################################

BindGlobal( "GGLfrom1", 1 );
BindGlobal( "GGLfrom2", 2 );
BindGlobal( "GGLfromSet", 3 );
BindGlobal( "GGLfromAny", 4 );
BindGlobal( "GGLto0", 0 );
BindGlobal( "GGLto1", 1 );
BindGlobal( "GGLtoSet", 2 );
BindGlobal( "GGLwhereUp", 1 );
BindGlobal( "GGLwhereDown", 2 );
BindGlobal( "GGLwhereAny", 0 );
BindGlobal( "GGLwhereBetween", 3 );
BindGlobal( "GGLrelsMax", 1 );
BindGlobal( "GGLrelsTotal", 2 );
BindGlobal( "GGLrelsNo", 0 );
BindGlobal( "GGLrelsDown", 3 );
BindGlobal( "GGLrelsUp", 4 );


#############################################################################
##
#F  GGLClosureGroup( <grp1>, <grp2>, ... ) . . . . . . calculates the Closure
#F  GGLClosureGroup( <grplist> ) . . . . . . . . . . . calculates the Closure
##
##  This function calculates the closure of a number of groups. It uses
##  ClosureGroup inductively. The groups can be specified as multiple
##  or as one list of groups.
##
BindGlobal( "GGLClosureGroup",
  function(arg)
    local grp,  i;
    if Length(arg) = 1 and IsList(arg[1]) then
      arg := arg[1];
    fi;

    # the number of arguments will always be at least 1!
    grp := arg[1];
    for i in [2..Length(arg)] do
      grp := ClosureGroup(grp,arg[i]);
    od;
    return grp;
  end );


#############################################################################
##
#F  GGLStringGroup( <G> ) . . . . . . . generates string that describes group
##
##  This function generates a string that represents a group. It is mainly
##  intended for fp groups and is actually ``stolen'' from some of the
##  `ViewObj' methods for fp groups. It covers also the case of free groups.
##  Note that the special case of G being a string, which is handled
##  first comes in handy, if functions return a warning instead of a group.
##
BindGlobal( "GGLStringGroup",

function(G)
  local st,stream;

  st := "";
  stream := OutputTextString(st,false);
  PrintTo(stream,G);
  CloseStream(stream);
  return st;
end );

#BindGlobal( "GGLStringGroup",
#
#function(G)
#
#  local st;   # used to build up the string
#
#  # Is this already a string?
#  if IsString(G) then
#    return G;
#  fi;
#
#  if IsFreeGroup(G) then
#    st := "<free group";
#    if IsGroupOfFamily( G )  then
#      if Length( GeneratorsOfGroup( G ) ) > 6  then
#        Append(st," with ");
#        Append(st,String(Length( GeneratorsOfGroup( G ) ) ));
#        Append(st," generators>" );
#      else
#        Append(st," on the generators ");
#        Append(st,String(List(GeneratorsOfGroup( G ),UnderlyingElement)));
#        Append(st,">" );
#      fi;
#    else
#      st := "Group(";
#      if HasGeneratorsOfGroup( G )  then
#        if not IsBound( G!.gensWordLengthSum )  then
#          G!.gensWordLengthSum
#            := Sum( List( GeneratorsOfGroup( G ), Length ) );
#        fi;
#        if G!.gensWordLengthSum <= 20  then
#          Append(st,String(List(GeneratorsOfGroup( G ),UnderlyingElement)));
#        else
#          Append(st,"<");
#          Append(st,String(Length( GeneratorsOfGroup( G ) )));
#          Append(st," generators>");
#        fi;
#      else
#        Append(st,", no generators known>" );
#      fi;
#      Append(st,")");
#    fi;
#  else  # no free group
#    if IsGroupOfFamily(G) then
#      st := "<fp group";
#      if HasSize(G) then
#        Append(st," of size ");
#        Append(st,String(Size(G)));
#      fi;
#      if Length(GeneratorsOfGroup(G)) > 6 then
#        Append(st," with ");
#        Append(st,String(Length(GeneratorsOfGroup(G))));
#        Append(st," generators>");
#      else
#        Append(st," on the generators ");
#        Append(st,String(List(GeneratorsOfGroup(G),UnderlyingElement)));
#        Append(st,">");
#      fi;
#    else
#      st := "Group(";
#      if HasGeneratorsOfGroup(G) then
#        if not IsBound(G!.gensWordLengthSum) then
#          G!.gensWordLengthSum:=Sum(List(GeneratorsOfGroup(G),
#                                        i->Length(UnderlyingElement(i))));
#        fi;
#        if G!.gensWordLengthSum <= 20 then
#          Append(st,String(List(GeneratorsOfGroup(G),UnderlyingElement)));
#        else
#          Append(st,"<");
#          Append(st,String(Length(GeneratorsOfGroup(G))));
#          Append(st," generators>");
#        fi;
#      else
#        Append(st,"<fp, no generators known>");
#      fi;
#      Append(st,")");
#    fi;
#  fi;   # no free group
#  return st;
#end);


#############################################################################
##
#F  GGLStringCosetTable( <G> ). generates string that describes a coset table
##
##  This function generates a string that represents a coset table. If the
##  table is small enough it is converted to a string. Otherwise some info
##  is generated.
##
BindGlobal( "GGLStringCosetTable",

function(CT)
  local st;
  if Length(CT) * Length(CT[1]) < 20 then
    return String(CT);
  else
    st := "<";
    Append(st,String(Length(CT)/2));
    Append(st," generators, ");
    Append(st,String(Length(CT[1])));
    Append(st," cosets>");
    return st;
  fi;
end );


#############################################################################
##
#F  GGLStringAbInvs( <invs> ). generates string that describes ab. invariants
##
##  This function generates a string that describes the abelian invariants.
##
BindGlobal( "GGLStringAbInvs",

function(invs)
  if invs = [] then
    return "perfect";
  else
    return String(invs);
  fi;
end );


#############################################################################
##
#F  GGLStringEpimorphism( <G> )  . generates string describing an epimorphism
##
##  This function generates a string that represents an epimorphism.
##  It just displays an arrow and the image.
##
BindGlobal( "GGLStringEpimorphism",

function(epi)
  local st;

  st := "<epi ->> ";
  Append(st,GGLStringGroup(Image(epi)));
  Append(st,">");
  return st;
end );


#############################################################################
##
#F  GGLFactorGroup( <G>, <N> ) . . . . . . computes factor group, if possible
##
##  This function checks, if <N> is a normal subgroup in <G>. If not, a
##  warning message is returned as a string. Otherwise, the operation
##  FactorGroup is called and the result is returned.
##
BindGlobal( "GGLFactorGroup",

function(G,N);
  if IsNormal(G,N) then
    return FactorGroup(G,N);
  else
    return "subgroup is not normal";
  fi;
end );


##
##  The configuration of the menu operations works as follows:
##  Every menu operation gets a record with the following entries, which
##  can take on the values described after the colon respectively:
##
##   name     : a string
##   op       : a GAP-Operation for group(s)
##   sheet    : true, false
##   parent   : true, false
##   from     : GGLfrom1, GGLfrom2, GGLfromSet, GGLfromAny
##   to       : GGLto0, GGLto1, GGLtoSet
##   where    : GGLwhereUp, GGLwhereDown, GGLwhereAny, GGLwhereBetween
##   plural   : true, false
##   rels     : GGLrelsMax, GGLrelsTotal, GGLrelsNo, GGLrelsDown, GGLrelsup
##   retsel   : true, false
##
##  Please use always these names instead of actual values because the values
##  of these variables can be subject to changes, especially because they
##  actually should be integers rather than strings.
##
##  <name> is the name appearing in the menu and info messages.
##  <op> is called to do the real work. The usage of <op> is however configured
##  by the other entries. <from> says, how many groups <op> gets as parameters.
##  It can be one group, exactly two, a list (GGLfromSet) of groups, or
##  a possibly empty list (GGLfromAny).
##  <sheet> says, if the graphic sheet is supplied as first parameter.
##  <parent> says, if the parent group is supplied as first/second parameter of
##  the call of the operation or not.
##  <to> says, how many groups <op> produces, it can be zero, one or a list
##  of groups (GGLtoSet). <where> determines what is known about the relative
##  position of the new groups with respect to the input groups of <op>.
##  GGLwhereUp means, that the new group(s) all contain all groups <op> was
##  called with. GGLwhereDown means, that the new group(s) are all contained
##  in all groups <op> was called with. GGLwhereAny means that nothing is
##  known about the result(s) with respect to this question. GGLwhereBetween
##  applies only for the case <from>=GGLfrom2 and means, that all produced
##  groups are contained in the first group and contain the second group
##  delivered to <op>. That means that in case such an operation exists
##  it will be checked before the call to the operation, which group is
##  contained in the other! It is an error if that is not the case!
##  <plural> is a flag which determines, if more than the
##  appropriate number of vertices can be selected. In this case <op> is called
##  for all subsets of the set of selected subgroups with the right number of
##  groups. This does not happen if <plural> is false. <rels> gives <op> the
##  possibility to return inclusion information about the newly calculated
##  subgroups. If <rels> is GGLrelsMax or GGLrelsTotal then <op> must return
##  a record with components `subgroups' which is a list of subgroups
##  generated as well as a component `inclusions' which lists all maximality
##  inclusions among these subgroups.
##  A maximality inclusion is given as a list `[<i>,<j>]' indicating that
##  subgroup number <i> is a maximal subgroup of subgroup number <j>, the
##  numbers 0 and 1+length(`subgroups') are used to denote <U> and <G>
##  respectively, this applies to the case <rels>=GGLrelsMax.
##  In the case <rels>=GGLrelsTotal each pair says that the first group is
##  contained in the second.
##  Again: The complete poset information must be returned!
##  In the case <rels>=GGLrelsNo nothing is known about the relative inclusions
##  of the results. <op> just returns a list of groups. If <rels>=GGLrelsDown
##  then the returned list is a descending chain and if <rels>=GGLrelsUp then
##  the returned list is an ascending chain.
##  If the record component "givesconjugates" is bound to true, then all
##  new vertices are put in the same class as the input vertex, so this
##  only makes sense for <from>=GGLfrom1. It is also only necessary for
##  those group types, where we don't have CanCompareSubgroups.
##  If retsel is bound and set to true, GGLMenuOps will return the groups
##  produced by the operation.


##
##  The configuration of the info displays works as follows:
##  Info displays come in two flavours:
##   (1) info about an attribute
##   (2) info from a function
##  The reason for (2) is that it could be interesting to see "relative"
##  information about a subgroup with respect to the parent group. This
##  cannot be an attribute because it does not belong to the group itself.
##  Every info display gets a record with the following components:
##   name      : a string
##   tostr     : a function (can be "String") which converts the value to
##               display into a string, if not bound "String" is taken
##  For case (1) we only have one more component:
##   attrib    : an attribute or property (the gap operation)
##  For case (2) we have:
##   func      : a function which returns the value that should be displayed
##   sheet     : true iff first parameter for <func> should be the sheet
##   parent    : true iff first/second parameter should be the parent group
##  if one of the last two is not bound it counts like "false".
##  The information produced by the functions "func" is cached in the record
##  "info" of the "data" part of the vertex under the component "name".
##
BindGlobal( "GGLInfoDisplaysForFiniteGroups",
        [ rec( name := "Size", attrib := Size ),
          rec( name := "Index", func := Index, parent := true ),
          rec( name := "IsAbelian", attrib := IsCommutative ),
          rec( name := "IsCentral", func := IsCentral, parent := true ),
          rec( name := "IsCyclic", attrib := IsCyclic ),
          rec( name := "IsNilpotent", attrib := IsNilpotentGroup ),
          rec( name := "IsNormal", func := IsNormal, parent := true ),
          rec( name := "IsPerfect", attrib := IsPerfectGroup ),
          rec( name := "IsSimple", attrib := IsSimpleGroup ),
          rec( name := "IsSolvable", attrib := IsSolvableGroup ),
        ] );

# Fix the problem with missing small groups library:
if HasIdGroup <> ReturnFalse then
    Add(GGLInfoDisplaysForFiniteGroups,
        rec( name := "Isomorphism", attrib := IdGroup ));
fi;


BindGlobal( "GGLInfoDisplaysForFpGroups",
        [ rec( name := "Index", func := Index, parent := true ),
          rec( name := "IsNormal", func := IsNormal, parent := true ),
          rec( name := "IsFpGroup", func := IsFpGroup, parent := false ),
# FIXME: could that be of any help: (?)
#          rec( name := "IsSubgroupFpGroup", func := IsSubgroupFpGroup,
#               parent := false ),
          rec( name := "Abelian Invariants", attrib := AbelianInvariants,
               tostr := GGLStringAbInvs ),
          rec( name := "CosetTable", attrib := CosetTableInWholeGroup,
               tostr := GGLStringCosetTable ),
          rec( name := "IsomorphismFpGroup", func := IsomorphismFpGroup,
               parent := false, tostr := GGLStringEpimorphism ),
          rec( name := "FactorGroup", func := GGLFactorGroup, parent := true,
               tostr := GGLStringGroup )
        ] );

#############################################################################
##
#O  GraphicSubgroupLattice(<G>) . . . . displays subgroup lattice graphically
#O  GraphicSubgroupLattice(<G>,<def>)  . . . . . . . . . . same with defaults
##
##  Displays a graphic poset which shows (parts of) the subgroup lattice of
##  the group <group>. Normally only the whole group and the trivial group are
##  shown (behaviour of "InteractiveLattice" in xgap3). Returns a
##  IsGraphicSubgroupLattice object. Calls DecideSubgroupLatticeType. See
##  there for details.
##
if not IsBound(GraphicSubgroupLattice) then
  DeclareOperation( "GraphicSubgroupLattice", [ IsGroup ] );
  DeclareOperation( "GraphicSubgroupLattice", [ IsGroup, IsRecord ] );
fi;

#############################################################################
##
#O  DecideSubgroupLatticeType ( <grp> ) . decides about the type of a lattice
##
##  This operation is called while creation of a new graphic subgroup lattice.
##  It has to decide about the type of the lattice. That means it has to
##  decide 5 questions:
##   1) Are all levels known right from the beginning?
##   2) Has the lattice the HasseProperty?
##   3) Can we test two subgroups for equality reasonably cheaply?
##   4) Shall we create a vertex for the trivial subgroup at the beginning?
##   5) What menu operations are possible?
##   6) What information is displayed on RightClick?
##  Returns a list. The first four entries are boolean values for  questions
##  1-4. Note that if the answer to 2 is true, then the answer to 3 must also
##  be true. The fifth and sixth entry are configuration lists as explained
##  in the configuration section of "ilatgrp.gi" for menu operations and
##  info displays respectively.
DeclareOperation( "DecideSubgroupLatticeType", [ IsGroup ] );

#############################################################################
##
#M  GraphicSubgroupLattice(<G>) . . . . displays subgroup lattice graphically
#M  GraphicSubgroupLattice(<G>,<def>)  . . . . . . . . . . same with defaults
##
##  Displays a graphic poset which shows (parts of) the subgroup lattice of
##  the group <group>. Normally only the whole group and the trivial group are
##  shown (behaviour of "InteractiveLattice" in xgap3). Returns a
##  IsGraphicSubgroupLattice object. Calls DecideSubgroupLatticeType. See
##  there for details.
##
InstallMethod( GraphicSubgroupLattice,
    "for a group, and a record",
    true,
    [ IsGroup, IsRecord ],
    0,

function(G, def)
  local   latticetype,  defaults,  poset,  indices,  levelheight,  l,  str,
          vmath,  v2,  v1, filters;

  latticetype := DecideSubgroupLatticeType(G);
  # we do some heuristics to avoid the trivial group:
  # if we know all levels, we probably can calc. Size, if we shall generate
  # a vertex for the trivial subgroup, we should also know Size!
  if latticetype[1] or latticetype[4] then
    # no trivial case:
    if Size(G) = 1 then
      return Error( "<G> must be non-trivial" );
    fi;
  fi;

  # we need a defaults record for the poset:
  defaults := rec(width := 800,
                  height := 600,
                  title := "GraphicSubgroupLattice");
  if HasName(G) then
    defaults.title := Concatenation(defaults.title," of ",Name(G));
  elif HasIdGroup(G) then
    defaults.title := Concatenation(defaults.title," of ",String(IdGroup(G)));
  fi;

  if IsBound(def.width) then defaults.width := def.width; fi;
  if IsBound(def.height) then defaults.height := def.height; fi;
  if IsBound(def.title) then defaults.title := def.title; fi;

  # we open a graphic poset:
  poset := GraphicCanvas(defaults.title,defaults.width,defaults.height);
  filters := G;

  # and make it a GraphicSubgroupLattice:
  SetFilterObj( filters, IsGraphicSubgroupLattice );

  poset!.group := G;

  # now the other filters, depending on type:
  if latticetype[1] then
    SetFilterObj(filters,KnowsAllLevels);
  fi;
  if latticetype[2] then
    SetFilterObj(filters,HasseProperty);
  fi;
  if latticetype[3] then
    SetFilterObj(filters,CanCompareSubgroups);
  fi;

  # initialize some components:
  poset!.selector := false;
  #InstallCallback(poset,"Close",
  #        function(poset)
  #          if poset!.selector <> false then
  #            Close(poset!.selector);
  #            poset!.selector := false;
  #          fi;
#
  #          # get rid of an old text selectors for Epis:
  #          if GGLEpiTextsel <> false then
  #            Close(GGLEpiTextsel);
  #            GGLEpiTextsel := false;
  #          fi;
  #        end);

  # set the limits:
  poset!.limits := rec(conjugates := 100);

  if KnowsAllLevels(poset) then
    # create all possible level parameters and levels:
    indices := DivisorsInt(Size(G));
    levelheight := QuoInt(poset!.height,Length(indices));
    for l in indices do
      str := "Index ";
      Append(str,String(l));
      Text(poset,10,10,str); # TODO add this method
      #ResizeLevel(poset,l,levelheight); # TODO maybe this one is not needed
    od;
  else
    # we just create one or two levels:
    Text(poset,10,10,"Index 1");  # for the whole group
    if latticetype[4] then
      if CanComputeSize(G) and Size(G) <> infinity then
        str := "Index ";
        Append(str,String(Size(G)));
        Text(poset,10,10,str);
      else
        Text(poset,10,10,"Size 1");
      fi;
    fi;
  fi;

  # create one or two initial vertices (G itself and trivial subgroup):
  # we seperate the mathematical data and the graphical data:
  vmath := rec(group := G,
               info := rec(Index := 1, IsNormal := true));
  vmath.class := [vmath];
  v2 := Circle(poset,1, 10, 30, rec(levelparam := vmath.info.Index, name := "G",
                               color := "green", draggable:=true));
  poset!.WholeGroupVert := v2;

  # we keep track of largest label:
  poset!.largestlabel := 1;
  # we keep track of largest number of infinity label
  poset!.largestinflevel := 0;

  if latticetype[4] then
    vmath := rec(group := TrivialSubgroup(G));
    if CanComputeSize(G) then
      vmath.info := rec(Index := Size(G));
    else
      vmath.info := rec();
    fi;
    vmath.class := [vmath];
    if CanComputeSize(G) and Size(G) <> infinity then
      v1 := Circle(poset,1, 20, 30, rec(levelparam := vmath.info.Index,name := "1",
                    color := "blue", draggable:=true));
    else
      v1 := Circle(poset,1, 30, 30, rec(levelparam := -1,name := "1",
                    color := "blue", draggable:=true));
    fi;

    # connect the two vertices
    Link(v1, v2); # TODO replace with Link
    poset!.TrivialGroupVert := v1;
  else
    poset!.TrivialGroupVert := false;
  fi;

  # <G> is selected at first
  #Select(poset,v2,true);

  # create menus:
  #GGLMakeSubgroupsMenu(poset,latticetype[5]);
  poset!.menuoperations := latticetype[5];

  # Install the info method:
  poset!.infodisplays := latticetype[6];
  #InstallPopup(poset,GGLRightClickPopup);

  # no vertex is green right now:
  poset!.lastresult := [];

  poset!.filters := filters;
  # disable deletion of edges:
  #Enable(poset!.menus[2],"Delete Edge",false);

  return poset;
end);

##
## without defaults record:
##
InstallOtherMethod(GraphicSubgroupLattice,
    "for a group",
    true,
    [ IsGroup ],
    0,
function(G)
  return GraphicSubgroupLattice(G,rec());
end);


#############################################################################
##
#M  DecideSubgroupLatticeType(<grp>)  . . decides about the type of a lattice
##
##  This operation is called while creation of a new graphic subgroup lattice.
##  It has to decide about the type of the lattice. That means it has to
##  decide 5 questions:
##   1) Are all levels known right from the beginning?
##   2) Has the lattice the HasseProperty?
##   3) Can we test two subgroups for equality reasonably cheaply?
##   4) Shall we create a vertex for the trivial subgroup at the beginning?
##   5) What menu operations are possible?
##   6) What information is displayed on RightClick?
##  Returns a list. The first four entries are boolean values for  questions
##  1-4. Note that if the answer to 2 is true, then the answer to 3 must also
##  be true. The fifth and sixth entry are configuration lists as explained
##  in the configuration section of "ilatgrp.gi" for menu operations and
##  info displays respectively.
##
##  The following is the default "fallback" method suitable for reasonably
##  small finite groups.
##
InstallMethod( DecideSubgroupLatticeType,
    "for a group",
    true,
    [ IsGroup ],
    0,

function( G )
  local   knowslevels;
  if Size(G) > 10^17 then    # that is just heuristic!
    knowslevels := false;
  else
    knowslevels := Length(DivisorsInt(Size(G))) < 50;
  fi;
  return [knowslevels,
          true,         # we assume HasseProperty
          true,         # we assume we can compare groups
          true,         # we want the trivial subgroup
          [],
          GGLInfoDisplaysForFiniteGroups];
end);

## for finitely presented groups:
InstallMethod( DecideSubgroupLatticeType,
    "for a group",
    true,
    [ IsGroup and IsFpGroup ],
    0,

function( G )
  return [false,        # we create levels dynamically
          false,        # we do not assume HasseProperty
          false,        # we assume we cannot compare groups efficiently
          false,        # we don't want the trivial subgroup
          [],
          GGLInfoDisplaysForFpGroups];
end);

#############################################################################
##
#O  GraphicPoset(<name>, <width>, <height>) . . . . . . creates graphic poset
##
##  creates a new graphic poset which is a specialization of a graphic graph
##  mainly because per definition a poset comes in ``levels'' or ``layers''.
##  This leads to some algorithms that are more efficient than the general
##  ones for graphs.
##
DeclareOperation("GraphicPoset",[IsString, IsInt, IsInt]);

#############################################################################
##
#M  GraphicPoset( <name>, <width>, <height> ) . . . . . . a new graphic poset
##
##  creates a new graphic poset which is a specialization of a graphic graph
##  mainly because per definition a poset comes in "layers" or "levels". This
##  leads to some algorithms that are more efficient than the general ones
##  for graphs.
##
InstallMethod( GraphicPoset,
    "for a string, and two integers",
    true,
    [ IsString,
      IsInt,
      IsInt ],
    0,

function( name, width, height )
  local   poset,  tmpEntries,  tmpTypes,  tmpFuncs,  m;

  poset := GraphicCanvas(name,width,height);
  SetFilterObj(poset!.filters, IsGraphicGraphRep);
  SetFilterObj(poset!.filters, IsGraphicPosetRep);
  poset!.levels := [];
  poset!.levelparams := [];
  poset!.selectedvertices := [];
  # think of the GAP menu:
  #poset!.menutypes := [List(poset!.menus[1]!.entries,x->"forany")];
  #poset!.menuenabled := [List(poset!.menus[1]!.entries,x->true)];
  #poset!.rightclickfunction := Ignore;

  # set up color information:
  #poset!.color := rec();
  #if COLORS.red <> false or COLORS.lightGray <> false  then
  #  poset!.color.model := "color";
  #  # note: if you rename this, think of the "use black&white" below!
  #else
  #  poset!.color.model := "monochrome";
  #fi;
  #GPMakeColors(poset);

  poset!.levelboxes := [];
  poset!.showlevels := false;
  poset!.lptexts := [];
  poset!.showlevelparams := true;

  #InstallCallback(poset,"LeftPBDown",PosetLeftClickCallback);
  #InstallCallback(poset,"ShiftLeftPBDown",PosetCtrlLeftClickCallback);
  #InstallCallback(poset,"CtrlLeftPBDown",PosetCtrlLeftClickCallback);
  #InstallCallback(poset,"RightPBDown",PosetRightClickCallback);

  #tmpEntries := ShallowCopy(PosetMenuEntries);
  #tmpTypes := ShallowCopy(PosetMenuTypes);
  #tmpFuncs := ShallowCopy(PosetMenuFunctions);
  #if poset!.color.model = "color" then
  #  Append(tmpEntries,["-","Use Black&White"]);
  #  Append(tmpTypes,["-","forany"]);
  #  Append(tmpFuncs,["-",UserUseBlackWhite]);
  #fi;
  #m := Menu(poset,"Poset",tmpEntries,tmpTypes,tmpFuncs);
  #Check(m,"Show Level Parameters",true);

  return poset;
end);

