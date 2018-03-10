// This plugin allows for code fences written in certain languages to be rendered
// as though they'd been written in a different language, e.g.,
//
//     ```bash
//     $ marky-markdown test.md
//     ```
//
// can have the exact same output as
//
//     ```sh
//     $ marky-markdown test.md
//     ```
//
// (doing the normal thing and setting up a syntax highlighter mapping in our
// render module would almost work, except the wrapping <div> still has the
// "bash" class applied)
//

var plugin = module.exports = function (md, opts) {
  var previousFenceRule = md.renderer.rules.fence
  md.renderer.rules.fence = function (tokens, idx, options, env, slf) {
    // code fence language marker is in token.info; do we have an alias?
    if (languageAliases.hasOwnProperty(tokens[idx].info)) {
      tokens[idx].info = languageAliases[tokens[idx].info]
    }
    return previousFenceRule.call(this, tokens, idx, options, env, slf)
  }
}

var languageAliases = plugin.languageAliases = {
  bash: 'sh',
  typescript: 'ts'
}
