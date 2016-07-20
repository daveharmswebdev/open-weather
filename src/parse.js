'use strict';

const parse = {};

parse.weather = function(object) {
  console.log(object);
  let weather = {};
  weather.temp = object.main.temp;
  weather.conditions = object.weather[0].description;
  weather.airPressure = object.main.pressure;
  weather.windSpeed = object.wind.speed;
  return weather;
};

module.exports = parse;
