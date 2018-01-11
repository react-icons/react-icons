var assign = require('lodash.assign')

var Token // Token constructor from markdown-it

var tokenUtil = module.exports = {}

tokenUtil.set = function (TokenConstructor) {
  Token = TokenConstructor
}

// Look for tokens with type === 'emoji', which are :shortcode: style emoji
// characters that have been replaced by the markdown-it-emoji plugin. Return the
// original tokens, unless they were converted gemoji strings; then return a copy so
// we haven't clobbered the original when it comes time to render HTML
tokenUtil.unemoji = function (token) {
  if (token.type === 'emoji') {
    return assign(new Token(), token, {content: token.markup})
  }
  return token
}

// return true if the token is type 'text' or contains any such tokens (except
// for images; they can contain 'text' children because that's how `alt`
// attributes get represented; those don't count toward the text representation)
tokenUtil.isText = function isText (token) {
  var containsTextTokens = false
  if (token.children && token.children.length) {
    containsTextTokens = token.type !== 'image' && token.children.some(isText)
  }
  return containsTextTokens || token.type === 'text'
}

// extract the text from the given 'inline' token
tokenUtil.getText = function getText (token) {
  var text = token.type === 'text' ? token.content : ''
  if (token.children && token.children.length) {
    text += token.children.reduce(function (previous, current) {
      return previous + (token.type !== 'image' ? getText(current) : '')
    }, '')
  }
  return text
}
