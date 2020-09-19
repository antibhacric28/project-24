
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var paperball;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperball=new paper(55,650,15)

	box1=new dustbin(275,605,10,100);
	box2=new dustbin(405,655,250,10);
	box3=new dustbin(535,605,10,100);
	ground=new dustbin(400,660,800,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
 //paperball.x=paperball.position.x 
//paperball.y=paperball.position.y 
 paperball.display();
 box1.display();
 box2.display();
 box3.display();
ground.display();


 
   
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:20,y:-30});
   
	   
	 }
   
   }


