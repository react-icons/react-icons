var fs = require('fs')
var markyPackage = require('../package.json')

var info = {
  version: markyPackage.version,
  repositoryUrl: markyPackage.repository.url,
  issuesUrl: markyPackage.repository.url + '/issues'
}

var contents = JSON.stringify(info)

fs.writeFile('marky.json', contents, function (err) {
  if (err) throw err
  console.log('Built marky.json. ' + contents)
})
