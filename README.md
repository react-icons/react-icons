<img src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg" width="120" alt="React Icons">

## [React Icons](http://gorangajic.github.io/react-icons/index.html)

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/react-icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-icons

Include popular icons in your React projects easly with ```react-icons```, which utilizes ES6 imports that allows you to include only the icons that your project is using.

### Installation

    npm install react-icons --save

### Usage

```jsx
import FaBeer from 'react-icons/lib/fa/beer';

class Question extends React.Component {
    render() {
        return <h3> Lets go for a <FaBeer />? </h3>
    }
}
```

If you are not using an ES6 compiler like [Babel](https://babeljs.io/) or [Rollup](http://rollupjs.org/), you can include icons from the compiled folder `./lib`.
Babel by [default](http://babeljs.io/docs/usage/require/#usage) will ignore `node_modules` so if you don't want to change the settings you will need to use files from `./lib`.

```jsx
var FaBeer = require('react-icons/lib/fa/beer');

var Question = React.createClass({
    render: function() {
        return React.createElement('h3', null,
            ' Lets go for a ', React.createElement(FaBeer, null), '? '
        );
    }
});

```

You can include icons directly from `react-icons` using `import FaBeer from 'react-icons'`, but you should use a builder that uses dead code elimination like Webpack 2+, based on ES6 imports.

Also it's possible to import an entire icon pack:

```jsx
import * as FontAwesome from 'react-icons/lib/fa'

class Question extends React.Component {
    render() {
        return <h3> Lets go for a <FontAwesome.FaBeer />? </h3>
    }
}
```

or import multiple icons from the same pack

```jsx
import {MdCancel, MdChat, MdCheck} from 'react-icons/md';
```

Each icon pack is in its own folder:

* Material Design Icons => `./md`
* FontAwesome => `./fa`
* Typicons => `./ti`
* Github Octicons => `./go`
* Ionicons => `./io`

To view them all, visit the [docs](http://gorangajic.github.io/react-icons/)

Also, to view and search for the necessary icons you can use [Icon Viewer](https://andy-pro.github.io/icon-viewer).

### Icons

Currently supported icons are:
* Material Design Icons by Google https://www.google.com/design/icons/ (licence: [CC-BY 4.0](https://github.com/google/material-design-icons/blob/master/LICENSE))
* Font Awesome by Dave Gandy - http://fontawesome.io (licence: [SIL OFL 1.1](http://scripts.sil.org/OFL))
* Typicons by Stephen Hutchings - http://typicons.com (licence: [CC BY-SA](http://creativecommons.org/licenses/by-sa/3.0/))
* Github Octicons icons by Github https://octicons.github.com/ (licence: [SIL OFL 1.1](https://github.com/github/octicons/blob/master/LICENSE.txt))
* Ionicons by Ionic Framework - http://ionicons.com (licence: [MIT](https://github.com/driftyco/ionicons/blob/master/LICENSE))

You can add more icons by submitting pull requests or creating issues.

### Configuration

You can configure react-icons props using context.

```jsx
class HigherOrderComponent extends Component {

    static childContextTypes = {
        reactIconBase: PropTypes.object
    };

    getChildContext() {
        return {
            reactIconBase: {
                color: 'tomato',
                size: 24,
                style: {
                    ...
                }
            }
        }
    }

    render() {
        ...
    }
}
```

Context is overriden inline.

```jsx
<Icon size={30} color="aliceblue" style={{ ... }} />
```

### Contribute

Just add/edit your SVG icons in `./icons/[icons-name]`, run `npm run build`, then create your pull request again `master`.

### SVG ?

Svg is [supported](http://caniuse.com/#search=svg) by all major browsers.

### Why ES6 import and not fonts?

With `react-icons`, you can serve only the needed icons instead of one big font file to the users, helping you to recognize which icons are used in your project.

### Using `create-react-app`?

`create-react-app` tries to load the icons as files by default, rather than running through Babel. You may therefore see an erorr message similar to "You may need an appropriate loader...". The recommended workaround is to import from `lib` instead:

```jsx
import {FaBeer} from 'react-icons/lib/fa';
```

## Related

- [react-svg-morph](https://github.com/gorangajic/react-svg-morph/)

### Licence

MIT

* Icons are taken from the other projects so please check each project licences accordingly.
