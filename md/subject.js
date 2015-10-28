
var React = require('react');
var IconBase = require('../IconBase');

export default class MdSubject extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"/></g>
            </IconBase>
        );
    }
}
