const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world
var player1, player2X = 100, player2Y = 100, playerSpeed = 5
var ground, ground2
var face, bg
var lazers = [1, 2, 3, 4]


function preload()
{
	face = loadImage("smile.png")
  bg = loadImage("bg.jpg")
  //g1 = loadImage("G1.jpg")
  //g2 = loadImage("G2.jpg")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  opts = 
  {
    restitution: 1,
    frictionAir: 0.1
  }

  flor = 
  {
    isStatic: true
  }

  //create bodys
  player1 = Bodies.rectangle(500, 300, 40, 40, opts)
  World.add(world, player1)
  ground = Bodies.rectangle(400, 690, 800, 20, flor)
  World.add(world, ground)
  ground2 = Bodies.rectangle(600, 400, 800, 20, flor)
  World.add(world, ground2)
  lazers[1] = new createObject(false, true, 500, 150, 1000, 10, false, true, false, undefined, 0, 0, 0);


	Engine.run(engine);

}


function draw() {
  playerControler1()
  playerControler2()
  rectMode(CENTER);
  imageMode(CENTER)
  background("gray");

  image(bg, 800/2, 700/2, 800, 700)
  
  push()
  fill("red")
  rect(player1.position.x, player1.position.y, 40, 40)
  image(face, player1.position.x+10, player1.position.y-5, 70, 70)
  pop();

  //obsticals
  lazers[1].update()


  //grownd
  rect(ground.position.x, ground.position.y, 800, 20)
  rect(ground2.position.x, ground2.position.y, 800, 20)
  //grownd deco
  //image(g1, ground2.position.x, ground2.position.y, 800, 100)


  //player
  rect(player2X, player2Y, 30, 30, 100)

  Engine.update(engine)
}

function playerControler1()
{
  //arrow keys
  //if(keyIsDown(LEFT_ARROW)) {playerX -= playerSpeed};
  //if(keyIsDown(RIGHT_ARROW)) {playerX += playerSpeed};
  //if(keyIsDown(UP_ARROW)) {playerY -= playerSpeed};
  //if(keyIsDown(DOWN_ARROW)) {playerY += playerSpeed};

  // A S W D
  if(keyIsDown(87)) {player2Y -= playerSpeed};
  if(keyIsDown(83)) {player2Y += playerSpeed};
  if(keyIsDown(65)) {player2X -= playerSpeed};
  if(keyIsDown(68)) {player2X += playerSpeed};
}


function playerControler2()
{
  //arrow keys
  //if(keyIsDown(LEFT_ARROW)) {playerX -= playerSpeed};
  //if(keyIsDown(RIGHT_ARROW)) {playerX += playerSpeed};
  //if(keyIsDown(UP_ARROW)) {playerY -= playerSpeed};
  //if(keyIsDown(DOWN_ARROW)) {playerY += playerSpeed};

  // A S W D
  if(keyIsDown(74)) {Matter.Body.applyForce(player1, {x:0, y:0}, {x:-0.001, y:0})};
  if(keyIsDown(76)) {Matter.Body.applyForce(player1, {x:0, y:0}, {x:0.001, y:0})};
  //if(keyIsDown(73)) {Matter.Body.applyForce(player1, {x:0, y:0}, {x:0, y:0.01})};//????????
}

function reset()
{
  window.location.reload()
}