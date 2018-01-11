'use strict';

var Snapdragon = require('snapdragon');
var compilers = require('./compilers');
var parsers = require('./parsers');
var utils = require('./utils');

/**
 * Customize Snapdragon parser and renderer
 */

function Braces(options) {
  this.options = utils.extend({}, options);
}

/**
 * Initialize braces
 */

Braces.prototype.init = function(options) {
  var opts = utils.createOptions({}, this.options, options);
  this.snapdragon = this.options.snapdragon || new Snapdragon(opts);
  this.compiler = this.snapdragon.compiler;
  this.parser = this.snapdragon.parser;

  compilers(this.snapdragon, opts);
  parsers(this.snapdragon, opts);

  /**
   * Call Snapdragon `.parse` method. When AST is returned, we check to
   * see if any unclosed braces are left on the stack and, if so, we iterate
   * over the stack and correct the AST so that compilers are called in the correct
   * order and unbalance braces are properly escaped.
   */

  utils.define(this.snapdragon, 'parse', function(pattern, options) {
    var parsed = Snapdragon.prototype.parse.apply(this, arguments);
    this.parser.ast.input = pattern;

    var stack = this.parser.stack;
    while (stack.length) {
      addParent({type: 'brace.close', val: ''}, stack.pop());
    }

    function addParent(node, parent) {
      utils.define(node, 'parent', parent);
      parent.nodes.push(node);
    }

    // add non-enumerable parser reference
    utils.define(parsed, 'parser', this.parser);
    return parsed;
  });
};

/**
 * Lazily initialize braces
 */

Braces.prototype.lazyInit = function(options) {
  if (!this.isInitialized) {
    this.isInitialized = true;
    this.init(options);
  }
};

/**
 * Decorate `.parse` method
 */

Braces.prototype.parse = function(ast, options) {
  if (utils.isObject(ast) && ast.nodes) return ast;
  this.lazyInit(options);
  return this.snapdragon.parse(ast, options);
};

/**
 * Decorate `.compile` method
 */

Braces.prototype.compile = function(ast, options) {
  if (typeof ast === 'string') {
    ast = this.parse(ast, options);
  } else {
    this.lazyInit(options);
  }
  var res = this.snapdragon.compile(ast, options);
  return res;
};

/**
 * Expand
 */

Braces.prototype.expand = function(pattern) {
  var ast = this.parse(pattern, {expand: true});
  return this.compile(ast, {expand: true});
};

/**
 * Optimize
 */

Braces.prototype.optimize = function(pattern) {
  var ast = this.parse(pattern, {optimize: true});
  return this.compile(ast, {optimize: true});
};

/**
 * Expose `Braces`
 */

module.exports = Braces;
