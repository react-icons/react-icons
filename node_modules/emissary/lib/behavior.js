(function() {
  var Behavior, PropertyAccessors, Signal, helpers, isEqual,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  isEqual = require('underscore-plus').isEqual;

  PropertyAccessors = require('property-accessors');

  Signal = require('./signal');

  module.exports = Behavior = (function(_super) {
    __extends(Behavior, _super);

    PropertyAccessors.includeInto(Behavior);

    function Behavior() {
      var args, subscribeCallback, _ref;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      if (typeof ((_ref = args[0]) != null ? _ref.call : void 0) !== 'function') {
        this.value = args.shift();
      }
      Behavior.__super__.constructor.call(this, subscribeCallback = args.shift());
    }

    Behavior.prototype.retained = function() {
      var _this = this;
      this.subscribe(this, 'value-internal', function(value) {
        return _this.value = value;
      });
      this.subscribe(this, 'value-subscription-added', function(handler) {
        return handler(_this.value);
      });
      return typeof this.subscribeCallback === "function" ? this.subscribeCallback() : void 0;
    };

    Behavior.prototype.emit = function() {
      var args, name;
      name = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (name === 'value') {
        this.emit.apply(this, ['value-internal'].concat(__slice.call(args)));
      }
      return Behavior.__super__.emit.apply(this, arguments);
    };

    Behavior.prototype.getValue = function() {
      if (!(this.retainCount > 0)) {
        throw new Error("Subscribe to or retain this behavior before calling getValue");
      }
      return this.value;
    };

    Behavior.prototype.and = function(right) {
      return helpers.combine(this, right, (function(leftValue, rightValue) {
        return leftValue && rightValue;
      })).distinctUntilChanged();
    };

    Behavior.prototype.or = function(right) {
      return helpers.combine(this, right, (function(leftValue, rightValue) {
        return leftValue || rightValue;
      })).distinctUntilChanged();
    };

    Behavior.prototype.toBehavior = function() {
      return this;
    };

    Behavior.prototype.lazyAccessor('changes', function() {
      var source;
      source = this;
      return new Signal(function() {
        var gotFirst,
          _this = this;
        gotFirst = false;
        return this.subscribe(source, 'value', function() {
          var metadata, value;
          value = arguments[0], metadata = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
          if (gotFirst) {
            _this.emitValue.apply(_this, [value].concat(__slice.call(metadata)));
          }
          return gotFirst = true;
        });
      });
    });

    Behavior.prototype.becomes = function(predicateOrTargetValue) {
      var predicate, targetValue;
      if (typeof predicateOrTargetValue !== 'function') {
        targetValue = predicateOrTargetValue;
        return this.becomes(function(value) {
          return isEqual(value, targetValue);
        });
      }
      predicate = predicateOrTargetValue;
      return this.map(function(value) {
        return !!predicate(value);
      }).distinctUntilChanged().changes;
    };

    Behavior.prototype.becomesLessThan = function(targetValue) {
      return this.becomes(function(value) {
        return value < targetValue;
      });
    };

    Behavior.prototype.becomesGreaterThan = function(targetValue) {
      return this.becomes(function(value) {
        return value > targetValue;
      });
    };

    return Behavior;

  })(Signal);

  helpers = require('./helpers');

}).call(this);
