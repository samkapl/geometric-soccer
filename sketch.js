

function setup() {
  createCanvas(800, 800)
  background(220);
  goalposts = new Goal(5, 5, "blue"); // (5,5) is LEAST (x,y) possible

}

function draw(){

goalposts.drawGoalPosts(); // draw goal

}

class Goal {  // create goal

	constructor(x,y, color){
		    this.x = x;
    		this.y = y;
        this.color = color;
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
	}

	}
