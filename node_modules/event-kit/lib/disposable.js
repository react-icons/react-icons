(function() {
  var Disposable;

  module.exports = Disposable = (function() {
    Disposable.prototype.disposed = false;

    Disposable.isDisposable = function(object) {
      return typeof (object != null ? object.dispose : void 0) === "function";
    };


    /*
    Section: Construction and Destruction
     */

    function Disposable(disposalAction) {
      this.disposalAction = disposalAction;
    }

    Disposable.prototype.dispose = function() {
      if (!this.disposed) {
        this.disposed = true;
        if (typeof this.disposalAction === "function") {
          this.disposalAction();
        }
        this.disposalAction = null;
      }
    };

    return Disposable;

  })();

}).call(this);
