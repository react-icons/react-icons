# First Mate
[![Linux Build Status](https://travis-ci.org/atom/first-mate.svg?branch=master)](https://travis-ci.org/atom/first-mate)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/p5im21uq22cwgb6d/branch/master?svg=true
)](https://ci.appveyor.com/project/Atom/first-mate)
[![Dependency Status](https://david-dm.org/atom/first-mate/status.svg)](https://david-dm.org/atom/first-mate)

TextMate helpers

## Installing

```sh
npm install first-mate
```

## Using

### ScopeSelector

```coffeescript
{ScopeSelector} = require 'first-mate'
selector = new ScopeSelector('a | b')
selector.matches(['c']) # false
selector.matches(['a']) # true
```

### GrammarRegistry

```coffeescript
{GrammarRegistry} = require 'first-mate'
registry = new GrammarRegistry()
grammar = registry.loadGrammarSync('./spec/fixtures/javascript.json')
{line, tags} = grammar.tokenizeLine('var offset = 3;')
# convert compact tags representation into convenient, space-inefficient tokens
tokens = registry.decodeTokens(line, tags)
for {value, scopes} in tokens
  console.log("Token text: '#{value}' with scopes: #{scopes}")
```

#### loadGrammar(grammarPath, callback)

Asynchronously load a grammar and add it to the registry.

`grammarPath` - A string path to the grammar file.

`callback` - A function to call after the grammar is read and added to the
registry.  The callback receives `(error, grammar)` arguments.

#### loadGrammarSync(grammarPath)

Synchronously load a grammar and add it to the registry.

`grammarPath` - A string path to the grammar file.

Returns a `Grammar` instance.

#### scopeForId(id)

Translate an integer representing an open scope tag from a `tags` array to a
scope name.

`id` - A negative, odd integer.

Returns a scope `String`.

#### decodeTokens(line, tags)

Convert a line and a corresponding tags array returned from
`Grammar::tokenizeLine` into an array of token objects.

`line` - A `String` representing a line of text.

`tags` - An `Array` of integers returned from `Grammar::tokenizeLine`.

Returns an `Array` of token objects, each with a `value` field containing a
string of the token's text and a `scopes` field pointing to an array of every
scope name containing the token.

### Grammar

#### tokenizeLine(line, [ruleStack], [firstLine])

Generate the tokenize for the given line of text.

`line` - The string text of the line.

`ruleStack` - An array of Rule objects that was returned from a previous call
to this method.

`firstLine` - `true` to indicate that the very first line is being tokenized.

Returns an object with a `tags` key pointing to an array of integers encoding
the scope structure of the line, a `line` key returning the line provided for
convenience, and a `ruleStack` key pointing to an array of rules to pass to this
method on future calls for lines proceeding the line that was just tokenized.

The `tags` array encodes the structure of the line as integers for efficient
storage. This can be converted to a more convenient representation if storage
is not an issue by passing the `line` string and `tags` array to `GrammarRegistry::decodeTokens`.

Otherwise, the integers can be interpreted as follows:

* Positive integers represent tokens, with the number indicating the length of
the token. All positive integers in the array should total to the length of the
line passed to this method.

* Negative integers represent scope start/stop tags. Odd integers are scope
starts, and even integers are scope stops. An odd scope tag can be converted to
a string via `GrammarRegistry::scopeForId`. If you want to convert an even scope
tag, representing a scope end, add 1 to it to determine the corresponding scope
start tag before calling `::scopeForId`.

#### tokenizeLines(text)

`text` - The string text possibly containing newlines.

Returns an object containing a `lines` key, pointing to an array of tokenized
lines and a `tags` key, pointing to an array of tags arrays described above.

## Developing

  * Clone the repository
  * Run `npm install`
  * Run `npm test` to run the specs
  * Run `npm run benchmark` to benchmark fully tokenizing jQuery 2.0.3 and
    the CSS for Twitter Bootstrap 3.1.1
