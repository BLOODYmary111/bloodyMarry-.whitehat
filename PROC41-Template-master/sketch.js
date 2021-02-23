var man,lightning,drops1,drops2,drops3,drops4,drops5,drops6,drops7,drops8,drops9;
var man_img,lightning_img1,lightning_img2,lightning_img3,drops_img;
var drops=drops1,drops2,drops3,drops4,drops5,drops6;
function preload(){
    man_img=loadImage("images/man.png")
    lightning_img1=loadImage("images/2.png")
    lightning_img2=loadImage("images/3.png")
    lightning_img3=loadImage("images/4.png")
    
    drops_img=loadImage("images/drops.PNG")
    
}

function setup(){
    createCanvas(800,600)
   man=createSprite(300,410,1,1);
   man.addImage(man_img);
   man.scale=.5;
  drops1=createSprite(130,10,1,1);
  drops1.addImage(drops_img);
  drops1.velocityY=1;
  drops1.scale=.1;
  
  drops2=createSprite(110,10,1,1);
  drops2.addImage(drops_img);
  drops2.velocityY=1;
  drops2.scale=.1;
  drops3=createSprite(90,10,1,1);
  drops3.addImage(drops_img);
  drops3.velocityY=1;
  drops3.scale=.1;
  drops4=createSprite(70,10,1,1);
  drops4.addImage(drops_img);
  drops4.velocityY=1;
drops4.scale=.1;
  drops5=createSprite(30,10,1,1);
  drops5.addImage(drops_img);
  drops5.velocityY=1;
   drops5.scale=.1;
  drops6=createSprite(50,10,1,1);
  drops6.addImage(drops_img);
  drops6.velocityY=1;
  drops6.scale=.1;

 
 
}

function draw(){
    background("black")
  
  if(drops.velocityY=1){
      drops.velocityY=+.5;
  }
  var maxDrops=100;

 // for(var i=0;i<maxDrops;i++){
 //     drops.push(new drops(random(0,400),random(0,400)))
 // }
    drawSprites()
}   

