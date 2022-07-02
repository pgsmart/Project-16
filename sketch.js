var knife, knifeImg;
var knifeSound;
var fruit1Img;
var fruit2Img;
var fruit3Img;
var fruit4Img;
var fruit;
var fruitGroup;
var number;
var number2;
var score;
var alien, alienImg;
var gameOverSound, gameOverImg, gameOver;
var gameOverCheck = false;

function preload(){
  knifeImg = loadImage("knife.png");
  fruit1Img = loadImage("fruit1.png");
  fruit2Img = loadImage("fruit2.png");
  fruit3Img = loadImage("fruit3.png");
  fruit4Img = loadImage("fruit4.png");

  alienImg = loadImage("alien1.png");
  alienImg2 = loadImage("alien2.png");

  gameOverImg = loadImage("gameover.png");
  gameOverSound = loadSound("gameover.mp3");

  knifeSound = loadSound("knifeSwoosh.mp3");


}



function setup() {
  createCanvas(600, 600);
  
  knife = createSprite(20,20,20,20);
  knife.addImage(knifeImg);

  gameOver = createSprite(width/2,height/2,20,20);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.3;
  gameOver.visible = false;

  score = 0;

}

function draw() {
  background("lightblue");
  knife.x = mouseX;
  knife.y = mouseY;

  if(frameCount%75 == 0 && gameOverCheck === false){
    
    switch(Math.round(random(1,4))){
      case 1 : fruit1();
        break;
      case 2 : fruit2();
        break;
      case 3 : fruit3();
        break;
      case 4 : fruit4();
        break;
    }
  }

  if(frameCount%120 == 0 && gameOverCheck === false){
    switch(Math.round(random(1,2))){
      case 1 : createAlien(alienImg);
        break;
      case 2 : createAlien(alienImg2);
    }
  }

  if(mousePressedOver(fruit)){
    knifeSound.play();
    fruit.destroy();
    score += Math.round(random(0,5));
  }

  if(alien != null){
  if(mousePressedOver(alien)){
    gameOverSound.play();
    gameOver.visible = true;
    alien.velocityX = 0;
    fruit.velocityX = 0;
    gameOverCheck = true;
    }
  }

  drawSprites();

  textSize(30);
  text("Score: "+score,250,50,600,600);
}

function fruit1(){
  number = Math.round(random(0,1));
  fruit = createSprite(number * 600,random(0,600,20,20))
  fruit.addImage(fruit1Img);
  if(number == 1){
    fruit.velocityX = -4;
  }else if(number == 0){
    fruit.velocityX = 4;
  }
  fruit.scale = 0.3;
  fruit.lifetime = 200;
  fruit.depth = knife.depth - 1;
  //fruitGroup.add(fruit);
}
function fruit2(){
  number = Math.round(random(0,1));
  fruit = createSprite(number * 600,random(0,600,20,20))
  fruit.addImage(fruit2Img);
  if(number == 1){
    fruit.velocityX = -4;
  }else if(number == 0){
    fruit.velocityX = 4;
  }
  fruit.scale = 0.3;
  fruit.lifetime = 200;
  fruit.depth = knife.depth - 1;
  //fruitGroup.add(fruit);
}
function fruit3(){
  number = Math.round(random(0,1));
  fruit = createSprite(number * 600,random(0,600,20,20))
  fruit.addImage(fruit3Img);
  if(number == 1){
    fruit.velocityX = -4;
  }else if(number == 0){
    fruit.velocityX = 4;
  }
  fruit.scale = 0.3;
  fruit.lifetime = 200;
  fruit.depth = knife.depth - 1;
  //fruitGroup.add(fruit);
}
function fruit4(){
  number = Math.round(random(0,1));
  fruit = createSprite(number * 600,random(0,600,20,20))
  fruit.addImage(fruit4Img);
  if(number == 1){
    fruit.velocityX = -4;
  }else if(number == 0){
    fruit.velocityX = 4;
  }
  fruit.scale = 0.3;
  fruit.lifetime = 200;
  fruit.depth = knife.depth - 1;
  //fruitGroup.add(fruit);
}

function createAlien(image){
  number2 = Math.round(random(0,1));
  alien = createSprite(number*600,random(0,600,20,20));
  alien.addImage(image);

  if(number == 1){
    alien.velocityX = -4;
  }else if(number == 0){
    alien.velocityX = 4;
  }

  alien.scale = 1.5;
  alien.lifetime = 200;
  alien.depth = knife.depth - 1;
}
