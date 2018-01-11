# season - CSON Node module
[![macOS Build Status](https://travis-ci.org/atom/season.svg?branch=master)](https://travis-ci.org/atom/season) [![Windows Build Status](https://ci.appveyor.com/api/projects/status/v3bth3ooq5q8k8lx/branch/master?svg=true)](https://ci.appveyor.com/project/Atom/season) [![Dependency Status](https://david-dm.org/atom/season.svg)](https://david-dm.org/atom/season)

Read and write CSON/JSON files seamlessly.

## Installing

```sh
npm install season
```

## Building
  * Clone the repository
  * Run `npm install`
  * Run `grunt` to compile the CoffeeScript code
  * Run `grunt test` to run the specs

## Compiling CSON to JSON

This module comes with a `csonc` executable that allows you to compile a CSON
file to JSON.

To use:

```sh
npm install -g season
echo "this: 'is cson'" > file.cson
csonc file.cson --output file.json
cat file.json
{
  "this": "is cson"
}
```

## Docs

```coffeescript
CSON = require 'season'
```

### CSON.setCacheDir(cacheDirectory)

Set the cache directory to use for storing compiled CSON files.

`cacheDirectory` - Root directory path for storing compiled CSON.

### CSON.stringify(object)

Convert the object to a CSON string.

`object` - The object to convert to CSON.

Returns the CSON string representation of the given object.

### CSON.readFile(objectPath, callback)

Read the CSON or JSON object at the given path and return it to the callback
once it is read and parsed.

`objectPath` - The string path to a JSON or CSON object file.

`callback` - The function to call with the error or object once the path
             is read and parsed.

### CSON.readFileSync(objectPath)

Synchronous version of `CSON.readFile(objectPath, callback)`.

Returns the object read from the path or throws an error if reading fails.

### CSON.writeFile(objectPath, object, callback)

Write the object to the given path as either JSON or CSON depending on the
path's extension.

`objectPath` - The string path to a JSON or CSON object file.

`object` - The object to convert to a string and write to the path.

`callback` - The function to with an error object on failures.

### CSON.writeFileSync(objectPath, object)

Synchronous version of `CSON.writeFile(objectPath, object, callback)`

### CSON.isObjectPath(objectPath)

Is the given path a valid object path?

Returns `true` if the path has a `.json` or `.cson` file extension, `false`
otherwise.

### CSON.resolve(objectPath)

Resolve the path to an existent file that has a `.json` or `.cson` extension.

`objectPath` - The string path to a JSON or CSON object file with or without
               an extension.

Returns the path to an existent CSON or JSON file or `null` if none found.
