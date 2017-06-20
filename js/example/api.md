# 
IDs are sequentially generated;

# GAP API:

```
CanvasType {
    NORMAL,
    FORCE, -- uses d3 force simulation
    HASSE, -- fixed force on Y
    PLOT -- grid background, axis etc
}
DefaultCanvasOptions {
    width=680, 
    Height=400, 
    ...
}
Canvas(CanvasType canvasType, String title, DefaultCanvasOptions options);
Menu(String label, CallbackFunction action);
ShapeType {
    CIRCLE,
    RECTANGLE,
    DIAMOND,
    etc
}
DefaultShapeOptions {
    size=10, 
    x=1, 
    y=1, 
    ...
}
Shape(ShapeType type, String label, DefaultShapeOptions options);
Link(Shape[] shapeSource, Shape[] shapeTarget);
```
# Usage
```
canvas := Canvas(CanvasType!.HASSE, "Quaternion Group Subgroup Lattice");
shapeG := Shape(ShapeType!.CIRCLE, "G");
canvas!.add(shapeG);
defaults:=ShapeDefaults;
defaults!.layer:=1;
shape1 := Shape(ShapeType!.CIRCLE, "1", defaults);
canvas!.add(shape1);
link := Link(shapeG, shape1);
canvas!.add(link);
menu := Menu( "All Subgroups", CallbackFunction(AllSubgroups) );
canvas!.add(menu);
canvas!.draw();
```