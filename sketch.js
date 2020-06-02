const colorarray = ['#4caf50','#ffeb3b','#fb8c00','#e53935','#795548','#757575','#7b1fa2','#1976d2'];
const colornames = ['green','yellow','orange','red','brown','gray','purple','blue']

//Colour picker
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
	strokeWeight(0);
	fill(colorarray[randomIntFromInterval(0,colorarray.length-1)]);
	ellipse(mouseX, mouseY, Math.floor(Math.random() * 100, Math.floor(Math.random() * 100)));
	
}