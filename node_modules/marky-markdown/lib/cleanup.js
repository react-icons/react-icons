var clean = require('property-ttl')

module.exports = function (grammars) {
  var managed = 0

  var stops = []

  scan()

  return function stopAll () {
    while (stops.length) stops.shift()()
  }

  function scan () {
    while (managed < grammars.length - 1) {
      stops.push(
        clean(grammars[managed], 'repository', 2000, function () {
          scan() // start watching new grammars if they are added later.
        }),
        clean(grammars[managed++], 'initialRule', 2000)
      )
    }
  }
}
