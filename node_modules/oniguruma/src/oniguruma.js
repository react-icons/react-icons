const {OnigScanner, OnigString} = require('../build/Release/onig_scanner.node')

class OnigRegExp {
  constructor (source) {
    this.source = source.toString()
    this.scanner = new OnigScanner([this.source])
  }

  captureIndicesForMatch (string, match) {
    if (match) {
      let {captureIndices} = match
      string = this.scanner.convertToString(string)
      for (let capture of Array.from(captureIndices)) {
        capture.match = string.slice(capture.start, capture.end)
      }
      return captureIndices
    } else {
      return null
    }
  }

  searchSync (string, startPosition) {
    if (startPosition == null) startPosition = 0
    let match = this.scanner.findNextMatchSync(string, startPosition)
    return this.captureIndicesForMatch(string, match)
  }

  search (string, startPosition, callback) {
    if (startPosition == null) { startPosition = 0 }
    if (typeof startPosition === 'function') {
      callback = startPosition
      startPosition = 0
    }

    this.scanner.findNextMatch(string, startPosition, (error, match) => {
      callback(error, this.captureIndicesForMatch(string, match))
    })
  }

  testSync (string) {
    return this.searchSync(string) != null
  }

  test (string, callback) {
    this.search(string, 0, (error, result) => callback(error, result != null))
  }
}

OnigScanner.prototype.findNextMatch = function (string, startPosition, callback) {
  if (startPosition == null) startPosition = 0
  if (typeof startPosition === 'function') {
    callback = startPosition
    startPosition = 0
  }

  string = this.convertToString(string)
  startPosition = this.convertToNumber(startPosition)

  this._findNextMatch(string, startPosition, (error, match) => {
    if (match) match.scanner = this
    return callback(error, match)
  })
}

OnigScanner.prototype.findNextMatchSync = function (string, startPosition) {
  if (startPosition == null) { startPosition = 0 }
  string = this.convertToString(string)
  startPosition = this.convertToNumber(startPosition)

  let match = this._findNextMatchSync(string, startPosition)
  if (match) match.scanner = this
  return match
}

OnigScanner.prototype.convertToString = function (value) {
  if (value === undefined) return 'undefined'
  if (value === null) return 'null'
  if (value.constructor == OnigString) return value
  return value.toString()
}

OnigScanner.prototype.convertToNumber = function (value) {
  value = parseInt(value)
  if (!isFinite(value)) { value = 0 }
  value = Math.max(value, 0)
  return value
}

OnigString.prototype.substring = function (start, end) {
  return this.content.substring(start, end)
}

OnigString.prototype.toString = function (start, end) {
  return this.content
}

Object.defineProperty(OnigString.prototype, 'length', {
  get() { return this.content.length }
})

exports.OnigScanner = OnigScanner
exports.OnigRegExp = OnigRegExp
exports.OnigString = OnigString
