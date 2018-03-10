# lazy-cache [![NPM version](https://img.shields.io/npm/v/lazy-cache.svg?style=flat)](https://www.npmjs.com/package/lazy-cache) [![NPM monthly downloads](https://img.shields.io/npm/dm/lazy-cache.svg?style=flat)](https://npmjs.org/package/lazy-cache)  [![NPM total downloads](https://img.shields.io/npm/dt/lazy-cache.svg?style=flat)](https://npmjs.org/package/lazy-cache) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/lazy-cache.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/lazy-cache)

> Cache requires to be lazy-loaded when needed.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save lazy-cache
```

## Heads up!

It's suprising how many libraries are in the average dependency tree that don't belong there for one reason or another. Either because they were accidentally listed as `dependencies` instead of `devDepedencies`, or they are required in a file as variables, but the variable is never actually used (poor linting), and so on. Or because the maintainer made the decision to add the deps, even though they will never ([or can't ever](https://github.com/felixge/node-dateformat/issues/36)) be used by 99.9% of users.

Worse, many libraries like chalk and [shelljs](https://github.com/eslint/eslint/issues/7316) actually execute code when `require()` is called!? (shelljs was modifying the `String.prototype`, and chalk loops over some objects to dynamically create methods). In other words, they do something like this:

```js
// in the main export of a library, if you do this it will
// automatically modify the String.prototype _globally_, 
// the moment node.js loads the dependency tree
String.prototype.foo = function() {};

// same if you do something like this
// (dont' do this, ever. wrap this kind of code in a function
// and allow implementors to decide when to call it)
while (foo) {
  // do stuff
}
```

In any case, just having these libraries in your dependency tree somewhere means that their code will excecute the moment you run your application _even if the libraries are never called by your application or any other code anywhere in the tree_.

**solution**

lazy-cache doesn't use any "magic", it uses native, plain-vanilla, tried and true javascript getters to call node's `require()` system.

**Faster, safer code**

There main advantage to this, the main is that `require`s are loaded on demand, so only code that is actually used will ever be loaded. As a result, applications will load faster (sometimes much faster - we've seen load times drop from ~1 second to less than 50 milliseconds).

Moreover, in some cases this also avoids inadvertently loading libraries that execute code or modifies globals, etc.

**webpack users**

If you use webpack and are experiencing issues with lazy-cache, this is a known bug caused by webpack, not lazy-cache. There is a solution though, you can use [unlazy-loader](https://github.com/doowb/unlazy-loader), a webpack loader that _fixes the webpack bug_.

## Usage

```js
var utils = require('lazy-cache')(require);
```

**Use as a property on `lazy`**

The module is also added as a property to the `lazy` function so it can be called without having to call a function first.

```js
var utils = require('lazy-cache')(require);

// `npm install glob`
utils('glob');

// glob sync
console.log(utils.glob.sync('*.js'));

// glob async
utils.glob('*.js', function (err, files) {
  console.log(files);
});
```

**Use as a function**

```js
var utils = require('lazy-cache')(require);
var glob = utils('glob');

// `glob` is a now a function that may be called when needed
glob().sync('foo/*.js');
```

## Aliases

An alias may be passed as the second argument if you don't want to use the automatically camel-cased variable name.

**Example**

```js
var utils = require('lazy-cache')(require);

// alias `ansi-yellow` as `yellow`
utils('ansi-yellow', 'yellow');
console.log(utils.yellow('foo'));
```

Dot notation may also be used in the alias to create an object hierarchy.

**Example**

```js
var utils = require('lazy-cache')(require);
utils('ansi-cyan', 'color.cyan');
utils('ansi-yellow', 'color.yellow');
utils('ansi-magenta', 'color.magenta');
console.log(utils.color.cyan('foo'));
console.log(utils.color.yellow('bar'));
console.log(utils.color.magenta('baz'));
```

## Browserify usage

**Example**

```js
var utils = require('lazy-cache')(require);
// temporarily re-assign `require` to trick browserify
var fn = require;
require = utils;
// list module dependencies (here, `require` is actually `lazy-cache`)
require('glob');
require = fn; // restore the native `require` function

/**
 * Now you can use glob with the `utils.glob` variable
 */

// sync
console.log(utils.glob.sync('*.js'));

// async
utils.glob('*.js', function (err, files) {
  console.log(files.join('\n'));
});
```

## Kill switch

To force lazy-cache to immediately invoke all dependencies, do:

```js
process.env.UNLAZY = true;
```

## About

### Related projects

[lint-deps](https://www.npmjs.com/package/lint-deps): CLI tool that tells you when dependencies are missing from package.json and offers you a… [more](https://github.com/jonschlinkert/lint-deps) | [homepage](https://github.com/jonschlinkert/lint-deps "CLI tool that tells you when dependencies are missing from package.json and offers you a choice to install them. Also tells you when dependencies are listed in package.json but are not being used anywhere in your project. Node.js command line tool and API")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor**<br/> | 
| --- | --- |
| 31 | [jonschlinkert](https://github.com/jonschlinkert) |
| 27 | [doowb](https://github.com/doowb) |

### Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

To generate the readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/lazy-cache/blob/master/LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.2.0, on November 07, 2016._