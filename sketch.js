var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  car = createSprite(200,400,50,50);
  car.shapeColor = "green";
  building = createSprite(300,100,50,50);
  building.shapeColor = "red";
  movingRect=createSprite(100,300,40,40);
  movingRect.shapeColor="purple";
  movingRect.debug = true;
  bus=createSprite(600,200,70,50);
  bus.shapeColor="pink";
  bus.velocityX=5;
  bike=createSprite(800,200,30,30);
  bike.shapeColor="blue";
  bike.velocityX=-5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(car,movingRect)){
    car.shapeColor="yellow";
    movingRect.shapeColor="yellow";
  }
  else {
    car.shapeColor="green";
    movingRect.shapeColor="purple"; 
  }
  bounceOff(bike,bus);
  drawSprites();
}