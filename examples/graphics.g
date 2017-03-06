

canvas:=GraphicCanvas("Canvas Test 1", 200, 200);

box1:=Box(canvas, 1, 1, 20, 20, rec(color:="Blue", name:="box1", draggable:=true));
box2:=Box(canvas, 30, 30, 30, 30, rec(color:="Green", name:="box2", draggable:=true));
box3:=Box(canvas, 60, 60, 40, 40, rec(color:="Red", name:="box2", draggable:=true));

GroupGraphicObjects([box2, box3]);

Draw(canvas);

canvas:=GraphicCanvas("Canvas Test 2", 200, 200);

circle1:=Circle(canvas, 1, 1, 20, rec(color:="Blue", name:="circle1", draggable:=true));
circle2:=Circle(canvas, 100, 100, 40, rec(color:="Green", name:="circle2", draggable:=true));

Link(circle1, circle2);

Draw(canvas);
