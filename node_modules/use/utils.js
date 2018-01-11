'use strict';

var utils = require('lazy-cache')(require);
var fn = require;
require = utils; // eslint-disable-line

/**
 * Lazily required module dependencies
 */

require('define-property', 'define');
require('isobject', 'isObject');
require = fn; // eslint-disable-line

utils.isString = function(val) {
  return val && typeof val === 'string';
};

/**
 * Expose `utils` modules
 */

module.exports = utils;
