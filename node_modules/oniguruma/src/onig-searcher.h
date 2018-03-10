#ifndef SRC_ONIG_SEARCHER_H_
#define SRC_ONIG_SEARCHER_H_

#include <vector>
#include "onig-string.h"
#include "onig-reg-exp.h"
#include "onig-result.h"

using ::std::shared_ptr;
using ::std::vector;

class OnigSearcher {
 public:
  explicit OnigSearcher(vector<shared_ptr<OnigRegExp>> regExps)
    : regExps(regExps) {}

  ~OnigSearcher() {}

  shared_ptr<OnigResult> Search(OnigString* source, int charOffset);

 private:
  vector<shared_ptr<OnigRegExp>> regExps;
};

#endif  // SRC_ONIG_SEARCHER_H_
