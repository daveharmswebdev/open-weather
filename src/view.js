/* jshint -W079*/
'use strict';

const $ = require('jQuery');
const main = require('../views/main.jade');
const parse = require('../src/parse');
const view = {};

view.renderMain = () => $('body').html(main({}));
view.renderWeather = weather => {
  parse.weather(weather);
};

module.exports = view;
