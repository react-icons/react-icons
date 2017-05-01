# Contributing

_Warning: Don't touch the `/fa`, `/egghead`, or `/lib` directories as they are created automatically_

- Add SVGs to `icons/egghead` like `icons/egghead/svg-kebab-case-name.svg`
- Clean up the `*.svg` files to remove comments and meta data. Would be good to automate this in the future.
- Run `yarn build`
- Use yarn link to add the changed icons to the `egghead-ui` `Icon` component `types` array; you can import your new icons with the pascal cased version of the SVG, prefixed with `Egghead*` (for example, `arrow-right.svg` becomes `EggheadArrowRight`); ensure they all render correctly in the styleguide
- Check the console for errors; you may need to update attributes to work with react (like converting `stroke-width` to be `strokeWidth` etc.). Would be good to automate this in the future.
- Once everything looks good to publish, push your updates to GitHub
- Run `yarn bump`
- Bump the `react-icons#{version}` in the `egghead-ui` package.json, then `yarn` to get the updates you pushed from this repo
