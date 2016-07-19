/* jshint -W079*/
'use strict';

const $ = require('jQuery');

$(function() {  const login = require('../src/users');
  const view = require('../src/view');
  const control = require('../src/control');

  // render what is static
  view.renderMain();
  // manage what is dynamic
  control();

});
