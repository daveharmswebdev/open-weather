/* jshint -W079*/

'use strict';

const $ = require('jQuery');

module.exports = function() {
  const model = require('../src/model');
  const view = require('../src/view');
  let currentUser = '2ledLvJpCtNxHPCEONYDNqdoD5p1';

  // login()
  // .then(function(result) {
  //   currentUser = result.user.uid;
  //   console.log(currentUser);
  //   view.renderMain();
  // });

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
        view.renderWeather(weather);
      });
    }
  });

};
