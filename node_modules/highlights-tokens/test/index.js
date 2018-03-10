var test = require("tap").test
var tokens = require("..")

test("highlights-tokens", function (t) {

  t.ok(Array.isArray(tokens))

  tokens.forEach(function(token){
    t.ok(typeof token === "string")
    t.ok(token.length > 0)
  })

  t.ok(tokens.length > 50)
  t.equal(tokens[0], "actionpack")

  t.end()
})
