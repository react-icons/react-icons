
var React = require('react');
var IconBase = require('../IconBase');

export default class MdViewStream extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"/></g>
            </IconBase>
        );
    }
}
