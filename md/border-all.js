
var React = require('react');
var IconBase = require('../IconBase');

export default class MdBorderAll extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z"/></g>
            </IconBase>
        );
    }
}
