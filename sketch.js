var movingRect,FixedRect
var gameobject1,gameobject2,gameobject3,gameobject4
function setup() {
    createCanvas(1200,800);
  movingRect = createSprite(200,300,50,50)
  FixedRect = createSprite(300,200,50,50)
  movingRect.shapeColor=("green")
  FixedRect.shapeColor=("green")
  gameobject1=createSprite(100,50,20,20)
  gameobject1.shapeColor=("green")
  
  gameobject2=createSprite(150,50,20,20)
  gameobject2.shapeColor=("green")

  gameobject3=createSprite(200,50,20,20)
  gameobject3.shapeColor=("green")

  gameobject4=createSprite(250,50,20,20)
  gameobject4.shapeColor=("green")
  }

function draw() {
 
  background("black"); 
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY 
  console.log(movingRect.x-FixedRect.x)
   if (istouching(movingRect,gameobject1)){movingRect.shapeColor=("yellow")
    gameobject1.shapeColor=("yellow")  
    }else{
      movingRect.shapeColor=("green")
      gameobject1.shapeColor=("green")
    }
  
  drawSprites();
}

    


    
  
