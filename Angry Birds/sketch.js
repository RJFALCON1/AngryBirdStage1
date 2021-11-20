const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var world;
var engine;
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,390,1200,10);
  box1 = new Box(1000,350,50,50); 
  box2 = new Box(800,350,50,50);
  box3 = new Box(800,300,50,50);
  box4 = new Box(1000,300,50,50);
  pig1 = new Pig(900,350, 50,50);
  pig2 = new Pig(900,300, 50,50);
  bird1 = new Bird(300, 350, 50,50);
  
}

function draw() {
  background("black");
  Engine.update(engine);
  ground.display();  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  pig1.display();
  pig2.display();
  bird1.display();
}




