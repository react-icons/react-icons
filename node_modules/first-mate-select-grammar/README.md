# first-mate-select-grammar
provides `selectGrammar` searching functionality for dependants that used the 3.x api feature removed from highlights

```js
var pickGrammar = require('first-mate-select-grammar')()
var GrammarRegistry = require('first-mate').GrammarRegistry

var registry = new GrammarRegistry({maxTokens:Infinity})
// you would probably.. registry.loadGrammarSync('path to grammar.cson')

var grammar = pickGrammar.selectGrammar(GrammarRegistry,'test.js',' var a = 1\n var b =2\n')
// yay! grammar is always defined!!

```


## API

- module.exports() 
  - returns new instance of grammarSelector

- grammarSelector.selectGrammar(firstMate.GrammarRegistry, [fileName,[fileContents]])
  - returns an instance of firstMate.Grammar

### override API

this is provided because its useful to implement a grammar cache.

- grammarSelector.setGrammarOverrideForPath(path)
  - sets an override
  - returns undefined

- grammarSelector.grammarOverrideForPath(path)
  - returns a set grammar override

- grammarSelector.clearGrammarOverrideForPath(path)
  - deletes an override
  - returns undefined

- grammarSelector.clearGrammarOverrides(path)
 - deletes all overrides



