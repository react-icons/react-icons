/* globals before, describe, it */

var assert = require('assert');
var innertext = require('..');

describe('innertext', function() {
  it('leaves normal text alone', function() {
    var notHtml = 'Normal string; nothing to see here';
    var text = innertext(notHtml);
    assert.equal(text, notHtml);
  });

  it('strips HTML tags from a simple element', function() {
    var html = '<h1>Sample heading</h1>';
    var text = innertext(html);
    assert.equal(text, 'Sample heading');
  });

  it('strips HTML tags from an element with nested elements', function() {
    var html = '<p>Paragraph <em>with</em> <b>nested</b> <u><em>things</em> going on</u></p>';
    var text = innertext(html);
    assert.equal(text, 'Paragraph with nested things going on');
  });

  it('strips leading/trailing whitespace', function() {
    var html = "   <h1>A heading</h1>  \t  ";
    var text = innertext(html);
    assert.equal(text, 'A heading');
  });

  it('collapses newlines', function() {
    var html = "<div>\n  <div>An example with newlines</div>\n   <ul>\n      <li>item</li>\n      <li>item</li>\n   </ul>\n</div>";
    var text = innertext(html);
    assert.equal(text, 'An example with newlines item item');
  });

  it('works when the first (non-whitespace) character is normal text rather than HTML markup', function() {
    var html = 'When it does not start with <em>markup</em>';
    var text = innertext(html);
    assert.equal(text, 'When it does not start with markup');
  });

  it('decodes HTMl entities', function() {
    var html = '<div>An encoded &lt;div&gt; tag &amp; an ellipsis: &hellip;</div>';
    var text = innertext(html);
    assert.equal(text, 'An encoded <div> tag & an ellipsis: …');
  });

  it('removes HTML comments', function() {
    // note that browser innerHTML leaves comment nodes in place; innerText strips them
    var html = '<h1>Oooh a comment: <!-- with an embedded comment --></h1>';
    var text = innertext(html);
    assert.equal(text, 'Oooh a comment:');
  });

  it('strips custom tags', function() {
    var html = '<my-web-component>Hello world</my-web-component>';
    var text = innertext(html);
    assert.equal(text, 'Hello world');
  });

});
