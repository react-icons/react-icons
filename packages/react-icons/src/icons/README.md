# Icon source lock

`icons.lock` pins each Git-backed icon set in `index.ts` to a commit. Each line
is a tab-separated `id<TAB>commit hash`, sorted by `id`.

After adding or changing an icon set, run the normal workflow:

```sh
yarn fetch
yarn check
yarn build
```

`yarn fetch` automatically adds a missing lock entry from the configured remote
branch. To replace all lock entries with the latest fetched revisions, run
`yarn check --update` after `yarn fetch`.
