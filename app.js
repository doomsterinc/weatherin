var weather = require('./weather');
var location = require('./location');

weather(function(currentWeather){
  console.log(currentWeather);
});

location(function(location) {
  if (!location) {
    console.log("Unable to guess location!");
    return;
  }
  console.log("city: " + location.city);
  console.log("lag/log: " + location.loc);
});
