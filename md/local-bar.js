
var React = require('react');
var IconBase = require('../IconBase');

export default class MdLocalBar extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M11 13v6H6v2h12v-2h-5v-6l8-8V3H3v2l8 8zM7.5 7l-2-2h13l-2 2h-9z"/></g>
            </IconBase>
        );
    }
}
