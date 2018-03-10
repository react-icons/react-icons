svgpath
=======

[![Build Status](https://travis-ci.org/fontello/svg2ttf.svg?branch=master)](https://travis-ci.org/fontello/svg2ttf)
[![NPM version](https://img.shields.io/npm/v/svgpath.svg)](https://www.npmjs.org/package/svgpath)

Low level toolkit for svg paths transformations. Sometime you can't use
`transform` attributes and have to apply changes to svg paths directly.
Then this package is for you :) !

Note, this package works with `paths`, not with svg xml sources.

Install
-------

```
npm install svgpath
```


Example
-------

```
var SvgPath = require('svgpath');

var transformedPath = new SvgPath(__your_path__)
  .scale(0.5)
  .translate(100,200)
  .abs()
  .round(1) // Here the real rounding happens
  .rel()
  .round(1) // Fix js floating point error/garbage after rel()
  .toString()
```


API
---

All methods are chainable (return self).

### SvgPath(path) -> self

Constructor. Create SvgPath instance with chainable methods.

### .abs() -> self

Converts all path commands to absolute.

### .rel() -> self

Converts all path commands to relative. Useful to reduce output size.

### .scale(sx [, sy]) -> self

Rescale path (the same as SVG `scale` transformation).

### .translate(x [, y]) -> self

Rescale path (the same as SVG `scale` transformation)

### .transform(string) -> self

Any SVG transform or their combination. For example `rotate(90) scale(2,3)`.
The same format, as described in standard.

### .unshort() -> self

Converts smooth curves (`T`, `t`, `S`, `s`) with missed control point to
generic curves.

### .toString() -> string

Returns final path string.

### .round(precision) -> self

Round all coordinated to given decimal precision. By default round to integer.
Useful to reduce resulting string size.

(!) NOTE:

1. You should apply `abs()` first, because relative coordinate summarize
   precision errors.
2. After .rel() call, your rounded values can be littered with tail like
   `0.000000000000023`. So, you have to call .round(x) again. See example above.

### .iterate(function) -> self

Apply iterator to all path segments. Each iterator receives `segment`, `index`,
`x`, `y` params. Where (x, y) - absolute coordinates of segment start point.

Also, you iterator can return array of new segments, that should replace
current one. On empty array current segment will be deleted.


Authors
-------

* Sergey Batishchev - [@snb2013](https://github.com/snb2013)
* Vitaly Puzrin - [@puzrin](https://github.com/puzrin)


License
-------

Copyright (c) 2013 [Vitaly Puzrin](https://github.com/puzrin).
Released under the MIT license. See
[LICENSE](https://github.com/nodeca/svg2ttf/blob/master/LICENSE) for details.

