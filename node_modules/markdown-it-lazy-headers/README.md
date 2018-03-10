# markdown-it-lazy-headers

`markdown-it-lazy-headers` is a plugin for
[`markdown-it`](https://github.com/markdown-it/markdown-it) that relaxes the
syntax of [ATX headers](http://spec.commonmark.org/0.22/#atx-header) so that you
don't have to follow the opening sequence of `#` characters by a space. Should
you have any problems while installing or using `markdown-it-lazy-headers`
please open up a
[new issue](https://github.com/Galadirith/markdown-it-lazy-headers/issues).

## Installation

```
npm install --save markdown-it-lazy-headers
```

## Usage

`markdown-it-lazy-headers` has no configuration options, simply `use` it with an
instance of `markdown-it` to enable lazy headers:

```
var md = require('markdown-it')()
        .use(require('markdown-it-lazy-headers'));
```

## Testing

`markdown-it-testgen` through `mocha` is used to test
`markdown-it-lazy-headers`. The test suite is a modified version of the ATX
header suite used by commonmark:

```
npm test
```

## License

`markdown-it-lazy-headers` is released under the [MIT license](LICENSE.md).
