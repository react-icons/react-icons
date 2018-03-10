(function() {
  var isEqual, isPlainObject, macModifierKeyMap, nonMacModifierKeyMap, plus, shiftKeyMap, splitKeyPath, _,
    __slice = [].slice;

  _ = require('underscore');

  macModifierKeyMap = {
    cmd: '\u2318',
    ctrl: '\u2303',
    alt: '\u2325',
    option: '\u2325',
    shift: '\u21e7',
    enter: '\u23ce',
    left: '\u2190',
    right: '\u2192',
    up: '\u2191',
    down: '\u2193'
  };

  nonMacModifierKeyMap = {
    cmd: 'Cmd',
    ctrl: 'Ctrl',
    alt: 'Alt',
    option: 'Alt',
    shift: 'Shift',
    enter: 'Enter',
    left: 'Left',
    right: 'Right',
    up: 'Up',
    down: 'Down'
  };

  shiftKeyMap = {
    '~': '`',
    '_': '-',
    '+': '=',
    '|': '\\',
    '{': '[',
    '}': ']',
    ':': ';',
    '"': '\'',
    '<': ',',
    '>': '.',
    '?': '/'
  };

  splitKeyPath = function(keyPath) {
    var char, i, keyPathArray, startIndex, _i, _len;
    startIndex = 0;
    keyPathArray = [];
    if (keyPath == null) {
      return keyPathArray;
    }
    for (i = _i = 0, _len = keyPath.length; _i < _len; i = ++_i) {
      char = keyPath[i];
      if (char === '.' && (i === 0 || keyPath[i - 1] !== '\\')) {
        keyPathArray.push(keyPath.substring(startIndex, i));
        startIndex = i + 1;
      }
    }
    keyPathArray.push(keyPath.substr(startIndex, keyPath.length));
    return keyPathArray;
  };

  isPlainObject = function(value) {
    return _.isObject(value) && !_.isArray(value);
  };

  plus = {
    adviseBefore: function(object, methodName, advice) {
      var original;
      original = object[methodName];
      return object[methodName] = function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        if (advice.apply(this, args) !== false) {
          return original.apply(this, args);
        }
      };
    },
    camelize: function(string) {
      if (string) {
        return string.replace(/[_-]+(\w)/g, function(m) {
          return m[1].toUpperCase();
        });
      } else {
        return '';
      }
    },
    capitalize: function(word) {
      if (!word) {
        return '';
      }
      if (word.toLowerCase() === 'github') {
        return 'GitHub';
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    },
    compactObject: function(object) {
      var key, newObject, value;
      newObject = {};
      for (key in object) {
        value = object[key];
        if (value != null) {
          newObject[key] = value;
        }
      }
      return newObject;
    },
    dasherize: function(string) {
      if (!string) {
        return '';
      }
      string = string[0].toLowerCase() + string.slice(1);
      return string.replace(/([A-Z])|(_)/g, function(m, letter) {
        if (letter) {
          return "-" + letter.toLowerCase();
        } else {
          return "-";
        }
      });
    },
    deepClone: function(object) {
      if (_.isArray(object)) {
        return object.map(function(value) {
          return plus.deepClone(value);
        });
      } else if (_.isObject(object) && !_.isFunction(object)) {
        return plus.mapObject(object, (function(_this) {
          return function(key, value) {
            return [key, plus.deepClone(value)];
          };
        })(this));
      } else {
        return object;
      }
    },
    deepExtend: function(target) {
      var i, key, object, result, _i, _len, _ref;
      result = target;
      i = 0;
      while (++i < arguments.length) {
        object = arguments[i];
        if (isPlainObject(result) && isPlainObject(object)) {
          _ref = Object.keys(object);
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            key = _ref[_i];
            result[key] = plus.deepExtend(result[key], object[key]);
          }
        } else {
          result = plus.deepClone(object);
        }
      }
      return result;
    },
    deepContains: function(array, target) {
      var object, _i, _len;
      if (array == null) {
        return false;
      }
      for (_i = 0, _len = array.length; _i < _len; _i++) {
        object = array[_i];
        if (_.isEqual(object, target)) {
          return true;
        }
      }
      return false;
    },
    endsWith: function(string, suffix) {
      if (suffix == null) {
        suffix = '';
      }
      if (string) {
        return string.indexOf(suffix, string.length - suffix.length) !== -1;
      } else {
        return false;
      }
    },
    escapeAttribute: function(string) {
      if (string) {
        return string.replace(/"/g, '&quot;').replace(/\n/g, '').replace(/\\/g, '-');
      } else {
        return '';
      }
    },
    escapeRegExp: function(string) {
      if (string) {
        return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      } else {
        return '';
      }
    },
    humanizeEventName: function(eventName, eventDoc) {
      var event, namespace, namespaceDoc, _ref;
      _ref = eventName.split(':'), namespace = _ref[0], event = _ref[1];
      if (event == null) {
        return plus.undasherize(namespace);
      }
      namespaceDoc = plus.undasherize(namespace);
      if (eventDoc == null) {
        eventDoc = plus.undasherize(event);
      }
      return "" + namespaceDoc + ": " + eventDoc;
    },
    humanizeKey: function(key, platform) {
      var modifierKeyMap;
      if (platform == null) {
        platform = process.platform;
      }
      if (!key) {
        return key;
      }
      modifierKeyMap = platform === 'darwin' ? macModifierKeyMap : nonMacModifierKeyMap;
      if (modifierKeyMap[key]) {
        return modifierKeyMap[key];
      } else if (key.length === 1 && (shiftKeyMap[key] != null)) {
        return [modifierKeyMap.shift, shiftKeyMap[key]];
      } else if (key.length === 1 && key === key.toUpperCase() && key.toUpperCase() !== key.toLowerCase()) {
        return [modifierKeyMap.shift, key.toUpperCase()];
      } else if (key.length === 1 || /f[0-9]{1,2}/.test(key)) {
        return key.toUpperCase();
      } else {
        if (platform === 'darwin') {
          return key;
        } else {
          return plus.capitalize(key);
        }
      }
    },
    humanizeKeystroke: function(keystroke, platform) {
      var humanizedKeystrokes, index, key, keys, keystrokes, splitKeystroke, _i, _j, _len, _len1;
      if (platform == null) {
        platform = process.platform;
      }
      if (!keystroke) {
        return keystroke;
      }
      keystrokes = keystroke.split(' ');
      humanizedKeystrokes = [];
      for (_i = 0, _len = keystrokes.length; _i < _len; _i++) {
        keystroke = keystrokes[_i];
        keys = [];
        splitKeystroke = keystroke.split('-');
        for (index = _j = 0, _len1 = splitKeystroke.length; _j < _len1; index = ++_j) {
          key = splitKeystroke[index];
          if (key === '' && splitKeystroke[index - 1] === '') {
            key = '-';
          }
          if (key) {
            keys.push(plus.humanizeKey(key, platform));
          }
        }
        keys = _.uniq(_.flatten(keys));
        if (platform === 'darwin') {
          keys = keys.join('');
        } else {
          keys = keys.join('+');
        }
        humanizedKeystrokes.push(keys);
      }
      return humanizedKeystrokes.join(' ');
    },
    isSubset: function(potentialSubset, potentialSuperset) {
      return _.every(potentialSubset, function(element) {
        return _.include(potentialSuperset, element);
      });
    },
    losslessInvert: function(hash) {
      var inverted, key, value;
      inverted = {};
      for (key in hash) {
        value = hash[key];
        if (inverted[value] == null) {
          inverted[value] = [];
        }
        inverted[value].push(key);
      }
      return inverted;
    },
    mapObject: function(object, iterator) {
      var key, newObject, value, _i, _len, _ref, _ref1;
      newObject = {};
      _ref = Object.keys(object);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        key = _ref[_i];
        _ref1 = iterator(key, object[key]), key = _ref1[0], value = _ref1[1];
        newObject[key] = value;
      }
      return newObject;
    },
    multiplyString: function(string, n) {
      var finalString, i;
      finalString = "";
      i = 0;
      while (i < n) {
        finalString += string;
        i++;
      }
      return finalString;
    },
    pluralize: function(count, singular, plural) {
      if (count == null) {
        count = 0;
      }
      if (plural == null) {
        plural = singular + 's';
      }
      if (count === 1) {
        return "" + count + " " + singular;
      } else {
        return "" + count + " " + plural;
      }
    },
    remove: function(array, element) {
      var index;
      index = array.indexOf(element);
      if (index >= 0) {
        array.splice(index, 1);
      }
      return array;
    },
    setValueForKeyPath: function(object, keyPath, value) {
      var key, keys;
      keys = splitKeyPath(keyPath);
      while (keys.length > 1) {
        key = keys.shift();
        if (object[key] == null) {
          object[key] = {};
        }
        object = object[key];
      }
      if (value != null) {
        return object[keys.shift()] = value;
      } else {
        return delete object[keys.shift()];
      }
    },
    hasKeyPath: function(object, keyPath) {
      var key, keys, _i, _len;
      keys = splitKeyPath(keyPath);
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        key = keys[_i];
        if (!object.hasOwnProperty(key)) {
          return false;
        }
        object = object[key];
      }
      return true;
    },
    spliceWithArray: function(originalArray, start, length, insertedArray, chunkSize) {
      var chunkStart, _i, _ref, _results;
      if (chunkSize == null) {
        chunkSize = 100000;
      }
      if (insertedArray.length < chunkSize) {
        return originalArray.splice.apply(originalArray, [start, length].concat(__slice.call(insertedArray)));
      } else {
        originalArray.splice(start, length);
        _results = [];
        for (chunkStart = _i = 0, _ref = insertedArray.length; chunkSize > 0 ? _i <= _ref : _i >= _ref; chunkStart = _i += chunkSize) {
          _results.push(originalArray.splice.apply(originalArray, [start + chunkStart, 0].concat(__slice.call(insertedArray.slice(chunkStart, chunkStart + chunkSize)))));
        }
        return _results;
      }
    },
    sum: function(array) {
      var elt, sum, _i, _len;
      sum = 0;
      for (_i = 0, _len = array.length; _i < _len; _i++) {
        elt = array[_i];
        sum += elt;
      }
      return sum;
    },
    uncamelcase: function(string) {
      var result;
      if (!string) {
        return '';
      }
      result = string.replace(/([A-Z])|_+/g, function(match, letter) {
        if (letter == null) {
          letter = '';
        }
        return " " + letter;
      });
      return plus.capitalize(result.trim());
    },
    undasherize: function(string) {
      if (string) {
        return string.split('-').map(plus.capitalize).join(' ');
      } else {
        return '';
      }
    },
    underscore: function(string) {
      if (!string) {
        return '';
      }
      string = string[0].toLowerCase() + string.slice(1);
      return string.replace(/([A-Z])|-+/g, function(match, letter) {
        if (letter == null) {
          letter = '';
        }
        return "_" + (letter.toLowerCase());
      });
    },
    valueForKeyPath: function(object, keyPath) {
      var key, keys, _i, _len;
      keys = splitKeyPath(keyPath);
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        key = keys[_i];
        object = object[key];
        if (object == null) {
          return;
        }
      }
      return object;
    },
    isEqual: function(a, b, aStack, bStack) {
      if (_.isArray(aStack) && _.isArray(bStack)) {
        return isEqual(a, b, aStack, bStack);
      } else {
        return isEqual(a, b);
      }
    },
    isEqualForProperties: function() {
      var a, b, properties, property, _i, _len;
      a = arguments[0], b = arguments[1], properties = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
      for (_i = 0, _len = properties.length; _i < _len; _i++) {
        property = properties[_i];
        if (!_.isEqual(a[property], b[property])) {
          return false;
        }
      }
      return true;
    }
  };

  isEqual = function(a, b, aStack, bStack) {
    var aCtor, aCtorValid, aElement, aKeyCount, aValue, bCtor, bCtorValid, bKeyCount, bValue, equal, i, key, stackIndex, _i, _len;
    if (aStack == null) {
      aStack = [];
    }
    if (bStack == null) {
      bStack = [];
    }
    if (a === b) {
      return _.isEqual(a, b);
    }
    if (_.isFunction(a) || _.isFunction(b)) {
      return _.isEqual(a, b);
    }
    stackIndex = aStack.length;
    while (stackIndex--) {
      if (aStack[stackIndex] === a) {
        return bStack[stackIndex] === b;
      }
    }
    aStack.push(a);
    bStack.push(b);
    equal = false;
    if (_.isFunction(a != null ? a.isEqual : void 0)) {
      equal = a.isEqual(b, aStack, bStack);
    } else if (_.isFunction(b != null ? b.isEqual : void 0)) {
      equal = b.isEqual(a, bStack, aStack);
    } else if (_.isArray(a) && _.isArray(b) && a.length === b.length) {
      equal = true;
      for (i = _i = 0, _len = a.length; _i < _len; i = ++_i) {
        aElement = a[i];
        if (!isEqual(aElement, b[i], aStack, bStack)) {
          equal = false;
          break;
        }
      }
    } else if (_.isRegExp(a) && _.isRegExp(b)) {
      equal = _.isEqual(a, b);
    } else if (_.isElement(a) && _.isElement(b)) {
      equal = a === b;
    } else if (_.isObject(a) && _.isObject(b)) {
      aCtor = a.constructor;
      bCtor = b.constructor;
      aCtorValid = _.isFunction(aCtor) && aCtor instanceof aCtor;
      bCtorValid = _.isFunction(bCtor) && bCtor instanceof bCtor;
      if (aCtor !== bCtor && !(aCtorValid && bCtorValid)) {
        equal = false;
      } else {
        aKeyCount = 0;
        equal = true;
        for (key in a) {
          aValue = a[key];
          if (!_.has(a, key)) {
            continue;
          }
          aKeyCount++;
          if (!(_.has(b, key) && isEqual(aValue, b[key], aStack, bStack))) {
            equal = false;
            break;
          }
        }
        if (equal) {
          bKeyCount = 0;
          for (key in b) {
            bValue = b[key];
            if (_.has(b, key)) {
              bKeyCount++;
            }
          }
          equal = aKeyCount === bKeyCount;
        }
      }
    } else {
      equal = _.isEqual(a, b);
    }
    aStack.pop();
    bStack.pop();
    return equal;
  };

  module.exports = _.extend({}, _, plus);

}).call(this);
