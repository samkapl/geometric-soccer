

var counter = 0
var timeleft = 180

function convertSeconds(s) {
  var min = floor (s / 60);
  var sec = s % 60;
  return nf(min,2) + ':' + nf(sec,2);
}

function setup() {
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
