// markdown-it plugin to wrap youtube iframes in a <div> for styling purposes
//
var URL = require('url')

var WRAPPER_START = "<div class='youtube-video'>"
var WRAPPER_END = '</div>'

// determine whether the given HTML string contains an iframe pointing to a youtube.com URL
function isYoutubeIframe (content) {
  // look for the src attribute's value
  var attr = content.match(/<\s*iframe[^>]*\bsrc\s*=\s*/)
  if (attr) {
    // mark the location and figure out what kind of quotation mark is delimiting the value
    var position = attr.index + attr[0].length
    var quote = content.charAt(position)
    var substring = content.slice(position + 1)

    // now that we've found the first delimiting quotation mark, match
    // everything up to the next instance of the same quotation mark
    var src = substring.match(new RegExp('^[^' + quote + ']*'))
    if (src) {
      var value = src[0]
      // for protocol-relative src, prepend a protocol for URL parsing purposes
      if (value.indexOf('//') === 0) {
        value = 'https:' + value
      }

      var url = URL.parse(value)
      return (url.host && url.host.match(/^(\w+\.)?youtube\.com$/))
    }
  }
  return false
}

module.exports = function (md, opts) {
  // Wrap iframes that appear in HTML blocks
  //
  // In html_block tokens, the entire contents of an HTML block appear as the
  // `.content` property of a single token object. For a standalone `<iframe>`,
  // wrapping it with our `<div>` is pretty straightforward, but when it
  // appears deeper inside the snippet, we have to do a little more parsing
  // work to figure out where to insert our wrapping elements.
  //
  var originalBlockRule = md.renderer.rules.html_block
  md.renderer.rules.html_block = function (tokens, idx, options, env, self) {
    var content = tokens[idx].content

    if (isYoutubeIframe(content)) {
      // start by assuming the entire block is solely made up of the iframe
      var start = 0
      var end = content.length

      // check to see where the iframe actually starts
      var isDeep = content.match(/>\s*<\s*iframe/)
      if (isDeep) {
        start = content.substring(isDeep.index).indexOf('<') + isDeep.index
      }

      // find the closing `</iframe>` tag, so we can find the end of it
      var closingMatch = content.substring(start).match(/>[^>]*<\s*\/\s*iframe\s*>/)
      if (closingMatch) {
        var endOffset = content.substring(start + closingMatch.index + 1).indexOf('>') + 1
        end = start + closingMatch.index + endOffset + 1
      }

      // slice up the content according to the positions we've computed
      var prefix = content.substring(0, start)
      var iframe = content.substring(start, end)
      var postfix = content.substring(end)

      // inject the wrapper element
      tokens[idx].content = prefix + WRAPPER_START + iframe + WRAPPER_END + postfix
    }

    return originalBlockRule.call(this, tokens, idx, options, env, self)
  }

  // Wrap iframes that appear inside inline HTML strings
  //
  // In runs of html_inline tokens, the opening `<iframe>` tag will appear in a
  // separate token from the closing `</iframe>` tag, so what we have to do if we
  // find a match is walk through the list to find out where to put the closing
  // `</div>` part of our wrapper
  //
  var originalInlineRule = md.renderer.rules.html_inline
  md.renderer.rules.html_inline = function (tokens, idx, options, env, self) {
    if (isYoutubeIframe(tokens[idx].content)) {
      // prepend the opening part of the wrapper
      tokens[idx].content = WRAPPER_START + tokens[idx].content

      // find the closing tag and append the closing part of the wrapper
      for (var position = idx; position < tokens.length && tokens[position].type === 'html_inline'; position++) {
        if (tokens[position].content === '</iframe>') {
          tokens[position].content += WRAPPER_END
        }
      }
    }

    return originalInlineRule.call(this, tokens, idx, options, env, self)
  }
}
