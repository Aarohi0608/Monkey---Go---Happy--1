var gameState = "play";
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("running",monkey_running);
 monkey.scale =  0.1;
  
 ground = createSprite(5,350,600,10);
 ground.velocityX = -3;
 ground.x = ground.width/2;
  
  foodGroup = new Group();
  obstacleGroup = new Group();

  
}


function draw() {
background("white");
  
if(frameCount % 1 === 0){
  
  survivalTime = survivalTime + 1;
  
}
  
text("Survival Time :" + survivalTime,50,50);
  
if(gameState === "play"){
  
if(keyDown("space") && monkey.y >= 235){
  
  monkey.velocityY = -12;
  
}
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  
  ground.x = ground.width/2;
  
  food();
  obstacles();
}
  drawSprites();
  
}

function food(){
  
  if(frameCount % 80 === 0){
    banana = createSprite(200,200,10,20);
    
    banana.addImage(bananaImage);
    
    banana.scale = 0.1;
    
    banana.y = Math.round(random(120,200));
    
    banana.velocityX = -3;
    
    banana.lifetime = 200;
    
    banana.depth = monkey.depth;
    
    monkey.depth = monkey.depth + 1;
    
    foodGroup.add(banana);
    
  }
}
  
  function obstacles(){
    
    if(frameCount % 300 === 0){
      
      obstacle = createSprite(330,330,20,20);
      
      obstacle.addImage(obstacleImage);
      
      obstacle.scale = 0.1;
      
      obstacle.velocityX = -3;
      
      obstacle.depth  = monkey.depth;
      
      monkey.depth = monkey. depth +1;
      
    }
    
    
    
    
  }
  
  
  





