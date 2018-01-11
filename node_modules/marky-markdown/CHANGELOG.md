# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="11.3.2"></a>
## [11.3.2](https://github.com/npm/marky-markdown/compare/v11.3.1...v11.3.2) (2017-09-28)



<a name="11.3.1"></a>
## [11.3.1](https://github.com/npm/marky-markdown/compare/v11.3.0...v11.3.1) (2017-09-21)



<a name="11.3.0"></a>
# [11.3.0](https://github.com/npm/marky-markdown/compare/v11.2.0...v11.3.0) (2017-09-19)


### Features

* allow heading alignment ([62ae4c6](https://github.com/npm/marky-markdown/commit/62ae4c6))
* **dep:** bump oniguruma ([2c5eaf2](https://github.com/npm/marky-markdown/commit/2c5eaf2))
* **test:** do not hard code 6.9.5 in travis.yml ([4fba622](https://github.com/npm/marky-markdown/commit/4fba622))



<a name="11.2.0"></a>
# [11.2.0](https://github.com/npm/marky-markdown/compare/v11.1.0...v11.2.0) (2017-08-19)


### Features

* Add support/tests for typescript highlighting ([a8e38fc](https://github.com/npm/marky-markdown/commit/a8e38fc))



<a name="11.1.0"></a>
# [11.1.0](https://github.com/npm/marky-markdown/compare/v11.0.0...v11.1.0) (2017-08-19)


### Bug Fixes

* make github package-relative url rewriting work in multi-line html blocks ([#405](https://github.com/npm/marky-markdown/issues/405)) ([3cf4691](https://github.com/npm/marky-markdown/commit/3cf4691))


### Features

* add support for JSX syntax highlighting in code blocks ([#396](https://github.com/npm/marky-markdown/issues/396)) ([4c24348](https://github.com/npm/marky-markdown/commit/4c24348))
* treat `bash` the same as `sh` for specifying code fence language ([#401](https://github.com/npm/marky-markdown/issues/401)) ([8ba4368](https://github.com/npm/marky-markdown/commit/8ba4368))



<a name="11.0.0"></a>
# [11.0.0](https://github.com/npm/marky-markdown/compare/v10.1.4...v11.0.0) (2017-06-09)


### Bug Fixes

* switch back to CommonMark HTML block parsing to match GitHub's new implementation ([c15349c](https://github.com/npm/marky-markdown/commit/c15349c))


### BREAKING CHANGES

* HTML blocks must (once again) be terminated by a blank line rather than allowing markdown to interrupt the HTML block. This matches marky-markdown@<10.x behavior, as well as CommonMark.



<a name="10.1.4"></a>
## [10.1.4](https://github.com/npm/marky-markdown/compare/v10.1.3...v10.1.4) (2017-06-08)


### Bug Fixes

* **test:** explicitly test for falsy repository.url in package ([93b17a6](https://github.com/npm/marky-markdown/commit/93b17a6))



<a name="10.1.3"></a>
## [10.1.3](https://github.com/npm/marky-markdown/compare/v10.1.2...v10.1.3) (2017-06-06)


### Bug Fixes

* allow link titles to be delimited by parentheses ([a66ed66](https://github.com/npm/marky-markdown/commit/a66ed66))



<a name="10.1.2"></a>
## [10.1.2](https://github.com/npm/marky-markdown/compare/v10.1.1...v10.1.2) (2017-06-06)


### Bug Fixes

* infinite loop caused by abstemious HTML plugin ([#382](https://github.com/npm/marky-markdown/issues/382)) ([1e4b838](https://github.com/npm/marky-markdown/commit/1e4b838))



<a name="10.1.1"></a>
## [10.1.1](https://github.com/npm/marky-markdown/compare/v10.1.0...v10.1.1) (2017-06-02)


### Bug Fixes

* convert ES6 template string to ES5; gets the browserify bundle working ([3b16ea9](https://github.com/npm/marky-markdown/commit/3b16ea9))



<a name="10.1.0"></a>
# [10.1.0](https://github.com/npm/marky-markdown/compare/v10.0.1...v10.1.0) (2017-06-02)


### Features

* classes attached to anchor and svg in headings can now be configured ([f7a0883](https://github.com/npm/marky-markdown/commit/f7a0883))



<a name="10.0.1"></a>
# 10.0.1 (2017-05-31)

- Fix the browserify build, which had broken due to the inclusion of some ES6+ code. ([pull/372])

[pull/372]: https://github.com/npm/marky-markdown/pull/372

# 10.0.0 (2017-05-26)

We're fine tuning a lot of small but noticeable behavioral differences between
our renderer and GitHub's, as we discover situations where GitHub differs from
CommonMark. The closer we get to full GitHub compatibility, the edge-case-ier
our changes become. Without a doubt, version 10 is the edge-case-fix-iest
release of marky-markdown yet!

## Breaking Changes

- links generated in headers are created differently:
  - links now use class `anchor` rather than `deep-link`. ([pull/289])
  - SVG icons in links now use class `octicon` and `octicon-link` rather than
    `deep-link-icon`. ([pull/292])
  - headings now have `aria-hidden=true`. ([pull/293])
- we no longer do special processing on badge images. ([pull/303])
- any options provided must now be an object. ([pull/323])
- ids in user generated HTML are now prefixed. ([pull/358])

## Features

- spaces are now supported in image and url paths, thanks [sjking]! ([pull/280])
- new `getParser` method to provide access to the underlying markdown-it parser
  instance in case you want to use [custom markdown-it plugins] in your own
  apps. ([pull/285], [pull/287]; see [low level parser access])
- marky-markdown now understands relative GitHub links, e.g., `[logo](/logo.png)` 😄 ([pull/308])
- support for spaces between link labels and paths. ([pull/329])
- `details` and `summary` are now white-listed HTML tags. ([pull/333])
- support for GitHub repos that have no master branch. thanks [zkat]! ([pull/351])
- **security:** ids in user generated HTML are now prefixed. ([pull/358])
- add debug information to footer if debug is enabled. ([pull/346])
- support string repository shorthand in package.json. ([pull/369])

## Fixes

- stop stripping `style` attributes from `img` elements. ([pull/299])
- HTML blocks are no longer greedy. ([pull/325])
- syntax highlighting no longer applied if no language is specified in code block. ([pull/327])
- headings can now interrupt paragraphs, and will be rendered appropriately. ([pull/326])
- markdown-it now properly renders tables with internal code blocks. ([pull/316])
- fix bug with relative images and links. ([pull/323])
- enforce that if options are passed, they must be an object. ([pull/323])

[pull/280]: https://github.com/npm/marky-markdown/pull/280
[custom markdown-it plugins]: https://www.npmjs.com/search?q=markdown-it-plugin
[low level parser access]: https://github.com/npm/marky-markdown/tree/abc7919e840977efaf4e9212879339b258981db0#low-level-parser-access
[pull/285]: https://github.com/npm/marky-markdown/pull/285
[pull/287]: https://github.com/npm/marky-markdown/pull/287
[pull/289]: https://github.com/npm/marky-markdown/pull/289
[pull/292]: https://github.com/npm/marky-markdown/pull/292
[pull/293]: https://github.com/npm/marky-markdown/pull/293
[pull/299]: https://github.com/npm/marky-markdown/pull/299
[pull/303]: https://github.com/npm/marky-markdown/pull/303
[pull/308]: https://github.com/npm/marky-markdown/pull/308
[pull/316]: https://github.com/npm/marky-markdown/pull/316
[pull/322]: https://github.com/npm/marky-markdown/pull/322
[pull/323]: https://github.com/npm/marky-markdown/pull/323
[pull/325]: https://github.com/npm/marky-markdown/pull/325
[pull/326]: https://github.com/npm/marky-markdown/pull/326
[pull/327]: https://github.com/npm/marky-markdown/pull/327
[pull/329]: https://github.com/npm/marky-markdown/pull/329
[pull/333]: https://github.com/npm/marky-markdown/pull/333
[pull/346]: https://github.com/npm/marky-markdown/pull/346
[pull/351]: https://github.com/npm/marky-markdown/pull/351
[pull/358]: https://github.com/npm/marky-markdown/pull/358
[pull/369]: https://github.com/npm/marky-markdown/pull/369
[zkat]: https://github.com/zkat

# 9.0.3 (2017-04-12)

### Bug Fix! 🐛

- Updated sanitization to ensure that user-generated ids that are in HTML
  blocks are also prefixed. ([pull/357])

[pull/357]: https://github.com/npm/marky-markdown/pull/357

# 9.0.2 (2017-03-03)

### Dependencies

- Bumped `highlights` to `2.1.3` because a new version of its dep `fs-plus`
  broke Node 4 builds

# 9.0.1 (2016-10-31)

### Bug Fix! 🐞

- Fixed a bug in our CLI script that appeared because we forgot to update it to
  account for the breaking API change in v9, lololol. Thanks to [sjking] for
  coming to the rescue! ([pull/276])

[sjking]: https://github.com/sjking
[pull/276]: https://github.com/npm/marky-markdown/pull/276

# 9.0.0 (2016-10-31)

## Breaking API Change

**marky-markdown now returns an HTML string rather than a cheerio DOM object.**

With this release, we took cheerio out of the processing pipeline and replaced
formerly cheerio-based operations with custom markdown-it plugins. Removing the
overhead of creating a DOM object for every document speeds marky-markdown up
by 15–20% on average, but it _does_ also result in a change to the API.

So what used to be:
```js
var marky = require('marky-markdown')
var html = marky('# Some markdown string').html()
```
is now:
```js
var marky = require('marky-markdown')
var html = marky('# Some markdown string') // no longer need `.html()`
```

Many marky-markdown users will only need to remove the `.html()` method call,
because all they needed is raw HTML anyway. For any users who do need the
cheerio DOM object, the migration path is to create the DOM object yourself:
```js
var marky = require('marky-markdown')
var html = marky('# Some markdown string')

var cheerio = require('cheerio')
var dom = cheerio.load(html)
```

Cheerio, cheerio! (HT [wmhilton])

## Other Changes in this Release

- **Node 6 support!** We've been blocked on supporting node 6.x for quite a
  while now ([issue/176]), but thanks to some upstream work
  ([here](https://github.com/atom/first-mate/pull/74) and
  [here](https://github.com/atom/highlights/pull/44)), the blocker has been
  removed, and now you can use marky in The Future™. ([pull/227] by
  [ashleygwilliams])
- **Node 0.10 dev environment no longer supported** We've updated our
  devDependency on JS Standard to 8.x which no longer supports Node 0.10 and
  0.12.  Node 0.10 is being EOLd this year, and as a result, we feel ok no
  longer supporting them as development environments. You can still **use**
  marky using 0.10, but if you want to **develop** it, you'll need to upgrade
  to Node 4 or later. ([pull/239] by Greenkeeper)
- **More GitHub-like heading rendering!** Working out a solution for [issue/224]
  led us down a path that resulted in our generated headings getting closer to
  what GitHub renders. Now the `deep-link` class and generated `id` slugs that
  we formerly applied to heading elements themselves are added to a link we put
  inside the heading. This means we no longer wrap headings' entire contents in
  a link, which means we can generate an anchor for every heading, not just ones
  that don't contain links to begin with. Win! (also, Mouthful!). The new-style
  links contain an SVG icon that matches GitHub's hover icon; if you want to
  disable it, you can pass `{enableHeadingLinkIcons: false}` in marky's
  `options`. Big thanks to [nwhetsell] for the help! ([pull/225] by
  [ashleygwilliams] and [revin])
- **More GitHub-like link/image/paragraph rendering!** Oops, we were stripping
  out `title` attributes from links and images, as well as `align` attributes
  from paragraphs during the rendering process, but now we handle those
  correctly, so, e.g., `[link](#url "title text")` turns into
  `<a href="#url" title="title text">link</a>` like it should, and if you have
  inline HTML like `<p align="center">...</p>` the alignment doesn't get
  stripped. ([pull/235], [issue/241] by [kasbah], [pull/242]). The `align`
  attribute is also supported on inline HTML `<img>` elements too. ([pull/270],
  [issue/269] by [revelt])
- **Even _more_ GitHub-like heading rendering!** [kasbah] clued us into the fact
  that GitHub only considers `# header` text to be a header if there's no
  leading whitespace before the `#` character (CommonMark allows up to three
  leading spaces, see the [specification](http://spec.commonmark.org/0.26/#example-38)).
  Thanks, [kasbah]! ([issue/233], [pull/234])
- **Faster parsing!** As above: no more cheerio. ([pull/246], [pull/251] by
  [revin])
- **Leaner published package!** We used to ship marky with the unit test suite
  included, but now it's in our [npm ignore] file, so `npm install` no longer
  gives you the tests. They're still here, of course; you just have to clone the
  repo now :smile: ([pull/223] by [ashleygwilliams])
- **Git repository cleanup!** We were getting tired of dealing with merge
  conflicts in our browserify bundle, so in response to [issue/262],
  [karanjthakkar] heroically submitted [pull/271] to help us make our
  development experience nicer (now the bundle is in the published package, but
  not tracked by git). Thank you!

#### CommonMark 0.26

The specification that forms the basis for "standard" Markdown parsing continues
to evolve; it's up to [0.26](http://spec.commonmark.org/0.26/) now, with the
changes implemented in [markdown-it 8.0.0]. The main updates are:

  - When whitespace is used to specify a block (for example, the indentation
    that creates a code block, or indenting lists), it's now legal to use tab
    characters rather than spaces. Such leading tabs now behave as if they were
    replaced by four spaces.
  - Ordered lists that appear at the end of paragraphs are required to start
    with a 1.
  - It's now legal to have multiple blank lines between list items. CommonMark
    used to treat those as separate lists, but now they collapse into the same
    list (which is nice for us, because that's how GitHub has always done it).
  - Text emphasis is calculated differently now. `*foo**bar**baz*` used to be
    `<em>foo</em><em>bar</em><em>baz</em>` but now it becomes
    `<em>foo</em><strong>bar</strong><em>baz</em>`.

### Dependencies

- `markdown-it` updated to `^8.0.0`
- `highlights` updated to `^1.4.1`
- `cheerio` updated to `^0.22.0`
- `markdown-it-emoji` updated to `^1.3.0`
- `innertext` added at `^1.0.1`
- `is-badge` added at `^1.1.0`

[issue/176]: https://github.com/npm/marky-markdown/issues/176
[issue/224]: https://github.com/npm/marky-markdown/issues/224
[nwhetsell]: https://github.com/nwhetsell
[pull/223]: https://github.com/npm/marky-markdown/pull/223
[pull/225]: https://github.com/npm/marky-markdown/pull/225
[pull/227]: https://github.com/npm/marky-markdown/pull/227
[pull/235]: https://github.com/npm/marky-markdown/pull/235
[kasbah]: https://github.com/kasbah
[issue/233]: https://github.com/npm/marky-markdown/issues/233
[pull/234]: https://github.com/npm/marky-markdown/issues/234
[npm ignore]: https://github.com/npm/marky-markdown/blob/master/.npmignore
[issue/241]: https://github.com/npm/marky-markdown/issues/241
[pull/242]: https://github.com/npm/marky-markdown/issues/242
[markdown-it 8.0.0]: https://github.com/markdown-it/markdown-it/blob/master/CHANGELOG.md#800--2016-09-16
[pull/239]: https://github.com/npm/marky-markdown/pull/239
[pull/251]: https://github.com/npm/marky-markdown/pull/251
[pull/246]: https://github.com/npm/marky-markdown/pull/246
[issue/269]: https://github.com/npm/marky-markdown/issues/269
[pull/270]: https://github.com/npm/marky-markdown/pull/270
[revelt]: https://github.com/revelt
[issue/262]: https://github.com/npm/marky-markdown/issues/262
[pull/271]: https://github.com/npm/marky-markdown/pull/271
[karanjthakkar]: https://github.com/karanjthakkar

# 8.1.0 (2016-08-08)

### New Features

- Browserify- now easier than before! Following up on [wmhilton]'s
  work from our `8.0.0` release, [zeke] added some scripts and docs
  to make using marky with Browserify even easier. Among other things,
  marky now ships with a browserified file ready to go! ([pull/211])

### Bug Fixes

- Table troubles be gone! Or at least, any troubles with text-alignment.
  Marky was stripping `style` attributes from `<td>` and `<th>` elements-
  and thanks to [revin]'s hardwork, it isn't anymore!
  ([issues/212], [pull/216])

### Docs

- A slightly new and reogranized README- refocused to make it easier for
  potential users of marky to learn about what marky does and wants to do!
  ([pull/221])

### Dependencies

- `mocha` updated to `3.0.2` ([pull/219])
- `atom-language-nginx` update to `0.6.1`, adding support for highlighting
  [lua directives]! ([pull/214])

[pull/221]: https://github.com/npm/marky-markdown/pull/221
[issues/212]: https://github.com/npm/marky-markdown/issues/212
[pull/216]: https://github.com/npm/marky-markdown/pull/216
[pull/211]: https://github.com/npm/marky-markdown/pull/211
[pull/219]: https://github.com/npm/marky-markdown/pull/219
[pull/214]: https://github.com/npm/marky-markdown/pull/214
[lua directives]: https://github.com/hnagato/atom-language-nginx/commit/17c3533de833886a2be666506709f3a21776cb96

# 8.0.0 (2016-07-08)

Progress toward feature parity with GitHub's markdown rendering continues...

### New Features / Breaking Changes

- get your `class` on: syntax highlighting now supports ES2015 ([pull/206])!
  The changes to the rendered markup for highlighted JavaScript
  aren't purely additive (we wish we could be more specific, but the
  functionality comes from [atom/language-javascript], which currently
  doesn't publish a changelog; if you're feeling particularly brave,
  there's always the [diff](https://github.com/atom/language-javascript/compare/b47a7fe...5fb7053)
  :flushed:), so dependening on how your CSS works, there may or may
  not be non-trivial work for you to do
- changed the way certain links are auto-generated (i.e., linkifying
  `www.example.com` but not `readme.md`) so as to more closely match
  how Github does it ([pull/151], [issue/146]); thanks to [puzrin]
  for help working out the details
- `<` and `>` are no longer allowed in auto-linked text due to a
  sub-dependency update coming in from `markdown-it` (see below, also
  [linkify-it/26] for details)
- we now allow [link reference definitions] to appear immediately
  following paragraphs rather than requiring a blank link in between
  them; this contradicts
  [CommonMark](http://spec.commonmark.org/0.25/#example-175) but
  matches Github's behavior. ([issue/159], [pull/164])
- we now support Github flavored markdown [task lists] in markdown
  documents. ([issue/166], [pull/168])
- we no longer strip HTML `<dl>`, `<dt>`, and `<dd>` elements from
  embedded markup, so you can write definition lists. HOWEVER: these
  are not directly supported by any particular standard Markdown
  syntax; since they are treated as inline HTML, any lines indented
  with four or more spaces will get rendered as code blocks as per
  CommonMark; see the discussion in [issue/169]. ([pull/170])
- big thanks to [wmhilton] who swooped in out of the blue and made
  it so **marky now works in a web browser!** :tada: :tada: :tada:
  Unfortunately, you have to specify `{highlightSyntax: false}` in
  the options because the deepest recesses of our dependency tree
  have some native C++ stuff which can't be browserified. On the
  other hand, leaving out syntax highlighting cuts the final bundle
  size roughly in half, so that's a win. ([pull/203])
- if you invoke marky with `{highlightSyntax: false}` in the options,
  we no longer apply the syntax highlighting-related CSS classes to
  the rendered HTML; e.g., rather than
  `<div class="highlight js"><pre class="editor editor-colors">...</pre></div>`
  we will render simply `<pre><code>...</code></pre>`. ([issue/162],
  [pull/163])


#### CommonMark 0.25

Due to the update to `markdown-it` (see below), our markdown parsing now uses CommonMark 0.25 (up from 0.23) as a baseline. The [CommonMark 0.24 Changelog] and [CommonMark 0.25 Changelog] have the details; the main interesting parts are:

  - setext headings can span multiple lines now

    ```
    This didn't work as a heading before
    but now it does
    =========
    ```

  - link destinations can no longer contain spaces, even when surrounded by angle brackets

    ```
    [link text](<this used to be valid.html>)
    ```

    *Note:* This has already caught a few people out; we have an issue tracking it (see [issue/195]) and are looking at reintroducing the more flexible (non-standard) parsing in the future.

  - valid link schemes used to be enumerated ('http', 'https', 'ftp', etc...); now they're defined as "any sequence	of 2--32 characters beginning with an ASCII letter and followed by any combination of ASCII letters, digits, or the symbols plus ('+'), period ('.'), or hyphen ('-')"; in practice, this won't affect most documents, but it *is* more flexible and future-compatible.

[pull/206]: https://github.com/npm/marky-markdown/pull/206
[atom/language-javascript]: https://github.com/atom/language-javascript/tree/5fb7053b459ba595459f93fea10f5341cd3cc206
[pull/151]: https://github.com/npm/marky-markdown/pull/151
[issue/146]: https://github.com/npm/marky-markdown/issues/146
[puzrin]: https://github.com/puzrin
[linkify-it/26]: https://github.com/markdown-it/linkify-it/issues/26
[link reference definitions]: http://spec.commonmark.org/0.24/#link-reference-definitions
[issue/159]: https://github.com/npm/marky-markdown/issues/159
[pull/164]: https://github.com/npm/marky-markdown/pull/164
[task lists]: https://github.com/blog/1375-task-lists-in-gfm-issues-pulls-comments
[issue/166]: https://github.com/npm/marky-markdown/issues/166
[pull/168]: https://github.com/npm/marky-markdown/pull/168
[issue/169]: https://github.com/npm/marky-markdown/issues/169
[pull/170]: https://github.com/npm/marky-markdown/pull/170
[CommonMark 0.24 Changelog]: http://spec.commonmark.org/0.24/changes.html
[CommonMark 0.25 Changelog]: http://spec.commonmark.org/0.25/changes.html
[issue/162]: https://github.com/npm/marky-markdown/issues/162
[pull/163]: https://github.com/npm/marky-markdown/pull/163
[wmhilton]: https://github.com/wmhilton
[pull/203]: https://github.com/npm/marky-markdown/pull/203
[issue/195]: https://github.com/npm/marky-markdown/issues/195

### Dependencies

- `markdown-it` updated to `7.0.0` ([pull/153])
- added `markdown-it-task-lists` at `1.0.0` ([pull/168])

[pull/153]: https://github.com/npm/marky-markdown/pull/153

# 7.0.2 (2016-07-06)

- fixed a bug where markdown headings containing HTML links were still
  wrongly being wrapped with generated anchor links, thanks to [jdalton]
  for pointing it out! ([issue/200], [pull/201])

[jdalton]: https://github.com/jdalton
[issue/200]: https://github.com/npm/marky-markdown/issues/200
[pull/201]: https://github.com/npm/marky-markdown/pull/201

# 7.0.1 (2016-05-28)

- removed some unused configuration option handling from the process
  by which we wrap markdown code blocks ([pull/154])

### Tests

- unit tests were breaking when dependencies's READMEs weren't in
  our file tree (specifically mocha, a devDependency); now we skip
  trying to process those ([pull/184])
- a dependency was leaking a variable into the global scope; now we
  test for that; thanks [aredridel]! ([issue/180], [pull/186])
- added some tests to make sure marky doesn't accidentally do
  mustache template variable replacement ([issue/160], [pull/161])


### Dependencies

- `glob` updated to `7.0.0` ([pull/150])
- `lodash.pickBy` updated to `4.2.1` ([pull/155])
- `github-url-to-object` held at `2.1.0` ([pull/158]) pending
  resolution of [github-url-to-object-issue-19]
- `standard` updated to `7.1.0` ([pull/179])
- `mocha` updated to `2.5.2` ([pull/184])
- `markdown-it-emoji` updated to `1.2.0` ([pull/189])

[aredridel]: https://github.com/aredridel
[pull/150]: https://github.com/npm/marky-markdown/pull/150
[pull/154]: https://github.com/npm/marky-markdown/pull/154
[pull/155]: https://github.com/npm/marky-markdown/pull/155
[pull/158]: https://github.com/npm/marky-markdown/pull/158
[issue/160]: https://github.com/npm/marky-markdown/issues/160
[pull/161]: https://github.com/npm/marky-markdown/pull/161
[github-url-to-object-issue-19]: https://github.com/zeke/github-url-to-object/issues/19
[pull/179]: https://github.com/npm/marky-markdown/pull/179
[issue/180]: https://github.com/npm/marky-markdown/issues/180
[pull/184]: https://github.com/npm/marky-markdown/pull/184
[pull/186]: https://github.com/npm/marky-markdown/pull/186
[pull/189]: https://github.com/npm/marky-markdown/pull/189

# 7.0.0 (2016-02-08)

### Breaking Changes

- updated `markdown-it` to `5.1.0` that broke the behavior of
  fenced code blocks. updated tests to reflect new behavior.
  ([pull/100]) by [revin]
- we were seeing rendering issues because `markdown-it` does not
  do anything with tab characters in fenced code blocks. we now
  convert tab characters into four-spaces, which follows Github
  flavored markdown ([issue/126],[pull/127]) by [revin]
- converts emoji in heading IDs to emoji shortcode names to more
  closely match Github flavored markdown ([issue/128], [pull/133])
  filed by [chrisdickinson], fixed by [revin]

[pull/100]: https://github.com/npm/marky-markdown/pull/100
[pull/127]: https://github.com/npm/marky-markdown/pull/127
[issue/126]: https://github.com/npm/marky-markdown/issues/126
[issue/128]: https://github.com/npm/marky-markdown/issues/128
[pull/133]: https://github.com/npm/marky-markdown/pull/133
[chrisdickinson]: https://github.com/chrisdickinson

# 6.0.4 (2016-02-08)

### Documentation

- badges about the time til close for PRs and issues were added to
  the `README` by [ashleygwilliams]
- a line about `:emoji:` conversion was added to the `README` by
  [revin]
- a trailing comma in the options description was removed by [revin]

### Tests

- originally we were installing some packages as `devDependencies` in
  order to use their `README`s in tests. this became an issue when
  greenkeeper would attempt to update them and break our tests :)
  we now have pulled in the `README`s as static assets ([issue/91]
  [pull/114]), by [revin]
- tests were all in a single file, broken up in categories
  ([issue/122], [pull/123]) by [revin]
- test coverage was greatly improved ([pull/138]) by [revin]
  - our `packagize` module would error out if the package provided,
    lacked a name, `if()` guard added
  - ensure that `cdn` module bails if there isn't sufficient package
    data supplied
  - add a few lines to  `github.md` test fixture to make sure it
    handles `<img>` elements with a blank/missing `src` attribute
    and `<a>` elements with a blank/missing `href`
  - ensure running marky with `{debug: true}` produces the same output
    as normal execution

[issue/91]: https://github.com/npm/marky-markdown/issues/91
[pull/114]: https://github.com/npm/marky-markdown/pull/114
[issue/122]: https://github.com/npm/marky-markdown/issues/122
[pull/123]: https://github.com/npm/marky-markdown/pull/123
[pull/138]: https://github.com/npm/marky-markdown/pull/138

### Bug Fixes

- any URL containing "//youtube.com" was make it through our iframe
  filter, but the intent was to only allow actual YouTube URLs.
  ([issue/108], [pull/110]), filed by [lovasoa],  solved by [revin]

[lovasoa]: https://github.com/lovasoa
[issue/108]: https://github.com/npm/marky-markdown/issues/108
[pull/110]: https://github.com/npm/marky-markdown/pull/110

### Dependencies

- `glob` updated to `6.0.4` ([pull/101])
- remove `front-matter` ([pull/134]) by [revin]
- `cheerio` updated to `0.20.0` ([pull/135])
- `lodash` updated to `4.2.0` ([pull/136])
- `standard` updated to `6.0.4` ([pull/144]) by [Flet]

[pull/134]: https://github.com/npm/marky-markdown/pull/134
[pull/101]: https://github.com/npm/marky-markdown/pull/101
[pull/135]: https://github.com/npm/marky-markdown/pull/135
[pull/136]: https://github.com/npm/marky-markdown/pull/136
[pull/144]: https://github.com/npm/marky-markdown/pull/144

### Other

- some code existed for creating meta tags based on `README`
  frontmatter that was not being used. it and its tests were removed.
  ([issue/43], [pull/116]) by [revin]
- a small module for removing HTML comments was still in the codebase
  but had not been used in a while. was finally fully removed
  ([pull/121]) by [revin]

[pull/121]: https://github.com/npm/marky-markdown/pull/121
[issue/43]: https://github.com/npm/marky-markdown/issues/43
[pull/116]: https://github.com/npm/marky-markdown/pull/116

# 6.0.3 (2016-01-14)

### Bug Fix

- we strip `h1` tags from `README`s that have the same content as the
  package name, however we did not update this feature to account for
  scoped package names, e.g. @scope/pkg. now we remove the scope from
  the package meta-data to check the `README`'s `h1`.
  ([issue/48][pull/103]) - reported by [sindresorhus], solved by [revin]

### Documentation

- fix syntax error in code example re: npm package parsing ([pull/102]) -
  by [latentflip]
- updated `README` to reflect current list of dependencies -
  ([pull/107]) - by [revin]
- updated author in `package.json` to reflect [ashleygwilliams] is current
  maintainer ([pull/112]) - by [ashleygwilliams]

### Dependencies

- upgraded to `lodash 4.0.0` ([pull/106])- by [revin]

# 6.0.2 (2016-01-11)

### Bug Fix

- we were parsing `:)` into emoji, though this is not the desired behavior.
  disabled shortcut emoji parsing in the markdown-it-emoji plugin.
  ([issue/95], [pull/97]) - reported by [cloakedninjas], solved by [revin]

# 6.0.1 (2016-01-07)

### Bug Fix

- `markdown-it@5.1.0` would break the build, so `package.json` was updated
  to hold at minor version, `~5.0.2` ([pull/90][pull/93]) - by [ashleygwilliams]

# 6.0.0 (2016-01-06)

### Breaking Changes

- ✨emoji support✨, ([issues/59], [pull/87]) - by [patriciarealini]
- Github style anchor IDs ([pull/56]) - by [Flet]
- support lazy headers, e.g., `#lookmanospace` ([issues/39], [pull/82]) - by     [revin]

### New Features

- diff syntax highlighting ([issues/64], [pull/84]) - by [revin]
- auto-linkify qualified URLs ([pull/79]) - by [zeke]
- whitelist `ins`, `del`, `sub`, `sup` HTML tags ([issues/55], [pull/83]) - by [revin]

[latentflip]: https://github.com/latentflip
[pull/112]: https://github.com/npm/marky-markdown/pull/112
[pull/107]: https://github.com/npm/marky-markdown/pull/107
[pull/102]: https://github.com/npm/marky-markdown/pull/102
[pull/106]: https://github.com/npm/marky-markdown/pull/106
[sindresorhus]: https://github.com/sindresorhus
[pull/103]: https://github.com/npm/marky-markdown/pull/103
[issue/48]: https://github.com/npm/marky-markdown/issues/48
[cloakedninjas]: https://github.com/cloakedninjas
[pull/97]: https://github.com/npm/marky-markdown/pull/97
[issue/95]: https://github.com/npm/marky-markdown/issues/95
[ashleygwilliams]: https://github.com/ashleygwilliams
[pull/90]: https://github.com/npm/marky-markdown/pull/90
[pull/93]: https://github.com/npm/marky-markdown/pull/93
[issues/59]: https://github.com/npm/marky-markdown/issues/59
[pull/87]: https://github.com/npm/marky-markdown/pull/87
[patriciarealini]: https://github.com/patriciarealini
[issues/64]: https://github.com/npm/marky-markdown/issues/64
[pull/84]: https://github.com/npm/marky-markdown/pull/84
[revin]: https://github.com/revin
[pull/56]: https://github.com/npm/marky-markdown/pull/56
[Flet]: https://github.com/Flet
[pull/79]: https://github.com/npm/marky-markdown/pull/79
[zeke]: https://github.com/zeke
[issues/55]: https://github.com/npm/marky-markdown/issues/55
[pull/83]: https://github.com/npm/marky-markdown/pull/83
[issues/39]: https://github.com/npm/marky-markdown/issues/39
[pull/82]: https://github.com/npm/marky-markdown/pull/82
