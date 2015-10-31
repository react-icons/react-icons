
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdIndeterminateCheckBox extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><defs><path id="a" d="m0 0h40v40h-40z"/></defs><clipPath id="b"><use overflow="visible"/></clipPath><path d="m31.7 5h-23.4c-1.8 0-3.3 1.5-3.3 3.3v23.4c0 1.8 1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3v-23.4c0-1.8-1.5-3.3-3.3-3.3z m-3.4 16.7h-16.6v-3.4h16.6v3.4z"/></g>
            </IconBase>
        );
    }
}
