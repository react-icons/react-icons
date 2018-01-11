// github-style linkification for linkify-it
//
// Pass in a markdown-it parser instance and this will return a version fixed
// up for the kind of linkification we're after.
//
// As far as I can determine, the basic algorithm is to linkify anything
// starting with 'www.' and ending with a) a whitespace character, or b) a dot
// followed by a whitespace character (in other words, include internal dots,
// but exclude a trailing dot). There are plenty of cases where this results in
// invalid links, but that's how they do it, so that's how we'll do it.
//

function isInBrackets (text) {
  return text.charAt(0) === '[' && text.charAt(text.length - 1) === ']'
}

function isInParens (text) {
  return text.charAt(0) === '(' && text.charAt(text.length - 1) === ')'
}

module.exports = function (parser) {
  if (parser) {
    var linkify = parser.linkify

    linkify.set({fuzzyLink: false}) // turn off auto-linking normal hostnames
    linkify.add('//', null) // turn off protocol-relative links

    // linkify everything hostnamey starting with 'www.', optionally in [] or ()
    var scheme = {
      validate: function (text, pos, self) {
        if (!self.re.githubLinkify) {
          self.re.githubLinkify = new RegExp('^' + self.re.src_host_port_strict + self.re.src_path, 'i')
        }

        // chop off any trailing ']' or ')', if necessary
        var candidate = text.slice(pos)
        if (isInBrackets(text) || isInParens(text)) {
          candidate = candidate.slice(0, candidate.length - 1)
        }

        if (self.re.githubLinkify.test(candidate)) {
          return candidate.match(self.re.githubLinkify)[0].length
        } else if (candidate.charAt(0) === ' ') {
          // if we have a zero-length match, i.e., if the original string was
          // literally 'www.' all by itself, we return -1 because linkify-it does
          // a boolean test on the result of the validator function (so we need a
          // non-zero result here to make it through that test) and adds the
          // returned value to an index it's using to point to the end of the
          // matched substring. In this case, that means we'll move backwards one
          // character and only link 'www' rather than the full 'www.' that was
          // originally matched
          return -1
        }
        return 0
      },
      normalize: function (match) {
        // since we have 3 different "schemes" in place, our matched URLs might
        // have a leading bracket or parenthesis; trim it off if necessary
        if (match.schema.charAt(0) === 'w') {
          match.url = 'http://' + match.url
        } else {
          match.url = 'http://' + match.url.slice(1)
        }
        match.schema = ''
      }
    }

    parser.linkify.add('www.', scheme)
    parser.linkify.add('[www.', scheme)
    parser.linkify.add('(www.', scheme)

    // linkify-it's default behavior is to create matches against the
    // registered schema prefixes when the character immediately preceding a
    // potential match is non-alphanumeric; however, we also need to skip
    // linkification when said character is punctuation. So here we rebuild the
    // internal regular expressions the LinkifyIt instance will use.
    var regexes = linkify.re
    regexes.schema_test = RegExp(regexes.schema_test.source.replace(regexes.src_ZPCc, regexes.src_ZCc), 'i')
    regexes.schema_search = RegExp(regexes.schema_search.source.replace(regexes.src_ZPCc, regexes.src_ZCc), 'ig')
    regexes.pretest = RegExp('(' + regexes.schema_test.source + ')|(' + regexes.host_fuzzy_test.source + ')|@', 'i')
  }

  return parser
}
