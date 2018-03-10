var plugin = module.exports = function (md, options) {
  // monkey patch the 'fence' parsing rule to restore markdown-it's pre-5.1 behavior
  // (see https://github.com/markdown-it/markdown-it/issues/190)
  var stockFenceRule = md.renderer.rules.fence
  md.renderer.rules.fence = function (tokens, idx, options, env, slf) {
    // call the original rule first rather than inside the 'return' statement
    // because we need the 'class' attribute processing it does
    var output = stockFenceRule(tokens, idx, options, env, slf).trim()

    // markdown-it 6.1 and later stopped overwriting the class attribute in the
    // renderer rule, so we construct it ourselves here
    var token = tokens[idx]
    var index = token.attrIndex('class')
    var attributes = token.attrs ? token.attrs.slice() : []
    var langName = token.info.split(/\s+/g)[0]
    var classes = options.langPrefix + langName

    if (index < 0) {
      attributes.push(['class', classes])
    } else {
      attributes[index] += ' ' + classes
    }

    var fakeToken = {
      attrs: attributes
    }

    if (!langName) {
      return output
    } else {
      return '<' + plugin.tag + slf.renderAttrs(fakeToken) + '>' + output + '</' + plugin.tag + '>\n'
    }
  }
}

plugin.tag = 'div'
