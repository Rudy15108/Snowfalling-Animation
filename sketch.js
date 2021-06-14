var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var fish,frostbite,window
var shards=[]


function preload(){
  backgroundImg = loadImage("snow1.jpg");
  fishImg = loadImage("Frozen_Fish.png")
  SkinImg = loadImage("FrostBite.png")
  windowImg = loadImage("window.jpg")
}

function setup() {
  createCanvas(1600,800);

  fish=createSprite(200,710,50,50)
  fish.addImage(fishImg)
   
  frostbite=createSprite(1300,150,50,50)
  frostbite.addImage(SkinImg)
  frostbite.scale=0.7

  Window=createSprite(1300,150,50,50)
  Window.addImage(windowImg)
  Window.scale=0.4

}

function draw() {
  background(backgroundImg); 
  

  for (var j = 75; j <=width; j=j+50) { 
    shards.push(new Shard(j,75));
  }

  //create 2nd row of shard objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    shards.push(new Shard(j,175));
  }

  //create 3rd row of shard objects

  for (var j = 75; j <=width-10; j=j+50) 
  {
    shards.push(new Shard(j,275));
  }

  
  //create 4th row of shard objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    shards.push(new Shard(j,375));
  }

  fish.x=fish.x+3
  Window.depth=Window.depth-1
  drawSprites();
}