/* globals before, describe, it */

var fs = require('fs');
var assert = require('assert');
var md = require('markdown-it');
var expandTab = require('..');

describe('markdown-it-expand-tabs', function() {
  var fixtures;

  before(function() {
    fixtures = {
      tab: fs.readFileSync(__dirname + '/fixtures/tab.md').toString(),
      space2: fs.readFileSync(__dirname + '/fixtures/space2.md').toString(),
      space4: fs.readFileSync(__dirname + '/fixtures/space4.md').toString(),
      noCR: fs.readFileSync(__dirname + '/fixtures/no-cr.md').toString()
    };
  });

  it('renders tab-indented code differently than default markdown-it', function() {
    var parserDefault = md();
    var parser = md().use(expandTab);
    assert.notEqual(parserDefault.render(fixtures.tab), parser.render(fixtures.tab));
  });

  it('renders with two-space tabs by default', function() {
    var parser = md().use(expandTab);
    var html = parser.render(fixtures.tab);
    assert(html.length);
    assert.equal(html, parser.render(fixtures.space2));
  });

  it('renders with two-space tabs when told', function() {
    var parser = md().use(expandTab, {tabWidth: 2});
    var html = parser.render(fixtures.tab);
    assert(html.length);
    assert.equal(html, parser.render(fixtures.space2));
  });

  it('renders with four-space tabs when told', function() {
    var parser = md().use(expandTab, {tabWidth: 4});
    var html = parser.render(fixtures.tab);
    assert(html.length);
    assert.equal(html, parser.render(fixtures.space4));
  });

  it('preserves internal tabs', function() {
    var parser = md().use(expandTab);
    var html = parser.render(fixtures.tab);
    assert(html.indexOf('line	with	internal	tabs') !== -1);
  });

  it('preserves trailing tabs', function() {
    var parser = md().use(expandTab);
    var html = parser.render(fixtures.tab);
    assert(html.indexOf('lineWithTrailingTabs();			') !== -1);
  });

  it('works on documents lacking any downstream \n characters', function() {
    // https://github.com/revin/markdown-it-expand-tabs/issues/5
    var parser = md().use(expandTab);
    var html = parser.render(fixtures.noCR);
    // the bug with one-line documents resulted in an infinite loop, so really
    // getting *anything* here means success, so let's just check for a result
    assert(!!html.length);
  });
});
