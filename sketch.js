const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane1,plane2;
var rubber1,rubber2;
var stone1,stone2;
var iron1,iron2;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(1100,300,40);
    rubber2 = new Rubber(200,500,80)
    stone1 = new Stone(700,200,20,60);
    stone2 = new Stone(300,400,100,100);
    iron1 = new Iron(400,300,90,20);
    iron2 = new Iron(900,100,70,70);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    
    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    stone1.display();
    stone2.display();
    iron1.display();
    iron2.display();
}