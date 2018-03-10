(function() {
  var Behavior, Emitter, Signal, Subscriber, isEqual,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  isEqual = require('underscore-plus').isEqual;

  Emitter = require('./emitter');

  Subscriber = require('./subscriber');

  Behavior = null;

  module.exports = Signal = (function(_super) {
    __extends(Signal, _super);

    Subscriber.includeInto(Signal);

    Signal.fromEmitter = function(emitter, eventName) {
      return new Signal(function() {
        var _this = this;
        return this.subscribe(emitter, eventName, function() {
          var metadata, value;
          value = arguments[0], metadata = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
          return _this.emitValue.apply(_this, [value].concat(__slice.call(metadata)));
        });
      });
    };

    function Signal(subscribeCallback) {
      var _this = this;
      this.subscribeCallback = subscribeCallback;
      this.retainCount = 0;
      this.on('value-subscription-will-be-added', function() {
        return _this.retain();
      });
      this.on('value-subscription-removed', function() {
        return _this.release();
      });
    }

    Signal.prototype.isSignal = true;

    Signal.prototype.retained = function() {
      return typeof this.subscribeCallback === "function" ? this.subscribeCallback() : void 0;
    };

    Signal.prototype.released = function() {
      return this.unsubscribe();
    };

    Signal.prototype.retain = function() {
      if (++this.retainCount === 1) {
        if (typeof this.retained === "function") {
          this.retained();
        }
      }
      return this;
    };

    Signal.prototype.release = function() {
      if (--this.retainCount === 0) {
        if (typeof this.released === "function") {
          this.released();
        }
      }
      return this;
    };

    Signal.prototype.onValue = function(handler) {
      return this.on('value', handler);
    };

    Signal.prototype.emitValue = function(value, metadata) {
      if (metadata == null) {
        metadata = {};
      }
      if (metadata.source == null) {
        metadata.source = this;
      }
      return this.emit('value', value, metadata);
    };

    Signal.prototype.toBehavior = function(initialValue) {
      var source;
      source = this;
      return this.buildBehavior(initialValue, function() {
        var _this = this;
        return this.subscribe(source, 'value', function() {
          var metadata, value;
          value = arguments[0], metadata = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
          return _this.emitValue.apply(_this, [value].concat(__slice.call(metadata)));
        });
      });
    };

    Signal.prototype.changes = function() {
      return this;
    };

    Signal.prototype.injectMetadata = function(fn) {
      var source;
      source = this;
      return new this.constructor(function() {
        var _this = this;
        return this.subscribe(source, 'value', function(value, metadata) {
          var k, newMetadata, v;
          newMetadata = fn(value, metadata);
          for (k in newMetadata) {
            v = newMetadata[k];
            metadata[k] = v;
          }
          return _this.emitValue(value, metadata);
        });
      });
    };

    Signal.prototype.filter = function(predicate) {
      var source;
      source = this;
      return new this.constructor(function() {
        var _this = this;
        return this.subscribe(source, 'value', function() {
          var metadata, value;
          value = arguments[0], metadata = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
          if (predicate.call(value, value)) {
            return _this.emitValue.apply(_this, [value].concat(__slice.call(metadata)));
          }
        });
      });
    };

    Signal.prototype.filterDefined = function() {
      return this.filter(function(value) {
        return value != null;
      });
    };

    Signal.prototype.map = function(fn) {
      var property, source;
      if (typeof fn === 'string') {
        property = fn;
        fn = function(value) {
          return value != null ? value[property] : void 0;
        };
      }
      source = this;
      return new this.constructor(function() {
        var _this = this;
        return this.subscribe(source, 'value', function() {
          var metadata, value;
          value = arguments[0], metadata = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
          return _this.emitValue.apply(_this, [fn.call(value, value)].concat(__slice.call(metadata)));
        });
      });
    };

    Signal.prototype["switch"] = function(fn) {
      var source;
      source = this.map(fn);
      return new this.constructor(function() {
        var currentSignal,
          _this = this;
        currentSignal = null;
        return this.subscribe(source, 'value', function(newSignal, outerMetadata) {
          if (currentSignal != null) {
            _this.unsubscribe(currentSignal);
          }
          currentSignal = newSignal;
          if (currentSignal != null) {
            return _this.subscribe(currentSignal, 'value', function(value, innerMetadata) {
              return _this.emitValue(value, innerMetadata);
            });
          } else {
            return _this.emitValue(void 0, outerMetadata);
          }
        });
      });
    };

    Signal.prototype.skipUntil = function(predicateOrTargetValue) {
      var doneSkipping, predicate, targetValue;
      if (typeof predicateOrTargetValue !== 'function') {
        targetValue = predicateOrTargetValue;
        return this.skipUntil(function(value) {
          return isEqual(value, targetValue);
        });
      }
      predicate = predicateOrTargetValue;
      doneSkipping = false;
      return this.filter(function(value) {
        if (doneSkipping) {
          return true;
        }
        if (predicate(value)) {
          return doneSkipping = true;
        } else {
          return false;
        }
      });
    };

    Signal.prototype.scan = function(initialValue, fn) {
      var source;
      source = this;
      return this.buildBehavior(initialValue, function() {
        var oldValue,
          _this = this;
        oldValue = initialValue;
        return this.subscribe(source, 'value', function() {
          var metadata, newValue;
          newValue = arguments[0], metadata = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
          return _this.emitValue.apply(_this, [(oldValue = fn(oldValue, newValue))].concat(__slice.call(metadata)));
        });
      });
    };

    Signal.prototype.diff = function(initialValue, fn) {
      var source;
      source = this;
      return this.buildBehavior(function() {
        var oldValue,
          _this = this;
        oldValue = initialValue;
        return this.subscribe(source, 'value', function() {
          var fnOldValue, metadata, newValue;
          newValue = arguments[0], metadata = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
          fnOldValue = oldValue;
          oldValue = newValue;
          return _this.emitValue.apply(_this, [fn(fnOldValue, newValue)].concat(__slice.call(metadata)));
        });
      });
    };

    Signal.prototype.distinctUntilChanged = function() {
      var source;
      source = this;
      return new this.constructor(function() {
        var oldValue, receivedValue,
          _this = this;
        receivedValue = false;
        oldValue = void 0;
        return this.subscribe(source, 'value', function() {
          var metadata, newValue;
          newValue = arguments[0], metadata = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
          if (receivedValue) {
            if (isEqual(oldValue, newValue)) {
              return oldValue = newValue;
            } else {
              oldValue = newValue;
              return _this.emitValue.apply(_this, [newValue].concat(__slice.call(metadata)));
            }
          } else {
            receivedValue = true;
            oldValue = newValue;
            return _this.emitValue.apply(_this, [newValue].concat(__slice.call(metadata)));
          }
        });
      });
    };

    Signal.prototype.equals = function(expected) {
      return this.map(function(actual) {
        return isEqual(actual, expected);
      }).distinctUntilChanged();
    };

    Signal.prototype.isDefined = function() {
      return this.map(function(value) {
        return value != null;
      }).distinctUntilChanged();
    };

    Signal.prototype.buildBehavior = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (Behavior == null) {
        Behavior = require('./behavior');
      }
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Behavior, args, function(){});
    };

    return Signal;

  })(Emitter);

}).call(this);
