var fixedRect, movingRect;
var fixedRect1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;

  fixedRect1=createSprite(200,100,50,80);;
  fixedRect1.shapeColor="green"

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
 }
 else if(isTouching(movingRect,fixedRect1)){
   movingRect.shapeColor="blue";
   fixedRect1.shapeColor="blue";
 }
 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  fixedRect1.shapeColor="green";
 }
  drawSprites();
}
