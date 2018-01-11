# fs plus
[![macOS Build Status](https://travis-ci.org/atom/fs-plus.svg?branch=master)](https://travis-ci.org/atom/fs-plus)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/gf2tleqp0hdek3o3/branch/master?svg=true)](https://ci.appveyor.com/project/Atom/fs-plus/branch/master)
[![Dependency Status](https://david-dm.org/atom/fs-plus.svg)](https://david-dm.org/atom/fs-plus)

Yet another filesystem helper based on node's [fs](http://nodejs.org/api/fs.html)
module.  This library exports everything from node's fs module but with some
extra helpers.

## Using

```sh
npm install fs-plus
```

```coffee
fs = require 'fs-plus'
```

## Documentation

### `getHomeDirectory()`
Returns the absolute path to the home directory.

### `absolute(relativePath)`
Make the given path absolute by resolving it against the current
working directory.

### Params

 - **String** `relativePath`: The string representing the relative path. If the
   path is prefixed with '~', it will be expanded to the current user's home
   directory.

### Return

 - **String**: The absolute path or the relative path if it's unable to
   determine its real path.

### `normalize(pathToNormalize)`
Normalize the given path treating a leading `~` segment as referring to the
home directory. This method does not query the filesystem.

#### Params

 - **String** `pathToNormalize`: The string containing the abnormal path. If the
   path is prefixed with '~', it will be expanded to the current user's home
   directory.

#### Return
 - **String** Returns a normalized path.

### `tildify(pathToTildify)`
Convert an absolute path to tilde path for linux and mac:
/Users/username/dev => ~/dev

#### Params

 - **String** `pathToTildify`: The string containing the full path.

#### Return
 - **String** Returns a tildified path.

### `getAppDataDirectory()`
Get path to store application specific data.

#### Return
 - **String** Returns the absolute path or null if platform isn't supported

    - Mac: `~/Library/Application Support/`
    - Win: `%AppData%`
    - Linux: `/var/lib`

### `isAbsolute(pathToCheck)`
Is the given path absolute?

#### Params
 - **String** `pathToCheck`: The relative or absolute path to check.

#### Return
 - **Bolean** Returns `true` if the path is absolute, `false` otherwise.

### `existsSync(pathToCheck)`
Returns `true` if a file or folder at the specified path exists.

### `isDirectorySync(directoryPath)`
Returns `true` if the given path exists and is a directory.

### `isDirectory(directoryPath)`
Asynchronously checks that the given path exists and is a directory.

### `isFileSync(filePath)`
Returns true if the specified path exists and is a file.

### `isSymbolicLinkSync(symlinkPath)`
Returns `true` if the specified path is a symbolic link.

### `isSymbolicLink(symlinkPath, callback)`
Calls back with `true` if the specified path is a symbolic link.

### `isExecutableSync(pathToCheck)`
Returns `true` if the specified path is executable.

### `getSizeSync(pathToCheck)`
Returns the size of the specified path.

### `listSync(rootPath, extensions)`
Returns an Array with the paths of the files and directories
contained within the directory path. It is not recursive.

## Params
 - **String** `rootPath`: The absolute path to the directory to list.
 - **Array** `extensions`: An array of extensions to filter the results by. If none are
   given, none are filtered (optional).

### `list(rootPath, extensions)`
Asynchronously lists the files and directories in the given path. The listing is not recursive.

### `listTreeSync(rootPath)`
Get all paths under the given path.

#### Params
 - **String** `rootPath` The {String} path to start at.

#### Return
 - **Array** Returns an array of strings under the given path.

### `moveSync(source, target)`
Moves the file or directory to the target synchronously.

### `removeSync(pathToRemove)`
Removes the file or directory at the given path synchronously.

### `writeFileSync(filePath, content, options)`
Open, write, flush, and close a file, writing the given content synchronously.
It also creates the necessary parent directories.

### `writeFile(filePath, content, options, callback)`
Open, write, flush, and close a file, writing the given content
asynchronously.
It also creates the necessary parent directories.

### `copySync(sourcePath, destinationPath)`
Copies the given path recursively and synchronously.

### `makeTreeSync(directoryPath)`
Create a directory at the specified path including any missing
parent directories synchronously.

### `makeTree(directoryPath, callback)`
Create a directory at the specified path including any missing
parent directories asynchronously.

### `traverseTreeSync(rootPath, onFile, onDirectory)`
Recursively walk the given path and execute the given functions
synchronously.

#### Params
 - **String** `rootPath`: The string containing the directory to recurse into.
 - **Function** `onFile`: The function to execute on each file, receives a single argument
   the absolute path.
 - **Function** `onDirectory`: The function to execute on each directory, receives a single
   argument the absolute path (defaults to onFile). If this
   function returns a falsy value then the directory is not
   entered.

### `traverseTree(rootPath, onFile, onDirectory, onDone)`
Public: Recursively walk the given path and execute the given functions
asynchronously.

### `md5ForPath(pathToDigest)`
Hashes the contents of the given file.

#### Params
 - **String** `pathToDigest`: The string containing the absolute path.

#### Return
 - **String** Returns a string containing the MD5 hexadecimal hash.

### `resolve(loadPaths, pathToResolve, extensions)`
Finds a relative path among the given array of paths.

#### Params
 - **Array** `loadPaths`: An array of absolute and relative paths to search.
 - **String** `pathToResolve` The string containing the path to resolve.
 - **Array** `extensions` An array of extensions to pass to {resolveExtensions} in
   which case pathToResolve should not contain an extension
   (optional).

#### Return
Returns the absolute path of the file to be resolved if it's found and
undefined otherwise.

### `resolveOnLoadPath()`
Like `.resolve` but uses node's modules paths as the load paths to
search.

### `resolveExtension(pathToResolve, extensions)`
Finds the first file in the given path which matches the extension
in the order given.

#### Params
 - **String** `pathToResolve`: the string containing relative or absolute path of the
   file in question without the extension or '.'.
 - **Array** `extensions`: the ordered array of extensions to try.

#### Return
Returns the absolute path of the file if it exists with any of the given
extensions, otherwise it's undefined.

### `isCompressedExtension(ext)`
Returns true for extensions associated with compressed files.

### `isImageExtension(ext)`
Returns true for extensions associated with image files.

### `isPdfExtension(ext)`
Returns true for extensions associated with pdf files.

### `isBinaryExtension(ext)`
Returns true for extensions associated with binary files.

### `isReadmePath(readmePath)`
Returns true for files named similarily to 'README'

### `isMarkdownExtension(ext)`
Returns true for extensions associated with Markdown files.

### `isCaseInsensitive()`
Is the filesystem case insensitive?
Returns `true` if case insensitive, `false` otherwise.

### `isCaseSensitive()`
Is the filesystem case sensitive?
Returns `true` if case sensitive, `false` otherwise.
