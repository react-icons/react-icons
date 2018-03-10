'use strict';

var set = require('set-getter');

/**
 * Cache results of the first function call to ensure only calling once.
 *
 * ```js
 * var utils = require('lazy-cache')(require);
 * // cache the call to `require('ansi-yellow')`
 * utils('ansi-yellow', 'yellow');
 * // use `ansi-yellow`
 * console.log(utils.yellow('this is yellow'));
 * ```
 *
 * @param  {Function} `fn` Function that will be called only once.
 * @return {Function} Function that can be called to get the cached function
 * @api public
 */

function lazyCache(requireFn) {
  var cache = {};

  return function proxy(name, alias) {
    var key = alias;

    // camel-case the module `name` if `alias` is not defined
    if (typeof key !== 'string') {
      key = camelcase(name);
    }

    // create a getter to lazily invoke the module the first time it's called
    function getter() {
      return cache[key] || (cache[key] = requireFn(name));
    }

    // trip the getter if `process.env.UNLAZY` is defined
    if (unlazy(process.env)) {
      getter();
    }

    set(proxy, key, getter);
    return getter;
  };
}

/**
 * Return true if `process.env.LAZY` is true, or travis is running.
 */

function unlazy(env) {
  return env.UNLAZY === 'true' || env.UNLAZY === true || env.TRAVIS;
}

/**
 * Camelcase the the given module `name`.
 */

function camelcase(str) {
  if (str.length === 1) {
    return str.toLowerCase();
  }
  str = str.replace(/^[\W_]+|[\W_]+$/g, '').toLowerCase();
  return str.replace(/[\W_]+(\w|$)/g, function(_, ch) {
    return ch.toUpperCase();
  });
}

/**
 * Expose `lazyCache`
 */

module.exports = lazyCache;
