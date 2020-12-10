

let isInGoal = false;
let goalX = 5
let goalY = 5

function setup() {
  createCanvas(800, 800)
  background(220);
  goalpostsR = new Goal(goalX, goalY, "blue",0 ); // (5,5) is LEAST (x,y) possible
  goalpostsL= new Goal (goalX + 785, goalY + 300, "red",180 );
  ball1= new Ball (100, 100, 3, "white");
}

function draw(){
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
    fill(220); // change to background color when background is finalized
    strokeWeight(5);
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
    stroke(0);
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

  moveBall(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
    if (keyIsDown(LEFT_ARROW)) { //if you hold the up arrow, move up by speed
       this.x -= this.speed;
    }

    if (keyIsDown(RIGHT_ARROW)) { // if you hold the down arrow, move down by speed
        this.x += this.speed;
    }
}

    if(isInGoal){
    ball1.color = fill("green");
      // points + 1
      // changeControls
      ball1.bounceBall();
    goalY = goalY + random(5,790);
    goalX = goalX + random(5,790);
    isInGoal = false;
    }

}
