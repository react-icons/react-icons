var stockHighlightsTokens = require('highlights-tokens')
var diffTokens = require('atom-language-diff')

// combine stock highlights tokens list with any additional ones we've included

module.exports = [].concat(stockHighlightsTokens, diffTokens)
