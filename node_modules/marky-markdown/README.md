# marky-markdown

[![Build Status](https://travis-ci.org/npm/marky-markdown.svg?branch=master)](https://travis-ci.org/npm/marky-markdown)
[![Code Climate](https://codeclimate.com/github/npm/marky-markdown/badges/gpa.svg)](https://codeclimate.com/github/npm/marky-markdown)
[![Dependency Status](https://david-dm.org/npm/marky-markdown.svg)](https://david-dm.org/npm/marky-markdown)
[![Pull Requests](https://img.shields.io/github/issues-pr/npm/marky-markdown.svg)](https://github.com/npm/marky-markdown/pulls)
[![Issues](https://img.shields.io/github/issues/npm/marky-markdown.svg)](https://github.com/npm/marky-markdown/issues)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

`marky-markdown` is a markdown parser, written in NodeJS, that aims for
parity with [GitHub-style markdown]. It is built on top of [`markdown-it`],
a [CommonMark] markdown parser. You can use marky-markdown:

- [programmatically in NodeJS]
- [in your terminal]
- [in the browser] *does not yet support syntax highlighting

`marky-markdown` is the thing that parses package READMEs on
http://www.npmjs.com. If you see a markdown parsing bug there,
[file an issue here]!

[file an issue here]: https://github.com/npm/marky-markdown/issues
[GitHub-style markdown]: https://help.github.com/articles/basic-writing-and-formatting-syntax/
[CommonMark]: http://spec.commonmark.org/
[`markdown-it`]: https://github.com/markdown-it/markdown-it
[programmatically in NodeJS]: #programmatic-usage
[in your terminal]: #command-line-usage
[in the browser]: #in-the-browser

## Node Version Support

marky-markdown strives to support all LTS, current, and maintenance
versions of Node.js. When a version of Node.js is EOL, we will EOL
support for that version for marky-markdown.

For more information on Node.js LTS and support, click [here](https://github.com/nodejs/LTS).

- marky-markdown < `9.0.0` supports `0.10`, `0.12`, `iojs`, `4`, `5`
- marky-markdown >= `9.0.0` supports `0.12`, `4`, `6`

## Installation

```sh
npm install marky-markdown --save
```

## Programmatic Usage

marky-markdown exports a single function. For basic use, that function
takes a single argument: a string to convert.

```js
var marky = require("marky-markdown")
var html = marky("# hello, I'm markdown")
```

### Options

The exported function takes an optional options object
as its second argument:

```js
marky("some trusted string", {sanitize: false})
```

The default options are as follows:

```js
{
  sanitize: true,               // remove script tags and stuff
  linkify: true,                // turn orphan URLs into hyperlinks
  highlightSyntax: true,        // run highlights on fenced code blocks
  prefixHeadingIds: true,       // prevent DOM id collisions
  enableHeadingLinkIcons: true, // render icons inside generated section links
  serveImagesWithCDN: false,    // use npm's CDN to proxy images over HTTPS
  debug: false,                 // console.log() all the things
  package: null,                // npm package metadata,
  headingAnchorClass: 'anchor', // the classname used for anchors in headings.
  headingSvgClass: ['octicon']  // the class used for svg icon in headings.
}
```

### Low Level Parser Access

If you need lower level access to the markdown-it parser (to add your own
[markdown-it plugins](https://www.npmjs.com/search?q=markdown-it-plugin), for
example), you can call the `getParser` method:

```js
var parser = marky.getParser()
parser.use(someMarkdownItPlugin)
var html = parser.render("# markdown string")
```

`getParser` takes an optional `options` argument, the same format as the main
marky-markdown export function. If you omit it, it uses the same default options
described above.

When you're done customizing the parser, call `parser.render(markdown)` to
render to HTML.

## Command-line Usage

You can use marky-markdown to parse markdown files in the shell.
The easiest way to do this is to install globally:

```
npm i -g marky-markdown
marky-markdown some.md > some.html
```

## In the Browser

This module mostly works in the browser, with the exception of the `highlights` module.

You can `require('marky-markdown')` in scripts you browserify yourself,
or just use the standalone file in [dist/marky-markdown.js].

Here is an example using HTML5 to render text inside `<marky-markdown>` tags.

```html
<script src="marky-markdown.js"></script>

<marky-markdown>**Here** _is_ some [Markdown](https://github.com/)</marky-markdown>

<script>
  for (el of document.getElementsByTagName('marky-markdown')) {
    el.innerHTML = markyMarkdown(el.innerHTML, {highlightSyntax: false})
  }
</script>
```

Note: Usage with [webpack](https://webpack.github.io/) requires that your
`webpack.config.js` configure a loader (such as
[json-loader](https://github.com/webpack/json-loader)) for .json files. Also, you need to config `process.browser` in `webpack.config.js` when you target browser:

```js
  plugins: [
    new webpack.DefinePlugin({
      'process.browser': true
    })
  ],
```

## Tests

```sh
npm install
npm test
```

## What it does

- Parses markdown with [markdown-it](https://github.com/markdown-it/markdown-it), a fast and [commonmark-compliant](http://commonmark.org/) parser.
- Removes broken and malicious user input with [sanitize-html](https://www.npmjs.com/package/sanitize-html)
- Applies syntax highlighting to [GitHub-flavored code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/) using the [highlights](https://www.npmjs.com/package/highlights) library from [Atom](https://atom.io/).
- Converts `:emoji:`-style [shortcuts](http://www.emoji-cheat-sheet.com/) to unicode emojis.
- Converts headings (h1, h2, etc) into anchored hyperlinks.
- Converts relative GitHub links to their absolute equivalents.
- Converts relative GitHub images sources to their GitHub raw equivalents.
- Converts insecure Gravatar URLs to HTTPS.
- Converts list items with leading `[ ]` and `[x]` into [GitHub-style task lists](https://github.com/blog/1825-task-lists-in-all-markdown-documents)
- Wraps embedded YouTube videos so they can be styled.
- Parses and sanitizes `package.description` as markdown.
- Applies CSS classes to redundant content that closely matches npm package name and description.

### npm packages

Pass in an npm `package` object to do stuff like rewriting relative URLs
to their absolute equivalent on GitHub, normalizing package metadata
with redundant readme content, etc

```js
var package = {
  name: "foo",
  description: "foo is a thing",
  repository: {
    type: "git",
    url: "https://github.com/kung/foo"
  }
}

marky(
  "# hello, I am the foo readme",
  {package: package}
)
```

## Dependencies

- [github-slugger](https://github.com/Flet/github-slugger): Generate a slug just like GitHub does for markdown headings
- [github-url-to-object](https://github.com/zeke/github-url-to-object): Extract user, repo, and other interesting properties from GitHub URLs
- [highlights](https://github.com/atom/highlights): Syntax highlighter
- [highlights-tokens](https://github.com/zeke/highlights-tokens): A list of the language tokens used by the Atom.app [highlights](https://www.npmjs.com/package/highlights) syntax highlighter
- [innertext](https://github.com/revin/innertext): Extract the `innerText` from a snippet of HTML
- [lodash](https://github.com/lodash/lodash): A utility library delivering consistency, customization, performance, &amp; extras.
- [markdown-it](https://github.com/markdown-it/markdown-it): Markdown-it - modern pluggable markdown parser.
- [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji): Markdown-it-emoji extension for Markdown-it that parses markdown emoji syntax to unicode.
- [markdown-it-expand-tabs](https://github.com/revin/markdown-it-expand-tabs): Replace leading tabs with spaces in fenced code blocks
- [markdown-it-lazy-headers](https://github.com/Galadirith/markdown-it-lazy-headers): Lazy ATX headers plugin for markdown-it
- [markdown-it-task-lists](https://github.com/revin/markdown-it-task-lists): Render GitHub-style [task lists](https://github.com/blog/1375-task-lists-in-gfm-issues-pulls-comments)
- [property-ttl](https://github.com/soldair/property-ttl): Save memory by nulling out a property after ttl if it has not been accessed
- [sanitize-html](https://github.com/punkave/sanitize-html): Clean up user-submitted HTML, preserving whitelisted elements and whitelisted attributes on a per-element basis
- [similarity](https://github.com/zeke/similarity): How similar are these two strings?

Extra syntax highlighting, in addition to what comes with [highlights](https://www.npmjs.com/package/highlights):

- [atom-language-diff](https://github.com/revin/atom-language-diff): Diff/patch files
- [atom-language-nginx](https://github.com/hnagato/atom-language-nginx): [NGINX](http://nginx.org/) configuration files
- [language-dart](https://github.com/Daegalus/atom-language-dart): [Dart](https://www.dartlang.org/) language
- [language-erlang](https://github.com/jonathanmarvens/atom-language-erlang): [Erlang](http://www.erlang.org/) language
- [language-glsl](https://github.com/hughsk/language-glsl): [OpenGL Shading Language](https://www.opengl.org/documentation/glsl/) files
- [language-haxe](https://github.com/theRemix/language-haxe): [Haxe](http://haxe.org/) language
- [language-ini](https://github.com/jacobbednarz/atom-language-ini): .ini configuration files
- [language-rust](https://github.com/zargony/atom-language-rust): [Rust](http://www.rust-lang.org/) language
- [language-stylus](https://github.com/matthojo/language-stylus): [Stylus](http://stylus-lang.com/) CSS preprocessor

## License

ISC
