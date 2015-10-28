
var React = require('react');
var IconBase = require('../IconBase');

export default class MdPowerInput extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 24 24" {...this.props}>
                <g><path d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z"/></g>
            </IconBase>
        );
    }
}
