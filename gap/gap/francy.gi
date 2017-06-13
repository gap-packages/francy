#############################################################################
##
#W  francy.gi                   FRANCY library                 Manuel Martins
##
#Y  Copyright (C) 2017 Manuel Martins
##
##

#############################################################################
##
#M  GenerateID( ) . . . . . Generates unique sequential IDs for each session
##
BindGlobal( "GenerateId", function()
    FrancySequentialID := FrancySequentialID + 1;
    return FrancySequentialID;
end );

#############################################################################
##
#M  CallbackTrigger . . .  the various events supported to trigger a callback
##
BindGlobal( "CallbackTrigger",
    Objectify( NewType( CallbackFamily, IsCallbackTrigger and IsCallbackTriggerRep ), rec(
        DOUBLE_CLICK := Objectify( NewType( CallbackFamily, IsCallbackTrigger and IsCallbackTriggerRep ), rec( value := "dblclick" ) ),
        RIGHT_CLICK := Objectify( NewType( CallbackFamily, IsCallbackTrigger and IsCallbackTriggerRep ), rec( value := "context" ) ),
        CLICK := Objectify( NewType( CallbackFamily, IsCallbackTrigger and IsCallbackTriggerRep ), rec( value := "click" ) ),
        OVER := Objectify( NewType( CallbackFamily, IsCallbackTrigger and IsCallbackTriggerRep ), rec( value := "mouseover" ) ) )
    )
);

#############################################################################
##
#M  ShapeType . . . . . . . . . . . . . the various types of shapes supported
##
BindGlobal( "ShapeType",
    Objectify( NewType( ShapeFamily, IsFrancyType and IsFrancyTypeRep ), rec(
        TRIANGLE := Objectify( NewType( ShapeFamily, IsShapeType and IsShapeTypeRep ), rec( value := "triangle" ) ),
        DIAMOND := Objectify( NewType( ShapeFamily, IsShapeType and IsShapeTypeRep ), rec( value := "diamond" ) ),
        CIRCLE := Objectify( NewType( ShapeFamily, IsShapeType and IsShapeTypeRep ), rec( value := "circle" ) ),
        SQUARE := Objectify( NewType( ShapeFamily, IsShapeType and IsShapeTypeRep ), rec( value := "square" ) ),
        CROSS := Objectify( NewType( ShapeFamily, IsShapeType and IsShapeTypeRep ), rec( value := "cross" ) ),
        STAR := Objectify( NewType( ShapeFamily, IsShapeType and IsShapeTypeRep ), rec( value := "star" ) ),
        WYE := Objectify( NewType( ShapeFamily, IsShapeType and IsShapeTypeRep ), rec( value := "wye" ) ) )
    )
);

#############################################################################
##
#M  ShapeDefaults . . . . . . . . . . . the various types of shapes supported
##
BindGlobal( "ShapeDefaults",
    Objectify( NewType( ShapeFamily, IsShapeDefaults and IsShapeDefaultsRep ), rec(
        highlight := true,
        layer := 0,
        size := 10,
        x := 0,
        y := 0 )
    )
);

#############################################################################
##
#M  CanvasType . . . . . . . . . . . .  the various types of canvas supported
##
BindGlobal( "CanvasType",
    Objectify( NewType( CanvasFamily, IsFrancyType and IsFrancyTypeRep ), rec(
        NORMAL := Objectify( NewType( CanvasFamily, IsCanvasType and IsCanvasTypeRep ), rec( value := ".draw" ) ),
        FORCE := Objectify( NewType( CanvasFamily, IsCanvasType and IsCanvasTypeRep ), rec( value := ".draw.force" ) ),
        HASSE := Objectify( NewType( CanvasFamily, IsCanvasType and IsCanvasTypeRep ), rec( value := ".draw.hasse" ) ),
        PLOT := Objectify( NewType( CanvasFamily, IsCanvasType and IsCanvasTypeRep ), rec( value := ".plot" ) ) )
    )
);

#############################################################################
##
#M  CanvasDefaults . . . . . . . . . .  the various types of shapes supported
##
BindGlobal( "CanvasDefaults",
    Objectify( NewType( CanvasFamily, IsCanvasDefaults and IsCanvasDefaultsRep ), rec(
        w:= 680,
        h:= 400 )
    )
);

#############################################################################
##
#M  Canvas( <title>, <options> ) . . . . . . . . . . . . a new graphic canvas
##
InstallMethod( Canvas,
    "a canvas type, a title string, a default configurations record",
    true,
    [ IsCanvasType,
      IsString,
      IsCanvasDefaults ],
    0,

function( canvasType, title, options )
    local object, id;

    id     := GenerateId();
    object := Objectify( NewType( CanvasFamily, IsCanvas and IsCanvasRep ), rec(
        add := function( obj )
            ###
            ## <obj> must be of type IsFrancyObject
            ###
            if not IsFrancyObject( obj ) then
                Error("Object is not of type IsFrancyObject");
            fi;
            if IsShape( obj ) then
                object!.model!.nodes!.(obj!.model!.id) := Clone( obj );
                return;
            fi;
            if IsLink( obj ) then
                object!.model!.links!.(obj!.model!.id) := Clone( obj );
                return;
            fi;
            if IsMenu( obj ) then
                object!.model!.menus!.(obj!.model!.id) := Clone( obj );
                return;
            fi;
        end,
        remove := function( obj )
            ###
            ## <obj> must be of type IsFrancyObject
            ###
            if not IsFrancyObject( obj ) then
                Error("Object is not of type IsFrancyObject");
            fi;
            if IsShape( obj ) then
                # TODO removing here should trigger a remove links for this same shape
                Unbind( object!.model!.nodes!.(obj!.model!.id) );
                return;
            fi;
            if IsLink( obj ) then
                Unbind( object!.model!.links!.(obj!.model!.id) );
                return;
            fi;
            if IsMenu( obj ) then
                Unbind( object!.model!.menus!.(obj!.model!.id) );
                return;
            fi;
        end,
        draw := function( )
            local obj;
            # clone the main object
            obj := Clone( object );
            # convert record to array
            obj!.model!.nodes := Converter( object!.model!.nodes );
            obj!.model!.links := Converter( object!.model!.links );
            obj!.model!.menus := Converter( object!.model!.menus );
            # flaten canvas object
            obj!.model!.canvas := Flat( object!.model!.canvas );
            Print( GapToJsonString( obj!.model ) );
        end,
        model := rec(
            id     := id,
            agent  := Concatenation( "francy", canvasType!.value ),
            menus  := rec(),
            nodes  := rec(),
            links  := rec(),
            canvas := rec(
                id      := id,
             	title   := title,
                options := Clone( options )
            )
        )
    ) );
    return object;

end );

InstallOtherMethod( Canvas,
    "a canvas type, a title string",
    true,
    [ IsCanvasType,
      IsString ],
    0,

function( canvasType, title )

    return Canvas( canvasType, title, CanvasDefaults );

end );

#############################################################################
##
#M  Shape( <shapeType>, <title>, <options> )  . .  create a Shape for a type
##
InstallMethod( Shape,
    "a shape type, a title string, a default configurations record",
    true,
    [ IsShapeType,
      IsString,
      IsShapeDefaults ],
    0,

function( shapeType, title, options )
    local object;

    object := Objectify( NewType( ShapeFamily, IsShape and IsShapeRep ), rec(
        model := rec(
            id      := GenerateId(),
            type    := shapeType!.value,
            title   := title,
            options := Clone( options )
        )
    ) );

    return object;

end );

InstallOtherMethod( Shape,
    "a shape type, a title string",
    true,
    [ IsShapeType,
      IsString ],
    0,

function( shapeType, title )

    return Shape( shapeType, title, ShapeDefaults );

end );

#############################################################################
##
#M  Link( <obj1>, <obj2> )
##
InstallMethod( Link,
    "a shape, another shape",
    true,
    [ IsShape,
	  IsShape ],
    0,

function( source, target )

    local object;

    object := Objectify( NewType( LinkFamily, IsLink and IsLinkRep ), rec(
        model := rec(
            id     := GenerateId(),
            source := source!.model!.id,
            target := target!.model!.id
        )
    ) );

    return object;

end );

InstallOtherMethod( Link,
    "a list of shape, another list of shape",
    true,
    [ IsList,
	  IsList ],
    0,

function( source, target )

    local tmpList, tmpSrc, tmpTgt;

    tmpList := [];
    for tmpSrc in source do
        for tmpTgt in target do
            AddSet( tmpList, Link( tmpSrc, tmpTgt ) );
        od;
    od;

    return tmpList;

end );

#############################################################################
##
#M  Menu( <title> ) . . . . . . . . . . . . . . . a new menu entry
##
InstallMethod( Menu,
    "a title string",
    true,
    [ IsString,
      IsCallbackFunction ],
    0,

function( title, callback )
    local object;

    object := Objectify( NewType( MenuFamily, IsMenu and IsMenuRep ), rec(
        add := function( obj )
            ###
            ## <obj> must be of type IsMenu or IsCallbackFunction
            ###
            if IsMenu( obj ) then
                AddSet( object!.model!.menus, Clone( obj ) );
            else
                Error("Object is not of type IsMenu or IsCallbackFunction");
            fi;
            AddSet( object!.model!.menus, Clone( obj ) );
            return;
        end,
        remove := function( obj )
            ###
            ## <obj> must be of type IsMenu or IsCallbackFunction
            ###
            if IsMenu( obj ) then
                RemoveSet( object!.model!.menus, Clone( obj ) );
            else
                Error("Object is not of type IsMenu or IsCallbackFunction");
            fi;

            return;
        end,
        callback := callback,
        model := rec(
            id     := GenerateId(),
            title  := title,
            menus  := []
        )
    ) );

    return object;

end );

#############################################################################
##
#M  CallbackFunction( <string> ) . . . . . . . . .  create a Shape for a type
##
InstallMethod( CallbackFunction,
    "an action",
    true,
    [ IsFunction ],
    0,

function( func )
    local object;

    object := Objectify( NewType( CallbackFamily, IsCallbackFunction and IsCallbackFunctionRep ), rec(
        func := func,
        model := rec(
            id   := GenerateId()
        )
    ) );

    return object;

end );

#############################################################################
##
#M  Callback( <canvas>, <id>, <args> ) . . . . .  execute a callback function
##
##
InstallMethod( Callback,
    "a canvas, an id, a list of arguments",
    true,
    [ IsCanvas,
      IsInt,
      IsList ],
    0,

function( canvas, id, args )

    return CallFuncList( canvas!.callbacks!.(id)!.func, args );

end );

#############################################################################
##
#M  PrintObj( <obj> ) . . . . . . . . . . . . .  override for IsFrancyObjects
##
InstallMethod( PrintObj,
    "a francy object",
    true,
    [ IsFrancyObject ],
    0,

function( object )

    Print( Clone( object ) );
    return;

end );

#############################################################################
##
#M  ViewObj( <obj> )  . . . . . . . . . . . . .  override for IsFrancyObjects
##
InstallMethod( ViewObj,
    "a francy object",
    true,
    [ IsFrancyObject ],
    0,

function( object )

    #PrintObj(object);
    Print( Concatenation( "<",
           CategoriesOfObject( object )[1],
           "/", CategoriesOfObject( object )[2], ">" ) );
    return;

end );

#############################################################################
##
#M  Clone( <obj> )  . . . . . . . . simple properties clone for FrancyObjects
##
InstallMethod( Clone,
    "a francy object",
    true,
    [ IsFrancyObject ],
    0,

function( object )

    local tmpObj, rObj;

    rObj := rec();
    for tmpObj in NamesOfComponents( object ) do
        # copy everything except functions!
        if not IsFunction(object!.(tmpObj)) then
            rObj!.(tmpObj) := object!.(tmpObj);
        fi;
    od;
    return rObj;

end );

#############################################################################
##
#M  Clone( <obj> )  . . . . . . . . simple properties clone for FrancyObjects
##
InstallOtherMethod( Clone,
    "a francy object",
    true,
    [ IsRecord ],
    0,

function( object )

    local tmpObj, rObj;

    rObj := rec();
    for tmpObj in NamesOfComponents( object ) do
        # copy everything except functions!
        if not IsFunction(object!.(tmpObj)) then
            rObj!.(tmpObj) := object!.(tmpObj);
        fi;
    od;
    return rObj;

end );

#############################################################################
##
#M  Flat( <obj> )  . . . . . . . . simple properties clone for FrancyObjects
##
InstallMethod( Flat,
    "a record",
    true,
    [ IsRecord ],
    0,

function( record )
    return FlatenerHelper( record, rec() );
end );

#############################################################################
##
#M  Clone( <obj> )  . . . . . . . . simple properties clone for FrancyObjects
##
InstallMethod( FlatenerHelper,
    "a record",
    true,
    [ IsRecord, IsRecord ],
    0,

function( record, flaten )
    local tmpObj;

    for tmpObj in NamesOfComponents( record ) do
        if IsRecord( record!.(tmpObj) ) then
            FlatenerHelper( record!.(tmpObj), flaten );
        else
            flaten!.(tmpObj) := record!.(tmpObj);
        fi;
    od;
    return flaten;
end );

#############################################################################
##
#M  Converter( <obj> )  . . . . . . . . simple properties clone for FrancyObjects
##
InstallMethod( Converter,
    "a record",
    true,
    [ IsRecord ],
    0,

function( record )
    local list, o;
    list := [];
    for o in NamesOfComponents( record) do
        Add(list, Flat( record!.(o)!.model ) );
    od;
    return list;
end );