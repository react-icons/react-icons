// markdown-it plugin that ensures all gravatar img src URLs are secure
//
var URL = require('url')

module.exports = function (md, opts) {
  // patch the current rule, don't replace it completely
  var originalRule = md.renderer.rules.image
  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    var url = URL.parse(tokens[idx].attrGet('src'))
    if (url.host && url.host.match(/^(\w+\.)?gravatar\.com$/)) {
      url.protocol = 'https'
      url.host = 'secure.gravatar.com'
      tokens[idx].attrSet('src', URL.format(url))
    }
    return originalRule.call(this, tokens, idx, options, env, self)
  }
}
