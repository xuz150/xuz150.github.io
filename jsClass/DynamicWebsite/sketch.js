// alert('Search a city and visualize its weather!')

var weatherData;
var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=665b2a7cd43935d54a33c386e5506865';
var units = '&units=imperial';
var input;
var cityName;
var welcomeText1 = "SUBMIT A CITY NAME";
var welcomeText2 = "AND VISUALIZE ITS PRESENT";
var welcomeText3 = "HUMIDITY AND CLOUDINESS.";

// var soundB, soundW;
// var imgCloud;

function setup() {
  createCanvas(windowWidth, windowHeight);

  var button = select('#submit');
  button.mouseClicked(weatherAsk);

  input = select('#city');

  noStroke();

  // soundB = loadSound('assets/breeze.wav');
  // soundW = loadSound('assets/wind.mp3'); 
  // imgCloud = loadImage('assets/cloud.png');

}

function weatherAsk() {
  cityName = input.value()
  var url = api + cityName + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  weatherData = data;
}

function draw() {
  background(255);

  // DRAW GRID
  fill(0);
  rect(0, windowHeight/6*1, windowWidth, 5);
  rect(0, windowHeight/6*2, windowWidth, 5);
  rect(0, windowHeight/6*3, windowWidth, 5);
  rect(0, windowHeight/6*4, windowWidth, 5);
  rect(0, windowHeight/6*5, windowWidth, 5);

  rect(windowWidth/8*1, 0, 5, windowHeight);
  rect(windowWidth/8*2, 0, 5, windowHeight);
  rect(windowWidth/8*3, 0, 5, windowHeight);
  rect(windowWidth/8*4, 0, 5, windowHeight);
  rect(windowWidth/8*5, 0, 5, windowHeight);
  rect(windowWidth/8*6, 0, 5, windowHeight);
  rect(windowWidth/8*7, 0, 5, windowHeight);

  // WELCOME SENTENCE
  textStyle(ITALIC);
  textAlign(CENTER);
  textSize(80 * windowWidth/1280);
  
  fill(255);
  strokeWeight(4);
  stroke(0);
  
  text(welcomeText1, windowWidth/2 + 3, windowHeight/2 - 100 + 3);
  fill(0);
  stroke(0);
  text(welcomeText1, windowWidth/2, windowHeight/2 - 100);

  fill(255);
  strokeWeight(4);
  stroke(0);
  
  text(welcomeText2, windowWidth/2 + 3, windowHeight/2 + 3);
  fill(0);
  stroke(0);
  text(welcomeText2, windowWidth/2, windowHeight/2);

  fill(255);
  strokeWeight(4);
  stroke(0);
  
  text(welcomeText3, windowWidth/2 + 3, windowHeight/2 + 100 + 3);
  fill(0);
  stroke(0);
  text(welcomeText3, windowWidth/2, windowHeight/2 + 100);


  // WEATHER ASK
  if (weatherData) {
  // // TEMP MIN TO MAX
  //     text(weatherData.main.temp_min + " - " + weatherData.main.temp_max, windowWidth/2, 200);

  // // MAIN
  //     text(weatherData.weather[0].main, windowWidth/2, 200)

  // // DESCRIPTION
  //     text(weatherData.weather[0].description, windowWidth/2, 250)
  
  // CLEAR WELCOME TEXT
  welcomeText1 = " ";
  welcomeText2 = " ";
  welcomeText3 = " ";

  rectMode(CENTER);
  // fill(156, 160, 205);
  // rect(0, 0, windowWidth, windowHeight/2);
  // fill(246, 226, 235);
  // rect(0, windowHeight/2, windowWidth, windowHeight/2);

  // CITY NAME + WEATHER NOW
  textStyle(ITALIC);
  textAlign(CENTER);
  textSize(40);
  // fill(238,197,215);
  // text(cityName.toUpperCase() + "    " + weatherData.main.temp + " °F    " + weatherData.weather[0].description, windowWidth/2+3, 100+3);
  // fill(58,65,165)
  fill(255);
  strokeWeight(4);
  stroke(0);
  text(cityName.toUpperCase() + "    " + weatherData.main.temp + " °F    " + weatherData.weather[0].description, windowWidth/2 + 3, windowHeight*0.1 + 3);
  fill(0);
  stroke(0);
  text(cityName.toUpperCase() + "    " + weatherData.main.temp + " °F    " + weatherData.weather[0].description, windowWidth/2, windowHeight*0.1);

  noStroke();
  // HUMIDITY
  var humidity = weatherData.main.humidity;
  var humidityLength = map(humidity, 0, 100, 0, windowHeight/2);
  fill(238,197,215);
  rect(windowWidth/4, windowHeight/2, windowHeight/2, windowHeight/2)
  fill(58,65,155);
  rect(windowWidth/4, windowHeight/2, humidityLength, humidityLength);
  
  textStyle(BOLD);
  textSize(28);
  fill(212,235,243);
  text("Humidity " + humidity + "%", windowWidth/4 + 3, windowHeight/2 + windowHeight/4 + 50 + 3);
  fill(137,203,193)
  text("Humidity " + humidity + "%", windowWidth/4, windowHeight/2 + windowHeight/4 + 50);

  // CLOUDINESS
  var cloudiness = weatherData.clouds.all;
  var cloudinessWidth = map(cloudiness, 0, 100, 0, windowHeight/2);
  fill(238,197,215);
  ellipse(windowWidth/4*3, windowHeight/2, windowHeight/2, windowHeight/2)
  fill(58,65,155);
  ellipse(windowWidth/4*3, windowHeight/2, cloudinessWidth, cloudinessWidth);
  fill(212,235,243);
  text("Cloudiness " + cloudiness + "%", windowWidth/4*3 + 1, windowHeight/2 + windowHeight/4 + 50 +1);
  fill(137,203,193)
  text("Cloudiness " + cloudiness + "%", windowWidth/4*3 - 1, windowHeight/2 + windowHeight/4 + 50 -1);

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