#!/bin/bash -eux

(cd packages/react-icons/ && yarn build && npm pack)
(cd packages/preview/ && yarn build)
(cd packages/demo/ && yarn test && yarn build)
(cd packages/webpack4-test/ && yarn test)
(cd packages/ts-test/ && SKIP_PREFLIGHT_CHECK=true yarn build)

if [ -n "${NETLIFY_ACCESS_TOKEN:-}" ]; then
  NETLIFY_AUTH_TOKEN=$NETLIFY_ACCESS_TOKEN yarn netlify deploy --dir ./packages/preview/out --message "$TRAVIS_BRANCH $TRAVIS_COMMIT_MESSAGE";
fi
