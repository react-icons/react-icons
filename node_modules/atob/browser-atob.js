(function (w) {
  "use strict";

  var a2b = w.atob;

  function atob(str) {
    // normal window
    if ('function' === typeof a2b) {
      return a2b(str);
    }
    // browserify (web worker)
    else if ('function' === typeof Buffer) {
      return new Buffer(str, 'base64').toString('binary');
    }
    // ios web worker with base64js
    else if ('object' === typeof w.base64js) {
      // bufferToBinaryString
      // https://github.com/coolaj86/unibabel-js/blob/master/index.js#L50
      var buf = w.base64js.b64ToByteArray(str);

      return Array.prototype.map.call(buf, function (ch) {
        return String.fromCharCode(ch);
      }).join('');
    }
    // ios web worker without base64js
    else {
      throw new Error("you're probably in an ios webworker. please include use beatgammit's base64-js");
    }
  }

  w.atob = atob;

  if (typeof module !== 'undefined') {
    module.exports = atob;
  }
}(window));
