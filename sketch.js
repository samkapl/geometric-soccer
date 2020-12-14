
var p1score = 0;
var p2score = 0;


var counter = 0
var timeleft = 30

function convertSeconds(s) {
  var min = floor (s / 60);
  var sec = s % 60;
  return nf(min,2) + ':' + nf(sec,2);
}

function setup() {
  createCanvas(800,800);
background('aqua')



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
      counter = 0;
    }
  }
  setInterval(timeIt, 1000);
}
function draw(){
  noStroke();
  fill('black');
  textSize(40)

  text(p1score,400,300)
  text(p2score,800,300)




}
