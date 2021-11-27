
var block

//creating a fuction setup
function setup() {
  createCanvas(1920,965);//defining canvas area by 400 by 400
  block = createSprite(200, 200, 20, 20)

  

}
//creating function draw
function draw() 
{
  background(30);//setting background
  background("black")
  
drawSprites()

if(keyIsDown(UP_ARROW)){
  block.y = block.y-3
}

if(keyIsDown(DOWN_ARROW)){
  block.y = block.y+3
}


if(keyIsDown(RIGHT_ARROW)){
  block.x = block.x+3
}

if(keyIsDown(LEFT_ARROW)){
  block.x = block.x-3
}
}
