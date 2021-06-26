var garden,rabbit;
var gardenImg,rabbitImg;
var appleImage,apple

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = mouseX; 
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  sponeApple();
  
  drawSprites();
}
function sponeApple () {

if(frameCount % 80===0){  
  
  

apple=createSprite(200,70,400,20);  
apple.addImage(appleImage);
apple.scale=0.25;
apple.velocityY=4;
apple.x=Math.round( random (100,300)); 
  
}  
}