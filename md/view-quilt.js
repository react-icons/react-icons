
var React = require('react');
var IconBase = require('../IconBase');

export default class MdViewQuilt extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"/></g>
            </IconBase>
        );
    }
}
