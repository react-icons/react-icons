module.exports = function (md, options) {
  // Unfortunately, there's no public API for getting access to the existing
  // installed parsing rules; rather than import the 'heading' rule directly
  // from markdown-it just so we can wrap it with our own processing, we have to
  // use internal utility methods to pick it up first, then do the replacement
  // via normal means.
  //
  // This plugin allows us to more closely mimic GitHub's heading parsing. Per
  // CommonMark, ATX headings are allowed to have one to three spaces before the
  // hash characters. GitHub doesn't allow any leading whitespace whatsoever.
  //
  // For example (the `·` characters represent spaces):
  //
  // ·### Renders as H3 in CommonMark
  // ··## Renders as H2 in CommonMark
  // ···# Renders as H1 in CommonMark
  //
  // ... whereas on GitHub, those become standard paragraphs.

  var ruler = md.block.ruler
  var originalEntry = ruler.__rules__[ruler.__find__('heading')]
  var originalRule = originalEntry.fn

  ruler.at('heading', noIndentedHeadings, {alt: originalEntry.alt})

  function noIndentedHeadings (state, startLine, endLine, silent) {
    // conveniently, state.tShift holds a count of the number of leading spaces
    // on each line, so all we need to do is return false if it's non-zero
    if (state.tShift[startLine] > 0) {
      return false
    } else {
      return originalRule.apply(this, arguments)
    }
  }
}
