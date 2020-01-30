<img src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg" width="120" alt="React Icons">

# [React Icons](https://react-icons.netlify.com)

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/react-icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-icons

Include popular icons in your React projects easily with `react-icons`, which utilizes ES6 imports that allows you to include only the icons that your project is using.

## Installation

### Yarn
```bash
yarn add react-icons
```

### NPM
```bash
npm install react-icons --save
```

## Usage

```jsx
import { FaBeer } from 'react-icons/fa';

class Question extends React.Component {
    render() {
        return <h3> Lets go for a <FaBeer />? </h3>
    }
}
```

[View the documentation](https://react-icons.netlify.com) for further usage examples and how to use icons from other packages. *NOTE*: each Icon package has it's own subfolder under `react-icons` you import from.

For example, to use an icon from **Material Design**, your import would be: `import { ICON_NAME } from 'react-icons/md';`

## Icons

| Icon Library                                                  | License                                                                                   |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [Ant Design Icons](https://ant.design/components/icon/)       | [MIT](https://github.com/ant-design/ant-design-icons/blob/master/LICENSE)                 |
| [Bootstrap Icons](https://icons.getbootstrap.com/)            | [MIT](https://github.com/twbs/icons/blob/master/LICENSE.md)                               |
| [Devicon](https://konpa.github.io/devicon/)                   | [MIT](https://github.com/konpa/devicon/blob/master/LICENSE)                               |
| [Feather](https://feathericons.com/)                          | [MIT](https://github.com/feathericons/feather/blob/master/LICENSE)                        |
| [Font Awesome](https://fontawesome.com/)                      | [CC BY 4.0 License](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt)  |
| [Game Icons](https://game-icons.net/)                         | [CC BY 3.0](https://github.com/game-icons/icons/blob/master/license.txt)                  |
| [Github Octicons](https://octicons.github.com/)               | [MIT](https://github.com/primer/octicons/blob/master/LICENSE)                             |
| [Ionicons](https://ionicons.com/)                             | [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)                         |
| [Material Design](https://material.io/resources/icons/)       | [Apache License 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE) |
| [Remix Icon](https://remixicon.com/)                          | [Apache License 2.0](https://github.com/Remix-Design/RemixIcon/blob/master/License)       |
| [Typicons](http://s-ings.com/typicons/)                       | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)                           |
| [Weather Icons](https://erikflowers.github.io/weather-icons/) | [SIL OFL 1.1](http://scripts.sil.org/OFL)                                                 |

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
</IconContext.Provider>
```

| Key         | Default               | Notes                           |
| ----------- | --------------------- | ------------------------------- |
| `color`     | `undefined` (inherit) |                                 |
| `size`      | `1em`                 |                                 |
| `className` | `undefined`           |                                 |
| `style`     | `undefined`           | Can overwrite size and color    |
| `attr`      | `undefined`           | Overwritten by other attributes |

## Migrating from version 2 -> 3

### Change import style

Import path has changed. You need to rewrite from the old style.

```jsx
// OLD IMPORT STYLE
import FaBeer from 'react-icons/lib/fa/beer';

class Question extends React.Component {
    render() {
        return <h3> Lets go for a <FaBeer />? </h3>
    }
}
```

```jsx
// NEW IMPORT STYLE
import { FaBeer } from 'react-icons/fa';

class Question extends React.Component {
    render() {
        return <h3> Lets go for a <FaBeer />? </h3>
    }
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

### Development

```bash
yarn
yarn submodule  # fetch icon sources
cd packages/react-icons
yarn build
```

### Preview
The preview site is the [`react-icons`](https://react-icons.netlify.com/) website, built in [NextJS](https://nextjs.org/).

```bash
cd packages/react-icons
yarn build

cd ../preview
yarn start
```

### Demo
The demo is a [Create React App](https://create-react-app.dev/) boilerplate with `react-icons` added as a dependency for easy testing.

```bash
cd packages/react-icons
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
