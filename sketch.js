var fixedRect, movingRect;
var box1
var box2
var box3
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(500, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
box1=createSprite(100,400,30,30)
box1.shapeColor="green";
box2=createSprite(200,400,30,30)
box2.shapeColor="green";
box3=createSprite(300,400,50,50)
box3.shapeColor="green";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x= World.mouseX;
  movingRect.y =World.mouseY;
  
  isTouching(movingRect,box1);
  isTouching(movingRect,box2);
  isTouching(movingRect,box3);
  isTouching(fixedRect,movingRect);
  drawSprites();
}


function isTouching(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
  && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
    obj2.shapeColor = "red";
    obj1.shapeColor = "red";
}
else
{
  obj2.shapeColor = "green";
  obj1.shapeColor = "green";
}
}