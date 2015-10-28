
var React = require('react');
var IconBase = require('../IconBase');

export default class MdSpaceBar extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M18 9v4H6V9H4v6h16V9z"/></g>
            </IconBase>
        );
    }
}
