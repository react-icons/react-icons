(function() {
  var Emitter, Mixin, Signal, Subscription, removeFromArray, subscriptionRemovedPattern, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  Mixin = require('mixto');

  Signal = null;

  Subscription = null;

  subscriptionRemovedPattern = /^(last-)?.+-subscription-removed$/;

  module.exports = Emitter = (function(_super) {
    __extends(Emitter, _super);

    function Emitter() {
      _ref = Emitter.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Emitter.prototype.eventHandlersByEventName = null;

    Emitter.prototype.eventHandlersByNamespace = null;

    Emitter.prototype.subscriptionCounts = null;

    Emitter.prototype.pauseCountsByEventName = null;

    Emitter.prototype.queuedEventsByEventName = null;

    Emitter.prototype.globalPauseCount = null;

    Emitter.prototype.globalQueuedEvents = null;

    Emitter.prototype.signalsByEventName = null;

    Emitter.prototype.on = function(eventNames, handler) {
      var eventName, namespace, _base, _base1, _base2, _i, _len, _ref1, _ref2;
      _ref1 = eventNames.split(/\s+/);
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        eventName = _ref1[_i];
        if (!(eventName !== '')) {
          continue;
        }
        _ref2 = eventName.split('.'), eventName = _ref2[0], namespace = _ref2[1];
        this.emit("" + eventName + "-subscription-will-be-added", handler);
        if (this.incrementSubscriptionCount(eventName) === 1) {
          this.emit("first-" + eventName + "-subscription-will-be-added", handler);
        }
        if (this.eventHandlersByEventName == null) {
          this.eventHandlersByEventName = {};
        }
        if ((_base = this.eventHandlersByEventName)[eventName] == null) {
          _base[eventName] = [];
        }
        this.eventHandlersByEventName[eventName].push(handler);
        if (namespace) {
          if (this.eventHandlersByNamespace == null) {
            this.eventHandlersByNamespace = {};
          }
          if ((_base1 = this.eventHandlersByNamespace)[namespace] == null) {
            _base1[namespace] = {};
          }
          if ((_base2 = this.eventHandlersByNamespace[namespace])[eventName] == null) {
            _base2[eventName] = [];
          }
          this.eventHandlersByNamespace[namespace][eventName].push(handler);
        }
        this.emit("" + eventName + "-subscription-added", handler);
      }
      if (Subscription == null) {
        Subscription = require('./subscription');
      }
      return new Subscription(this, eventNames, handler);
    };

    Emitter.prototype.once = function(eventName, handler) {
      var subscription;
      return subscription = this.on(eventName, function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        subscription.off();
        return handler.apply(null, args);
      });
    };

    Emitter.prototype.signal = function(eventName) {
      var _base;
      if (Signal == null) {
        Signal = require('./signal');
      }
      if (this.signalsByEventName == null) {
        this.signalsByEventName = {};
      }
      return (_base = this.signalsByEventName)[eventName] != null ? (_base = this.signalsByEventName)[eventName] : _base[eventName] = Signal.fromEmitter(this, eventName);
    };

    Emitter.prototype.behavior = function(eventName, initialValue) {
      return this.signal(eventName).toBehavior(initialValue);
    };

    Emitter.prototype.emit = function(eventName, payload) {
      var handler, handlers, queuedEvents, _i, _len, _ref1, _ref2, _ref3;
      if (arguments.length > 2 || /\s|\./.test(eventName)) {
        return this.emitSlow.apply(this, arguments);
      } else {
        if (this.globalQueuedEvents != null) {
          return this.globalQueuedEvents.push([eventName, payload]);
        } else {
          if (queuedEvents = (_ref1 = this.queuedEventsByEventName) != null ? _ref1[eventName] : void 0) {
            return queuedEvents.push([eventName, payload]);
          } else if (handlers = (_ref2 = this.eventHandlersByEventName) != null ? _ref2[eventName] : void 0) {
            _ref3 = handlers.slice();
            for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
              handler = _ref3[_i];
              handler(payload);
            }
            return this.emit("after-" + eventName, payload);
          }
        }
      }
    };

    Emitter.prototype.emitSlow = function() {
      var args, eventName, handlers, namespace, queuedEvents, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;
      eventName = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (this.globalQueuedEvents) {
        return this.globalQueuedEvents.push([eventName].concat(__slice.call(args)));
      } else {
        _ref1 = eventName.split('.'), eventName = _ref1[0], namespace = _ref1[1];
        if (namespace) {
          if (queuedEvents = (_ref2 = this.queuedEventsByEventName) != null ? _ref2[eventName] : void 0) {
            return queuedEvents.push(["" + eventName + "." + namespace].concat(__slice.call(args)));
          } else if (handlers = (_ref3 = this.eventHandlersByNamespace) != null ? (_ref4 = _ref3[namespace]) != null ? _ref4[eventName] : void 0 : void 0) {
            (function(func, args, ctor) {
              ctor.prototype = func.prototype;
              var child = new ctor, result = func.apply(child, args);
              return Object(result) === result ? result : child;
            })(Array, handlers, function(){}).forEach(function(handler) {
              return handler.apply(null, args);
            });
            return this.emit.apply(this, ["after-" + eventName].concat(__slice.call(args)));
          }
        } else {
          if (queuedEvents = (_ref5 = this.queuedEventsByEventName) != null ? _ref5[eventName] : void 0) {
            return queuedEvents.push([eventName].concat(__slice.call(args)));
          } else if (handlers = (_ref6 = this.eventHandlersByEventName) != null ? _ref6[eventName] : void 0) {
            (function(func, args, ctor) {
              ctor.prototype = func.prototype;
              var child = new ctor, result = func.apply(child, args);
              return Object(result) === result ? result : child;
            })(Array, handlers, function(){}).forEach(function(handler) {
              return handler.apply(null, args);
            });
            return this.emit.apply(this, ["after-" + eventName].concat(__slice.call(args)));
          }
        }
      }
    };

    Emitter.prototype.off = function(eventNames, handler) {
      var eventHandlers, eventName, handlers, namespace, namespaceHandlers, _i, _j, _k, _l, _len, _len1, _len2, _len3, _ref1, _ref10, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
      if (eventNames) {
        _ref1 = eventNames.split(/\s+/);
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          eventName = _ref1[_i];
          if (!(eventName !== '')) {
            continue;
          }
          _ref2 = eventName.split('.'), eventName = _ref2[0], namespace = _ref2[1];
          if (eventName === '') {
            eventName = void 0;
          }
          if (namespace) {
            if (eventName) {
              handlers = (_ref3 = (_ref4 = this.eventHandlersByNamespace) != null ? (_ref5 = _ref4[namespace]) != null ? _ref5[eventName] : void 0 : void 0) != null ? _ref3 : [];
              if (handler != null) {
                removeFromArray(handlers, handler);
                this.off(eventName, handler);
              } else {
                _ref6 = (function(func, args, ctor) {
                  ctor.prototype = func.prototype;
                  var child = new ctor, result = func.apply(child, args);
                  return Object(result) === result ? result : child;
                })(Array, handlers, function(){});
                for (_j = 0, _len1 = _ref6.length; _j < _len1; _j++) {
                  handler = _ref6[_j];
                  removeFromArray(handlers, handler);
                  this.off(eventName, handler);
                }
              }
            } else {
              namespaceHandlers = (_ref7 = (_ref8 = this.eventHandlersByNamespace) != null ? _ref8[namespace] : void 0) != null ? _ref7 : {};
              if (handler != null) {
                for (eventName in namespaceHandlers) {
                  handlers = namespaceHandlers[eventName];
                  removeFromArray(handlers, handler);
                  this.off(eventName, handler);
                }
              } else {
                for (eventName in namespaceHandlers) {
                  handlers = namespaceHandlers[eventName];
                  _ref9 = (function(func, args, ctor) {
                    ctor.prototype = func.prototype;
                    var child = new ctor, result = func.apply(child, args);
                    return Object(result) === result ? result : child;
                  })(Array, handlers, function(){});
                  for (_k = 0, _len2 = _ref9.length; _k < _len2; _k++) {
                    handler = _ref9[_k];
                    removeFromArray(handlers, handler);
                    this.off(eventName, handler);
                  }
                }
              }
            }
          } else {
            eventHandlers = (_ref10 = this.eventHandlersByEventName) != null ? _ref10[eventName] : void 0;
            if (eventHandlers == null) {
              return;
            }
            if (handler == null) {
              for (_l = 0, _len3 = eventHandlers.length; _l < _len3; _l++) {
                handler = eventHandlers[_l];
                this.off(eventName, handler);
              }
              return;
            }
            if (removeFromArray(eventHandlers, handler)) {
              this.decrementSubscriptionCount(eventName);
              this.emit("" + eventName + "-subscription-removed", handler);
              if (this.getSubscriptionCount(eventName) === 0) {
                this.emit("last-" + eventName + "-subscription-removed", handler);
                delete this.eventHandlersByEventName[eventName];
              }
            }
          }
        }
      } else {
        for (eventName in this.eventHandlersByEventName) {
          if (!subscriptionRemovedPattern.test(eventName)) {
            this.off(eventName);
          }
        }
        for (eventName in this.eventHandlersByEventName) {
          this.off(eventName);
        }
        return this.eventHandlersByNamespace = {};
      }
    };

    Emitter.prototype.pauseEvents = function(eventNames) {
      var eventName, _base, _base1, _i, _len, _ref1, _results;
      if (eventNames) {
        _ref1 = eventNames.split(/\s+/);
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          eventName = _ref1[_i];
          if (!(eventName !== '')) {
            continue;
          }
          if (this.pauseCountsByEventName == null) {
            this.pauseCountsByEventName = {};
          }
          if (this.queuedEventsByEventName == null) {
            this.queuedEventsByEventName = {};
          }
          if ((_base = this.pauseCountsByEventName)[eventName] == null) {
            _base[eventName] = 0;
          }
          this.pauseCountsByEventName[eventName]++;
          _results.push((_base1 = this.queuedEventsByEventName)[eventName] != null ? (_base1 = this.queuedEventsByEventName)[eventName] : _base1[eventName] = []);
        }
        return _results;
      } else {
        if (this.globalPauseCount == null) {
          this.globalPauseCount = 0;
        }
        if (this.globalQueuedEvents == null) {
          this.globalQueuedEvents = [];
        }
        return this.globalPauseCount++;
      }
    };

    Emitter.prototype.resumeEvents = function(eventNames) {
      var event, eventName, queuedEvents, _i, _j, _len, _len1, _ref1, _ref2, _results, _results1;
      if (eventNames) {
        _ref1 = eventNames.split(/\s+/);
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          eventName = _ref1[_i];
          if (eventName !== '') {
            if (((_ref2 = this.pauseCountsByEventName) != null ? _ref2[eventName] : void 0) > 0 && --this.pauseCountsByEventName[eventName] === 0) {
              queuedEvents = this.queuedEventsByEventName[eventName];
              this.queuedEventsByEventName[eventName] = null;
              _results.push((function() {
                var _j, _len1, _results1;
                _results1 = [];
                for (_j = 0, _len1 = queuedEvents.length; _j < _len1; _j++) {
                  event = queuedEvents[_j];
                  _results1.push(this.emit.apply(this, event));
                }
                return _results1;
              }).call(this));
            } else {
              _results.push(void 0);
            }
          }
        }
        return _results;
      } else {
        for (eventName in this.pauseCountsByEventName) {
          this.resumeEvents(eventName);
        }
        if (this.globalPauseCount > 0 && --this.globalPauseCount === 0) {
          queuedEvents = this.globalQueuedEvents;
          this.globalQueuedEvents = null;
          _results1 = [];
          for (_j = 0, _len1 = queuedEvents.length; _j < _len1; _j++) {
            event = queuedEvents[_j];
            _results1.push(this.emit.apply(this, event));
          }
          return _results1;
        }
      }
    };

    Emitter.prototype.incrementSubscriptionCount = function(eventName) {
      var _base;
      if (this.subscriptionCounts == null) {
        this.subscriptionCounts = {};
      }
      if ((_base = this.subscriptionCounts)[eventName] == null) {
        _base[eventName] = 0;
      }
      return ++this.subscriptionCounts[eventName];
    };

    Emitter.prototype.decrementSubscriptionCount = function(eventName) {
      var count;
      count = --this.subscriptionCounts[eventName];
      if (count === 0) {
        delete this.subscriptionCounts[eventName];
      }
      return count;
    };

    Emitter.prototype.getSubscriptionCount = function(eventName) {
      var count, name, total, _ref1, _ref2, _ref3;
      if (eventName != null) {
        return (_ref1 = (_ref2 = this.subscriptionCounts) != null ? _ref2[eventName] : void 0) != null ? _ref1 : 0;
      } else {
        total = 0;
        _ref3 = this.subscriptionCounts;
        for (name in _ref3) {
          count = _ref3[name];
          total += count;
        }
        return total;
      }
    };

    Emitter.prototype.hasSubscriptions = function(eventName) {
      return this.getSubscriptionCount(eventName) > 0;
    };

    return Emitter;

  })(Mixin);

  removeFromArray = function(array, element) {
    var index;
    index = array.indexOf(element);
    if (index > -1) {
      array.splice(index, 1);
      return true;
    } else {
      return false;
    }
  };

}).call(this);
