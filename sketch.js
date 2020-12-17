
let score = 0
let counter = 0;
let timeleft = 120;
let moveMechanism = 0;
let isInGoal = false;
let goalX = 5
let goalY = 5
let interval
let loss = 0
let endgame = 0;

function convertSeconds(s) {
  var min = floor (s / 60);
  var sec = s % 60;
  return nf(min,2) + ':' + nf(sec,2);
}

function checkLoss(){
  if (endgame == 1){
    loss = 1
    print("loss")
  }
}

function setup() {
  createCanvas(800, 400)
  goalpostsR = new Goal(goalX, goalY, color(76,246,246,96),0 ); // (5,5) is LEAST (x,y) possible
  goalpostsL= new Goal (goalX + 785, goalY + 300, color(104, 246, 76, 93),180 );
  ball1= new Ball (100, 100, 3, color(85, 235, 150, 92));
  var params = getURLParams();
console.log(params);
if (params.minute) {
  var min = params.minute;
  timeleft = min * 60;
}
  var timer = select('#timer');
  timer.html(convertSeconds(timeleft - counter));

  function timeIt() {
    counter++;
    timer.html(convertSeconds(timeleft - counter));
    if (counter == timeleft){
      print("okay")
      clearInterval(interval);
      endgame = 1
      console.log("endgame = 1");
    }
  }
  interval=setInterval(timeIt, 1000);
}

function draw(){
  background(66, 212,170,83);
  angleMode(DEGREES);
  goalpostsR.drawGoalPosts(); // draw goal on the right
  goalpostsL.drawGoalPosts(); // draw goal on the left
  goalpostsR.checkGoal();
  goalpostsL.checkGoal();
  ball1.drawBall();
  ball1.moveBall();
  noStroke();
 fill('gray');
 textSize(15)
 textFont('courier new')
 text("points: " + score,700,20)
 text("hint: explore the keyboard!",20,370 )
 if(moveMechanism == 5){
   textSize(20);
  text("Congratulations! you've completed Geometric Soccer! Refresh the page to play again!", 10 ,170)
  console.log("win") }
  checkLoss();
  if (loss == 1){
    textSize(20);
   text("Time's Up! How did you do? Refresh the page to play again!", 10 ,170)
  }
}
class Goal {  // create goals

  constructor(x,y, color, rotation){
    this.x = x;
    this.y = y;
    this.color = color;
    this.rotation = rotation;
  }

  drawGoalPosts(){ // instructions to draw goal
    push();
    translate(this.x,this.y);
    rotate(this.rotation);
    stroke(this.color);
    fill(66,212,170,83);
    strokeWeight(10);
    beginShape();
    vertex(50, 0)
    vertex(50, 0)
    vertex(0, 0);
    vertex(0, 100);
    vertex(50, 100);
    vertex(50, 100);
    endShape();
    pop();
  }

 checkGoal(){
    if(ball1.x <= 50 && ball1.x >= 10 && ball1.y <= 100 && ball1.y >= 10){
      isInGoal = true;
      console.log("in goal");
    }
   else if (ball1.x <= 780 && ball1.x >= 750 && ball1.y <= 300 && ball1.y >= 210) {
     isInGoal = true;
     console.log("in goal");
   }

}}

class Ball{

  constructor(x,y, speed, color){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = color;
  }
  drawBall(){
    strokeWeight(1);
    stroke(66,212,88,83);
    fill(this.color); // needs to be debugged
    ellipse(this.x, this.y, 50, 50);
    fill(0);
    ellipse(this.x- 10, this.y, 5, 5);
    ellipse(this.x + 10, this.y, 5, 5);
    noFill();
    strokeWeight(5);
    ellipse(this.x, this.y + 15, 10, 5);
  }

  bounceBall(){
      if (isInGoal = true){
        this.x = 400
        this.y = 200
        console.log("bounce")
        }
      }

moveWithKeys(){
    if (keyIsDown(UP_ARROW)) {
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.speed;
    }
    if (keyIsDown(LEFT_ARROW)) {
       this.x -= this.speed;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        this.x += this.speed;
    }
  }
moveWithSpace(){
  if(keyIsDown(32)){ // space bar
  this.y += this.speed;
  }
  if(keyIsDown(RETURN)){
    this.y -= this.speed;
  }
  if(keyIsDown(SHIFT)){
    this.x += this.speed;
  }
  if(keyIsDown(BACKSPACE)){
    this.x -= this.speed;
  }
}

moveWithUDLF(){
  if(keyIsDown(85)){
  this.y -= this.speed; // d
  }
  if(keyIsDown(68)){
    this.y += this.speed; // u
  }
  if(keyIsDown(82)){
    this.x += this.speed; // r
  }
  if(keyIsDown(76)){ // l
    this.x -= this.speed;
  }
}

moveWithCarats(){
  if(keyIsDown(54)){  // up carat
  this.y -= this.speed;
  }
  if(keyIsDown(86)){ // V
    this.y += this.speed;
  }
  if(keyIsDown(190)){ // right carat
    this.x += this.speed;
  }
  if(keyIsDown(188)){ // left carat
    this.x -= this.speed;
  }
}

moveWithCompass(){
  if(keyIsDown(78)){  // N
  this.y -= this.speed;
  }
  if(keyIsDown(83)){ // S
    this.y += this.speed;
  }
  if(keyIsDown(69)){ // E
    this.x += this.speed;
  }
  if(keyIsDown(87)){ // W
    this.x -= this.speed;
  }
}

  moveBall(){
  if (moveMechanism == 0){
    this.moveWithKeys();
  }
  else if (moveMechanism == 1) {
    this.moveWithSpace();
  }
else if (moveMechanism == 2){
  this.moveWithUDLF();
}
else if (moveMechanism == 3){
  this.moveWithCarats();
}
else if (moveMechanism == 4){
  this.moveWithCompass();
}

  if(isInGoal){
  ball1.color = color(random(0,255),random(0,255), random(0,255) );
  score = score + 1
  console.log("point" + score)
  this.bounceBall();
  isInGoal = false;
  moveMechanism = moveMechanism + 1
 console.log(moveMechanism)
  }

  }

}
