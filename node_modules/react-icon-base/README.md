## react-icon-base

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/react-icon-base.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-icon-base

base element for [react-icons](https://github.com/gorangajic/react-icons)

### Installation

```
npm install react-icon-base --save
```


### Usage

```js
import { default as React } from 'react'
import { default as IconBase } from 'react-icon-base'

export default class FaHeart extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 1792 1896.0833" {...this.props}>
                <g><path d="m896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"/></g>
            </IconBase>
        )
    }
}
```

### Configuration
You can configure react-icon-base props in context.

```js
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

Context can be overriden inline, like so:

```js
<Icon size={30} color='aliceblue' style={{ ... }} />
```

### Licence

MIT
