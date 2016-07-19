/* jshint -W079 */

'use strict';

const $ = require('jQuery');
const firebase = require('../src/firebaseConfig');
const owaKey = require('../src/owaKey');

const model = {};

// url for forecase by city
let owaUrl = 'http://api.openweathermap.org/data/2.5/';

model.test = function() {
 return 1;
};
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

module.exports = model;

// function getSongs(callback, userId) {
//   console.log("userId", userId);
//   let songs = firebase.database().ref('songs');
//   songs.orderByChild("uid").equalTo(userId).on('value', function(songData) {
//     console.log("Sumthin happened");
//     callback(songData.val());
//   });
// }
