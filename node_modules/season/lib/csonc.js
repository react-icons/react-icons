(function() {
  var CSON, fs, path, yargs;

  fs = require('fs');

  path = require('path');

  yargs = require('yargs');

  CSON = require('cson-parser');

  module.exports = function(argv) {
    var data, error, inputFile, options, parseData, version, _ref;
    if (argv == null) {
      argv = [];
    }
    options = yargs(argv);
    options.usage("Usage: csonc [options] cson_file --output json_file\n       csonc [options] < cson_file [> json_file]\n\nCompiles CSON to JSON.\n\nIf no input file is specified then the CSON is read from standard in.\n\nIf no output file is specified then the JSON is written to standard out.");
    options.alias('h', 'help').describe('help', 'Print this help message');
    options.alias('r', 'root').boolean('root').describe('root', 'Require that the input file contain an object at the root')["default"]('root', false);
    options.alias('o', 'output').string('output').describe('output', 'File path to write the JSON output to');
    options.alias('v', 'version').describe('version', 'Print the version');
    argv = options.argv;
    inputFile = argv._[0];
    if (inputFile) {
      inputFile = path.resolve(inputFile);
    }
    if (argv.version) {
      version = require('../package.json').version;
      console.log(version);
      return;
    }
    if (argv.help) {
      options.showHelp();
      return;
    }
    parseData = function(data) {
      var error, json, object, outputFile, _ref;
      try {
        object = CSON.parse(data);
        if (argv.r && (!_.isObject(object) || _.isArray(object))) {
          console.error("CSON data does not contain a root object");
          process.exit(1);
          return;
        }
      } catch (_error) {
        error = _error;
        console.error("Parsing data failed: " + error.message);
        process.exit(1);
      }
      json = JSON.stringify(object, void 0, 2) + "\n";
      if (argv.output) {
        outputFile = path.resolve(argv.output);
        try {
          return fs.writeFileSync(outputFile, json);
        } catch (_error) {
          error = _error;
          return console.error("Writing " + outputFile + " failed: " + ((_ref = error.code) != null ? _ref : error));
        }
      } else {
        return process.stdout.write(json);
      }
    };
    if (inputFile) {
      try {
        return parseData(fs.readFileSync(inputFile, 'utf8'));
      } catch (_error) {
        error = _error;
        console.error("Reading " + inputFile + " failed: " + ((_ref = error.code) != null ? _ref : error));
        return process.exit(1);
      }
    } else {
      process.stdin.resume();
      process.stdin.setEncoding('utf8');
      data = '';
      process.stdin.on('data', function(chunk) {
        return data += chunk.toString();
      });
      return process.stdin.on('end', function() {
        return parseData(data);
      });
    }
  };

}).call(this);
