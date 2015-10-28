
var React = require('react');
var IconBase = require('../IconBase');

export default class MdVerticalAlignCenter extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"/></g>
            </IconBase>
        );
    }
}
