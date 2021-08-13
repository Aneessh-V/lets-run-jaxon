var path;
var boy;
var boundary1, boundary2;


function preload(){

  pathImg = loadImage("path.png");
  runningBoy = loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
}

function draw() {
  background(0);

boundary1=createSprite(350,200);
boundary1.visibile = false;

boundary2=createSprite(50,200);
boundary2.visibile = false;

path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2

if(path.y > 400){
path.y = height/2
}
 

boy=createSprite(200,200);
boy.addAnimation("running",runningBoy);
boy.scale=0.1;

boy.x = World.MouseX;
  

  drawSprites();
}
 