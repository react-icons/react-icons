module.exports = function (md, options) {
  // Unfortunately, there's no public API for getting access to the existing
  // installed parsing rules; rather than import the 'reference' rule directly
  // from markdown-it just so we can re-install it into the parser with the
  // 'alt' chain set up correctly, here we're just using internal utility
  // methods to modify it in place at runtime.
  //
  // The net result is that we allow what are known in the CommonMark spec as
  // "link reference definitions" to interrupt paragraphs, i.e., we relax the
  // requirement that there be a blank line between a paragraph and a reference
  // definition.
  //
  // That means that this works:
  //
  //   Some paragraph text here with a [linkref]
  //   [linkref]: /actual/link/destination/here
  //
  // ...whereas spec compliance requires a blank line between the two.

  var ruler = md.block.ruler
  var idx = ruler.__find__('reference')
  ruler.__rules__[idx].alt.push('paragraph')
  ruler.__compile__()
}
