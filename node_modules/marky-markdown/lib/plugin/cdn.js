// This plugin rewrites relative image URLs to use cdn.npm.im instead, when the
// calling code provides package.json data (at least name and version)
//
var URL = require('url')
var path = require('path')

// CDN-ize image URLs

module.exports = function (md, opts) {
  if (!opts) return
  if (!opts.package) return
  if (!opts.package.name) return
  if (!opts.package.version) return

  var originalRule = md.renderer.rules.image
  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    var url = URL.parse(tokens[idx].attrGet('src'))

    // skip fully-qualified and protocol-relative URLs
    if (!url.host && !url.path.match(/^\/\//)) {
      url.protocol = 'https'
      url.host = 'cdn.npm.im'
      url.pathname = '/' + opts.package.name + '@' + opts.package.version + path.join('/', url.path)
      tokens[idx].attrSet('src', URL.format(url))
    }

    return originalRule.call(this, tokens, idx, options, env, self)
  }
}
