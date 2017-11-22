alert('Type a city name and visualize its humidity and cloudiness!')

var weatherData;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=665b2a7cd43935d54a33c386e5506865';
var units = '&units=imperial';
var input;
var cityName;

function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont(fontExtraBold);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');

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
  background(212, 235, 243);

  if (weatherData) {
  
  noStroke();
  // CITY + WEATHER NOW
  fill(58,65,165)
  textAlign(CENTER);
  textSize(36);
  text(cityName.toUpperCase() + "    " + weatherData.main.temp + " °F    " + weatherData.weather[0].description, windowWidth/2, 150);

  // HUMIDITY
  rectMode(CENTER);
  var humidity = weatherData.main.humidity;
  var humidityLength = map(humidity, 0, 100, 0, windowHeight/2);
  fill(238,197,215);
  rect(windowWidth/4, windowHeight/2, windowHeight/2, windowHeight/2)
  fill(187,148,166);
  rect(windowWidth/4, windowHeight/2, humidityLength, humidityLength);
  fill(58,65,165)
  textAlign(CENTER);
  textSize(14);
  text("Humidity " + humidity + "%", windowWidth/4, windowHeight/2 + windowHeight/4 + 50);

  // CLOUDINESS
  fill(137,203,193);
  ellipse(windowWidth/4*3, windowHeight/2, windowHeight/2, windowHeight/2)
  fill(89, 154, 145);
  var cloudiness = weatherData.clouds.all;
  var cloudinessWidth = map(cloudiness, 0, 100, 0, windowHeight/2);
  ellipse(windowWidth/4*3, windowHeight/2, cloudinessWidth, cloudinessWidth);
  fill(58,65,165)
  textAlign(CENTER);
  textSize(14);
  text("Cloudiness " + cloudiness + "%", windowWidth/4*3, windowHeight/2 + windowHeight/4 + 50);
  }
}