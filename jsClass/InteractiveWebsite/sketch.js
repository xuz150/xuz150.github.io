alert("Welcome to this Geometry Music Viz Photo Booth! Please allow the access to your microphone for the music visualization and to your camera for the photo booth. Let's get started by playing your favorite song or just sing by yourself!");

// Mic and Webcam
var mic;
var capture;

// shape center points
var circleCenterX; //windowWidth/3
var circleCenterY; //windowHeight*2/3
var squareCenterX; //windowWidth/2
var squareCenterY; //windowWidth/2
var triangleCenterX; //windowWidth/2
var triangleCenterY; //windowWidth/2

// frame center points
var circleCenterXf;
var	circleCenterYf;
var	squareCenterXf;
var	squareCenterYf;
var	triangleCenterXf;
var	triangleCenterYf;  

// webcam filter color
var r0, g0, b0;

// shapes colors
var r1, g1, b1, r2, g2, b2, r3, g3, b3;

// frame colors
var r4, g4, b4, r5, g5, b5, r6, g6, b6;

// sizes (to map volume)
var w, h;

// stroke weight
var sW;

// // line
// var x1, y1, x2, y2;


function setup(){
	createCanvas(windowWidth, windowHeight);

	mic = new p5.AudioIn();
	mic.start();

	rectMode(CENTER);

	capture = createCapture(VIDEO);
  	capture.size(windowWidth, windowHeight);
  	capture.hide();

  	s = "The quick brown fox jumped over the lazy dog.";
	fill(50);
	text(s, 10, 10, 100, 100);


// initial sizes and locations
// sizes (used to map volume)
	w = random(windowWidth*0.2, windowWidth*0.8);
	h = random(windowHeight*0.2, windowHeight*0.8);

// shape center points
	circleCenterX = random(windowWidth*0.2, windowWidth*0.8);
	circleCenterY = random(windowHeight*0.2, windowHeight*0.8);
	squareCenterX = random(windowWidth*0.2, windowWidth*0.8);
	squareCenterY = random(windowHeight*0.2, windowHeight*0.8);
	triangleCenterX = random(windowWidth*0.2, windowWidth*0.8);
	triangleCenterY = random(windowHeight*0.2, windowHeight*0.8);  

// frame center points
	circleCenterXf = random(windowWidth*0.2, windowWidth*0.8);
	circleCenterYf = random(windowHeight*0.2, windowHeight*0.8);
	squareCenterXf = random(windowWidth*0.2, windowWidth*0.8);
	squareCenterYf = random(windowHeight*0.2, windowHeight*0.8);
	triangleCenterXf = random(windowWidth*0.2, windowWidth*0.8);
	triangleCenterYf = random(windowHeight*0.2, windowHeight*0.8); 

//stroke weight
	sW = random(2,8);	


// initial colors
	r0 = random(0,255);
	g0 = random(0,255);
	b0 = random(0,255); 

	r1 = random(0,255);
	g1 = random(0,255);
	b1 = random(0,255);

	r2 = random(0,255);
	g2 = random(0,255);
	b2 = random(0,255);

	r3 = random(0,255);
	g3 = random(0,255);
	b3 = random(0,255); 

	r4 = random(0,255);
	g4 = random(0,255);
	b4 = random(0,255); 

	r5 = random(0,255);
	g5 = random(0,255);
	b5 = random(0,255); 

	r6 = random(0,255);
	g6 = random(0,255);
	b6 = random(0,255); 

}


function draw(){
// flip webcam (mirrow)
	push();
	translate(windowWidth,0);
	scale(-1.0,1.0); 
// display webcam
  	// image(capture, 0, 0);
  	image(capture, 0, 0, windowWidth, windowWidth * capture.height/capture.width);
// flip webcam (mirrow)
	pop();

	// webcam color filter
	noStroke();
	fill(r0, g0, b0, 50);
	rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  	// filter(DILATE);

// display text instructions
	t = "Press the LEFT arrow key to shuffle the colors. Press the RIGHT arrow key to shuffle the visualizations.";
  	// t = "Press any key to shuffle the colors. Click the mouse to shuffle the visualizations.";
	fill(255, 255, 255);
	textAlign(CENTER);
	textSize(14);
	text(t, windowWidth/2, windowHeight - 20);

	// t2 = ""
	// fill(255, 255, 255);
	// text(t2, windowWidth - 100, windowHeight - 100, windowWidth - 100 - 200, windowHeight - 100 - 200);

// get volume
	var vol = mic.getLevel();

// circle
	noStroke();
	fill(r1, g1, b1, 128);
	var radius = map(vol, 0, 1, h*0.5, w*0.5);
	ellipse(circleCenterX, circleCenterY, radius, radius);

// square
	noStroke();
	fill(r2, b2, g2, 128);
	var lengthS = map(vol, 0, 1, h*0.5, w*0.5);
	rect(squareCenterX, squareCenterY, lengthS, lengthS);

// triangle
	noStroke();
	fill(r3, g3, b3, 128);
	var lengthT = map(vol, 0, 1, h*0.5, w*0.5);
	triangle(triangleCenterX, triangleCenterY - sqrt(3)/3*lengthT, triangleCenterX - lengthT/2, triangleCenterY + sqrt(3)/6*lengthT, triangleCenterX + lengthT/2,triangleCenterY + sqrt(3)/6*lengthT);

// circle frame
	noFill();
	stroke(r4, g4, b4);
	strokeWeight(sW);
	ellipse(circleCenterXf, circleCenterYf, radius, radius);

// square frame
	noFill();
	stroke(r5, g5, b5);
	strokeWeight(sW);
	rect(squareCenterXf, squareCenterYf, lengthS, lengthS);

// triangle frame
	noFill();
	stroke(r6, g6, b6);
	strokeWeight(sW);
	triangle(triangleCenterXf, triangleCenterYf - sqrt(3)/3*lengthT, triangleCenterXf - lengthT/2, triangleCenterYf + sqrt(3)/6*lengthT, triangleCenterXf + lengthT/2,triangleCenterYf + sqrt(3)/6*lengthT);

// // line
// 	stroke(255,0,0);
// 	strokeWeight(5);
// 	line(x1*vol, y1*vol, x2*vol, y2*vol);
}


function keyPressed(){

if (keyCode === LEFT_ARROW) {
// shuffle color
	r0 = random(0,255);
	g0 = random(0,255);
	b0 = random(0,255); 

	r1 = random(0,255);
	g1 = random(0,255);
	b1 = random(0,255);

	r2 = random(0,255);
	g2 = random(0,255);
	b2 = random(0,255);

	r3 = random(0,255);
	g3 = random(0,255);
	b3 = random(0,255); 

	r4 = random(0,255);
	g4 = random(0,255);
	b4 = random(0,255); 

	r5 = random(0,255);
	g5 = random(0,255);
	b5 = random(0,255); 

	r6 = random(0,255);
	g6 = random(0,255);
	b6 = random(0,255); 
}

if (keyCode === RIGHT_ARROW) {
	// function mouseClicked() {
// shuffle sizes and locations
// sizes (used to map volume)
	w = random(windowWidth*0.2, windowWidth*0.8);
	h = random(windowHeight*0.2, windowHeight*0.8);

// shape center points
	circleCenterX = random(windowWidth*0.2, windowWidth*0.8);
	circleCenterY = random(windowHeight*0.2, windowHeight*0.8);
	squareCenterX = random(windowWidth*0.2, windowWidth*0.8);
	squareCenterY = random(windowHeight*0.2, windowHeight*0.8);
	triangleCenterX = random(windowWidth*0.2, windowWidth*0.8);
	triangleCenterY = random(windowHeight*0.2, windowHeight*0.8);  

// frame center points
	circleCenterXf = random(windowWidth*0.2, windowWidth*0.8);
	circleCenterYf = random(windowHeight*0.2, windowHeight*0.8);
	squareCenterXf = random(windowWidth*0.2, windowWidth*0.8);
	squareCenterYf = random(windowHeight*0.2, windowHeight*0.8);
	triangleCenterXf = random(windowWidth*0.2, windowWidth*0.8);
	triangleCenterYf = random(windowHeight*0.2, windowHeight*0.8); 

//stroke weight
	sW = random(2,8);	

// //lines
// 	x1 = random(windowWidth*0.2 windowWidth*0.8);
// 	y1 = random(windowHeight*0.2, windowHeight*0.8);
// 	x2 = x1 + random(windowWidth*0.25 windowWidth*0.5);
// 	y2 = y2 + random(windowHeight*0.25, windowHeight*0.5);
}

}
