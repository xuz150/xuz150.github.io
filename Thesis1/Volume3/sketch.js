// alert("Welcome to this Geometry Music Viz Webcam! Please allow the access to your microphone and camera. Let's get started by playing your favorite song or just sing by yourself!");

// Tracking
var colors;
var trackingData;

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


function setup(){
	createCanvas(windowWidth, windowHeight);
// get audio via mic
	mic = new p5.AudioIn();
	mic.start();

	rectMode(CENTER);
// capture the webcam
	capture = createCapture(VIDEO);
  	capture.size(windowWidth, windowHeight);
  	// capture.hide(); // hide the original webcam capture at buttom

 // tracking related
 	capture.style('opacity',0)// use this to hide the capture later on (change to 0 to hide)...	
  	capture.id("myVideo"); //give the capture an ID so we can use it in the tracker below.
  	
  	tracking.ColorTracker.registerColor('red', function(r, g, b) {
  		if (r > 100 && g < 50 && b < 50) {
  			return true;
  		}
  		return false;
  	});

  	colors = new tracking.ColorTracker(['red']);
  	tracking.track('#myVideo', colors); // start the tracking of the colors above on the camera in p5

  //start detecting the tracking
  	colors.on('track', function(event) { //this happens each time the tracking happens
    	trackingData = event.data // break the trackingjs data into a global so we can access it with p5
  	});

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
  	image(capture, 0, 0, windowWidth, windowWidth * capture.height/capture.width);
// flip webcam (mirrow)
	pop();
// webcam color filter
	noStroke();
	fill(r0, g0, b0, 50);
	rect(windowWidth/2, windowHeight/2, windowWidth, windowHeight);

// display text instructions
	// t = "Press any key to shuffle the visualizations.";
	// fill(255, 255, 255);
	// textAlign(CENTER);
	// textSize(14);
	// text(t, windowWidth/2, windowHeight - 20);

// get volume
	var vol = mic.getLevel();
	// console.log(vol);

// // circle
// 	noStroke();
// 	fill(r1, g1, b1, 128);
// 	var radius = map(vol, 0, 1, h, w);
// 	ellipse(circleCenterX, circleCenterY, radius, radius);

// // square
// 	noStroke();
// 	fill(r2, b2, g2, 128);
// 	var lengthS = map(vol, 0, 1, h, w);
// 	rect(squareCenterX, squareCenterY, lengthS, lengthS);

// // triangle
// 	noStroke();
// 	fill(r3, g3, b3, 128);
// 	var lengthT = map(vol, 0, 1, h, w);
// 	triangle(triangleCenterX, triangleCenterY - sqrt(3)/3*lengthT, triangleCenterX - lengthT/2, triangleCenterY + sqrt(3)/6*lengthT, triangleCenterX + lengthT/2,triangleCenterY + sqrt(3)/6*lengthT);

// // circle frame
// 	noFill();
// 	stroke(r4, g4, b4);
// 	strokeWeight(sW);
// 	ellipse(circleCenterXf, circleCenterYf, radius, radius);

// // square frame
// 	noFill();
// 	stroke(r5, g5, b5);
// 	strokeWeight(sW);
// 	rect(squareCenterXf, squareCenterYf, lengthS, lengthS);

// // triangle frame
// 	noFill();
// 	stroke(r6, g6, b6);
// 	strokeWeight(sW);
// 	triangle(triangleCenterXf, triangleCenterYf - sqrt(3)/3*lengthT, triangleCenterXf - lengthT/2, triangleCenterYf + sqrt(3)/6*lengthT, triangleCenterXf + lengthT/2,triangleCenterYf + sqrt(3)/6*lengthT);

// tracking related 
  //console.log(trackingData);
  if(trackingData){ //if there is tracking data to look at, then...
    for (var i = 0; i < trackingData.length; i++) { //loop through each of the detected colors
    	console.log(trackingData.length)
      // console.log( trackingData[i] ) //{width: 151, height: 261, x: 200, y: 32, color: "magenta}
      // fill(255,255,0);
      // rect(trackingData[i].x,trackingData[i].y,trackingData[i].width,trackingData[i].height)

   	// flip visualizations (mirrow)
	push();
	translate(windowWidth,0);
	scale(-1.0,1.0); 
	// display visualizations

    // circle
	noStroke();
	fill(r1, g1, b1, 128);
	var radius = map(vol, 0, 1, h, w);
	ellipse(trackingData[0].x-50,trackingData[0].y-50, radius, radius);

// square
	noStroke();
	fill(r2, b2, g2, 128);
	var lengthS = map(vol, 0, 1, h, w);
	rect(trackingData[0].x+50,trackingData[0].y+50, lengthS, lengthS);

// triangle
	noStroke();
	fill(r3, g3, b3, 128);
	var lengthT = map(vol, 0, 1, h, w);
	triangle(trackingData[0].x, trackingData[0].y - sqrt(3)/3*lengthT, trackingData[0].x - lengthT/2, trackingData[0].y + sqrt(3)/6*lengthT, trackingData[0].x + lengthT/2,trackingData[0].y + sqrt(3)/6*lengthT);

// circle frame
	noFill();
	stroke(r4, g4, b4);
	strokeWeight(sW);
	ellipse(trackingData[0].x+70, trackingData[0].y+70, radius, radius);

// square frame
	noFill();
	stroke(r5, g5, b5);
	strokeWeight(sW);
	rect(trackingData[0].x-70, trackingData[0].y-70, lengthS, lengthS);

// triangle frame
	noFill();
	stroke(r6, g6, b6);
	strokeWeight(sW);
	triangle(trackingData[0].x*0.9, trackingData[0].y*0.9- sqrt(3)/3*lengthT, trackingData[0].x*0.9 - lengthT/2, trackingData[0].y*0.9 + sqrt(3)/6*lengthT, trackingData[0].x*0.9 + lengthT/2,trackingData[0].y*0.9 + sqrt(3)/6*lengthT);	

	// flip vosualizations (mirrow)
	pop();
    }

}

// based on volume make changes
// shuffle color
	if (vol >= 0.25) {
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
	}
}	

function keyPressed(){
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
}
