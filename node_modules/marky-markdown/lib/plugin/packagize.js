// markdown-it plugin to add some helper classes to existing elements that look
// like duplicates of package names and descriptions
//
var similarity = require('similarity')
var tokenUtil = require('../token-util')

module.exports = function (md, opts) {
  if (!opts) return
  if (!opts.package) return
  if (!opts.package.name) return

  var packageName = opts.package.name
  var packageDescription = opts.package.description + '' // invalid description in some cases can cause a crash

  //
  // process the first <h1> element
  //
  var originalHeadingRule = md.renderer.rules.heading_open
  md.renderer.rules.heading_open = function (tokens, idx, options, env, self) {
    if (tokens[idx].tag === 'h1' && !env.packagizeHeadingDone) {
      // extract the text from the heading's 'inline' token
      var text = tokenUtil.getText(tokens[idx + 1])

      // check to see if the heading text matches the package name
      if (
        similarity(packageName, text) > 0.6 ||
        similarity(packageName.replace(/^@[^/]+\//, ''), text) > 0.6 || // filter out scope name
        ~text.toLowerCase().indexOf(packageName.toLowerCase())
      ) {
        tokens[idx].attrJoin('class', 'package-name-redundant')
      }

      // check to see if the heading text matches the package description
      if (packageDescription && (
        similarity(packageDescription, text) > 0.6 ||
        ~text.toLowerCase().indexOf(packageDescription.toLowerCase())
        )) {
        tokens[idx].attrJoin('class', 'package-description-redundant')
      }

      // only inspect the first h1; skip the rest
      env.packagizeHeadingDone = true
    }
    return originalHeadingRule.call(this, tokens, idx, options, env, self)
  }

  //
  // process the first paragraph that contains text
  //
  var originalParagraphRule = md.renderer.rules.paragraph_open
  md.renderer.rules.paragraph_open = function (tokens, idx, options, env, self) {
    if (!env.packagizeParagraphDone) {
      // extract the text from the paragraph's 'inline' token
      var text = tokenUtil.getText(tokens[idx + 1])

      // check to see if the paragraph text matches the description
      if (similarity(packageDescription, text) > 0.6) {
        tokens[idx].attrJoin('class', 'package-description-redundant')
      }

      // inspect the first paragraph that contains text; skip the rest
      if (text) {
        env.packagizeParagraphDone = true
      }
    }
    if (originalParagraphRule) {
      return originalParagraphRule.call(this, tokens, idx, options, env, self)
    } else {
      return md.renderer.renderToken(tokens, idx, options)
    }
  }
}
