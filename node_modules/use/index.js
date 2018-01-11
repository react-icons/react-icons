/*!
 * use <https://github.com/jonschlinkert/use>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var utils = require('./utils');

module.exports = function base(app, opts) {
  if (!utils.isObject(app) && typeof app !== 'function') {
    throw new TypeError('use: expect `app` be an object or function');
  }

  if (!utils.isObject(opts)) {
    opts = {};
  }

  var prop = utils.isString(opts.prop) ? opts.prop : 'fns';
  if (!Array.isArray(app[prop])) {
    utils.define(app, prop, []);
  }

  /**
   * Define a plugin function to be passed to use. The only
   * parameter exposed to the plugin is `app`, the object or function.
   * passed to `use(app)`. `app` is also exposed as `this` in plugins.
   *
   * Additionally, **if a plugin returns a function, the function will
   * be pushed onto the `fns` array**, allowing the plugin to be
   * called at a later point by the `run` method.
   *
   * ```js
   * var use = require('use');
   *
   * // define a plugin
   * function foo(app) {
   *   // do stuff
   * }
   *
   * var app = function(){};
   * use(app);
   *
   * // register plugins
   * app.use(foo);
   * app.use(bar);
   * app.use(baz);
   * ```
   * @name .use
   * @param {Function} `fn` plugin function to call
   * @api public
   */

  utils.define(app, 'use', use);

  /**
   * Run all plugins on `fns`. Any plugin that returns a function
   * when called by `use` is pushed onto the `fns` array.
   *
   * ```js
   * var config = {};
   * app.run(config);
   * ```
   * @name .run
   * @param {Object} `value` Object to be modified by plugins.
   * @return {Object} Returns the object passed to `run`
   * @api public
   */

  utils.define(app, 'run', function(val) {
    if (!utils.isObject(val)) return;
    decorate(val);

    var self = this || app;
    var fns = self[prop];
    var len = fns.length;
    var idx = -1;

    while (++idx < len) {
      val.use(fns[idx]);
    }
    return val;
  });

  /**
   * Call plugin `fn`. If a function is returned push it into the
   * `fns` array to be called by the `run` method.
   */

  function use(fn, options) {
    if (typeof fn !== 'function') {
      throw new TypeError('.use expects `fn` be a function');
    }

    var self = this || app;
    if (typeof opts.fn === 'function') {
      opts.fn.call(self, self, options);
    }

    var plugin = fn.call(self, self);
    if (typeof plugin === 'function') {
      var fns = self[prop];
      fns.push(plugin);
    }
    return self;
  }

  /**
   * Ensure the `.use` method exists on `val`
   */

  function decorate(val) {
    if (!val.use || !val.run) {
      base(val);
    }
  }

  return app;
};
