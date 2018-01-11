(function() {
  var CSON, crypto, csonCache, detectDuplicateKeys, fs, getCachePath, isAllCommentsAndWhitespace, parseCacheContents, parseContents, parseContentsSync, parseObject, path, stats, writeCacheFile, writeCacheFileSync;

  crypto = require('crypto');

  path = require('path');

  fs = require('fs-plus');

  CSON = null;

  csonCache = null;

  stats = {
    hits: 0,
    misses: 0
  };

  getCachePath = function(cson) {
    var digest;
    digest = crypto.createHash('sha1').update(cson, 'utf8').digest('hex');
    return path.join(csonCache, "" + digest + ".json");
  };

  writeCacheFileSync = function(cachePath, object) {
    try {
      return fs.writeFileSync(cachePath, JSON.stringify(object));
    } catch (_error) {}
  };

  writeCacheFile = function(cachePath, object) {
    return fs.writeFile(cachePath, JSON.stringify(object), function() {});
  };

  parseObject = function(objectPath, contents, options) {
    var error, parsed;
    if (path.extname(objectPath) === '.cson') {
      if (CSON == null) {
        CSON = require('cson-parser');
      }
      try {
        parsed = CSON.parse(contents, (options != null ? options.allowDuplicateKeys : void 0) === false ? detectDuplicateKeys : void 0);
        stats.misses++;
        return parsed;
      } catch (_error) {
        error = _error;
        if (isAllCommentsAndWhitespace(contents)) {
          return null;
        } else {
          throw error;
        }
      }
    } else {
      return JSON.parse(contents);
    }
  };

  parseCacheContents = function(contents) {
    var parsed;
    parsed = JSON.parse(contents);
    stats.hits++;
    return parsed;
  };

  parseContentsSync = function(objectPath, cachePath, contents, options) {
    var object, parseError;
    try {
      object = parseObject(objectPath, contents, options);
    } catch (_error) {
      parseError = _error;
      if (parseError.path == null) {
        parseError.path = objectPath;
      }
      if (parseError.filename == null) {
        parseError.filename = objectPath;
      }
      throw parseError;
    }
    if (cachePath) {
      writeCacheFileSync(cachePath, object);
    }
    return object;
  };

  isAllCommentsAndWhitespace = function(contents) {
    var line, lines;
    lines = contents.split('\n');
    while (lines.length > 0) {
      line = lines[0].trim();
      if (line.length === 0 || line[0] === '#') {
        lines.shift();
      } else {
        return false;
      }
    }
    return true;
  };

  parseContents = function(objectPath, cachePath, contents, options, callback) {
    var object, parseError;
    try {
      object = parseObject(objectPath, contents, options);
    } catch (_error) {
      parseError = _error;
      parseError.path = objectPath;
      if (parseError.filename == null) {
        parseError.filename = objectPath;
      }
      parseError.message = "" + objectPath + ": " + parseError.message;
      if (typeof callback === "function") {
        callback(parseError);
      }
      return;
    }
    if (cachePath) {
      writeCacheFile(cachePath, object);
    }
    if (typeof callback === "function") {
      callback(null, object);
    }
  };

  module.exports = {
    setCacheDir: function(cacheDirectory) {
      return csonCache = cacheDirectory;
    },
    isObjectPath: function(objectPath) {
      var extension;
      if (!objectPath) {
        return false;
      }
      extension = path.extname(objectPath);
      return extension === '.cson' || extension === '.json';
    },
    resolve: function(objectPath) {
      var csonPath, jsonPath;
      if (objectPath == null) {
        objectPath = '';
      }
      if (!objectPath) {
        return null;
      }
      if (this.isObjectPath(objectPath) && fs.isFileSync(objectPath)) {
        return objectPath;
      }
      jsonPath = "" + objectPath + ".json";
      if (fs.isFileSync(jsonPath)) {
        return jsonPath;
      }
      csonPath = "" + objectPath + ".cson";
      if (fs.isFileSync(csonPath)) {
        return csonPath;
      }
      return null;
    },
    readFileSync: function(objectPath, options) {
      var cachePath, contents;
      contents = fs.readFileSync(objectPath, 'utf8');
      if (contents.trim().length === 0) {
        return null;
      }
      if (csonCache && path.extname(objectPath) === '.cson') {
        cachePath = getCachePath(contents);
        if (fs.isFileSync(cachePath)) {
          try {
            return parseCacheContents(fs.readFileSync(cachePath, 'utf8'));
          } catch (_error) {}
        }
      }
      return parseContentsSync(objectPath, cachePath, contents, options);
    },
    readFile: function(objectPath, options, callback) {
      if (arguments.length < 3) {
        callback = options;
        options = null;
      }
      return fs.readFile(objectPath, 'utf8', (function(_this) {
        return function(error, contents) {
          var cachePath;
          if (error != null) {
            return typeof callback === "function" ? callback(error) : void 0;
          }
          if (contents.trim().length === 0) {
            return typeof callback === "function" ? callback(null, null) : void 0;
          }
          if (csonCache && path.extname(objectPath) === '.cson') {
            cachePath = getCachePath(contents);
            return fs.stat(cachePath, function(error, stat) {
              if (stat != null ? stat.isFile() : void 0) {
                return fs.readFile(cachePath, 'utf8', function(error, cached) {
                  var parsed;
                  try {
                    parsed = parseCacheContents(cached);
                  } catch (_error) {
                    error = _error;
                    try {
                      parseContents(objectPath, cachePath, contents, options, callback);
                    } catch (_error) {}
                    return;
                  }
                  return typeof callback === "function" ? callback(null, parsed) : void 0;
                });
              } else {
                return parseContents(objectPath, cachePath, contents, options, callback);
              }
            });
          } else {
            return parseContents(objectPath, null, contents, options, callback);
          }
        };
      })(this));
    },
    writeFile: function(objectPath, object, callback) {
      var contents, error;
      if (callback == null) {
        callback = function() {};
      }
      try {
        contents = this.stringifyPath(objectPath, object);
      } catch (_error) {
        error = _error;
        callback(error);
        return;
      }
      return fs.writeFile(objectPath, "" + contents + "\n", callback);
    },
    writeFileSync: function(objectPath, object) {
      return fs.writeFileSync(objectPath, "" + (this.stringifyPath(objectPath, object)) + "\n");
    },
    stringifyPath: function(objectPath, object, visitor, space) {
      if (path.extname(objectPath) === '.cson') {
        return this.stringify(object, visitor, space);
      } else {
        return JSON.stringify(object, void 0, 2);
      }
    },
    stringify: function(object, visitor, space) {
      if (space == null) {
        space = 2;
      }
      if (CSON == null) {
        CSON = require('cson-parser');
      }
      return CSON.stringify(object, visitor, space);
    },
    parse: function(str, reviver) {
      if (CSON == null) {
        CSON = require('cson-parser');
      }
      return CSON.parse(str, reviver);
    },
    getCacheHits: function() {
      return stats.hits;
    },
    getCacheMisses: function() {
      return stats.misses;
    },
    resetCacheStats: function() {
      return stats = {
        hits: 0,
        misses: 0
      };
    }
  };

  detectDuplicateKeys = function(key, value) {
    if (this.hasOwnProperty(key) && this[key] !== value) {
      throw new Error("Duplicate key '" + key + "'");
    } else {
      return value;
    }
  };

}).call(this);
