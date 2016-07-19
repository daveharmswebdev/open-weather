/* jshint -W079*/
'use strict';

const $ = require('jQuery');
const main = require('../views/main.jade');
const view = {};

view.renderMain = () => $('body').append(main({}));

module.exports = view;
