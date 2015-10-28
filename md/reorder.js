
var React = require('react');
var IconBase = require('../IconBase');

export default class MdReorder extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/></g>
            </IconBase>
        );
    }
}
