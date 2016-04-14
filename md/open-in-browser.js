
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdOpenInBrowser extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path fill="#444" d="m20 16.6l6.6 6.8h-5v10h-3.2v-10h-5z m11.6-10c1.9 0 3.4 1.6 3.4 3.4v20c0 1.8-1.6 3.4-3.4 3.4h-6.6v-3.4h6.6v-16.6h-23.2v16.6h6.6v3.4h-6.6c-1.9 0-3.4-1.6-3.4-3.4v-20c0-1.8 1.5-3.4 3.4-3.4h23.2z"/></g>
            </IconBase>
        );
    }
}
