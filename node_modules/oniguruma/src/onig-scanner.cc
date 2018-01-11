#include "onig-scanner.h"
#include "onig-scanner-worker.h"

using ::v8::FunctionTemplate;

void OnigScanner::Init(Local<Object> target) {
  Local<FunctionTemplate> tpl = Nan::New<FunctionTemplate>(OnigScanner::New);
  tpl->SetClassName(Nan::New<String>("OnigScanner").ToLocalChecked());
  tpl->InstanceTemplate()->SetInternalFieldCount(1);
  tpl->PrototypeTemplate()->Set(Nan::New<String>("_findNextMatch").ToLocalChecked(), Nan::New<FunctionTemplate>(OnigScanner::FindNextMatch));
  tpl->PrototypeTemplate()->Set(Nan::New<String>("_findNextMatchSync").ToLocalChecked(), Nan::New<FunctionTemplate>(OnigScanner::FindNextMatchSync));

  target->Set(Nan::New<String>("OnigScanner").ToLocalChecked(), tpl->GetFunction());
}

void InitModule(Local<Object> target) {
  OnigScanner::Init(target);
  OnigString::Init(target);
}

NODE_MODULE(onig_scanner, InitModule)

NAN_METHOD(OnigScanner::New) {
  Nan::HandleScope scope;
  OnigScanner* scanner = new OnigScanner(Local<Array>::Cast(info[0]));
  scanner->Wrap(info.This());
  info.GetReturnValue().SetUndefined();
}

NAN_METHOD(OnigScanner::FindNextMatchSync) {
  Nan::HandleScope scope;
  OnigScanner* scanner = node::ObjectWrap::Unwrap<OnigScanner>(info.This());

  Local<Object> param1 = Local<Object>::Cast(info[0]);
  Local<Number> param2 = Local<Number>::Cast(info[1]);
  Local<Value> result;

  if (param1->IsString()) {
    Local<String> v8String = Local<String>::Cast(info[0]);
    result = scanner->FindNextMatchSync(v8String, param2);
  } else {
    OnigString* onigString = node::ObjectWrap::Unwrap<OnigString>(info[0]->ToObject());
    result = scanner->FindNextMatchSync(onigString, param2);
  }

  info.GetReturnValue().Set(result);
}

NAN_METHOD(OnigScanner::FindNextMatch) {
  Nan::HandleScope scope;
  OnigScanner* scanner = node::ObjectWrap::Unwrap<OnigScanner>(info.This());
  scanner->FindNextMatch(Local<String>::Cast(info[0]), Local<Number>::Cast(info[1]), Local<Function>::Cast(info[2]));
  info.GetReturnValue().SetUndefined();
}

OnigScanner::OnigScanner(Local<Array> sources) {
  int length = sources->Length();
  regExps.resize(length);

  for (int i = 0; i < length; i++) {
    String::Utf8Value utf8Value(sources->Get(i));
    regExps[i] = shared_ptr<OnigRegExp>(new OnigRegExp(string(*utf8Value)));
  }

  searcher = shared_ptr<OnigSearcher>(new OnigSearcher(regExps));
}

OnigScanner::~OnigScanner() {}

void OnigScanner::FindNextMatch(Local<String> v8String, Local<Number> v8StartLocation, Local<Function> v8Callback) {
  int charOffset = v8StartLocation->Value();
  Nan::Callback *callback = new Nan::Callback(v8Callback);

  OnigScannerWorker *worker = new OnigScannerWorker(callback, regExps, v8String, charOffset);
  Nan::AsyncQueueWorker(worker);
}

Local<Value> OnigScanner::FindNextMatchSync(Local<String> v8String, Local<Number> v8StartLocation) {
  OnigString* source = new OnigString(v8String);
  Local<Value> r = FindNextMatchSync(source, v8StartLocation);
  delete source;
  return r;
}

Local<Value> OnigScanner::FindNextMatchSync(OnigString* source, Local<Number> v8StartLocation) {
  int charOffset = v8StartLocation->Value();

  shared_ptr<OnigResult> bestResult = searcher->Search(source, charOffset);
  if (bestResult != NULL) {
    Local<Object> result = Nan::New<Object>();
    result->Set(Nan::New<String>("index").ToLocalChecked(), Nan::New<Number>(bestResult->Index()));
    result->Set(Nan::New<String>("captureIndices").ToLocalChecked(), CaptureIndicesForMatch(bestResult.get(), source));
    return result;
  } else {
    return Nan::Null();
  }
}

Local<Value> OnigScanner::CaptureIndicesForMatch(OnigResult* result, OnigString* source) {
  int resultCount = result->Count();
  Local<Array> captures = Nan::New<Array>(resultCount);

  for (int index = 0; index < resultCount; index++) {
    int captureStart = source->ConvertUtf8OffsetToUtf16(result->LocationAt(index));
    int captureEnd = source->ConvertUtf8OffsetToUtf16(result->LocationAt(index) + result->LengthAt(index));

    Local<Object> capture = Nan::New<Object>();
    capture->Set(Nan::New<String>("index").ToLocalChecked(), Nan::New<Number>(index));
    capture->Set(Nan::New<String>("start").ToLocalChecked(), Nan::New<Number>(captureStart));
    capture->Set(Nan::New<String>("end").ToLocalChecked(), Nan::New<Number>(captureEnd));
    capture->Set(Nan::New<String>("length").ToLocalChecked(), Nan::New<Number>(captureEnd - captureStart));
    captures->Set(index, capture);
  }

  return captures;
}
