
<img src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg" width="60" alt="React Icons">

## [React Icons](http://gorangajic.github.io/react-icons/index.html)

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/react-icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-icons

Include popular icons in your React projects easly with ```react-icons```, which utilizes ES6 imports that allows you to include only the icons that your project is using.

### Installation
    npm install react-icons --save

### Usage


```javascript
import FaBeer from 'react-icons/fa/beer';

class Question extends React.Component {
    render() {
        return <h3> Lets go for a <FaBeer />? </h3>
    }
}
````

If you are not using es6 compiler like [babel](https://babeljs.io/) or [rollup.js](http://rollupjs.org/), it's possible to include icons from the compiled folder ```./lib```. Babel by [default](http://babeljs.io/docs/usage/require/#usage) will ignore ```node_modules``` so if you don't want to change the settings you will need to use files from ```./lib```

```javascript
var FaBeer = require('react-icons/lib/fa/beer');

var Question = React.createClass({
    render: function() {
        return React.createElement('h3', null,
            ' Lets go for a ', React.createElement(FaBeer, null), '? '
        );
    }
});

```

You can include icons directly from ```react-icons``` using ```import FaBeer from 'react-icons'```, but you should wait to Webpack 2 [implement](https://twitter.com/dan_abramov/status/656970508005736448) dead code elimination based on es6 imports.

Also it's possible to include the whole icon pack from:

```javascript
import * as FontAwesome from 'react-icons/fa'
```

or import multiple icons from the same pack

```javascript
import {MdCancel, MdChat, MdCheck} from 'react-icons/md';
```
every icon pack is in their own folder
* Material Design Icons => ./md
* FontAwesome => ./fa
* Typicons => ./ti
* Github Octicons => ./go
* Ionicons => ./io

to view all icons visit [docs](http://gorangajic.github.io/react-icons/)

### Icons

Currently supported icons are:
* Material Design Icons by Google https://www.google.com/design/icons/ (licence: [CC-BY 4.0](https://github.com/google/material-design-icons/blob/master/LICENSE))
* Font Awesome by Dave Gandy - http://fontawesome.io (licence: [SIL OFL 1.1](http://scripts.sil.org/OFL))
* Typicons by Stephen Hutchings - http://typicons.com (licence: [CC BY-SA](http://creativecommons.org/licenses/by-sa/3.0/))
* Github Octicons icons by Github https://octicons.github.com/ (licence: [SIL OFL 1.1](https://github.com/github/octicons/blob/master/LICENSE.txt)
* Ionicons by Ionic Framework - http://ionicons.com (licence: [MIT](https://github.com/driftyco/ionicons/blob/master/LICENSE))

You can add more icons by submitting pull requests or creating issues.

### Configuration
You can configure react-icons props in context.

```javascript
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

```javascript
<Icon size={30} color='aliceblue' style={{ ... }} />
```

### Contribution

Just add svg icons in ```./icons/:icons-name``` folder and create pull request again ```develop``` after merge I will generate React components because this process is not fully automated yet.

### svg ?
Svg is [supported](http://caniuse.com/#search=svg) by all major browsers.

### Why es6 import and not fonts?

With ```react-icons```, you can send icons that are specified instead of one big font file to the users, helping you to recognize which icons are used in your project.
## Related

- [react-svg-morph](https://github.com/gorangajic/react-svg-morph/)

### Licence

MIT

* Icons are taken from the other projects so please check each project licences accordingly.
