// Override the markdown-it helper rule to allow spaces in the src attributes of images and the href attributes of
// anchor elements:
//  e.g., ![Gitter](https://badges.gitter.im/Join Chat.svg)
//
// This is a modified version of the stock markdown-it helper for parsing link destinations
'use strict'

function parseLinkDestination (md, str, pos, max) {
  var code
  var level
  var lines = 0
  var start = pos
  var result = {
    ok: false,
    pos: 0,
    lines: 0,
    str: ''
  }
  var isSpace = md.utils.isSpace
  var unescapeAll = md.utils.unescapeAll

  if (str.charCodeAt(pos) === 0x3C /* < */) {
    pos++
    while (pos < max) {
      code = str.charCodeAt(pos)
      if (code === 0x0A /* \n */ || isSpace(code)) { return result }
      if (code === 0x3E /* > */) {
        result.pos = pos + 1
        result.str = unescapeAll(str.slice(start + 1, pos))
        result.ok = true
        return result
      }
      if (code === 0x5C /* \ */ && pos + 1 < max) {
        pos += 2
        continue
      }

      pos++
    }

    // no closing '>'
    return result
  }

  // this should be ... } else { ... branch

  level = 0
  while (pos < max) {
    code = str.charCodeAt(pos)

    if (code === 0x20) { // space
      pos++ // 0x22 => double quote, 0x27 => single quote, 0x28 => '(', 0x29 => ')'
      while (pos < max && code !== 0x22 && code !== 0x27 && code !== 0x28 && code !== 0x29) {
        code = str.charCodeAt(pos++)
      }
      pos--
      if (pos === max) { // end of the line
        break
      }
      if (code === 0x22 || code === 0x27 || code === 0x28) { // single/double quotes or opening paren for title attributes
        pos--
        break
      }
    }

    // ascii control characters
    if (code < 0x20 || code === 0x7F) { break }

    if (code === 0x5C /* \ */ && pos + 1 < max) {
      pos += 2
      continue
    }

    if (code === 0x28 /* ( */) {
      level++
      if (level > 1) { break }
    }

    if (code === 0x29 /* ) */) {
      level--
      if (level < 0) { break }
    }

    pos++
  }

  if (start === pos) { return result }

  result.str = unescapeAll(str.slice(start, pos))
  result.lines = lines
  result.pos = pos
  result.ok = true
  return result
}

module.exports = function (md) {
  md.helpers.parseLinkDestination = parseLinkDestination.bind(this, md)
}
