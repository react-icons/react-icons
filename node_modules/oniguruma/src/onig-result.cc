#include "onig-result.h"

OnigResult::OnigResult(OnigRegion* region, int indexInScanner)
  : region_(region), indexInScanner(indexInScanner) {}

OnigResult::~OnigResult() {
  onig_region_free(region_, 1);
}

int OnigResult::Count() {
  return region_->num_regs;
}

int OnigResult::LocationAt(int index) {
  int bytes = *(region_->beg + index);
  if (bytes > 0)
    return bytes;
  else
    return 0;
}

int OnigResult::LengthAt(int index) {
  int bytes = *(region_->end + index) - *(region_->beg + index);
  if (bytes > 0)
    return bytes;
  else
    return 0;
}
