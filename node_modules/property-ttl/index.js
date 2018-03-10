
module.exports = trap;

module.exports.defaultValue = null

function trap (obj, key, ttl, ongc) {
  var started
  var timer
  var theValue = module.exports.defaultValue

  Object.defineProperty(obj, key, {
    enumerable: isEnumerable(obj,key),
    configurable:true, // this property can be deleted
    get: function () {
      gcTimer()
      return theValue
    },
    set: function (v) {
      theValue = v
      gcTimer()
      return theValue
    }
  })

  return function deactivate(){
    clearTimeout(timer)
    delete obj[key]
    obj[key] = theValue;
  }

  function gcTimer () {
    if (!started) started = Date.now()

    clearTimeout(timer)
    timer = setTimeout(function () {
      theValue = null

      var timeLived = Date.now() - started
      started = 0

      if (ongc) ongc(timeLived)
    }, ttl)

    timer.unref()
  }
}


function isEnumerable(o,k){
  // if it's undefined im making a new enumerableproperty
  if(o[k] === undefined) return true
  // keys enumerates so if it's not in here it's not enumerable.
  return Object.keys(o).indexOf(k) > -1
}


