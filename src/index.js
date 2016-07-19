/* jshint -W079*/
'use strict';

const $ = require('jQuery');

$(function() {
  const login = require('../src/users');
  const model = require('../src/model');
  const view = require('../src/view');
  let currentUser = null;

  // login()
  // .then(function(result) {
  //   currentUser = result.user.uid;
  //   console.log(currentUser);
  //   view.renderMain();
  // });

  view.renderMain();

});
