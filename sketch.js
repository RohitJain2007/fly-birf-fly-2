var moon 
var bamboo1,bamboo2
var bambooGroup
var dragons
var edges
var over
var score=0
function preload(){
  backImg=loadImage("images/bg img.png")
  overImg=loadImage("images/GameOver.png")
  moonImg=loadAnimation("images/moon1.png","images/moon2.png","images/moon3.png","images/moon4.png")
  dragImg=loadAnimation("images/drag 1.png","images/drag 2.png","images/drag 3.png","images/drag 4.png","images/drag 5.png")
  bamboo1Img=loadImage("images/bamboo1.png")
  bamboo2Img=loadImage("images/bamboo2.png")
}
function setup() 
{
  createCanvas(1200,750);
moon=createSprite(300,230,25,25)
moon.addAnimation("moon",moonImg)
moon.scale=0.2
dragons=createSprite(175,230,25,25)
dragons.addAnimation("dragon",dragImg)
dragons.scale=1
bambooGroup=new Group()
edges=createEdgeSprites()

}

function draw() 
{
background(backImg);
fill("blue")
textSize(20)
text("Points : "+score,360,80)
if(moon.isTouching(bambooGroup)){
  gameOver=createSprite(550,235)
  gameOver.addImage(overImg)
  text(score=score-1)
}
//text(score=score-1)
text(mouseX+","+mouseY,mouseX,mouseY)
/*if(keyWentDown("space")){
  console.log("mousePress")
  moon.velocityX=1
  moon.velocityY=1
  dragons.velocityX=1
  dragons.velocityY=1
}*/
if (keyDown(UP_ARROW)){
  moon.y=moon.y-10
  dragons.y=dragons.y-10
}
if(keyDown(DOWN_ARROW)){
  moon.y=moon.y+10
  dragons.y=dragons.y+10
}
spawnBamboo()
dragons.bounceOff(edges)
moon.bounceOff(edges)
drawSprites()


}
function spawnBamboo(){
  if(frameCount%250===0){
    bamboo1=createSprite(1200,random(120,180),50,320)
    bamboo1.addImage(bamboo1Img)
    bamboo1.scale=1.7
    bamboo2=createSprite(1190,random(400,600),50,320)
    bamboo2.addImage(bamboo2Img)
    bamboo2.scale=1.7
    bamboo1.velocityX=-4
    bamboo2.velocityX=-4
  bambooGroup.add(bamboo1)
  bambooGroup.add(bamboo2)
  }
 
}
