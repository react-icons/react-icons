# Icon source lock

`icons.lock` pins each Git-backed icon set in `index.ts` to a commit. Each line
is a tab-separated `id<TAB>commit hash`, sorted by `id`.

After adding or changing an icon set, run the normal workflow:

```sh
yarn fetch --update
# Review icons.lock before continuing.
yarn check
yarn build
```

`yarn fetch` only fetches revisions already present in `icons.lock` and fails if
entries are missing or no longer used. `yarn fetch --update` explicitly replaces
the lock file with the latest revisions from the configured remote branches.
