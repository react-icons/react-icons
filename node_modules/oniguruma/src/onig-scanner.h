#ifndef SRC_ONIG_SCANNER_H_
#define SRC_ONIG_SCANNER_H_

#include "nan.h"
#include "onig-string.h"
#include "onig-result.h"
#include "onig-reg-exp.h"
#include "onig-searcher.h"

using ::v8::Array;
using ::v8::Function;
using ::v8::Local;
using ::v8::Number;
using ::v8::Object;
using ::v8::String;
using ::v8::Value;

using ::std::shared_ptr;
using ::std::vector;

class OnigScanner : public node::ObjectWrap {
 public:
  static void Init(Local<Object> target);

 private:
  static NAN_METHOD(New);
  static NAN_METHOD(FindNextMatch);
  static NAN_METHOD(FindNextMatchSync);
  explicit OnigScanner(Local<Array> sources);
  ~OnigScanner();

  void FindNextMatch(Local<String> v8String, Local<Number> v8StartLocation, Local<Function> v8Callback);
  Local<Value> FindNextMatchSync(OnigString* onigString, Local<Number> v8StartLocation);
  Local<Value> FindNextMatchSync(Local<String> v8String, Local<Number> v8StartLocation);
  static Local<Value> CaptureIndicesForMatch(OnigResult* result, OnigString* source);

  vector<shared_ptr<OnigRegExp>> regExps;
  shared_ptr<OnigSearcher> searcher;
};

#endif  // SRC_ONIG_SCANNER_H_
