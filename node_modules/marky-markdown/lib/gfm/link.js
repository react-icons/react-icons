// CommonMark specifies that links have no whitespace between the label and
// destination, e.g.:
//
//     [link text](path/to/the/thing)
//
// However, GitHub allows you to put whitespace between the `]` and `(`
// characters, like so:
//
//     [link text]    (path/to/the/thing)
//
// This is against CommonMark because it's ambiguous. Consider a link reference
// followed by a parenthetical statement:
//
//     [link text] (parenthetical statement)
//
//     [link text]: path/to/the/thing
//
// CommonMark renders: <a href="path/to/the/thing">link text</a>
// GitHub renders:     <a href="parenthetical%20statement">link text</a>
//
// To account for the difference, we need to override markdown-it's link rule.
// This file is a copy of the original markdown-it source, plus the necessary
// modifications, wrapped as a markdown-it plugin.

// Process [link](<to> "stuff")
'use strict'

module.exports = function (md) {
  md.inline.ruler.at('link', link)
}

function link (state, silent) {
  var attrs
  var code
  var label
  var labelEnd
  var labelStart
  var pos
  var res
  var ref
  var title
  var token
  var href = ''
  var oldPos = state.pos
  var max = state.posMax
  var start = state.pos
  var parseReference = true
  var isSpace = state.md.utils.isSpace
  var normalizeReference = state.md.utils.normalizeReference

  if (state.src.charCodeAt(state.pos) !== 0x5B/* [ */) { return false }

  labelStart = state.pos + 1
  labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true)

  // parser failed to find ']', so it's not a valid link
  if (labelEnd < 0) { return false }

  pos = labelEnd + 1

  // BEGIN CUSTOM MODIFICATION
  // look ahead to see if the next non-whitespace character is '(', and if
  // it is, skip the whitespace
  for (; pos < max; pos++) {
    code = state.src.charCodeAt(pos)
    if (!isSpace(code) && code !== 0x0A) { break }
  }
  if (pos < max && state.src.charCodeAt(pos) !== 0x28) { pos = labelEnd + 1 }
  // END CUSTOM MODIFICATION

  if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
    //
    // Inline link
    //

    // might have found a valid shortcut link, disable reference parsing
    parseReference = false

    // [link](  <href>  "title"  )
    //        ^^ skipping these spaces
    pos++
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos)
      if (!isSpace(code) && code !== 0x0A) { break }
    }
    if (pos >= max) { return false }

    // [link](  <href>  "title"  )
    //          ^^^^^^ parsing link destination
    start = pos
    res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax)
    if (res.ok) {
      href = state.md.normalizeLink(res.str)
      if (state.md.validateLink(href)) {
        pos = res.pos
      } else {
        href = ''
      }
    }

    // [link](  <href>  "title"  )
    //                ^^ skipping these spaces
    start = pos
    for (; pos < max; pos++) {
      code = state.src.charCodeAt(pos)
      if (!isSpace(code) && code !== 0x0A) { break }
    }

    // [link](  <href>  "title"  )
    //                  ^^^^^^^ parsing link title
    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax)
    if (pos < max && start !== pos && res.ok) {
      title = res.str
      pos = res.pos

      // [link](  <href>  "title"  )
      //                         ^^ skipping these spaces
      for (; pos < max; pos++) {
        code = state.src.charCodeAt(pos)
        if (!isSpace(code) && code !== 0x0A) { break }
      }
    } else {
      title = ''
    }

    if (pos >= max || state.src.charCodeAt(pos) !== 0x29/* ) */) {
      // parsing a valid shortcut link failed, fallback to reference
      parseReference = true
    }
    pos++
  }

  if (parseReference) {
    //
    // Link reference
    //
    if (typeof state.env.references === 'undefined') { return false }

    if (pos < max && state.src.charCodeAt(pos) === 0x5B/* [ */) {
      start = pos + 1
      pos = state.md.helpers.parseLinkLabel(state, pos)
      if (pos >= 0) {
        label = state.src.slice(start, pos++)
      } else {
        pos = labelEnd + 1
      }
    } else {
      pos = labelEnd + 1
    }

    // covers label === '' and label === undefined
    // (collapsed reference link and shortcut reference link respectively)
    if (!label) { label = state.src.slice(labelStart, labelEnd) }

    ref = state.env.references[normalizeReference(label)]
    if (!ref) {
      state.pos = oldPos
      return false
    }
    href = ref.href
    title = ref.title
  }

  //
  // We found the end of the link, and know for a fact it's a valid link;
  // so all that's left to do is to call tokenizer.
  //
  if (!silent) {
    state.pos = labelStart
    state.posMax = labelEnd

    token = state.push('link_open', 'a', 1)
    token.attrs = attrs = [ [ 'href', href ] ]
    if (title) {
      attrs.push([ 'title', title ])
    }

    state.md.inline.tokenize(state)

    token = state.push('link_close', 'a', -1)
  }

  state.pos = pos
  state.posMax = max
  return true
}
