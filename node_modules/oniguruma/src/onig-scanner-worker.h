#ifndef SRC_ONIG_SCANNER_WORKER_H_
#define SRC_ONIG_SCANNER_WORKER_H_

#include <memory>
#include <vector>

#include "nan.h"
#include "onig-reg-exp.h"
#include "onig-searcher.h"

using ::std::shared_ptr;
using ::std::vector;

class OnigScannerWorker : public Nan::AsyncWorker {
 public:
  OnigScannerWorker(Nan::Callback *callback,
                    vector<shared_ptr<OnigRegExp>> regExps,
                    Local<String> v8String,
                    int charOffset)
    : Nan::AsyncWorker(callback),
      charOffset(charOffset) {
        source = new OnigString(v8String);
    searcher = shared_ptr<OnigSearcher>(new OnigSearcher(regExps));
  }

  ~OnigScannerWorker() {
    delete source;
  }

  void Execute();
  void HandleOKCallback();

 private:
  OnigString* source;
  int charOffset;
  shared_ptr<OnigSearcher> searcher;
  shared_ptr<OnigResult> bestResult;
};

#endif  // SRC_ONIG_SCANNER_WORKER_H_
