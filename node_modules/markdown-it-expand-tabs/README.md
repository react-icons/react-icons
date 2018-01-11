# markdown-it-expand-tabs

A [markdown-it](https://www.npmjs.com/package/markdown-it) plugin to replace leading tabs with spaces in code blocks

[![Greenkeeper badge](https://badges.greenkeeper.io/revin/markdown-it-expand-tabs.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/revin/markdown-it-expand-tabs.svg?branch=master)](https://travis-ci.org/revin/markdown-it-expand-tabs)
[![Code Climate](https://codeclimate.com/github/revin/markdown-it-expand-tabs/badges/gpa.svg)](https://codeclimate.com/github/revin/markdown-it-expand-tabs)

## What it does

- Replaces leading tabs with spaces in fenced code blocks
- Nothing else

### Why is this useful?

Say you have tab-indented code in a markdown file and you want the rendered code to
take up less visual space horizontally. This plugin will help. If you're not in that
situation, then this plugin probably isn't for you.

## Installation

```sh
npm install markdown-it-expand-tabs
```

## Usage

Use it the same as a normal markdown-it plugin:

```js
var md = require('markdown-it');
var expandTabs = require('markdown-it-expand-tabs');

var parser = md().use(expandTabs);

var result = parser.render(...); // markdown string containing tab-indented code blocks
```

The default behavior is to convert leading tabs into two spaces each. You can choose
an alternate tab width thusly:

```js
var parser = md().use(expandTabs, {tabWidth: 4});
```

## Tests

```sh
npm install
npm test
```

## License

ISC
