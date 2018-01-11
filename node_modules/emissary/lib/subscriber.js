(function() {
  var Mixin, Signal, Subscriber, Subscription, WeakMap, _ref, _ref1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  Mixin = require('mixto');

  Signal = null;

  WeakMap = (_ref = global.WeakMap) != null ? _ref : require('es6-weak-map');

  Subscription = require('./subscription');

  module.exports = Subscriber = (function(_super) {
    __extends(Subscriber, _super);

    function Subscriber() {
      _ref1 = Subscriber.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    Subscriber.prototype.subscribeWith = function(eventEmitter, methodName, args) {
      var callback, eventNames;
      if (eventEmitter[methodName] == null) {
        throw new Error("Object does not have method '" + methodName + "' with which to subscribe");
      }
      eventEmitter[methodName].apply(eventEmitter, args);
      eventNames = args[0];
      callback = args[args.length - 1];
      return this.addSubscription(new Subscription(eventEmitter, eventNames, callback));
    };

    Subscriber.prototype.addSubscription = function(subscription) {
      var emitter;
      if (this._subscriptions == null) {
        this._subscriptions = [];
      }
      this._subscriptions.push(subscription);
      emitter = subscription.emitter;
      if (emitter != null) {
        if (this._subscriptionsByObject == null) {
          this._subscriptionsByObject = new WeakMap;
        }
        if (this._subscriptionsByObject.has(emitter)) {
          this._subscriptionsByObject.get(emitter).push(subscription);
        } else {
          this._subscriptionsByObject.set(emitter, [subscription]);
        }
      }
      return subscription;
    };

    Subscriber.prototype.subscribe = function() {
      var args, eventEmitterOrSubscription;
      eventEmitterOrSubscription = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (args.length === 0) {
        return this.addSubscription(eventEmitterOrSubscription);
      } else {
        if (args.length === 1 && eventEmitterOrSubscription.isSignal) {
          args.unshift('value');
        }
        return this.subscribeWith(eventEmitterOrSubscription, 'on', args);
      }
    };

    Subscriber.prototype.subscribeToCommand = function() {
      var args, eventEmitter;
      eventEmitter = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return this.subscribeWith(eventEmitter, 'command', args);
    };

    Subscriber.prototype.unsubscribe = function(object) {
      var index, subscription, _i, _j, _len, _len1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7;
      if (object != null) {
        _ref4 = (_ref2 = (_ref3 = this._subscriptionsByObject) != null ? _ref3.get(object) : void 0) != null ? _ref2 : [];
        for (_i = 0, _len = _ref4.length; _i < _len; _i++) {
          subscription = _ref4[_i];
          if (typeof subscription.dispose === 'function') {
            subscription.dispose();
          } else {
            subscription.off();
          }
          index = this._subscriptions.indexOf(subscription);
          if (index >= 0) {
            this._subscriptions.splice(index, 1);
          }
        }
        return (_ref5 = this._subscriptionsByObject) != null ? _ref5["delete"](object) : void 0;
      } else {
        _ref7 = (_ref6 = this._subscriptions) != null ? _ref6 : [];
        for (_j = 0, _len1 = _ref7.length; _j < _len1; _j++) {
          subscription = _ref7[_j];
          if (typeof subscription.dispose === 'function') {
            subscription.dispose();
          } else {
            subscription.off();
          }
        }
        this._subscriptions = null;
        return this._subscriptionsByObject = null;
      }
    };

    return Subscriber;

  })(Mixin);

}).call(this);
