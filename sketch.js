// create alien2 function
var sword;
var PLAY = 1;
var END = 0;
var gameState = 1;
var fruit1;
var score;
var fruit1G, fruit2G, fruit3G, fruit4G;
var rand, rand2;
var alien1, alien2, alien3, alien4;
var gameOver;

function preload(){
swordImg = loadImage("sword.png");
fruit1Img = loadImage("fruit1.png");
fruit2Img = loadImage("fruit2.png");
fruit3Img = loadImage("fruit3.png");
fruit4Img = loadImage("fruit4.png");
alien1Img = loadImage("alien1.png");  
alien2Img = loadImage("alien2.png");
gameOverImg = loadImage("gameover.png");
swordSound = loadSound("knifeSwooshSound.mp3");
}

function setup(){
createCanvas(500, 500);
sword = createSprite(180, 180, 25, 25); 
sword.addImage("swordImg", swordImg);
sword.scale = 0.6;
score= 0;
  
fruit1G = createGroup();
fruit2G = createGroup();
fruit3G = createGroup();
fruit4G = createGroup();
  
alien1G = createGroup();
alien2G = createGroup();

  
}
function draw(){
background('cyan');
sword.x = World.mouseX;
sword.y = World.mouseY;
  
  
  
  
if (gameState === PLAY){
rand = Math.round(random(1,6));
rand = Math.round(random(1,2));
  
if(World.frameCount % 50 == 0){
if(rand == 1) {
 fruit1F(); 
}
else if (rand == 2) {
  fruit2F();
}
else if(rand == 3) {
fruit3F();
}
else if(rand == 4){
fruit4F();
  }
 }
  
  if(World.frameCount % 75 == 0){
    if(rand == 1){
      alien1F();
    }
    
    if(rand == 2){
      alien2F();
    }
  }
  
if (fruit1G.isTouching(sword)){
      score = score +1;
      fruit1G.destroyEach();
  }
  
  if (fruit2G.isTouching(sword)){
      score = score +2;
      fruit2G.destroyEach();
  }
  
  if (fruit3G.isTouching(sword)){
      score = score +3;
      fruit3G.destroyEach();
  }
  
  if (fruit4G.isTouching(sword)){
      score = score +3;
      fruit4G.destroyEach();
  }
  
  if (alien1G.isTouching(sword)){
      gameState = END;
  }
  
  if (alien2G.isTouching(sword)){
      gameState = END;
  }
  
  if (sword.isTouching(fruit1G)){
    swordSound.play();
  }
  
  if (sword.isTouching(fruit2G)){
    swordSound.play();
  }
  
  if (sword.isTouching(fruit3G)){
    swordSound.play();
  }
  
  if (sword.isTouching(fruit4G)){
    swordSound.play();
  }
  
  if (sword.isTouching(alien1G)){
    swordSound.play();
  }
  
  if (sword.isTouching(alien2G)){
    swordSound.play();
  }
  
  
}
  
 if (gameState === END){
    gameOver = createSprite(167, 179, 25, 25);
    gameOver.addImage(gameOverImg);
    fruit1G.velocityX = 0;
    fruit2G.velocityX = 0;
    fruit3G.velocityX = 0;
    fruit4G.velocityX = 0;
    alien1G.velocityX = 0;
    alien2G.velocityX = 0;
  } 
  
  textSize(25);
  text("score:"+ score, 400, 30 );
  
drawSprites();
}

function fruit1F () {
fruit1 = createSprite(0, Math.round(random(20,530)), 25, 25);  
fruit1.addImage("fruit1Img", fruit1Img);
fruit1.scale = 0.2;
fruit1.velocityX = 7;
fruit1.lifetime=300;
fruit1G.add(fruit1);
}

function fruit2F () {
fruit2 = createSprite(0, Math.round(random(20,530)), 25, 25); 
fruit2.addImage("fruit2Img", fruit2Img);
fruit2.scale = 0.2;
fruit2.velocityX = 7;
fruit2.lifetime=300;
fruit2G.add(fruit2);
}

function fruit3F () {
fruit3 = createSprite(550, Math.round(random(20,530)), 25, 25);  
fruit3.addImage("fruit3Img", fruit3Img);
fruit3.scale = 0.2;
fruit3.velocityX = -7;
fruit3.lifetime=300;
fruit3G.add(fruit3);
}

function fruit4F () {
fruit4 = createSprite(550, Math.round(random(20,530)), 25, 25);  
fruit4.addImage("fruit4Img", fruit4Img);
fruit4.scale = 0.2;
fruit4.velocityX = -7;
fruit4.lifetime=300;
fruit4G.add(fruit4);
}

function alien1F() {
alien1 = createSprite(550, Math.round(random(20,530)), 25, 25);  
alien1.addImage("alien1Img", alien1Img);
alien1.scale = 0.5;
alien1.velocityX = -7;
alien1.lifetime=300;
alien1G.add(alien1);
}

function alien2F() {
alien2 = createSprite(0, Math.round(random(20,530)), 25, 25); 
alien2.addImage("alien2Img", alien2Img);
alien2.scale = 0.5;
alien2.velocityX = 7;
alien2.lifetime=300;
alien2G.add(alien2);
}



