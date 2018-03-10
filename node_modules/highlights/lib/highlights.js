(function() {
  var CSON, GrammarRegistry, Highlights, Selector, _, fs, once, path, selector;

  path = require('path');

  _ = require('underscore-plus');

  fs = require('fs-plus');

  CSON = require('season');

  once = require('once');

  GrammarRegistry = require('first-mate').GrammarRegistry;

  Selector = require('first-mate-select-grammar');

  selector = Selector();

  module.exports = Highlights = (function() {
    function Highlights(arg) {
      var ref;
      ref = arg != null ? arg : {}, this.includePath = ref.includePath, this.registry = ref.registry, this.scopePrefix = ref.scopePrefix;
      if (this.registry == null) {
        this.registry = new GrammarRegistry({
          maxTokensPerLine: Infinity
        });
      }
      this._loadingGrammars = false;
      if (this.scopePrefix == null) {
        this.scopePrefix = '';
      }
    }

    Highlights.prototype.highlightSync = function(arg) {
      var fileContents, filePath, ref, scopeName;
      ref = arg != null ? arg : {}, filePath = ref.filePath, fileContents = ref.fileContents, scopeName = ref.scopeName;
      this.loadGrammarsSync();
      if (filePath) {
        if (fileContents == null) {
          fileContents = fs.readFileSync(filePath, 'utf8');
        }
      }
      return this._highlightCommon({
        filePath: filePath,
        fileContents: fileContents,
        scopeName: scopeName
      });
    };

    Highlights.prototype.highlight = function(arg, cb) {
      var fileContents, filePath, ref, scopeName;
      ref = arg != null ? arg : {}, filePath = ref.filePath, fileContents = ref.fileContents, scopeName = ref.scopeName;
      return this.loadGrammars((function(_this) {
        return function(err) {
          if (err) {
            return cb(err);
          }
          if (filePath && !fileContents) {
            return fs.readFile(filePath, 'utf8', function(err, fileContents) {
              if (err) {
                return cb(err);
              }
              return cb(false, _this._highlightCommon({
                filePath: filePath,
                fileContents: fileContents,
                scopeName: scopeName
              }));
            });
          } else {
            return cb(false, _this._highlightCommon({
              filePath: filePath,
              fileContents: fileContents,
              scopeName: scopeName
            }));
          }
        };
      })(this));
    };

    Highlights.prototype.requireGrammarsSync = function(arg) {
      var file, grammarPath, grammarsDir, k, len, modulePath, packageDir, ref;
      modulePath = (arg != null ? arg : {}).modulePath;
      this.loadGrammarsSync();
      if (fs.isFileSync(modulePath)) {
        packageDir = path.dirname(modulePath);
      } else {
        packageDir = modulePath;
      }
      grammarsDir = path.resolve(packageDir, 'grammars');
      if (!fs.isDirectorySync(grammarsDir)) {
        return;
      }
      ref = fs.readdirSync(grammarsDir);
      for (k = 0, len = ref.length; k < len; k++) {
        file = ref[k];
        if (grammarPath = CSON.resolve(path.join(grammarsDir, file))) {
          this.registry.loadGrammarSync(grammarPath);
        }
      }
    };

    Highlights.prototype.requireGrammars = function(arg, cb) {
      var modulePath;
      modulePath = (arg != null ? arg : {}).modulePath;
      return this.loadGrammars((function(_this) {
        return function(err) {
          if (err) {
            return cb(err);
          }
          return fs.stat(modulePath, function(err, stat) {
            var grammarsDir, packageDir;
            if (err) {
              return cb(err);
            }
            if (stat.isFile()) {
              packageDir = path.dirname(modulePath);
            } else if (stat.isDirectory()) {
              packageDir = modulePath;
            } else {
              return cb();
            }
            grammarsDir = path.resolve(packageDir, 'grammars');
            return _this._registryLoadGrammarsDir(grammarsDir, cb);
          });
        };
      })(this));
    };

    Highlights.prototype._registryLoadGrammarsDir = function(dir, cb) {
      var done, todo;
      cb = once(cb);
      todo = false;
      done = function(err) {
        if (err) {
          return cb(err);
        }
        if (!--todo) {
          return cb();
        }
      };
      return fs.readdir(dir, (function(_this) {
        return function(err, files) {
          var file, grammarPath, results;
          if (err) {
            return cb(err);
          }
          todo = files.length;
          if (!todo) {
            return cb(false, []);
          }
          results = [];
          while (files.length) {
            file = files.shift();
            grammarPath = path.join(dir, file);
            if (CSON.isObjectPath(grammarPath)) {
              results.push(_this._registryLoadGrammar(grammarPath, function(err) {
                return done(err);
              }));
            } else {
              results.push(void 0);
            }
          }
          return results;
        };
      })(this));
    };

    Highlights.prototype._registryLoadGrammar = function(grammarPath, cb) {
      return fs.stat(grammarPath, (function(_this) {
        return function(err, stat) {
          if (err) {
            return cb(err);
          }
          if (!stat.isFile()) {
            return cb();
          }
          return _this.registry.loadGrammar(grammarPath, cb);
        };
      })(this));
    };

    Highlights.prototype._highlightCommon = function(arg) {
      var fileContents, filePath, grammar, html, k, l, lastLineTokens, len, len1, lineTokens, ref, ref1, scopeName, scopeStack, scopes, tokens, value;
      ref = arg != null ? arg : {}, filePath = ref.filePath, fileContents = ref.fileContents, scopeName = ref.scopeName;
      grammar = this.registry.grammarForScopeName(scopeName);
      if (grammar == null) {
        grammar = selector.selectGrammar(this.registry, filePath, fileContents);
      }
      lineTokens = grammar.tokenizeLines(fileContents);
      if (lineTokens.length > 0) {
        lastLineTokens = lineTokens[lineTokens.length - 1];
        if (lastLineTokens.length === 1 && lastLineTokens[0].value === '') {
          lineTokens.pop();
        }
      }
      html = '<pre class="editor editor-colors">';
      for (k = 0, len = lineTokens.length; k < len; k++) {
        tokens = lineTokens[k];
        scopeStack = [];
        html += '<div class="line">';
        for (l = 0, len1 = tokens.length; l < len1; l++) {
          ref1 = tokens[l], value = ref1.value, scopes = ref1.scopes;
          if (!value) {
            value = ' ';
          }
          html = this.updateScopeStack(scopeStack, scopes, html);
          html += "<span>" + (this.escapeString(value)) + "</span>";
        }
        while (scopeStack.length > 0) {
          html = this.popScope(scopeStack, html);
        }
        html += '</div>';
      }
      html += '</pre>';
      return html;
    };

    Highlights.prototype.loadGrammarsSync = function() {
      var filePath, grammar, grammarPath, grammarsPath, k, len, ref, ref1;
      if (this.registry.grammars.length > 1) {
        return;
      }
      if (typeof this.includePath === 'string') {
        if (fs.isFileSync(this.includePath)) {
          this.registry.loadGrammarSync(this.includePath);
        } else if (fs.isDirectorySync(this.includePath)) {
          ref = fs.listSync(this.includePath, ['cson', 'json']);
          for (k = 0, len = ref.length; k < len; k++) {
            filePath = ref[k];
            this.registry.loadGrammarSync(filePath);
          }
        }
      }
      grammarsPath = path.join(__dirname, '..', 'gen', 'grammars.json');
      ref1 = JSON.parse(fs.readFileSync(grammarsPath));
      for (grammarPath in ref1) {
        grammar = ref1[grammarPath];
        if (this.registry.grammarForScopeName(grammar.scopeName) != null) {
          continue;
        }
        grammar = this.registry.createGrammar(grammarPath, grammar);
        this.registry.addGrammar(grammar);
      }
    };

    Highlights.prototype.loadGrammars = function(cb) {
      var callbacks, done, grammarsArray, grammarsFromJSON, pendingAsyncCalls;
      cb = once(cb);
      if (this._loadingGrammars === true || this.registry.grammars.length > 1) {
        return setImmediate(cb);
      } else if (Array.isArray(this._loadingGrammars)) {
        return this._loadingGrammars.push(cb);
      }
      this._loadingGrammars = [cb];
      callbacks = (function(_this) {
        return function(err) {
          var cbs, results;
          cbs = _this._loadingGrammars;
          _this._loadingGrammars = true;
          results = [];
          while (cbs.length) {
            results.push(cbs.shift()(err));
          }
          return results;
        };
      })(this);
      pendingAsyncCalls = 2;
      grammarsFromJSON = null;
      grammarsArray = null;
      done = (function(_this) {
        return function(err, paths) {
          if (err) {
            return callbacks(err);
          }
          if (!--pendingAsyncCalls) {
            return _this._populateGrammars(grammarsFromJSON, grammarsArray, callbacks);
          }
        };
      })(this);
      this._findGrammars(function(err, arr) {
        grammarsArray = arr;
        return done(err);
      });
      return this._loadGrammarsJSON(function(err, fromJSON) {
        grammarsFromJSON = fromJSON;
        return done(err);
      });
    };

    Highlights.prototype._populateGrammars = function(grammarsFromJSON, grammarsArray, cb) {
      var done, grammars, results, toLoad;
      toLoad = (grammarsArray || []).length;
      grammars = [];
      done = (function(_this) {
        return function(err, grammar) {
          var grammarPath;
          if (err) {
            return cb(err);
          }
          if (grammar) {
            grammars.push(grammar);
          }
          if (!--toLoad) {
            for (grammarPath in grammarsFromJSON) {
              grammar = grammarsFromJSON[grammarPath];
              if (_this.registry.grammarForScopeName(grammar.scopeName) != null) {
                continue;
              }
              grammar = _this.registry.createGrammar(grammarPath, grammar);
              _this.registry.addGrammar(grammar);
            }
            return cb(false, true);
          }
        };
      })(this);
      if (!toLoad) {
        toLoad = 1;
        return done();
      }
      results = [];
      while (grammarsArray.length) {
        results.push(this.registry.loadGrammar(grammarsArray.shift(), done));
      }
      return results;
    };

    Highlights.prototype._findGrammars = function(cb) {
      if (typeof this.includePath === 'string') {
        return fs.stat(this.includePath, (function(_this) {
          return function(err, stat) {
            if (err) {
              return cb(err);
            }
            if (stat.isFile()) {
              return cb(false, [_this.includePath]);
            } else if (stat.isDirectory()) {
              return fs.list(_this.includePath, ['cson', 'json'], function(err, list) {
                if (list == null) {
                  list = [];
                }
                return cb(err, list);
              });
            } else {
              return cb(new Error('unsupported file type.'));
            }
          };
        })(this));
      } else {
        return setImmediate(cb);
      }
    };

    Highlights.prototype._loadGrammarsJSON = function(cb) {
      var grammarsPath;
      grammarsPath = path.join(__dirname, '..', 'gen', 'grammars.json');
      return fs.readFile(grammarsPath, function(err, contents) {
        var error;
        try {
          return cb(false, JSON.parse(contents));
        } catch (error) {
          err = error;
          return cb(err);
        }
      });
    };

    Highlights.prototype.escapeString = function(string) {
      return string.replace(/[&"'<> ]/g, function(match) {
        switch (match) {
          case '&':
            return '&amp;';
          case '"':
            return '&quot;';
          case "'":
            return '&#39;';
          case '<':
            return '&lt;';
          case '>':
            return '&gt;';
          case ' ':
            return '&nbsp;';
          default:
            return match;
        }
      });
    };

    Highlights.prototype.updateScopeStack = function(scopeStack, desiredScopes, html) {
      var excessScopes, i, j, k, l, ref, ref1, ref2;
      excessScopes = scopeStack.length - desiredScopes.length;
      if (excessScopes > 0) {
        while (excessScopes--) {
          html = this.popScope(scopeStack, html);
        }
      }
      for (i = k = ref = scopeStack.length; ref <= 0 ? k <= 0 : k >= 0; i = ref <= 0 ? ++k : --k) {
        if (_.isEqual(scopeStack.slice(0, i), desiredScopes.slice(0, i))) {
          break;
        }
        html = this.popScope(scopeStack, html);
      }
      for (j = l = ref1 = i, ref2 = desiredScopes.length; ref1 <= ref2 ? l < ref2 : l > ref2; j = ref1 <= ref2 ? ++l : --l) {
        html = this.pushScope(scopeStack, desiredScopes[j], html);
      }
      return html;
    };

    Highlights.prototype.pushScope = function(scopeStack, scope, html) {
      var className;
      scopeStack.push(scope);
      if (scope) {
        className = this.scopePrefix + scope.replace(/\.+/g, " " + this.scopePrefix);
        return html += "<span class=\"" + className + "\">";
      } else {
        return html += "<span>";
      }
    };

    Highlights.prototype.popScope = function(scopeStack, html) {
      scopeStack.pop();
      return html += '</span>';
    };

    return Highlights;

  })();

}).call(this);
