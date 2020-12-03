var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var bananaScore;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  
  createCanvas(550,450);

  //creating monkey
   monkey=createSprite(80,315,20,20);
   monkey.addAnimation("moving", monkey_running);
  //monkey.debug=true;
   monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x) 
  
   bananaScore = 0;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  
background("white");
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }

    if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);   
  
  //call monkey and banana
  obstacles();
  bananas();
  drawSprites();
 // var bananaScore=0;
 
  fill("white");
   textSize(20);
  stroke ("white");
  text("Score: "+ bananaScore,500,50);
  
  if(monkey.isTouching(obstacleGroup)){
    ground.velocityX=0;
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
  }
  
 
  
  
  
  fill("black");
   textSize(20);
  stroke ("black");
  bananaScore=Math.ceil(frameCount/frameRate());
   text("Survival Time = " + bananaScore, 10,20);
}

function bananas(){
  
  if (frameCount%140===0){
    
             
    banana = createSprite(570,350,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(70,230));
    banana.scale = 0.1;
    
    banana.velocityX = -7;
    banana.lifetime = 3000; 
    
    FoodGroup.add(banana)
  }
}

function obstacles(){
  
  if (frameCount%100===0){
    
    obstacle = createSprite(570,315,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-6;
    obstacle.scale = 0.18 ;
    obstacle.lifetime = 200
  //  obstacle.debug = true;
    obstacle.rotation = 5;
   
    obstacle.setCollider("rectangle",0,0,380,380);
    
    obstacleGroup.add(obstacle);    
  }
}



