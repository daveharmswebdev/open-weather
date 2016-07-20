/* jshint -W079*/
'use strict';

const $ = require('jQuery');
const main = require('../views/main.jade');
const weatherView = require('../views/weather.jade');
const parse = require('../src/parse');
const view = {};

view.renderMain = () => $('body').html(main({}));
view.renderWeather = weather => $('.display').html(weatherView({parsedWeather: parse.weather(weather)}));

module.exports = view;
