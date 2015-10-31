
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdGif extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><defs><path id="a" d="m40 40h-40v-40h40v40z"/></defs><clipPath id="b"><use overflow="visible"/></clipPath><path d="m19.2 15h2.5v10h-2.5z m-4.2 0h-5c-1 0-1.7 0.8-1.7 1.7v6.6c0 0.9 0.7 1.7 1.7 1.7h5c1 0 1.7-0.8 1.7-1.7v-3.3h-2.5v2.5h-3.4v-5h5.9v-0.8c0-0.9-0.7-1.7-1.7-1.7z m16.7 2.5v-2.5h-7.5v10h2.5v-3.3h3.3v-2.5h-3.3v-1.7z"/></g>
            </IconBase>
        );
    }
}
