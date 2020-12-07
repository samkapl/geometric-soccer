

var counter = 0
var timeleft = 180

function convertSeconds(s) {
  var min = floor (s / 60);
  return nf(min,2) + ':' + nf(sec,2);
}

function setup() {
  background(220);
  noCanvas();

var params = getURLParams();
console.log(params);
if (params.minute) {
  var min = params.minute;
  timeleft = min * 60;
}
  var timer = select('#timer');
  timer.html(convertSeconds(timeleft - counter);

  function timeIt(){
    counter++;
    timer.html(convertSeconds(timeleft - counter);
  }
  setInterval(timeIt, 1000);


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
