module.exports = function (md, opts) {
  var htmlHeader = function (state, startLine, endLine, silent) {
    var pos = state.bMarks[startLine] + state.tShift[startLine]
    var max = state.eMarks[startLine]

    if (!state.md.options.html) { return false }

    // Check start
    if (state.src.charCodeAt(pos) !== 0x3C /* < */ || pos + 2 >= max) {
      return false
    }

    // Quick fail on second char
    var ch = state.src[pos + 1]
    if (ch !== 'h') {
      return false
    }

    var match = state.src.slice(pos).match(/<h[1-9]>/)
    if (!match) { return false }
    var level = parseInt(match[0][2])

    var end = state.src.slice(pos).match(new RegExp('</h' + String(level) + '>'))
    if (!end) { return false }

    state.line = startLine + 1

    var token = state.push('heading_open', 'h' + String(level), 1)
    token.markup = '########'.slice(0, level)
    token.map = [ startLine, state.line ]

    token = state.push('inline', '', 0)
    token.content = state.src.slice(pos + match.index + 4, pos + end.index).trim()
    token.map = [ startLine, state.line ]
    token.children = []

    token = state.push('heading_close', 'h' + String(level), -1)
    token.markup = '########'.slice(0, level)

    return true
  }

  md.block.ruler.before('html_block', 'html_header', htmlHeader, ['paragraph', 'reference', 'blockquote'])
}
