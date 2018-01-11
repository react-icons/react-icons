/*!
 * set-getter (https://github.com/doowb/set-getter)
 *
 * Copyright (c) 2016, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

var toPath = require('to-object-path');

/**
 * Defines a getter function on an object using property path notation.
 *
 * ```js
 * var obj = {};
 * getter(obj, 'foo', function() {
 *   return 'bar';
 * });
 * ```
 * @param {Object} `obj` Object to add property to.
 * @param {String|Array} `prop` Property string or array to add.
 * @param {Function} `getter` Getter function to add as a property.
 * @api public
 */

function setGetter(obj, prop, getter) {
  var key = toPath(arguments);
  return define(obj, key, getter);
}

/**
 * Define getter function on object or object hierarchy using dot notation.
 *
 * @param  {Object} `obj` Object to define getter property on.
 * @param  {String} `prop` Property string to define.
 * @param  {Function} `getter` Getter function to define.
 * @return {Object} Returns original object.
 */

function define(obj, prop, getter) {
  if (!~prop.indexOf('.')) {
    defineProperty(obj, prop, getter);
    return obj;
  }

  var keys = prop.split('.');
  var last = keys.pop();
  var target = obj;
  var key;

  while ((key = keys.shift())) {
    while (key.slice(-1) === '\\') {
      key = key.slice(0, -1) + '.' + keys.shift();
    }
    target = target[key] || (target[key] = {});
  }

  defineProperty(target, last, getter);
  return obj;
}

/**
 * Define getter function on object as a configurable and enumerable property.
 *
 * @param  {Object} `obj` Object to define property on.
 * @param  {String} `prop` Property to define.
 * @param  {Function} `getter` Getter function to define.
 */

function defineProperty(obj, prop, getter) {
  Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: true,
    get: getter
  });
}

/**
 * Expose `setGetter`
 */

module.exports = setGetter;
