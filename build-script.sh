#!/bin/bash -eux


if [[ -f package-lock.json ]]; then
  echo "[ERROR] package-lock.json exists!"
  exit 1
fi

(cd packages/react-icons/ && yarn type-check)
time (cd packages/react-icons/ && yarn fetch)
time (cd packages/react-icons/ && yarn build)
echo VERSIONS; cat packages/react-icons/VERSIONS
(cd packages/_react-icons_all/ && npm pack 2>&1 | tail)
(cd packages/_react-icons_all-files/ && npm pack 2>&1 | tail)

(cd packages/preview-astro/ && yarn build)
(cd packages/demo/ && CI=true yarn test && yarn build)
(cd packages/webpack4-test/ && CI=true yarn test)
(cd packages/ts-test/ && SKIP_PREFLIGHT_CHECK=true yarn build)
