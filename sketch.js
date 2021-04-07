var tom, tomImg;
var jerry, jerryImg;
var garden, gardenImg;
var jerryImg1,jerryImg2;
var tomImg2,tomImg4;
function preload() {
    //load the images here
    tomImg=loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.png");
    jerryImg=loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png");
    gardenImg=loadImage("images/garden.png");
    jerryImg2=loadImage("images/mouse2.png");
    tomImg2=loadImage("images/cat2.png");
    jerryImg1=loadImage("images/mouse1.png");
    tomImg4=loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom=createSprite(810,670,20,20);
    tom.addAnimation("running",tomImg);
    tom.scale=0.2;

    jerry=createSprite(198,610,20,20);
    jerry.addAnimation("meeting",jerryImg);
    jerry.scale=0.1;

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x<(tom.width - jerry.width)/2){
     jerry.addImage("mouseHappy",jerryImg1);
     jerry.changeImage("mouseHappy");

     tom.addAnimation("catRunning",tomImg);
     tom.changeAnimation("catRunning");
     tom.velocityX=0;
     tom.velocityY=0;
     
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
      jerry.addAnimation("mouseTeasing",jerryImg);
      jerry.changeAnimation("mouseTeasing")
      jerry.fameDelay=25;
  }

 if(keyCode===LEFT_ARROW){
    tom.addAnimation("catRunning",tomImg);
    tom.changeAnimation("catRunning");
    tom.velocityX=-2;
    tom.velocityY=0;
    
 }


}