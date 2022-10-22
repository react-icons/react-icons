#!/bin/bash -eux

time (cd packages/react-icons/ && yarn fetch)
time (cd packages/react-icons/ && yarn build)
echo VERSIONS; cat packages/react-icons/VERSIONS
(cd packages/_react-icons_all/ && npm pack |& tail)
(cd packages/_react-icons_all-files/ && npm pack |& tail)

(cd packages/preview/ && yarn build)
(cd packages/demo/ && CI=true yarn test && yarn build)
(cd packages/webpack4-test/ && CI=true yarn test)
(cd packages/ts-test/ && SKIP_PREFLIGHT_CHECK=true yarn build)
