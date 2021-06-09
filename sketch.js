var Bg
var Boy,boyImg;
var Girl,girlImg;
function preload(){
  Bg = loadImage("BgImg.webp")
  boyImg = loadImage("BoyI.png")
  girlImg = loadImage("GirlI.png")
}

function setup() {
  createCanvas(displayWidth-30,displayHeight-30);
  Boy = createSprite(180,displayHeight-400)
  Boy.addImage(boyImg)
  Boy.scale=0.8
  Girl = createSprite(displayWidth-270,displayHeight-400)
  Girl.addImage(girlImg)
  Girl.scale=0.8;
}


function draw() {
  background(Bg);  
  drawSprites();
}