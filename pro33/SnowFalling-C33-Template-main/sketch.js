var bg;
var snowImg;
var snowG;
var skater;
function preload(){
bg = loadImage("snow1.jpg");
snowImg = loadImage("snow4.webp");
skaterImg = loadImage("skater.png");
}
function setup() {
  createCanvas(800,800);
  scene = createSprite(400, 200, 50, 50);
  scene. addImage(bg);

  skater = createSprite(400,170,10,10);
  skater.addImage(skaterImg);
  skater.scale = 0.5;

  snowG = new Group();
  snow = createSprite(200,20);
  snow.addImage(snowImg);
  snow.scale = 0.1;
  snow.velocityY = 1;
  snow.lifetime = 100;
}
 
function draw() {
  background(255,255,255); 
  if (keyDown(LEFT_ARROW)){
    skater.x=skater.x-5;
  } 
  if (keyDown(RIGHT_ARROW)){
    skater.x=skater.x+5;
  } 
  createSnow();

  drawSprites();
}


function createSnow() {
  if (World.frameCount % 20 == 0) {
  var snow = createSprite(Math.round(random(200, 600),40, 10, 10));
  snow.addImage(snowImg);
  snow.scale=0.12;
  snow.velocityY = 3;
  snow.lifetime = 130;
  snowG.add(snow);
  }
}
