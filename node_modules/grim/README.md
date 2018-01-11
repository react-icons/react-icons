# Grim
[![OS X Build Status](https://travis-ci.org/atom/grim.svg)](https://travis-ci.org/atom/grim)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/i4m37pol77vygrvb/branch/master?svg=true)](https://ci.appveyor.com/project/Atom/grim/branch/master)
[![Dependency Status](https://david-dm.org/atom/language-c.svg)](https://david-dm.org/atom/language-c)

Log deprecate calls

## Installing

```sh
npm install grim
```

## Usage

```javascript
Grim = require('grim')

function someOldMethod() {
  Grim.deprecate("Use theNewMethod instead.")
}
```

To view all calls to deprecated methods use `Grim.logDeprecations()` or get direct access to the deprecated calls by using `Grim.getDeprecations()`
