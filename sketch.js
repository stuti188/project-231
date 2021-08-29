const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerBase = new Computerbase(300,200,20,20);
   computerPlayer = new Computerplayer(200,500,30,30);
   player = new Player (400,600,20,20);
   playerBase = new Playerbase ()


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 

   computerBase.display()
   computerplayer.display()
   player.display()
   playerBase.display()






   //display Player and computerplayer


}
