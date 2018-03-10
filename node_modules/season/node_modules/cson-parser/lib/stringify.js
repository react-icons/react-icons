/*
 * Copyright (c) 2014, Groupon, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 *
 * Neither the name of GROUPON nor the names of its contributors may be
 * used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
 * TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
'use strict';
var jsIdentifierRE = /^[a-z_$][a-z0-9_$]*$/i;
var tripleQuotesRE = /'''/g;
var SPACES = '          ';

function newlineWrap(str) {
  return str && ('\n' + str + '\n');
}

function isObject(obj) {
  return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
}

function parseIndent(indent) {
  switch (typeof indent) {
    case 'string':
      return indent.slice(0, 10);
    case 'number':
      var n = Math.max(0, Math.min(10, Math.floor(indent)));
      return SPACES.slice(0, n);
    default:
      return 0;
  }
}

function indentLine(indent, line) {
  return indent + line;
}

function indentLines(indent, str) {
  if (str === '') {
    return str;
  }
  return str.split('\n').map(indentLine.bind(null, indent)).join('\n');
}

function buildKeyPairs(visitNode, indent, obj) {
  return Object.keys(obj).map(function addKey(key) {
    var value = obj[key];
    if (!key.match(jsIdentifierRE)) {
      key = JSON.stringify(key);
    }
    var serializedValue = visitNode(value, {
      bracesRequired: !indent
    });
    if (indent) {
      serializedValue = isObject(value) && Object.keys(value).length > 0 ?
        '\n' + (indentLines(indent, serializedValue)) : ' ' + serializedValue;
    }
    return key + ':' + serializedValue;
  });
}

function visitArray(visitNode, indent, arr) {
  var items = arr.map(function visitElement(value) {
    return visitNode(value, {
      bracesRequired: true
    });
  });
  var serializedItems = indent ?
    newlineWrap(indentLines(indent, items.join('\n'))) : items.join(',');
  return '[' + serializedItems + ']';
}

function visitObject(visitNode, indent, obj, arg) {
  var bracesRequired = arg.bracesRequired;
  var keypairs = buildKeyPairs(visitNode, indent, obj);

  if (keypairs.length === 0) return '{}';

  if (indent) {
    var keyPairLines = keypairs.join('\n');
    if (bracesRequired) {
      return '{' + (newlineWrap(indentLines(indent, keyPairLines))) + '}';
    }
    return keyPairLines;
  }

  var serializedKeyPairs = keypairs.join(',');
  if (bracesRequired) {
    return '{' + serializedKeyPairs + '}';
  }
  return serializedKeyPairs;
}

function visitString(visitNode, indent, str) {
  var string;
  if (str.indexOf('\n') === -1 || !indent) {
    return JSON.stringify(str);
  }
  string = str.replace(/\\/g, '\\\\').replace(tripleQuotesRE, "\\'''");
  return "'''" + (newlineWrap(indentLines(indent, string))) + "'''";
}

function stringify(data, visitor, indent) {
  if (typeof data === 'function' || typeof data === 'undefined') return undefined;
  indent = parseIndent(indent);

  var normalized = JSON.parse(JSON.stringify(data, visitor));

  function visitNode(node, options) {
    if (options == null) {
      options = {};
    }

    switch (typeof node) {
      case 'boolean':
        return '' + node;

      case 'number':
        if (isFinite(node)) {
          return '' + node;
        }
        return 'null';

      case 'string':
        return visitString(visitNode, indent, node, options);

      case 'object':
        if (node === null) {
          return 'null';
        } else if (Array.isArray(node)) {
          return visitArray(visitNode, indent, node, options);
        }
        return visitObject(visitNode, indent, node, options);

      default:
        return undefined;
    }
  }

  return visitNode(normalized);
}
module.exports = stringify;
