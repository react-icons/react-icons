
let React = require('react');
let IconBase = require('react-icon-base');

export default class MdBrokenImage extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m30 19.1l5 5v7.5c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-10.9l5 5 6.6-6.7 6.8 6.7z m5-10.7v10.9l-5-5-6.6 6.7-6.8-6.7-6.6 6.7-5-5.1v-7.5c0-1.8 1.6-3.4 3.4-3.4h23.2c1.8 0 3.4 1.6 3.4 3.4z"/></g>
            </IconBase>
        );
    }
}
