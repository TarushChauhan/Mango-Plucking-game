
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy
var tree
function preload(){

	boyImage=loadImage("boy.png")
	mangoImage=loadImage("mango.png")
	stoneImage=loadImage("stone.png")
	treeImage=loadImage("tree.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
boy=createSprite(200,640,20,20)
boy.scale=0.1
boy.addImage(boyImage)

tree=createSprite(600,460,20,20)
tree.scale=0.4
tree.addImage(treeImage)

ground1=new Ground(400,695,850,10)

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(100);
  ground1.display()
  



  drawSprites();
  }
  
function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
}


