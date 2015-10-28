
var React = require('react');
var IconBase = require('../IconBase');

export default class MdFormatStrikethrough extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"/></g>
            </IconBase>
        );
    }
}
