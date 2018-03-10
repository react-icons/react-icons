(function() {
  var Mixin, PropertyAccessors, WeakMap, _ref, _ref1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Mixin = require('mixto');

  WeakMap = (_ref = global.WeakMap) != null ? _ref : require('es6-weak-map');

  module.exports = PropertyAccessors = (function(_super) {
    __extends(PropertyAccessors, _super);

    function PropertyAccessors() {
      _ref1 = PropertyAccessors.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    PropertyAccessors.prototype.accessor = function(name, definition) {
      if (typeof definition === 'function') {
        definition = {
          get: definition
        };
      }
      return Object.defineProperty(this, name, definition);
    };

    PropertyAccessors.prototype.advisedAccessor = function(name, definition) {
      var getAdvice, setAdvice, values;
      if (typeof definition === 'function') {
        getAdvice = definition;
      } else {
        getAdvice = definition.get;
        setAdvice = definition.set;
      }
      values = new WeakMap;
      return this.accessor(name, {
        get: function() {
          if (getAdvice != null) {
            getAdvice.call(this);
          }
          return values.get(this);
        },
        set: function(newValue) {
          if (setAdvice != null) {
            setAdvice.call(this, newValue, values.get(this));
          }
          return values.set(this, newValue);
        }
      });
    };

    PropertyAccessors.prototype.lazyAccessor = function(name, definition) {
      var values;
      values = new WeakMap;
      return this.accessor(name, {
        get: function() {
          if (values.has(this)) {
            return values.get(this);
          } else {
            values.set(this, definition.call(this));
            return values.get(this);
          }
        },
        set: function(value) {
          return values.set(this, value);
        }
      });
    };

    return PropertyAccessors;

  })(Mixin);

}).call(this);
