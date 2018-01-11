#include "onig-scanner-worker.h"

using ::v8::Array;
using ::v8::Number;
using ::v8::Value;

void OnigScannerWorker::Execute() {
  bestResult = searcher->Search(source, charOffset);
}

void OnigScannerWorker::HandleOKCallback() {
  Nan::HandleScope scope;

  if (bestResult != NULL) {
    Local<Object> result = Nan::New<Object>();
    result->Set(Nan::New<String>("index").ToLocalChecked(), Nan::New<Number>(bestResult->Index()));

    int resultCount = bestResult->Count();
    Local<Array> captures = Nan::New<Array>(resultCount);
    for (int index = 0; index < resultCount; index++) {
      int captureStart = source->ConvertUtf8OffsetToUtf16(bestResult->LocationAt(index));
      int captureEnd = source->ConvertUtf8OffsetToUtf16(bestResult->LocationAt(index) + bestResult->LengthAt(index));

      Local<Object> capture = Nan::New<Object>();
      capture->Set(Nan::New<String>("index").ToLocalChecked(), Nan::New<Number>(index));
      capture->Set(Nan::New<String>("start").ToLocalChecked(), Nan::New<Number>(captureStart));
      capture->Set(Nan::New<String>("end").ToLocalChecked(), Nan::New<Number>(captureEnd));
      capture->Set(Nan::New<String>("length").ToLocalChecked(), Nan::New<Number>(captureEnd - captureStart));
      captures->Set(index, capture);
    }
    result->Set(Nan::New<String>("captureIndices").ToLocalChecked(), captures);

    Local<Value> argv[] = {
      Nan::Null(),
      result
    };
    callback->Call(2, argv);
  } else {
    Local<Value> argv[] = {
      Nan::Null(),
      Nan::Null()
    };
    callback->Call(2, argv);
  }
}
