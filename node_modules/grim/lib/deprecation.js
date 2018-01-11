(function() {
  var Deprecation, SourceMapCache;

  SourceMapCache = {};

  module.exports = Deprecation = (function() {
    Deprecation.getFunctionNameFromCallsite = function(callsite) {};

    Deprecation.deserialize = function(_arg) {
      var deprecation, fileName, lineNumber, message, stack, stacks, _i, _len;
      message = _arg.message, fileName = _arg.fileName, lineNumber = _arg.lineNumber, stacks = _arg.stacks;
      deprecation = new Deprecation(message, fileName, lineNumber);
      for (_i = 0, _len = stacks.length; _i < _len; _i++) {
        stack = stacks[_i];
        deprecation.addStack(stack, stack.metadata);
      }
      return deprecation;
    };

    function Deprecation(message, fileName, lineNumber) {
      this.message = message;
      this.fileName = fileName;
      this.lineNumber = lineNumber;
      this.callCount = 0;
      this.stackCount = 0;
      this.stacks = {};
      this.stackCallCounts = {};
    }

    Deprecation.prototype.getFunctionNameFromCallsite = function(callsite) {
      var _ref, _ref1, _ref2;
      if (callsite.functionName != null) {
        return callsite.functionName;
      }
      if (callsite.isToplevel()) {
        return (_ref = callsite.getFunctionName()) != null ? _ref : '<unknown>';
      } else {
        if (callsite.isConstructor()) {
          return "new " + (callsite.getFunctionName());
        } else if (callsite.getMethodName() && !callsite.getFunctionName()) {
          return callsite.getMethodName();
        } else {
          return "" + (callsite.getTypeName()) + "." + ((_ref1 = (_ref2 = callsite.getMethodName()) != null ? _ref2 : callsite.getFunctionName()) != null ? _ref1 : '<anonymous>');
        }
      }
    };

    Deprecation.prototype.getLocationFromCallsite = function(callsite) {
      var column, fileName, line;
      if (callsite.location != null) {
        return callsite.location;
      }
      if (callsite.isNative()) {
        return "native";
      } else if (callsite.isEval()) {
        return "eval at " + (this.getLocationFromCallsite(callsite.getEvalOrigin()));
      } else {
        fileName = callsite.getFileName();
        line = callsite.getLineNumber();
        column = callsite.getColumnNumber();
        return "" + fileName + ":" + line + ":" + column;
      }
    };

    Deprecation.prototype.getFileNameFromCallSite = function(callsite) {
      var _ref;
      return (_ref = callsite.fileName) != null ? _ref : callsite.getFileName();
    };

    Deprecation.prototype.getOriginName = function() {
      return this.originName;
    };

    Deprecation.prototype.getMessage = function() {
      return this.message;
    };

    Deprecation.prototype.getStacks = function() {
      var location, parsedStack, parsedStacks, stack, _ref;
      parsedStacks = [];
      _ref = this.stacks;
      for (location in _ref) {
        stack = _ref[location];
        parsedStack = this.parseStack(stack);
        parsedStack.callCount = this.stackCallCounts[location];
        parsedStack.metadata = stack.metadata;
        parsedStacks.push(parsedStack);
      }
      return parsedStacks;
    };

    Deprecation.prototype.getStackCount = function() {
      return this.stackCount;
    };

    Deprecation.prototype.getCallCount = function() {
      return this.callCount;
    };

    Deprecation.prototype.addStack = function(stack, metadata) {
      var callerLocation, _base, _base1;
      if (this.originName == null) {
        this.originName = this.getFunctionNameFromCallsite(stack[0]);
      }
      if (this.fileName == null) {
        this.fileName = this.getFileNameFromCallSite(stack[0]);
      }
      if (this.lineNumber == null) {
        this.lineNumber = typeof (_base = stack[0]).getLineNumber === "function" ? _base.getLineNumber() : void 0;
      }
      this.callCount++;
      stack.metadata = metadata;
      callerLocation = this.getLocationFromCallsite(stack[1]);
      if (this.stacks[callerLocation] == null) {
        this.stacks[callerLocation] = stack;
        this.stackCount++;
      }
      if ((_base1 = this.stackCallCounts)[callerLocation] == null) {
        _base1[callerLocation] = 0;
      }
      return this.stackCallCounts[callerLocation]++;
    };

    Deprecation.prototype.parseStack = function(stack) {
      return stack.map((function(_this) {
        return function(callsite) {
          return {
            functionName: _this.getFunctionNameFromCallsite(callsite),
            location: _this.getLocationFromCallsite(callsite),
            fileName: _this.getFileNameFromCallSite(callsite)
          };
        };
      })(this));
    };

    Deprecation.prototype.serialize = function() {
      return {
        message: this.getMessage(),
        lineNumber: this.lineNumber,
        fileName: this.fileName,
        stacks: this.getStacks()
      };
    };

    return Deprecation;

  })();

}).call(this);
