var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rect1, rect2, rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(500,500)//(800, 700);
	rectMode(CENTER);



	

	packageSprite=createSprite(width/2, 320, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

//	if(KeyDown("DOWN_ARROW")){
//		packageSprite.velocityY = -6
//	}



	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rect1 = createSprite(110, 410, 20, 100)
	rect1.shapeColor = "red"
	rect2 = createSprite(250, 450, 250, 20)
	rect2.shapeColor = "red"
	rect3 = createSprite(390, 410, 20, 100)
	rect3.shapeColor = "red"




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

	packageSprite.collide( rect1 || rect2 ||rect3)

  drawSprites();
  
		
  
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody, false)
	 //Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
}
}



