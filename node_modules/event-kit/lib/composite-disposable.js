(function() {
  var CompositeDisposable, Disposable, assertDisposable;

  Disposable = null;

  module.exports = CompositeDisposable = (function() {
    CompositeDisposable.prototype.disposed = false;


    /*
    Section: Construction and Destruction
     */

    function CompositeDisposable() {
      var disposable, _i, _len;
      this.disposables = new Set;
      for (_i = 0, _len = arguments.length; _i < _len; _i++) {
        disposable = arguments[_i];
        this.add(disposable);
      }
    }

    CompositeDisposable.prototype.dispose = function() {
      if (!this.disposed) {
        this.disposed = true;
        this.disposables.forEach(function(disposable) {
          return disposable.dispose();
        });
        this.disposables = null;
      }
    };


    /*
    Section: Managing Disposables
     */

    CompositeDisposable.prototype.add = function() {
      var disposable, _i, _len;
      if (!this.disposed) {
        for (_i = 0, _len = arguments.length; _i < _len; _i += 1) {
          disposable = arguments[_i];
          assertDisposable(disposable);
          this.disposables.add(disposable);
        }
      }
    };

    CompositeDisposable.prototype.remove = function(disposable) {
      if (!this.disposed) {
        this.disposables["delete"](disposable);
      }
    };

    CompositeDisposable.prototype["delete"] = function(disposable) {
      this.remove(disposable);
    };

    CompositeDisposable.prototype.clear = function() {
      if (!this.disposed) {
        this.disposables.clear();
      }
    };

    return CompositeDisposable;

  })();

  assertDisposable = function(disposable) {
    if (Disposable == null) {
      Disposable = require('./disposable');
    }
    if (!Disposable.isDisposable(disposable)) {
      throw new TypeError('Arguments to CompositeDisposable.add must have a .dispose() method');
    }
  };

}).call(this);
