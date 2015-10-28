
var React = require('react');
var IconBase = require('../IconBase');

export default class MdViewArray extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"/></g>
            </IconBase>
        );
    }
}
