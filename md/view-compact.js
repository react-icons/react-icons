
var React = require('react');
var IconBase = require('../IconBase');

export default class MdViewCompact extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z"/></g>
            </IconBase>
        );
    }
}
