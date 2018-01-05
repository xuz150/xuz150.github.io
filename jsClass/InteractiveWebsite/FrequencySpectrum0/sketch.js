alert("Welcome to this Frequency Spectrum Music Viz Webcam! Please allow the access to your microphone and camera. Let's get started by playing your favorite song or just sing by yourself!");

// Mic and Webcam
var mic;
var capture;

// webcam filter color
var r0, g0, b0;

// 6 spectrume colors
var r1, g1, b1, r2, g2, b2, r3, g3, b3, r4, g4, b4, r5, g5, b5, r6, g6, b6;

// spectrume Y positon
var y1, y2, y3, y4, y5, y6;

// stroke weight
var s1, s2, s3, s4, s5, s6;


function setup(){
	createCanvas(windowWidth, windowHeight);

// get microphone
	mic = new p5.AudioIn();
	mic.start();

// Analyze the frequency of sound
 	fft = new p5.FFT();
 	fft.setInput(mic);

// webcam capture
	capture = createCapture(VIDEO);
  	capture.size(windowWidth, windowHeight);
  	capture.hide();

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

// initial positions and strokes
	y1 = random(windowHeight*0.5, windowHeight*0.9);
	y2 = random(windowHeight*0.5, windowHeight*0.9);
	y3 = random(windowHeight*0.5, windowHeight*0.9);
	y4 = random(windowHeight*0.5, windowHeight*0.9);
	y5 = random(windowHeight*0.5, windowHeight*0.9);
	y6 = random(windowHeight*0.5, windowHeight*0.9);

	s1 = random(1,10);
	s2 = random(1,10);
	s3 = random(1,10);
	s4 = random(1,10);
	s5 = random(1,10);
	s6 = random(1,10);
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
	rectMode(CENTER);
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

// get frequency spectrum	
var spectrum = fft.analyze();
// 1	
	beginShape();
	stroke(r1,g1,b1, 128)
	strokeWeight(s1)
	noFill();
	for (i = 0; i<spectrum.length; i++) {
		vertex(map(i, 0, spectrum.length, 0, windowWidth), map(spectrum[i], 0, 255, y1, 0) );
	}
	endShape();
//2
	beginShape();
	stroke(r2,g2,b2, 128)
	strokeWeight(s2)
	noFill();
	for (i = 0; i<spectrum.length; i++) {
		vertex(map(i, 0, spectrum.length, 0, windowWidth), map(spectrum[i], 0, 255, y2, 0) );
	}
	endShape();
//3
	beginShape();
	stroke(r3,g3,b3, 128)
	strokeWeight(s3)
	noFill();
	for (i = 0; i<spectrum.length; i++) {
		vertex(map(i, 0, spectrum.length, 0, windowWidth), map(spectrum[i], 0, 255, y3, 0) );
	}
	endShape();
//4
	beginShape();
	stroke(r4,g4,b4, 128)
	strokeWeight(s4)
	noFill();
	for (i = 0; i<spectrum.length; i++) {
		vertex(map(i, 0, spectrum.length, 0, windowWidth), map(spectrum[i], 0, 255, y4, 0) );
	}
	endShape();
//5
	beginShape();
	stroke(r5,g5,b5, 128)
	strokeWeight(s5)
	noFill();
	for (i = 0; i<spectrum.length; i++) {
		vertex(map(i, 0, spectrum.length, 0, windowWidth), map(spectrum[i], 0, 255, y5, 0) );
	}
	endShape();
//6
	beginShape();
	stroke(r6,g6,b6, 128)
	strokeWeight(s6)
	noFill();
	for (i = 0; i<spectrum.length; i++) {
		vertex(map(i, 0, spectrum.length, 0, windowWidth), map(spectrum[i], 0, 255, y6, 0) );
	}
	endShape();

}


function keyPressed(){

	// shuffle colors
	if (keyCode === LEFT_ARROW) {

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

	// shuffle positions and strokes
	if (keyCode === RIGHT_ARROW) {

	y1 = random(windowHeight*0.5, windowHeight*0.9);
	y2 = random(windowHeight*0.5, windowHeight*0.9);
	y3 = random(windowHeight*0.5, windowHeight*0.9);
	y4 = random(windowHeight*0.5, windowHeight*0.9);
	y5 = random(windowHeight*0.5, windowHeight*0.9);
	y6 = random(windowHeight*0.5, windowHeight*0.9);

	s1 = random(1,10);
	s2 = random(1,10);
	s3 = random(1,10);
	s4 = random(1,10);
	s5 = random(1,10);
	s6 = random(1,10);
	}

}
