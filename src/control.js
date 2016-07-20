/* jshint -W079*/

'use strict';

const $ = require('jQuery');

module.exports = function() {
  const login = require('../src/users');
  const model = require('../src/model');
  const view = require('../src/view');
  const parse = require('../src/parse');
  // let currentUser = '2ledLvJpCtNxHPCEONYDNqdoD5p1';
  let currentUser;
  let cityCode;
  let weatherToSave;

  login()
  .then(function(result) {
    currentUser = result.user.uid;
    console.log(currentUser);
    view.renderMain();
  });

  function validateZip(zip) {
    let valid = false;
    if (zip.length === 5 && !isNaN(zip)) {
      valid = true;
    }
    return valid;
  }

  $('body').on('click', '#zip--submit', function() {
    let zip = $('#zip').val();
    if (validateZip(zip)) {
      model.getInitialForecast(zip)
      .then(function(weather) {
        cityCode = weather.id;
        weatherToSave = parse.weather(weather);
        weatherToSave.uid = currentUser;
        weatherToSave.timeStamp = new Date();
        console.log('weather to save', weatherToSave);
        view.renderWeather(weather);
      });
    }
  });
  $('body').on('click', '#saveWeather', function() {
    console.log('clicked save button', weatherToSave);
    model.saveWeather(weatherToSave)
    .then(function(key) {
      console.log(key);
    })
    .catch(function(error) {
      console.log(error);
    });
  });
  $('body').on('click', '#link--getStoredWeather', function() {
    model.getStoredWeather(currentUser)
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
  });
  $('body').on('click', '#button-getCurrentX', function(event) {
    console.log(event);
  });
  $('body').on('click', '#button-getThree', function() {
    model.getThree(cityCode);
  });
  $('body').on('click', '#button-getSeven', function() {
    console.log(event);
  });

};
