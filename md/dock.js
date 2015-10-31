
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdDock extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m13.3 38.3h13.4v-3.3h-13.4v3.3z m13.4-36.6l-13.4 0c-1.8 0-3.3 1.5-3.3 3.3v23.3c0 1.9 1.5 3.4 3.3 3.4h13.4c1.8 0 3.3-1.5 3.3-3.4v-23.3c0-1.8-1.5-3.3-3.3-3.3z m0 23.3h-13.4v-16.7h13.4v16.7z"/></g>
            </IconBase>
        );
    }
}
