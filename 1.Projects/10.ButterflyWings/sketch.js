let yoff = 0;


function setup(){
	createCanvas(600, 600);
}

function draw(){
	background(51);
	translate(width/2, height/2);

		stroke(0);
	fill(255, 0, 255, 199);
	strokeWeight(1);

	let da = PI/200;
	let dx = 0.05;

	let xoff = 0;
	beginShape();
	for(let a = 0; a <= TWO_PI; a += da){
		let n = noise(xoff, yoff);
		let r = sin(2 * a) * map(n, 0, 1, 50, 300);
		let x = r * cos(a);
		let y = r * sin(a);

		if(a < PI){
			xoff += dx;
		}
		else{
			xoff -= dx;
		}

		vertex(x, y);
	}
	endShape();

	yoff += 0.01;
}
