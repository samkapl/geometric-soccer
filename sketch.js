
let moveMechanism = 0
let isInGoal = false;
let goalX = 5
let goalY = 5

function setup() {
  createCanvas(800, 800)
  goalpostsR = new Goal(goalX, goalY, color(76,246,246,96),0 ); // (5,5) is LEAST (x,y) possible
  goalpostsL= new Goal (goalX + 785, goalY + 300, color(104, 246, 76, 93),180 );
  ball1= new Ball (100, 100, 3, color(85, 235, 150, 92));
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
      console.log ("in goal");
    }
      else{
console.log("not in goal");
};

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
      if (ball1.x <= 50 && ball1.x >= 10 && ball1.y <= 100 && ball1.y >= 10){
          this.speed = -this.speed;
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
}

  moveBall(){
  if (moveMechanism == 0){
    this.moveWithKeys();
  }
  else if (moveMechanism == 1) {
    this.moveWithSpace();
  }


  if(isInGoal){
  ball1.color = color(random(0,255));
    // points + 1
    // changeControls
  //this.bounceBall();
  goalY = goalY + random(5,790);
  goalX = goalX + random(5,790);
  isInGoal = false;
  moveMechanism = moveMechanism + 1
  }


}

}
