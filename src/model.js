/* jshint -W079 */

'use strict';

const $ = require('jQuery');
const firebase = require('../src/firebaseConfig');
const owaKey = require('../src/owaKey');

const model = {};

// url for forecase by city
let owaUrl = 'http://api.openweathermap.org/data/2.5/';
// firebase url for saving weather data
let fbUrl = 'https://open-weather-65a22.firebaseio.com/';

model.getInitialForecast = function(zip) {
  return new Promise(function(resolve, reject) {
    $.ajax(`${owaUrl}weather?zip=${zip},us&APPID=${owaKey()}`)
    .done(function(result) {
      resolve(result);
    })
    .fail(function(error) {
      reject(error);
    });
  });
};
model.getThree = function(cityId) {
  console.log(cityId);
  return new Promise(function(resolve, reject) {
    $.ajax(`${owaUrl}forecast?id=${cityId}&APPID=${owaKey()}`)
    .done(function(result) {
      console.log(result);
      resolve(result);
    })
    .fail(function(error) {
      reject(error);
    });
  });
};
model.saveWeather = function(weatherToSave) {
  console.log(weatherToSave);
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: `${fbUrl}/weather.json`,
      type: 'POST',
      data: JSON.stringify(weatherToSave),
      dataType: 'JSON'
    })
    .done(function(key) {
      resolve(key);
    })
    .fail(function(error) {
      reject(error);
    });
  });
};
model.getStoredWeather = function(currentUser) {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: `${fbUrl}/weather.json?orderBy="uid"&equalTo="${currentUser}"`,
      type: 'GET'
    })
    .done(function(result) {
      resolve(result);
    })
    .fail(function(error) {
      reject(error);
    });
  });
};
module.exports = model;

// function getSongs(callback, userId) {
//   console.log("userId", userId);
//   let songs = firebase.database().ref('songs');
//   songs.orderByChild("uid").equalTo(userId).on('value', function(songData) {
//     console.log("Sumthin happened");
//     callback(songData.val());
//   });
// }

// $.ajax('http://api.openweathermap.org/data/2.5/forecast?id=4605324&APPID=fd1b6f10166d6d56d41c2f81121434d9')
