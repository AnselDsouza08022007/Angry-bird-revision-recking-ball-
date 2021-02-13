const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1;
var box2
var box3
var box4
var box5
var box6
var box7
var box8
var BG 
var sling
function preload(){
BG=loadImage("sprites/bg.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(850,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(850,320,70,70);
    box4 = new Box(920,320,70,70);
    box5 = new Box(850,320,70,70);
    box6 = new Box(920,320,70,70);
    box7 = new Box(850,320,70,70);
    box8 = new Box(920,320,70,70);

    bird = new Bird(100,100);
    sling = new Slingshot(bird.body, {x: 600, y:50})
}

function draw(){
    background(BG);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display() 
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    ground.display();
    sling.display();
    
    bird.display();
}