var trex, trex_running;
var ground, groundImage, invisibleGround;
function preload(){
    trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
    groundImage = loadImage("ground2.png");
}   

function setup(){
  createCanvas(600,200);
  
  //crie um sprite de trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);

  ground = createSprite(200,180,400,20);

  ground.addAnimation("chão", groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;

  //Tamanho do T-Rex
  trex.scale = 0.5; 
  trex.x = 50

  //Chão invisblexx
  invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false;

}

function draw(){
  background(220)
  
  //Saltar
  if(keyDown("space") && trex.y >= 120){
    trex.velocityY = -10 
  }


  //Gravidade
  trex.velocityY = trex.velocityY + 0.8

  //Infinito
  if(ground.x < 0){
	  ground.x = ground.width/2;
}

  //Não caia 
  trex.collide(invisibleGround);

    drawSprites();
}
