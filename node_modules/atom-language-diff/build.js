var fs = require("fs");
var CSON = require("cson");
var map = require("lodash.map");
var compact = require("lodash.compact");
var flatten = require("lodash.flatten");
var uniq = require("lodash.uniq");

// based on the build.js from the highlights-tokens package, thanks

var grammar = CSON.parse(fs.readFileSync("./grammars/diff.cson", "utf8"));
var patterns = grammar.patterns;

if (!Array.isArray(patterns)) {
    process.exit(1);
}

function tokenize(item) {
  return typeof item.name === "string" ? item.name.split(".") : [];
}

var tokens = map(patterns, function(pattern) {
  var nameTokens = tokenize(pattern);
  var captureTokens = typeof pattern.captures === "object" ? map(pattern.captures, tokenize) : [];
  return nameTokens.concat(flatten(captureTokens));
});

tokens = uniq(compact(flatten(tokens)))
  .filter(function(token) {
    return !~token.indexOf("$");
  })
  .sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

fs.writeFileSync("./tokens.json", JSON.stringify(tokens, null, 2));

console.log("wrote tokens.json");
