var test = require('tape')
var fm = require('first-mate')
var selector = require('../')

test('can',function(t){
  var reg = new fm.GrammarRegistry({maxToken:Infinity})
  var s = selector()
  
  var g = s.selectGrammar(reg)

  t.equals(g.name,'Null Grammar','should have selected the null-grammar')
  t.end()
})
