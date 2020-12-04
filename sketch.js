//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;


function setup() {
  createCanvas(800, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}

function draw(){
	background(115, 239, 250);
 noStroke();
  fill("green");
  textSize(100);
  text("??'()/'??'()/'???'??/'()()", 0,450,);
  me.drawMe();
  me.moveMe();

  if (frameCount % 25 == 0) {
      let  b = new Ball(width, random(0,height), -3);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke("pink");
        strokeWeight(3);
    		fill("orange");
		    ellipse(this.x,this.y,40,30);
        noStroke();
        fill(255);
        ellipse(this.x + 8, this.y, 10, 15);
        fill(0);
        ellipse(this.x + 9, this.y, 7, 9);
        fill(255);
        ellipse(this.x + 8, this.y - 2, 2, 2);
        stroke("pink");
        fill("orange");
        triangle(this.x - 20, this.y, this.x - 30, this.y - 15, this.x -30, this.y + 15,this.x - 20, this.y);




	}

	moveMe(){
    if (keyIsDown(LEFT_ARROW)) { //if you hold the up arrow, move up by speed
       this.x -= this.speed;
    }

    if (keyIsDown(RIGHT_ARROW)) { // if you hold the down arrow, move down by speed
        this.x += this.speed;
    }

    if (keyIsDown(UP_ARROW)) { // if you hold the down arrow, move down by speed
        this.y -= this.speed;
      }
   if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
          this.y += this.speed;
}
  }


}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill("red");
		  ellipse(this.x,this.y,50,10);
      fill(0);
      triangle(this.x + 25, this.y, this.x + 40, this.y - 12, this.x + 40, this.y + 12, this.x + 25, this.y);
      ellipse(this.x-10, this.y, 5, 5);

	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
      			this.speed = -this.speed;
    		}
  	}

}
