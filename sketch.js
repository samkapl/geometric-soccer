


function setup() {
  createCanvas(800, 800)
  background(220);
  goalpostsR = new Goal(5, 5, "blue", 0); // (5,5) is LEAST (x,y) possible
  goalpostsL= new Goal (740,300, "red", 180);
}

function draw(){
angleMode(DEGREES);
goalpostsR.drawGoalPosts(); // draw goal on the right
goalpostsL.drawGoalPosts(); // draw goal on the left
ball(); // edit later
}
class Goal {  // create goals

	constructor(x,y, color, rotation){
		    this.x = x;
    		this.y = y;
        this.color = color;
        this.rotation = rotation;
	}

	drawGoalPosts(){ // instructions to draw goal

        stroke(this.color);
        fill(220); // change to background color when background is finalized
        strokeWeight(5);
    		beginShape();
        vertex(this.x + 50, this.y)
        vertex(this.x + 50, this.y)
        vertex(this.x, this.y);
        vertex(this.x, this.y +100);
        vertex(this.x+50, this.y + 100);
        vertex(this.x+50, this.y + 100);
        endShape();
        rotate(this.rotation); // needs to be fixed!!

	}

	}
function ball (){
 fill("pink");
 ellipse(100,100,30,30);
}
