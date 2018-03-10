(function() {
  var CSON, Disposable, Emitter, EmitterMixin, Grammar, GrammarRegistry, Grim, NullGrammar, _, _ref;

  _ = require('underscore-plus');

  CSON = require('season');

  _ref = require('event-kit'), Emitter = _ref.Emitter, Disposable = _ref.Disposable;

  Grim = require('grim');

  Grammar = require('./grammar');

  NullGrammar = require('./null-grammar');

  module.exports = GrammarRegistry = (function() {
    function GrammarRegistry(options) {
      var _ref1, _ref2;
      if (options == null) {
        options = {};
      }
      this.maxTokensPerLine = (_ref1 = options.maxTokensPerLine) != null ? _ref1 : Infinity;
      this.maxLineLength = (_ref2 = options.maxLineLength) != null ? _ref2 : Infinity;
      this.nullGrammar = new NullGrammar(this);
      this.clear();
    }

    GrammarRegistry.prototype.clear = function() {
      this.emitter = new Emitter;
      this.grammars = [];
      this.grammarsByScopeName = {};
      this.injectionGrammars = [];
      this.grammarOverridesByPath = {};
      this.scopeIdCounter = -1;
      this.idsByScope = {};
      this.scopesById = {};
      return this.addGrammar(this.nullGrammar);
    };


    /*
    Section: Event Subscription
     */

    GrammarRegistry.prototype.onDidAddGrammar = function(callback) {
      return this.emitter.on('did-add-grammar', callback);
    };

    GrammarRegistry.prototype.onDidUpdateGrammar = function(callback) {
      return this.emitter.on('did-update-grammar', callback);
    };


    /*
    Section: Managing Grammars
     */

    GrammarRegistry.prototype.getGrammars = function() {
      return _.clone(this.grammars);
    };

    GrammarRegistry.prototype.grammarForScopeName = function(scopeName) {
      return this.grammarsByScopeName[scopeName];
    };

    GrammarRegistry.prototype.addGrammar = function(grammar) {
      this.grammars.push(grammar);
      this.grammarsByScopeName[grammar.scopeName] = grammar;
      if (grammar.injectionSelector != null) {
        this.injectionGrammars.push(grammar);
      }
      this.grammarUpdated(grammar.scopeName);
      if (Grammar.includeDeprecatedAPIs) {
        this.emit('grammar-added', grammar);
      }
      this.emitter.emit('did-add-grammar', grammar);
      return new Disposable((function(_this) {
        return function() {
          return _this.removeGrammar(grammar);
        };
      })(this));
    };

    GrammarRegistry.prototype.removeGrammar = function(grammar) {
      _.remove(this.grammars, grammar);
      delete this.grammarsByScopeName[grammar.scopeName];
      _.remove(this.injectionGrammars, grammar);
      this.grammarUpdated(grammar.scopeName);
      return void 0;
    };

    GrammarRegistry.prototype.removeGrammarForScopeName = function(scopeName) {
      var grammar;
      grammar = this.grammarForScopeName(scopeName);
      if (grammar != null) {
        this.removeGrammar(grammar);
      }
      return grammar;
    };

    GrammarRegistry.prototype.readGrammarSync = function(grammarPath) {
      var grammar, _ref1;
      grammar = (_ref1 = CSON.readFileSync(grammarPath)) != null ? _ref1 : {};
      if (typeof grammar.scopeName === 'string' && grammar.scopeName.length > 0) {
        return this.createGrammar(grammarPath, grammar);
      } else {
        throw new Error("Grammar missing required scopeName property: " + grammarPath);
      }
    };

    GrammarRegistry.prototype.readGrammar = function(grammarPath, callback) {
      CSON.readFile(grammarPath, (function(_this) {
        return function(error, grammar) {
          if (grammar == null) {
            grammar = {};
          }
          if (error != null) {
            return typeof callback === "function" ? callback(error) : void 0;
          } else {
            if (typeof grammar.scopeName === 'string' && grammar.scopeName.length > 0) {
              return typeof callback === "function" ? callback(null, _this.createGrammar(grammarPath, grammar)) : void 0;
            } else {
              return typeof callback === "function" ? callback(new Error("Grammar missing required scopeName property: " + grammarPath)) : void 0;
            }
          }
        };
      })(this));
      return void 0;
    };

    GrammarRegistry.prototype.loadGrammarSync = function(grammarPath) {
      var grammar;
      grammar = this.readGrammarSync(grammarPath);
      this.addGrammar(grammar);
      return grammar;
    };

    GrammarRegistry.prototype.loadGrammar = function(grammarPath, callback) {
      this.readGrammar(grammarPath, (function(_this) {
        return function(error, grammar) {
          if (error != null) {
            return typeof callback === "function" ? callback(error) : void 0;
          } else {
            _this.addGrammar(grammar);
            return typeof callback === "function" ? callback(null, grammar) : void 0;
          }
        };
      })(this));
      return void 0;
    };

    GrammarRegistry.prototype.startIdForScope = function(scope) {
      var id;
      if (!(id = this.idsByScope[scope])) {
        id = this.scopeIdCounter;
        this.scopeIdCounter -= 2;
        this.idsByScope[scope] = id;
        this.scopesById[id] = scope;
      }
      return id;
    };

    GrammarRegistry.prototype.endIdForScope = function(scope) {
      return this.startIdForScope(scope) - 1;
    };

    GrammarRegistry.prototype.scopeForId = function(id) {
      if ((id % 2) === -1) {
        return this.scopesById[id];
      } else {
        return this.scopesById[id + 1];
      }
    };

    GrammarRegistry.prototype.grammarUpdated = function(scopeName) {
      var grammar, _i, _len, _ref1;
      _ref1 = this.grammars;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        grammar = _ref1[_i];
        if (grammar.scopeName !== scopeName) {
          if (grammar.grammarUpdated(scopeName)) {
            if (Grammar.includeDeprecatedAPIs) {
              this.emit('grammar-updated', grammar);
            }
            this.emitter.emit('did-update-grammar', grammar);
          }
        }
      }
    };

    GrammarRegistry.prototype.createGrammar = function(grammarPath, object) {
      var grammar;
      if (object.maxTokensPerLine == null) {
        object.maxTokensPerLine = this.maxTokensPerLine;
      }
      if (object.maxLineLength == null) {
        object.maxLineLength = this.maxLineLength;
      }
      if (object.limitLineLength === false) {
        object.maxLineLength = Infinity;
      }
      grammar = new Grammar(this, object);
      grammar.path = grammarPath;
      return grammar;
    };

    GrammarRegistry.prototype.decodeTokens = function(lineText, tags, scopeTags, fn) {
      var expectedScopeName, index, offset, poppedScopeName, scopeNames, tag, token, tokens, _i, _len;
      if (scopeTags == null) {
        scopeTags = [];
      }
      offset = 0;
      scopeNames = scopeTags.map((function(_this) {
        return function(tag) {
          return _this.scopeForId(tag);
        };
      })(this));
      tokens = [];
      for (index = _i = 0, _len = tags.length; _i < _len; index = ++_i) {
        tag = tags[index];
        if (tag >= 0) {
          token = {
            value: lineText.substring(offset, offset + tag),
            scopes: scopeNames.slice()
          };
          if (fn != null) {
            token = fn(token, index);
          }
          tokens.push(token);
          offset += tag;
        } else if ((tag % 2) === -1) {
          scopeTags.push(tag);
          scopeNames.push(this.scopeForId(tag));
        } else {
          scopeTags.pop();
          expectedScopeName = this.scopeForId(tag + 1);
          poppedScopeName = scopeNames.pop();
          if (poppedScopeName !== expectedScopeName) {
            throw new Error("Expected popped scope to be " + expectedScopeName + ", but it was " + poppedScopeName);
          }
        }
      }
      return tokens;
    };

    return GrammarRegistry;

  })();

  if (Grim.includeDeprecatedAPIs) {
    EmitterMixin = require('emissary').Emitter;
    EmitterMixin.includeInto(GrammarRegistry);
    GrammarRegistry.prototype.on = function(eventName) {
      switch (eventName) {
        case 'grammar-added':
          Grim.deprecate("Call GrammarRegistry::onDidAddGrammar instead");
          break;
        case 'grammar-updated':
          Grim.deprecate("Call GrammarRegistry::onDidUpdateGrammar instead");
          break;
        default:
          Grim.deprecate("Call explicit event subscription methods instead");
      }
      return EmitterMixin.prototype.on.apply(this, arguments);
    };
  }

}).call(this);
