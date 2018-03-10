# innertext

Extract the `innerText` from a snippet of HTML

[![Greenkeeper badge](https://badges.greenkeeper.io/revin/innertext.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/revin/innertext.svg?branch=master)](https://travis-ci.org/revin/innertext)
[![Code Climate](https://codeclimate.com/github/revin/innertext/badges/gpa.svg)](https://codeclimate.com/github/revin/innertext)

## Installation

```sh
npm install innertext
```

## Usage

Pass it a string containing some HTML.

```js
var innertext = require('innertext');

var text = innertext('<h1>Heading text <em>with</em> <b>some</b> <u>markup</u></h1>');

console.log(text); // 'Heading text with some markup'
```

## Correctness

The current implementation favors speed and simplicity over other considerations
like perfect web browser compatibility. For instance:

* malformed HTML (e.g., un-encoded `<` &amp; `>` characters, etc&hellip;)
  will generally break the text extraction process
* whitespace around HTML tag/element boundaries gets collapsed into a single
  space, whereas browsers will typically preserve newlines

So if you trust the incoming HTML, things will typically be OK, but don't use
this as the basis for creating a browser or anything.

## Tests

```sh
npm install
npm test
```

## License

ISC
