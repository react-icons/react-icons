#include "onig-searcher.h"

shared_ptr<OnigResult> OnigSearcher::Search(OnigString* source, int charOffset) {
  int byteOffset = source->ConvertUtf16OffsetToUtf8(charOffset);

  int bestLocation = 0;
  shared_ptr<OnigResult> bestResult;

  vector< shared_ptr<OnigRegExp> >::iterator iter = regExps.begin();
  int index = 0;
  while (iter < regExps.end()) {
    OnigRegExp *regExp = (*iter).get();
    shared_ptr<OnigResult> result = regExp->Search(source, byteOffset);
    if (result != NULL && result->Count() > 0) {
      int location = result->LocationAt(0);

      if (bestResult == NULL || location < bestLocation) {
        bestLocation = location;
        bestResult = result;
        bestResult->SetIndex(index);
      }

      if (location == byteOffset) {
        break;
      }
    }
    ++index;
    ++iter;
  }

  return bestResult;
}
