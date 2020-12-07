
let isInGoal = false;

let goalX = 5
let goalY = 5

function setup() {
  createCanvas(800, 800)
  background(220);
  goalpostsR = new Goal(goalX, goalY, "blue",0 ); // (5,5) is LEAST (x,y) possible
  goalpostsL= new Goal (goalX + 785, goalY + 295, "red",180 );
  ball1= new Ball (100, 100, "purple");
}

function draw(){
  angleMode(DEGREES);
  goalpostsR.drawGoalPosts(); // draw goal on the right
  goalpostsL.drawGoalPosts(); // draw goal on the left
  goalpostsR.checkGoal();
  goalpostsL.checkGoal();
  ball1.drawBall();

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
    rotate(this.rotation); // needs to be fixed!!
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
    if(this.x >= 50 && this.x <= 10 && this.y >= 45 && this.y <= 10){
      isInGoal = true;
      console.log ("in goal");
    }
}}

class Ball{

  constructor(x,y, color){
    this.x = x;
    this.y = y;
    this.color = color;

  }
  drawBall(){
    strokeWeight(1);
    stroke(0);
    fill(this.color);
    ellipse(this.x, this.y, 50, 50);
    fill(0);
    ellipse(this.x- 10, this.y, 5, 5);
    ellipse(this.x + 10, this.y, 5, 5);
    noFill();
    strokeWeight(5);
    ellipse(this.x, this.y + 15, 10, 5);
  }

  moveBall(){
    if(isInGoal){
      fill(random(0,255),random(0,255),random(0,255))
      // points + 1
      // changeControls
      // bounce
    goalY = goalY + random(5,790);
    goalX = goalX + random(5,790);
    isInGoal = false;
    }
  }

  }
