var weatherData;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=001b0f58045147663b1ea518d34d88b4';
var units = '&units=imperial';
var input;

// var soundB, soundW;
// var imgCloud;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  noStroke();
  fill(58,65,165);
  rect(0, 0, windowWidth, windowHeight/2);
  fill(238,197,215);
  rect(0, windowHeight/2, windowWidth, windowHeight/2);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');

  // soundB = loadSound('assets/breeze.wav');
  // soundW = loadSound('assets/wind.mp3'); 
  // imgCloud = loadImage('assets/cloud.png');

}

function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  weatherData = data;
}

function draw() {

  if (weatherData) {
// // TEMP MIN TO MAX
//     text(weatherData.main.temp_min + " - " + weatherData.main.temp_max, windowWidth/2, 200);

// // MAIN
//     text(weatherData.weather[0].main, windowWidth/2, 200)

// // DESCRIPTION
//     text(weatherData.weather[0].description, windowWidth/2, 250)

noStroke();
fill(156, 160, 205);
rect(0, 0, windowWidth, windowHeight/2);
fill(246, 226, 235);
rect(0, windowHeight/2, windowWidth, windowHeight/2);

// HUMIDITY
fill(58,65,165);
var humidity = weatherData.main.humidity;
var humidityWidth = map(humidity, 0, 100, 0, windowWidth);
rect(0, 0, humidityWidth, windowHeight/2);

// CLOUDINESS
fill(238,197,215);
var cloudiness = weatherData.clouds.all;
var cloudinessWidth = map(cloudiness, 0, 100, 0, windowWidth);
rect(0, windowHeight/2, cloudiness, windowHeight/2);

// TEMP NOW
fill(255);
textAlign(CENTER);
textSize(14);
text((input.value()).toUpperCase() + "    " + weatherData.main.temp + " °F    " + weatherData.weather[0].description, windowWidth/2, 150);


// // WIND
//     if (weatherData.wind.speed > 25){
//       // windy
//       soundW.play();
//     }
//     if (weatherData.wind.speed > 15 && weatherData.wind.speed <= 25){
//       soundB.play();
//     }
//     else{
//       // nothing
//       soundB.stop();
//       soundW.stop();
//     }

// // CLOUD
// console.log(weatherData.clouds.all)
//     if (weatherData.clouds.all < 20){
//       // 0
//     }
//     if (weatherData.clouds.all >= 20 && weatherData.clouds.all < 40){
//       // 1
//       // image(imgCloud, random(0, windowWidth), random(0, windowHeight));
//       ellipse(100, 100, 100, 50)
//     }
//     if (weatherData.clouds.all >= 40 && weatherData.clouds.all < 80){
//       // 2

//     }
//     if (weatherData.clouds.all >= 80 && weatherData.clouds.all < 100){
//       // 3

//     }

// // RAIN
//    if (weatherData.rain.3h > 5){
//     // a lot 
//    }
//    if (weatherData.rain.3h > 0 && weatherData.rain.3h <= 5){
//     // a little
//    }
//    else{
//     // no rain
//    }

// // SNOW 
//    if (weatherData.snow.3h > 5){
//     // a lot 
//    }
//    if (weatherData.snow.3h > 0 && weatherData.rain.3h <= 5){
//     // a little
//    }
//    else{
//     // no snow
//    }   

  }
}