# Contributing

_Warning: Don't touch the `/fa`, `/egghead`, or `/lib` directories as they are created automatically_

- Add SVGs to `icons/egghead` like `icons/egghead/svg-kebab-case-name.svg`
- Clean up the `*.svg` files to remove comments and meta data
- Run `yarn build`
- Use yarn link to add the changed icons to the `egghead-ui` `Icon` component `types` array; you can import your new icons with the pascal cased version of the SVG, prefixed with `Egghead*` (for example, `arrow-right.svg` becomes `EggheadArrowRight`); ensure they all render correctly in the styleguide
- Once everything looks good to publish, push your updates to GitHub
- Run `yarn bump`
- Bump the `react-icons#{version}` in the `egghead-ui` package.json, then `yarn` to get the updates you pushed from this repo
