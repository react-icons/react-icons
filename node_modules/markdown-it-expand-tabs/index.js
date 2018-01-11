var repeat = require('lodash.repeat');

module.exports = function(md, opts) {
  // default to being two spaces wide
  var tabWidth;
  if (!opts || typeof opts.tabWidth === 'undefined') {
    tabWidth = 2;
  } else {
    tabWidth = Math.max(0, opts.tabWidth);
  }

  // patch the current rule, don't replace it completely
  var originalRule = md.renderer.rules.fence;
  md.renderer.rules.fence = function(tokens, idx, options, env, self) {
    tokens[idx].content = expandTabs(tokens[idx].content, tabWidth);
    return originalRule.call(this, tokens, idx, options, env, self);
  };

  // do the tab/space replacement
  function expandTabs(content, tabWidth) {
    var idx = 0;

    // while we're not at the end of the string:
    // - is the character at the current position a tab?
    // - yes, replace with spaces and move the current position forward
    // - no, jump to the character after the next newline
    while (idx > -1 && idx < content.length) {
      while (content[idx] === '\t') {
        content = content.substring(0, idx) + repeat(' ', tabWidth) + content.substring(idx+1);
        idx += tabWidth;
      }
      idx = content.indexOf('\n', idx);

      // if there are no `\n` characters, break
      if (idx === -1) { break; }

      idx += 1;
    }

    return content;
  }

};
