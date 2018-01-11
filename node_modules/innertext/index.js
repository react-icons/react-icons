var Entities = require('html-entities').AllHtmlEntities;

var entities = new Entities();

// Quick and dirty way of getting the text representation of a string of HTML,
// basically close to what a DOM node's innerText property would be

function innertext (html) {
  // Drop everything inside <...> (i.e., tags/elements), and keep the text.
  // Unlike browser innerText, this removes newlines; it also doesn't handle
  // un-encoded `<` or `>` characters very well, so don't feed it malformed HTML
  return entities.decode(html.split(/<[^>]+>/)
    .map(function (chunk) { return chunk.trim() })
    .filter(function (trimmedChunk) { return trimmedChunk.length > 0 })
    .join(' ')
  );
}

module.exports = innertext;
