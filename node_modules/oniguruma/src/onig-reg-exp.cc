#include "onig-reg-exp.h"

using ::v8::Exception;
using ::v8::String;

OnigRegExp::OnigRegExp(const string& source)
    : source_(source),
      regex_(NULL) {
  lastSearchStrUniqueId = -1;
  lastSearchPosition = -1;
  lastSearchResult = NULL;

  OnigErrorInfo error;
  const UChar* sourceData = (const UChar*)source.data();
  int status = onig_new(&regex_, sourceData, sourceData + source.length(),
                        ONIG_OPTION_CAPTURE_GROUP, ONIG_ENCODING_UTF8,
                        ONIG_SYNTAX_DEFAULT, &error);

  if (status != ONIG_NORMAL) {
    UChar errorString[ONIG_MAX_ERROR_MESSAGE_LEN];
    onig_error_code_to_str(errorString, status, &error);
    Nan::ThrowError(Exception::Error(Nan::New<String>(reinterpret_cast<char*>(errorString)).ToLocalChecked()));
  }
}

OnigRegExp::~OnigRegExp() {
  if (regex_) onig_free(regex_);
}

shared_ptr<OnigResult> OnigRegExp::Search(OnigString* str, int position) {
  if (lastSearchStrUniqueId == str->uniqueId() && lastSearchPosition <= position) {
    if (lastSearchResult == NULL || lastSearchResult->LocationAt(0) >= position) {
      return lastSearchResult;
    }
  }

  lastSearchStrUniqueId = str->uniqueId();
  lastSearchPosition = position;
  lastSearchResult = Search(str->utf8_value(), position, str->utf8_length());
  return lastSearchResult;
}

shared_ptr<OnigResult> OnigRegExp::Search(const char* data,
                                          size_t position, size_t end) {
  if (!regex_) {
    Nan::ThrowError(Exception::Error(Nan::New<String>("RegExp is not valid").ToLocalChecked()));
    return shared_ptr<OnigResult>();
  }

  const UChar* searchData = reinterpret_cast<const UChar*>(data);
  OnigRegion* region = onig_region_new();
  int status = onig_search(regex_, searchData, searchData + end,
                           searchData + position, searchData + end, region,
                           ONIG_OPTION_NONE);

  if (status != ONIG_MISMATCH) {
    return shared_ptr<OnigResult>(new OnigResult(region, -1));
  } else {
    onig_region_free(region, 1);
    return shared_ptr<OnigResult>();
  }
}
