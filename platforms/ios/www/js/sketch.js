var tX = 0; 
var tY = 0;

function setup() {
	var myCan = createCanvas(windowWidth, windowHeight);
	myCan.parent('p5Container');
}

function draw() {
	background(255, 200, 200);
	color(255, 0, 0);
	//rect(touchX, touchY, 50, 50);
	rect(tX, tY, 50, 50);
	
}

$('#p5Container').on('touchstart', touchStart);
$('#p5Container').on('touchend', touchEnd);

function touchStart(e){
  console.log('touch start');
  e.preventDefault();

  tX = e.originalEvent.touches[0].pageX;
  tY = e.originalEvent.touches[0].pageY;

  return false;
}

function touchEnd(e) {
  console.log('touch end');
}