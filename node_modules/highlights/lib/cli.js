(function() {
  var Highlights, fs, path, yargs;

  path = require('path');

  fs = require('fs-plus');

  yargs = require('yargs');

  Highlights = require('./highlights');

  module.exports = function() {
    var argv, fileContents, filePath, html, outputPath;
    argv = yargs.describe('i', 'Path to file or folder of grammars to include').alias('i', 'include').string('i').describe('o', 'File path to write the HTML output to').alias('o', 'output').string('o').describe('s', 'Scope name of the grammar to use').alias('s', 'scope').string('s').describe('f', 'File path to use for grammar detection when reading from stdin').alias('f', 'file-path').string('f').help('h').alias('h', 'help').usage("Usage: highlights [options] [file]\n\nOutput the syntax highlighted HTML for a file.\n\nIf no input file is specified then the text to highlight is read from standard in.\n\nIf no output file is specified then the HTML is written to standard out.").version().alias('v', 'version').argv;
    filePath = argv._[0];
    outputPath = argv.output;
    if (outputPath) {
      outputPath = path.resolve(outputPath);
    }
    if (filePath) {
      filePath = path.resolve(filePath);
      if (!fs.isFileSync(filePath)) {
        console.error("Specified path is not a file: " + filePath);
        process.exit(1);
        return;
      }
      html = new Highlights().highlightSync({
        filePath: filePath,
        scopeName: argv.scope
      });
      if (outputPath) {
        return fs.writeFileSync(outputPath, html);
      } else {
        return console.log(html);
      }
    } else {
      filePath = argv.f;
      process.stdin.resume();
      process.stdin.setEncoding('utf8');
      fileContents = '';
      process.stdin.on('data', function(chunk) {
        return fileContents += chunk.toString();
      });
      return process.stdin.on('end', function() {
        html = new Highlights().highlightSync({
          filePath: filePath,
          fileContents: fileContents,
          scopeName: argv.scope
        });
        if (outputPath) {
          return fs.writeFileSync(outputPath, html);
        } else {
          return console.log(html);
        }
      });
    }
  };

}).call(this);
