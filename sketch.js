var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudsgroup, cloudimage;
var obstaclesgroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;



var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudimage=loadImage("cloud.png");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
  console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  spawnObstacle();
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
  if (frameCount % 60 === 0){

  
 // write your code here 
 cloud=createSprite(600,100,40,10);
 cloud.y = Math.round(random(10,60));
 cloud.addImage(cloudimage);
 cloud.velocityX=-3;
 cloud.depth = trex.depth;
 trex.depth = trex.depth + 1;
 cloud.scale = 0.5;
}
}

function spawnObstacle(){
  if (frameCount % 60 === 0){
    var obstacle= createSprite(400,165,10,40);
    obstacle.velocityX = -6;
    var rand= Math.round (random(1,6));
    switch(rand){
      case 1: obstacle.addImage(obstacle1);
      break;        
      case 2: obstacle.addImage(obstacle2);
      break; 
      case 3: obstacle.addImage(obstacle3);
      break; 
      case 4: obstacle.addImage(obstacle4);
      break; 
      case 5: obstacle.addImage(obstacle5);
      break; 
      case 6: obstacle.addImage(obstacle6);
      default:break;



    }
    obstacle.scale = 0.5;

  }
}


