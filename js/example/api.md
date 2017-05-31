# 
IDs are sequentially generated;

# GAP API:
CanvasType {
    NORMAL,
    FORCE, -- uses d3 force simulation
    HASSE, -- fixed force on Y
    PLOT -- grid background, axis etc
}
DefaultCanvasOptions(Int width=680, Int Height=400, ...);
Canvas(CanvasType canvasType, String title, Record options);
Action(Function function);
Menu(Canvas canvas, String label, Action action);
ShapeType {
    CIRCLE,
    RECTANGLE,
    DIAMOND,
    etc
}
DefaultShapeOptions(Int size=10, Int x=1, Int y=1, ...);
Shape(Canvas canvas, ShapeType type, String label, Record options);
Link(Canvas canvas, Shape[] shapeSource, Shape[] shapeTarget);

# Usage
canvas := Canvas(CanvasType!.HASSE, "Quaternion Group Subgroup Lattice");
shapeG := Shape(ShapeType!.CIRCLE, "G");
canvas!.add(shapeG);
shape1 := Shape(ShapeType!.CIRCLE, "1");
canvas!.add(shape1);
link := Link(shapeG, shape1);
canvas!.add(link);
menu := Menu( "All Subgroups", CallbackFunction(AllSubgroups) );
canvas!.add(menu);
canvas!.draw();