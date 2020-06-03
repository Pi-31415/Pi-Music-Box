var wave;

function setup(){
	createCanvas(100,100);
	
	wave = new p5.Oscillator();
	wave.setType('sine');
	wave.amp(1);
	wave.freq(300);
	wave.start();
	
}

function draw(){
	background(51);
}