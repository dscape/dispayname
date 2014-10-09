'use strict';

var Mustache = require('mustache');

module.exports = function(params, data) {
  var template = params.reduce(function(ac, elem) {
    return ac + '{{#' + elem + '}}{{.}} {{/' + elem + '}}';
  }, '');
  return Mustache.render(template, data).trim();
};
