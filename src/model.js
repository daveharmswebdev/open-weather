'use strict';

const firebase = require('../src/firebaseConfig');

const model = {};

model.test = function() {
 return 1;
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
