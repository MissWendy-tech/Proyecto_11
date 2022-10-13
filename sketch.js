var sea, ship;
var seaImg, shipImg;

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(400,400);

  //mover el fondo
  sea = createSprite (400,200)
  sea.addImage(seaImg);
  //sea.velocityX = -5;
  sea. scale = 0.5;

  ship = createSprite (140, 200,30,30);
  ship.addAnimation("movingShip", shipImg);
  ship.scale = 0.25;
  
}

function draw() {
  background("blue");

  sea.velocityX = -3;
 
  drawSprites();
}