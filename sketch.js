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

function preload(){
  knifeImg = loadImage("knife.png");
  fruit1Img = loadImage("fruit1.png");
  fruit2Img = loadImage("fruit2.png");
  fruit3Img = loadImage("fruit3.png");
  fruit4Img = loadImage("fruit4.png");
  knifeSound = loadSound("knifeSwoosh.mp3");
}



function setup() {
  createCanvas(600, 600);
  
  knife = createSprite(20,20,20,20);
  knife.addImage(knifeImg);

  score = 0;

}

function draw() {
  background("lightblue");
  knife.x = mouseX;
  knife.y = mouseY;

  if(frameCount%75 == 0){
    
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

  if(mousePressedOver(fruit)){
    knifeSound.play();
    fruit.destroy();
    score += Math.round(random(0,5));
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
