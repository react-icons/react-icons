
var React = require('react');
var IconBase = require('../IconBase');

export default class MdVideocam extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></g>
            </IconBase>
        );
    }
}
