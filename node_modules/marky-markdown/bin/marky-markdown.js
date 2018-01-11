#!/usr/bin/env node
var fs = require('fs')
var path = require('path')
var marky = require('..')

if (process.argv.length < 3) {
  console.log('Usage:\n\nmarky-markdown some.md > some.html')
  process.exit()
}

var filePath = path.resolve(process.cwd(), process.argv[2])

fs.readFile(filePath, function (err, data) {
  if (err) throw err
  var html = marky(data.toString())
  process.stdout.write(html)
})
