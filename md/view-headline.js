
var React = require('react');
var IconBase = require('../IconBase');

export default class MdViewHeadline extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/></g>
            </IconBase>
        );
    }
}
