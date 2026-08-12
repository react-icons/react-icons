<img src="https://raw.githubusercontent.com/react-icons/react-icons/master/react-icons.svg" width="120" alt="React Icons">

# [React Icons](https://react-icons.github.io/react-icons)

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/react-icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-icons

Include popular icons in your React projects easily with `react-icons`, which
utilizes ES6 imports that allow you to include only the icons that your project
is using.

## Package options

React Icons is available in three package formats:

| Package format        | Example package                   | Import granularity                       | Typical environments     |
| --------------------- | --------------------------------- | ---------------------------------------- | ------------------------ |
| All icon sets         | `react-icons`                     | Import icons from an icon set subpath    | Vite, Next.js, webpack   |
| Single icon set       | `@react-icons/fontawesome6`       | Import icons from the package root       | Vite, Next.js, webpack   |
| Individual icon files | `@react-icons/fontawesome6_files` | Import one icon from each module subpath | Nest.js, Gatsby.js, etc. |

## Install all icon sets

```bash
yarn add react-icons
# or
npm install react-icons
```

Import icons from the subpath for their icon set:

```jsx
import { FaBeerMugEmpty } from "react-icons/fa6";

function Question() {
  return (
    <h3>
      Lets go for a <FaBeerMugEmpty />?
    </h3>
  );
}
```

[View the documentation](https://react-icons.github.io/react-icons) for further
usage examples and icon set subpaths. For example, Material Design icons are
imported from `react-icons/md`.

## Install a single icon set (v6.0.0+)

Install a scoped package when you only need one icon set:

```bash
yarn add @react-icons/fontawesome6
# or
npm install @react-icons/fontawesome6
```

Import icons directly from the package root:

```jsx
import { FaBeerMugEmpty } from "@react-icons/fontawesome6";

function Question() {
  return (
    <h3>
      Lets go for a <FaBeerMugEmpty />?
    </h3>
  );
}
```

Each scoped package contains the same icons as its corresponding `react-icons`
subpath. For example, `@react-icons/fontawesome6` corresponds to
`react-icons/fa6`.

## Install individual icon files (v6.0.0+)

Install the files package for the icon set you need when your environment
requires each icon to have its own module.

```bash
yarn add @react-icons/fontawesome6_files
# or
npm install @react-icons/fontawesome6_files
```

Import each icon from its own module subpath:

```jsx
import { FaBeerMugEmpty } from "@react-icons/fontawesome6_files/FaBeerMugEmpty";

function Question() {
  return (
    <h3>
      Lets go for a <FaBeerMugEmpty />?
    </h3>
  );
}
```

Files packages contain the same icons as the corresponding scoped package, but
only support individual icon module imports. Importing from the package root,
such as `@react-icons/fontawesome6_files`, is not supported.

## Icons

| Icon Library                                                            | License                                                                                           | Version                                  | Count |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----: |
| [Circum Icons](https://circumicons.com/)                                | [MPL-2.0 license](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE)                 | 1.0.0                                    |   288 |
| [Font Awesome 5](https://fontawesome.com/)                              | [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)                                 | 5.15.4-3-gafecf2a                        |  1612 |
| [Font Awesome 6](https://fontawesome.com/)                              | [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)                                 | 6.5.2                                    |  2045 |
| [Ionicons 4](https://ionicons.com/)                                     | [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)                                 | 4.6.3                                    |   696 |
| [Ionicons 5](https://ionicons.com/)                                     | [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)                                 | 5.5.4                                    |  1332 |
| [Material Design icons](http://google.github.io/material-design-icons/) | [Apache License Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE) | 4.0.0-98-g9beae745bb                     |  4341 |
| [Typicons](http://s-ings.com/typicons/)                                 | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)                                   | 2.1.2                                    |   336 |
| [Github Octicons icons](https://octicons.github.com/)                   | [MIT](https://github.com/primer/octicons/blob/master/LICENSE)                                     | 18.3.0                                   |   264 |
| [Feather](https://feathericons.com/)                                    | [MIT](https://github.com/feathericons/feather/blob/master/LICENSE)                                | 4.29.1                                   |   287 |
| [Lucide](https://lucide.dev/)                                           | [ISC](https://github.com/lucide-icons/lucide/blob/main/LICENSE)                                   | v5.1.0-6-g438f572e                       |  1215 |
| [Game Icons](https://game-icons.net/)                                   | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)                                         | 12920d6565588f0512542a3cb0cdfd36a497f910 |  4040 |
| [Weather Icons](https://erikflowers.github.io/weather-icons/)           | [SIL OFL 1.1](http://scripts.sil.org/OFL)                                                         | 2.0.12                                   |   219 |
| [Devicons](https://vorillaz.github.io/devicons/)                        | [MIT](https://opensource.org/licenses/MIT)                                                        | 1.8.0                                    |   192 |
| [Ant Design Icons](https://github.com/ant-design/ant-design-icons)      | [MIT](https://opensource.org/licenses/MIT)                                                        | 4.4.2                                    |   831 |
| [Bootstrap Icons](https://github.com/twbs/icons)                        | [MIT](https://opensource.org/licenses/MIT)                                                        | 1.11.3                                   |  2716 |
| [Remix Icon](https://github.com/Remix-Design/RemixIcon)                 | [Apache License Version 2.0](http://www.apache.org/licenses/)                                     | 4.2.0                                    |  2860 |
| [Flat Color Icons](https://github.com/icons8/flat-color-icons)          | [MIT](https://opensource.org/licenses/MIT)                                                        | 1.0.2                                    |   329 |
| [Grommet-Icons](https://github.com/grommet/grommet-icons)               | [Apache License Version 2.0](http://www.apache.org/licenses/)                                     | 4.12.1                                   |   635 |
| [Heroicons](https://github.com/tailwindlabs/heroicons)                  | [MIT](https://opensource.org/licenses/MIT)                                                        | 1.0.6                                    |   460 |
| [Heroicons 2](https://github.com/tailwindlabs/heroicons)                | [MIT](https://opensource.org/licenses/MIT)                                                        | 2.1.3                                    |   888 |
| [Simple Icons](https://simpleicons.org/)                                | [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)                           | 12.14.0                                  |  3209 |
| [Simple Line Icons](https://thesabbir.github.io/simple-line-icons/)     | [MIT](https://opensource.org/licenses/MIT)                                                        | 2.5.5                                    |   189 |
| [IcoMoon Free](https://github.com/Keyamoon/IcoMoon-Free)                | [CC BY 4.0 License](https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt)             | d006795ede82361e1bac1ee76f215cf1dc51e4ca |   491 |
| [BoxIcons](https://github.com/atisawd/boxicons)                         | [MIT](https://github.com/atisawd/boxicons/blob/master/LICENSE)                                    | 2.1.4                                    |  1634 |
| [css.gg](https://github.com/astrit/css.gg)                              | [MIT](https://opensource.org/licenses/MIT)                                                        | 2.1.1                                    |   704 |
| [VS Code Icons](https://github.com/microsoft/vscode-codicons)           | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)                                         | 0.0.35                                   |   461 |
| [Tabler Icons](https://github.com/tabler/tabler-icons)                  | [MIT](https://opensource.org/licenses/MIT)                                                        | 3.2.0                                    |  5237 |
| [Themify Icons](https://github.com/lykmapipo/themify-icons)             | [MIT](https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE)    | v0.1.2-2-g9600186                        |   352 |
| [Radix Icons](https://icons.radix-ui.com)                               | [MIT](https://github.com/radix-ui/icons/blob/master/LICENSE)                                      | @radix-ui/react-icons@1.3.0-1-g94b3fcf   |   318 |
| [Phosphor Icons](https://github.com/phosphor-icons/core)                | [MIT](https://github.com/phosphor-icons/core/blob/main/LICENSE)                                   | 2.1.1                                    |  9072 |
| [Icons8 Line Awesome](https://icons8.com/line-awesome)                  | [MIT](https://github.com/icons8/line-awesome/blob/master/LICENSE.md)                              | 1.3.1                                    |  1544 |

You can add more icons by submitting pull requests or creating issues.

## Configuration

You can configure react-icons props using [React Context API](https://reactjs.org/docs/context.html).

_Requires **React 16.3** or higher._

```jsx
import { IconContext } from "react-icons";

<IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
  <div>
    <FaFolder />
  </div>
</IconContext.Provider>;
```

When using `@react-icons/*` packages directly, import `IconContext` from
`@react-icons/core` instead.

| Key         | Default               | Notes                              |
| ----------- | --------------------- | ---------------------------------- |
| `color`     | `undefined` (inherit) |                                    |
| `size`      | `1em`                 |                                    |
| `className` | `undefined`           |                                    |
| `style`     | `undefined`           | Can overwrite size and color       |
| `attr`      | `undefined`           | Overwritten by other attributes    |
| `title`     | `undefined`           | Icon description for accessibility |

## Migrating from version 2 -> 3

### Change import style

Import path has changed. You need to rewrite from the old style.

```jsx
// OLD IMPORT STYLE
import FaBeer from "react-icons/lib/fa/beer";

function Question() {
  return (
    <h3>
      Lets go for a <FaBeer />?
    </h3>
  );
}
```

```jsx
// NEW IMPORT STYLE
import { FaBeer } from "react-icons/fa";

function Question() {
  return (
    <h3>
      Lets go for a <FaBeer />?
    </h3>
  );
}
```

Ending up with a large JS bundle? Check out [this issue](https://github.com/react-icons/react-icons/issues/154).

### Adjustment CSS

From version 3, `vertical-align: middle` is not automatically given. Please use IconContext to specify className or specify an inline style.

#### Global Inline Styling

```tsx
<IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
```

#### Global `className` Styling

Component

```tsx
<IconContext.Provider value={{ className: 'react-icons' }}>
```

CSS

```css
.react-icons {
  vertical-align: middle;
}
```

### TypeScript native support

Dependencies on `@types/react-icons` can be deleted.

#### Yarn

```bash
yarn remove @types/react-icons
```

#### NPM

```bash
npm remove @types/react-icons
```

## Contributing

`./build-script.sh` will build the whole project. See also CI scripts for more information.

### Development

```bash
yarn
cd packages/react-icons
yarn fetch  # fetch icon sources
yarn build
```

### Add/Update icon set

First, check the discussion to see if anyone would like to add an icon set.

https://github.com/react-icons/react-icons/discussions/categories/new-icon-set

The SVG files to be fetched are managed in this file, and their locked Git
commits are stored in `packages/react-icons/src/icons/icons.lock`. Edit the
definition and run `yarn fetch --update`, review the lock-file changes, and then
run `yarn check && yarn build`.

https://github.com/react-icons/react-icons/blob/master/packages/react-icons/src/icons/index.ts

To fetch the currently locked revisions without changing the lock file, run
`yarn fetch`. To update all locked commits to the latest revisions, run
`yarn fetch --update`.

### Preview

> **Note**
> The project is not actively accepting PR for the preview site at this time.

The preview site is the [`react-icons`](https://react-icons.github.io/react-icons/) website, built in Astro+React.

```bash
cd packages/react-icons
yarn fetch
yarn build

cd ../preview-astro
yarn start
```

### Demo

The demo is a [Create React App](https://create-react-app.dev/) boilerplate with `react-icons` added as a dependency for easy testing.

```bash
cd packages/react-icons
yarn fetch
yarn build

cd ../demo
yarn start
```

## Why React SVG components instead of fonts?

SVG is [supported by all major browsers](http://caniuse.com/#search=svg). With `react-icons`, you can serve only the needed icons instead of one big font file to the users, helping you to recognize which icons are used in your project.

## Related Projects

- [react-svg-morph](https://github.com/gorangajic/react-svg-morph/)

## Licence

MIT

- Icons are taken from the other projects so please check each project licences accordingly.
