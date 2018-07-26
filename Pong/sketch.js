// Pong

//variables
var side1 = {};
var side2 = {};
var box1;
var box2;
var ball = {};
var yspeed;
var xspeed;
var xball;
var yball;
var textt;
var textt2;
// SETUP FUNCTION - Runs once at beginning of program
function setup() {
  createCanvas(800, 600);
  //initialize
  side1 = {
    x: 10,
    y: 10,
    w: 20,
    h: 100,
  };
  side2 = {
    x: 770,
    y: 10,
    w: 20,
    h: 100,
  };
  ball = {
    x: 50,
    y: 50,
  };
  box1 = rect;
  box2 = rect;
  xball = 400;
  yball = 300;
  yspeed = 0;
  xspeed = 3;
  textt = " ";
  textt2 = " ";
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
  // logic
  // move ball
  xball = xball + xspeed;
  yball = yball - yspeed;
  //side detector
  //right
  if (xball > side2.x - 25 && yball > side2.y && yball < side2.y + side2.h) {
    xspeed = -5;
    yspeed = 5;
  }
  //left
  if (xball < side1.x + 50 && yball > side1.y && yball < side1.y + side1.h) {
    xspeed = 4;
    yspeed = -5;
  }
  //top
  if (yball < 30 && xball < 800 && xball > 0) {
    xspeed = -5;
    yspeed = -4;
  }
  //bottom
  if (yball > 570 && xball < 800 && xball > 20) {
    xspeed = +5;
    yspeed = +4;
  }
  if (xball > 900 || xball < -100) {
    textt = "GAME OVER";
    textt2 = "press [SPACE] to restart"
    xspeed = 0;
    yspeed = 0;
  }


  //box left
  if (mouseIsPressed && mouseY >= 10 && mouseY <= 495) {
    side1.y = mouseY;
  }
  //box right
  if (mouseIsPressed && mouseY >= 10 && mouseY <= 495) {
    side2.y = mouseY;
  }

  //draw
  background(0);
  fill(255)
  stroke(255);
  line(400, 0, 400, 600);
  box1(side1.x, side1.y, side1.w, side1.h);
  fill(255)
  box2(side2.x, side2.y, side2.w, side2.h);
  fill(255, 0, 0);
  stroke(0);
  strokeWeight(1);
  ellipse(xball, yball, ball.x, ball.y);
  fill(255);
  textSize(50);
  text(textt, 40, 300);
  textSize(20);
  text(textt2, 500, 280);

}
function keyPressed() {
  if (keyCode == 32) {
    setup();
  }
}



