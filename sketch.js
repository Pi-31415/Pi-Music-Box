var wave;
var notes1 = [277.262, 311.194, 370.081, 414.413, 466.160, 554.323, 622.207, 739.915, 830.491, 932.186];
var colors = ['#69F0AE', '#B2FF59', '#64FFDA', '#18FFFF', '#80D8FF', '#FFAB40', '#FFD740', '#82B1FF', '#8C9EFF', '#B388FF', '#EA80FC', '#FF80AB', '#FF8A80', '#eeeeee'];
//the selector for note
var index = 5;

function randomIntFromInterval(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');
	canvas.style('position', 'fixed');
	wave = new p5.Oscillator();
	wave.setType('triangle');
	wave.amp(1);
	background(colors[randomIntFromInterval(0, colors.length - 1)]);
	//load text
}

function draw() {
	fill(50, 50, 50);
	textSize(32);
	text('Music Box', windowWidth/2, windowHeight/2);
	textSize(24);
	text('By Pi', windowWidth/2, (windowHeight/2)+30);
	text('Press to play', windowWidth/2, (windowHeight/2)+60);
}

function mousePressed() {
	//change background color every time the user clicks
	background(colors[randomIntFromInterval(0, colors.length - 1)]);
	//locking between two extreme notes
	if (index == 10) {
		index = 0;
	} else if (index == -1) {
		index = 9;
	}
	//then random number generate for the sign
	var sign = randomIntFromInterval(0, 2);
	wave.start(0, notes1[index]);
	//then change the sign according to sign variable
	if (sign == 0) {
		if (index == 0) {
			index++;
		} else {
			index--;
		}
	} else if (sign == 1) {
		if (index == 9) {
			index--;
		} else {
			index++;
		}
	} else {}
}

function mouseReleased() {
	wave.stop();
}
