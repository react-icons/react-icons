# sanitize-html

<a href="http://apostrophenow.org/"><img src="https://raw.github.com/punkave/sanitize-html/master/logos/logo-box-madefor.png" align="right" /></a>

`sanitize-html` provides a simple HTML sanitizer with a clear API.

`sanitize-html` is tolerant. It is well suited for cleaning up HTML fragments such as those created by ckeditor and other rich text editors. It is especially handy for removing unwanted CSS when copying and pasting from Word.

`sanitize-html` allows you to specify the tags you want to permit, and the permitted attributes for each of those tags.

If a tag is not permitted, the contents of the tag are still kept, except for `script`, `style` and `textarea` tags.

The syntax of poorly closed `p` and `img` elements is cleaned up.

`href` attributes are validated to ensure they only contain `http`, `https`, `ftp` and `mailto` URLs. Relative URLs are also allowed. Ditto for `src` attributes.

HTML comments are not preserved.

## Requirements

`sanitize-html` is intended for use with Node. That's pretty much it. All of its npm dependencies are pure JavaScript. `sanitize-html` is built on the excellent `htmlparser2` module.

## How to use

### Browser

*Think first: why do you want to use it in the browser?* Remember, *servers must never trust browsers.* You can't sanitize HTML for saving on the server anywhere else but on the server.

But, perhaps you'd like to display sanitized HTML immediately in the browser for preview. Or ask the browser to do the sanitization work on every page load. You can if you want to!

* Clone repository
* Run npm install and build / minify:

```bash
npm install
npm run minify
```

You'll find the minified and unminified versions of sanitize-html (with all its dependencies included) in the dist/ directory.

Use it in the browser:

```html
<html>
    <body>
        <script type="text/javascript"  src="dist/sanitize-html.js"></script>
        <script type="text/javascript" src="demo.js"></script>
    </body>
</html>
```

```javascript
var html = "<strong>hello world</strong>";
console.log(sanitizeHtml(html));
console.log(sanitizeHtml("<img src=x onerror=alert('img') />"));
console.log(sanitizeHtml("console.log('hello world')"));
console.log(sanitizeHtml("<script>alert('hello world')</script>"));
```

### Node (Recommended)

Install module from console:

```bash
npm install sanitize-html
```

Use it in your node app:

```js
var sanitizeHtml = require('sanitize-html');

var dirty = 'some really tacky HTML';
var clean = sanitizeHtml(dirty);
```

That will allow our default list of allowed tags and attributes through. It's a nice set, but probably not quite what you want. So:

```js
// Allow only a super restricted set of tags and attributes
clean = sanitizeHtml(dirty, {
  allowedTags: [ 'b', 'i', 'em', 'strong', 'a' ],
  allowedAttributes: {
    'a': [ 'href' ]
  }
});
```

Boom!

#### "I like your set but I want to add one more tag. Is there a convenient way?" Sure:

```js
clean = sanitizeHtml(dirty, {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ])
});
```

If you do not specify `allowedTags` or `allowedAttributes` our default list is applied. So if you really want an empty list, specify one.

#### "What are the default options?"

```js
allowedTags: [ 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
  'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
  'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre' ],
allowedAttributes: {
  a: [ 'href', 'name', 'target' ],
  // We don't currently allow img itself by default, but this
  // would make sense if we did
  img: [ 'src' ]
},
// Lots of these won't come up by default because we don't allow them
selfClosing: [ 'img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta' ],
// URL schemes we permit
allowedSchemes: [ 'http', 'https', 'ftp', 'mailto' ],
allowedSchemesByTag: {},
allowProtocolRelative: true
```

#### "What if I want to allow all tags or all attributes?"

Simple! instead of leaving `allowedTags` or `allowedAttributes` out of the options, set either
one or both to `false`:

```js
allowedTags: false,
allowedAttributes: false
```

#### "What if I don't want to allow *any* tags?"

Also simple!  Set your `allowedTag` and `allowedAttributes` to empty arrays (`[]`).

```js
allowedTags: [],
allowedAttributes: []
```

### Wildcards for attributes

You can use the `*` wildcard to allow all attributes with a certain prefix:

```javascript
allowedAttributes: {
  a: [ 'href', 'data-*' ]
}
```

Also you can use the `*` as name for a tag, to allow listed attributes to be valid for any tag:

```javascript
allowedAttributes: {
  '*': [ 'href', 'align', 'alt', 'center', 'bgcolor' ]
}
```

### htmlparser2 Options

`santizeHtml` is built on `htmlparser2`. By default the only option passed down is `decodeEntities: true` You can set the options to pass by using the parser option.

```javascript
clean = sanitizeHtml(dirty, {
  allowedTags: ['a'],
  parser: {
    lowerCaseTags: true
  }
});
```
See the [htmlparser2 wiki] (https://github.com/fb55/htmlparser2/wiki/Parser-options) for the full list of possible options.

### Transformations

What if you want to add or change an attribute? What if you want to transform one tag to another? No problem, it's simple!

The easiest way (will change all `ol` tags to `ul` tags):

```js
clean = sanitizeHtml(dirty, {
  transformTags: {
    'ol': 'ul',
  }
});
```

The most advanced usage:

```js
clean = sanitizeHtml(dirty, {
  transformTags: {
    'ol': function(tagName, attribs) {
        // My own custom magic goes here

        return {
            tagName: 'ul',
            attribs: {
                class: 'foo'
            }
        };
    }
  }
});
```

You can specify the `*` wildcard instead of a tag name to transform all tags.

There is also a helper method which should be enough for simple cases in which you want to change the tag and/or add some attributes:

```js
clean = sanitizeHtml(dirty, {
  transformTags: {
    'ol': sanitizeHtml.simpleTransform('ul', {class: 'foo'}),
  }
});
```

The `simpleTransform` helper method has 3 parameters:

```js
simpleTransform(newTag, newAttributes, shouldMerge)
```

The last parameter (`shouldMerge`) is set to `true` by default. When `true`, `simpleTransform` will merge the current attributes with the new ones (`newAttributes`). When `false`, all existing attributes are discarded.

You can also add or modify the text contents of a tag:

```js
clean = sanitizeHtml(dirty, {
  transformTags: {
    'a': function(tagName, attribs) {
        return {
            tagName: 'a',
            text: 'Some text'
        };
    }
  }
});
```
For example, you could transform a link element with missing anchor text:
```js
<a href="http://somelink.com"></a>
```
To a link with anchor text:
```js
<a href="http://somelink.com">Some text</a>
```

### Filters

You can provide a filter function to remove unwanted tags. Let's suppose we need to remove empty `a` tags like:

```html
<a href="page.html"></a>
```

We can do that with the following filter:

```javascript
sanitizeHtml(
  '<p>This is <a href="http://www.linux.org"></a><br/>Linux</p>',
  {
    exclusiveFilter: function(frame) {
        return frame.tag === 'a' && !frame.text.trim();
    }
  }
);
```

The `frame` object supplied to the callback provides the following attributes:

 - `tag`: The tag name, i.e. `'img'`.
 - `attribs`: The tag's attributes, i.e. `{ src: "/path/to/tux.png" }`.
 - `text`: The text content of the tag.
 - `tagPosition`: The index of the tag's position in the result string.

You can also process all text content with a provided filter function. Let's say we want an ellipsis instead of three dots.

```html
<p>some text...</p>
```

We can do that with the following filter:

```javascript
sanitizeHtml(
  '<p>some text...</p>',
  {
    textFilter: function(text) {
      return text.replace(/\.\.\./, '&hellip;');
    }
  }
);
```

Note that the text passed to the `textFilter` method is already escaped for safe display as HTML. You may add markup and use entity escape sequences in your `textFilter`.

### Allowed CSS Classes

If you wish to allow specific CSS classes on a particular element, you can do so with the `allowedClasses` option. Any other CSS classes are discarded.

This implies that the `class` attribute is allowed on that element.

```javascript
// Allow only a restricted set of CSS classes and only on the p tag
clean = sanitizeHtml(dirty, {
  allowedTags: [ 'p', 'em', 'strong' ],
  allowedClasses: {
    'p': [ 'fancy', 'simple' ]
  }
});
```

### Allowed CSS Styles

If you wish to allow specific CSS _styles_ on a particular element, you can do that with the `allowedStyles` option. Simply declare your desired attributes as regular expression options within an array for the given attribute. Specific elements will inherit whitelisted attributes from the global (\*) attribute. Any other CSS classes are discarded.

**You must also use `allowedAttributes`** to activate the `style` attribute for the relevant elements. Otherwise this feature will never come into play.

**When constructing regular expressions, don't forget `^` and `$`.** It's not enough to say "the string should contain this." It must also say "and only this."

**URLs in inline styles are NOT filtered by any mechanism other than your regular expression.**

```javascript
clean = sanitizeHtml(dirty, {
        allowedTags: ['p'],
        allowedAttributes: {
          'p': ["style"],
        },
        allowedStyles: {
          '*': {
            // Match HEX and RGB
            'color': [/^\#(0x)?[0-9a-f]+$/i, /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/],
            'text-align': [/^left$/, /^right$/, /^center$/],
            // Match any number with px, em, or %
            'font-size': [/^\d+$[px|em|\%]$/]
          },
          'p': {
            'font-size': [/^\d+rem$/]
          }
        }
      });
```

### Allowed URL schemes

By default we allow the following URL schemes in cases where `href`, `src`, etc. are allowed:

```js
[ 'http', 'https', 'ftp', 'mailto' ]
```

You can override this if you want to:

```javascript
sanitizeHtml(
  // teeny-tiny valid transparent GIF in a data URL
  '<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />',
  {
    allowedTags: [ 'img', 'p' ],
    allowedSchemes: [ 'data', 'http' ]
  }
);
```

You can also allow a scheme for a particular tag only:

```javascript
allowedSchemes: [ 'http', 'https' ],
allowedSchemesByTag: {
  img: [ 'data' ]
}
```

And you can forbid the use of protocol-relative URLs (starting with `//`) to access another site using the current protocol, which is allowed by default:

```javascript
allowProtocolRelative: false
```

### Discarding the entire contents of a disallowed tag

Normally, with a few exceptions, if a tag is not allowed, all of the text within it is preserved, and so are any allowed tags within it.

The exceptions are:

`style`, `script`, `textarea`

If you wish to expand this list, for instance to discard whatever is found inside a `noscript` tag, use the `nonTextTags` option:

```javascript
nonTextTags: [ 'style', 'script', 'textarea', 'noscript' ]
```

Note that if you use this option you are responsible for stating the entire list. This gives you the power to retain the content of `textarea`, if you want to.

The content still gets escaped properly, with the exception of the `script` and `style` tags. *Allowing either `script` or `style` leaves you open to XSS attacks. Don't do that* unless you have good reason to trust their origin.

## Changelog

1.16.3: don't throw away the browserified versions before publishing them. `prepare` is not a good place to `make clean`, it runs after `prepublish`.

1.16.2: `sanitize-html` is now compiled with `babel`. An npm `prepublish` script takes care of this at `npm publish` time, so the latest code should always be compiled to operate all the way back to ES5 browsers and earlier versions of Node. Thanks to Ayushya Jaiswal.

Please note that running `sanitize-html` in the browser is usually a security hole. Are you trusting the browser? Anyone could bypass that using the network panel. Sanitization is almost always best done on servers and that is the primary use case for this module.

1.16.1: changelog formatting only.

1.16.0: support for sanitizing inline CSS styles, by specifying the allowed attributes and a regular expression for each. Thanks to Cameron Will and Michael Loschiavo.

1.15.0: if configured as an allowed attribute (not the default), check for naughty URLs in `srcset` attributes. Thanks to Mike Samuel for the nudge to do this and to Sindre Sorhus for the `srcset` module.

1.14.3: inadvertent removal of lodash regexp quote dependency in 1.14.2 has been corrected.

1.14.2: protocol-relative URL detection must spot URLs starting with `\\` rather than `//` due to ages-old tolerance features of web browsers, intended for sleepy Windows developers. Thanks to Martin Bajanik.

1.14.1: documented `allowProtocolRelative` option. No code changes from 1.14.0, released a few moments ago.  

1.14.0: the new `allowProtocolRelative` option, which is set to `true` by default, allows you to decline to accept URLs that start with `//` and thus point to a different host using the current protocol. If you do **not** want to permit this, set this option to `false`. This is fully backwards compatible because the default behavior is to allow them. Thanks to Luke Bernard.

1.13.0: `transformTags` can now add text to an element that initially had none. Thanks to Dushyant Singh.

1.12.0: option to build for browser-side use. Thanks to Michael Blum.

1.11.4: fixed crash when `__proto__` is a tag name. Now using a safe check for the existence of properties in all cases. Thanks to Andrew Krasichkov.

Fixed XSS attack vector via `textarea` tags (when explicitly allowed). Decided that `script` (obviously) and `style` (due to its own XSS vectors) cannot realistically be afforded any XSS protection if allowed, unless we add a full CSS parser. Thanks again to Andrew Krasichkov.

1.11.3: bumped `htmlparser2` version to address crashing bug in older version. Thanks to e-jigsaw.

1.11.2: fixed README typo that interfered with readability due to markdown issues. No code changes. Thanks to Mikael Korpela. Also improved code block highlighting in README. Thanks to Alex Siman.

1.11.1: fixed a regression introduced in 1.11.0 which caused the closing tag of the parent of a `textarea` tag to be lost. Thanks to Stefano Sala, who contributed the missing test.

1.11.0: added the `nonTextTags` option, with tests.

1.10.1: documentation cleanup. No code changes. Thanks to Rex Schrader.

1.10.0: `allowedAttributes` now allows you to allow attributes for all tags by specifying `*` as the tag name. Thanks to Zdravko Georgiev.

1.9.0: `parser` option allows options to be passed directly to `htmlparser`. Thanks to Danny Scott.

1.8.0:

* `transformTags` now accepts the `*` wildcard to transform all tags. Thanks to Jamy Timmermans.

* Text that has been modified by `transformTags` is then passed through `textFilter`. Thanks to Pavlo Yurichuk.

* Content inside `textarea` is discarded if `textarea` is not allowed. I don't know why it took me this long to see that this is just common sense. Thanks to David Frank.

1.7.2: removed `array-includes` dependency in favor of `indexOf`, which is a little more verbose but slightly faster and doesn't require a shim. Thanks again to Joseph Dykstra.

1.7.1: removed lodash dependency, adding lighter dependencies and polyfills in its place. Thanks to Joseph Dykstra.

1.7.0: introduced `allowedSchemesByTag` option. Thanks to Cameron Will.

1.6.1: the string `'undefined'` (as opposed to `undefined`) is perfectly valid text and shouldn't be expressly converted to the empty string.

1.6.0: added `textFilter` option. Thanks to Csaba Palfi.

1.5.3: do not escape special characters inside a script or style element, if they are allowed. This is consistent with the way browsers parse them; nothing closes them except the appropriate closing tag for the entire element. Of course, this only comes into play if you actually choose to allow those tags. Thanks to aletorrado.

1.5.2: guard checks for allowed attributes correctly to avoid an undefined property error. Thanks to Zeke.

1.5.1: updated to htmlparser2 1.8.x. Started using the `decodeEntities` option, which allows us to pass our filter evasion tests without the need to recursively invoke the filter.

1.5.0: support for `*` wildcards in allowedAttributes. With tests. Thanks to Calvin Montgomery.

1.4.3: invokes itself recursively until the markup stops changing to guard against [this issue](https://github.com/fb55/htmlparser2/issues/105). Bump to htmlparser2 version 3.7.x.

1.4.1, 1.4.2: more tests.

1.4.0: ability to  allow all attributes or tags through by setting `allowedAttributes` and/or `allowedTags` to false. Thanks to Anand Thakker.

1.3.0: `attribs` now available on frames passed to exclusive filter.

1.2.3: fixed another possible XSS attack vector; no definitive exploit was found but it looks possible. [See this issue.](https://github.com/punkave/sanitize-html/pull/20) Thanks to Jim O'Brien.

1.2.2: reject `javascript:` URLs when disguised with an internal comment. This is probably not respected by browsers anyway except when inside an XML data island element, which you almost certainly are not allowing in your `allowedTags`, but we aim to be thorough. Thanks to Jim O'Brien.

1.2.1: fixed crashing bug when presented with bad markup. The bug was in the `exclusiveFilter` mechanism. Unit test added. Thanks to Ilya Kantor for catching it.

1.2.0:

* The `allowedClasses` option now allows you to permit CSS classes in a fine-grained way.

* Text passed to your `exclusiveFilter` function now includes the text of child elements, making it more useful for identifying elements that truly lack any inner text.

1.1.7: use `he` for entity decoding, because it is more actively maintained.

1.1.6: `allowedSchemes` option for those who want to permit `data` URLs and such.

1.1.5: just a packaging thing.

1.1.4: custom exclusion filter.

1.1.3: moved to lodash. 1.1.2 pointed to the wrong version of lodash.

1.1.0: the `transformTags` option was added. Thanks to [kl3ryk](https://github.com/kl3ryk).

1.0.3: fixed several more javascript URL attack vectors after [studying the XSS filter evasion cheat sheet](https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet) to better understand my enemy. Whitespace characters (codes from 0 to 32), which browsers ignore in URLs in certain cases allowing the "javascript" scheme to be snuck in, are now stripped out when checking for naughty URLs. Thanks again to [pinpickle](https://github.com/pinpickle).

1.0.2: fixed a javascript URL attack vector. naughtyHref must entity-decode URLs and also check for mixed-case scheme names. Thanks to [pinpickle](https://github.com/pinpickle).

1.0.1: Doc tweaks.

1.0.0: If the style tag is disallowed, then its content should be dumped, so that it doesn't appear as text. We were already doing this for script tags, however in both cases the content is now preserved if the tag is explicitly allowed.

We're rocking our tests and have been working great in production for months, so: declared 1.0.0 stable.

0.1.3: do not double-escape entities in attributes or text. Turns out the "text" provided by htmlparser2 is already escaped.

0.1.2: packaging error meant it wouldn't install properly.

0.1.1: discard the text of script tags.

0.1.0: initial release.

## About P'unk Avenue and Apostrophe

`sanitize-html` was created at [P'unk Avenue](http://punkave.com) for use in Apostrophe, an open-source content management system built on node.js. If you like `sanitize-html` you should definitely [check out apostrophenow.org](http://apostrophenow.org). Also be sure to visit us on [github](http://github.com/punkave).

## Support

Feel free to open issues on [github](http://github.com/punkave/sanitize-html).

<a href="http://punkave.com/"><img src="https://raw.github.com/punkave/sanitize-html/master/logos/logo-box-builtby.png" /></a>
