(function() {
  var Emitter, Subscription,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Emitter = require('./emitter');

  module.exports = Subscription = (function(_super) {
    __extends(Subscription, _super);

    Subscription.prototype.cancelled = false;

    function Subscription(emitter, eventNames, handler) {
      this.emitter = emitter;
      this.eventNames = eventNames;
      this.handler = handler;
    }

    Subscription.prototype.off = function() {
      return this.dispose();
    };

    Subscription.prototype.dispose = function() {
      var unsubscribe, _ref;
      if (this.cancelled) {
        return;
      }
      unsubscribe = (_ref = this.emitter.off) != null ? _ref : this.emitter.removeListener;
      unsubscribe.call(this.emitter, this.eventNames, this.handler);
      this.emitter = null;
      this.handler = null;
      this.cancelled = true;
      return this.emit('cancelled');
    };

    return Subscription;

  })(Emitter);

}).call(this);
