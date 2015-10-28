
var React = require('react');
var IconBase = require('../IconBase');

export default class MdClearAll extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"/></g>
            </IconBase>
        );
    }
}
