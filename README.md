<img src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg" width="120" alt="React Icons">

# [React Icons](https://react-icons.netlify.com)

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/react-icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-icons

Include popular icons in your React projects easly with ```react-icons```, which utilizes ES6 imports that allows you to include only the icons that your project is using.

## Installation

```js
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

If you are not using an ES6 compiler like [Babel](https://babeljs.io/) or [Rollup](http://rollupjs.org/), you can include icons from the compiled folder `./lib`.
Babel by [default](http://babeljs.io/docs/usage/require/#usage) will ignore `node_modules` so if you don't want to change the settings you will need to use files from `./lib`.

## Icons

- Font Awesome - https://fontawesome.com/
  License: [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)
- Ionicons - https://ionicons.com/
  License: [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)
- Material Design icons - http://google.github.io/material-design-icons/
  License: [Apache License Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE)
- Typicons - http://s-ings.com/typicons/
  License: [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)
- Github Octicons icons - https://octicons.github.com/
  License: [MIT](https://github.com/primer/octicons/blob/master/LICENSE)
- Feather - https://feathericons.com/
  License: [MIT](https://github.com/feathericons/feather/blob/master/LICENSE)


You can add more icons by submitting pull requests or creating issues.

## Configuration

You can configure react-icons props using [React context API](https://reactjs.org/docs/context.html).

requirement React 16.3 or higher.

```jsx
import { IconContext } from "react-icons";

<IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
  <div>
    <FaFolder />
  </div>
</IconContext.Provider>
```

key|default|memo
---|---|---
color|undefined(inherit)|
size|1em|
className|undefined|
style|undefined|can overwrite size and color
attr|undefined|overwritten by other attributes

## Migrate from version 2 -> 3

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

### Adjustment CSS

From version 3, `vertical-align: middle` is not automatically given.
Please use IconContext to specify className or style.

example for global styling

```tsx
<IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
```

example for give global className

```tsx
// app.tsx
<IconContext.Provider value={{ className: 'react-icons' }}>

// app.css
.react-icons {
  vertical-align: middle;
}
```

### TypeScript native support

Dependencies on `@types/react-icons` can be deleted.

```
$ npm remove @types/react-icons
```

## Contribute

development

```
yarn
yarn submodule  # fetch icon sources
cd packages/react-icons
yarn build
```

scripts for run demo

```
cd packages/react-icons
yarn build
cd ../demo
yarn start
```

run preview site

```
cd packages/react-icons
yarn build
cd ../preview
yarn start
```

## Tips

### SVG ?

Svg is [supported](http://caniuse.com/#search=svg) by all major browsers.

### Why ES6 import and not fonts?

With `react-icons`, you can serve only the needed icons instead of one big font file to the users, helping you to recognize which icons are used in your project.


### Related

- [react-svg-morph](https://github.com/gorangajic/react-svg-morph/)

## Licence

MIT

* Icons are taken from the other projects so please check each project licences accordingly.
