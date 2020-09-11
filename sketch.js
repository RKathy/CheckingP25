
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(500, 200);

	keyPressed();
	engine = Engine.create();
	world = engine.world;

	box1 = new Box(300,130,15,110);
	box2 = new Box(340,185,85,15);	
	
	box3 = new Box(380,130,15,110);
	

	paper = new Paper(90,195,20); 
	
	ground = new Ground(400,height,800,20);
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
 
 console.log("pa=" + paper.body.position.y);
 console.log("box1=" + box1.body.position.y);
 console.log("box2=" + box2.body.position.y);
 console.log("box3=" + box3.body.position.y);
  
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();

  }

 function keyPressed() {
	 if (keyCode===UP_ARROW){
		 console.log("PAPER "+paper.body.position.y);
Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-47});
	 }
 }


